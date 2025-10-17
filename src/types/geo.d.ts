export type Languages = Language | EnumLanguage;
export type Countries = Country | EnumCountry;

type Language =
  | "ab"
  | "aa"
  | "af"
  | "ak"
  | "sq"
  | "am"
  | "ar"
  | "an"
  | "hy"
  | "as"
  | "av"
  | "ae"
  | "ay"
  | "az"
  | "bm"
  | "ba"
  | "eu"
  | "be"
  | "bn"
  | "bh"
  | "bi"
  | "bs"
  | "br"
  | "bg"
  | "my"
  | "ca"
  | "ch"
  | "ce"
  | "ny"
  | "zh"
  | "cv"
  | "kw"
  | "co"
  | "cr"
  | "hr"
  | "cs"
  | "da"
  | "dv"
  | "nl"
  | "dz"
  | "en"
  | "eo"
  | "et"
  | "ee"
  | "fo"
  | "fj"
  | "fi"
  | "fr"
  | "ff"
  | "gl"
  | "ka"
  | "de"
  | "el"
  | "kl"
  | "gn"
  | "gu"
  | "ht"
  | "ha"
  | "he"
  | "hz"
  | "hi"
  | "ho"
  | "hu"
  | "ia"
  | "id"
  | "ie"
  | "ga"
  | "ig"
  | "ik"
  | "io"
  | "is"
  | "it"
  | "iu"
  | "ja"
  | "jv"
  | "ka"
  | "kk"
  | "km"
  | "ki"
  | "kv"
  | "kg"
  | "ko"
  | "ky"
  | "ku"
  | "lo"
  | "la"
  | "lv"
  | "li"
  | "ln"
  | "lt"
  | "lb"
  | "lu"
  | "lg"
  | "mk"
  | "mg"
  | "ms"
  | "ml"
  | "mt"
  | "gv"
  | "mi"
  | "mr"
  | "mh"
  | "mn"
  | "na"
  | "nv"
  | "nb"
  | "nd"
  | "ne"
  | "ng"
  | "nn"
  | "no"
  | "oc"
  | "oj"
  | "or"
  | "om"
  | "os"
  | "pa"
  | "pi"
  | "pl"
  | "pt"
  | "ps"
  | "qu"
  | "rm"
  | "ro"
  | "rn"
  | "ru"
  | "sa"
  | "sg"
  | "sd"
  | "si"
  | "sk"
  | "sl"
  | "sm"
  | "sn"
  | "sq"
  | "sr"
  | "ss"
  | "st"
  | "su"
  | "sv"
  | "sw"
  | "ta"
  | "te"
  | "tg"
  | "th"
  | "ti"
  | "tl"
  | "tn"
  | "to"
  | "tr"
  | "ts"
  | "tt"
  | "tw"
  | "ty"
  | "ug"
  | "uk"
  | "ur"
  | "uz"
  | "ve"
  | "vi"
  | "vo"
  | "wa"
  | "wo"
  | "xh"
  | "yi"
  | "yo"
  | "za"
  | "zu";

type Country =
  | "Ascension Island"
  | "Andorra"
  | "United Arab Emirates"
  | "Afghanistan"
  | "Antigua & Barbuda"
  | "Anguilla"
  | "Albania"
  | "Armenia"
  | "Angola"
  | "Antarctica"
  | "Argentina"
  | "American Samoa"
  | "Austria"
  | "Australia"
  | "Aruba"
  | "Åland Islands"
  | "Azerbaijan"
  | "Bosnia & Herzegovina"
  | "Barbados"
  | "Bangladesh"
  | "Belgium"
  | "Burkina Faso"
  | "Bulgaria"
  | "Bahrain"
  | "Burundi"
  | "Benin"
  | "St. Barthélemy"
  | "Bermuda"
  | "Brunei"
  | "Bolivia"
  | "Caribbean Netherlands"
  | "Brazil"
  | "Bahamas"
  | "Bhutan"
  | "Bouvet Island"
  | "Botswana"
  | "Belarus"
  | "Belize"
  | "Canada"
  | "Cocos (Keeling) Islands"
  | "Congo - Kinshasa"
  | "Central African Republic"
  | "Congo - Brazzaville"
  | "Switzerland"
  | "Côte d’Ivoire"
  | "Cook Islands"
  | "Chile"
  | "Cameroon"
  | "China"
  | "Colombia"
  | "Clipperton Island"
  | "Costa Rica"
  | "Cuba"
  | "Cape Verde"
  | "Curaçao"
  | "Christmas Island"
  | "Cyprus"
  | "Czechia"
  | "Germany"
  | "Diego Garcia"
  | "Djibouti"
  | "Denmark"
  | "Dominica"
  | "Dominican Republic"
  | "Algeria"
  | "Ceuta & Melilla"
  | "Ecuador"
  | "Estonia"
  | "Egypt"
  | "Western Sahara"
  | "Eritrea"
  | "Spain"
  | "Ethiopia"
  | "European Union"
  | "Finland"
  | "Fiji"
  | "Falkland Islands"
  | "Micronesia"
  | "Faroe Islands"
  | "France"
  | "Gabon"
  | "United Kingdom"
  | "Grenada"
  | "Georgia"
  | "French Guiana"
  | "Guernsey"
  | "Ghana"
  | "Gibraltar"
  | "Greenland"
  | "Gambia"
  | "Guinea"
  | "Guadeloupe"
  | "Equatorial Guinea"
  | "Greece"
  | "South Georgia & South Sandwich Islands"
  | "Guatemala"
  | "Guam"
  | "Guinea-Bissau"
  | "Guyana"
  | "Hong Kong SAR China"
  | "Heard & McDonald Islands"
  | "Honduras"
  | "Croatia"
  | "Haiti"
  | "Hungary"
  | "Canary Islands"
  | "Indonesia"
  | "Ireland"
  | "Israel"
  | "Isle of Man"
  | "India"
  | "British Indian Ocean Territory"
  | "Iraq"
  | "Iran"
  | "Iceland"
  | "Italy"
  | "Jersey"
  | "Jamaica"
  | "Jordan"
  | "Japan"
  | "Kenya"
  | "Kyrgyzstan"
  | "Cambodia"
  | "Kiribati"
  | "Comoros"
  | "St. Kitts & Nevis"
  | "North Korea"
  | "South Korea"
  | "Kuwait"
  | "Cayman Islands"
  | "Kazakhstan"
  | "Laos"
  | "Lebanon"
  | "St. Lucia"
  | "Liechtenstein"
  | "Sri Lanka"
  | "Liberia"
  | "Lesotho"
  | "Lithuania"
  | "Luxembourg"
  | "Latvia"
  | "Libya"
  | "Morocco"
  | "Monaco"
  | "Moldova"
  | "Montenegro"
  | "St. Martin"
  | "Madagascar"
  | "Marshall Islands"
  | "North Macedonia"
  | "Mali"
  | "Myanmar (Burma)"
  | "Mongolia"
  | "Macao SAR China"
  | "Northern Mariana Islands"
  | "Martinique"
  | "Mauritania"
  | "Montserrat"
  | "Malta"
  | "Mauritius"
  | "Maldives"
  | "Malawi"
  | "Mexico"
  | "Malaysia"
  | "Mozambique"
  | "Namibia"
  | "New Caledonia"
  | "Niger"
  | "Norfolk Island"
  | "Nigeria"
  | "Nicaragua"
  | "Netherlands"
  | "Norway"
  | "Nepal"
  | "Pakistan"
  | "Palau"
  | "Palestine"
  | "Panama"
  | "Papua New Guinea"
  | "Paraguay"
  | "Peru"
  | "Philippines"
  | "Pitcairn Islands"
  | "Poland"
  | "Portugal"
  | "Puerto Rico"
  | "Qatar"
  | "Réunion"
  | "Romania"
  | "Russia"
  | "Rwanda"
  | "São Tomé & Príncipe"
  | "Saudi Arabia"
  | "Senegal"
  | "Serbia"
  | "Seychelles"
  | "Sierra Leone"
  | "Singapore"
  | "Sint Maarten"
  | "Slovakia"
  | "Slovenia"
  | "Solomon Islands"
  | "Somalia"
  | "South Sudan"
  | "Suriname"
  | "Svalbard & Jan Mayen"
  | "Swaziland"
  | "Sweden"
  | "Syria"
  | "Taiwan"
  | "Tajikistan"
  | "Tanzania"
  | "Thailand"
  | "Timor-Leste"
  | "Togo"
  | "Tokelau"
  | "Tonga"
  | "Trinidad & Tobago"
  | "Tunisia"
  | "Turkey"
  | "Turkmenistan"
  | "Turks & Caicos Islands"
  | "Tuvalu"
  | "Uganda"
  | "Ukraine"
  | "United States"
  | "Uruguay"
  | "Uzbekistan"
  | "Vanuatu"
  | "Vatican City"
  | "Venezuela"
  | "Vietnam"
  | "British Virgin Islands"
  | "U.S. Virgin Islands"
  | "Wallis & Futuna"
  | "Yemen"
  | "Zambia"
  | "Zimbabwe";

enum EnumCountry {
  AscensionIsland = "Ascension Island",
  Andorra = "Andorra",
  UnitedArabEmirates = "United Arab Emirates",
  Afghanistan = "Afghanistan",
  AntiguaAndBarbuda = "Antigua & Barbuda",
  Anguilla = "Anguilla",
  Albania = "Albania",
  Armenia = "Armenia",
  Angola = "Angola",
  Antarctica = "Antarctica",
  Argentina = "Argentina",
  AmericanSamoa = "American Samoa",
  Austria = "Austria",
  Australia = "Australia",
  Aruba = "Aruba",
  AlandIslands = "Åland Islands",
  Azerbaijan = "Azerbaijan",
  BosniaAndHerzegovina = "Bosnia & Herzegovina",
  Barbados = "Barbados",
  Bangladesh = "Bangladesh",
  Belgium = "Belgium",
  BurkinaFaso = "Burkina Faso",
  Bulgaria = "Bulgaria",
  Bahrain = "Bahrain",
  Burundi = "Burundi",
  Benin = "Benin",
  SaintBarthelemy = "St. Barthélemy",
  Bermuda = "Bermuda",
  Brunei = "Brunei",
  Bolivia = "Bolivia",
  CaribbeanNetherlands = "Caribbean Netherlands",
  Brazil = "Brazil",
  Bahamas = "Bahamas",
  Bhutan = "Bhutan",
  BouvetIsland = "Bouvet Island",
  Botswana = "Botswana",
  Belarus = "Belarus",
  Belize = "Belize",
  Canada = "Canada",
  CocosIslands = "Cocos (Keeling) Islands",
  CongoKinshasa = "Congo - Kinshasa",
  CentralAfricanRepublic = "Central African Republic",
  CongoBrazzaville = "Congo - Brazzaville",
  Switzerland = "Switzerland",
  IvoryCoast = "Côte d’Ivoire",
  CookIslands = "Cook Islands",
  Chile = "Chile",
  Cameroon = "Cameroon",
  China = "China",
  Colombia = "Colombia",
  ClippertonIsland = "Clipperton Island",
  CostaRica = "Costa Rica",
  Cuba = "Cuba",
  CapeVerde = "Cape Verde",
  Curacao = "Curaçao",
  ChristmasIsland = "Christmas Island",
  Cyprus = "Cyprus",
  Czechia = "Czechia",
  Germany = "Germany",
  DiegoGarcia = "Diego Garcia",
  Djibouti = "Djibouti",
  Denmark = "Denmark",
  Dominica = "Dominica",
  DominicanRepublic = "Dominican Republic",
  Algeria = "Algeria",
  CeutaAndMelilla = "Ceuta & Melilla",
  Ecuador = "Ecuador",
  Estonia = "Estonia",
  Egypt = "Egypt",
  WesternSahara = "Western Sahara",
  Eritrea = "Eritrea",
  Spain = "Spain",
  Ethiopia = "Ethiopia",
  EuropeanUnion = "European Union",
  Finland = "Finland",
  Fiji = "Fiji",
  FalklandIslands = "Falkland Islands",
  Micronesia = "Micronesia",
  FaroeIslands = "Faroe Islands",
  France = "France",
  Gabon = "Gabon",
  UnitedKingdom = "United Kingdom",
  Grenada = "Grenada",
  Georgia = "Georgia",
  FrenchGuiana = "French Guiana",
  Guernsey = "Guernsey",
  Ghana = "Ghana",
  Gibraltar = "Gibraltar",
  Greenland = "Greenland",
  Gambia = "Gambia",
  Guinea = "Guinea",
  Guadeloupe = "Guadeloupe",
  EquatorialGuinea = "Equatorial Guinea",
  Greece = "Greece",
  SouthGeorgiaAndSouthSandwichIslands = "South Georgia & South Sandwich Islands",
  Guatemala = "Guatemala",
  Guam = "Guam",
  GuineaBissau = "Guinea-Bissau",
  Guyana = "Guyana",
  HongKong = "Hong Kong SAR China",
  HeardAndMcDonaldIslands = "Heard & McDonald Islands",
  Honduras = "Honduras",
  Croatia = "Croatia",
  Haiti = "Haiti",
  Hungary = "Hungary",
  CanaryIslands = "Canary Islands",
  Indonesia = "Indonesia",
  Ireland = "Ireland",
  Israel = "Israel",
  IsleOfMan = "Isle of Man",
  India = "India",
  BritishIndianOceanTerritory = "British Indian Ocean Territory",
  Iraq = "Iraq",
  Iran = "Iran",
  Iceland = "Iceland",
  Italy = "Italy",
  Jersey = "Jersey",
  Jamaica = "Jamaica",
  Jordan = "Jordan",
  Japan = "Japan",
  Kenya = "Kenya",
  Kyrgyzstan = "Kyrgyzstan",
  Cambodia = "Cambodia",
  Kiribati = "Kiribati",
  Comoros = "Comoros",
  SaintKittsAndNevis = "St. Kitts & Nevis",
  NorthKorea = "North Korea",
  SouthKorea = "South Korea",
  Kuwait = "Kuwait",
  CaymanIslands = "Cayman Islands",
  Kazakhstan = "Kazakhstan",
  Laos = "Laos",
  Lebanon = "Lebanon",
  SaintLucia = "St. Lucia",
  Liechtenstein = "Liechtenstein",
  SriLanka = "Sri Lanka",
  Liberia = "Liberia",
  Lesotho = "Lesotho",
  Lithuania = "Lithuania",
  Luxembourg = "Luxembourg",
  Latvia = "Latvia",
  Libya = "Libya",
  Morocco = "Morocco",
  Monaco = "Monaco",
  Moldova = "Moldova",
  Montenegro = "Montenegro",
  SaintMartin = "St. Martin",
  Madagascar = "Madagascar",
  MarshallIslands = "Marshall Islands",
  NorthMacedonia = "North Macedonia",
  Mali = "Mali",
  Myanmar = "Myanmar (Burma)",
  Mongolia = "Mongolia",
  Macao = "Macao SAR China",
  NorthernMarianaIslands = "Northern Mariana Islands",
  Martinique = "Martinique",
  Mauritania = "Mauritania",
  Montserrat = "Montserrat",
  Malta = "Malta",
  Mauritius = "Mauritius",
  Maldives = "Maldives",
  Malawi = "Malawi",
  Mexico = "Mexico",
  Malaysia = "Malaysia",
  Mozambique = "Mozambique",
  Namibia = "Namibia",
  NewCaledonia = "New Caledonia",
  Niger = "Niger",
  NorfolkIsland = "Norfolk Island",
  Nigeria = "Nigeria",
  Nicaragua = "Nicaragua",
  Netherlands = "Netherlands",
  Norway = "Norway",
  Nepal = "Nepal",
  Pakistan = "Pakistan",
  Palau = "Palau",
  Palestine = "Palestine",
  Panama = "Panama",
  PapuaNewGuinea = "Papua New Guinea",
  Paraguay = "Paraguay",
  Peru = "Peru",
  Philippines = "Philippines",
  PitcairnIslands = "Pitcairn Islands",
  Poland = "Poland",
  Portugal = "Portugal",
  PuertoRico = "Puerto Rico",
  Qatar = "Qatar",
  Reunion = "Réunion",
  Romania = "Romania",
  Russia = "Russia",
  Rwanda = "Rwanda",
  SaoTomeAndPrincipe = "São Tomé & Príncipe",
  SaudiArabia = "Saudi Arabia",
  Senegal = "Senegal",
  Serbia = "Serbia",
  Seychelles = "Seychelles",
  SierraLeone = "Sierra Leone",
  Singapore = "Singapore",
  SintMaarten = "Sint Maarten",
  Slovakia = "Slovakia",
  Slovenia = "Slovenia",
  SolomonIslands = "Solomon Islands",
  Somalia = "Somalia",
  SouthSudan = "South Sudan",
  Suriname = "Suriname",
  SvalbardAndJanMayen = "Svalbard & Jan Mayen",
  Swaziland = "Swaziland",
  Sweden = "Sweden",
  Syria = "Syria",
  Taiwan = "Taiwan",
  Tajikistan = "Tajikistan",
  Tanzania = "Tanzania",
  Thailand = "Thailand",
  TimorLeste = "Timor-Leste",
  Togo = "Togo",
  Tokelau = "Tokelau",
  Tonga = "Tonga",
  TrinidadAndTobago = "Trinidad & Tobago",
  Tunisia = "Tunisia",
  Turkey = "Turkey",
  Turkmenistan = "Turkmenistan",
  TurksAndCaicosIslands = "Turks & Caicos Islands",
  Tuvalu = "Tuvalu",
  Uganda = "Uganda",
  Ukraine = "Ukraine",
  UnitedStates = "United States",
  Uruguay = "Uruguay",
  Uzbekistan = "Uzbekistan",
  Vanuatu = "Vanuatu",
  VaticanCity = "Vatican City",
  Venezuela = "Venezuela",
  Vietnam = "Vietnam",
  BritishVirginIslands = "British Virgin Islands",
  USVirginIslands = "U.S. Virgin Islands",
  WallisAndFutuna = "Wallis & Futuna",
  Yemen = "Yemen",
  Zambia = "Zambia",
  Zimbabwe = "Zimbabwe",
}

enum EnumLanguage {
  Abkhazian = "ab",
  Afar = "aa",
  Afrikaans = "af",
  Akan = "ak",
  Albanian = "sq",
  Amharic = "am",
  Arabic = "ar",
  Aragonese = "an",
  Armenian = "hy",
  Assamese = "as",
  Avaric = "av",
  Avestan = "ae",
  Aymara = "ay",
  Azerbaijani = "az",
  Bambara = "bm",
  Bashkir = "ba",
  Basque = "eu",
  Belarusian = "be",
  Bengali = "bn",
  Bihari = "bh",
  Bislama = "bi",
  Bosnian = "bs",
  Breton = "br",
  Bulgarian = "bg",
  Burmese = "my",
  Catalan = "ca",
  Chamorro = "ch",
  Chechen = "ce",
  Chichewa = "ny",
  Chinese = "zh",
  Chuvash = "cv",
  Cornish = "kw",
  Corsican = "co",
  Cree = "cr",
  Croatian = "hr",
  Czech = "cs",
  Danish = "da",
  Divehi = "dv",
  Dutch = "nl",
  Dzongkha = "dz",
  English = "en",
  Esperanto = "eo",
  Estonian = "et",
  Ewe = "ee",
  Faroese = "fo",
  Fijian = "fj",
  Finnish = "fi",
  French = "fr",
  Fulah = "ff",
  Galician = "gl",
  Georgian = "ka",
  German = "de",
  Greek = "el",
  Greenlandic = "kl",
  Guarani = "gn",
  Gujarati = "gu",
  Haitian = "ht",
  Hausa = "ha",
  Hebrew = "he",
  Herero = "hz",
  Hindi = "hi",
  HiriMotu = "ho",
  Hungarian = "hu",
  Interlingua = "ia",
  Indonesian = "id",
  Interlingue = "ie",
  Irish = "ga",
  Igbo = "ig",
  Inuktitut = "ik",
  Ido = "io",
  Icelandic = "is",
  Italian = "it",
  Japanese = "ja",
  Javanese = "jv",
  Kazakh = "kk",
  Khmer = "km",
  Kikuyu = "ki",
  Komi = "kv",
  Kongo = "kg",
  Korean = "ko",
  Kyrgyz = "ky",
  Kurdish = "ku",
  Lao = "lo",
  Latin = "la",
  Latvian = "lv",
  Limburgish = "li",
  Lingala = "ln",
  Lithuanian = "lt",
  Luxembourgish = "lb",
  LubaKatanga = "lu",
  Luganda = "lg",
  Macedonian = "mk",
  Malagasy = "mg",
  Malay = "ms",
  Malayalam = "ml",
  Maltese = "mt",
  Manx = "gv",
  Maori = "mi",
  Marathi = "mr",
  Marshallese = "mh",
  Mongolian = "mn",
  Nauru = "na",
  Navajo = "nv",
  Norwegian = "nb",
  Ndebele = "nd",
  Nepali = "ne",
  Ndonga = "ng",
  NorwegianNynorsk = "nn",
  NorwegianBokmal = "no",
  Occitan = "oc",
  Ojibwe = "oj",
  Oriya = "or",
  Oromo = "om",
  Ossetian = "os",
  Pashto = "pa",
  Pali = "pi",
  Polish = "pl",
  Portuguese = "pt",
  Quechua = "qu",
  Romansh = "rm",
  Romanian = "ro",
  Rundi = "rn",
  Russian = "ru",
  Sanskrit = "sa",
  Sango = "sg",
  Sindhi = "sd",
  Sinhalese = "si",
  Slovak = "sk",
  Slovenian = "sl",
  Samoan = "sm",
  Shona = "sn",
  Serbian = "sr",
  Swati = "ss",
  Sesotho = "st",
  Sundanese = "su",
  Swedish = "sv",
  Swahili = "sw",
  Tamil = "ta",
  Telugu = "te",
  Tajik = "tg",
  Thai = "th",
  Tigrinya = "ti",
  Tagalog = "tl",
  Tonga = "to",
  Turkish = "tr",
  Tswana = "ts",
  Tatar = "tt",
  Twi = "tw",
  Tahitian = "ty",
  Uighur = "ug",
  Ukrainian = "uk",
  Urdu = "ur",
  Uzbek = "uz",
  Venda = "ve",
  Vietnamese = "vi",
  Volapuk = "vo",
  Walloon = "wa",
  Wolof = "wo",
  Xhosa = "xh",
  Yiddish = "yi",
  Yoruba = "yo",
  Zulu = "zu",
}
