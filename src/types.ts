export enum RollingStockType {
  TRACTION_VEHICLE = 'LOCOMOTIVE',
  PASSENGER_WAGON = 'PASSENGER_WAGON',
  FREIGHT_WAGON = 'FREIGHT_WAGON',
  SPECIAL_VEHICLE = 'SPECIAL_VEHICLE',
}

export enum LocomotiveType {
  STEAM_LOCOMOTIVE = '0',
  ELECTRIC_LOCOMOTIVE = '1',
  DIESEL_LOCOMOTIVE = '2',
  ELECTRIC_MULTIPLE_UNIT = '3',
  DIESEL_MULTIPLE_UNIT = '4',
  BATTERY_MULTIPLE_UNIT = '5',
  HYBRID_MULTIPLE_UNIT = '6',
  POWER_CAR = '7',
  SHUNTING_LOCOMOTIVE = '8',
}

export interface EVNData {
  countryCode: string;
  countryIso: string;
  countryName: string;
  technicalCharacteristics: string;
  serialNumber: string;
  checkDigit: string;
  rawEvn: string;
  vehicleType: RollingStockType;
  locomotiveType?: LocomotiveType;
}

export class EVNError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EVNError';
  }
}

export class InvalidCountryCodeError extends EVNError {
  constructor() {
    super('Invalid country code');
  }
}

export class InvalidEVNChecksumError extends EVNError {
  constructor() {
    super('Invalid EVN checksum');
  }
}

export class InvalidEVNLengthError extends EVNError {
  constructor() {
    super('Invalid EVN length - must be 12 digits');
  }
}

export class InvalidEVNLocomotiveTypeError extends EVNError {
  constructor() {
    super('Invalid locomotive type');
  }
}
