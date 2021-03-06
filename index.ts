import FirebaseFirestore from '@google-cloud/firestore';
import atob from 'atob';

/**
 * 
 * **************
 * Assets
 * **************
 * 
 */

/**
 * Supported Assets
 */
export type AssetType = 'image';

/**
 * An Asset uploaded to Appdrop Cloud Storage
 */
export interface RemoteAsset extends Identifiable {

    /**
     * Type of asset
     */
	asset_type: AssetType;
	
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
     * Last update timestamp.
     */
    updated_at: Timestamped;

}

/**
 * Local asset
 */
export interface CachedAsset extends RemoteAsset {
    
    /**
     * Cache timestamp
     */
    cached_at: Timestamped;

}

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
export interface User extends CreateUserParams, Identifiable {

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'user';

}

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
export interface CreateUserParams extends UpdateUserParams {

    /**
     * The user's address.
     */
    address: Address;

    /**
     * The user's email address.
     */
    email: string;

    /**
     * Id of the user.
     * 
     * NOTE: user ids are scoped to each project.
     * 
     * Thus it is not possible to create a user with id `user_001` in an iOS app and
     * later create a user with id `user_001` in an Android app, if the two
     * apps belong to the same project. It is possible to update the data for
     * `user_001` from either app.
     */
    id: string;

    /**
     * Set of [key-value pairs] that you can attach to an object. 
     * This can be useful for storing additional information about the 
     * object in a structured format.
     */
    metadata: {

        [key: string]: any;

    };

    /**
     * The user's full name or business name.
     */
    name: string;

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
     * The user's phone number.
     */
    phone: string;

    /**
     * Security answer for password resets or an empty string. Encrypted before storage.
     */
    security_answer: string;

    /**
     * Security answer encrypted for password resets encrypted or an empty string.
     */
    security_answer_hash: string;
    
    /**
     * Security answer salt for password resets or an empty string.
     */
    security_answer_salt: string;
    
    /**
     * Security question for password resets or an empty string.
     */
    security_question: string;
    
}

/**
 * Params to update a user.
 * 
 * Note that the properties `id` and `livemode` are missing as these are 
 * not editable.
 */
export interface UpdateUserParams {

    /**
     * The user's address.
     */
    address?: Address;

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
     * The user's full name or business name.
     */
    name?: string;

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
     * Security answer for password resets or an empty string. Encrypted before storage.
     */
    security_answer?: string;

    /**
     * Security answer for password resets encrypted or an empty string.
     */
    security_answer_hash?: string;
    
    /**
     * Security question for password resets or an empty string.
     */
    security_question?: string;

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
     * Raw password
     */
    password: string;

}

/**
 * Auth operations
 */
export type AuthenticationType = 'sign_in'|'sign_up';

/**
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
'AL'|'AK'|'AZ'|'AR'|'CA'|'CO'|'CT'|'DE'|'FL'|'GA'|'HI'|'ID'|'IL'|'IN'|
'IA'|'KS'|'KY'|'LA'|'ME'|'MD'|'MA'|'MI'|'MN'|'MS'|'MO'|'MT'|'NE'|'NV'|
'NH'|'NJ'|'NM'|'NY'|'NC'|'ND'|'OH'|'OK'|'OR'|'PA'|'RI'|'SC'|'SD'|'TN'|
'TX'|'UT'|'VT'|'VA'|'WA'|'WV'|'WI'|'WY';
export const STATE_CODE_USA_ARR = [
'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN',
'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV',
'NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN',
'TX','UT','VT','VA','WA','WV','WI','WY'
];
export const STATE_CODE_USA_MAP: {
    [key in StateCodeUSA]: string
}  = {
    "AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California",
    "CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia",
    "HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas",
    "KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts",
    "MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana",
    "NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico",
    "NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma",
    "OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina",
    "SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont",
    "VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"
};

/**
 * ISO 3166-1 alpha-2 country code
 */
export type CountryCode = 
'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AN' |
'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AZ' | 'BA' |
'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' |
'BM' | 'BN' | 'BO' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' |
'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' |
'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' |
'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' |
'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' |
'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' |
'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' |
'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' |
'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' |
'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' |
'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' |
'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' |
'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' |
'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' |
'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' |
'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' |
'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' |
'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' |
'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' |
'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' |
'SV' | 'SX' | 'SY' | 'SZ' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' |
'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' |
'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'US' | 'UY' | 'UZ' | 'VA' |
'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' |
'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW' | '';

/**
 * Time mechanics
 */
export type Timestamped = FirebaseFirestore.Timestamp |
{

    /**
     * Nanoseconds since the Unix epoch.
     */
    _nanoseconds: number;
    
    /**
     * Seconds since the Unix epoch.
     */
    _seconds: number;

}|
null;

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
    created_at: Timestamped

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
 * Billing
 * **************
 * 
 */
 
 /**
 * Financial details for Entities and Project Users.
 */
export interface FinancialDetails extends CreateFinancialDetailsParams {}

/**
 * Params to create financial details.
 */
export interface CreateFinancialDetailsParams extends UpdateFinancialDetailsParams {

    /**
     * The entity's credit card on file.
     */
    card: Card|null;

}

/**
 * Params to update a nested field in financial details.
 */
export interface UpdateFinancialDetailsParams {
    
    /**
     * The entity's credit card on file.
     */
    card?: Card|null;
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
 * Financial details for Appdrop Entities
 */
export interface EntityFinancialDetails extends CreateEntityFinancialDetailsParams, FinancialDetails {}

/**
 * Params to create financial details for an entity.
 */
export interface CreateEntityFinancialDetailsParams extends CreateFinancialDetailsParams {

    /**
     * The active Add Ons for this Entity.
     */
    add_ons: {

        /**
        * key is AddOn Id
        */
        [key:string]: AddOn;

    };

    /**
     * The active Coupon objects applied to this entity's account. Coupons
     * are applied either by the converting team during onboarding (for instance after reading
     * about a promotional on our Twitter page) or applied by an Appdrop sales rep
     * during an App Strategy Session.
     */
    coupons: {

        /**
        * key is Coupon id.
        */
        [key:string]: Coupon;

    };

    /**
     * Net Sales that the Organization has accumulated during the current 
     * payout period scheduled to be remitted by Appdrop on the first day of the 
     * month. The unit is the smallest unit of the Organization's currency.
     * 
     * USD Example: 10050 indicates $100.50
     */
    payout_balance: number;

    /**
     * The entity's Stripe subscription object.
     * 
     * Note – Pro plan organizations with add-ons get a wildcard Stripe
     * price following their selections during strategy session calls.
     */
    stripe_subscription: Subscription|null;

    /**
     * Entity tier
     */
    tier: EnterpriseTier|OrganizationTier;

}

/**
 * Params to update a nested field in an entity's finacial details.
 */
export interface UpdateEntityFinancialDetailsParams extends UpdateFinancialDetailsParams {

    /**
     * The active Add Ons for this Entity.
     */
    add_ons?: {

        /**
        * key is AddOn Id
        */
        [key:string]: AddOn;

    };

    /**
     * The active Coupon objects applied to this entity's account. Coupons
     * are applied either by the converting team during onboarding (for instance after reading
     * about a promotional on our Twitter page) or applied by an Appdrop sales rep
     * during an App Strategy Session.
     */
    coupons?: {
        
        /**
         * key is Stripe Coupon id
         */
        [key:string]: Coupon;
        
    };

    /**
     * Net Sales that the Organization has accumulated during the current 
     * payout period scheduled to be remitted by Appdrop on the first day of the 
     * month. The unit is the smallest unit of the Organization's currency.
     * 
     * USD Example: 10050 indicates $100.50
     */
    payout_balance?: number;

    /**
     * The id of the entity's Stripe subscription object.
     * 
     * Note – Starter & Pro plan organizations with add-ons get a wildcard Stripe
     * price following their selections during strategy session calls.
     */
    stripe_subscription?: Subscription|null;

    /**
     * Entity tier
     */
    tier?: EnterpriseTier|OrganizationTier;

}

/**
 * An Add-On to an Appdrop plan.
 */
export interface AddOn extends Identifiable {

    /**
     * The Code used to redeem this Coupon.
     * 
     * Example: fast_track_submission
     */
    code: string;

    /**
     * Brief description of the add-on and its pricing.
     * 
     * Example: Appdroppers will publish the app for you. $200 / Mo
     * Example: Custom UI work. Fixed Rate – $1,000
     */
    description: string;
    
    /**
     * Cost of the add-on.
     */
    price: number;

}

/**
 * Invoice renewal interval.
 */
export type BillingInterval = 'quarterly'|'annually';

/**
 * Invoice payment method.
 * 
 * Note: Enterprises and Organizations paying for Appdrop plans using a credit
 * card incur an additional 5% processing fee.
 */
export type BillingMethod = 'card';

/**
 * A discount toward an Appdrop plan.
 */
export interface Coupon extends Identifiable {

    /**
     * The Code used to redeem this Coupon.
     * 
     * Example: HOYAS21
     */
    code: string;

    /**
     * Description of the discount.
     * 
     * Example: FREE first month of Appdrop Pro
     */
    description: string;

    /**
     * Timestamp that the Coupon expires.
     */
    expires: Timestamped;

}

/**
 * Enterprise tier.
 */
export type EnterpriseTier = 'large'|'medium'|'small';

/**
 * Organization tier.
 */
export type OrganizationTier = 'business'|'enterprise'|'pro'|'starter';


/**
 * Price of Appdrop services.
 */
export interface Price {
    
    /**
     * Price of product. The unit is the smallest unit of the Organization's currency.
     * 
     * USD Example: 10050 indicates $100.50
     */
    price: number;
    
    /**
     * Price Id in Stripe dashboard
     */
    stripe_price_id: string;

}

/**
 * Map of the Stripe product ids for each enterprise tier.
 */
export const ENTERPRISE_PRICE_MAP: {
    [key in EnterpriseTier]: {
        [key in BillingInterval]?: Price;
    }
} = {
    large: {
        annually: {
            price: 1000000,
            stripe_price_id: 'enterprise_large_annually'
        }
    },
    medium: {
        annually: {
            price: 500000,
            stripe_price_id: 'enterprise_medium_annually'
        }
    },
    small: {
        annually: {
            price: 300000,
            stripe_price_id: 'enterprise_small_annually'
        }
    }
};

/**
 * Map of the Stripe price ids for each organization tier.
 */
export const ORGANIZATION_PRICE_MAP: {
    [key in OrganizationTier]: {
        [key in BillingInterval]: Price;
    }
} = {
    business: {
        annually: {
            price: 898800,
            stripe_price_id: 'organization_business_annually'
        },
        quarterly: {
            price: 269700,
            stripe_price_id: 'organization_business_quarterly'
        }
    },
    enterprise: {
        annually: {
            price: 0,
            stripe_price_id: 'organization_enterprise_annually'
        },
        quarterly: {
            price: 0,
            stripe_price_id: 'organization_enterprise_quarterly'
        }
    },
    pro: {
        annually: {
            price: 358800,
            stripe_price_id: 'organization_pro_annually'
        },
        quarterly: {
            price: 104700,
            stripe_price_id: 'organization_pro_quarterly'
        }
    },
    starter: {
        annually: {
            price: 118800,
            stripe_price_id: 'organization_starter_annually'
        },
        quarterly: {
            price: 35700,
            stripe_price_id: 'organization_starter_quarterly'
        }
    }
};

/**
 * Stripe customer
 */
export interface Customer extends CreateCustomerParams {

    /**
     * The customer's payment sources, if any.
     */
    sources:  {

        /**
         * Source data
         */
        data: Card[];
  
    }

    /**
     * The customer's current subscriptions, if any.
     */
    subscriptions: {
        
        /**
         * Subscription data
         */
        data: Subscription[]
    
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
    name: string
    
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
    name?: string

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
    card: CreateCardParams

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
    brand: CardBrand|null;
    
    /**
     * If a CVC was provided, results of the check.
     */
    cvc_check: CVCCheckType|null;
    
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
    funding: CardFundingType|null;
    
    /**
     * The last four digits of the card.
     */
    last4: string;
    
}

/**
 * Card's brand.
 */
export type CardBrand = 'American Express'|
'Diners Club'|
'DiscoverCard'|
'JCB'|
'MasterCard'|
'Visa';

/**
 * If a CVC was provided, results of the check.
 */
export type CVCCheckType = 'pass'|'fail'|'unavailable'|'unchecked';

/**
 * Card funding type.
 */
export type CardFundingType = 'credit'|'debit'|'prepaid'|'unknown';

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
 * Stripe Subscription object
 */
export interface Subscription extends CreateSubscriptionParams {

    /**
     * Timestamp
     */
    created: number;

    /**
     * Subscription id
     */
    id: string;

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
     * Boolean indicating whether this subscription should cancel at the end of the current period.
     */
    cancel_at_period_end: boolean;

    /**
     * Customer id
     */
    customer: string;
    
    /**
     * Subscription item
     */
    items: SubscriptionItem[];
    
}

/**
 * Subscription item
 */
export interface SubscriptionItem {

    /**
     * id of the subscription item.
     */
    id: string;
    
    /**
     * The ID of the price object.
     */
    price: string;

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
     * Subscription item
     */
    items?: SubscriptionItem[];

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
export type ChargeStatus = 'succeeded'|'pending'|'failed';

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
'ach_credit_transfer'|'ach_debit'|'alipay'|'au_becs_debit'|
'bancontact'|'card'|'card_present'|'eps'|'giropay'|'ideal'|
'klarna'|'multibanco'|'p24'|'sepa_debit'|'sofort'|'stripe_account'|'wechat';

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
        
    }

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
     * For card charges, use `statement_descriptor_suffix` instead. 
     * Otherwise, you can use this value as the complete description 
     * of a charge on your customers' statements. Must contain at 
     * least one letter, maximum 22 characters.
     */
    statement_descriptor: string;

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
export type RefundFailureReason = 'lost_or_stolen_card'|'expired_or_canceled_card'|'unknown';

/**
 * Status of the refund. 
 */
export type RefundStatus = 'pending'|'succeeded'|'failed'|'canceled';

/**
 * Params to create a Refund
 */
export interface CreateRefundParams {
    
    /**
     * Amount being returned in cents.
     */
    amount: number;

    /**
     * Id of the Charge object.
     */
    charge: string;

    /**
     * Id of the ECommerce project this order belongs to.
     */
    project_id: string;

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
    financial_details: EntityFinancialDetails;

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
    financial_details: CreateEntityFinancialDetailsParams;

    /**
     * The legal name of this Entity.
     */
    name: string;

    /**
     * The id of the User that owns the Enterprise.
     */
    owner_id: string;

    /**
     * This array contains the ids of each User with read and write access
     * to the Enterprise.
     */
    team_member_ids?: string[];

}

/**
 * Type of entity
 */
export type EntityType = 'enterprise'|'organization';

/**
 * Params to update an entity.
 */
export interface UpdateEntityParams {

    /**
     * This array contains the ids to append to the `team_member_ids` array.
     */
    append_team_member_ids?: string[];

    /**
     * Financial details for this Appdrop Entity
     */
    financial_details?: UpdateEntityFinancialDetailsParams;

    /**
     * The legal name of this Entity.
     */
    name?: string;

    /**
     * The id of the User that owns the Enterprise.
     */
    owner_id?: string;

    /**
     * This array contains the ids to remove from the `team_member_ids` array.
     */
    remove_team_member_ids?: string[];

    /**
     * This array contains the ids of each User with read and write access
     * to the Enterprise.
     */
    team_member_ids?: string[];

}


/**
 * An Appdrop Enterprise account. Pays for Organizations to access Appdrop.
 */
export interface Enterprise extends CreateEnterpriseParams, Entity {

    /**
     * Type of entity
     */
    entity_type: 'enterprise';

    /**
     * This object contains each User with read and write access
     * to the Enterprise.
     */
    team_member_ids: string[];

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
        add_ons: {},
        card: null,
        coupons: {},
        payout_balance: 0,
        stripe_subscription: null,
        tier: 'small'
    },
    id: '',
    livemode: true,
    name: '',
    object: 'entity',
    organization_ids: [],
    owner_id: '',
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
     * Ids to append to the `organization_ids` array
     */
    append_organization_ids?: string[];

    /**
     * Id of each Organization that this Enterprise owns
     */
    organization_ids?: string[];

    /**
     * Ids to remove from the `organization_ids` array
     */
    remove_organization_ids?: string[];

    /**
     * The suffix for valid emails.
     * 
     * Example: `@georgetown.edu`
     */
    workspace_email_suffix?: string;

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

    /**
     * This object contains each User with read and write access
     * to the Enterprise.
     */
    team_member_ids: string[];

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
        add_ons: {},
        card: null,
        coupons: {},
        payout_balance: 0,
        stripe_subscription: null,
        tier: 'starter'
    },
    id: '',
    livemode: true,
    name: '',
    object: 'entity',
    owner_id: '',
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
     * Ids to append to the `project_ids` array
     */
    append_project_ids?: string[];

    /**
     * This array includes the id of each Project that this Organization owns.
     */
    project_ids?: string[];
    
    /**
     * Ids to remove from the `project_ids` array
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
export interface Order extends Identifiable, CreateOrderParams, ConfirmOrderParams, OrderResultBase {

    /**
     * Id in external system
     */
    external_id: string|null;

    /**
     * Items in order
     */
    items: OrderItem[];
    
    /**
     * Object name
     */
    object: 'order';

    /**
     * Id of the Appdrop project
     */
    project_id: string;
    
    /**
     * Unix Timestamp in seconds of last order update.
     */
    updated_at: Timestamped;

}

/**
 * Shared Order API
 */
export interface OrderResultBase {
    
    /**
     * Costs to produce and ship the items
     */
    costs: OrderInternalCosts;
    
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
export interface OrderRetailCosts extends OrderCosts {}

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
    discount: string|null;

    /**
     * Shipping costs. Often used to pass price to consumer.
     */
    shipping: string|null;
    
    /**
     * Subtotal
     */
    subtotal: string|null;
    
    /**
     * Sales tax. Often used to pass price to consumer.
     */
    tax: string|null;
    
    /**
     * Grand total
     */
    total: string|null;
    
    /**
     * Vat tax.
     */
    vat: string|null;

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
export type OrderStatus = 'draft'|'failed'|'pending'|'canceled'|'onhold'|'inprocess'|'partial'|'fulfilled';

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
     * Order items
     */
    items: CreateOrderItemParams[];

    /**
     * Order Recipient
     */
    recipient: CreateOrderRecipientParams;

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
    external_id: number|null;
    
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
    price: number;
   
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

    };
    
    /**
     * Retail price for packing slip.
     */
    retail_price: string|null;
    
    /**
     * Printful generated sku
     */
    sku: string|null;

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
export interface CreateOrderItemParams {
    
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
export interface OrderRecipient extends CreateOrderRecipientParams {}

/**
 * Params to generate an Order recipient
 */
export interface CreateOrderRecipientParams extends Address {
    
    /**
     * Recipient email.
     */
    email: string;

    /**
     * Recipient name.
     */
    name: string;
    
}

/**
 * Params to update an existing order that is not `inprocess`, `partial` or `fulfilled`.
 * 
 * PUT https://api.printful.com/orders/{id} 
 */
export interface UpdateOrderParams {

    /**
     * Order items
     */
    items?: OrderItem[];

    /**
     * Order Recipient
     */
    recipient?: CreateOrderRecipientParams;

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
    error: string|null;
    
    /**
     * Error code. `0` if no error
     */
    errorCode: number;
    
    /**
     * Id in external system
     */
    external_id: string|null;
    
    /**
     * Gift text
     */
    gift: {
        
        /**
         * Gift subject for packing slip
         */
        subject: string;

        /**
         * Gift message for packing slip
         */
        message: string;
    
    }|null;
    
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
    notes: string|null;
    
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
export interface Product extends Identifiable, ProductBase {
    
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
     * Id of the ECommerce Project that this Product belongs to.
     * 
     * Used to query the `products` collection for Store owners and end-customers
     */
    project_id: string;
    
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
    type: VariantFileType;

    /**
     * Width in px
     */
    width: number;
    
}

/**
 * Type of file
 */
export type VariantFileType = 'default'|'preview';


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
    warehouse_product_variant_id: number|null;
    
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
    
export interface CreateProjectTemplateParams extends UpdateProjectTemplateParams, CreateVersionHistoryParams {

    /**
     * Company that published the template.
     */
    copyright: string;

    /**
     * Branded cover photo of the template
     */
    cover_photo: RemoteAsset;

    /**
     * Description of template
     */
    description: string;

    /**
     * Download Url for the template code.
     */
    git_repo: string;
    
    /**
     * Name of the template
     */
    name: string;

    /**
     * Type of project
     */
    project_template_type: ProjectTemplateType;

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
 * Type of project template
 */
export type ProjectTemplateType = 
'e-commerce'|
'social-network'|
'marketplace'|
'streaming-service'|
'media';

export interface UpdateProjectTemplateParams extends UpdateVersionHistoryParams {

    /**
     * Company that published the template.
     */
    copyright?: string;

    /**
     * Branded cover photo of the template
     */
    cover_photo?: RemoteAsset;

    /**
     * Description of template
     */
    description?: string;

    /**
     * Download Url for the template code.
     */
    git_repo?: string;
    
    /**
     * Name of the template
     */
    name?: string;

    /**
     * Type of project
     */
    project_template_type?: ProjectTemplateType;
    
};

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
     * Key is version ID.
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
     * Key is version ID.
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

export interface CreateVersionParams extends UpdateVersionParams {
    
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
    
export interface UpdateVersionParams {

    /**
     * Brief description of the features and functionality introduced in this version.
     */
    version_description?: string;

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
 * Params to generate a project
 */
export interface CreateProjectParams extends UpdateProjectParams { 
    
    /**
     * This array includes the id of each App that this Project contains.
     */
    app_ids: string[];
    
    /**
     * The Id of the Project logo Asset.
     */
    logo_asset: RemoteAsset;
    
    /**
     * The name of this Project. Example: My Cool App
     */
    name: string;

    /**
     * The id of the organization that owns this project.
     */
    organization_id: string;
    
    /**
     * Id of the Project template that this project is built on.
     */
    template_id: string;
    
}

export interface UpdateProjectParams {
    
    /**
     * Ids of Apps to append to the `app_ids` array
     */
    append_app_ids?: string[];
    
    /**
     * This array includes the id of each App that this Project contains.
     */
    app_ids?: string[];
    
    /**
     * The Id of the Project logo Asset.
     */
    logo_asset?: RemoteAsset;
    
    /**
     * The name of this Project. Example: My Cool App
     */
    name?: string;

    /**
     * Ids of Apps to remove from the `app_ids` array
     */
    remove_app_ids?: string[];
    
    /**
     * Id of the Project template that this project is built on.
     */
    template_id?: string;

}

/**
 * An end-user registered to an Appdrop Project.
 */
export interface ProjectUser extends CreateProjectUserParams, User {}

/**
 * Params to create an end-user registered to an Appdrop Project.
 */
export interface CreateProjectUserParams extends CreateUserParams {
    
    /**
     * Id of the Project this User belongs to.
     */
    project_id: string;
    
}

/**
 * Params to update an end-user registered to an Appdrop Project.
 * 
 * Note – `project_id` is not editable once set.
 */
export interface UpdateProjectUserParams extends UpdateUserParams {}


/**
 * Native app or web app contained in a project
 */
export interface App extends CreateAppParams, Identifiable, VersionHistory {

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


export interface CreateAppParams extends CreateVersionHistoryParams, UpdateAppParams {

    /**
     * The name of this App. Example: MyCoolApp iOS or MyCoolApp Web
     */
    name: string;

    /**
     * The platform where this app is published.
     */
    platform: PlatformType;

    /**
     * Id of the Project containing this App.
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

export interface UpdateAppParams extends UpdateVersionHistoryParams {
    
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

export interface CreateAppAndroidParams extends CreateAppParams {
    
    /**
     * Package name for an android app
     * 
     * Example: com.example
     */
    android_package_name: string;
    
}

export interface UpdateAppAndroidParams extends UpdateAppParams {
    
    /**
     * Package name for an android app
     * 
     * Example: com.example
     */
    android_package_name?: string;

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

export interface CreateAppIOSParams extends CreateAppParams {
    
    /**
     * Bundle ID for an ios app.
     * 
     * Example: com.example.app
     */
    ios_bundle_id: string;

    /**
     * App ID number autogenerated by Apple
     * 
     * Example: 154213891
     */
    ios_app_id: string;
    
}

export interface UpdateAppIOSParams extends UpdateAppParams {
    
    /**
     * Bundle ID for an iOS app.
     * 
     * Example: com.example.app
     */
    ios_bundle_id?: string;

    /**
     * App ID number autogenerated by Apple
     * 
     * Example: 154213891
     */
    ios_app_id?: string;

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
export interface CreateAppWebParams extends CreateAppParams {

    /**
     * Fully formed domain name, used for web apps
     * 
     * Example: dashboard.example.com
     */
    domain_name: string;

}

export interface UpdateAppWebParams extends UpdateAppParams {
    
    /**
     * Fully formed domain name, used for web apps
     * 
     * Example: dashboard.example.com
     */
    domain_name?: string;
    
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
export interface CreateSupportTicketParams {

    /**
     * The message attached with this support ticket.
     */
    message: string;

    /**
     * The sender user's project id.
     */
    sender_id: string;

    /**
     * Id of the Project this SupportTicket belongs to.
     */
    project_id: string;

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
    version_id: string;
    
}

/**
 * The compile-time config object downloaded from the Appdrop dashboard.
 */
export interface AppConfigBase {
    
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
     * Platform
     */
    platform: PlatformType|'';

    /**
     * Id of the Project.
    */
    project_id: string;


}

/**
 * Empty config
 */
export const DEFAULT_APP_CONFIG: AppConfig = {
    api_key: '',
    app_name: '',
    app_id: '',
    build_id: '',
    project_id: '',
    platform: '',
    template_version_id: '',
    version_id: ''
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
    data:
    AuthenticateUserParams|
    ConfirmOrderParams|
    CreateCardParams|
    CreateChargeParams|
    CreateEntityParams|
    CreateOrderParams|
    CreateProjectParams|
    CreateRefundParams|
    CreateSubscriptionParams|
    CreateSupportTicketParams|
    CreateUserParams|
    InitAppParams|
    RequestUserPasswordResetParams|
    RetrieveUserSecurityQuestionParams|
    SyncPrintfulProductsParams|
    UpdateOrderParams|
    UpdateSubscriptionParams|
    UpdateEntityParams|
    UpdateUserParams;
    
}

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
    response_body: APIResponseBodyType;

    /**
     * The HTTP status code.
     */
    status_code: 200|ErrorStatusCode;

}

/**
 * The response object sent back to the client.
 */
export type APIResponseBodyType =
Card |
Charge |
Order |
Entity |
InitAppResponseBody |
Product |
Refund |
Subscription |
User |
{
    products: Product[]
}|
{
    error: APIRequestError
};

/**
 * An object with information about why an API Call failed.
 */
export interface APIRequestError {

    /**
     * Type of error.
     */
    error_type: ErrorType;

    /**
     * A detailed message describing the error.
     */
    message: string;

    /**
     * The HTTP status codes for the Error
     */
    status_code: ErrorStatusCode;

}

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
 * Type of error.
 */
export type ErrorType = 
'app-config-error'|
'app-id-error'|
'api-key-invalid'|
'api-key-missing'|
'api-key-revoked'|
'incorrect-auth-credentials'|
'internal-server-error'|
'invalid-data-property'|
'invalid-endpoint'|
'rate-limit-surpassed'|
'unknown-error'|
'user-id-invalid';

/**
 * Error response map
 */
export const ERROR_RESPONSES: {
    [key in ErrorType]: APIRequestError;
} = {
    "app-config-error": {
        error_type: 'app-config-error',
        message: 'The request did not include a valid app config object',
        status_code: 401
    },
    "app-id-error": {
        error_type: 'app-id-error',
        message: 'The app id included in this request is not associated with your API key',
        status_code: 401
    },
    "api-key-invalid": {
        error_type: 'api-key-invalid',
        message: 'The included API key is not associated with an active Appdrop account',
        status_code: 403
    },
    "api-key-missing": {
        error_type: 'api-key-missing',
        message: 'The request did not include an API key',
        status_code: 401
    },
    "api-key-revoked": {
        error_type: 'api-key-revoked',
        message: 'The included API key has been revoked',
        status_code: 403
    },
    "incorrect-auth-credentials": {
        error_type: 'incorrect-auth-credentials',
        message: 'The credentials provided are invalid.',
        status_code: 400
    },
    "internal-server-error": {
        error_type: 'internal-server-error',
        message: 'Our server encountered a run-time error when processing your request',
        status_code: 500
    },
    "invalid-data-property": {
        error_type: 'invalid-data-property',
        message: 'Your data property was undefined or formatted incorrectly. Please refer to our docs to correct this issue.',
        status_code: 400
    },
    "invalid-endpoint": {
        error_type: 'invalid-endpoint',
        message: 'Your endpoint was not formed properly.',
        status_code: 400
    },
    "rate-limit-surpassed": {
        error_type: 'rate-limit-surpassed',
        message: 'You have reached the rate limit for the API',
        status_code: 429
    },
    "unknown-error": {
        error_type: 'unknown-error',
        message: 'Our server encountered an unknown error when processing your request',
        status_code: 400
    },
    "user-id-invalid": {
        error_type: 'user-id-invalid',
        message: 'There is no user in your project with this id.',
        status_code: 400
    }
};

/**
 * API response and logging for success cases.
 */
export async function handleSuccess(
    admin: any,
    db: any,
    endpoint: APIRequestEndpoint,
    method: APIRequestMethod,
    response_body: APIResponseBodyType,
    req: any,
    res: any
): Promise<void> {
    try {
        res.header('Content-Type','application/json');
        res.status(200).send(JSON.stringify(response_body));
        const api_request_id = randString();
        const ip_address_obj = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
        const ip_address = typeof ip_address_obj === 'string' ? ip_address_obj : ip_address_obj[0];
        const request_body = (
            typeof req.body === 'string' ?
                JSON.parse(req.body) : req.body
        ) as unknown as APIRequestBody;
        const cleansed_request_body: APIRequestBody = {} as unknown as APIRequestBody;
        Object.assign(cleansed_request_body, request_body);
        //@ts-ignore
        if (validString(cleansed_request_body['password'], true)) {
            //@ts-ignore
            cleansed_request_body['password'] = '*******';
        }
        //@ts-ignore
        if (validString(cleansed_request_body['account_number'], true)) {
            //@ts-ignore
            cleansed_request_body['account_number'] = '*******';
        }
        //@ts-ignore
        if (validString(cleansed_request_body['routing_number'], true)) {
            //@ts-ignore
            cleansed_request_body['routing_number'] = '*******';
        }
        //@ts-ignore
        if (validString(cleansed_request_body['cvc'], true)) {
            //@ts-ignore
            cleansed_request_body['cvc'] = '*******';
        }
        //@ts-ignore
        if (validString(cleansed_request_body['number'], true)) {
            //@ts-ignore
            cleansed_request_body['number'] = '*******';
        }
            //@ts-ignore
        if (validString(cleansed_request_body['security_answer'], true)) {
            //@ts-ignore
            cleansed_request_body['security_answer'] = '*******';
        }
        const api_request: APIRequest = {
            created_at: admin.firestore.Timestamp.fromDate(new Date()),
            livemode: true,
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
        console.log(`${method} ${endpoint} success`);
        return;
    }
    catch (error) {
        console.error('handleSuccessError');
        return;
    }
}

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
        console.error('matchOrganization error', error);
        return null;
    }
}

/**
 * API response and logging for error cases.
 */
export async function handleError(
    admin: any,
    db: any,
    endpoint: APIRequestEndpoint,
    error: ErrorType,
    method: APIRequestMethod,
    req: any,
    res: any
): Promise<void> {
    try {
        console.error(`${method} ${endpoint} error`, error);
        const error_type = (!!error && typeof error === 'string') ?
            error as ErrorType : 'unknown-error';
        const error_response = ERROR_RESPONSES[error_type] ?
            ERROR_RESPONSES[error_type] :
            ERROR_RESPONSES['unknown-error'];
        const error_response_body = {
            error: error_response
        };
        res.header("Content-Type", 'application/json');
        res.status(error_response.status_code).send(JSON.stringify(error_response_body));
        if (error !== 'app-config-error') {
            const request_body = (
                typeof req.body === 'string' ?
                    JSON.parse(req.body) : req.body
            ) as unknown as APIRequestBody;
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
                request_body: request_body,
                response_body: error_response_body,
                status_code: error_response.status_code,
            };
            await db.collection('api_requests').doc(api_request_id).set(api_request);
            return;
        }
    }
    catch (error) {
        console.error('handleError error', error);
        return;
    }
}

export function getDecodedAuthHeader(req: any) {
    if (validString(req.header('Authorization'), true)) {
        if ((req.header('Authorization') as string).startsWith('Basic ')) {
            return atob((req.header('Authorization') as string).split('Basic ')[1]);
        }
    }
    return '';
}

/**
 * 
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

export const APIRequestBase = 'https://api.appdrop.com';

/**
 * Identifies which endpoint this request targeted.
 */
export type APIRequestEndpoint =
'v1/customers/:stripeCustomerId/bankAccounts/:stripeCustomerType' |
'v1/customers/:stripeCustomerId/cards/:stripeCustomerType' |
'v1/customers/:stripeCustomerId/charges/:stripeCustomerType' |
'v1/customers/:stripeCustomerId/orders/:orderId/refunds' |
'v1/customers/:stripeCustomerId/subscriptions/:stripeCustomerType' |
'v1/customers/:stripeCustomerId/subscriptions/:subscriptionId/:stripeCustomerType'|
'v1/customers/:stripeCustomerId/verifyBankAccount/:stripeCustomerType' |
'v1/entities/:entityId' |
'v1/initAppState/ecommerce' |
'v1/initAppState/cloud' |
'v1/projects' |
'v1/projects/:projectId' |
'v1/projects/:projectId/apps' |
'v1/projects/:projectId/apps/:appId' |
'v1/projects/:projectId/apps/:appId/config' |
'v1/projects/:projectId/retrieveUserSecurityQuestion' |
'v1/projects/:projectId/syncPrintfulProducts' |
'v1/projects/:projectId/tickets' |
'v1/projects/:projectId/users' |
'v1/projects/:projectId/users/:userId' |
'v1/projects/:projectId/users/:userId/requestUserPasswordReset' |
'v1/projects/:projectId/users/:userId/authenticateUser' |
'v1/projects/:projectId/users/:userId/orders' |
'v1/projects/:projectId/users/:userId/orders/:orderId' |
'v1/projects/:projectId/users/:userId/orders/:orderId/cancel' |
'v1/projects/:projectId/users/:userId/orders/:orderId/confirm' |
'v1/projectTemplates' |
'v1/projectTemplates/:projectTemplateId';

export type StripeCustomerType = 'entities'|'users';

/**
 * Identifies the HTTP method this request used.
 */
export type APIRequestMethod = 'DELETE' |
'GET'|
'PATCH'|
'POST' |
'PUT';

/**
 * Request Data for for App Initialization
 */
export interface InitAppParams {
    
    /**
     * Id of the ProjectUser initializing the app.
     */
    project_user_id: string;

}

/**
 * Server response body for App Initialization
 */
export interface InitAppResponseBody {

    /**
     * The authenticated or guest user for this app session.
     */
    project_user: ProjectUser;

}

/**
 * Request Data for for Cloud App Initialization
 */
export interface InitCloudAppParams extends InitAppParams  {

    /**
     * Type of entity
     */
    entity_type: EntityType;

}

export interface InitEnterpriseCloudAppResponseBody extends InitCloudAppResponseBody {}

export interface InitOrganizationCloudAppResponseBody extends InitCloudAppResponseBody {

    /**
     * Map of all the Appdrop project users for projects owned by the Organization.
     * 
     * Key is the id.
     */
    project_users: {

        [key: string]: ProjectTemplate;

    };
    
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
     * Map of all the minted team members for this Entity. Key is the id.
     * 
     * @Important These Project Users belong to the Appdrop Cloud project
     */
    team_members: {
        
        [key: string]: ProjectUser;
    
    };

}


/**
 * E-Commerce App supporting a store of products
 */
export interface ECommerceProject extends CreateECommerceProjectParams, Project {}

/**
 * Params to create an ECommerce Project.
 */
export interface CreateECommerceProjectParams extends CreateProjectParams {
    
    /**
     * Method of Fulfillment
     */
    fulfillment_method: FulfillmentMethod;
    
    /**
     * Printful API Key hooked to store.
     */
    printful_api_key: string;
    
}

/**
 * Method of Fulfillment
 */
export type FulfillmentMethod = 'printful'|'manual';

/**
 * Params to update an ECommerce Project
 */
export interface UpdateECommerceProjectParams extends UpdateProjectParams {
    
    /**
     * Printful API Key
     */
    printful_api_key?: string;

}



/**
 * End-user for an E-Commerce App.
 */
export interface ECommerceProjectUser extends CreateECommerceProjectUserParams, ProjectUser {}

export interface CreateECommerceProjectUserParams extends CreateProjectUserParams {

    /**
     * Ids of the user's favorited products.
     */
    favorite_product_ids: string[];
    
    /**
     * User's Financial details.
     */
    financial_details: FinancialDetails;
    
    /**
     * Ids of the user's orders.
     */
    order_ids: string[];

}

export interface UpdateECommerceProjectUserParams extends UpdateProjectUserParams {

    /**
     * Ids of Favorite Products to append to the `favorite_product_ids` array
     */
    append_favorite_product_ids?: string[];
    
    /**
     * Ids of Orders to append to the `order_ids` array
     */
    append_order_ids?: string[];

    /**
     * Ids of the user's favorited products.
     */
    favorite_product_ids?: string[];
    
    /**
     * User's Financial details.
     */
    financial_details?: UpdateFinancialDetailsParams;
    
    /**
     * Ids of the user's orders.
     */
    order_ids?: string[];

    /**
     * Ids of Favorite Products to remove from the `favorite_product_ids` array
     */
    remove_favorite_product_ids?: string[];
    
    /**
     * Ids of Orders to remove from the `order_ids` array
     */
    remove_order_ids?: string[];

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
    created_at: {
        _nanoseconds: 0,
        _seconds: 0
    },
    email: '',
    favorite_product_ids: [],
    financial_details: {
        card: null
    },
    id: '',
    livemode: true,
    metadata: {},
    name: '',
    object: 'user',
    order_ids: [],
    password: '',
    password_hash: '',
    password_salt: '',
    phone: '',
    project_id: '',
    security_question: '',
    security_answer: '',
    security_answer_salt: '',
    security_answer_hash: '',
};

/**
 * Request Data for for ECommerce App Initialization
 */
export interface InitEcommerceAppParams extends InitAppParams  {}

/**
 * Server response body for ECommerce App Initialization
 */
export interface InitEcommerceAppResponseBody extends InitAppResponseBody {
    
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
     * Minted project user.
     */
    project_user: ECommerceProjectUser;

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
 * Maps month index to its name 
 */
export const monthMap = (n: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11, long: boolean) => {
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
 * Returns true if the `s` param is a valid string
 */
export const validString = (s: string|null|undefined, requires_letters: boolean) => {
    return (
        s !== null &&
        s !== undefined &&
        typeof s === 'string' &&
        (!requires_letters || s.length > 0)
    );
};