import { Address, CurrencyCode, Identifiable } from './base';
import * as FirebaseFirestore from '@google-cloud/firestore';


/**
 * An Appdrop Enterprise account. Pays for Organizations to access Appdrop.
 */
export interface Enterprise extends Identifiable {
    
    /**
     * Financial details for this Appdrop Enterprise Account
     */
    financial_details: EnterpriseFinancialDetails;
    
    /**
     * The name of this Enterprise. 
     
     * Examples: DC Public School System or Georgetown University.
     */
    name: string;

    /**
     * Object name.
     */
    object: 'enterprise';

    /**
     * This array includes the id of each Organization that this Enterprise owns.
     */
    organization_ids: string[];

    /**
     * The id of the EnterpriseMember that owns the Enterprise.
     */
    owner_id: string;

    /**
     * This object contains each EnterpriseMember with read and write access
     * to the Enterprise.
     */
    team_members: {

        /**
         * key is the team member's id.
         */
        [key: string]: EnterpriseMember;

    };


}

/**
 * Financial details for Appdrop Enterprises and Organizations
 */
export interface FinancialDetails {

    /**
     * The entity's ACH Checking Account on File.
     */
    bank_account: BankAccount;

    /**
     * The entity's credit card on file.
     */
    card: Card;

    /**
     * Three-letter ISO 4217 code in all lowercase
     */
    currency: CurrencyCode;

    /**
     * Invoice renewal interval.
     */
    billing_interval: BillingInterval;

    /**
     * Invoice payment medthod.
     */
    billing_method: BillingMethod;

    /**
     * The entity's current Appdrop Plan
     */
    billing_plan: BillingPlan;

    /**
     * Billing Status of entity
     */
    billing_status: BillingStatus;

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
     * Unix timestamp (seconds) of the date that the next invoice will be
     * charged to this account for its Appdrop plan.
     * 
     * 0 indicates free trial
     * -1 indicates student or enterprise plan (i.e. not billed)
     */
    next_invoice: number;

    /**
     * The id of the entity's Stripe subscription object.
     */
    subscription_id: string;

}

/**
 * An Organization's bank account for invoices and payouts.
 * 
 * Note: The data stored on Appdrop's server is designed to help entity admins
 * identify the bank account after creation. The full information is not needed because
 * the data is turned into a Stripe Source object once verified.
 */
interface BankAccount {

    /**
     * The first character of each individual word is left as is. All other characters
     * are replaced with '*'
     * 
     * Example: K * * * * M * * *
     */
    account_holder_name_anonymized: string;

    /**
     * The first digit and the last 2 digits of the account number for the 
     * bank account are left as is. All other digits are replaced with '*'
     * 
     * Example: 9********21
     */
    account_number_anonymized: string;
    
    /**
     * The last 2 digits of the routing number, sort code, or other country-appropriate institution 
     * number for the bank account are left as is. All other digits are replaced with '*'
     * 
     * Example: **********21
     */
    routing_number_anonymized: string;

}

/**
 * The entity's credit card on file.
 * 
 * Note: The data stored on Appdrop's server is designed to help entity admins
 * identify the credit card after creation. The full information is not needed because
 * the data is turned into a Stripe Source object once verified.
 */
interface Card {
    
    /**
     * Card's brand.
     */
    brand: CardBrand;

    /**
     * Last 4 Digits of Card.
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
 * Invoice renewal interval.
 */
export type BillingInterval = 'monthly'|'annually';

/**
 * Invoice payment method.
 * 
 * Note: Enterprises and Organizations paying for Appdrop plans using a credit
 * card incur an additional 5% processing fee. There is no processing fee for ACH.
 */
export type BillingMethod = 'bank_account'|'card';

/**
 * The List of Appdrop Plans available.
 */
export type BillingPlan = 
'enterprise' |
'enterprise_organization' |
'starter' |
'pro' |
'business';

/**
 * Billing Status.
 */
export type BillingStatus = 'canceled' |
'delinquent' |
'good_standing' |
'trialing';

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
     * Unix timestamp (seconds) of the date that the Coupon expires.
     */
    expires: number;

}

/**
 * Financial details for Appdrop Enterprise Accounts
 */
export interface EnterpriseFinancialDetails extends FinancialDetails {

    /**
     * Enterprise Accounts are billed the Enterprise plan. 
     * Base rate is $0.10 per student per month.
     */
    billing_plan: 'enterprise';

    /**
     * The max number of organizations covered by this account per year. 
     * For example: students at a university or founders in an accelerator.
     */
    num_seats: number;

}

/**
 * Financial details for Appdrop Organization Accounts
 */
export interface OrganizationFinancialDetails extends FinancialDetails {

    /**
     * Net Sales that the Organization has accumulated during the current 
     * payout period scheduled to be remitted by Appdrop at the end of the 
     * period. The unit is the smallest unit of the Organization's currency.
     * 
     * USD Example: 10050 indicates $100.50
     */
    payout_balance: number;

    /**
     * Id of the Organization's Appdrop Plan
     */
    plan_id:
    'enterprise_organization' |
    'starter' |
    'pro' |
    'business';

}


/**
 * Generic User object.
 */
export interface User extends CreateUserParams, Identifiable {

    /**
     * The user's address.
     */
    address: Address;

    /**
     * Three-letter ISO 4217 code in all lowercase
     */
    currency: CurrencyCode;

    /**
     * The user's email address.
     */
    email: string;

    /**
     * Marks the user as live or test mode.
     * 
     * Defaults to true and is not changeable after being set.
     */
    livemode: boolean;

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
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'user';

    /**
     * The user's password hash.
     */
    password_hash: string;

    /**
     * The user's phone number.
     */
    phone: string;

}
/**
 * An individual with access rights to an Appdrop entity.
 */
export interface TeamMember extends Identifiable, Authenticated {

    /**
     * Team Member roles.
     */
    role:
    'owner' |
    'admin' |
    'developer';
}

export interface Authenticated {
    

    auth_methods: AuthMethod[];


    email: string;
    

    password_hash: string;
    

    phone_number: string;

}

export type AuthMethod = 'email'|'phone'|'facebook'|'google'|'apple';

/**
 * An individual with access rights to an Enterprise.
 */
export interface EnterpriseMember extends TeamMember {}

/**
 * An individual with access rights to an Organization.
 */
export interface OrganizationMember {}


/**
 * Params to create a user.
 * 
 */
export interface CreateUserParams extends UpdateUserParams {

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
     * Marks the user as live or test mode.
     * 
     * Defaults to true and is not changeable after being set.
     */
    livemode: boolean;

    /**
     * The user's password hash.
     */
    password_hash: string;

}

/**
 * An entity which owns Appdrop projects
 */
export interface Organization extends Identifiable {

    /**
     * This array includes the id of each API Key that this Organization owns.
     */
    api_key_ids: string[];

    /**
     * Organization's ACH Details for Payouts and, optionally, Invoicing.
     */
    bank_account_details: FinancialDetails;

    /**
     * Billing Interval.
     */
    billing_interval:
    'monthly' |
    'yearly';

    /**
     * Billing Status.
     */
    billing_status:
    'Canceled' |
    'Delinquent' |
    'GoodStanding' |
    'NA';

    /**
     * Last 4 Digits of Card.
     */
    card_last_4_digits: string;

    /**
     * Three-letter ISO 4217 code in all lowercase
     */
    currency: CurrencyCode;

    /**
     * The name of this Organization. 
     * 
     * Example: Devante Jones Personal Account (individual) or Unicorn Inc. (business)
     */
    name: string;

    /**
     * Unix timestamp (seconds) of the date that the next invoice will be
     * charged to this account for its Appdrop plan.
     * 
     * 0 indicates free trial
     * -1 indicates student plan
     */
    next_invoice: number;

    /**
     * Object name.
     */
    object: 'organization';

    /**
     * Sales that the organization accumulated for the current month scheduled to
     * be paid out by Appdrop at the end of the current month. The unit is USD cents.
     * Example: 10050 indicates $100.50
     */
    payout_balance: number;

    /**
     * Id of the Organization's Appdrop Plan
     */
    plan_id:
    'student' |
    'starter' |
    'pro' |
    'business';

    /**
     * This array includes the id of each Project that this Organization owns.
     */
    project_ids: string[];

    /**
     * This object contains each OrganizationUser with read or write access
     * to the Organization.
     */
    users: {

        /**
         * key is the user's id.
         */
        [key: string]: OrganizationMember;

    };

}



/**
 * The object to be passed when updating a user.
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
     * Three-letter ISO 4217 code in all lowercase
     */
    currency?: CurrencyCode;

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
     * The user's password hash.
     */
    password_hash?: string;

    /**
     * The user's phone number.
     */
    phone?: string;

}


export interface ProjectUser {

}




export interface BlogPost {
	author_image_url: string;
	author_name: string;
	content_blocks: ContentBlock[];
	footer_video_url: string;
	footer_video_overlay_image_url: string;
	header_image_url: string;
	header_style: HeaderStyle;
	id: string;
	read_time: string;
	release_date: {
		day: number;
		month: number;
		year: number;
	};
	title: string;
	short_description: string;
}
export interface ContentBlock {
	block_type: 'Paragraph' | 'Media';
	media_url: string;
	paragraph_html: string;
}
export type HeaderStyle = 'color' | 'image';


/**
 * Params to log an analytics event.
 */
export interface CreateEventParams {

    /**
     * Id of the button that triggered this event.
     * 
     * Example: `navbar_pricing_button` or `footer_pricing_button`
     */
    button_id?: string;

    /**
     * Time that the object was created. Optional property to increase analytics 
     * accuracy. Measured in milleseconds since the Unix epoch.
     * 
     * Appdrop uses a server timestamp if this field is left blank.
     */
    createdMS?: number;

    /**
     * An unique string identifying a device.
     */
    device_id?: string;

    /**
     * Marks the event as live or test mode.
     * 
     * Defaults to true and is not changeable after being set.
     */
    livemode?: boolean;

    /**
     * The name of the event. Either a pre-defined Appdrop event or custom event.
     */
    name:
    'begin_session' |
    'begin_purchase' |
    'cancel_purchase' |
    'complete_purchase' |
    'open_screen' |
    'pause_session' |
    'quit_app' |
    'resume_session'; // Fix this. More events.

    /**
     * Param object for logging additional information with the event.
     */
    params?: {

        [key: string]: 
        string|
        number|
        boolean;

    };

    /**
     * Id of the screen where this event occurred. Either a pre-defined 
     * Appdrop screen or custom screen.
     */
    screen_id?: 
    'checkout' |
    'game' |
    'home' |
    'not_provided' |
    'pause' |
    'product' |
    'product_list' |
    'settings' |
    'tutorial' |
    'unknown';

    /**
     * Id of the user this event is assigned to.
     */
    user_id?: string;

} // Fix this. More specific interfaces that extend CreateEventParams and fill out the params field.

/**
 * An Appdrop predefined analytics event or custom analytics event performed by 
 * an app's end-user
 */
export interface Event extends CreateEventParams, Identifiable {

    /**
     * Id of the button that triggered this event.
     * 
     * Example: `navbar_pricing_button` or `footer_pricing_button`
     */
    button_id: string;

    /**
     * An unique string identifying a device.
     */
    device_id: string;

    /**
     * Id of the Event.
     */
    id: string;

    /**
     * Marks the event as live or test mode.
     * 
     * Defaults to true and is not changeable after being set.
     */
    livemode: boolean;

    /**
     * The name of the event. Either a pre-defined Appdrop event or custom event.
     */
    name:
    'begin_session' |
    'begin_purchase' |
    'cancel_purchase' |
    'complete_purchase' |
    'open_screen' |
    'pause_session' |
    'quit_app' |
    'resume_session';

    /** 
     * Object name 
     */
    object: 'event';

    /**
     * Param object for logging additional information with the event.
     */
    params: {

        [key: string]: 
        string|
        number|
        boolean;

    };

    /**
     * Id of the screen where this event occurred.
     */
    screen_id: 
    'checkout' |
    'game' |
    'home' |
    'not_provided' |
    'pause' |
    'product' |
    'product_list' |
    'settings' |
    'tutorial' |
    'unknown';

    /**
     * Id of the user this event is assigned to.
     */
    user_id: string;

}


/**
 * An API Key used to authenticate network requests.
 * 
 * Only the md5 hash is stored (as the id property) on the server.
 */
export interface API_Key extends Identifiable {

    /**
     * This array includes the id of each App that this API key is authenticated for.
     */
    app_ids: string[];

    /**
     * The date that this API Key shall expire.
     */
    expiration: FirebaseFirestore.Timestamp;

    /**
     * Raw characters from the original API key to help identify this key.
     */
    first_8_characters: string;

    /**
     * A convenience property used for rate limiting on the Starter Plan
     * that tracks the number of API requests for this key.
     */
    num_invocations_today: number;

    /**
     * Object name.
     */
    object: 'api_key';

    /**
     * Id of the organization that owns this API Key.
     */
    organization_id: string;
    
    /**
     * Id of the plan for this organization.
     */
    organization_plan_id: 
    'starter'|
    'growth';

    /**
     * A flag tracking whether this API key has been revoked.
     * 
     * NOTE – when a key is revoked and replaced, the number of invocations is
     * transferred to the new key.
     */
    revoked: boolean;

}

/**
 * A timestamped object with a record of each API Request and Response
 * created by valid keys. Used for debugging and tracking rate limits.
 */
export interface API_Request extends Identifiable {

    /**
     * md5 hash of the original API key.
     */
    api_key_hash: string;

   /**
     * App Config passed with the API Request
     */
    app_config: AppConfig;

    /**
     * Identifies which endpoint this request targeted.
     */
    endpoint:
    'v1/events' |
    'v1/events/:id' |
    'v1/users' |
    'v1/users/:id';

    /**
     * The IP Address where this API call originated.
     */
    ip_address: string;

    /**
     * Identifies the HTTP method this request used.
     */
    method:
    'POST' |
    'PATCH';

    /**
     * Object name.
     */
    object: 'api_request';

    /**
     * The req.body passed with this request parsed into an object.
     */
    request_body: ClientWriteRequest;

    /**
     * The response object sent back to the client.
     */
    response_body:
    Event |
    User |
    {
        error: API_Request_Error
    }|
    null;

    /**
     * The HTTP status code.
     */
    status_code:
    200 |
    400 |
    401 |
    403 |
    429 |
    500 |
    503;

} // Fix this. Add user-agent middleware.

/**
 * An object with information about why an API Call failed.
 */
export interface API_Request_Error {

    /**
     * A short code summarizing the error.
     */
    error_code: 
    'app-config-error'|
    'app-id-error'|
    'api-key-expired'|
    'api-key-invalid'|
    'api-key-missing'|
    'api-key-revoked'|
    'internal-server-error'|
    'invalid-data-property'|
    'rate-limit-surpassed'|
    'unknown-error'|
    'user-id-invalid';

    /**
     * The HTTP status code.
     */
    status_code:
    400 |
    401 |
    403 |
    429 |
    500 |
    503;

    /**
     * A detailed message describing the error.
     */
    message: string;

}

/**
 * Native app or web app contained in a project
 */
export interface App extends Identifiable {

    /**
     * Package name for an android app
     * 
     * Example: com.example
     */
    android_package_name?: string;

    /**
     * Fully formed domain name, used for web apps
     * 
     * Example: dashboard.example.com
     */
    domain_name?: string;

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
    ios_app_id?: number;
    
    /**
     * The name of this App. Example: MyCoolApp iOS or MyCoolApp Web
     */
    name: string;

    /**
     * Object name.
     */
    object: 'app';

    /**
     * The platform where this app is published.
     */
    platform:
    'android' |
    'androidTV' |
    'iOS' |
    'macOS' |
    'tvOS' |
    'wearOS' |
    'web' |
    'windows';

    /**
     * Id of the Project containing this App.
     */
    project_id: string;

    /**
     * Ids of the screens present in this App. Autopopulated with Appdrop
     * default screen names on init.
     */
    screen_ids: string[];

}

/**
 * Native Android App
 */
export interface AppAndroid extends App {
    
    /**
     * Package name for an android app
     * 
     * Example: com.example
     */
    android_package_name: string;

}

/**
 * The config object passed with each API Request. 
 * 
 * These sensitive credentials should be stored as a JSON file for mobile 
 * apps or server implementations and stored as environment variables for web apps.
 */
export interface AppConfig {

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
     * Id of the current build.
     */
    build_id: string;

    /**
     * Id of the Project.
    */
    project_id: string;

    /**
     * Id of the release channel that this app is set for. 
     * 
     * Examples: 'release' or 'alpha'
     */
    release_channel_id: string;

    /**
     * Id of the App version. 
     * 
     * We recommend using semantic versioning (semver), but this can be any string.
     */
    version_id: string;

}

/**
 * The config object passed with each API Request from an iOS app.
 */
export interface AppIOS extends App {
    
    /**
     * Bundle ID for an iOS app.
     * 
     * Example: com.example.app
     */
    ios_bundle_id: string | undefined;

    /**
     * App ID number autogenerated by Apple
     * 
     * Example: 154213891
     */
    ios_app_id: number | undefined;
    
}

/**
 * The config object passed with each API Request from a web app.
 */
export interface AppWeb extends App {
    
    /**
     * Fully formed domain name, used for web apps
     * 
     * Example: dashboard.example.com
     */
    domain_name: string;
    
}

/**
 * An API write request to an Appdrop endpoint
 */
export interface ClientWriteRequest {

    /**
     * App Config object. Should remain constant across all the 
     * users of a version/build.
     */
    app_config: AppConfig;

    /**
     * Request data. Should be vary by time, user, event type, etc.
     */
    data:
    CreateEventParams |
    CreateUserParams;

}

/**
 * A container for one or more apps that share a common dashboard and project
 * settings.
 */
export interface Project extends Identifiable {

    /**
     * This array includes the id of each App that this Project contains.
     */
    app_ids: string[];

    /**
     * The Project's category.
     */
    category:
    'business' |
    'education' |
    'finance' |
    'game' |
    'health' |
    'shopping' |
    'transportation';

    /**
     * The name of this Project. Example: My Cool App
     */
    name: string;

    /**
     * Object name.
     */
    object: 'project';

    /**
     * Id of the Organization containing this Project.
     */
    organization_id: string;

}

/**
 * An end-user registered to an Appdrop Project.
 */
export interface ProjectUser extends User {

    /**
     * Id of the Project this User belongs to.
     */
    project_id: string;

}