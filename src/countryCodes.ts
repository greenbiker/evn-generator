export const COUNTRY_CODES: Record<string, string> = {
  '10': 'FI', // Finlandia
  '20': 'RU', // Rosja
  '21': 'BY', // Białoruś
  '22': 'UA', // Ukraina
  '23': 'MD', // Mołdawia
  '24': 'LT', // Litwa
  '25': 'LV', // Łotwa
  '26': 'EE', // Estonia
  '27': 'KZ', // Kazachstan
  '28': 'GE', // Gruzja
  '29': 'UZ', // Uzbekistan
  '30': 'KP', // Korea Północna
  '31': 'MN', // Mongolia
  '32': 'VN', // Wietnam
  '33': 'CN', // Chiny
  '34': 'LA', // Laos
  '40': 'CU', // Kuba
  '41': 'AL', // Albania
  '42': 'JP', // Japonia
  '44': 'BA', // Bośnia i Hercegowina
  '49': 'BA', // Bośnia i Hercegowina (kod alternatywny)
  '50': 'BA', // Bośnia i Hercegowina (kod alternatywny)
  '51': 'PL', // Polska
  '52': 'BG', // Bułgaria
  '53': 'RO', // Rumunia
  '54': 'CZ', // Czechy
  '55': 'HU', // Węgry
  '56': 'SK', // Słowacja
  '57': 'AZ', // Azerbejdżan
  '58': 'AM', // Armenia
  '59': 'KG', // Kirgistan
  '60': 'IE', // Irlandia
  '61': 'KR', // Korea Południowa
  '62': 'ME', // Czarnogóra
  '65': 'MK', // Macedonia Północna
  '66': 'TJ', // Tadżykistan
  '67': 'TM', // Turkmenistan
  '68': 'AF', // Afganistan
  '70': 'GB', // Wielka Brytania
  '71': 'ES', // Hiszpania
  '72': 'RS', // Serbia
  '73': 'GR', // Grecja
  '74': 'SE', // Szwecja
  '75': 'TR', // Turcja
  '76': 'NO', // Norwegia
  '78': 'HR', // Chorwacja
  '79': 'SI', // Słowenia
  '80': 'DE', // Niemcy
  '81': 'AT', // Austria
  '82': 'LU', // Luksemburg
  '83': 'IT', // Włochy
  '84': 'NL', // Holandia
  '85': 'CH', // Szwajcaria
  '86': 'DK', // Dania
  '87': 'FR', // Francja
  '88': 'BE', // Belgia
  '89': 'TZ', // Tanzania
  '90': 'EG', // Egipt
  '91': 'TN', // Tunezja
  '92': 'DZ', // Algieria
  '93': 'MA', // Maroko
  '94': 'PT', // Portugalia
  '95': 'IL', // Izrael
  '96': 'IR', // Iran
  '97': 'SY', // Syria
  '98': 'LB', // Liban
  '99': 'IQ', // Irak
};
// Wielojęzyczne nazwy krajów
export const COUNTRY_NAMES: Record<string, Record<string, string>> = {
  FI: { pl: 'Finlandia', de: 'Finnland', en: 'Finland' },
  RU: { pl: 'Rosja', de: 'Russland', en: 'Russia' },
  BY: { pl: 'Białoruś', de: 'Belarus', en: 'Belarus' },
  UA: { pl: 'Ukraina', de: 'Ukraine', en: 'Ukraine' },
  MD: { pl: 'Mołdawia', de: 'Moldau', en: 'Moldova' },
  LT: { pl: 'Litwa', de: 'Litauen', en: 'Lithuania' },
  LV: { pl: 'Łotwa', de: 'Lettland', en: 'Latvia' },
  EE: { pl: 'Estonia', de: 'Estland', en: 'Estonia' },
  KZ: { pl: 'Kazachstan', de: 'Kasachstan', en: 'Kazakhstan' },
  GE: { pl: 'Gruzja', de: 'Georgien', en: 'Georgia' },
  UZ: { pl: 'Uzbekistan', de: 'Usbekistan', en: 'Uzbekistan' },
  KP: { pl: 'Korea Północna', de: 'Nordkorea', en: 'North Korea' },
  MN: { pl: 'Mongolia', de: 'Mongolei', en: 'Mongolia' },
  VN: { pl: 'Wietnam', de: 'Vietnam', en: 'Vietnam' },
  CN: { pl: 'Chiny', de: 'China', en: 'China' },
  LA: { pl: 'Laos', de: 'Laos', en: 'Laos' },
  CU: { pl: 'Kuba', de: 'Kuba', en: 'Cuba' },
  AL: { pl: 'Albania', de: 'Albanien', en: 'Albania' },
  JP: { pl: 'Japonia', de: 'Japan', en: 'Japan' },
  BA: {
    pl: 'Bośnia i Hercegowina',
    de: 'Bosnien und Herzegowina',
    en: 'Bosnia and Herzegovina',
  },
  PL: { pl: 'Polska', de: 'Polen', en: 'Poland' },
  BG: { pl: 'Bułgaria', de: 'Bulgarien', en: 'Bulgaria' },
  RO: { pl: 'Rumunia', de: 'Rumänien', en: 'Romania' },
  CZ: { pl: 'Czechy', de: 'Tschechien', en: 'Czech Republic' },
  HU: { pl: 'Węgry', de: 'Ungarn', en: 'Hungary' },
  SK: { pl: 'Słowacja', de: 'Slowakei', en: 'Slovakia' },
  AZ: { pl: 'Azerbejdżan', de: 'Aserbaidschan', en: 'Azerbaijan' },
  AM: { pl: 'Armenia', de: 'Armenien', en: 'Armenia' },
  KG: { pl: 'Kirgistan', de: 'Kirgisistan', en: 'Kyrgyzstan' },
  IE: { pl: 'Irlandia', de: 'Irland', en: 'Ireland' },
  KR: { pl: 'Korea Południowa', de: 'Südkorea', en: 'South Korea' },
  ME: { pl: 'Czarnogóra', de: 'Montenegro', en: 'Montenegro' },
  MK: { pl: 'Macedonia Północna', de: 'Nordmazedonien', en: 'North Macedonia' },
  TJ: { pl: 'Tadżykistan', de: 'Tadschikistan', en: 'Tajikistan' },
  TM: { pl: 'Turkmenistan', de: 'Turkmenistan', en: 'Turkmenistan' },
  AF: { pl: 'Afganistan', de: 'Afghanistan', en: 'Afghanistan' },
  GB: { pl: 'Wielka Brytania', de: 'Großbritannien', en: 'United Kingdom' },
  ES: { pl: 'Hiszpania', de: 'Spanien', en: 'Spain' },
  RS: { pl: 'Serbia', de: 'Serbien', en: 'Serbia' },
  GR: { pl: 'Grecja', de: 'Griechenland', en: 'Greece' },
  SE: { pl: 'Szwecja', de: 'Schweden', en: 'Sweden' },
  TR: { pl: 'Turcja', de: 'Türkei', en: 'Turkey' },
  NO: { pl: 'Norwegia', de: 'Norwegen', en: 'Norway' },
  HR: { pl: 'Chorwacja', de: 'Kroatien', en: 'Croatia' },
  SI: { pl: 'Słowenia', de: 'Slowenien', en: 'Slovenia' },
  DE: { pl: 'Niemcy', de: 'Deutschland', en: 'Germany' },
  AT: { pl: 'Austria', de: 'Österreich', en: 'Austria' },
  LU: { pl: 'Luksemburg', de: 'Luxemburg', en: 'Luxembourg' },
  IT: { pl: 'Włochy', de: 'Italien', en: 'Italy' },
  NL: { pl: 'Holandia', de: 'Niederlande', en: 'Netherlands' },
  CH: { pl: 'Szwajcaria', de: 'Schweiz', en: 'Switzerland' },
  DK: { pl: 'Dania', de: 'Dänemark', en: 'Denmark' },
  FR: { pl: 'Francja', de: 'Frankreich', en: 'France' },
  BE: { pl: 'Belgia', de: 'Belgien', en: 'Belgium' },
  TZ: { pl: 'Tanzania', de: 'Tansania', en: 'Tanzania' },
  EG: { pl: 'Egipt', de: 'Ägypten', en: 'Egypt' },
  TN: { pl: 'Tunezja', de: 'Tunesien', en: 'Tunisia' },
  DZ: { pl: 'Algieria', de: 'Algerien', en: 'Algeria' },
  MA: { pl: 'Maroko', de: 'Marokko', en: 'Morocco' },
  PT: { pl: 'Portugalia', de: 'Portugal', en: 'Portugal' },
  IL: { pl: 'Izrael', de: 'Israel', en: 'Israel' },
  IR: { pl: 'Iran', de: 'Iran', en: 'Iran' },
  SY: { pl: 'Syria', de: 'Syrien', en: 'Syria' },
  LB: { pl: 'Liban', de: 'Libanon', en: 'Lebanon' },
  IQ: { pl: 'Irak', de: 'Irak', en: 'Iraq' },
};

export const getCountryName = (
  isoCode: string,
  language: 'pl' | 'de' | 'en' = 'pl',
): string => {
  return COUNTRY_NAMES[isoCode]?.[language] || isoCode;
};
