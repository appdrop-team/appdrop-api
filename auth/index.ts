import { Address, Identifiable } from '../base';

/**
 * Generic User object.
 */
export interface User extends CreateUserParams, Identifiable {

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'user';

    /**
     * The user's password encrypted via MD5 hash.
     */
    password_hash: string;

    /**
     * Security answer for password resets encrypted via MD5 hash or an empty string.
     */
    security_answer_hash: string;

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
     * The user's phone number.
     */
    phone: string;

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
     * The user's phone number.
     */
    phone?: string;

    /**
     * Security question for password resets or an empty string.
     */
    security_question?: string;
    
    /**
     * Security answer for password resets. Encrypted before storage.
     */
    security_answer?: string;

}

/**
 * Params to exchange an email address for a User object which includes 
 * the `security_question` and `security_answer_hash` property to display 
 * to the resetting user. If either of these properties is an 
 * empty string, then the user skipped this security section step and must contact support 
 * who can set a temporary answer to the security question for the user.
 */
export interface RetrieveSecurityQuestionParams {

    /**
     * The user's email address.
     */
    email: string;

}

/**
 * Params to exchange a security answer for authentication
 */
export interface RequestPasswordResetParams {

    /**
     * Security answer for password resets or an empty string.
     */
    security_answer: string;

}