import {
  EVNData,
  RollingStockType,
  LocomotiveType,
  InvalidCountryCodeError,
  InvalidEVNChecksumError,
  InvalidEVNLengthError,
  InvalidEVNLocomotiveTypeError,
} from './types';
import { COUNTRY_CODES, COUNTRY_NAMES } from './countryCodes';

export class EVN {
  private data: EVNData;

  constructor(data: EVNData) {
    this.data = data;
  }

  get formattedEvn(): string {
    /**
     * Format the EVN according to standard based on vehicle type:
     * - For traction vehicles (locomotives): 91 51 512 3456-7
     * - For other types: 91 51 5123 456-7
     */
    const evnClean = EVN.normalizeEvn(this.data.rawEvn);

    if (
      this.data.vehicleType === RollingStockType.TRACTION_VEHICLE ||
      this.data.vehicleType === RollingStockType.SPECIAL_VEHICLE
    ) {
      // Format for locomotives and special vehicles: XX XX XXX XXXX-X
      return `${evnClean.slice(0, 2)} ${evnClean.slice(2, 4)} ${evnClean.slice(4, 7)} ${evnClean.slice(7, 11)}-${evnClean.slice(11)}`;
    } else {
      // Format for wagons: XX XX XXXX XXX-X
      return `${evnClean.slice(0, 2)} ${evnClean.slice(2, 4)} ${evnClean.slice(4, 8)} ${evnClean.slice(8, 11)}-${evnClean.slice(11)}`;
    }
  }

  static calculateChecksum(evnDigits: string): number {
    /**
     * Calculate the check digit for an EVN.
     */
    let totalSum = 0;

    for (let i = 0; i < evnDigits.length; i++) {
      // Use alternating multiplier (2 for even positions, 1 for odd)
      const multiplier = i % 2 === 0 ? 2 : 1;

      // Multiply current digit by the appropriate multiplier
      const product = parseInt(evnDigits[i]) * multiplier;

      // If product is two digits (e.g., 12), we need to add those digits (1+2=3)
      const digitSum =
        product > 9 ? Math.floor(product / 10) + (product % 10) : product;

      // Add to running total
      totalSum += digitSum;
    }

    // Calculate check digit: if last digit is 0, return 0, else return 10-last_digit
    const lastDigit = totalSum % 10;
    return lastDigit === 0 ? 0 : 10 - lastDigit;
  }

  static determineVehicleType(evnClean: string): RollingStockType {
    /**
     * Determine the vehicle type based on the first two digits of the EVN.
     * Usually:
     * - 90-98: Traction vehicles (locomotives)
     * - 99: Special vehicles
     * - 50-79: Passenger wagons
     * - 00-49/80-89: Freight wagons
     */
    const firstTwo = parseInt(evnClean.slice(0, 2));

    if (firstTwo >= 90 && firstTwo <= 98) {
      return RollingStockType.TRACTION_VEHICLE;
    } else if (firstTwo >= 50 && firstTwo <= 79) {
      return RollingStockType.PASSENGER_WAGON;
    } else if (firstTwo === 99) {
      return RollingStockType.SPECIAL_VEHICLE;
    } else {
      // For simplicity, we treat all others as freight wagons
      return RollingStockType.FREIGHT_WAGON;
    }
  }

  static getLocomotiveType(number: string): LocomotiveType | undefined {
    /**
     * Determine locomotive type based on the type number.
     */
    try {
      return Object.values(LocomotiveType).find(type => type === number);
    } catch (error) {
      throw new InvalidEVNLocomotiveTypeError();
    }
  }

  static normalizeEvn(evn: string): string {
    /**
     * Normalize an EVN code by removing spaces and hyphens.
     */
    return evn.replace(/[^0-9]/g, '');
  }

  static validate(evn: string): boolean {
    /**
     * Validate if an EVN code is correct.
     */
    // Clean the input
    const evnClean = this.normalizeEvn(evn);

    // Check basic format (12 digits)
    if (evnClean.length !== 12) {
      throw new InvalidEVNLengthError();
    }

    // Extract check digit and number part
    const checkDigit = parseInt(evnClean.slice(-1));
    const numberPart = evnClean.slice(0, -1);

    // Validate country code
    const countryEvnCode = evnClean.slice(2, 4);
    if (!(countryEvnCode in COUNTRY_CODES)) {
      throw new InvalidCountryCodeError();
    }

    // Calculate the expected check digit
    const expectedCheckDigit = this.calculateChecksum(numberPart);

    if (checkDigit !== expectedCheckDigit) {
      throw new InvalidEVNChecksumError();
    }

    return true;
  }

  static decode(evn: string): EVN {
    /**
     * Decode an EVN code into its components.
     */
    // Clean the input
    const evnClean = this.normalizeEvn(evn);

    // Basic validation
    this.validate(evn);

    // Determine vehicle type
    const vehicleType = this.determineVehicleType(evnClean);

    const countryCode = evnClean.slice(2, 4);
    const countryIso = COUNTRY_CODES[countryCode] || 'NONE';
    const countryName = COUNTRY_NAMES[countryIso] || 'Nieznany';

    let technicalCharacteristics: string;
    let serialNumber: string;
    let locomotiveType: LocomotiveType | undefined;

    // Parse differently based on vehicle type
    if (
      vehicleType === RollingStockType.TRACTION_VEHICLE ||
      vehicleType === RollingStockType.SPECIAL_VEHICLE
    ) {
      // For locomotives: technical_chars (digits 5,6,7) and serial (digits 8,9,10,11)
      technicalCharacteristics = evnClean.slice(4, 7);
      serialNumber = evnClean.slice(7, 11);

      // Determine locomotive type
      locomotiveType = this.getLocomotiveType(evnClean[1]);
    } else {
      // For wagons: technical_chars (digits 5,6,7,8) and serial (digits 9,10,11)
      technicalCharacteristics = evnClean.slice(4, 8);
      serialNumber = evnClean.slice(8, 11);
      locomotiveType = undefined;
    }

    const data: EVNData = {
      countryCode,
      countryIso,
      countryName,
      technicalCharacteristics,
      serialNumber,
      checkDigit: evnClean[11],
      rawEvn: evn,
      vehicleType,
      locomotiveType,
    };

    return new EVN(data);
  }

  static random(
    countryCode?: string,
    vehicleType?: RollingStockType,
    locomotiveType?: LocomotiveType
  ): string {
    /**
     * Generate a random valid EVN code, optionally for a specific country and vehicle type.
     */
    const evnDigits: string[] = new Array(11).fill('0');

    // Set country code (digits 3, 4)
    if (countryCode) {
      // Validate and convert country code to numeric if needed
      if (countryCode.length === 2 && /^[A-Z]{2}$/.test(countryCode)) {
        // It's an ISO code, find the corresponding numeric code
        const foundCode = Object.entries(COUNTRY_CODES).find(
          ([, iso]) => iso === countryCode
        );
        if (foundCode) {
          countryCode = foundCode[0];
        }
      }

      if (!(countryCode in COUNTRY_CODES)) {
        throw new InvalidCountryCodeError();
      }

      evnDigits[2] = countryCode[0];
      evnDigits[3] = countryCode[1];
    } else {
      const randomCountryCode =
        Object.keys(COUNTRY_CODES)[
          Math.floor(Math.random() * Object.keys(COUNTRY_CODES).length)
        ];
      evnDigits[2] = randomCountryCode[0];
      evnDigits[3] = randomCountryCode[1];
    }

    // Set vehicle type and specific digits based on type
    if (vehicleType === RollingStockType.TRACTION_VEHICLE) {
      // First two digits for locomotive
      evnDigits[0] = '9';
      evnDigits[1] = locomotiveType || Math.floor(Math.random() * 9).toString();

      // Technical characteristics (digits 5-7)
      const techChars = Math.floor(Math.random() * 900)
        .toString()
        .padStart(3, '0');
      for (let i = 0; i < 3; i++) {
        evnDigits[4 + i] = techChars[i];
      }

      // Serial number (digits 8-11)
      const serial = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');
      for (let i = 0; i < 4; i++) {
        evnDigits[7 + i] = serial[i];
      }
    } else if (vehicleType === RollingStockType.SPECIAL_VEHICLE) {
      // Special vehicles always start with 99
      evnDigits[0] = '9';
      evnDigits[1] = '9';

      // Technical characteristics (digits 5-8)
      const techChars = (Math.floor(Math.random() * 1000) + 9000).toString();
      for (let i = 0; i < 4; i++) {
        evnDigits[4 + i] = techChars[i];
      }

      // Serial number (digits 9-11)
      const serial = (Math.floor(Math.random() * 999) + 1)
        .toString()
        .padStart(3, '0');
      for (let i = 0; i < 3; i++) {
        evnDigits[8 + i] = serial[i];
      }
    } else if (vehicleType === RollingStockType.PASSENGER_WAGON) {
      // Passenger wagons have first two digits between 50-79
      const typeCode = (Math.floor(Math.random() * 30) + 50).toString();
      evnDigits[0] = typeCode[0];
      evnDigits[1] = typeCode[1];

      // Technical characteristics (digits 5-8)
      const techChars = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');
      for (let i = 0; i < 4; i++) {
        evnDigits[4 + i] = techChars[i];
      }

      // Serial number (digits 9-11)
      const serial = (Math.floor(Math.random() * 999) + 1)
        .toString()
        .padStart(3, '0');
      for (let i = 0; i < 3; i++) {
        evnDigits[8 + i] = serial[i];
      }
    } else {
      // FREIGHT_WAGON
      // Freight wagons have first two digits in ranges 00-49 or 80-89
      const typeCode =
        Math.random() < 0.5
          ? Math.floor(Math.random() * 50)
              .toString()
              .padStart(2, '0')
          : (Math.floor(Math.random() * 10) + 80).toString();
      evnDigits[0] = typeCode[0];
      evnDigits[1] = typeCode[1];

      // Technical characteristics (digits 5-8)
      const techChars = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');
      for (let i = 0; i < 4; i++) {
        evnDigits[4 + i] = techChars[i];
      }

      // Serial number (digits 9-11)
      const serial = (Math.floor(Math.random() * 999) + 1)
        .toString()
        .padStart(3, '0');
      for (let i = 0; i < 3; i++) {
        evnDigits[8 + i] = serial[i];
      }
    }

    // Calculate check digit
    const evnWithoutCheck = evnDigits.join('');
    const checkDigit = this.calculateChecksum(evnWithoutCheck);

    return evnWithoutCheck + checkDigit.toString();
  }

  // Getters for component access
  get countryCode(): string {
    return this.data.countryCode;
  }
  get countryIso(): string {
    return this.data.countryIso;
  }
  get countryName(): string {
    return this.data.countryName;
  }
  get technicalCharacteristics(): string {
    return this.data.technicalCharacteristics;
  }
  get serialNumber(): string {
    return this.data.serialNumber;
  }
  get checkDigit(): string {
    return this.data.checkDigit;
  }
  get rawEvn(): string {
    return this.data.rawEvn;
  }
  get vehicleType(): RollingStockType {
    return this.data.vehicleType;
  }
  get locomotiveType(): LocomotiveType | undefined {
    return this.data.locomotiveType;
  }
}
