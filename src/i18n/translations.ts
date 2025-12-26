export interface Translations {
  common: {
    generator: string;
    validator: string;
    decoder: string;
    country: string;
    vehicleType: string;
    locomotiveType: string;
    optional: string;
    random: string;
    generate: string;
    validate: string;
    decode: string;
    checkValidity: string;
    error: string;
    success: string;
  };
  generator: {
    title: string;
    generateEvn: string;
    generated: string;
    formatted: string;
  };
  validator: {
    title: string;
    enterEvn: string;
    validEvn: string;
    invalidEvn: string;
    placeholder: string;
  };
  decoder: {
    title: string;
    enterEvn: string;
    evnInfo: string;
    originalCode: string;
    formattedCode: string;
    technicalCharacteristics: string;
    serialNumber: string;
    checkDigit: string;
    placeholder: string;
  };
  vehicleTypes: {
    LOCOMOTIVE: string;
    PASSENGER_WAGON: string;
    FREIGHT_WAGON: string;
    SPECIAL_VEHICLE: string;
  };
  locomotiveTypes: {
    STEAM_LOCOMOTIVE: string;
    ELECTRIC_LOCOMOTIVE: string;
    DIESEL_LOCOMOTIVE: string;
    ELECTRIC_MULTIPLE_UNIT: string;
    DIESEL_MULTIPLE_UNIT: string;
    BATTERY_MULTIPLE_UNIT: string;
    HYBRID_MULTIPLE_UNIT: string;
    POWER_CAR: string;
    SHUNTING_LOCOMOTIVE: string;
  };
  errors: {
    invalidCountryCode: string;
    invalidChecksum: string;
    invalidLength: string;
    invalidLocomotiveType: string;
    enterEvn: string;
    validationError: string;
    decodingError: string;
    generationError: string;
  };
  footer: {
    description: string;
    evnDescription: string;
  };
  header: {
    title: string;
    description: string;
  };
}

export const translations = {
  pl: {
    common: {
      generator: 'Generator',
      validator: 'Walidator',
      decoder: 'Dekoder',
      country: 'Kraj',
      vehicleType: 'Typ pojazdu',
      locomotiveType: 'Typ lokomotywy',
      optional: 'opcjonalnie',
      random: 'Losowy',
      generate: 'Wygeneruj',
      validate: 'Sprawdź',
      decode: 'Dekoduj',
      checkValidity: 'Sprawdź poprawność',
      error: 'Błąd',
      success: 'Sukces',
    },
    generator: {
      title: '🚂 Generator kodów EVN',
      generateEvn: 'Wygeneruj kod EVN',
      generated: '✅ Wygenerowany kod EVN:',
      formatted: 'Sformatowany:',
    },
    validator: {
      title: '🔍 Walidator kodów EVN',
      enterEvn: 'Wprowadź kod EVN',
      validEvn: 'Kod EVN jest poprawny!',
      invalidEvn: 'Kod EVN jest niepoprawny',
      placeholder: 'np. 94 51 2150 054-6 lub 94512150054-6',
    },
    decoder: {
      title: '🔎 Dekoder kodów EVN',
      enterEvn: 'Kod EVN:',
      evnInfo: '📋 Informacje o kodzie EVN:',
      originalCode: 'Kod oryginalny:',
      formattedCode: 'Kod sformatowany:',
      technicalCharacteristics: 'Charakterystyki techniczne:',
      serialNumber: 'Numer seryjny:',
      checkDigit: 'Cyfra kontrolna:',
      placeholder: 'np. 94 51 2150 054-6 lub 94512150054-6',
    },
    vehicleTypes: {
      LOCOMOTIVE: 'Pojazd trakcyjny',
      PASSENGER_WAGON: 'Wagon pasażerski',
      FREIGHT_WAGON: 'Wagon towarowy',
      SPECIAL_VEHICLE: 'Pojazd specjalny',
    },
    locomotiveTypes: {
      STEAM_LOCOMOTIVE: 'Lokomotywa parowa',
      ELECTRIC_LOCOMOTIVE: 'Lokomotywa elektryczna',
      DIESEL_LOCOMOTIVE: 'Lokomotywa spalinowa',
      ELECTRIC_MULTIPLE_UNIT: 'Elektryczny zespół trakcyjny',
      DIESEL_MULTIPLE_UNIT: 'Spalinowy zespół trakcyjny',
      BATTERY_MULTIPLE_UNIT: 'Akumulatorowy zespół trakcyjny',
      HYBRID_MULTIPLE_UNIT: 'Hybrydowy zespół trakcyjny',
      POWER_CAR: 'Wagon napędowy',
      SHUNTING_LOCOMOTIVE: 'Lokomotywa manewrowa',
    },
    errors: {
      invalidCountryCode: 'Nieprawidłowy kod kraju',
      invalidChecksum: 'Nieprawidłowa suma kontrolna EVN',
      invalidLength: 'Nieprawidłowa długość EVN - musi mieć 12 cyfr',
      invalidLocomotiveType: 'Nieprawidłowy typ lokomotywy',
      enterEvn: 'Wprowadź kod EVN',
      validationError: 'Wystąpił błąd podczas walidacji',
      decodingError: 'Wystąpił błąd podczas dekodowania',
      generationError: 'Wystąpił błąd podczas generowania',
    },
    footer: {
      description:
        'Generator kodów EVN zgodnych z międzynarodowymi standardami kolejowymi.',
      evnDescription:
        'EVN (European Vehicle Number) to ujednolicony system numeracji taboru kolejowego w Europie.',
    },
    header: {
      title: '🚂 Generator kodów EVN',
      description:
        'Narzędzie do generowania, walidacji i dekodowania kodów EVN dla taboru kolejowego',
    },
  } as Translations,
  en: {
    common: {
      generator: 'Generator',
      validator: 'Validator',
      decoder: 'Decoder',
      country: 'Country',
      vehicleType: 'Vehicle Type',
      locomotiveType: 'Locomotive Type',
      optional: 'optional',
      random: 'Random',
      generate: 'Generate',
      validate: 'Validate',
      decode: 'Decode',
      checkValidity: 'Check Validity',
      error: 'Error',
      success: 'Success',
    },
    generator: {
      title: '🚂 EVN Code Generator',
      generateEvn: 'Generate EVN Code',
      generated: '✅ Generated EVN Code:',
      formatted: 'Formatted:',
    },
    validator: {
      title: '🔍 EVN Code Validator',
      enterEvn: 'Enter EVN Code',
      validEvn: 'EVN code is valid!',
      invalidEvn: 'EVN code is invalid',
      placeholder: 'e.g. 94 51 2150 054-6 or 94512150054-6',
    },
    decoder: {
      title: '🔎 EVN Code Decoder',
      enterEvn: 'EVN Code:',
      evnInfo: '📋 EVN Code Information:',
      originalCode: 'Original code:',
      formattedCode: 'Formatted code:',
      technicalCharacteristics: 'Technical characteristics:',
      serialNumber: 'Serial number:',
      checkDigit: 'Check digit:',
      placeholder: 'e.g. 94 51 2150 054-6 or 94512150054-6',
    },
    vehicleTypes: {
      LOCOMOTIVE: 'Traction Vehicle',
      PASSENGER_WAGON: 'Passenger Wagon',
      FREIGHT_WAGON: 'Freight Wagon',
      SPECIAL_VEHICLE: 'Special Vehicle',
    },
    locomotiveTypes: {
      STEAM_LOCOMOTIVE: 'Steam Locomotive',
      ELECTRIC_LOCOMOTIVE: 'Electric Locomotive',
      DIESEL_LOCOMOTIVE: 'Diesel Locomotive',
      ELECTRIC_MULTIPLE_UNIT: 'Electric Multiple Unit',
      DIESEL_MULTIPLE_UNIT: 'Diesel Multiple Unit',
      BATTERY_MULTIPLE_UNIT: 'Battery Multiple Unit',
      HYBRID_MULTIPLE_UNIT: 'Hybrid Multiple Unit',
      POWER_CAR: 'Power Car',
      SHUNTING_LOCOMOTIVE: 'Shunting Locomotive',
    },
    errors: {
      invalidCountryCode: 'Invalid country code',
      invalidChecksum: 'Invalid EVN checksum',
      invalidLength: 'Invalid EVN length - must be 12 digits',
      invalidLocomotiveType: 'Invalid locomotive type',
      enterEvn: 'Enter EVN code',
      validationError: 'An error occurred during validation',
      decodingError: 'An error occurred during decoding',
      generationError: 'An error occurred during generation',
    },
    footer: {
      description:
        'EVN code generator compliant with international railway standards.',
      evnDescription:
        'EVN (European Vehicle Number) is a unified numbering system for railway rolling stock in Europe.',
    },
    header: {
      title: '🚂 EVN Code Generator',
      description:
        'Tool for generating, validating and decoding EVN codes for railway rolling stock',
    },
  } as Translations,
  de: {
    common: {
      generator: 'Generator',
      validator: 'Validator',
      decoder: 'Decoder',
      country: 'Land',
      vehicleType: 'Fahrzeugtyp',
      locomotiveType: 'Lokomotivtyp',
      optional: 'optional',
      random: 'Zufällig',
      generate: 'Generieren',
      validate: 'Validieren',
      decode: 'Dekodieren',
      checkValidity: 'Gültigkeit prüfen',
      error: 'Fehler',
      success: 'Erfolg',
    },
    generator: {
      title: '🚂 EVN-Code Generator',
      generateEvn: 'EVN-Code generieren',
      generated: '✅ Generierter EVN-Code:',
      formatted: 'Formatiert:',
    },
    validator: {
      title: '🔍 EVN-Code Validator',
      enterEvn: 'EVN-Code eingeben',
      validEvn: 'EVN-Code ist gültig!',
      invalidEvn: 'EVN-Code ist ungültig',
      placeholder: 'z.B. 94 51 2150 054-6 oder 94512150054-6',
    },
    decoder: {
      title: '🔎 EVN-Code Decoder',
      enterEvn: 'EVN-Code:',
      evnInfo: '📋 EVN-Code Informationen:',
      originalCode: 'Originalcode:',
      formattedCode: 'Formatierter Code:',
      technicalCharacteristics: 'Technische Merkmale:',
      serialNumber: 'Seriennummer:',
      checkDigit: 'Prüfziffer:',
      placeholder: 'z.B. 94 51 2150 054-6 oder 94512150054-6',
    },
    vehicleTypes: {
      LOCOMOTIVE: 'Triebfahrzeug',
      PASSENGER_WAGON: 'Personenwagen',
      FREIGHT_WAGON: 'Güterwagen',
      SPECIAL_VEHICLE: 'Spezialfahrzeug',
    },
    locomotiveTypes: {
      STEAM_LOCOMOTIVE: 'Dampflokomotive',
      ELECTRIC_LOCOMOTIVE: 'Elektrolokomotive',
      DIESEL_LOCOMOTIVE: 'Diesellokomotive',
      ELECTRIC_MULTIPLE_UNIT: 'Elektrischer Triebzug',
      DIESEL_MULTIPLE_UNIT: 'Diesel-Triebzug',
      BATTERY_MULTIPLE_UNIT: 'Batterie-Triebzug',
      HYBRID_MULTIPLE_UNIT: 'Hybrid-Triebzug',
      POWER_CAR: 'Triebwagen',
      SHUNTING_LOCOMOTIVE: 'Rangierlokomotive',
    },
    errors: {
      invalidCountryCode: 'Ungültiger Ländercode',
      invalidChecksum: 'Ungültige EVN-Prüfsumme',
      invalidLength: 'Ungültige EVN-Länge - muss 12 Ziffern haben',
      invalidLocomotiveType: 'Ungültiger Lokomotivtyp',
      enterEvn: 'EVN-Code eingeben',
      validationError: 'Ein Fehler ist bei der Validierung aufgetreten',
      decodingError: 'Ein Fehler ist bei der Dekodierung aufgetreten',
      generationError: 'Ein Fehler ist bei der Generierung aufgetreten',
    },
    footer: {
      description:
        'EVN-Code Generator konform mit internationalen Eisenbahnstandards.',
      evnDescription:
        'EVN (European Vehicle Number) ist ein einheitliches Nummerierungssystem für Eisenbahnfahrzeuge in Europa.',
    },
    header: {
      title: '🚂 EVN-Code Generator',
      description:
        'Werkzeug zum Generieren, Validieren und Dekodieren von EVN-Codes für Eisenbahnfahrzeuge',
    },
  } as Translations,
};

export type Language = keyof typeof translations;
