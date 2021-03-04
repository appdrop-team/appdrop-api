import { CountryCode, Identifiable, Timestamped } from '../base';

/**
 * Financial details for Entities and Project Users.
 */
export interface FinancialDetails extends CreateFinancialDetailsParams {}

/**
 * Params to create financial details.
 */
export interface CreateFinancialDetailsParams extends AttachCustomerParams, UpdateFinancialDetailsParams {

    /**
     * The entity's credit card on file.
     */
    card: Card|null;

    /**
     * Three-letter ISO 4217 code in all lowercase
     */
    currency: CurrencyCode;

}

/**
 * Params for Stripe Calls attached to customers.
 */
export interface AttachCustomerParams {
    
    /**
     * The customer id in Stripe's billing system. Enables billing across 
     * different Appdrop projects. Syntax is: `${project_id}_${user_id}`
     */
    stripe_customer_id: string;

}

/**
 * Params to update a nested field in financial details.
 * 
 * Note that `stripe_customer_id` is missing as this value does not
 * change once set.
 */
export interface UpdateFinancialDetailsParams {
    
    /**
     * The entity's credit card on file.
     */
    card?: Card|null;

    /**
     * Three-letter ISO 4217 code in all lowercase
     */
    currency?: CurrencyCode;
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
     * The entity's ACH Checking Account on File.
     */
    bank_account: BankAccount|null;

    /**
     * Invoice renewal interval.
     */
    billing_interval: BillingInterval;

    /**
     * Invoice payment medthod.
     */
    billing_method: BillingMethod;

    /**
     * Timestamp of most recent cancellation.
     */
    canceled_at: Timestamped;

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
     * Timestamp of conversion to most recent plan.
     */
    converted_at: Timestamped;

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
 * 
 * Note that `stripe_customer_id` is missing as this value does not
 * change once set.
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
     * The entity's ACH Checking Account on File.
     */
    bank_account?: BankAccount|null;

    /**
     * Invoice renewal interval.
     */
    billing_interval?: BillingInterval;

    /**
     * Invoice payment medthod.
     */
    billing_method?: BillingMethod;

    /**
     * Timestamp of most recent cancellation.
     */
    canceled_at?: Timestamped;

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
     * Timestamp of conversion to most recent plan.
     */
    converted_at?: Timestamped;

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
 * card incur an additional 5% processing fee. There is no processing fee for ACH.
 */
export type BillingMethod = 'bank_account'|'card';

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
        data: (BankAccount|Card)[];
  
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

/**
 * Params to create a Bank Account Token
 */
export interface CreateBankAccountTokenParams {

    /**
     * Bank Account data
     */
    bank_account: CreateBankAccountParams;

}

/**
 * Params to generate a Stripe Bank Account
 */
export interface CreateBankAccountParams {

    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name: string;

    /**
     * Account number for the bank account.
     */
    account_number: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type: BankAccountHolderType;

    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: CountryCode;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
     */
    currency: CurrencyCode;

    /**
     * The ID of the customer that the bank account is associated with.
     */
    customer: string;
    
    /**
     * The routing transit number for the bank account.
     */
    routing_number: string;

}

/**
 * Type of Bank Account. Required.
 */
export type BankAccountHolderType = 'company'|'individual';

/**
 * Bank Account Source Token returned from Stripe
 */
export interface CreateBankAccountTokenResponseBody extends CreateTokenResponseBody {
    
    /**
     * Bank Account object
     */
    bank_account: BankAccount;
    
    /**
     * Token type
     */
    type: 'bank_account';

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
     * @Important This ID is passed with as the Customer Source!
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
    type: 'card'|'bank_account';

    /**
     * Flag denoting whether the token's been used before.
     */
    used: boolean;

}

/**
 * Bank Account. Requires microdeposit verification before charges can be
 * processed.
 */
export interface BankAccount extends CreateBankAccountParams {

    /**
     * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
     */
    bank_name: string;
    
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string;

    /**
     * Unique identifier for the object.
     */
    id: string;
    
    /**
     * The last four digits of the bank account number.
     */
    last4: string;
    
    /**
     * Object name.
     */
    object: 'bank_account';
    
    /**
     * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`.
     * 
     * A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists,
     * its status will be `validated`. Note that there often isn't enough information to know (e.g., for smaller credit unions), and the validation
     * is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification
     * failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account
     * fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.
     *
     * For external accounts, possible values are `new` and `errored`. Validations aren't run against external accounts because they're
     * only used for payouts. This means the other statuses don't apply. If a transfer fails, the status is set to `errored`
     * and transfers are stopped until account details are updated.
     *
     */
    status: BankAccountStatus|null;

}

/**
 * Status of Bank Account.
 */
export type BankAccountStatus = 'errored'|'new'|'validated'|'verified'|'verification_failed';

/**
 * Params to verify a bank account source.
 */
export interface CreateBankAccountVerificationParams extends AttachCustomerParams {
    
    /**
     * Bank Account source token ID.
     */
    token_id: string;
    
    /**
     * Two microdeposits in cents
     */
    amounts: number[];
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
    exp_month: number;
    
    /**
     * Expiration Year
     */
    exp_year: number;
    
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
 * Params to create a Bank Account or Card Source and attach it to a Customer.
 */
export interface CreateCustomerSourceParams extends AttachCustomerParams {

    /**
     * Id of the Bank Account Token object or Card Source Token object.
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
     * ACH Debit use to process charge.
     */
    ach_debit?: BankAccount;

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
     * Reason for the refund.
     */
    reason: RefundReason;
    
}

/**
 * Reason for the refund.
 */
export type RefundReason = 'duplicate' | 'fraudulent' | 'requested_by_customer' | 'expired_uncaptured_charge';