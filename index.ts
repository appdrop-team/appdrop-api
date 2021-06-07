import atob from 'atob';
// @ts-ignore
import dot from 'dot-object';
dot.keepArray = true;

/**
 * 
 * **************
 * Base
 * **************
 * 
 */

/**
 * Physical Address
 */
 export interface Address {

  /**
   * Address line 1
   */
  address1: string;

  /**
   * Address line 2
   */
  address2: string;

  /**
   * City name.
   */
  city: string;

  /**
   * ISO 3166-1 alpha-2 country code
   */
  country_code: CountryCode;

  /**
   * Postal Code.
   */
  zip: string;

  /**
   * State Code. e.g. 'MD' or 'TN'
   */
  state_code: string;

}

export type StateCodeUSA =
  'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' |
  'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' |
  'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' |
  'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
export const STATE_CODE_USA_ARR = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
  'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
  'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN',
  'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];
export const STATE_CODE_USA_MAP: {
  [key in StateCodeUSA]: string
} = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DC': 'District of Columbia', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
  'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland', 'MA': 'Massachusetts',
  'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri', 'MT': 'Montana',
  'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico',
  'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
  'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
};

/**
 * ISO 3166-1 alpha-2 country code
 */
export type CountryCode =
  'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' |
  'AO' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AZ' | 'BA' |
  'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' |
  'BM' | 'BN' | 'BO' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' |
  'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' |
  'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' |
  'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' |
  'EG' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' |
  'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' |
  'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GT' |
  'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' |
  'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' |
  'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' |
  'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' |
  'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' |
  'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' |
  'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' |
  'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' |
  'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' |
  'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PR' |
  'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' |
  'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' |
  'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' |
  'SV' | 'SX' | 'SY' | 'SZ' | 'TC' | 'TD' | 'TG' | 'TH' |
  'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' |
  'TW' | 'TZ' | 'UA' | 'UG' | 'US' | 'UY' | 'UZ' | 'VA' |
  'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' |
  'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';

/**
 * Array of Countries
 */
export const COUNTRY_CODES_ARR = [
  'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM',
  'AO', 'AR', 'AS', 'AT', 'AU', 'AW', 'AZ', 'BA',
  'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL',
  'BM', 'BN', 'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ',
  'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL',
  'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY',
  'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE',
  'EG', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM',
  'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH',
  'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GT',
  'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID',
  'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT',
  'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM',
  'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC',
  'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA',
  'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM',
  'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV',
  'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG',
  'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA',
  'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PR',
  'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU',
  'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI',
  'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST',
  'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TG', 'TH',
  'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV',
  'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA',
  'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK',
  'YE', 'YT', 'ZA', 'ZM', 'ZW'];

/**
 * Map of Countries
 */
export const COUNTRIES: {
  [key in CountryCode]: {
    label: string;
    id: string;
    dialCode: string;
  };
} = {
  AF: {
    label: "Afghanistan",
    id: "AF",
    dialCode: "+93"
  },
  AL: {
    label: "Albania",
    id: "AL",
    dialCode: "+355"
  },
  DZ: {
    label: "Algeria",
    id: "DZ",
    dialCode: "+213"
  },
  AS: {
    label: "American Samoa",
    id: "AS",
    dialCode: "+1684"
  },
  AD: {
    label: "Andorra",
    id: "AD",
    dialCode: "+376"
  },
  AO: {
    label: "Angola",
    id: "AO",
    dialCode: "+244"
  },
  AI: {
    label: "Anguilla",
    id: "AI",
    dialCode: "+1264"
  },
  AG: {
    label: "Antigua and Barbuda",
    id: "AG",
    dialCode: "+1268"
  },
  AR: {
    label: "Argentina",
    id: "AR",
    dialCode: "+54"
  },
  AM: {
    label: "Armenia",
    id: "AM",
    dialCode: "+374"
  },
  AW: {
    label: "Aruba",
    id: "AW",
    dialCode: "+297"
  },
  AU: {
    label: "Australia",
    id: "AU",
    dialCode: "+61"
  },
  AT: {
    label: "Austria",
    id: "AT",
    dialCode: "+43"
  },
  AZ: {
    label: "Azerbaijan",
    id: "AZ",
    dialCode: "+994"
  },
  BS: {
    label: "Bahamas",
    id: "BS",
    dialCode: "+1242"
  },
  BH: {
    label: "Bahrain",
    id: "BH",
    dialCode: "+973"
  },
  BD: {
    label: "Bangladesh",
    id: "BD",
    dialCode: "+880"
  },
  BB: {
    label: "Barbados",
    id: "BB",
    dialCode: "+1246"
  },
  BY: {
    label: "Belarus",
    id: "BY",
    dialCode: "+375"
  },
  BE: {
    label: "Belgium",
    id: "BE",
    dialCode: "+32"
  },
  BZ: {
    label: "Belize",
    id: "BZ",
    dialCode: "+501"
  },
  BJ: {
    label: "Benin",
    id: "BJ",
    dialCode: "+229"
  },
  BM: {
    label: "Bermuda",
    id: "BM",
    dialCode: "+1441"
  },
  BT: {
    label: "Bhutan",
    id: "BT",
    dialCode: "+975"
  },
  BO: {
    label: "Bolivia",
    id: "BO",
    dialCode: "+591"
  },
  BA: {
    label: "Bosnia and Herzegovina",
    id: "BA",
    dialCode: "+387"
  },
  BW: {
    label: "Botswana",
    id: "BW",
    dialCode: "+267"
  },
  BR: {
    label: "Brazil (Brasil)",
    id: "BR",
    dialCode: "+55"
  },
  IO: {
    label: "British Indian Ocean Territory",
    id: "IO",
    dialCode: "+246"
  },
  VG: {
    label: "British Virgin Islands",
    id: "VG",
    dialCode: "+1284"
  },
  BN: {
    label: "Brunei",
    id: "BN",
    dialCode: "+673"
  },
  BG: {
    label: "Bulgaria",
    id: "BG",
    dialCode: "+359"
  },
  BF: {
    label: "Burkina Faso",
    id: "BF",
    dialCode: "+226"
  },
  BI: {
    label: "Burundi",
    id: "BI",
    dialCode: "+257"
  },
  KH: {
    label: "Cambodia",
    id: "KH",
    dialCode: "+855"
  },
  CM: {
    label: "Cameroon",
    id: "CM",
    dialCode: "+237"
  },
  CA: {
    label: "Canada",
    id: "CA",
    dialCode: "+1"
  },
  CV: {
    label: "Cape Verde",
    id: "CV",
    dialCode: "+238"
  },
  KY: {
    label: "Cayman Islands",
    id: "KY",
    dialCode: "+1345"
  },
  CF: {
    label: "Central African Republic",
    id: "CF",
    dialCode: "+236"
  },
  TD: {
    label: "Chad",
    id: "TD",
    dialCode: "+235"
  },
  CL: {
    label: "Chile",
    id: "CL",
    dialCode: "+56"
  },
  CN: {
    label: "China",
    id: "CN",
    dialCode: "+86"
  },
  CX: {
    label: "Christmas Island",
    id: "CX",
    dialCode: "+61"
  },
  CC: {
    label: "Cocos Islands",
    id: "CC",
    dialCode: "+61"
  },
  CO: {
    label: "Colombia",
    id: "CO",
    dialCode: "+57"
  },
  KM: {
    label: "Comoros",
    id: "KM",
    dialCode: "+269"
  },
  CD: {
    label: "Congo (DRC)",
    id: "CD",
    dialCode: "+243"
  },
  CG: {
    label: "Congo (Republic)",
    id: "CG",
    dialCode: "+242"
  },
  CK: {
    label: "Cook Islands",
    id: "CK",
    dialCode: "+682"
  },
  CR: {
    label: "Costa Rica",
    id: "CR",
    dialCode: "+506"
  },
  CI: {
    label: "Côte d'Ivoire",
    id: "CI",
    dialCode: "+225"
  },
  HR: {
    label: "Croatia",
    id: "HR",
    dialCode: "+385"
  },
  CU: {
    label: "Cuba",
    id: "CU",
    dialCode: "+53"
  },
  CW: {
    label: "Curaçao",
    id: "CW",
    dialCode: "+599"
  },
  CY: {
    label: "Cyprus",
    id: "CY",
    dialCode: "+357"
  },
  CZ: {
    label: "Czech Republic",
    id: "CZ",
    dialCode: "+420"
  },
  DK: {
    label: "Denmark",
    id: "DK",
    dialCode: "+45"
  },
  DJ: {
    label: "Djibouti",
    id: "DJ",
    dialCode: "+253"
  },
  DM: {
    label: "Dominica",
    id: "DM",
    dialCode: "+1767"
  },
  DO: {
    label: "Dominican Republic",
    id: "DO",
    dialCode: "+1"
  },
  EC: {
    label: "Ecuador",
    id: "EC",
    dialCode: "+593"
  },
  EG: {
    label: "Egypt",
    id: "EG",
    dialCode: "+20"
  },
  SV: {
    label: "El Salvador",
    id: "SV",
    dialCode: "+503"
  },
  GQ: {
    label: "Equatorial Guinea",
    id: "GQ",
    dialCode: "+240"
  },
  ER: {
    label: "Eritrea",
    id: "ER",
    dialCode: "+291"
  },
  EE: {
    label: "Estonia",
    id: "EE",
    dialCode: "+372"
  },
  ET: {
    label: "Ethiopia",
    id: "ET",
    dialCode: "+251"
  },
  FK: {
    label: "Falkland Islands",
    id: "FK",
    dialCode: "+500"
  },
  FO: {
    label: "Faroe Islands",
    id: "FO",
    dialCode: "+298"
  },
  FJ: {
    label: "Fiji",
    id: "FJ",
    dialCode: "+679"
  },
  FI: {
    label: "Finland",
    id: "FI",
    dialCode: "+358"
  },
  FR: {
    label: "France",
    id: "FR",
    dialCode: "+33"
  },
  GF: {
    label: "French Guiana",
    id: "GF",
    dialCode: "+594"
  },
  PF: {
    label: "French Polynesia",
    id: "PF",
    dialCode: "+689"
  },
  GA: {
    label: "Gabon",
    id: "GA",
    dialCode: "+241"
  },
  GM: {
    label: "Gambia",
    id: "GM",
    dialCode: "+220"
  },
  GE: {
    label: "Georgia",
    id: "GE",
    dialCode: "+995"
  },
  DE: {
    label: "Germany",
    id: "DE",
    dialCode: "+49"
  },
  GH: {
    label: "Ghana",
    id: "GH",
    dialCode: "+233"
  },
  GI: {
    label: "Gibraltar",
    id: "GI",
    dialCode: "+350"
  },
  GR: {
    label: "Greece",
    id: "GR",
    dialCode: "+30"
  },
  GL: {
    label: "Greenland",
    id: "GL",
    dialCode: "+299"
  },
  GD: {
    label: "Grenada",
    id: "GD",
    dialCode: "+1473"
  },
  GP: {
    label: "Guadeloupe",
    id: "GP",
    dialCode: "+590"
  },
  GU: {
    label: "Guam",
    id: "GU",
    dialCode: "+1671"
  },
  GT: {
    label: "Guatemala",
    id: "GT",
    dialCode: "+502"
  },
  GG: {
    label: "Guernsey",
    id: "GG",
    dialCode: "+44"
  },
  GN: {
    label: "Guinea",
    id: "GN",
    dialCode: "+224"
  },
  GW: {
    label: "Guinea-Bissau",
    id: "GW",
    dialCode: "+245"
  },
  GY: {
    label: "Guyana",
    id: "GY",
    dialCode: "+592"
  },
  HT: {
    label: "Haiti",
    id: "HT",
    dialCode: "+509"
  },
  HN: {
    label: "Honduras",
    id: "HN",
    dialCode: "+504"
  },
  HK: {
    label: "Hong Kong",
    id: "HK",
    dialCode: "+852"
  },
  HU: {
    label: "Hungary",
    id: "HU",
    dialCode: "+36"
  },
  IS: {
    label: "Iceland",
    id: "IS",
    dialCode: "+354"
  },
  IN: {
    label: "India",
    id: "IN",
    dialCode: "+91"
  },
  ID: {
    label: "Indonesia",
    id: "ID",
    dialCode: "+62"
  },
  IR: {
    label: "Iran",
    id: "IR",
    dialCode: "+98"
  },
  IQ: {
    label: "Iraq",
    id: "IQ",
    dialCode: "+964"
  },
  IE: {
    label: "Ireland",
    id: "IE",
    dialCode: "+353"
  },
  IM: {
    label: "Isle of Man",
    id: "IM",
    dialCode: "+44"
  },
  IL: {
    label: "Israel",
    id: "IL",
    dialCode: "+972"
  },
  IT: {
    label: "Italy",
    id: "IT",
    dialCode: "+39"
  },
  JM: {
    label: "Jamaica",
    id: "JM",
    dialCode: "+1"
  },
  JP: {
    label: "Japan",
    id: "JP",
    dialCode: "+81"
  },
  JE: {
    label: "Jersey",
    id: "JE",
    dialCode: "+44"
  },
  JO: {
    label: "Jordan",
    id: "JO",
    dialCode: "+962"
  },
  KZ: {
    label: "Kazakhstan",
    id: "KZ",
    dialCode: "+7"
  },
  KE: {
    label: "Kenya",
    id: "KE",
    dialCode: "+254"
  },
  KI: {
    label: "Kiribati",
    id: "KI",
    dialCode: "+686"
  },
  XK: {
    label: "Kosovo",
    id: "XK",
    dialCode: "+383"
  },
  KW: {
    label: "Kuwait",
    id: "KW",
    dialCode: "+965"
  },
  KG: {
    label: "Kyrgyzstan",
    id: "KG",
    dialCode: "+996"
  },
  LA: {
    label: "Laos",
    id: "LA",
    dialCode: "+856"
  },
  LV: {
    label: "Latvia (Latvija)",
    id: "LV",
    dialCode: "+371"
  },
  LB: {
    label: "Lebanon",
    id: "LB",
    dialCode: "+961"
  },
  LS: {
    label: "Lesotho",
    id: "LS",
    dialCode: "+266"
  },
  LR: {
    label: "Liberia",
    id: "LR",
    dialCode: "+231"
  },
  LY: {
    label: "Libya",
    id: "LY",
    dialCode: "+218"
  },
  LI: {
    label: "Liechtenstein",
    id: "LI",
    dialCode: "+423"
  },
  LT: {
    label: "Lithuania",
    id: "LT",
    dialCode: "+370"
  },
  LU: {
    label: "Luxembourg",
    id: "LU",
    dialCode: "+352"
  },
  MO: {
    label: "Macau",
    id: "MO",
    dialCode: "+853"
  },
  MK: {
    label: "North Macedonia",
    id: "MK",
    dialCode: "+389"
  },
  MG: {
    label: "Madagascar",
    id: "MG",
    dialCode: "+261"
  },
  MW: {
    label: "Malawi",
    id: "MW",
    dialCode: "+265"
  },
  MY: {
    label: "Malaysia",
    id: "MY",
    dialCode: "+60"
  },
  MV: {
    label: "Maldives",
    id: "MV",
    dialCode: "+960"
  },
  ML: {
    label: "Mali",
    id: "ML",
    dialCode: "+223"
  },
  MT: {
    label: "Malta",
    id: "MT",
    dialCode: "+356"
  },
  MH: {
    label: "Marshall Islands",
    id: "MH",
    dialCode: "+692"
  },
  MQ: {
    label: "Martinique",
    id: "MQ",
    dialCode: "+596"
  },
  MR: {
    label: "Mauritania",
    id: "MR",
    dialCode: "+222"
  },
  MU: {
    label: "Mauritius",
    id: "MU",
    dialCode: "+230"
  },
  YT: {
    label: "Mayotte",
    id: "YT",
    dialCode: "+262"
  },
  MX: {
    label: "Mexico",
    id: "MX",
    dialCode: "+52"
  },
  FM: {
    label: "Micronesia",
    id: "FM",
    dialCode: "+691"
  },
  MD: {
    label: "Moldova",
    id: "MD",
    dialCode: "+373"
  },
  MC: {
    label: "Monaco",
    id: "MC",
    dialCode: "+377"
  },
  MN: {
    label: "Mongolia",
    id: "MN",
    dialCode: "+976"
  },
  ME: {
    label: "Montenegro",
    id: "ME",
    dialCode: "+382"
  },
  MS: {
    label: "Montserrat",
    id: "MS",
    dialCode: "+1664"
  },
  MA: {
    label: "Morocco",
    id: "MA",
    dialCode: "+212"
  },
  MZ: {
    label: "Mozambique",
    id: "MZ",
    dialCode: "+258"
  },
  MM: {
    label: "Myanmar (Burma)",
    id: "MM",
    dialCode: "+95"
  },
  NA: {
    label: "Namibia",
    id: "NA",
    dialCode: "+264"
  },
  NR: {
    label: "Nauru",
    id: "NR",
    dialCode: "+674"
  },
  NP: {
    label: "Nepal",
    id: "NP",
    dialCode: "+977"
  },
  NL: {
    label: "Netherlands",
    id: "NL",
    dialCode: "+31"
  },
  NC: {
    label: "New Caledonia",
    id: "NC",
    dialCode: "+687"
  },
  NZ: {
    label: "New Zealand",
    id: "NZ",
    dialCode: "+64"
  },
  NI: {
    label: "Nicaragua",
    id: "NI",
    dialCode: "+505"
  },
  NE: {
    label: "Niger",
    id: "NE",
    dialCode: "+227"
  },
  NG: {
    label: "Nigeria",
    id: "NG",
    dialCode: "+234"
  },
  NU: {
    label: "Niue",
    id: "NU",
    dialCode: "+683"
  },
  NF: {
    label: "Norfolk Island",
    id: "NF",
    dialCode: "+672"
  },
  KP: {
    label: "North Korea",
    id: "KP",
    dialCode: "+850"
  },
  MP: {
    label: "Northern Mariana Islands",
    id: "MP",
    dialCode: "+1670"
  },
  NO: {
    label: "Norway",
    id: "NO",
    dialCode: "+47"
  },
  OM: {
    label: "Oman",
    id: "OM",
    dialCode: "+968"
  },
  PK: {
    label: "Pakistan ",
    id: "PK",
    dialCode: "+92"
  },
  PW: {
    label: "Palau",
    id: "PW",
    dialCode: "+680"
  },
  PS: {
    label: "Palestine",
    id: "PS",
    dialCode: "+970"
  },
  PA: {
    label: "Panama",
    id: "PA",
    dialCode: "+507"
  },
  PG: {
    label: "Papua New Guinea",
    id: "PG",
    dialCode: "+675"
  },
  PY: {
    label: "Paraguay",
    id: "PY",
    dialCode: "+595"
  },
  PE: {
    label: "Peru",
    id: "PE",
    dialCode: "+51"
  },
  PH: {
    label: "Philippines",
    id: "PH",
    dialCode: "+63"
  },
  PL: {
    label: "Poland",
    id: "PL",
    dialCode: "+48"
  },
  PT: {
    label: "Portugal",
    id: "PT",
    dialCode: "+351"
  },
  PR: {
    label: "Puerto Rico",
    id: "PR",
    dialCode: "+1"
  },
  QA: {
    label: "Qatar",
    id: "QA",
    dialCode: "+974"
  },
  RE: {
    label: "Réunion",
    id: "RE",
    dialCode: "+262"
  },
  RO: {
    label: "Romania",
    id: "RO",
    dialCode: "+40"
  },
  RU: {
    label: "Russia",
    id: "RU",
    dialCode: "+7"
  },
  RW: {
    label: "Rwanda",
    id: "RW",
    dialCode: "+250"
  },
  BL: {
    label: "Saint Barthélemy",
    id: "BL",
    dialCode: "+590"
  },
  SH: {
    label: "Saint Helena",
    id: "SH",
    dialCode: "+290"
  },
  KN: {
    label: "Saint Kitts and Nevis",
    id: "KN",
    dialCode: "+1869"
  },
  LC: {
    label: "Saint Lucia",
    id: "LC",
    dialCode: "+1758"
  },
  MF: {
    label: "Saint Martin",
    id: "MF",
    dialCode: "+590"
  },
  PM: {
    label: "Saint Pierre and Miquelon",
    id: "PM",
    dialCode: "+508"
  },
  VC: {
    label: "Saint Vincent and the Grenadines",
    id: "VC",
    dialCode: "+1784"
  },
  WS: {
    label: "Samoa",
    id: "WS",
    dialCode: "+685"
  },
  SM: {
    label: "San Marino",
    id: "SM",
    dialCode: "+378"
  },
  ST: {
    label: "S\xe3o Tom\xe9 and Pr\xedncipe (S\xe3o Tom\xe9 e Pr\xedncipe)",
    id: "ST",
    dialCode: "+239"
  },
  SA: {
    label: "Saudi Arabia",
    id: "SA",
    dialCode: "+966"
  },
  SN: {
    label: "Senegal",
    id: "SN",
    dialCode: "+221"
  },
  RS: {
    label: "Serbia",
    id: "RS",
    dialCode: "+381"
  },
  SC: {
    label: "Seychelles",
    id: "SC",
    dialCode: "+248"
  },
  SL: {
    label: "Sierra Leone",
    id: "SL",
    dialCode: "+232"
  },
  SG: {
    label: "Singapore",
    id: "SG",
    dialCode: "+65"
  },
  SX: {
    label: "Sint Maarten",
    id: "SX",
    dialCode: "+1721"
  },
  SK: {
    label: "Slovakia",
    id: "SK",
    dialCode: "+421"
  },
  SI: {
    label: "Slovenia",
    id: "SI",
    dialCode: "+386"
  },
  SB: {
    label: "Solomon Islands",
    id: "SB",
    dialCode: "+677"
  },
  SO: {
    label: "Somalia",
    id: "SO",
    dialCode: "+252"
  },
  ZA: {
    label: "South Africa",
    id: "ZA",
    dialCode: "+27"
  },
  KR: {
    label: "South Korea",
    id: "KR",
    dialCode: "+82"
  },
  SS: {
    label: "South Sudan",
    id: "SS",
    dialCode: "+211"
  },
  ES: {
    label: "Spain",
    id: "ES",
    dialCode: "+34"
  },
  LK: {
    label: "Sri Lanka",
    id: "LK",
    dialCode: "+94"
  },
  SD: {
    label: "Sudan",
    id: "SD",
    dialCode: "+249"
  },
  SR: {
    label: "Suriname",
    id: "SR",
    dialCode: "+597"
  },
  SJ: {
    label: "Svalbard and Jan Mayen",
    id: "SJ",
    dialCode: "+47"
  },
  SZ: {
    label: "Swaziland",
    id: "SZ",
    dialCode: "+268"
  },
  SE: {
    label: "Sweden",
    id: "SE",
    dialCode: "+46"
  },
  CH: {
    label: "Switzerland",
    id: "CH",
    dialCode: "+41"
  },
  SY: {
    label: "Syria",
    id: "SY",
    dialCode: "+963"
  },
  TW: {
    label: "Taiwan",
    id: "TW",
    dialCode: "+886"
  },
  TJ: {
    label: "Tajikistan",
    id: "TJ",
    dialCode: "+992"
  },
  TZ: {
    label: "Tanzania",
    id: "TZ",
    dialCode: "+255"
  },
  TH: {
    label: "Thailand",
    id: "TH",
    dialCode: "+66"
  },
  TL: {
    label: "Timor-Leste",
    id: "TL",
    dialCode: "+670"
  },
  TG: {
    label: "Togo",
    id: "TG",
    dialCode: "+228"
  },
  TK: {
    label: "Tokelau",
    id: "TK",
    dialCode: "+690"
  },
  TO: {
    label: "Tonga",
    id: "TO",
    dialCode: "+676"
  },
  TT: {
    label: "Trinisoad and Tobago",
    id: "TT",
    dialCode: "+1868"
  },
  TN: {
    label: "Tunisia",
    id: "TN",
    dialCode: "+216"
  },
  TR: {
    label: "Turkey",
    id: "TR",
    dialCode: "+90"
  },
  TM: {
    label: "Turkmenistan",
    id: "TM",
    dialCode: "+993"
  },
  TC: {
    label: "Turks and Caicos Islands",
    id: "TC",
    dialCode: "+1649"
  },
  TV: {
    label: "Tuvalu",
    id: "TV",
    dialCode: "+688"
  },
  VI: {
    label: "U.S. Virgin Islands",
    id: "VI",
    dialCode: "+1340"
  },
  UG: {
    label: "Uganda",
    id: "UG",
    dialCode: "+256"
  },
  UA: {
    label: "Ukraine",
    id: "UA",
    dialCode: "+380"
  },
  AE: {
    label: "United Arab Emirates",
    id: "AE",
    dialCode: "+971"
  },
  GB: {
    label: "United Kingdom",
    id: "GB",
    dialCode: "+44"
  },
  US: {
    label: "United States",
    id: "US",
    dialCode: "+1"
  },
  UY: {
    label: "Uruguay",
    id: "UY",
    dialCode: "+598"
  },
  UZ: {
    label: "Uzbekistan",
    id: "UZ",
    dialCode: "+998"
  },
  VU: {
    label: "Vanuatu",
    id: "VU",
    dialCode: "+678"
  },
  VA: {
    label: "Vatican City",
    id: "VA",
    dialCode: "+39"
  },
  VE: {
    label: "Venezuela",
    id: "VE",
    dialCode: "+58"
  },
  VN: {
    label: "Vietnam",
    id: "VN",
    dialCode: "+84"
  },
  WF: {
    label: "Wallis and Futuna (Wallis-et-Futuna)",
    id: "WF",
    dialCode: "+681"
  },
  YE: {
    label: "Yemen",
    id: "YE",
    dialCode: "+967"
  },
  ZM: {
    label: "Zambia",
    id: "ZM",
    dialCode: "+260"
  },
  ZW: {
    label: "Zimbabwe",
    id: "ZW",
    dialCode: "+263"
  }
};

/**
 * Time object
 */
export interface Timestamped {

  /**
   * Nanoseconds since the Unix epoch (UTC+0)
   */
  _nanoseconds: number;

  /**
   * Seconds since the Unix epoch.
   */
  _seconds: number;

}

/**
 * Time object
 */
export const DEFAULT_TIMESTAMP: Timestamped = {
  _nanoseconds: 0,
  _seconds: 0,
};

/**
 * Identity mechanics
 */
export interface Identifiable {

  /**
   * Time that the object was created. Measured in seconds since the Unix epoch.
   * 
   * This value is autogenerated server side, except in the cases where the API request
   * includes a `createdMS` value.
   */
  created_at: Timestamped;

  /**
   * Id of object.
   */
  id: string;

  /**
   * Marks the object as live or test mode.
   * 
   * Defaults to true and is not changeable after being set.
   */
  livemode: boolean;

  /**
   * Object name.
   */
  object: string;

}


/**
 * 
 * **************
 * Assets
 * **************
 * 
 */

/**
 * An Asset uploaded to Appdrop Cloud Storage
 */
export interface RemoteAsset extends CreateRemoteAssetParams, Identifiable {

  /**
   * Object name
   */
  object: 'remote_asset';

  /**
   * Last update timestamp.
   */
  updated_at: Timestamped;

}

/**
 * Default remote asset
 */
export const DEFAULT_REMOTE_ASSET: RemoteAsset = {
  asset_type: 'avatar',
  bytes: 0,
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  id: '',
  index: 0,
  livemode: true,
  mime: 'image/jpg',
  native_asset_height: 1,
  native_asset_width: 1,
  object: 'remote_asset',
  project_id: '',
  remote_url: '',
  remote_url_thumbnail: '',
  storage_ref: '',
  updated_at: DEFAULT_TIMESTAMP,
};

/**
 * Params to create a remote asset
 */
export interface CreateRemoteAssetParams extends
  ProjectScoped, Publishable, UpdateRemoteAssetParams {

  /**
   * Type of asset
   */
  asset_type: AssetType;

  /**
   * Number of bytes. `1024` means `1KB`
   */
  bytes: number;

  /**
   * Index of the asset in a collage
   */
  index: number;

  /**
   * Mime
   */
  mime: MimeType;

  /**
   * Height in px.
   */
  native_asset_height: number;

  /**
   * Width in px.
   */
  native_asset_width: number;

  /**
   * Asset download url
   */
  remote_url: string;

  /**
   * Compressed asset download url
   */
  remote_url_thumbnail: string;

  /**
   * Base of the storage ref
   * 
   * Ex. `user_avatars/user_001/asset_0002.jpg`
   */
  storage_ref: string;

}

/**
 * Props for objects scoped to an Appdrop project
 */
export interface ProjectScoped {

  /**
   * Id of the Appdrop project
   */
  project_id: string;

}

/**
 * Type of asset
 */
export type AssetType = 'avatar' | 'cover' | 'logo' | 'post';

/**
 * Mime
 */
export type MimeType =
  'application/zip' |
  'audio/mpeg' |
  'image/jpg' |
  'image/png' |
  'text/html' |
  'text/plain' |
  'video/mp4';

/**
 * Default val for thumbnail url
 */
export const REMOTE_ASSET_THUMBNAIL_URL_PENDING = 'REMOTE_ASSET_THUMBNAIL_URL_PENDING';

/**
 * Fallback image
 */
export const FALLBACK_IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/appdrop-v1.appspot.com/o/templates%2FqnAkvmAZnGQFtI7i7CfZbKQUrLNB4ITgz%2Fimage-fallback.png?alt=media&token=952d9528-0009-46c7-876e-ac5d8409e219';

/**
 * Params to update a remote asset 
 */
export interface UpdateRemoteAssetParams {

  /**
   * Number of bytes. `1024` means `1KB`
   */
  bytes?: number;

  /**
   * Index of the asset in a collage
   */
  index?: number;

}

/**
 * Remote asset properties
 */
export interface ContainsRemoteAssets {

  /**
   * Ordered array of remote asset ids
   */
  asset_ids: string[];

}

/**
 * Updates to the `` array
 */

/**
 * Params to update remote assets
 */
export interface UpdateContainsRemoteAssetsParams {

  /**
   * Updates to the `asset_ids` array
   */
  asset_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_asset_ids?: string[];

  /**
   * @deprecated
   */
  remove_asset_ids?: string[];

}

/**
 * Append operation
 */
export interface ArrayAppendOperation {

  /**
   * Items to append
   */
  append: (string | number)[];

}

/**
 * Remove operation
 */
export interface ArrayRemoveOperation {

  /**
   * Items to remove
   */
  remove: (string | number)[];

}

/**
 * Reset, append or remove array operation
 */
export type ArrayUpdateOperation = (string | number)[] | ArrayAppendOperation | ArrayRemoveOperation;

export const DEFAULT_MAX_NUM_ASSETS: {
  [key: string]: number | null;
} = {
  'post_message': 8,
  'post_listing': 10,
  project: null
};

/**
 * 
 * **************
 * Auth
 * **************
 * 
 */

/**
 * Generic User object.
 */
export interface User extends CreateUserParams, Identifiable, Mappable {

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'user';

}

/**
 * @deprecated
 */
export const SECURITY_QUESTIONS_ARR = [
  'What was the house number and street name you lived in as a child?',
  'What were the last four digits of your childhood telephone number?',
  'What is the first name of your closest childhood friend?',
  'What primary school did you attend?',
  'In what town or city was your first full time job?',
  'In what town or city did you meet your spouse or partner?',
  'What is the middle name of your oldest child?',
  'What are the last five digits of your driver\'s license number?',
  'What is your grandmother\'s (on your mother\'s side) maiden name?',
  'What is your spouse or partner\'s mother\'s maiden name?',
  'In what town or city did your parents meet?',
];

/**
 * Params to create a user.
 */
export interface CreateUserParams extends CreateMappableParams, UpdateUserParams {

  /**
   * The user's address.
   */
  address: Address;

  /**
   * Timestamp that the user's account was created
   */
  authenticated_at: Timestamped;

  /**
   * Name displayed on profile
   */
  display_name: string;

  /**
   * The user's email address.
   */
  email: string;

  /**
   * Id of the user.
   */
  id: string;

  /**
   * Latitude
   */
  lat: number;

  /**
  * Longitude
  */
  long: number;

  /**
   * Set of [key-value pairs] that you can attach to an object. 
   * This can be useful for storing additional information about the 
   * object in a structured format.
   */
  metadata: {

    [key: string]: any;

  };

  /**
   * The user's name
   */
  name: PersonName;

  /**
   * The user's password or an empty string. Encrypted before storage.
   */
  password: string;

  /**
   * The user's password encrypted or an empty string.
   */
  password_hash: string;

  /**
   * The user's password salt or an empty string.
   */
  password_salt: string;

  /**
   * Id of the user's password reset or an empty string.
   */
  password_reset_id: string;

  /**
   * The user's phone number.
   */
  phone: string;

  /**
   * Map of the data for the device(s) where the user is signed in
   * 
   * Key is the device id with the dot (.) characters purged
   */
  signed_in_devices: {
    [key: string]: SignedInDeviceData;
  };

  /**
   * Timezone of the user
   */
  timezone: Timezone;

  /**
   * @deprecated
   * 
   * Security answer for password resets or an empty string. Encrypted before storage.
   */
  security_answer?: string;

  /**
   * @deprecated
   * 
   * Security answer encrypted for password resets encrypted or an empty string.
   */
  security_answer_hash?: string;

  /**
   * @deprecated
   * 
   * Security answer salt for password resets or an empty string.
   */
  security_answer_salt?: string;

  /**
   * @deprecated
   * 
   * Security question for password resets or an empty string.
   */
  security_question?: string;

}

/**
 * Data for each signed in device
 */
export interface SignedInDeviceData extends UpdateSignedInDeviceDataParams {

  /**
   * Whether user is logged in
   */
  authenticated: boolean;

  /**
   * Unique device id
   */
  device_id: string;

  /**
   * Name of the device e.g. `iPhone 8`
   */
  device_name: string;

  /**
   * Push token
   */
  push_token: string;

  /**
   * Platform
   */
  platform: PlatformType;

  /**
   * Permissions
   */
  permissions: {

    /**
    * Camera access
    */
    camera: PermissionsStatus;

    /**
    * Camera roll access
    */
    camera_roll: PermissionsStatus;

    /**
    * Contacts access
    */
    contacts: PermissionsStatus;

    /**
    * Location access
    */
    location: PermissionsStatus;

    /**
    * Microphone access
    */
    microphone: PermissionsStatus;

    /**
    * Push access
    */
    push: PermissionsStatus;

  };

}

export const DEFAULT_SIGNED_IN_DEVICE_DATA: SignedInDeviceData = {
  authenticated: false,
  device_id: '',
  device_name: '',
  permissions: {
    camera: 'not_requested',
    camera_roll: 'not_requested',
    microphone: 'not_requested',
    contacts: 'not_requested',
    push: 'not_requested',
    location: 'not_requested',
  },
  platform: 'ios',
  push_token: '',
};

/**
 * Data for each signed in device
 */
export interface UpdateSignedInDeviceDataParams {

  /**
   * Whether user is logged in
   */
  authenticated?: boolean;

  /**
   * Unique device id
   */
  device_id?: string;

  /**
   * Name of the device e.g. `iPhone 8`
   */
  device_name?: string;

  /**
   * Push token
   */
  push_token?: string;

  /**
   * Platform
   */
  platform?: PlatformType;

  /**
   * Permissions
   */
  permissions?: {

    /**
     * Camera access
     */
    camera?: PermissionsStatus;

    /**
     * Camera roll access
     */
    camera_roll?: PermissionsStatus;

    /**
     * Contacts access
     */
    contacts?: PermissionsStatus;

    /**
     * Location access
     */
    location?: PermissionsStatus;

    /**
     * Microphone access
     */
    microphone?: PermissionsStatus;

    /**
     * Push access
     */
    push?: PermissionsStatus;

  };

}

/**
 * Status of device permission
 */
export type PermissionsStatus = 'not_requested' | 'denied' | 'approved';

/**
 * Name
 */
export interface PersonName extends UpdatePersonNameParams {

  /**
   * Prefix: e.g. `Mr.`
   */
  name_prefix: string;

  /**
   * Given name: e.g. `Kamar`
   */
  given_name: string;

  /**
   * Middle name: e.g. `Robert Allen`
   */
  middle_name: string;

  /**
   * Family name: e.g. `Mack`
   */
  family_name: string;

  /**
   * Suffix: e.g. `Esq.`
   */
  name_suffix: string;

}

/**
 * Params to update a name
 */
export interface UpdatePersonNameParams {

  /**
   * Prefix: e.g. `Mr.`
   */
  name_prefix?: string;

  /**
   * Given name: e.g. `Kamar`
   */
  given_name?: string;

  /**
   * Middle name: e.g. `Robert Allen`
   */
  middle_name?: string;

  /**
   * Family name: e.g. `Mack`
   */
  family_name?: string;

  /**
   * Suffix: e.g. `Esq.`
   */
  name_suffix?: string;

}

/**
 * Properties for objects that can interact with a map.
 */
export interface Mappable extends CreateMappableParams { }

/**
 * Params to create a mappable object
 */
export interface CreateMappableParams {

  /**
   * Latitude
   */
  lat: number;

  /**
  * Longitude
  */
  long: number;

}

export const DEFAULT_LATITUDE = 37.78825;
export const DEFAULT_LONGITUDE = -122.4324;
export const DEFAULT_LATITUDE_DELTA = 0.0922;
export const DEFAULT_LONGITUDE_DELTA = 0.0421;

export type Timezone =
  'America/New_York' |
  'America/Chicago' |
  'America/Denver' |
  'America/Los_Angeles';
export const DEFAULT_TIMEZONE: Timezone = 'America/Los_Angeles';

/**
 * Params to update a user.
 * 
 * Note that the properties `id` and `livemode` are missing as these are 
 * not editable.
 */
export interface UpdateUserParams extends UpdateMappableParams {

  /**
   * The user's address.
   */
  address?: Address;

  /**
   * Name displayed on profile
   */
  display_name?: string;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * Set of [key-value pairs] that you can attach to an object. 
   * This can be useful for storing additional information about the 
   * object in a structured format.
   */
  metadata?: {

    [key: string]: any;

  };

  /**
   * The user's name.
   */
  name?: UpdatePersonNameParams;

  /**
   * The user's password. Encrypted before storage.
   */
  password?: string;

  /**
   * The user's password encrypted or an empty string.
   */
  password_hash?: string;

  /**
   * The user's phone number.
   */
  phone?: string;

  /**
   * Map of the push notification tokens of the device(s) where the user is signed in. `null` if logged out.
   * 
   * Key is the device id with the dot (.) characters purged
   */
  signed_in_devices?: {

    [key: string]: UpdateSignedInDeviceDataParams;

  };

  /**
   * @deprecated
   */
  fcm_token?: string;

  /**
   * @deprecated
   * 
   * Map of the FCM tokens of the device(s) where the user is signed in. `null` if logged out.
   * 
   * Key is the device id with the dot (.) characters purged
   */
  signed_in_devices_fcm_tokens?: {
    [key: string]: string | null;
  };

  /**
   * @deprecated
   * 
   * Security answer for password resets or an empty string. Encrypted before storage.
   */
  security_answer?: string;

  /**
   * @deprecated
   * 
   * Security answer for password resets encrypted or an empty string.
   */
  security_answer_hash?: string;

  /**
   * @deprecated
   * 
   * Security question for password resets or an empty string.
   */
  security_question?: string;

}

export interface UpdateMappableParams {

  /**
   * Latitude
   */
  lat?: number;

  /**
   * Longitude
   */
  long?: number;
}

/**
 * Params to authenticate a user.
 */
export interface AuthenticateUserParams {

  /**
   * Auth type
   */
  authentication_type: AuthenticationType;

  /**
   * Email address
   */
  email: string;

  /**
   * Raw password if Appdrop Auth
   * 
   * Auth Provider constant value if Firebase Auth
   */
  password: string;

  /**
   * Id of the password reset
   */
  reset_pass_id?: string;

  /**
   * Role for marketplace
   */
  role?: MarketplaceProjectUserRole;

}

/**
 * Params to authenticate a marketplace user.
 */
export interface AuthenticateMarketplaceUserParams {

  /**
   * Role for marketplace
   */
  role: MarketplaceProjectUserRole;

}

/**
 * Auth operations
 */
export type AuthenticationType = 'sign_in' | 'sign_up' | 'reset_pass' | 'firebase_auth';
export const FIREBASE_EMAIL_AUTH = 'FIREBASE_EMAIL_AUTH';
export const FIREBASE_APPLE_AUTH = 'FIREBASE_APPLE_AUTH';
export const FIREBASE_GOOGLE_AUTH = 'FIREBASE_GOOGLE_AUTH';
export const FIREBASE_FACEBOOK_AUTH = 'FIREBASE_FACEBOOK_AUTH';
export const FIREBASE_PHONE_AUTH = 'FIREBASE_PHONE_AUTH';

/**
 * Password reset object
 */
export interface PasswordReset extends CreatePasswordResetParams, Identifiable {

  /**
   * Object name
   */
  object: 'password_reset';

}

/**
 * Password reset
 */
export const DEFAULT_PASSWORD_RESET: PasswordReset = {
  created_at: DEFAULT_TIMESTAMP,
  expires: DEFAULT_TIMESTAMP,
  id: '',
  livemode: true,
  object: 'password_reset',
  project_id: '',
  user_id: '',
  verification_code: ''
};

/**
 * Params to create a password reset
 */
export interface CreatePasswordResetParams extends UpdatePasswordResetParams {

  /**
   * Time the reset expires
   */
  expires: Timestamped;

  /**
   * Project id
   */
  project_id: string;

  /**
   * User id
   */
  user_id: string;

  /**
   * 6-digit reset code
   */
  verification_code: string;

}

/**
 * Params to update a password reset
 */
export interface UpdatePasswordResetParams {

  /**
   * Time the reset expires
   */
  expires?: Timestamped;

}

/**
 * Params to send a password reset email
 */
export interface SendPasswordResetEmailParams {

  /**
   * Email recipient
   */
  email: string;

  /**
   * Project Id
   */
  project_id: string;

  /**
   * Role for marketplace
   */
  role?: string;

}

/**
 * Params to send a password reset email
 */
export interface SendMarketplacePasswordResetEmailParams extends SendPasswordResetEmailParams {

  /**
   * Role for marketplace
   */
  role: string;

}

/**
 * Params to send a password reset verification code
 */
export interface SendPasswordResetVerificationCodeParams {

  /**
   * Id of the password reset
   */
  password_reset_id: string;

  /**
   * Verification code from email
   */
  verification_code: string;

}

/**
 * Auth errors
 */
export type AuthErrorCode =
'auth/email-already-in-use'|
'auth/weak-password'|
'auth/user-disabled'|
'auth/user-not-found'|
'auth/incorrect-password'|
'auth/error-sending-password-reset-verification-code'|
'auth/incorrect-password-reset-verification-code';

/**
 * Auth Error response map
 */
export const AUTH_ERROR_RESPONSES: {
  [key in AuthErrorCode]: APIRequestError;
} = {
  'auth/email-already-in-use': {
    error_code: 'auth/email-already-in-use',
    message: 'That email is already in use. Please try signing in.',
    status_code: 401
  },
  'auth/weak-password': {
    error_code: 'auth/weak-password',
    message: 'Please select a stronger password.',
    status_code: 401
  },
  'auth/user-disabled': {
    error_code: 'auth/user-disabled',
    message: 'Your account has been deactivated.',
    status_code: 401
  },
  'auth/user-not-found': {
    error_code: 'auth/user-not-found',
    message: 'Sorry, there is no account at that email. Please try signing up.',
    status_code: 401
  },
  'auth/incorrect-password': {
    error_code: 'auth/incorrect-password',
    message: 'Your password is incorrect.',
    status_code: 401
  },
  'auth/error-sending-password-reset-verification-code': {
    error_code: 'auth/error-sending-password-reset-verification-code',
    message: 'There was an error sending your password reset email.',
    status_code: 401
  },
  'auth/incorrect-password-reset-verification-code': {
    error_code: 'auth/incorrect-password-reset-verification-code',
    message: 'That verification code is incorrect. Please try again.',
    status_code: 401
  },
};


/**
 * @deprecated
 * 
 * Params to exchange an email address for a User object which includes 
 * the `security_question` and `security_answer_hash` property to display 
 * to the resetting user. If either of these properties is an 
 * empty string, then the user skipped this security section step and must contact support 
 * who can set a temporary answer to the security question for the user.
 */
export interface RetrieveUserSecurityQuestionParams {

  /**
   * The user's email address.
   */
  email: string;

}

/**
 * @deprecated
 * 
 * Params to exchange a security answer for authentication
 */
export interface RequestUserPasswordResetParams {

  /**
   * Security answer for password resets or an empty string.
   */
  security_answer: string;

}


/**
* 
* **************
* Billing
* **************
* 
*/

/**
* Financial details for Entities and Project Users.
*/
export interface FinancialDetails extends CreateFinancialDetailsParams { }

/**
 * Params to create financial details.
 */
export interface CreateFinancialDetailsParams extends UpdateFinancialDetailsParams {

  /**
   * Bank account
   */
  bank_accounts: {
    [key: string]: BankAccount | null;
  };

  /**
   * The user or entity's credit cards on file.
   */
  cards: {
    [key: string]: Card | null;
  };

  /**
   * Map of credit card or bank charges charged to
   * the user or entity
   */
  charge_receipts: {
    [key: string]: Charge | null;
  }

  /**
   * A map of the IAP receipts for this user.
   * 
   * Key is the InAppPurchaseReceipt `id`
   */
  in_app_purchase_receipts: {
    [key: string]: InAppPurchaseReceipt | null;
  };

  /**
   * Net Sales accumulated during the current 
   * payout period scheduled to be remitted.
   * 
   * The unit is the cents.
   * 
   * Example: 10050 indicates $100.50
   */
  payout_balance: number;

  /**
   * The id of the entity's Stripe subscription object.
   * 
   * Note – Pro plan organizations with add-ons get a wildcard Stripe
   * price following their selections during strategy session calls.
   */
  subscriptions: {
    [key: string]: UpdateSubscriptionParams | null;
  }

}

/**
 * Params to update a nested field in financial details.
 */
export interface UpdateFinancialDetailsParams {

  /**
   * Bank account
   */
  bank_accounts?: {
    [key: string]: UpdateBankAccountParams | null;
  };

  /**
   * The user or entity's credit cards on file.
   */
  cards?: {
    [key: string]: CreateCardParams | null;
  };

  /**
   * A map of the IAP receipts for this user.
   * 
   * Key is the InAppPurchaseReceipt `id`
   */
  in_app_purchase_receipts?: {
    [key: string]: UpdateInAppPurchaseReceiptParams | null;
  };

  /**
   * Net Sales accumulated during the current 
   * payout period scheduled to be remitted.
   * 
   * The unit is the cents.
   * 
   * Example: 10050 indicates $100.50
   */
  payout_balance?: number;

  /**
   * The id of the entity's Stripe subscription object.
   * 
   * Note – Pro plan organizations with add-ons get a wildcard Stripe
   * price following their selections during strategy session calls.
   */
  subscriptions?: {
    [key: string]: UpdateSubscriptionParams | null;
  }

}

/**
 * Receipt from an IAP Purchase
 */
export interface InAppPurchaseReceipt extends CreateInAppPurchaseReceiptParams, Identifiable {

  /**
   * Object name
   */
  object: 'in_app_purchase_receipt';

  /**
   * Last update
   */
  updated_at: Timestamped;

}

/**
 * Params to create an IAP receipt
 */
export interface CreateInAppPurchaseReceiptParams extends UpdateInAppPurchaseReceiptParams {

  /**
   * Purchase token for Android IAP receipts
   */
  android_purchase_token: string;

  /**
   * Subscription id for Android IAP receipts
   */
  android_subscription_id: string;

  /**
   * `true` if this receipt points to an active subscription.
   * 
   * `false` otherwise
   */
  auto_renewing: boolean;

  /**
   * Id of the IAP that the user purchased.
   */
  iap_id: string;

  /**
   * Transaction receipt for iOS IAPs
   */
  ios_transaction_receipt: string;

}

/**
 * Params to update an IAP receipt
 */
export interface UpdateInAppPurchaseReceiptParams {

  /**
   * Subscription id for Android IAP receipts
   */
  android_purchase_token?: string;

  /**
   * `true` if this receipt points to an active subscription.
   * 
   * `false` otherwise
   */
  android_subscription_id?: string;

  /**
   * Id of the IAP that the user purchased.
   */
  auto_renewing?: boolean;

  /**
   * Transaction receipt for iOS IAPs
   */
  ios_transaction_receipt?: string;

}

/**
 * Three-letter ISO 4217 code in all lowercase
 */
export type CurrencyCode = 'aed' | 'afn' | 'all' | 'amd' | 'ang' | 'aoa' | 'ars' | 'aud' |
  'awg' | 'azn' | 'bam' | 'bbd' | 'bdt' | 'bgn' | 'bif' | 'bmd' |
  'bnd' | 'bob' | 'brl' | 'bsd' | 'bwp' | 'bzd' | 'cad' | 'cdf' |
  'chf' | 'clp' | 'cny' | 'cop' | 'crc' | 'cve' | 'czk' | 'djf' |
  'dkk' | 'dop' | 'dzd' | 'egp' | 'etb' | 'eur' | 'fjd' | 'fkp' |
  'gbp' | 'gel' | 'gip' | 'gmd' | 'gnf' | 'gtq' | 'gyd' | 'hkd' |
  'hnl' | 'hrk' | 'htg' | 'huf' | 'idr' | 'ils' | 'inr' | 'isk' |
  'jmd' | 'jpy' | 'kes' | 'kgs' | 'khr' | 'kmf' | 'krw' | 'kyd' |
  'kzt' | 'lak' | 'lbp' | 'lkr' | 'lrd' | 'lsl' | 'mad' | 'mdl' |
  'mga' | 'mkd' | 'mmk' | 'mnt' | 'mop' | 'mro' | 'mur' | 'mvr' |
  'mwk' | 'mxn' | 'myr' | 'mzn' | 'nad' | 'ngn' | 'nio' | 'nok' |
  'npr' | 'nzd' | 'pab' | 'pen' | 'pgk' | 'php' | 'pkr' | 'pln' |
  'pyg' | 'qar' | 'ron' | 'rsd' | 'rub' | 'rwf' | 'sar' | 'sbd' |
  'scr' | 'sek' | 'sgd' | 'shp' | 'sll' | 'sos' | 'srd' | 'std' |
  'szl' | 'thb' | 'tjs' | 'top' | 'try' | 'ttd' | 'twd' | 'tzs' |
  'uah' | 'ugx' | 'usd' | 'uyu' | 'uzs' | 'vnd' | 'vuv' | 'wst' |
  'xaf' | 'xcd' | 'xof' | 'xpf' | 'yer' | 'zar' | 'zmw';

/**
 * Invoice
 */
export interface Invoice extends CreateInvoiceParams, Identifiable {

  /**
   * Object name
   */
  object: 'invoice';

}

/**
 * Params to create an invoice
 */
export interface CreateInvoiceParams extends UpdateInvoiceParams {

  /**
   * Description of each line item covered in the invoice
   */
  description: string;

  /**
   * Date that invoice is due
   */
  due: Timestamped;

  /**
   * ID of the charge
   */
  charge: string | null;

  /**
   * Date that invoice was paid
   */
  paid: Timestamped;

}

/**
 * Params to update an invoice
 */
export interface UpdateInvoiceParams {

  /**
   * ID of the charge
   */
  charge?: string | null;

  /**
   * Description of each line item covered in the invoice
   */
  description?: string;

  /**
   * Date that invoice is due
   */
  due?: Timestamped;

  /**
   * Date that invoice was paid
   */
  paid?: Timestamped;

}

/**
 * Stripe customer
 */
export interface Customer extends CreateCustomerParams {

  /**
   * The customer's payment sources, if any.
   */
  sources: {

    /**
     * Source data
     */
    data: Card[];

  };

  /**
   * The customer's current subscriptions, if any.
   */
  subscriptions: {

    /**
     * Subscription data
     */
    data: Subscription[];

  };

}

/**
 * Params to create a Stripe customer
 */
export interface CreateCustomerParams extends UpdateCustomerParams {

  /**
   * Email address
   */
  email: string;

  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Name
   */
  name: string;

}

/**
 * Params to update a Stripe customer
 */
export interface UpdateCustomerParams {

  /**
   * Email address
   */
  email?: string;

  /**
   * Name
   */
  name?: string;

}

export interface CreateTokenResponseBody {

  /**
   * IP Address
   */
  client_ip: string;

  /**
   * Unix timestamp in seconds.
   */
  created: number;

  /**
   * Unique id for the token.
   * 
   * @Important This ID is passed as the Customer Source!
   */
  id: string;

  /**
   * Live or test.
   */
  livemode: boolean;

  /**
   * Object name.
   */
  object: 'token';

  /**
   * Token type
   */
  type: 'card';

  /**
   * Flag denoting whether the token's been used before.
   */
  used: boolean;

}

/**
 * Params to create a Card Token
 */
export interface CreateCardTokenParams {

  /**
   * Card params
   */
  card: CreateCardParams;

}

/**
 * Params to generate a Stripe Card
 */
export interface CreateCardParams {

  /**
   * Zip code
   */
  address_zip: string;

  /**
   * Card verification number
   */
  cvc: string;

  /**
   * Expiration Month
   */
  exp_month: string;

  /**
   * Expiration Year
   */
  exp_year: string;

  /**
   * Card number
   */
  number: string;

}

export const DEFAULT_CARD_PARAMS: CreateCardParams = {
  address_zip: '',
  cvc: '',
  exp_month: '01',
  exp_year: '2022',
  number: ''
};

export type ExpMonthType =
  '01' | '02' | '03' | '04' |
  '05' | '06' | '07' | '08' |
  '09' | '10' | '11' | '12';

export type ExpYearType =
  '2021' | '2022' | '2023' | '2024' |
  '2025' | '2026' | '2027' | '2028' |
  '2029' | '2030' | '2031' | '2032' |
  '2033' | '2034';

export type ExpComponent = 'exp_month' | 'exp_year';
export const EXP_ARR_MAP: {
  [key in ExpComponent]: (ExpMonthType | ExpYearType)[];
} = {
  exp_month: [
    '01', '02', '03', '04',
    '05', '06', '07', '08',
    '09', '10', '11', '12'
  ],
  exp_year: [
    '2021', '2022', '2023', '2024',
    '2025', '2026', '2027', '2028',
    '2029', '2030', '2031', '2032',
    '2033', '2034'
  ]
};

/**
 * Card Source Token returned from Stripe
 */
export interface CreateCardTokenResponseBody extends CreateTokenResponseBody {

  /**
   * Card object.
   */
  card: Card;

  /**
   * Token type
   */
  type: 'card';

}

/**
 * The entity's credit card on file.
 * 
 * Note: The data stored on Appdrop's server is designed to help entity admins
 * identify the credit card after creation. The full information is not needed because
 * the data is turned into a Stripe Source object once verified.
 */
export interface Card extends CreateCardParams {

  /**
   * Unique identifier
   */
  id: string;

  /**
   * Object name
   */
  object: 'card';

  /**
   * Card's brand.
   */
  brand: CardBrand | null;

  /**
   * If a CVC was provided, results of the check.
   */
  cvc_check: CVCCheckType | null;

  /**
   * Uniquely identifies this particular card number. You can use this attribute
   * to check whether two customers who've signed up with you are using the same
   * card number,for example. For payment methods that tokenize card information
   * (Apple Pay, Google Pay), the tokenized number might be provided instead
   * of the underlying card number.
   */
  fingerprint: string;

  /**
   * Card funding type.
   */
  funding: CardFundingType | null;

  /**
   * The last four digits of the card.
   */
  last4: string;

}

/**
 * Card's brand.
 */
export type CardBrand = 'American Express' |
  'Diners Club' |
  'DiscoverCard' |
  'JCB' |
  'MasterCard' |
  'Visa';

/**
 * If a CVC was provided, results of the check.
 */
export type CVCCheckType = 'pass' | 'fail' | 'unavailable' | 'unchecked';

/**
 * Card funding type.
 */
export type CardFundingType = 'credit' | 'debit' | 'prepaid' | 'unknown';

/**
 * Params to create a Card Source and attach it to a Customer.
 */
export interface CreateCustomerSourceParams {

  /**
   * Id of the Card Source Token object.
   */
  source: string;

}

/**
 * Entity bank account
 */
export interface BankAccount extends CreateBankAccountParams { }

/**
 * Params to create an entity Bank Account
 */
export interface CreateBankAccountParams extends UpdateBankAccountParams {

  /**
   * The name of the person or business that owns the bank account.
   */
  account_holder_name: string;

  /**
   * Account number for the bank account.
   */
  account_number: string;

  /**
   * Bank account address
   */
  address: Address;

  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  account_holder_type: BankAccountHolderType;

  /**
   * The routing transit number for the bank account.
   */
  routing_number: string;

}

/**
 * Params to update an entity Bank Account
 */
export interface UpdateBankAccountParams {

  /**
   * The name of the person or business that owns the bank account.
   */
  account_holder_name?: string;

  /**
   * Account number for the bank account.
   */
  account_number?: string;

  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  account_holder_type?: BankAccountHolderType;

  /**
   * Address of Bank Account
   */
  address?: Address;

  /**
   * The routing transit number for the bank account.
   */
  routing_number?: string;

}

/**
 * Type of Bank Account. Required.
 */
export type BankAccountHolderType = 'company' | 'individual';

/**
 * Stripe Subscription object
 */
export interface Subscription extends CreateSubscriptionParams {

  /**
   * Boolean indicating whether this subscription should cancel at the end of the current period.
   */
  cancel_at_period_end: boolean;

  /**
   * Id of the payment method. Must belong to customer.
   * 
   * `null` if not passed with the subscription create operation
   */
  default_payment_method: string;

  /**
   * Timestamp
   */
  created: number;

  /**
   * Subscription id
   */
  id: string;

  /**
   * Subscription item
   */
  items: SubscriptionItem[];

  /**
   * Object name.
   */
  object: 'subscription';

  /**
   * Subscription status.
   */
  status:
  'incomplete' | 'incomplete_expired' |
  'trialing' | 'active' | 'past_due' |
  'canceled' | 'unpaid';

}

/**
 * Params to generate a Stripe Subscription
 */
export interface CreateSubscriptionParams extends UpdateSubscriptionParams {

  /**
   * Customer id
   */
  customer: string;

  /**
   * Subscription item
   */
  items: CreateSubscriptionItemParams[];

}

/**
 * Subscription item
 */
export interface SubscriptionItem extends CreateSubscriptionItemParams {

  /**
   * id of the subscription item.
   */
  id: string;

}

/**
 * Params to create a subscription item
 */
export interface CreateSubscriptionItemParams {

  /**
   * The ID of the price object.
   */
  price: string;

  /**
   * Special value to start billing immediately
   */
  trial_end: 'now';

}

/**
 * Params to update a Stripe Subscription
 */
export interface UpdateSubscriptionParams {

  /**
   * Boolean indicating whether this subscription should cancel at the end of the current period.
   */
  cancel_at_period_end?: boolean;

  /**
   * Id of the payment method. Must belong to customer.
   */
  default_payment_method?: string;

}

/**
 * Stripe Charge object.
 * 
 * `paid` field is primary field that matters.
 */
export interface Charge extends CreateChargeParams {

  /**
   * Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
   */
  amount_refunded: number;

  /**
   * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined.
   */
  calculated_statement_descriptor: string | null;

  /**
   * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
   */
  captured: boolean;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Whether the charge has been disputed.
   */
  disputed: boolean;

  /**
   * Error code explaining reason for charge failure if available (see [the errors 
   * section](https://stripe.com/docs/api#errors) for a list of codes).
   */
  failure_code: string | null;

  /**
   * Message to user further explaining reason for charge failure if available.
   */
  failure_message: string | null;

  /**
   * Unique identifier for the object.
   * 
   * @Important – This gets copied over to the order object in order to
   * facilitate returns if necessary.
   */
  id: string;

  /**
   * Has the value `true` if the object exists in live mode or the 
   * value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * ID of the order this charge is for if one exists.
   */
  order: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'charge';

  /**
   * `true` if the charge succeeded, or was successfully authorized for later capture.
   */
  paid: boolean;

  /**
   * ID of the payment method used in this charge.
   */
  payment_method: string | null;

  /**
   * Details about the payment method at the time of the transaction.
   */
  payment_method_details: PaymentMethodDetails | null;

  /**
   * This is the transaction number that appears on email receipts sent for this 
   * charge. This attribute will be `null` until a receipt has been sent.
   */
  receipt_number: string | null;

  /**
   * This is the URL to view the receipt for this charge. The 
   * receipt is kept up-to-date to the latest state of the charge, including 
   * any refunds. If the charge is for an Invoice, the receipt will 
   * be stylized as an Invoice receipt.
   */
  receipt_url: string | null;

  /**
   * Whether the charge has been fully refunded. If the charge is 
   * only partially refunded, this attribute will still be false.
   */
  refunded: boolean;

  /**
   * A list of refunds that have been applied to the charge.
   */
  refunds: {

    object: 'list';

    data: Refund[];

  };

  /**
   * The status of the payment.
   */
  status: ChargeStatus;

}

/**
 * The status of the payment.
 */
export type ChargeStatus = 'succeeded' | 'pending' | 'failed';

/**
 * Details of payment method for charge
 */
export interface PaymentMethodDetails {

  /**
   * Card use to process charge.
   */
  card?: Card;

  /**
   * The type of transaction-specific details of the payment method used in the payment.
   * An additional hash is included on `payment_method_details` with a name matching this value.
   * It contains information specific to the payment method.
   */
  type: PaymentMethodType;

}

export type PaymentMethodType =
  'ach_credit_transfer' | 'ach_debit' | 'alipay' | 'au_becs_debit' |
  'bancontact' | 'card' | 'card_present' | 'eps' | 'giropay' | 'ideal' |
  'klarna' | 'multibanco' | 'p24' | 'sepa_debit' | 'sofort' | 'stripe_account' | 'wechat';

/**
 * Params to generate a Stripe Charge
 */
export interface CreateChargeParams {

  /**
   * Amount intended to be collected by this payment. A positive integer 
   * representing how much to charge in the [smallest currency 
   * unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 
   * cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). 
   * The minimum amount is $0.50 US or [equivalent in charge
   * currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). 
   * The amount value supports up to eight digits (e.g., a value of 99999999
   * for a USD charge of $999,999.99).
   */
  amount: number;

  /**
   * Whether to immediately capture the charge.
   */
  capture: true;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: CurrencyCode;

  /**
   * The ID of an existing customer that will be charged in this request.
   */
  customer: string;

  /**
   * An arbitrary string which you can attach to a `Charge` object. 
   * It is displayed when in the web interface alongside the charge. 
   * Note that if you use Stripe to send automatic email receipts 
   * to your customers, your receipt emails will include the `description` 
   * of the charge(s) that they are describing.
   */
  description: string;

  /**
   * The email address to which this 
   * charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be 
   * sent. The receipt will not be sent until the charge is paid, 
   * and no receipts will be sent for test mode charges. If this charge 
   * is for a [Customer](https://stripe.com/docs/api/customers/object), the 
   * email address specified here will override the customer's email 
   * address. If `receipt_email` is specified for a charge in live mode, 
   * a receipt will be sent regardless of 
   * your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receipt_email: string;

  /**
   * Shipping information for the charge. Helps prevent 
   * fraud on charges for physical goods.
   */
  shipping: {

    /**
     * Shipping address.
     */
    address: {

      /**
       * City, district, suburb, town, or village.
       */
      city: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: CountryCode;

      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2: string;

      /**
       * ZIP or postal code.
       */
      postal_code: string;

      /**
       * State, county, province, or region.
       */
      state: string;

    };

    /**
     * Recipient name.
     */
    name: string;

  };

  /**
   * A payment source to be charged. This can be the ID of 
   * a [card](https://stripe.com/docs/api#cards) (i.e., credit or 
   * debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), 
   * a [source](https://stripe.com/docs/api#sources), 
   * a [token](https://stripe.com/docs/api#tokens), or 
   * a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you 
   * must also pass the ID of the associated customer.
   */
  source: string;

  /**
   * Provides information about the charge that customers see on 
   * their statements. Concatenated with the prefix (shortened 
   * descriptor) or statement descriptor that's set on the account 
   * to form the complete statement descriptor. Maximum 22 
   * characters for the concatenated descriptor.
   */
  statement_descriptor_suffix: string;

}


/**
 * Refund object.
 * 
 * `status` field is the primary useful one.
 */
export interface Refund extends CreateRefundParams {

  /**
   * Amount, in %s.
   */
  amount: number;

  /**
   * ID of the charge that was refunded.
   */
  charge: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: CurrencyCode;

  /**
   * If the refund failed, the reason for refund failure if known.
   */
  failure_reason?: RefundFailureReason;

  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'refund';

  /**
   * This is the transaction number that appears on email receipts sent for this refund.
   */
  receipt_number: string | null;

  /**
   * Status of the refund. For credit card refunds, this can 
   * be `pending`, `succeeded`, or `failed`. For other types of refunds, 
   * it can be `pending`, `succeeded`, `failed`, or `canceled`. 
   * Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation 
   * for more details.
   */
  status: RefundStatus;

}

/**
 * If the refund failed, the reason for refund failure if known.
 */
export type RefundFailureReason = 'lost_or_stolen_card' | 'expired_or_canceled_card' | 'unknown';

/**
 * Status of the refund. 
 */
export type RefundStatus = 'pending' | 'succeeded' | 'failed' | 'canceled';

/**
 * Params to create a Refund
 */
export interface CreateRefundParams extends ProjectScoped {

  /**
   * Amount being returned in cents.
   */
  amount: number;

  /**
   * Id of the Charge object.
   */
  charge: string;

  /**
   * Reason for the refund.
   */
  reason: RefundReason;

}

/**
 * Reason for the refund.
 */
export type RefundReason = 'duplicate' | 'fraudulent' | 'requested_by_customer';

/**
* 
* **************
* Entities
* **************
* 
*/

/**
* An entity utilizing Appdrop Saas.
*/
export interface Entity extends CreateEntityParams, Identifiable {

  /**
   * Financial details for this Appdrop Entity
   */
  financial_details: FinancialDetails;

  /**
   * Object name.
   */
  object: 'entity';

}

/**
 * Params to create an entity.
 */
export interface CreateEntityParams extends UpdateEntityParams {

  /**
   * Type of entity
   */
  entity_type: EntityType;

  /**
   * Financial details for this Appdrop Entity
   */
  financial_details: CreateFinancialDetailsParams;

  /**
   * The legal name of this Entity.
   */
  name: string;

  /**
   * The id of the User that owns the Entity.
   */
  owner_id: string;

  /**
   * Email addresses of pending team members.
   */
  pending_team_member_emails: string[];

  /**
   * This array contains the ids of each User with read and write access
   * to the Entity.
   */
  team_member_ids: string[];

}

/**
 * Type of entity
 */
export type EntityType = 'enterprise' | 'organization';

/**
 * Params to update an entity.
 */
export interface UpdateEntityParams {

  /**
   * The legal name of this Entity.
   */
  name?: string;

  /**
   * The id of the User that owns the Enterprise.
   */
  owner_id?: string;

  /**
   * Updates to the `pending_team_member_emails` array
   */
  pending_team_member_emails?: ArrayUpdateOperation;

  /**
   * Updates to the `team_member_ids` array
   */
  team_member_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_pending_team_member_emails?: string[];

  /**
   * @deprecated
   */
  append_team_member_ids?: string[];

  /**
   * @deprecated
   */
  remove_pending_team_member_emails?: string[];

  /**
   * @deprecated
   */
  remove_team_member_ids?: string[];

}


/**
 * An Appdrop Enterprise account. Pays for Organizations to access Appdrop.
 */
export interface Enterprise extends CreateEnterpriseParams, Entity {

  /**
   * Type of entity
   */
  entity_type: 'enterprise';

}

/**
 * Initial value for Appdrop Enterprise
 */
export const DEFAULT_ENTERPRISE: Enterprise = {
  created_at: {
    _nanoseconds: 0,
    _seconds: 0
  },
  entity_type: 'enterprise',
  financial_details: {
    bank_accounts: {},
    cards: {},
    charge_receipts: {},
    in_app_purchase_receipts: {},
    payout_balance: 0,
    subscriptions: {}
  },
  id: '',
  livemode: true,
  name: '',
  object: 'entity',
  organization_ids: [],
  owner_id: '',
  pending_team_member_emails: [],
  team_member_ids: [],
  workspace_email_suffix: ''
};

/**
 * Params to create an enterprise.
 */
export interface CreateEnterpriseParams extends CreateEntityParams {

  /**
   * This array includes the id of each Organization that this Enterprise owns.
   */
  organization_ids: string[];

  /**
   * The suffix for valid emails.
   * 
   * Example: `@georgetown.edu`
   */
  workspace_email_suffix: string;

}

/**
 * Params to update an enterprise.
 */
export interface UpdateEnterpriseParams extends UpdateEntityParams {

  /**
   * Updates to the `organization_ids` array
   */
  organization_ids?: ArrayUpdateOperation;

  /**
   * The suffix for valid emails.
   * 
   * Example: `@georgetown.edu`
   */
  workspace_email_suffix?: string;

  /**
   * @deprecated
   */
  append_organization_ids?: string[];

  /**
   * @deprecated
   */
  remove_organization_ids?: string[];

}



/**
 * An entity which owns Appdrop projects
 */
export interface Organization extends CreateOrganizationParams, Entity {

  /**
   * The minted API Key this Organization uses to authenticate its projects.
   */
  api_key: string;

  /**
   * Type of entity
   */
  entity_type: 'organization';

}

/**
 * Initial value for Appdrop Organization.
 */
export const DEFAULT_ORGANIZATION: Organization = {
  api_key: '',
  created_at: {
    _nanoseconds: 0,
    _seconds: 0
  },
  entity_type: 'organization',
  financial_details: {
    bank_accounts: {},
    cards: {},
    charge_receipts: {},
    in_app_purchase_receipts: {},
    payout_balance: 0,
    subscriptions: {}
  },
  id: '',
  livemode: true,
  name: '',
  object: 'entity',
  owner_id: '',
  pending_team_member_emails: [],
  project_ids: [],
  team_member_ids: []
};

/**
 * Params to create an organization
 */
export interface CreateOrganizationParams extends CreateEntityParams {

  /**
   * This array includes the id of each Project that this Organization owns.
   */
  project_ids: string[];

}


/**
 * Params to update an organization
 */
export interface UpdateOrganizationParams extends UpdateEntityParams {

  /**
   * This array includes the id of each Project that this Organization owns.
   */
  project_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_project_ids?: string[];

  /**
   * @deprecated
   */
  remove_project_ids?: string[];

}


/**
* 
* **************
* Orders
* **************
*
*/

/**
* Customer Order
*/
export interface Order extends
  AttachOrderPromoParams, Identifiable, CreateOrderParams,
  ConfirmOrderParams, OrderResultBase, ProjectScoped, RequestReturnParams {

  /**
   * Timestamp object when the order was confirmed. Used to
   * display shipping estimations.
   */
  confirmed_at: Timestamped;

  /**
   * Id in external system
   */
  external_id: string | null;

  /**
   * Items in order
   */
  items: OrderItem[];

  /**
   * Object name
   */
  object: 'order';

  /**
   * Timestamp onject of last order update.
   */
  updated_at: Timestamped;

  /**
   * Id of the Appdrop project user who initiated the order
   */
  user_id: string;

}

/**
 * Default order
 */
export const DEFAULT_ECOMMERCE_ORDER: Order = {
  costs: {
    additional_fee: '0.00',
    digitization: '0.00',
    fulfillment_fee: '0.00',
    currency: 'USD',
    discount: '',
    shipping: '1.00',
    subtotal: '1.00',
    tax: '1.00',
    total: '2.00',
    vat: '0.00'
  },
  created_at: DEFAULT_TIMESTAMP,
  confirmed_at: DEFAULT_TIMESTAMP,
  external_id: '',
  gift: null,
  has_discontinued_items: false,
  id: '',
  items: [],
  livemode: true,
  object: 'order',
  project_id: '',
  promo_id: '',
  recipient: {
    address1: '200 Continental Drive',
    address2: 'STE 401',
    city: 'Newark',
    country_code: 'US',
    email: null,
    name: 'Guest',
    state_code: 'DE',
    zip: '19713'
  },
  retail_costs: {
    currency: 'USD',
    discount: null,
    shipping: null,
    subtotal: null,
    tax: null,
    total: null,
    vat: null
  },
  requested_return_at: DEFAULT_TIMESTAMP,
  requested_return_data: [],
  requested_return_reason: 'The item has defects.',
  shipping: 'STANDARD',
  status: 'draft',
  store: 0,
  stripe_charge_id: '',
  updated_at: DEFAULT_TIMESTAMP,
  user_id: '',
};

/**
 * Shared Order API
 */
export interface OrderResultBase {

  /**
   * Costs to produce and ship the items
   */
  costs: OrderInternalCosts;

  /**
   * Gift text
   */
  gift: GiftOptions | null;

  /**
   * Whether the order contains discontinued items.
   */
  has_discontinued_items: boolean;

  /**
   * Items in order
   */
  items: OrderItem[];

  /**
   * Order Recipient
   */
  recipient: OrderRecipient;

  /**
   * Costs displayed and billed to the end-customer.
   */
  retail_costs: OrderRetailCosts;

  /**
   * Shipping method
   */
  shipping: ShippingMethodType;

  /**
   * Real-time status of order
   */
  status: OrderStatus;

  /**
   * Store id
   */
  store: number;

}

/**
 * Costs billed to the store owner for fulfillment
 */
export interface OrderInternalCosts extends OrderCosts {

  /**
   * Miscellaneous
   */
  additional_fee: string;

  /**
   * Digitization fee (typically charged only once)
   */
  digitization: string;

  /**
   * Costs saved from discounts
   */
  discount: string;

  /**
   * Miscellaneous
   */
  fulfillment_fee: string;

  /**
   * Shipping costs. Often used to pass price to consumer.
   */
  shipping: string;

  /**
   * Subtotal
   */
  subtotal: string;

  /**
   * Sales tax. Often used to pass price to consumer.
   */
  tax: string;

  /**
   * Grand total billed to store owner
   */
  total: string;

  /**
   * Vat tax.
   */
  vat: string;

}

/**
 * Costs displayed and billed to the end-customer.
 */
export interface OrderRetailCosts extends OrderCosts { }

/**
 * Order Cost shared properties
 */
export interface OrderCosts {

  /**
   * Currency Code in all caps
   */
  currency: string;

  /**
   * Costs saved from discounts
   */
  discount: string | null;

  /**
   * Shipping costs. Often used to pass price to consumer.
   */
  shipping: string | null;

  /**
   * Subtotal
   */
  subtotal: string | null;

  /**
   * Sales tax. Often used to pass price to consumer.
   */
  tax: string | null;

  /**
   * Grand total
   */
  total: string | null;

  /**
   * Vat tax.
   */
  vat: string | null;

}

/**
 * `draft` - order is not submitted for fulfillment
 * 
 * `failed` - order was submitted for fulfillment but was not accepted because of an error (problem with address, printfiles, charging, etc.)
 * 
 * `pending` - order has been submitted for fulfillment
 * 
 * `canceled` - order is canceled
 * 
 * `onhold` - order has encountered a problem during the fulfillment that needs to be resolved together with the Printful customer service
 * 
 * `inprocess` - order is being fulfilled and is no longer cancellable
 * 
 * `partial` - order is partially fulfilled (some items are shipped already, the rest will follow)
 * 
 * `fulfilled` - all items are shipped
 */
export type OrderStatus = 'draft' | 'failed' | 'pending' | 'canceled' | 'onhold' | 'inprocess' | 'partial' | 'fulfilled';

/**
 * Human readable description of order status.
 */
export const ORDER_STATUS_MAP: {
  [key in OrderStatus]: string;
} = {
  canceled: 'Canceled',
  draft: 'Draft',
  failed: 'Unable to Complete. Please contact support.',
  fulfilled: 'Delivered',
  inprocess: 'In Transit',
  onhold: 'On Hold.',
  partial: 'Partially Delivered',
  pending: 'Preparing For Shipment',
};

/**
 * Type of shipping
 */
export type ShippingMethodType = 'STANDARD';

/**
 * Params to generate an order
 * 
 * POST https://api.printful.com/orders
 */
export interface CreateOrderParams {

  /**
   * Gift text
   */
  gift: GiftOptions | null;

  /**
   * Order items
   */
  items: CreateOrderItemParams[];

  /**
   * Order Recipient
   */
  recipient: CreateOrderRecipientParams;

}

export interface GiftOptions {

  /**
   * Gift message for packing slip
   */
  message: string;

  /**
   * Gift subject for packing slip
   */
  subject: string;

}

/**
 * Order item
 */
export interface OrderItem extends CreateOrderItemParams {

  /**
   * Tracks whether the item is discontinued
   */
  discontinued: boolean;

  /**
   * Line item ID from the external system
   */
  external_id: number | null;

  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Item name
   */
  name: string;

  /**
   * Important flag determining whether the item is in or out of stock.
   * Out of stock items can take an additional 2-weeks to deliver.
   */
  out_of_stock: boolean;

  /**
   * Important flag determining whether the item is in or out of stock in the EU.
   * Out of stock items can take an additional 2-weeks to deliver.
   */
  out_of_stock_eu: boolean;

  /**
   * Printful production price
   */
  price: string | number;

  /**
   * Underlying Product information.
   */
  product: {

    /**
     * Variant id
     */
    variant_id: number;

    /**
     * Product id
     */
    product_id: number;

    /**
     * Image url
     */
    image: string;

    /**
     * Product name
     */
    name: string;

    /**
   * @deprecated
   */
    files?: any;

    /**
     * @deprecated
     */
    options?: any;

  };

  /**
   * Retail price for packing slip.
   */
  retail_price: string | null;

  /**
   * Printful generated sku
   */
  sku: string | null;

  /**
   * Sync variant ID of the item ordered.
   */
  sync_variant_id: number;

  /**
   * Variant ID of the item ordered. See Products API
   */
  variant_id: number;

}

/**
 * Params to create an Order item
 */
export interface CreateOrderItemParams extends UpdateOrderItemParams { }

/**
 * Params to update an Order Item.
 */
export interface UpdateOrderItemParams {

  /**
   * External variant Id of selected sync variant.
   */
  external_variant_id: string;

  /**
   * Number of items.
   */
  quantity: number;

}

/**
 * Order Recipient
 */
export interface OrderRecipient extends CreateOrderRecipientParams { }

/**
 * Params to generate an Order recipient
 */
export interface CreateOrderRecipientParams extends Address {

  /**
   * Recipient email.
   */
  email: string | null;

  /**
   * Recipient name.
   */
  name: string;

  /**
   * @deprecated
   */
  company?: any;

  /**
   * @deprecated
   */
  country_name?: any;

  /**
   * @deprecated
   */
  phone?: any;

  /**
   * @deprecated
   */
  state_name?: any;

}

export const DEFAULT_ORDER_RECIPIENT: CreateOrderRecipientParams = {
  address1: '',
  address2: '',
  city: '',
  country_code: 'US',
  email: '',
  name: '',
  state_code: 'AL',
  zip: ''
};

/**
 * Params to update an existing order that is not `inprocess`, `partial` or `fulfilled`.
 * 
 * PUT https://api.printful.com/orders/{id} 
 */
export interface UpdateOrderParams {

  /**
   * Gift text
   */
  gift?: GiftOptions | null;

  /**
   * Order items
   */
  items?: CreateOrderItemParams[];

  /**
   * Order Recipient
   */
  recipient?: CreateOrderRecipientParams;

}

export type RequestedReturnReason =
  'The item has defects.' |
  'The item does not fit.' |
  'I no longer want this item.' |
  'Other reason';

export const REQUESTED_RETURN_REASON_ARR:
  RequestedReturnReason[] = [
    'The item has defects.',
    'The item does not fit.',
    'I no longer want this item.',
    'Other reason'
  ];

/**
 * Params to initiate a return.
 */
export interface RequestReturnParams {

  /**
   * `null` by default.
   * 
   * This field contains a valid timestamp if the user has requested a return
   * and is reset to null if the return is not completed within 30 days. 
   * 
   * Referenced by the refund automation script which checks the return 
   * status of the order and completes the refund upon return completion
   */
  requested_return_at: Timestamped;

  /**
   * An array of stringified objects, each containing
   * 
   * (1) the id of the Sync Variant being returned
   * 
   * (2) the quantity of that variant being returned
   * 
   * Used to calculate the refund amount.
   * 
   * Example:
   * 
   * [
   * 
   *      '{"quantity":2,"sync_variant_id":"example-1"}',
   *      '{"quantity":1,"sync_variant_id":"example-2"}',
   * 
   * ]
   */
  requested_return_data: string[];

  /**
   * Why the customer is returning the item.
   */
  requested_return_reason: RequestedReturnReason;

}

/**
 * Approves for fulfillment an order that was saved as a 
 * draft (in the shopping cart). Store owner's credit card is charged when the 
 * order is submitted for fulfillment.
 * 
 * POST https://api.printful.com/orders/{id}/confirm
 */
export interface ConfirmOrderParams {

  /**
   * Id of the stripe charge. Used for refunds.
   */
  stripe_charge_id: string;

}

/**
 * Cancels pending order or draft. Charged amount is returned to the store owner's credit card.
 * 
 * DELETE https://api.printful.com/orders/{id}
 */
export interface CancelOrderParams { }

/**
 * Params to attach a Promo object to an order.
 */
export interface AttachOrderPromoParams {

  /**
   * Id of the Promo object attached to this order or, if no promo, an empty string.
   */
  promo_id: string;
}

/**
 * Customer order for a product.
 */
export interface PrintfulOrderResponseBody {

  /**
   * Status code. Returns `200` Unless call performed incorrectly.
   */
  code: number;

  /**
   * Extra data (ignoreable)
   */
  extra: any[];

  /**
   * Call result.
   */
  result: PrintfulOrderResult;

};

export interface PrintfulOrderResult extends OrderResultBase {

  /**
   * Unix timestamp seconds
   */
  created: number;

  /**
   * Printful url with more information
   */
  dashboard_url: string;

  /**
   * Error message
   */
  error: string | null;

  /**
   * Error code. `0` if no error
   */
  errorCode: number;

  /**
   * Id in external system
   */
  external_id: string | null;


  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Whether order is sample or customer order
   */
  is_sample: boolean;

  /**
   * Whether order needs approval
   */
  needs_approval: boolean;

  /**
   * Order notes
   */
  notes: string | null;

  /**
   * Whether order is synced
   */
  not_synced: boolean;

  /**
   * Name of carrier
   */
  shipping_service_name: string;

  /**
   * Unix Timestamp in seconds of last order update.
   */
  updated: number;


}


/**
* 
* **************
* Products
* **************
* 
*/

/**
* Store product
*/
export interface Product extends Identifiable, ProductBase, ProjectScoped {

  /**
   * Whether or not the product should be pushed to customers
   */
  active: boolean;

  /**
   * Decimal number displayed as the discount on the 
   * item. 
   * 
   * @Important Generated during store sync.
   * 
   * Example: 0.25 means 25% off. This means that if the item had 
   * a retail price $75 then the store shows that the original 
   * price was $100
   */
  discount: number;

  /**
   * Object name
   */
  object: 'product';

  /**
   * A string representation of the rrice of the lowe
   */
  price_range: string;

  /**
   * Map of all the product's sync variants
   * 
   * Key is the `id` field of the variant
   * 
   * @Important Generated during store sync.
   */
  sync_variants: {

    [key: string]: ProductVariant;

  };

  /**
   * Utility map of the product's color and sizes to assist
   * with navigating the sync variants.
   * 
   * @Important Generated during store sync.
   * 
   * Top level keys are color codes
   * 
   * Second level keys are size codes
   * 
   * Nested string value is the `id` field of the variant
   * 
   * @Important When displaying these key perform a global
   * replacement of `-` with a space ` `
   * 
   */
  variant_map: {

    [key: string]: {

      [key: string]: string;

    };

  };

};

/**
 * Shared Product API
 */
export interface ProductBase {

  /**
   * Name of the item
   */
  name: string;

  /**
   * Small thumbnail of the product
   */
  thumbnail_url: string;

}

/**
 * Product variant for purchase
 */
export interface ProductVariant extends ProductVariantBase {

  /**
   * Currency of item.
   */
  currency: CurrencyCode;

  /**
   * Files for store preview
   */
  files: ProductVariantFile[];

  /**
   * Unique identifier for the variant
   */
  id: string;

  /**
   * Order that the variant appeared in Printful's original result set.
   * Used in the product size sorting algorithm so that XL is not before M.
   */
  variant_index: number;

}

/**
 * Shared Variant API
 */
export interface ProductVariantBase {

  /**
   * Identifier in external system.
   * 
   * @Important This value is passed with orders.
   * 
   * Example: `"5bc04fbe956148"`
   */
  external_id: string;

  /**
   * Variant name
   * 
   * Example: `"Trust the Process Tee - Black / XS"`
   */
  name: string;

  /**
   * Underlying Product information.
   */
  product: {

    /**
     * Variant id
     */
    variant_id?: number;

    /**
     * Product id
     */
    product_id?: number;

    /**
     * Image url
     */
    image: string;

    /**
     * Name
     * 
     * Example: "Bella + Canvas 3501 Unisex Long Sleeve Shirt (Black / XS)"
     */
    name: string;

  };

  /**
   * Price set by store owner.
   * 
   * Example: `"24.00"`
   */
  retail_price: string;

  /**
   * Product sku
   * 
   * Example: `"602644B04979C_Black-XS"`
   */
  sku: string;

  /**
   * Whether or not the variant is synced
   */
  synced: boolean;


}

/**
 * Product variant file
 */
export interface ProductVariantFile extends FileBase {

  /**
   * Unique identifier
   */
  id: string;

}


/**
 * Shared File API
 */
export interface FileBase {

  /**
   * Height in px
   */
  height: number;

  /**
   * Large image
   */
  preview_url: string;

  /**
   * Small image
   */
  thumbnail_url: string;

  /**
   * File type
   */
  type: VariantFileType | string;

  /**
   * Width in px
   */
  width: number;

}

/**
 * Type of file
 */
export type VariantFileType = 'default' | 'preview';


/**
 * Response body from call to Printful /products endpoint
 * 
 * GET `https://api.printful.com/store/products?offset=${n}&limit=100`
 */
export interface PrintfulStoreResponseBody {

  /**
   * Status code. Returns `200` Unless call performed incorrectly.
   */
  code: number;

  /**
   * Extra data (ignoreable)
   */
  extra: any[];

  /**
   * Numeric information. Used to ensure no products are left behind
   */
  paging: {

    /**
     * Total number of products in the store
     */
    total: number;

    /**
     * Result set offset from query string
     */
    offset: number;

    /**
     * Result limit from query string
     */
    limit: number;

  };

  /**
   * List of results
   */
  result: PrintfulProductSummary[];

}

/**
 * Printful Porduct summary
 */
export interface PrintfulProductSummary extends ProductBase {

  /**
   * Id in external system
   */
  id: number;

  /**
   * Id in external system
   */
  external_id: string;

  /**
   * Number of variants
   */
  variants: number;

  /**
   * Number of variants that are synced
   */
  synced: number;

}

/**
 * Response body from call to Printful Sync Product detail
 * 
 * GET https://api.printful.com/store/products/{id}
 */
export interface PrintfulProductDetailResponseBody {

  /**
   * Status code. Returns `200` Unless call performed incorrectly.
   */
  code: number;

  /**
   * Call result
   */
  result: {

    /**
     * Summary of product
     */
    sync_product: PrintfulProductSummary;

    /**
     * List of variants
     */
    sync_variants: PrintfulSyncVariant[];

  };

  /**
   * Extra data (ignoreable)
   */
  extra: [];
}

/**
 * Printful sync variant
 */
export interface PrintfulSyncVariant extends ProductVariantBase {

  /**
   * Currency code in all caps
   */
  currency: string;

  /**
   * Files for store preview
   */
  files: PrintfulFile[];

  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Sync product id
   */
  sync_product_id: string;

  /**
   * Id of the variant
   */
  variant_id: number;

  /**
   * Warehouse identifier
   */
  warehouse_product_variant_id: number | null;

}

/**
 * Printful preview file
 */
export interface PrintfulFile extends FileBase {

  /**
   * Unique identifier
   */
  id: number;

  /**
   * File size
   */
  size: number;

  /**
   * `ok` when file is working
   */
  status: string;

}


/**
* 
* **************
* Projects
* **************
* 
*/

/**
* React Native Project Template
*/
export interface ProjectTemplate extends CreateProjectTemplateParams, Identifiable, VersionHistory {

  /**
   * Object name.
   */
  object: 'project_template';

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: Version;

  };

}

/**
 * Project template
 */
export const DEFAULT_PROJECT_TEMPLATE: ProjectTemplate = {
  copyright: '',
  cover_asset: null,
  created_at: DEFAULT_TIMESTAMP,
  description: '',
  git_repo: '',
  id: '',
  livemode: true,
  name: '',
  project_type: 'ecommerce',
  object: 'project_template',
  version_history: {},
};

/**
 * Params to create a project template
 */
export interface CreateProjectTemplateParams extends 
CreateVersionHistoryParams,
UpdateProjectTemplateParams {

  /**
   * Company that published the template.
   */
  copyright: string;

  /**
   * Branded cover photo of the template
   */
  cover_asset: RemoteAsset | null;

  /**
   * Description of template
   */
  description: string;

  /**
   * Download Url for the template code.
   */
  git_repo: string | null;

  /**
   * Name of the template
   */
  name: string;

  /**
   * Type of project
   */
  project_type: ProjectType;

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: CreateVersionParams;

  };

  /**
   * @deprecated
   */
  cover_photo?: any;

}

/**
 * Appdrop product for purchase
 */
interface AppdropProduct extends CreateAppdropProductParams, Identifiable {

  /**
   * Object name
   */
  object: 'product';

}

/**
 * Appdrop product
 */
export const DEFAULT_APPDROP_PROJECT: AppdropProduct = {
  active: true,
  asset_ids: [],
  bio: '',
  blocked_member_ids: [],
  caption: '',
  community_status: 'approved',
  created_at: DEFAULT_TIMESTAMP,
  description: '',
  display_name: '',
  id: '',
  images: [],
  livemode: true,
  metadata: {},
  name: '',
  package_dimensions: null,
  type: 'good',
  shippable: null,
  statement_descriptor: '',
  object: 'product',
  unit_label: '',
  updated_at: DEFAULT_TIMESTAMP,
  updated: -1,
  url: '',
  username: '',
};

/**
 * Params to create an Appdrop product
 */
export interface CreateAppdropProductParams extends
  ContainsSocial, UpdateAppdropProductParams {

  /**
   * Whether the product is currently available for purchase.
   */
  active: boolean;

  /**
   * A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
   */
  caption: string | null;

  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description: string | null;

  /**
   * A list asset ids
   */
  asset_ids: string[];

  /**
   * Stripe field
   * 
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images: string[];

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: {
    [key: string]: any;
  };

  /**
   * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
   */
  display_name: string;

  /**
   * Stripe field
   * 
   * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
   */
  name: string;

  /**
   * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own `package_dimensions`. Only applicable to products of `type=good`.
   */
  package_dimensions: ProductPackageDimensions | null;

  /**
   * Whether this product is a shipped good. Only applicable to products of `type=good`.
   */
  shippable: boolean | null;

  /**
   * Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.
   */
  statement_descriptor: string | null;

  /**
   * The type of the product. The product is either of type `good`, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans.
   */
  type: ProductType;

  /**
   * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
   */
  unit_label: string | null;

  /**
   * Time at which the object was last updated
   */
  updated_at: Timestamped;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;

  /**
   * A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`.
   */
  url: string | null;

}

/**
 * Product package dimensions
 */
export interface ProductPackageDimensions extends UpdateProductPackageDimensionsParams {

  /**
   * Height, in inches.
   */
  height: number;

  /**
   * Length, in inches.
   */
  length: number;

  /**
   * Weight, in ounces.
   */
  weight: number;

  /**
   * Width, in inches.
   */
  width: number;

}

/**
 * Type of product
 */
type ProductType = 'good' | 'service';


/**
 * Params to update an Appdrop product
 */
export interface UpdateAppdropProductParams {

  /**
   * Whether the product is currently available for purchase.
   */
  active?: boolean;

  /**
   * A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
   */
  caption?: string | null;

  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description?: string | null;

  /**
   * A list asset ids
   */
  asset_ids?: ArrayUpdateOperation;

  /**
   * Stripe field
   * 
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images?: string[];

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: {
    [key: string]: any;
  };

  /**
   * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
   */
  display_name?: string;

  /**
   * Stripe field
   * 
   * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
   */
  name?: string;

  /**
   * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own `package_dimensions`. Only applicable to products of `type=good`.
   */
  package_dimensions?: UpdateProductPackageDimensionsParams | null;

  /**
   * Whether this product is a shipped good. Only applicable to products of `type=good`.
   */
  shippable?: boolean | null;

  /**
   * Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.
   */
  statement_descriptor?: string | null;

  /**
   * The type of the product. The product is either of type `good`, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans.
   */
  type?: ProductType;

  /**
   * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
   */
  unit_label?: string | null;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated_at?: Timestamped;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated?: number;

  /**
   * A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`.
   */
  url?: string | null;

}

/**
 * Params to update package dimensions
 */
export interface UpdateProductPackageDimensionsParams {

  /**
   * Height, in inches. Maximum precision is 2 decimal places.
   */
  height?: number;

  /**
   * Length, in inches. Maximum precision is 2 decimal places.
   */
  length?: number;

  /**
   * Weight, in ounces. Maximum precision is 2 decimal places.
   */
  weight?: number;

  /**
   * Width, in inches. Maximum precision is 2 decimal places.
   */
  width?: number;

}

/**
 * Type of project
 */
export type ProjectType =
  'cloud' |
  'ecommerce' |
  'game' |
  'marketplace' |
  'social_network' |
  'streaming_service' |
  'media'|
  'root'|
  'super_root';

/**
 * Params to update a project template
 */
export interface UpdateProjectTemplateParams extends
UpdateVersionHistoryParams {

  /**
   * Company that published the template.
   */
  copyright?: string;

  /**
   * Branded cover photo of the template
   */
  cover_photo?: RemoteAsset | null;

  /**
   * Description of template
   */
  description?: string;

  /**
   * Download Url for the template code.
   */
  git_repo?: string | null;

  /**
   * Name of the template
   */
  name?: string;

  /**
   * Type of project
   */
  project_type?: ProjectType;

  /**
   * @deprecated
   * 
   * Type of project
   */
  project_template_type?: ProjectType;


};

/**
 * Version history
 */
export interface VersionHistory extends CreateVersionHistoryParams {

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: Version;

  };

}

/**
 * Version mechanics
 */
export interface CreateVersionHistoryParams extends UpdateVersionHistoryParams {

  /**
   * Released versions
   * 
   * @Important – Key is version id
   */
  version_history: {

    [key: string]: CreateVersionParams;

  };

}

/**
 * Version mechanics
 */
export interface UpdateVersionHistoryParams {

  /**
   * Released versions
   * 
   * Key is version ID
   */
  version_history?: {

    [key: string]: UpdateVersionParams;

  };

}

/**
 * Software version
 */
export interface Version extends CreateVersionParams, Identifiable {

  /**
   * Object name.
   */
  object: 'version';

}

/**
 * Params to create a version
 */
export interface CreateVersionParams extends 
NotificationSettings, UpdateVersionParams {

  /**
   * Canvas, screen and object model
   */
  appdrop_ui: AppdropUI;

  /**
   * Custom user data points for project. Goes in `metadata`
   */
  custom_user_properties: {
    [key: string]: any;
  };

  /**
   * Url of the zip file
   */
  download_url: string;

  /**
   * Endpoints that trigger a notification for this app
   */
  endpoint_notifications: {
    [key in APIRequestEndpoint]?: {
      email?: EmailNotificationCriteria | null;
      mobile_app_directed?: PushNotificationCriteria | null;
      mobile_app_topic?: PushNotificationCriteria | null;
      sms?: null;
    };
  };

  /**
   * Topics that trigger a notification for this app
   */
  topic_notifications: {
    [key: string]: {
      [key in PushType]?: NotificationCriteria | null;
    };
  };

  /**
   * Brief description of the features and functionality introduced in this version.
   */
  version_description: string;

  /**
   * Public-facing name of version (not the server generated id)
   * 
   * Example: `1.0.3`
   */
  version_name: string;

}

/**
 * Canvas, screen and object model
 */
export interface AppdropUI extends UpdateAppdropUIParams {

  /**
   * Screens in navigation tree
   */
  screens: {
    [key: string]: AppdropUIScreen;
  };

  /**
   * App objects
   */
  objects: {
    [key: string]: AppdropUIObject;
  };

}

/**
 * Screen
 */
export interface AppdropUIScreen extends
Identifiable, AppdropUIStylesMap,
AppdropUIObjectMap, UpdateAppdropUIScreenParams {

  /**
   * Index to render
   */
  index: number;

  /**
   * Object name
   */
  object: 'screen';

  /**
   * Type of screen
   */
  type: ScreenType;

  /**
   * Screen name, e.g. `Home`
   */
  name: string;

  /**
   * Screen options
   */
  options: {
    [key: string]: any; // fix this. screen options
  };

  /**
   * Object map
   */
  object_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIObjectSettings;
  
  };

  /**
   * Styles map
   */
  styles_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIStyleSettings;

  };

}

/**
 * Default screen
 * fix this: extend screen for tabscreen, mapscreen, etc.
 */
export const DEFAULT_APPDROP_UI_SCREEN: AppdropUIScreen = {
  object: 'screen',
  created_at: DEFAULT_TIMESTAMP,
  id: '',
  index: 0,
  livemode: true,
  type: 'default',
  name: '',
  object_map: {},
  options: {},
  styles_map: {}
};

/**
 * Type of screen
 */
type ScreenType =
  'tab' |
  'stack' |
  'default' |
  'image' |
  'map';

/**
 * Params to update a screen
 */
export interface UpdateAppdropUIScreenParams
extends UpdateAppdropUIObjectMapParams, UpdateAppdropUIStylesMapParams {

  /**
   * Index to render
   */
  index?: number;

  /**
   * Type of screen
   */
  type?: ScreenType;

  /**
   * Screen name, e.g. `Home`
   */
  name?: string;

  /**
   * Screen options
   */
  options?: {
    [key: string]: any; // fix this. screen options
  };

}

/**
 * Object map
 */
export interface AppdropUIObjectMap {

  /**
   * Objects to render
   */
  object_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIObjectSettings;
  
  };

}

/**
 * Params to update an object map
 */
export interface UpdateAppdropUIObjectMapParams {
  /**
   * Objects to render
   */
   object_map?: {

    /**
     * Criteria id
     */
    [key: string]: UpdateAppdropUIObjectSettingsParams;
  
  };
}

/**
 * Style map
 */
export interface AppdropUIStylesMap {

  /**
   * Styles to render
   */
  styles_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIStyleSettings;
  
  };

}

/**
 * Params to update an styles map
 */
export interface UpdateAppdropUIStylesMapParams {
  /**
   * Styles to render
   */
   styles_map?: {

    /**
     * Criteria id
     */
    [key: string]: UpdateAppdropUIStyleSettingsParams;
  
  };
}

/**
 * Object settings
 */
export interface AppdropUIObjectSettings extends Criteria, UpdateAppdropUIObjectSettingsParams {

  /**
   * Criteria
   */
  criteria: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };

  /**
  * Array of objects to render if all criteria true
  */
  object_ids: string[];

}

/**
 * Params to update object settings
 */
export interface UpdateAppdropUIObjectSettingsParams extends UpdateCriteriaParams {

  /**
   * Objects
   */
  object_ids?: ArrayUpdateOperation;

}

/**
 * Style settings
 */
export interface AppdropUIStyleSettings extends Criteria, UpdateAppdropUIStyleSettingsParams {

  /**
   * Criteria
   */
  criteria: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };

  /**
  * Array of Nativestrap styles to render if all criteria true
  */
  style_ids: string[];

}

/**
 * Params to update style settings
 */
export interface UpdateAppdropUIStyleSettingsParams extends UpdateCriteriaParams {

  /**
   * Styles
   */
  style_ids?: ArrayUpdateOperation;

}

/**
 * Criteria API
 */
export interface Criteria extends UpdateCriteriaParams {

  /**
   * Empty object defaults to true, i.e. should trigger a notificaiton / render
   * an object
   * 
   * Otherwise check each field value pair using the op
   * 
   */
  criteria: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };

}

/**
 * Params to update criteria
 */
export interface UpdateCriteriaParams {

  /**
   * Empty array defaults to true, i.e. should trigger a notificaiton
   * 
   * Otherwise check each field value pair using the op
   */
  criteria?: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };

}

/**
 * UI Object
 */
 export interface AppdropUIObject extends 
  AppdropUIStylesMap, Identifiable, UpdateAppdropUIObjectParams {

  /**
   * Object name
   */
  object: 'object';

  /**
   * Type of object
   */
  type: ObjectType;

  /**
   * Styles to render
   */
  styles_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIStyleSettings;
  
  };
}

export const DEFAULT_APPDROP_UI_OBJECT: AppdropUIObject = {
  created_at: DEFAULT_TIMESTAMP,
  livemode: true,
  id: '',
  object: 'object',
  styles_map: {},
  type: 'view'
};

/**
 * Type of object
 */
 type ObjectType = 
 'view' |
 'image' |
 'flatlist' |
 'text' |
 'touchable_opacity';

export interface AppdropUITextObject extends AppdropUIObject, AppdropUIValuesMap {

  /**
   * Type of object
   */
  type: 'text';

  /**
   * Values map
   */
  values_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIValuesSettings;

  };

}

/**
 * Value map
 */
 export interface AppdropUIValuesMap {

  /**
   * Values to render
   */
  values_map: {

    /**
     * Criteria id
     */
    [key: string]: AppdropUIValuesSettings;
  
  };

}

/**
 * Params to update an values map
 */
export interface UpdateAppdropUIValuesMapParams {

  /**
   * Values to render
   */
   values_map?: {

    /**
     * Criteria id
     */
    [key: string]: UpdateAppdropUIValuesSettingsParams;
  
  };

}

/**
 * Value settings
 */
 export interface AppdropUIValuesSettings extends Criteria, UpdateAppdropUIValuesSettingsParams {

  /**
   * Criteria
   */
  criteria: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };

  /**
  * Array of Nativestrap values to render if all criteria true
  */
  value: string;

}

/**
 * Params to update value settings
 */
export interface UpdateAppdropUIValuesSettingsParams extends UpdateCriteriaParams {

  /**
   * Values
   */
  value?: string;

}

/**
 * Params to update object
 */
export interface UpdateAppdropUIObjectParams extends UpdateAppdropUIStylesMapParams {}

/**
 * Params to update an app tree
 */
export interface UpdateAppdropUIParams {

  screens?: {

    [key: string]: UpdateAppdropUIScreenParams;

  };

  objects?: {

    [key: string]: UpdateAppdropUIObjectParams;

  };

}

export interface UpdateVersionParams extends 
UpdateNotificationSettingsParams {

  /**
   * Canvas, screen and object model
   */
  appdrop_ui?: UpdateAppdropUIParams;

  /**
   * Custom user data points for project. Goes in `metadata`
   */
  custom_user_properties?: {
    [key: string]: any;
  };

  /**
   * Url of the zip file
   */
  download_url?: string;

  /**
   * Brief description of the features and functionality introduced in this version.
   */
  version_description?: string;

  /**
   * Public-facing name of version (not the server generated id)
   * 
   * Example: `1.0.3`
   */
  version_name?: string;

}

/**
 * A container for one or more apps that share a common dashboard and project
 * settings.
 */
export interface Project extends CreateProjectParams, Identifiable {

  /**
   * Object name.
   */
  object: 'project';

}

/**
 * Default project
 */
export const DEFAULT_PROJECT: Project = {
  app_ids: [],
  asset_ids: [],
  copyright: '',
  created_at: DEFAULT_TIMESTAMP,
  custom_user_properties: {},
  data_center: 'us1',
  email_signups: [],
  id: '',
  logo_asset_id: '',
  livemode: true,
  mailchimp_config: null,
  name: '',
  object: 'project',
  organization_id: '',
  pretty_id: '',
  push_server_endpoint: null,
  support_email: '',
  template_id: '',
  project_type: 'cloud',
  urls: {
    facebook: '',
    terms: '',
    tiktok: '',
    twitter: '',
    snapchat: '',
    homepage: '',
    instagram: '',
    privacy: ''
  }
};

export const DEMO_PROJECT_ID = 'DEMO_PROJECT_ID';

/**
 * Params to generate a project
 */
export interface CreateProjectParams extends
  ContainsRemoteAssets, UpdateProjectParams {

  /**
   * This array includes the id of each App that this Project contains.
   */
  app_ids: string[];

  /**
   * Ordered array of remote asset ids
   */
  asset_ids: string[];

  /**
   * Public name displayed to Users. Defaults to the name of the Organization that published the template.
   */
  copyright: string;

  /**
   * Custom user data points for project. Goes in `metadata`
   */
  custom_user_properties: {
    [key: string]: any;
  };

  /**
   * Data center for project e.g. `us1`
   * 
   * Not editable once project is created
   */
  data_center: string;

  /**
   * Email data of interested users
   */
  email_signups: string[];

  /**
   * The Id of the Project logo Asset.
   */
  logo_asset_id: string;

  /**
   * Mailchimp config object
   */
  mailchimp_config: MailchimpConfig | null;

  /**
   * The name of this Project. Example: My Cool App
   */
  name: string;

  /**
   * The id of the organization that owns this project.
   */
  organization_id: string;

  /**
   * Type of project
   */
  project_type: ProjectType;

  /**
   * Id used for pretty links e.g. mikes-tees used in appdrop.com/company/mikes-tees
   */
  pretty_id: string;

  /**
   * Push server endpoint
   * 
   * e.g. https://us-central1-xyz.cloudfunctions.net/push_api_v2
   */
  push_server_endpoint: string | null;

  /**
   * Email displayed to end users for Support requests.
   */
  support_email: string;

  /**
   * Id of the Project template that this project is built on.
   */
  template_id: string;

  /**
   * Map of urls for this project.
   */
  urls: CreateProjectUrlMapParams;

  /**
   * @deprecated
   */
  logo_asset?: any;

}

/**
 * Params for mailchimp newsletter
 */
export interface MailchimpConfig {

  /**
   * Account API Key
   */
  api_key: string;

  /**
   * Id of the audience that the new users should be added to
   */
  audience_id: string;

  /**
   * Mailchimp server. Ex: `us7`
   */
  server: string;

}

/**
 * Params to create the map of urls for this project.
 */
export interface CreateProjectUrlMapParams extends UpdateProjectUrlMapParams {

  /**
   * FB page
   */
  facebook: string;

  /**
   * Homepage
   * 
   * Example: https://appdrop.com/apps/your-app-name
   * 
   * Example: https://yourappname.com
   */
  homepage: string;

  /**
   * Instagram page
   */
  instagram: string;

  /**
   * Privacy Policy
   * 
   * Example: https://appdrop.com/apps/your-app-name/privacy
   * 
   * Example: https://yourappname.com/privacy
   */
  privacy: string;

  /**
   * Snapchat
   */
  snapchat: string;

  /**
   * Privacy Policy
   * 
   * Example: https://appdrop.com/apps/your-app-name/terms
   * 
   * Example: https://yourappname.com/terms
   */
  terms: string;

  /**
   * Tiktok url
   */
  tiktok: string;

  /**
   * Twitter url
   */
  twitter: string;

}

/**
 * Params to update a project
 */
export interface UpdateProjectParams extends
  UpdateContainsRemoteAssetsParams {

  /**
   * Updates to the `app_ids` array
   */
  app_ids?: ArrayUpdateOperation;

  /**
   * Custom user data points for project
   */
  custom_user_properties?: {
    [key: string]: any;
  };

  /**
   * Updates to the `email_signups` array
   */
  email_signups?: ArrayUpdateOperation;

  /**
   * The Id of the Project logo Asset.
   */
  logo_asset_id?: string;

  /**
   * Mailchimp config object
   */
  mailchimp_config?: MailchimpConfig | null;

  /**
   * The name of this Project. Example: My Cool App
   */
  name?: string;

  /**
   * Push server endpoint
   * 
   * e.g. https://us-central1-xyz.cloudfunctions.net/push_api_v2
   */
  push_server_endpoint?: string | null;

  /**
   * Email displayed to end users for Support requests.
   */
  support_email?: string;

  /**
   * Id of the Project template that this project is built on.
   */
  template_id?: string;

  /**
   * Map of urls for this project.
   */
  urls?: UpdateProjectUrlMapParams;

  /**
   * @deprecated
   */
  append_app_ids?: string[];

  /**
   * @deprecated
   */
  append_email_signups?: string[];

  /**
   * @deprecated
   */
  remove_app_ids?: string[];

  /**
   * @deprecated
   */
  remove_email_signups?: string[];

}

/**
 * Params to update the Project Url map
 */
export interface UpdateProjectUrlMapParams {

  /**
   * FB page
   */
  facebook?: string;

  /**
   * Homepage
   * 
   * Example: https://appdrop.com/apps/your-app-name
   * 
   * Example: https://yourappname.com
   */
  homepage?: string;

  /**
   * Instagram page
   */
  instagram?: string;

  /**
   * Privacy Policy
   * 
   * Example: https://appdrop.com/apps/your-app-name/privacy
   * 
   * Example: https://yourappname.com/privacy
   */
  privacy?: string;

  /**
   * Snapchat
   */
  snapchat?: string;

  /**
   * Privacy Policy
   * 
   * Example: https://appdrop.com/apps/your-app-name/terms
   * 
   * Example: https://yourappname.com/terms
   */
  terms?: string;

  /**
   * Tiktok url
   */
  tiktok?: string;

  /**
   * Twitter url
   */
  twitter?: string;

}

/**
 * An end-user registered to an Appdrop Project.
 */
export interface ProjectUser extends CreateProjectUserParams, User { }

/**
 * Params to create an end-user registered to an Appdrop Project.
 */
export interface CreateProjectUserParams
  extends CreateUserParams, ProjectScoped { }

export const DEFAULT_CLOUD_USER: ProjectUser = {
  address: {
    address1: '',
    address2: '',
    city: '',
    country_code: 'US',
    zip: '',
    state_code: ''
  },
  authenticated_at: DEFAULT_TIMESTAMP,
  created_at: {
    _nanoseconds: 0,
    _seconds: 0
  },
  display_name: '',
  email: '',
  id: '',
  lat: DEFAULT_LATITUDE,
  long: DEFAULT_LONGITUDE,
  livemode: true,
  metadata: {},
  name: {
    name_prefix: '',
    given_name: '',
    middle_name: '',
    family_name: '',
    name_suffix: ''
  },
  object: 'user',
  password: '',
  password_hash: '',
  password_reset_id: '',
  password_salt: '',
  phone: '',
  project_id: '',
  signed_in_devices: {},
  timezone: DEFAULT_TIMEZONE
};

/**
 * Params to update an end-user registered to an Appdrop Project.
 * 
 * Note – `project_id` is not editable once set.
 */
export interface UpdateProjectUserParams extends UpdateUserParams { }


/**
 * Native app or web app contained in a project
 */

export interface App extends CreateAppParams, Identifiable {

  /**
   * Download url for the app_config json file
   */
  config_url: string;

  /**
   * Object name.
   */
  object: 'app';

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: Version;

  };

}

/**
 * Params to create an app
 */
export interface CreateAppParams extends
  CreateVersionHistoryParams,
  ProjectScoped, UpdateAppParams {

  /**
   * Id of the minimum stable version
   */
  minimum_version_id: string;

  /**
   * The name of this App. Example: MyCoolApp iOS or MyCoolApp Web
   */
  name: string;

  /**
   * The platform where this app is published.
   */
  platform: PlatformType;

  /**
   * Id of the Appdrop Project
   */
  project_id: string;

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: CreateVersionParams;

  };

}

/**
 * Params to update an app
 */
export interface UpdateAppParams extends UpdateVersionHistoryParams {

  /**
   * Id of the minimum stable version
   */
  minimum_version_id?: string;

  /**
  * The name of this App. Example: MyCoolApp iOS or MyCoolApp Web
  */
  name?: string;

  /**
   * The platform where this app is published.
   */
  platform?: PlatformType;

  /**
   * Id of the Project containing this App.
   */
  project_id?: string;

}

export type PlatformType = 'android' |
  'androidTV' |
  'ios' |
  'macOS' |
  'tvOS' |
  'wearOS' |
  'web' |
  'windows';

/**
 * Native Android App
 */
export interface AppAndroid extends App, CreateAppAndroidParams {

  /**
   * The platform where this app is published – `android`
   */
  platform: 'android';

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: Version;

  };

}

export const DEFAULT_ANDROID_APP: AppAndroid = {
  android_package_name: null,
  config_url: '',
  created_at: DEFAULT_TIMESTAMP,
  id: '',
  livemode: true,
  minimum_version_id: '',
  name: '',
  object: 'app',
  platform: 'android',
  project_id: '',
  sha_keys: [],
  version_history: {}
};

export interface CreateAppAndroidParams extends CreateAppParams {

  /**
   * Package name for an android app
   * 
   * Example: com.example
   */
  android_package_name: string | null;

  /**
   * SHA-1 and SHA-256 keys
   */
  sha_keys: string[];

}


export interface UpdateAppAndroidParams extends UpdateAppParams {

  /**
   * Package name for an android app
   * 
   * Example: com.example
   */
  android_package_name?: string | null;

  /**
   * SHA-1 and SHA-256 keys
   */
  sha_keys?: ArrayUpdateOperation;

}

/**
 * Native iOS App
 */
export interface AppIOS extends App, CreateAppIOSParams {

  /**
   * The platform where this app is published – `ios`
   */
  platform: 'ios';

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: Version;

  };

}

/**
 * iOS App
 */
export const DEFAULT_IOS_APP: AppIOS = {
  config_url: '',
  created_at: DEFAULT_TIMESTAMP,
  id: '',
  ios_apns_auth_key_id: null,
  ios_apns_auth_key_storage_ref: null,
  ios_apns_jwt_auth_token: null,
  ios_app_id: null,
  ios_bundle_id: null,
  ios_team_id: null,
  livemode: true,
  minimum_version_id: '',
  name: '',
  object: 'app',
  platform: 'ios',
  project_id: '',
  version_history: {}
};

/**
 * Params to create an iOS app
 */
export interface CreateAppIOSParams extends CreateAppParams {

  /**
   * APNS key id e.g. 2K55P9H5FY
   */
  ios_apns_auth_key_id: string | null;

  /**
   * Storage ref
   * 
   * Ex. `teams/team_001/AuthKey_2K55P9H5FY.p8`
   */
  ios_apns_auth_key_storage_ref: string | null;

  /**
   * APNS auth token, refreshed every 30 minutes
   */
  ios_apns_jwt_auth_token: string | null;

  /**
   * App ID number autogenerated by Apple
   * 
   * Example: 154213891
   */
  ios_app_id: string | null;

  /**
   * Bundle ID for an ios app.
   * 
   * Example: com.example.app
   */
  ios_bundle_id: string | null;

  /**
   * App Store Developer Account Team id e.g. PD0CPAWS5J
   */
  ios_team_id: string | null;

}

/**
 * Params to update an iOS app
 */
export interface UpdateAppIOSParams extends UpdateAppParams {

  /**
   * APNS key id
   */
  ios_apns_auth_key_id?: string | null;

  /**
   * Storage ref
   * 
   * Ex. `teams/team_001/AuthKey_2K55P9H5FY.p8`
   */
  ios_apns_auth_key_storage_ref?: string | null;

  /**
   * APNS auth token, refreshed every 30 minutes
   */
  ios_apns_jwt_auth_token?: string | null;

  /**
   * App ID number autogenerated by Apple
   * 
   * Example: 154213891
   */
  ios_app_id?: string | null;

  /**
   * Bundle ID for an iOS app.
   * 
   * Example: com.example.app
   */
  ios_bundle_id?: string | null;

  /**
   * App Store Developer Account Team id
   */
  ios_team_id?: string | null;

}

/**
 * The config object passed with each API Request from a web app.
 */
export interface AppWeb extends App, CreateAppWebParams {

  /**
   * The platform where this app is published – `web`
   */
  platform: 'web';

  /**
   * Released versions
   * 
   * Key is version ID.
   */
  version_history: {

    [key: string]: Version;

  };

}

export const DEFAULT_WEB_APP: AppWeb = {
  config_url: '',
  created_at: DEFAULT_TIMESTAMP,
  domain_name: null,
  id: '',
  livemode: true,
  minimum_version_id: '',
  name: '',
  object: 'app',
  platform: 'web',
  project_id: '',
  version_history: {}
};

/**
 * Params to create a web app
 */
export interface CreateAppWebParams extends CreateAppParams {

  /**
   * Fully formed domain name, used for web apps
   * 
   * Example: dashboard.example.com
   */
  domain_name: string | null;

}

/**
 * Params to update a web app
 */
export interface UpdateAppWebParams extends UpdateAppParams {

  /**
   * Fully formed domain name, used for web apps
   * 
   * Example: dashboard.example.com
   */
  domain_name?: string | null;

}


/**
 * A Customer Support Ticket for an Appdrop Project.
 */
export interface SupportTicket extends CreateSupportTicketParams, Identifiable {

  /**
   * Object name
   */
  object: 'ticket';

}

/**
 * Params to create a Customer Support Ticket
 */
export interface CreateSupportTicketParams
  extends ProjectScoped {

  /**
   * The message attached with this support ticket.
   */
  message: string;

  /**
   * The sender user's project id.
   */
  sender_id: string;

}

/**
 * The runtime config object passed with each API Request. 
 * 
 * These sensitive credentials are stored as a JSON files for mobile 
 * apps and stored as environment variables for web apps.
 */
export interface AppConfig extends AppConfigBase {

  /**
   * Id of the current build.
   */
  build_id: string;

  /**
   * Id of the template version. Used to track whether teams have updated to
   * the latest version of the template and the percentage of project users
   * on the latest version of the template.
   */
  template_version_id: string;

  /**
   * Id of the App version. 
   * 
   * We recommend using semantic versioning (semver), but this can be any string.
   */
  version_name: string;

  /**
   * @deprecated
   */
  version_id?: string;

}

/**
 * The compile-time config object downloaded from the Appdrop dashboard.
 */
export interface AppConfigBase
  extends ProjectScoped {

  /**
   * Raw API key.
   */
  api_key: string;

  /**
   * Id of the App.
   */
  app_id: string;

  /**
   * Name of the App.
   */
  app_name: string;

  /**
   * Data center for project e.g. `us1`
   */
  data_center: string;

  /**
   * Platform
   */
  platform: PlatformType | '';

}

/**
 * Empty config
 */
export const DEFAULT_APP_CONFIG: AppConfig = {
  api_key: '',
  app_name: '',
  app_id: '',
  build_id: '',
  data_center: '',
  project_id: '',
  platform: '',
  template_version_id: '',
  version_name: ''
};

/**
 * Returns true if the `app_config` has the minimum properties
 * to be considered valid
 */
export function validConfig(app_config: AppConfig) {
  return (
    app_config !== undefined &&
    app_config.api_key !== undefined &&
    typeof app_config.api_key === 'string' &&
    app_config.app_id !== undefined &&
    typeof app_config.app_id === 'string' &&
    app_config.project_id !== undefined &&
    typeof app_config.project_id === 'string'
  );
}


/**
 * An API request to an Appdrop endpoint called by a client app.
 */
export interface APIRequestBody {

  /**
   * App Config object. Should remain constant across all the 
   * users of a version/build.
   */
  app_config: AppConfig;

  /**
   * Request data.
   */
  data: APIRequestBodyData;

  /**
   * Whether this session is a live or for demoing / testing.
   * 
   * Defaults to `true`
   */
  livemode: boolean;

}

export type APIRequestBodyData =
  AuthenticateUserParams |
  AttachOrderPromoParams |
  ConfirmOrderParams |
  CreateAppParams |
  CreateBankAccountParams |
  CreateCardParams |
  CreateChargeParams |
  CreateEntityParams |
  CreateInAppPurchaseParams |
  CreateOrderParams |
  CreatePostParams |
  CreateProjectTemplateParams |
  CreateProjectParams |
  CreatePromoParams |
  CreateRefundParams |
  CreateRemoteAssetParams |
  CreateSubscriptionParams |
  CreateSupportTicketParams |
  CreateThreadParams |
  CreateUserParams |
  InitAppParams |
  RequestReturnParams |
  SendPasswordResetEmailParams |
  SendPasswordResetVerificationCodeParams |
  SyncPrintfulProductsParams |
  UpdateAppParams |
  UpdateInAppPurchaseParams |
  UpdateEntityParams |
  UpdateOrderParams |
  UpdatePostParams |
  UpdateProjectTemplateParams |
  UpdatePromoParams |
  UpdateRemoteAssetParams |
  UpdateSubscriptionParams |
  UpdateThreadParams |
  UpdateUserParams;

/**
 * Params to sync a Printful products to an ECommerce Project.
 */
export interface SyncPrintfulProductsParams {

  /**
   * Printful API Key
   */
  printful_api_key: string;

}

/**
 * A timestamped object with a record of each API Request and Response
 * created by valid keys. Used for debugging and tracking rate limits.
 */
export interface APIRequest extends CreateAPIRequest, Identifiable {

  /**
   * Object name.
   */
  object: 'api_request';

  /**
   * The IP Address where this API call originated.
   */
  ip_address: string;

  /**
   * The response object sent back to the client.
   */
  response_body: APIResponseBody;

  /**
   * The HTTP status code.
   */
  status_code: 200 | ErrorStatusCode;

}

/**
 * The response object sent back to the client.
 */
export type APIResponseBody =
  App |
  Card |
  Charge |
  Order |
  Entity |
  InitAppResponseBody |
  InAppPurchase |
  PasswordReset |
  Post |
  Product |
  Project |
  ProjectTemplate |
  Promo |
  Refund |
  RemoteAsset |
  Subscription |
  Thread |
  User |
  {
    products: Product[];
  } |
  {
    error: APIRequestError;
  };

/**
 * Helper function to clean sensitive data from an API request
 */
function cleanRequestBody(request_body: APIRequestBody) {
  const cleansed_request_body: APIRequestBody = {} as unknown as APIRequestBody;
  Object.assign(cleansed_request_body, request_body);
  const cleansed_request_body_auth_data = (cleansed_request_body as {data:AuthenticateUserParams}).data;
  if (validString(cleansed_request_body_auth_data['password'], true)) {
    cleansed_request_body_auth_data['password'] = '*******';
  }
  const cleansed_request_body_bank_data = (cleansed_request_body as {data:CreateBankAccountParams}).data;
  if (validString(cleansed_request_body_bank_data['account_number'], true)) {
    cleansed_request_body_bank_data['account_number'] = '*******';
  }
  if (validString(cleansed_request_body_bank_data['routing_number'], true)) {
    cleansed_request_body_bank_data['routing_number'] = '*******';
  }
  const cleansed_request_body_card_data = (cleansed_request_body as {data:CreateCardParams}).data;
  if (validString(cleansed_request_body_card_data['cvc'], true)) {
    cleansed_request_body_card_data['cvc'] = '*******';
  }
  if (validString(cleansed_request_body_card_data['number'], true)) {
    cleansed_request_body_card_data['number'] = '*******';
  }
  return cleansed_request_body;
}


/**
 * Params for `handleSuccess` function
 */
export interface HandleSuccessParams {
  admin: any;
  db: any;
  endpoint: APIRequestEndpoint;
  method: APIRequestMethod;
  response_body: APIResponseBody;
  req: any;
  res: any;
}

/**
 * API response and logging for success cases.
 */
export async function handleSuccess({
  admin,
  db,
  endpoint,
  method,
  response_body,
  req,
  res
}: HandleSuccessParams): Promise<void> {
  try {
    res.header('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(response_body));
    const api_request_id = randString();
    const ip_address_obj = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
    const ip_address = typeof ip_address_obj === 'string' ? ip_address_obj : ip_address_obj[0];
    const request_body = (
      typeof req.body === 'string' ?
        JSON.parse(req.body) : req.body
    ) as unknown as APIRequestBody;
    const cleansed_request_body = cleanRequestBody(request_body);
    const api_request: APIRequest = {
      created_at: admin.firestore.Timestamp.fromDate(new Date()),
      livemode: cleansed_request_body.livemode,
      endpoint: endpoint,
      id: api_request_id,
      ip_address: ip_address,
      method: method,
      object: 'api_request',
      request_body: cleansed_request_body,
      response_body: response_body,
      status_code: 200
    };
    await db.collection('api_requests').doc(api_request_id).set(api_request);
    return;
  }
  catch (error) {
    console.log('handleSuccess error', JSON.stringify(error, null, '\t'));
    return;
  }
}

/**
 * Converts array of strings into append syntax.
 */
export function appendArrayItems(arr: string[]) {
  return {
    append: arr
  };
}

/**
 * Converts array into append syntax
 */
export function removeArrayItems(arr: string[]) {
  return {
    remove: arr
  };
}

/**
 * Params for `handleObjectUpdate`
 */
export interface HandleObjectUpdateParams {
  admin: any;
  params_dot_syntax: any;
}

/**
 * Updates array objects
 */
export function handleObjectUpdate({
  admin,
  params_dot_syntax
}: HandleObjectUpdateParams) {
  Object.keys(params_dot_syntax)
    .forEach(f => {
      if (
        params_dot_syntax[f] !== null
        && typeof params_dot_syntax[f] === 'object'
        && Array.isArray(params_dot_syntax[f])
        && ['append', 'remove'].includes(Object.keys(params_dot_syntax[f])[0])
      ) {
        if (params_dot_syntax[f]['append']) {
          const append_arr = [...params_dot_syntax[f]['append']];
          if (append_arr.length > 0) {
            params_dot_syntax[f] = admin.firestore.FieldValue.arrayUnion(
              ...append_arr
            );
          }
        }
        else if (params_dot_syntax[f]['remove']) {
          const remove_arr = [...params_dot_syntax[f]['remove']];
          if (remove_arr.length > 0) {
            params_dot_syntax[f] = admin.firestore.FieldValue.arrayRemove(
              ...remove_arr
            );
          }
        }
      }
    });
}

/**
 * Organization query
 */
export async function queryOrganizationByAPIKey(db: any, decodedAPIKey: string) {
  try {
    const organization_query_snapshot = await db
      .collection('entities')
      .where('api_key', '==', decodedAPIKey)
      .get();
    if (organization_query_snapshot.empty) {
      throw 'organization_query_snapshot.empty';
    }
    const organization = organization_query_snapshot.docs[0].data();
    return organization as Organization;
  }
  catch (error) {
    console.log('matchOrganization error', error);
    return null;
  }
}

/**
 * Returns auth header of request
 * @param req 
 * @returns 
 */
export function getDecodedAuthHeader(req: any) {
  if (validString(req.header('Authorization'), true)) {
    if ((req.header('Authorization') as string).startsWith('Basic ')) {
      return atob((req.header('Authorization') as string).split('Basic ')[1]);
    }
  }
  return '';
}

/**
 * Params to create an API Request
 */
export interface CreateAPIRequest {

  /**
   * Identifies which endpoint this request targeted.
   */
  endpoint: APIRequestEndpoint;

  /**
   * Identifies the HTTP method this request used.
   */
  method: APIRequestMethod;

  /**
   * The req.body passed with this request parsed into an object.
   */
  request_body: APIRequestBody;

}

/**
 * 
 * @param data_center e.g. `us1`
 * @returns api request url base e.g. `https://us1.appdrop.com`
 */
export const getAPIRequestBase = (data_center: string) => `https://${data_center}.appdrop.com`;

/**
 * Identifies which endpoint this request targeted.
 */
export type APIRequestEndpoint =
  'v2/customers/:stripeCustomerId/bankAccounts/:stripeCustomerType' |
  'v2/customers/:stripeCustomerId/cards/:stripeCustomerType' |
  'v2/customers/:stripeCustomerId/orders/:orderId/charges/:stripeCustomerType' |
  'v2/customers/:stripeCustomerId/orders/:orderId/refunds' |
  'v2/customers/:stripeCustomerId/subscriptions/:stripeCustomerType' |
  'v2/customers/:stripeCustomerId/subscriptions/:subscriptionId/:stripeCustomerType' |
  'v2/customers/:stripeCustomerId/verifyBankAccount/:stripeCustomerType' |
  'v2/entities/:entityId' |
  'v2/initAppState/cloud' |
  'v2/initAppState/ecommerce' |
  'v2/initAppState/marketplace' |
  'v2/projects' |
  'v2/projects/:projectId' |
  'v2/projects/:projectId/apps' |
  'v2/projects/:projectId/apps/:appId' |
  'v2/projects/:projectId/apps/:appId/config' |
  'v2/projects/:projectId/inAppPurchases' |
  'v2/projects/:projectId/inAppPurchases/:inAppPurchaseId' |
  'v2/projects/:projectId/posts' |
  'v2/projects/:projectId/posts/:postId' |
  'v2/projects/:projectId/promos' |
  'v2/projects/:projectId/promos/:promoId' |
  'v2/projects/:projectId/remoteAssets' |
  'v2/projects/:projectId/remoteAssets/:remoteAssetId' |
  'v2/projects/:projectId/retrieveUserSecurityQuestion' |
  'v2/projects/:projectId/syncPrintfulProducts' |
  'v2/projects/:projectId/threads' |
  'v2/projects/:projectId/threads/:threadId' |
  'v2/projects/:projectId/tickets' |
  'v2/projects/:projectId/users' |
  'v2/projects/:projectId/users/:userId' |
  'v2/projects/:projectId/users/:userId/sendPasswordResetEmail' |
  'v2/projects/:projectId/users/:userId/sendPasswordResetVerificationCode' |
  'v2/projects/:projectId/users/:userId/authenticateUser' |
  'v2/projects/:projectId/users/:userId/orders' |
  'v2/projects/:projectId/users/:userId/orders/:orderId' |
  'v2/projects/:projectId/users/:userId/orders/:orderId/cancel' |
  'v2/projects/:projectId/users/:userId/orders/:orderId/confirm' |
  'v2/projectTemplates' |
  'v2/projectTemplates/:projectTemplateId' |
  'v2/push/apiRequests/:apiRequestId' |
  'v2/push/debug' |
  'v2/push/debug/:debugId';

/**
 * Type of stripe customer
 */
export type StripeCustomerType = 'entities' | 'users';

/**
 * Identifies the HTTP method this request used.
 */
export type APIRequestMethod = 'DELETE' |
  'GET' |
  'PATCH' |
  'POST' |
  'PUT';

/**
 * Validate query params or data properties
 */
type RequestValidation = ({
  field: string;
  value: string[]|'validString'|'truthy';
})[];

/**
 * Params for `isValidRequest`
 */
interface IsValidRequestParams {
  adminRequired: boolean;
  adminAPIKey: string;
  dataRequired: boolean;
  dataValidation: RequestValidation;
  queryParamValidation: RequestValidation;
  req: any;
}

/**
 * Generic request validator.
 * 
 * Returns `200` if valid, returns `error_code` otherwise
 */
export function isValidRequest({
  adminRequired,
  adminAPIKey,
  dataRequired,
  dataValidation,
  queryParamValidation,
  req
}: IsValidRequestParams) {
  let error_code: ErrorCode = 'base/unknown-error';
  const request_body = (
    typeof req.body === 'string' ?
      JSON.parse(req.body) : req.body
  ) as unknown as APIRequestBody;
  const { app_config, data, livemode } = request_body;
  if (!app_config || !validConfig(app_config)) {
    error_code = 'base/app-config-error';
    return error_code;
  }
  const decoded_api_key = getDecodedAuthHeader(req);
  if (adminRequired) {
    if (decoded_api_key !== adminAPIKey) {
      error_code = 'base/api-key-invalid';
      return error_code;
    }
  }
  else {
    if (!validString(decoded_api_key, true)) {
      error_code = 'base/api-key-missing';
      return error_code;
    }
  }
  const params = data as any;
  if (!params && dataRequired) {
    error_code = 'base/invalid-data-property';
    return error_code;
  }
  const unmet_data_validation_criteria_index = dataValidation.length > 0
    ? dataValidation.findIndex(dataValidationCriteria => {
      const {field, value} = dataValidationCriteria;
      const check_value = params[field];
      if (value === 'truthy') {
        return !check_value;
      }
      else if (value === 'validString') {
        return !validString(check_value as string, true);
      }
      return !value.includes(check_value);
    })
    : -1;
  if (unmet_data_validation_criteria_index !== -1) {
    error_code = 'base/invalid-data-property';
    return error_code;
  }
  const unmet_query_param_validation_criteria_index = queryParamValidation.length > 0
    ? queryParamValidation.findIndex(queryParamValidationCriteria => {
      const {field, value} = queryParamValidationCriteria;
      const check_value = req.params[field];
      if (value === 'truthy') {
        return !check_value;
      }
      else if (value === 'validString') {
        return !validString(check_value as string, true);
      }
      return !value.includes(check_value);
    })
    : -1;
  if (unmet_query_param_validation_criteria_index !== -1) {
    error_code = 'base/invalid-query-params';
    return error_code;
  }
  return 200;
}

/**
 * @deprecated
 */
 export function handleArrayUpdates() {
  console.error('handleArrayUpdates is deprecated');
}

/**
 * Request Data for for App Initialization
 */
export interface InitAppParams {

  /**
   * Id of the ProjectUser initializing the app.
   */
  user_id: string;

}

/**
 * Server response body for App Initialization
 */
export interface InitAppResponseBody {

  /**
   * App information. Critical for template mods and for 
   * constructing the share url and review url 
   * from the app id / package name.
   */
  app: App;

  /**
   * Project information. Critical for copyright and support email.
   */
  project: Project;

  /**
   * Project template
   */
  template: ProjectTemplate;

  /**
   * Minted project users. Key is ID
   */
  users: {

    [key: string]: ProjectUser;

  };

  /**
   * Minted id of the new or returning project user
   */
  user_id: string;

}

/**
 * Request Data for for Cloud App Initialization
 */
export interface InitCloudAppParams extends InitAppParams {

  /**
   * Id of entity (returning) or an empty string (guest)
   */
  entity_id: string;

  /**
   * Type of entity
   */
  entity_type: EntityType;

}

/**
 * Server response body for Cloud App Initialization
 */
export interface InitCloudAppResponseBody extends InitAppResponseBody {

  /**
   * Map of all Apps
   */
  apps: {

    [key: string]: App;

  };

  /**
   * Map of all Entities
   */
  entities: {

    [key: string]: Entity;

  };

  /**
   * Minted entity id
   */
  entity_id: string;

  /**
   * Orders created by this entity's ECommerce project users.
   */
  orders: {

    [key: string]: Order;

  };

  /**
    * Map of Posts
    * 
    * Key is the `id` of the Post 
    */
  posts: {

    [key: string]: Post;

  };

  /**
   * Products owned by this entity's ECommerce projects
   */
  products: {

    [key: string]: Product;

  };

  /**
   * Pretty ids already taken
   */
  project_pretty_ids: string[];

  /**
   * If Enterprise:
   * 
   * Map of the projects owned by the Organizations in the workspace
   * 
   * If Organization:
   * 
   * Map of this projects owned by this Organizations
   */
  projects: {

    [key: string]: Project;

  };

  /**
   * Map of all the Appdrop project templates. Key is the id.
   */
  project_templates: {

    [key: string]: ProjectTemplate;

  };

  /**
   * Active store promos owned by this entity
   */
  promos: {

    [key: string]: Promo;

  };

  /**
    * Map of Remote Assets
    * 
    * Key is the `id` of the RemoteAsset
   */
  remote_assets: {

    [key: string]: RemoteAsset;

  };

  /**
   * Map of Threads
   * 
   * Key is the `id` of the Thread
   */
  threads: {

    [key: string]: Thread;

  };

  /**
   * Map of all the minted project users in the scope of this Entity. Key is the id.
   * 
   * @Important These Project Users are the team members of this user or 
   * end-users of the Projects created by this user's Entit(y/ies).
   */
  users: {

    [key: string]: ProjectUser;

  };

}

/**
 * SuperRoot Appdrop Project containing the Dashboard
 * web apps and Studio mobile apps
 */
export interface SuperRootProject extends CreateSuperRootProjectParams, Project {}

/**
 * Params to create the SuperRoot project
 */
export interface CreateSuperRootProjectParams extends CreateProjectParams {}

/**
 * Params to update the SuperRoot project
 */
export interface UpdateSuperRootProjectParams extends UpdateProjectParams {}

/**
 * SuperRoot Appdrop Project User who can use the Dashboard
 * web apps and Studio mobile apps
 */
export interface SuperRootProjectUser extends CreateSuperRootProjectUserParams, ProjectUser {}

/**
 * Params to create a SuperRoot Project User
 */
export interface CreateSuperRootProjectUserParams extends CreateProjectUserParams {}

/**
 * Params to update a SuperRoot Project User
 */
export interface UpdateSuperRootProjectUserParams extends UpdateProjectUserParams {}

/**
 * Root Appdrop Project containing the Dashboard
 * web apps and Studio mobile apps
 */
export interface RootProject extends CreateRootProjectParams, Project {}

/**
 * Params to create the Root project
 */
export interface CreateRootProjectParams extends CreateProjectParams {}

/**
 * Params to update the Root project
 */
export interface UpdateRootProjectParams extends UpdateProjectParams {}

/**
 * Root Appdrop Project User who can use the Dashboard
 * web apps and Studio mobile apps
 */
export interface RootProjectUser extends CreateRootProjectUserParams, ProjectUser {}

/**
 * Params to create a Root Project User
 */
export interface CreateRootProjectUserParams extends CreateProjectUserParams {}

/**
 * Params to update a Root Project User
 */
export interface UpdateRootProjectUserParams extends UpdateProjectUserParams {}

/**
 * E-Commerce Project supporting a store of products
 */
export interface ECommerceProject extends CreateECommerceProjectParams, Project {

  /**
   * Map of urls for this project.
   */
  urls: ECommerceProjectUrlMapParams;

}

export const DEFAULT_MAX_RETURN_DAYS = 30;
export const DEFAULT_MIN_RETURN_CENTS = 5000;

export const DEFAULT_ECOMMERCE_PROJECT: ECommerceProject = {
  app_ids: [],
  asset_ids: [],
  copyright: '',
  created_at: DEFAULT_TIMESTAMP,
  custom_user_properties: {},
  data_center: 'us1',
  deleted_product_ids: [],
  deleted_sync_variant_ids: [],
  email_signups: [],
  fulfillment_method: 'printful',
  id: '',
  livemode: true,
  logo_asset_id: '',
  max_return_days: 30,
  mailchimp_config: null,
  min_return_cents: 5000,
  name: '',
  object: 'project',
  pretty_id: '',
  printful_api_key: '',
  project_type: 'ecommerce',
  push_server_endpoint: null,
  template_id: '',
  organization_id: '',
  support_email: '',
  urls: {
    facebook: '',
    homepage: '',
    instagram: '',
    privacy: '',
    returns: '',
    snapchat: '',
    terms: '',
    tiktok: '',
    twitter: ''
  }
};

export interface ECommerceProjectUrlMapParams extends CreateECommerceProjectUrlMapParams { }

/**
 * Params to create an ECommerce Project.
 */
export interface CreateECommerceProjectParams extends CreateProjectParams {

  /**
   * Ids of the Products no longer available in this store. Used to filter
   * out products that are not purchaseable.
   */
  deleted_product_ids: string[];

  /**
   * Ids of the Sync Variants no longer available in this store. Used to filter
   * out product variants that are not purchaseable.
   */
  deleted_sync_variant_ids: string[];

  /**
   * Method of Fulfillment
   */
  fulfillment_method: FulfillmentMethod;

  /**
   * Max number of days that can elapse before return not available
   */
  max_return_days: number | null;

  /**
   * Minimum subtotal size after promotions needed to be eligible for returns
   */
  min_return_cents: number | null;

  /**
   * Printful API Key hooked to store.
   */
  printful_api_key: string;

  /**
   * Map of urls for this project.
   */
  urls: CreateECommerceProjectUrlMapParams;

}

/**
 * Method of Fulfillment
 */
export type FulfillmentMethod = 'printful' | 'manual';

/**
 * Map of urls for this project.
 */
export interface CreateECommerceProjectUrlMapParams extends CreateProjectUrlMapParams {

  /**
   * Return policy
   * 
   * Example: https://appdrop.com/apps/your-app-name/returns
   * 
   * Example: https://yourappname.com/returns
   * 
   * Empty string if default return policy
   */
  returns: string;

}

/**
 * Map of urls for this project.
 */
export interface UpdateECommerceProjectUrlMapParams extends UpdateProjectUrlMapParams {

  /**
   * Privacy Policy
   * 
   * Example: https://appdrop.com/apps/your-app-name/returns
   * 
   * Example: https://yourappname.com/returns
   */
  returns?: string;

}

/**
 * Params to update an ECommerce Project
 */
export interface UpdateECommerceProjectParams extends UpdateProjectParams {

  /**
   * Printful API Key
   */
  printful_api_key?: string;

  /**
   * Max number of days that can elapse before return not available
   */
  max_return_days?: number | null;

  /**
   * Minimum subtotal size after promotions needed to be eligible for returns
   */
  min_return_cents?: number | null;

  /**
   * Map of urls for this project.
   */
  urls?: UpdateECommerceProjectUrlMapParams;

}

/**
 * End-user for an E-Commerce App.
 */
export interface ECommerceProjectUser extends CreateECommerceProjectUserParams, ProjectUser { }

export interface CreateECommerceProjectUserParams extends CreateProjectUserParams {

  /**
   * Ids of the user's favorited products.
   */
  favorite_product_ids: string[];

  /**
   * User's Financial details.
   */
  financial_details: FinancialDetails;

}

/**
 * Params to update an ecomm user
 */
export interface UpdateECommerceProjectUserParams extends UpdateProjectUserParams {

  /**
   * Updates to the `favorite_product_ids` array
   */
  favorite_product_ids?: ArrayUpdateOperation;

  /**
   * User's Financial details.
   */
  financial_details?: UpdateFinancialDetailsParams;

  /**
   * @deprecated
   */
  append_favorite_product_ids?: string[];

  /**
   * @deprecated
   */
  remove_favorite_product_ids?: string[];

}

/**
 * Initial value for e-commerce end user.
 */
export const DEFAULT_ECOMMERCE_USER: ECommerceProjectUser = {
  address: {
    address1: '',
    address2: '',
    city: '',
    country_code: 'US',
    zip: '',
    state_code: ''
  },
  authenticated_at: DEFAULT_TIMESTAMP,
  created_at: {
    _nanoseconds: 0,
    _seconds: 0
  },
  display_name: '',
  email: '',
  favorite_product_ids: [],
  financial_details: {
    bank_accounts: {},
    cards: {},
    charge_receipts: {},
    in_app_purchase_receipts: {},
    payout_balance: 0,
    subscriptions: {}
  },
  id: '',
  lat: DEFAULT_LATITUDE,
  long: DEFAULT_LONGITUDE,
  livemode: true,
  metadata: {},
  name: {
    name_prefix: '',
    given_name: '',
    middle_name: '',
    family_name: '',
    name_suffix: ''
  },
  object: 'user',
  password: '',
  password_hash: '',
  password_reset_id: '',
  password_salt: '',
  phone: '',
  project_id: '',
  signed_in_devices: {},
  timezone: DEFAULT_TIMEZONE
};

/**
 * Request Data for for ECommerce App Initialization
 */
export interface InitECommerceAppParams extends InitAppParams { }

/**
 * Server response body for ECommerce App Initialization
 */
export interface InitECommerceAppResponseBody extends InitAppResponseBody {

  /**
   * Orders owned by this project user.
   */
  orders: {

    [key: string]: Order;

  };

  /**
   * Active store products
   */
  products: {

    [key: string]: Product;

  };

  /**
   * Active store promos
   */
  promos: {

    [key: string]: Promo;

  };

  /**
   * Project information. Critical for copyright and support email.
   */
  project: ECommerceProject;

  /**
   * Minted project users. Key is ID
   */
  users: {

    [key: string]: ECommerceProjectUser;

  };

}

/**
 * A promotional for an order
 */
export interface Promo extends CreatePromoParams, Identifiable, ProjectScoped {

  /**
   * Object name
   */
  object: 'promo';

}

/**
 * Default Promo
 */
export const DEFAULT_PROMO: Promo = {
  created_at: DEFAULT_TIMESTAMP,
  code: '',
  description: '',
  expires: DEFAULT_TIMESTAMP,
  id: '',
  livemode: true,
  max_num_redemptions: null,
  min_subtotal_cents: 0,
  num_redemptions: 0,
  object: 'promo',
  project_id: '',
  type: 'store_credit',
  value: 0
};

/**
 * Params to create a Promo
 */
export interface CreatePromoParams extends UpdatePromoParams {

  /**
   * User facing code for redemption.
   * 
   * Example: `APPDROP-FAMILY`
   */
  code: string;

  /**
   * User facing description of the code
   */
  description: string;

  /**
   * When the promo becomes inactive.
   */
  expires: Timestamped;

  /**
   * Max number of times this promo can be used.
   * 
   * `null` if the promo is evergreen
   */
  max_num_redemptions: number | null;

  /**
   * Mininum size of the cart before this promo is accepted.
   * 
   * `0` if the promo does not have a min. order size.
   */
  min_subtotal_cents: number;

  /**
   * Number of times this promo has been used.
   */
  num_redemptions: number;

  /**
   * Type of promotional
   */
  type: PromoType;

  /**
   * Multipurpose field for the promo value.
   * 
   * if `type === 'store_credit'`
   * then this value is the credit amount in cents.
   * 
   * Example: `10050` means `$100.50` in credits
   * 
   * if `type === 'percentage'`
   * then this value is percentage represented as a decimal.
   * 
   * Example: `0.1` means `10% off` the cart subtotal
   * 
   * if `type === 'free_shipping'`
   * then this value is `0`
   */
  value: number;

}

/**
 * Params to update a Promo
 */
export interface UpdatePromoParams {

  /**
   * User facing code for redemption
   */
  code?: string;

  /**
   * User facing description of the code
   */
  description?: string;

  /**
   * When the promo becomes inactive.
   */
  expires?: Timestamped;

  /**
   * Max number of times this promo can be used.
   * 
   * `null` if the promo is evergreen
   */
  max_num_redemptions?: number | null;

  /**
   * Mininum size of the cart before this promo is accepted.
   * 
   * `0` if the promo does not have a min. order size.
   */
  min_subtotal_cents?: number;

  /**
   * Number of times this promo has been used.
   */
  num_redemptions?: number;

  /**
   * Type of promotional
   */
  type?: PromoType;

  /**
   * Multipurpose field for the promo value.
   * 
   * if `type === 'store_credit'`
   * then this value is the credit amount in cents.
   * 
   * Example: `10050` means `$100.50` in credits
   * 
   * if `type === 'percentage'`
   * then this value is percentage represented as a decimal.
   * 
   * Example: `0.1` means `10% off` the cart subtotal
   * 
   * if `type === 'free_shipping'`
   * then this value is `0`
   */
  value?: number;

}

/**
 * Type of promotional
 */
export type PromoType = 'store_credit' | 'free_shipping' | 'percentage';

/**
 * Marketplace Project supporting a creators and consumers
 */
export interface MarketplaceProject extends
  CreateMarketplaceProjectParams, Project,
  ProjectInAppPurchases, ProjectInterests {

  /**
   * Map of IAPs
   * 
   * Key is the `id` of the IAP
   */
  interests: {

    [key: string]: Interest;

  };

  /**
   * Map of IAPs.
   * 
   * Key is the `id` of the IAP
   */
  in_app_purchases: {

    [key: string]: InAppPurchase;

  };

  /**
   * Map of urls for this project.
   */
  urls: MarketplaceProjectUrlMapParams;

}

export const DEFAULT_MARKETPLACE_PROJECT: MarketplaceProject = {
  app_ids: [],
  asset_ids: [],
  copyright: '',
  created_at: DEFAULT_TIMESTAMP,
  creator_name_singular: 'business',
  creator_name_plural: 'businesses',
  consumer_name_singular: 'user',
  consumer_name_plural: 'users',
  custom_user_properties: {},
  data_center: 'us1',
  email_signups: [],
  google_web_client_id: '',
  google_geocoding_api_key: '',
  id: '',
  in_app_purchases: {},
  interests: {},
  livemode: true,
  mailchimp_config: null,
  object: 'project',
  logo_asset_id: '',
  name: '',
  organization_id: '',
  pretty_id: '',
  project_type: 'marketplace',
  push_server_endpoint: null,
  storage_bucket_base_url: '',
  template_id: '',
  support_email: '',
  urls: {
    facebook: '',
    homepage: '',
    instagram: '',
    privacy: '',
    snapchat: '',
    terms: '',
    tiktok: '',
    twitter: ''
  }
};

export interface MarketplaceProjectUrlMapParams extends CreateMarketplaceProjectUrlMapParams { }

/**
 * Params to create a Marketplace Project.
 */
export interface CreateMarketplaceProjectParams extends
  CreateProjectParams,
  CreateProjectInAppPurchasesParams,
  CreateProjectInterestsParams {

  /**
   * How to refer to a creator in this marketplace
   * 
   * Example: 'host', 'business', 'organizer'
   */
  creator_name_singular: string;

  /**
   * How to refer to creators in this marketplace
   * 
   * Example: 'hosts', 'businesses', 'organizers'
   */
  creator_name_plural: string;

  /**
   * How to refer to a consumer in this marketplace
   * 
   * Example: 'guest', 'member', 'user'
   */
  consumer_name_singular: string;

  /**
   * How to refer to consumers in this marketplace
   * 
   * Example: 'guests', 'members', 'users'
   */
  consumer_name_plural: string;

  /**
   * Storage bucket base url
   * 
   * gs://xyz...
   */
  storage_bucket_base_url: string;

  /**
   * Google client id.
   * 
   * Used for Continue with Google.
   */
  google_web_client_id: string;

  /**
   * Google geocoding API Key
   */
  google_geocoding_api_key: string;

  /**
   * Map of urls for this project.
   */
  urls: CreateMarketplaceProjectUrlMapParams;

}

export interface CreateMarketplaceProjectUrlMapParams extends CreateProjectUrlMapParams { }

export interface UpdateMarketplaceProjectUrlMapParams extends UpdateProjectUrlMapParams { }



/**
 * Params to update a Marketplace Project
 */
export interface UpdateMarketplaceProjectParams extends
  UpdateProjectParams, UpdateProjectInAppPurchaseParams,
  UpdateProjectInterestsParams {

  /**
   * How to refer to a creator in this marketplace
   * 
   * Example: 'host', 'business', 'organizer'
   */
  creator_name_singular?: string;

  /**
   * How to refer to creators in this marketplace
   * 
   * Example: 'hosts', 'businesses', 'organizers'
   */
  creator_name_plural?: string;

  /**
   * How to refer to a consumer in this marketplace
   * 
   * Example: 'guest', 'member', 'user'
   */
  consumer_name_singular?: string;

  /**
   * How to refer to consumers in this marketplace
   * 
   * Example: 'guests', 'members', 'users'
   */
  consumer_name_plural?: string;

  /**
   * Storage bucket base url
   * 
   * gs://xyz...
   */
  storage_bucket_base_url?: string;

  /**
   * Google client id.
   * 
   * Used for Continue with Google.
   */
  google_web_client_id?: string;

  /**
   * Google geocoding API Key
   */
  google_geocoding_api_key?: string;

  /**
   * @deprecated
   * 
   * Base API for FCM fetch. No trailing slash.
   * 
   * Example: `https://api.example.co`
   */
  api_base_url?: string;

}

/**
 * Map of Interests
 */
export interface ProjectInterests {

  /**
   * Map of Interests
   * 
   * Key is the `id` of the Interest
   */
  interests: {

    [key: string]: Interest;

  };

}

/**
* Params to create map of Interests
*/
export interface CreateProjectInterestsParams {

  /**
   * Map of Interests
   * 
   * Key is the `id` of the Interest
   */
  interests: {

    [key: string]: CreateInterestParams;

  };

}

/**
 * Params to update map of Interests
 */
export interface UpdateProjectInterestsParams {

  /**
   * Map of Interests
   * 
   * Key is the `id` of the Interest
   */
  interests: {

    [key: string]: UpdateInterestParams;

  };

}

/**
 * User interest, e.g. Politics
 */
export interface Interest extends CreateInterestParams, Identifiable {

  /**
   * Object name
   */
  object: 'interest';

}

/**
 * Params to create interests
 */
export interface CreateInterestParams {

  /**
   * Community status
   */
  community_status: CommunityStatus;

  /**
   * Display order for list
   */
  index: number;

  /**
   * Name
   */
  name: string;

  /**
   * Metadata.
   */
  metadata: {
    type: string;
    tags: string[];
    [key: string]: any;
  };

}

/**
 * Params to update interest
 */
export interface UpdateInterestParams {

  /**
   * Community status
   */
  community_status?: CommunityStatus;

  /**
   * Display order for users to select.
   */
  index?: number;

  /**
   * Name
   */
  name?: string;

  /**
   * Metadata.
   */
  metadata?: {
    type?: string;
    tags?: string[];
    [key: string]: any;
  };

}

/**
 * Map of IAPs
 */
export interface ProjectInAppPurchases {

  /**
   * Map of IAPs
   * 
   * Key is the `id` of the IAP
   */
  in_app_purchases: {

    [key: string]: InAppPurchase;

  };

}

/**
 * Params to create map of IAPs
 */
export interface CreateProjectInAppPurchasesParams {

  /**
   * Map of IAPs
   * 
   * Key is the `id` of the IAP
   */
  in_app_purchases: {

    [key: string]: CreateInAppPurchaseParams;

  };

}

/**
 * Params to update map of IAPs
 */
export interface UpdateProjectInAppPurchaseParams {

  /**
   * Map of IAPs
   * 
   * Key is the `id` of the IAP
   */
  in_app_purchases?: {
    [key: string]: UpdateInAppPurchaseParams;
  };

}

/**
 * In App Purchase
 */
export interface InAppPurchase extends CreateInAppPurchaseParams, Identifiable {

  /**
   * Object name
   */
  object: 'in_app_purchase';

}

/**
 * Default IAP
 */
export const DEFAULT_IN_APP_PURCHASE: InAppPurchase = {
  active: true,
  object: 'in_app_purchase',
  iap_type: 'nonconsumable',
  platform: 'android',
  price_cents: 100,
  product_id: '',
  renews: 'monthly',
  id: '',
  livemode: true,
  created_at: DEFAULT_TIMESTAMP
};

/**
 * Params to create an IAP
 */
export interface CreateInAppPurchaseParams extends UpdateInAppPurchaseParams {

  /**
   * Whether or not this IAP is available for consumption
   */
  active: boolean;

  /**
   * Type of IAP
   */
  iap_type: InAppPurchaseType;

  /**
   * Platform
   */
  platform: PlatformType;

  /**
   * Cost of IAP
   */
  price_cents: number;

  /**
   * Id of the product on App Store or Play Store
   */
  product_id: string;

  /**
   * Renewal period
   */
  renews: 'monthly' | 'quarterly' | 'annually' | null;

}

/**
 * Type of IAP
 */
export type InAppPurchaseType = 'consumable' | 'nonconsumable';

/**
 * Params to update an IAP
 */
export interface UpdateInAppPurchaseParams {

  /**
   * Whether or not this IAP is available for consumption
   */
  active?: boolean;

  /**
   * Type of IAP
   */
  iap_type?: InAppPurchaseType;

  /**
   * Cost of IAP
   */
  price_cents?: number;

  /**
   * Renewal period
   */
  renews?: 'monthly' | 'quarterly' | 'annually' | null;

}

/**
 * User for an Marketplace App.
 */
export interface MarketplaceProjectUser extends CreateMarketplaceProjectUserParams, ProjectUser { }

/**
 * Initial value for Marketplace user.
 */
export const DEFAULT_MARKETPLACE_USER: MarketplaceProjectUser = {
  address: {
    address1: '',
    address2: '',
    city: '',
    country_code: 'US',
    zip: '',
    state_code: ''
  },
  authenticated_at: DEFAULT_TIMESTAMP,
  avatar_asset_id: '',
  bio: '',
  blocked_member_ids: [],
  community_status: 'approved',
  cover_asset_id: '',
  created_at: {
    _nanoseconds: 0,
    _seconds: 0
  },
  display_name: '',
  email: '',
  financial_details: {
    bank_accounts: {},
    cards: {},
    charge_receipts: {},
    in_app_purchase_receipts: {},
    payout_balance: 0,
    subscriptions: {}
  },
  id: '',
  interest_ids: [],
  lat: DEFAULT_LATITUDE,
  long: DEFAULT_LONGITUDE,
  livemode: true,
  metadata: {},
  name: {
    name_prefix: '',
    given_name: '',
    middle_name: '',
    family_name: '',
    name_suffix: ''
  },
  object: 'user',
  role: 'consumer',
  password: '',
  password_hash: '',
  password_reset_id: '',
  password_salt: '',
  phone: '',
  project_id: '',
  signed_in_devices: {},
  timezone: DEFAULT_TIMEZONE,
  username: ''
};

/**
 * Params to create a marketplace user
 */
export interface CreateMarketplaceProjectUserParams extends
  ContainsAvatar, ContainsCover, ContainsInterests,
  ContainsSocial, CreateProjectUserParams {

  /**
   * User's Financial details.
   * 
   * Typically, Marketplace users utilize IAPs.
   */
  financial_details: FinancialDetails;

  /**
   * Role of user
   */
  role: MarketplaceProjectUserRole;

}

/**
 * Params for interest filters
 */
export interface ContainsInterests {

  /**
   * Ids of the interests
   */
  interest_ids: string[];

}

/**
 * Params to update interest filters
 */
export interface UpdateContainsInterestsParams {

  /**
   * Updates to the `interest_ids` array
   */
  interest_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_interest_ids?: string[];

  /**
   * @deprecated
   */
  remove_interest_ids?: string[];

}

/**
 * Props for avatars
 */
export interface ContainsAvatar {

  /**
   * Id of the remote asset for the avatar.
   */
  avatar_asset_id: string;

}

/**
 * Params to update an avatar image
 */
export interface UpdateContainsAvatarParams {

  /**
   * Id of the remote asset for the avatar
   */
  avatar_asset_id?: string;

}

/**
 * Props for covers
 */
export interface ContainsCover {

  /**
   * Id of the remote asset for the cover
   */
  cover_asset_id: string;

}

/**
 * Params to update a cover image
 */
export interface UpdateContainsCoverParams {

  /**
   * Id of the remote asset for the cover
   */
  cover_asset_id?: string;

}

/**
 * Height dimensions of cover image
 */
export const COVER_IMAGE_HEIGHT = 525;

/**
 * Width dimensions of cover image
 */
export const COVER_IMAGE_WIDTH = 940;

/**
 * Social info
 */
export interface ContainsSocial {

  /**
   * Bio
   */
  bio: string;

  /**
   * Ids of the users blocked
   */
  blocked_member_ids: string[];

  /**
   * Community status
   */
  community_status: CommunityStatus;

  /**
   * Username
   */
  username: string;

}

/**
 * Community status. Editable only by admins.
 */
export type CommunityStatus = 'approved' | 'pending' | 'deactivated';
export const APPROVED_COMMUNITY_STATUS: CommunityStatus = 'approved';
export const PENDING_COMMUNITY_STATUS: CommunityStatus = 'pending';
export const DISAPPROVED_COMMUNITY_STATUS: CommunityStatus = 'deactivated';

/**
 * Params to update social props
 */
export interface UpdateContainsSocialParams {

  /**
   * Bio
   */
  bio?: string;

  /**
   * Updates to the `blocked_member_ids` array
   */
  blocked_member_ids?: ArrayUpdateOperation;

  /**
   * Community status
   */
  community_status?: CommunityStatus;

  /**
   * Username
   */
  username?: string;

  /**
   * @deprecated
   */
  append_blocked_member_ids?: string[];

  /**
   * @deprecated
   */
  remove_blocked_member_ids?: string[];

}

/**
 * Role of user
 */
export type MarketplaceProjectUserRole = 'consumer' | 'creator';

/**
 * Params to update a marketplace user
 */
export interface UpdateMarketplaceProjectUserParams extends
  UpdateContainsAvatarParams, UpdateContainsCoverParams,
  UpdateContainsInterestsParams,
  UpdateContainsSocialParams, UpdateProjectUserParams {

  /**
   * User's Financial details.
   */
  financial_details?: UpdateFinancialDetailsParams;

  /**
   * Role of user
   */
  role?: MarketplaceProjectUserRole;

}

/**
 * Post
 */
export interface Post extends CreatePostParams, Identifiable {

  /**
   * Object name
   */
  object: 'post';

}

/**
 * Params to create a post
 */
export interface CreatePostParams extends
  CreateMappableParams, ProjectScoped,
  Publishable, UpdatePostParams {

  /**
   * Latitude
   */
  lat: number;

  /**
  * Longitude
  */
  long: number;

  /**
   * Type of post
   */
  post_type: PostType;

  /**
   * Status of post
   */
  status: PostStatus;

  /**
   * Id of the thread this post belongs to,
   * or, if public, an empty string
   */
  thread_id: string;

}

/**
 * Props on publishable object
 */
export interface Publishable {

  /**
   * Ids of the user who created the post
   */
  creator_id: string;

}

/**
 * Status
 */
export type PostStatus = 'draft' | 'deleted' | 'live';

/**
 * Type of post
 */
export type PostType =
  'event' |
  'listing' |
  'message' |
  'reaction' |
  'status_update';

/**
 * Params to update a Post
 */
export interface UpdatePostParams extends UpdateMappableParams {

  /**
   * Status of post
   */
  status?: PostStatus;

}

/**
 * Event
 */
export interface EventPost extends Post, CreateEventPostParams {

  /**
   * Type of post
   */
  post_type: 'event';

}

/**
 * Default event
 */
export const DEFAULT_EVENT_POST: EventPost = {
  address: '',
  admin_ids: [],
  attending_member_ids: [],
  bio: '',
  blocked_member_ids: [],
  community_status: 'approved',
  cover_asset_id: '',
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  end_time: DEFAULT_TIMESTAMP,
  id: '',
  interest_ids: [],
  lat: DEFAULT_LATITUDE,
  long: DEFAULT_LONGITUDE,
  livemode: true,
  object: 'post',
  post_type: 'event',
  project_id: '',
  status: 'live',
  start_time: DEFAULT_TIMESTAMP,
  thread_id: '',
  title: '',
  username: ''
};

/**
 * Params to create an Event
 */
export interface CreateEventPostParams extends
  ContainsAddress, ContainsCover, ContainsDates,
  ContainsInterests, ContainsSocial, CreatePostParams,
  Manageable, Titled {

  /**
   * Ids of the members attending the event
   */
  attending_member_ids: string[];

}

/**
 * Address properties
 */
export interface ContainsAddress {

  /**
   * Address of the event or, if no physical address, a description
   * such as a Zoom room join link
   */
  address: Address | string;

}

/**
 * Date properties
 */
export interface ContainsDates {

  /**
   * End time of the event.
   * 
   * `null` if end time not provided
   * 
   * `all_day` if all day event
   */
  end_time: Timestamped | 'all_day';

  /**
   * Start time of the event. Valid timestamp is required.
   */
  start_time: Timestamped;

}

/**
 * Manageable object
 */
export interface Manageable {

  /**
   * Ids of the admins in the thread
   */
  admin_ids: string[];

}

/**
 * Titled object
 */
export interface Titled {

  /**
   * Title of the object
   */
  title: string;

}

/**
 * Params to update an Event
 */
export interface UpdateEventPostParams extends
  UpdateContainsAddressParams,
  UpdateContainsCoverParams, UpdateContainsDateParams,
  UpdateContainsInterestsParams,
  UpdateContainsSocialParams, UpdateManageableParams,
  UpdatePostParams, UpdateTitledParams {

  /**
   * Updates to the `attending_member_ids` array
   */
  attending_member_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_attending_member_ids?: string[];

  /**
   * @deprecated
   */
  remove_attending_member_ids?: string[];

}

/**
 * Params to update address properties
 */
export interface UpdateContainsAddressParams {

  /**
   * Physical address or, if no physical address, a description
   * such as a Zoom room join link
   */
  address?: Address | string;

}

/**
 * Params to update date properties
 */
export interface UpdateContainsDateParams {

  /**
   * End time of the event.
   * 
   * `null` if end time not provided
   * 
   * `all_day` if all day event
   */
  end_time?: Timestamped | 'all_day';

  /**
   * Start time of the event. Valid timestamp is required.
   */
  start_time?: Timestamped;

}

/**
 * Params to update a Manageable object
 */
export interface UpdateManageableParams {

  /**
   * Updates to the `admin_ids` array
   */
  admin_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_admin_ids?: string[];

  /**
   * @deprecated
   */
  remove_admin_ids?: string[];

}

/**
 * Params to update a Titled object
 */
export interface UpdateTitledParams {

  /**
   * Title of object
   */
  title?: string;

}

/**
 * Listing
 */
export interface ListingPost extends Post, CreateListingPostParams {

  /**
   * Type of post
   */
  post_type: 'listing';

}

/**
 * Default listing
 */
export const DEFAULT_LISTING_POST: ListingPost = {
  address: '',
  admin_ids: [],
  asset_ids: [],
  bio: '',
  community_status: 'approved',
  cover_asset_id: '',
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  blocked_member_ids: [],
  id: '',
  interest_ids: [],
  title: '',
  lat: DEFAULT_LATITUDE,
  livemode: true,
  long: DEFAULT_LONGITUDE,
  object: 'post',
  post_type: 'listing',
  project_id: '',
  status: 'live',
  thread_id: '',
  username: ''
};

/**
 * Params to create a listing
 */
export interface CreateListingPostParams extends
  ContainsAddress, ContainsCover, ContainsInterests,
  ContainsRemoteAssets, ContainsSocial,
  CreatePostParams, Manageable, Titled { }

/**
 * Params to update a listing
 */
export interface UpdateListingPostParams extends
  UpdateContainsAddressParams, UpdateContainsInterestsParams,
  UpdateContainsRemoteAssetsParams,
  UpdateContainsSocialParams, UpdateManageableParams,
  UpdatePostParams, UpdateTitledParams { }

/**
 * Message
 */
export interface MessagePost extends Post, CreateMessagePostParams {

  /**
   * Type of post
   */
  post_type: 'message';

}

/**
 * Default message
 */
export const DEFAULT_MESSAGE_POST: MessagePost = {
  asset_ids: [],
  body: '',
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  id: '',
  lat: DEFAULT_LATITUDE,
  livemode: true,
  long: DEFAULT_LONGITUDE,
  object: 'post',
  post_type: 'message',
  project_id: '',
  status: 'live',
  thread_id: ''
};

// Fix this. Make a special type of message post for joins and exits or
// expand the thread API

// idea: special body values that trigger custom message UIs
// const JOINED_THREAD_BODY = '-JOINED-THREAD-'
// const EXITED_THREAD_BODY = '-EXITED-THREAD-'
// const RENAMED_THREAD_BODY = '-RENAMED-THREAD-'

/**
 * Params to create a message
 */
export interface CreateMessagePostParams extends
  Bodied, ContainsRemoteAssets, CreatePostParams { }

/**
 * Body properties
 */
export interface Bodied {

  /**
   * Body
   */
  body: string;

}

/**
 * Params to update a message
 */
export interface UpdateMessagePostParams extends
  UpdateBodiedParams, UpdateContainsRemoteAssetsParams,
  UpdatePostParams { }

/**
 * Params to update body
 */
export interface UpdateBodiedParams {

  /**
   * Body
   */
  body?: string;

}

/**
 * Reaction
 */
export interface ReactionPost extends
  CreateReactionPostParams, Post {

  /**
   * Type of post
   */
  post_type: 'reaction';

}

/**
 * Default Reaction
 */
export const DEFAULT_REACTION_POST: ReactionPost = {
  asset_ids: [],
  body: '',
  reaction_type: 'comment',
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  id: '',
  lat: DEFAULT_LATITUDE,
  livemode: true,
  long: DEFAULT_LONGITUDE,
  object: 'post',
  original_post_id: '',
  post_type: 'reaction',
  project_id: '',
  status: 'live',
  thread_id: ''
};

/**
 * Params to create a reaction
 */
export interface CreateReactionPostParams extends
  Bodied, ContainsRemoteAssets, CreatePostParams {

  /**
   * Type of reaction
   */
  reaction_type: ReactionType;

  /**
   * Id of the original post being reactioned on
   */
  original_post_id: string;

}

/**
 * Type of reaction
 */
export type ReactionType =
  'anger' |
  'attending_event' |
  'clap' |
  'comment' |
  'laugh' |
  'like' |
  'love' |
  'not_attending_event';

/**
 * Params to update a reaction
 */
export interface UpdateReactionPostParams extends
  UpdateBodiedParams, UpdateContainsRemoteAssetsParams,
  UpdatePostParams {

  /**
   * Type of reaction
   */
  reaction_type?: ReactionType;

}

/**
 * Status Update
 */
export interface StatusUpdatePost extends
  CreateStatusUpdatePostParams, Post {

  /**
   * Type of post
   */
  post_type: 'status_update';

}

/**
 * Default Status Update
 */
export const DEFAULT_STATUS_UPDATE_POST: StatusUpdatePost = {
  asset_ids: [],
  body: '',
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  id: '',
  lat: DEFAULT_LATITUDE,
  livemode: true,
  long: DEFAULT_LONGITUDE,
  object: 'post',
  post_type: 'status_update',
  project_id: '',
  status: 'live',
  thread_id: ''
};

/**
 * Params to create a status_update
 */
export interface CreateStatusUpdatePostParams extends
  Bodied, ContainsRemoteAssets, CreatePostParams { }

/**
 * Params to update a status_update
 */
export interface UpdateStatusUpdatePostParams extends
  UpdateBodiedParams, UpdateContainsRemoteAssetsParams,
  UpdatePostParams { }


/**
 * Thread of users
 */
export interface Thread extends CreateThreadParams, Identifiable {

  /**
   * Object name
   */
  object: 'thread';

}

export const DEFAULT_THREAD: Thread = {
  activity: {},
  admin_ids: [],
  avatar_asset_id: '',
  bio: '',
  blocked_member_ids: [],
  community_status: 'approved',
  created_at: DEFAULT_TIMESTAMP,
  creator_id: '',
  cover_asset_id: '',
  id: '',
  lat: DEFAULT_LATITUDE,
  livemode: true,
  long: DEFAULT_LONGITUDE,
  member_ids: [],
  object: 'thread',
  pending_member_ids: [],
  project_id: '',
  thread_type: 'direct_message',
  title: '',
  username: ''
};

/**
 * Params to create a thread
 */
export interface CreateThreadParams extends
  ContainsAvatar, ContainsCover,
  ContainsSocial, CreateMappableParams,
  Manageable, ProjectScoped, Publishable, Titled {

  /**
   * Activity in thread
   * 
   * Key is user id
   */
  activity: {

    [key: string]: ThreadActivity;

  };

  /**
   * Latitude
   */
  lat: number;

  /**
  * Longitude
  */
  long: number;

  /**
   * Ids of the members in the thread.
   * 
   * @Important This array is exhaustive i.e. `member_ids` is 
   * a superset of both `pending_member_ids` and `admin_ids`
   */
  member_ids: string[];

  /**
   * Ids of the members invited to the thread
   */
  pending_member_ids: string[];

  /**
   * Type of thread
   */
  thread_type: ThreadType;

}

/**
 * User activity in thread
 */
export interface ThreadActivity {

  /**
   * When user first joined (or, if private, accepted invite)
   */
  joined_at: Timestamped;

  /**
   * When the user last opened the thread
   */
  opened_at: Timestamped;

}


/**
 * Type of thread
 */
export type ThreadType = 'direct_message' | 'group';

/**
 * Params to update a thread
 */
export interface UpdateThreadParams
  extends UpdateContainsAvatarParams, UpdateContainsCoverParams,
  UpdateContainsSocialParams, UpdateManageableParams,
  UpdateMappableParams, UpdateTitledParams {

  /**
   * Activity in thread
   * 
   * Key is user id
   */
  activity?: {

    [key: string]: UpdateThreadActivityParams;

  };

  /**
   * Updates to the `member_ids` array
   */
  member_ids?: ArrayUpdateOperation;

  /**
   * Updates to the `pending_member_ids` array
   */
  pending_member_ids?: ArrayUpdateOperation;

  /**
   * @deprecated
   */
  append_member_ids?: string[];

  /**
   * @deprecated
   */
  append_pending_member_ids?: string[];

  /**
   * @deprecated
   */
  remove_member_ids?: string[];

  /**
   * @deprecated
   */
  remove_pending_member_ids?: string[];

}

/**
 * User activity in thread
 */
export interface UpdateThreadActivityParams {

  /**
   * When user first joined (or, if private, accepted invite)
   */
  joined_at?: Timestamped;

  /**
   * When the user last opened the thread
   */
  opened_at?: Timestamped;

}

/**
 * Request Data for for Marketplace App Initialization
 */
export interface InitMarketplaceAppParams extends InitAppParams { }

/**
 * Server response body for Marketplace App Initialization
 */
export interface InitMarketplaceAppResponseBody extends InitAppResponseBody {

  /**
   * Project information. Critical for copyright and support email.
   */
  project: MarketplaceProject;

  /**
   * Map of Posts
   * 
   * Key is the `id` of the Post 
   */
  posts: {

    [key: string]: Post;

  };

  /**
   * Map of Remote Assets
   * 
   * Key is the `id` of the RemoteAsset
  */
  remote_assets: {

    [key: string]: RemoteAsset;

  };

  /**
   * Map of Threads
   * 
   * Key is the `id` of the Thread
   */
  threads: {

    [key: string]: Thread;

  };

  /**
   * Minted project users. Key is ID
   */
  users: {

    [key: string]: MarketplaceProjectUser;

  };

  /**
   * Minted id of the new or returning project user
   */
  user_id: string;

}

/**
* 
* **************
* Push
* **************
* 
*/


/**
 * Notification settings
 */
 export interface NotificationSettings extends UpdateNotificationSettingsParams {

  /**
   * Endpoints that trigger a notification for this app
   */
   endpoint_notifications: {

    /**
     * Endpoint
     * 
     * `null` or `undefined` defaults to false, i.e. should not trigger a notification
     */
    [key in APIRequestEndpoint]?: {
      email?: EmailNotificationCriteria | null;
      mobile_app_directed?: PushNotificationCriteria | null;
      mobile_app_topic?: PushNotificationCriteria | null;
      sms?: null;
    };

  };

  /**
   * Topics that trigger a notification for this app
   */
  topic_notifications: {

    /**
     * Topic name e.g. `reminders`
     */
    [key: string]: {

      /**
       * `null` or `undefined` defaults to false, i.e. should not trigger a notification
       */
      [key in PushType]?: NotificationCriteria | null;

    };

  };

}

/**
 * Notification settings
 */
export interface UpdateNotificationSettingsParams {

  /**
   * Endpoints that trigger a notification for this app
   */
   endpoint_notifications?: {

    [key in APIRequestEndpoint]?: {

      [key in PushType]?: UpdateNotificationCriteriaParams | null;

    };

  };

  /**
   * Topics that trigger a notification for this app
   */
  topic_notifications?: {

    [key: string]: {

      [key in PushType]?: UpdateNotificationCriteriaParams | null;

    };

  };

}

/**
 * Types of push notifications
 */
export type PushType =
  'email' |
  'mobile_app_topic' |
  'mobile_app_directed' |
  'sms';

/**
 * Criteria to send a notification
 */
export interface NotificationCriteria extends Criteria, UpdateNotificationCriteriaParams {

  /**
   * Criteria
   */
  criteria: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };

  /**
   * Number of seconds this notification should delay.
   */
  delay: number | null;

  /**
   * Whom to notify
   */
  notify: NotificationTarget[];

}

/**
 * Email notification
 */
export interface EmailNotificationCriteria extends NotificationCriteria {

  /**
   * Email body
   */
  email_body: string;
  
   /**
    * Email link for CTA
    */
  email_link: string;
   
   /**
    * Email subject
    */
  email_subject: string;

}

/**
 * Push notification
 */
export interface PushNotificationCriteria extends NotificationCriteria {

  /**
   * Push notification body
   */
  push_body: string;

  /**
   * Push notification title
   */
  push_title: string;

  /**
   * Context update or `null`
   */
  push_app_reducer_action_str: string | null;

  /**
   * Navigation update or `null`
   */
  push_reset_state_str: string | null;

}

/**
 * Whom to notify
 */
export type NotificationTarget = 
'project_admins'|
'thread_members'|
'post_admins'|
'affected_users';


/**
 * Params to update notification criteria
 */
export interface UpdateNotificationCriteriaParams extends UpdateCriteriaParams {

  /**
   * Criteria
   */
   criteria?: {
    [key: string]: {
      field_path: string[];
      op: CriteriaOp;
      value: any;
    } | null;
  };
  
  /**
   * Number of seconds this notification should delay.
   */
  delay?: number | null;

  /**
   * Email body
   */
  email_body?: string;
  
  /**
   * Email link for CTA
   */
  email_link?: string;
  
  /**
   * Email subject
   */
  email_subject?: string;
  
  /**
   * Push notification body
   */
  push_body?: string;
  
  /**
   * Push notification title
   */
  push_title?: string;

  /**
   * Context update or `null`
   */
  push_app_reducer_action_str?: string | null;

  /**
   * Navigation update or `null`
   */
  push_reset_state_str?: string | null;
  
  /**
   * Whom to notify
   */
  notify?: ArrayUpdateOperation;

}

export type CriteriaOp =
  | '<'
  | '<='
  | '=='
  | '!='
  | '>='
  | '>'
  | 'array-contains'
  | 'in'
  | 'not-in'
  | 'array-contains-any';

/**
 * Special value for comparing an API key to the admin key
 */
export const COMPARE_APPDROP_ADMIN_API_KEY = 'COMPARE_APPDROP_ADMIN_API_KEY';

/**
 * Special value for checking array append operations
 */
export const COMPARE_ARRAY_APPEND_OPERATION = 'COMPARE_ARRAY_APPEND_OPERATION';

/**
 * Special value for checking array remove operations
 */
export const COMPARE_ARRAY_REMOVE_OPERATION = 'COMPARE_ARRAY_REMOVE_OPERATION';

/**
 * Params to create an iOS push notification
 */
export interface RemoteMessageRequestIOS extends RemoteMessage {
  
  /**
   * APS
   */
  aps: {
    
    /**
     * Alert object
     */
    alert: {
      
      /**
       * A short string describing the purpose of the
       * notification. Apple Watch displays this string
       * as part of the notification interface. This
       * string is displayed only briefly and should
       * be crafted so that it can be understood quickly.
       * This key was added in iOS 8.2.
       */
      title: string;

      /**
       * The text of the alert message.
       */
      body: string;
    },

    /**
     * Provide this key with a string value that
     * represents the app-specific identifier for
     * grouping notifications.
     * 
     * If you provide a Notification Content app extension,
     * you can use this value to group your notifications
     * together.
     * 
     * For local notifications, this key corresponds to
     * the threadIdentifier property of
     * the UNNotificationContent object.
     */
    'thread-id'?: string;

  };

}


// Payload mechanics
export type WriteType = 'set' | 'update';
export interface Write {
  document_path: string;
  write_type: WriteType;
}
// Create, overwrite or nullify at the provided path.
export interface SetWrite extends Write {
  doc: any | null;
  write_type: 'set';
}
// Update a specific field on the existing doc at the provided path.
export type FieldUpdateType = 'field_overwrite' | 'field_transform';
export interface FieldUpdate {
  field_path: string[];
  field_update_type: FieldUpdateType;
}
type FieldValue = string | number | boolean | string[] | null;
export interface FieldOverwriteUpdate extends FieldUpdate {
  field_update_type: 'field_overwrite';
  value: FieldValue | { [key: string]: FieldValue; }
}
export type FieldTransformType = 'append_missing_elements' | 'remove_all_from_array';
export interface FieldTransformUpdate extends FieldUpdate {
  field_transform_type: FieldTransformType;
  values: string[];
}
export interface UpdateWrite extends Write {
  updates: (FieldOverwriteUpdate|FieldTransformUpdate)[];
  write_type: 'update';
}

/**
 * Stringified reducer action
 */
export interface RemoteMessageAppReducerAction {
  type: 'write',
  payload: {
    writes: (SetWrite | UpdateWrite)[];
  };
}

/**
 * Stringified state reset
 */
export interface RemoteMessageResetState {

  /**
   * route index
   */
  index: number;

  /**
   * routes
   */
  routes: {

    /**
     * Route name
     */
    name: string;

    /**
     * Params
     */
    params?: {
      [key: string]: any;
    };

  }[];
  
}

/**
 * Remote message
 */
export interface RemoteMessage extends RemoteMessageData {

  /**
   * Notification
   */
   notification: {

    /**
     * Title
     */
    title: string;

    /**
     * Body
     */
    body: string;

  };
  
  /**
   * Push token
   */
  push_token: string;
  
  /**
   * Type of notification
   */
  push_type: PushType;
  
  /**
   * Topic
   */
  topic: string;

}

/**
 * Remote message data
 */
export interface RemoteMessageData {
    
  /**
   * Remote message data
   */
  data: {
  
    /**
     * Context update or empty string
     */
    app_reducer_action_str: string;

    /**
     * Navigation update or empty string
     */
    reset_state_str: string;
  
  };

}

/**
* 
* **************
* Errors
* **************
* 
*/

/**
 * An object with information about why an API Call failed.
 */
 export interface APIRequestError {

  /**
   * Error code
   */
  error_code: ErrorCode;

  /**
   * A detailed message describing the error
   * meant to be displayed to users
   */
  message: string;
  
  /**
   * The HTTP status codes for the Error
   */
  status_code: ErrorStatusCode;
  
  /**
   * @deprecated
   * Type of error.
   */
  error_type?: ErrorType;

}

/**
 * Base Error codes
 */
export type BaseErrorCode = 
'base/app-config-error' |
'base/app-id-error' |
'base/api-key-invalid' |
'base/api-key-missing' |
'base/api-key-revoked' |
'base/internal-server-error' |
'base/invalid-data-property' |
'base/invalid-query-params' |
'base/rate-limit-surpassed' |
'base/unknown-error';

/**
 * Base Error response map
 */
 export const BASE_ERROR_RESPONSES: {
  [key in BaseErrorCode]: APIRequestError;
} = {
  "base/app-config-error": {
    error_code: 'base/app-config-error',
    message: 'The request did not include a valid app config object',
    status_code: 401
  },
  "base/app-id-error": {
    error_code: 'base/app-id-error',
    message: 'The app id included in this request is not associated with your API key',
    status_code: 401
  },
  "base/api-key-invalid": {
    error_code: 'base/api-key-invalid',
    message: 'The included API key is not associated with an active Appdrop account',
    status_code: 403
  },
  "base/api-key-missing": {
    error_code: 'base/api-key-missing',
    message: 'The request did not include an API key',
    status_code: 401
  },
  "base/api-key-revoked": {
    error_code: 'base/api-key-revoked',
    message: 'The included API key has been revoked',
    status_code: 403
  },  
  "base/internal-server-error": {
    error_code: 'base/internal-server-error',
    message: 'Our server encountered a run-time error when processing your request',
    status_code: 500
  },
  "base/invalid-data-property": {
    error_code: 'base/invalid-data-property',
    message: 'Your data property is missing or invalid. Please check our API reference https://appdrop.com/guides',
    status_code: 500
  },
  "base/invalid-query-params": {
    error_code: 'base/invalid-query-params',
    message: 'Your query params are missing or invalid. Please check our API reference https://appdrop.com/guides',
    status_code: 500
  },
  "base/rate-limit-surpassed": {
    error_code: 'base/rate-limit-surpassed',
    message: 'You have reached the rate limit for the API',
    status_code: 429
  },
  "base/unknown-error": {
    error_code: 'base/unknown-error',
    message: 'Our server encountered an unknown error when processing your request',
    status_code: 400
  }
};

/**
 * Aggregates Error codes
 */
export type ErrorCode = 
AuthErrorCode|
BaseErrorCode;

/**
 * The HTTP status codes for Errors
 * 
 * `400`: BAD_REQUEST
 * `401`: UNAUTHORIZED
 * `403`: FORBIDDEN
 * `429`: TOO_MANY_REQUESTS
 * `500`: INTERNAL_SERVER_ERROR
 * `503`: SERVICE_UNAVAILABLE
 */
export type ErrorStatusCode =
  400 |
  401 |
  403 |
  429 |
  500 |
  503;

/**
 * Error response map
 */
export const ERROR_RESPONSES: {
  [key in ErrorCode]: APIRequestError;
} = {
  ...BASE_ERROR_RESPONSES,
  ...AUTH_ERROR_RESPONSES
};

/**
 * @deprecated
 * Error types
 */
 export type ErrorType =
 'app-config-error' |
 'app-id-error' |
 'api-key-invalid' |
 'api-key-missing' |
 'api-key-revoked' |
 'incorrect-auth-credentials' |
 'internal-server-error' |
 'invalid-data-property' |
 'invalid-endpoint' |
 'rate-limit-surpassed' |
 'unknown-error' |
 'user-id-invalid';

/**
 * Body of Async Errors
 */
export type AsyncErrorBody = CreateCustomerParams;

/**
 * Async Error types
 */
export type AsyncErrorType = 'customer_write_failed';

/**
 * Data to correct an async error. Used async tasks such as stripe customer creation.
 */
export interface AsyncError extends
  Identifiable, ProjectScoped {

  /**
   * Body of data
   */
  body: AsyncErrorBody;

  /**
   * Message
   */
  message: string;

  /**
   * Object name
   */
  object: 'async_error';

  /**
   * Number of attempts at correcting error.
   */
  num_retries: number;

  /**
   * Name of project where error occurred for convenience
   */
  project_name: string;

  /**
   * Type of error
   */
  type: AsyncErrorType;
  
}

/**
 * Params for `handleError` function
 */
export interface HandleErrorParams {
  admin: any;
  db: any;
  endpoint: APIRequestEndpoint;
  error: ErrorCode;
  method: APIRequestMethod;
  req: any;
  res: any;
}

/**
 * API response and logging for error cases.
 */
 export async function handleError({
   admin,
   db,
   endpoint,
   error,
   method,
   req,
   res
 }: HandleErrorParams): Promise<void> {
  try {
    console.log(`${method} ${endpoint} error`, error);
    const error_code = (!!error && typeof error === 'string') ?
      error as ErrorCode : 'base/unknown-error';
    const error_response = ERROR_RESPONSES[error_code] ?
      ERROR_RESPONSES[error_code] :
      ERROR_RESPONSES['base/unknown-error'];
    const error_response_body = {
      error: error_response
    };
    res.header("Content-Type", 'application/json');
    res.status(error_response.status_code).send(JSON.stringify(error_response_body));
    if (error !== 'base/app-config-error') {
      const request_body = (
        typeof req.body === 'string' ?
          JSON.parse(req.body) : req.body
      ) as unknown as APIRequestBody;
      const cleansed_request_body = cleanRequestBody(request_body);
      const api_request_id = randString();
      const ip_address_obj = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
      const ip_address = typeof ip_address_obj === 'string' ? ip_address_obj : ip_address_obj[0];
      const api_request: APIRequest = {
        created_at: admin.firestore.Timestamp.fromDate(new Date()),
        livemode: true,
        endpoint: endpoint,
        id: api_request_id,
        ip_address: ip_address,
        method: method,
        object: 'api_request',
        request_body: cleansed_request_body,
        response_body: error_response_body,
        status_code: error_response.status_code,
      };
      await db.collection('api_requests').doc(api_request_id).set(api_request);
      return;
    }
  }
  catch (error) {
    console.log('handleError error', error);
    return;
  }
}


/**
* 
* **************
* Utils
* **************
* 
*/

/**
* Random string generator. Safe for minting ids.
*/
export function randString(l = -1) {
  let result = "";
  const alphanumeric_characters = "012345789abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const r = l > 0 ? l : (Math.floor(Math.random() * 20) + 20);
  for (let i = 0; i < r; i++) {
    result += alphanumeric_characters.charAt(
      Math.floor(Math.random() * alphanumeric_characters.length)
    );
  }
  return result;
}

/**
 * Returns true if the `s` param is a valid string
 */
export const validString = (s: string | null | undefined, requires_letters: boolean) => {
  return (
    s !== null &&
    s !== undefined &&
    typeof s === 'string' &&
    (!requires_letters || s.length > 0)
  );
};

/**
 * Maps month index to its name. `0` is `Jan` or `January`
 */
export const monthMap = (n: number, long: boolean) => {
  switch (n) {
    case 0:
      return long ? 'January' : 'Jan';
    case 1:
      return long ? 'February' : 'Feb';
    case 2:
      return long ? 'March' : 'Mar';
    case 3:
      return long ? 'April' : 'Apr';
    case 4:
      return long ? 'May' : 'May';
    case 5:
      return long ? 'June' : 'Jun';
    case 6:
      return long ? 'July' : 'Jul';
    case 7:
      return long ? 'August' : 'Aug';
    case 8:
      return long ? 'September' : 'Sep';
    case 9:
      return long ? 'October' : 'Oct';
    case 10:
      return long ? 'November' : 'Nov';
    case 11:
      return long ? 'December' : 'Dec';
    default:
      throw new Error('invalid month number passed to month_map');
  }
};

/**
 * Accepts an integer [0,6] and returns the english name of that day. 
 * 
 * `0` is `Sunday`
 * 
 * `1` is `Monday` and so on
 */
export function dayMap(n: number, long: boolean) {
  switch (n) {
    case 0: return long ? 'Sunday' : 'Sun.';
    case 1: return long ? 'Monday' : 'Mon.';
    case 2: return long ? 'Tuesday' : 'Tues.';
    case 3: return long ? 'Wednesday' : 'Wed.';
    case 4: return long ? 'Thursday' : 'Thurs.';
    case 5: return long ? 'Friday' : 'Fri.';
    case 6: return long ? 'Saturday' : 'Sat.';
    default: throw new Error('invalid day number');
  }
}

/**
 * Date formats
 */
export type DateFormat = 'full' | 'mm/dd/yy';

/**
 * Accepts a unix timestamp in seconds and returns the date.
 * 
 * Examples:
 * 
 * www, mmm. dd means Friday, Mar. 19
 * 
 * mm/dd/yy means 5/9/21
 */
export function secToDate(s: number, f: DateFormat) {
  const d = new Date(s * 1000);
  const day_num = d.getDay();
  const month_num = d.getMonth();
  const date_num = d.getDate();
  const year_num = d.getFullYear();
  if (f === 'full') {
    return `${dayMap(day_num, true)}, ${monthMap(month_num, false)}. ${date_num}`;
  }
  else if (f === 'mm/dd/yy') {
    return `${month_num + 1}/${date_num}/${year_num.toString().slice(2, 4)}`;
  }
};

/**
 * 
 * @param s Apple id, example: 12323432
 * @returns Installation url
 */
export const getInstallUrlIOS = (s: string) => `https://apps.apple.com/us/app/${s}`;

/**
 * 
 * @param s Apple id, example: 12323432
 * @returns Review url
 */
export const writeReviewUrlIOS = (s: string) => `https://apps.apple.com/app/${s}?action=write-review`;

/**
 * 
 * @param s Android package name, example: com.example
 * @returns Installation url
 */
export const getInstallUrlAndroid = (s: string) => `https://play.google.com/store/apps/details?id=${s}`;

/**
 * 
 * @param s Android package name, example: com.example
 * @returns Review url
 */
export const writeReviewUrlAndroid = (s: string) => `https://play.google.com/store/apps/details?id=${s}`;

/**
 * Link to cancel a subscription on iOS
 */
export const getCancellationUrlIOS = () => 'https://apps.apple.com/account/subscriptions';

/**
 * 
 * @param android_package_name Android package name, example: com.example
 * @param iap_sku Sku of the IAP, example: monthly_pro
 * @returns link to cancel subscription
 */
export const getCancellationUrlAndroid =
  (android_package_name: string, iap_sku: string) =>
    `https://play.google.com/store/account/subscriptions?package=${android_package_name}&sku=${iap_sku}`;

export const capitalizeFirstLetter = (s: string) => s.length === 0 ? '' : (
  s[0].toUpperCase() + `${s}`.slice(1, `${s}`.length)
);

export const getArticle = (s: string, capitalize: boolean) => ['a', 'e', 'i', 'o', 'u'].includes(s[0]) ?
  (capitalize ? 'An' : 'an') : (capitalize ? 'A' : 'a');

/**
 * Gets the user's full name
 */
export const getUserFullName = (user: User) => {
  return (validString(user.name.given_name, true) || validString(user.name.family_name, true))
    ? `${user.name.given_name} ${user.name.family_name}`
    : (validString(user.display_name, true)
      ? user.display_name
      : null);
}