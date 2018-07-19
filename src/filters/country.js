const countriesByCode = {
  AF: 'Afganistan',
  AL: 'Albania',
  DZ: 'Algieria',
  AD: 'Andora',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarktyka',
  AG: 'Antigua i Barbuda',
  SA: 'Arabia Saudyjska',
  AR: 'Argentyna',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbejdżan',
  BS: 'Bahamy',
  BH: 'Bahrajn',
  BD: 'Bangladesz',
  BB: 'Barbados',
  BE: 'Belgia',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermudy',
  BT: 'Bhutan',
  BY: 'Białoruś',
  BO: 'Boliwia',
  BQ: 'Bonaire, Sint Eustatius i Saba',
  BA: 'Bośnia i Hercegowina',
  BW: 'Botswana',
  BR: 'Brazylia',
  BN: 'Brunei',
  IO: 'Brytyjskie Terytorium Oceanu Indyjskiego',
  VG: 'Brytyjskie Wyspy Dziewicze',
  BG: 'Bułgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CL: 'Chile',
  CN: 'Chiny',
  HR: 'Chorwacja',
  CW: 'Curaçao',
  CY: 'Cypr',
  TD: 'Czad',
  ME: 'Czarnogóra',
  CZ: 'Czechy',
  UM: 'Dalekie Wyspy Mniejsze Stanów Zjednoczonych',
  DK: 'Dania',
  CD: 'Demokratyczna Republika Konga',
  DM: 'Dominika',
  DO: 'Dominikana',
  DJ: 'Dżibuti',
  EG: 'Egipt',
  EC: 'Ekwador',
  ER: 'Erytrea',
  EE: 'Estonia',
  ET: 'Etiopia',
  FK: 'Falklandy',
  FJ: 'Fidżi',
  PH: 'Filipiny',
  FI: 'Finlandia',
  FR: 'Francja',
  TF: 'Francuskie Terytoria Południowe i Antarktyczne',
  GA: 'Gabon',
  GM: 'Gambia',
  GS: 'Georgia Południowa i Sandwich Południowy',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Grecja',
  GD: 'Grenada',
  GL: 'Grenlandia',
  GE: 'Gruzja',
  GU: 'Guam',
  GG: 'Guernsey',
  GF: 'Gujana Francuska',
  GY: 'Gujana',
  GP: 'Gwadelupa',
  GT: 'Gwatemala',
  GW: 'Gwinea Bissau',
  GQ: 'Gwinea Równikowa',
  GN: 'Gwinea',
  HT: 'Haiti',
  ES: 'Hiszpania',
  NL: 'Holandia',
  HN: 'Honduras',
  HK: 'Hongkong',
  IN: 'Indie',
  ID: 'Indonezja',
  IQ: 'Irak',
  IR: 'Iran',
  IE: 'Irlandia',
  IS: 'Islandia',
  IL: 'Izrael',
  JM: 'Jamajka',
  JP: 'Japonia',
  YE: 'Jemen',
  JE: 'Jersey',
  JO: 'Jordania',
  KY: 'Kajmany',
  KH: 'Kambodża',
  CM: 'Kamerun',
  CA: 'Kanada',
  QA: 'Katar',
  KZ: 'Kazachstan',
  KE: 'Kenia',
  KG: 'Kirgistan',
  KI: 'Kiribati',
  CO: 'Kolumbia',
  KM: 'Komory',
  CG: 'Kongo',
  KR: 'Korea Południowa',
  KP: 'Korea Północna',
  CR: 'Kostaryka',
  CU: 'Kuba',
  KW: 'Kuwejt',
  LA: 'Laos',
  LS: 'Lesotho',
  LB: 'Liban',
  LR: 'Liberia',
  LY: 'Libia',
  LI: 'Liechtenstein',
  LT: 'Litwa',
  LU: 'Luksemburg',
  LV: 'Łotwa',
  MK: 'Macedonia',
  MG: 'Madagaskar',
  YT: 'Majotta',
  MO: 'Makau',
  MW: 'Malawi',
  MV: 'Malediwy',
  MY: 'Malezja',
  ML: 'Mali',
  MT: 'Malta',
  MP: 'Mariany Północne',
  MA: 'Maroko',
  MQ: 'Martynika',
  MR: 'Mauretania',
  MU: 'Mauritius',
  MX: 'Meksyk',
  FM: 'Mikronezja',
  MM: 'Mjanma',
  MD: 'Mołdawia',
  MC: 'Monako',
  MN: 'Mongolia',
  MS: 'Montserrat',
  MZ: 'Mozambik',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  DE: 'Niemcy',
  NE: 'Niger',
  NG: 'Nigeria',
  NI: 'Nikaragua',
  NU: 'Niue',
  NF: 'Norfolk',
  NO: 'Norwegia',
  NC: 'Nowa Kaledonia',
  NZ: 'Nowa Zelandia',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestyna',
  PA: 'Panama',
  PG: 'Papua-Nowa Gwinea',
  PY: 'Paragwaj',
  PE: 'Peru',
  PN: 'Pitcairn',
  PF: 'Polinezja Francuska',
  PL: 'Polska',
  PR: 'Portoryko',
  PT: 'Portugalia',
  ZA: 'Południowa Afryka',
  CF: 'Republika Środkowoafrykańska',
  CV: 'Republika Zielonego Przylądka',
  RE: 'Reunion',
  RU: 'Rosja',
  RO: 'Rumunia',
  RW: 'Rwanda',
  EH: 'Sahara Zachodnia',
  KN: 'Saint Kitts i Nevis',
  LC: 'Saint Lucia',
  VC: 'Saint Vincent i Grenadyny',
  BL: 'Saint-Barthélemy',
  MF: 'Saint-Martin',
  PM: 'Saint-Pierre i Miquelon',
  SV: 'Salwador',
  AS: 'Samoa Amerykańskie',
  WS: 'Samoa',
  SM: 'San Marino',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seszele',
  SL: 'Sierra Leone',
  SG: 'Singapur',
  SX: 'Sint Maarten',
  SK: 'Słowacja',
  SI: 'Słowenia',
  SO: 'Somalia',
  LK: 'Sri Lanka',
  US: 'Stany Zjednoczone',
  SZ: 'Suazi',
  SD: 'Sudan',
  SS: 'Sudan Południowy',
  SR: 'Surinam',
  SJ: 'Svalbard i Jan Mayen',
  SY: 'Syria',
  CH: 'Szwajcaria',
  SE: 'Szwecja',
  TJ: 'Tadżykistan',
  TH: 'Tajlandia',
  TW: 'Tajwan',
  TZ: 'Tanzania',
  TL: 'Timor Wschodni',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trynidad i Tobago',
  TN: 'Tunezja',
  TR: 'Turcja',
  TM: 'Turkmenistan',
  TC: 'Turks i Caicos',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraina',
  UY: 'Urugwaj',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  WF: 'Wallis i Futuna',
  VA: 'Watykan',
  VE: 'Wenezuela',
  HU: 'Węgry',
  GB: 'Wielka Brytania',
  VN: 'Wietnam',
  IT: 'Włochy',
  CI: 'Wybrzeże Kości Słoniowej',
  BV: 'Wyspa Bouveta',
  CX: 'Wyspa Bożego Narodzenia',
  IM: 'Wyspa Man',
  SH: 'Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha',
  AX: 'Wyspy Alandzkie',
  CK: 'Wyspy Cooka',
  VI: 'Wyspy Dziewicze Stanów Zjednoczonych',
  HM: 'Wyspy Heard i McDonalda',
  CC: 'Wyspy Kokosowe',
  MH: 'Wyspy Marshalla',
  FO: 'Wyspy Owcze',
  SB: 'Wyspy Salomona',
  ST: 'Wyspy Świętego Tomasza i Książęca',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  AE: 'Zjednoczone Emiraty Arabskie'
};

export default function (code) {
  return code in countriesByCode ? countriesByCode[code] : 'Nieznany';
}
