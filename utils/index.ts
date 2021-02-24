import * as Appdrop from '../src';

export const NUM_FREE_INVOCATIONS = 50000;
export interface ERROR_STATUS_CODE_KEYS {
    BAD_REQUEST: any;
    UNAUTHORIZED: any;
    FORBIDDEN: any;
    TOO_MANY_REQUESTS: any;
    INTERNAL_SERVER_ERROR: any;
    SERVICE_UNAVAILABLE: any;
}
export const ERROR_STATUS_CODES: {
    [key in keyof ERROR_STATUS_CODE_KEYS]:
    400 |
    401 |
    403 |
    429 |
    500 |
    503
} = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
});

export interface ERROR_RESPONSE_KEYS {
    APP_CONFIG_ERROR: any;
    APP_ID_ERROR: any;
    API_KEY_EXPIRED: any;
    API_KEY_INVALID: any;
    API_KEY_MISSING: any;
    API_KEY_REVOKED: any;
    INTERNAL_SERVER_ERROR: any;
    INVALID_DATA_PROPERTY: any;
    RATE_LIMIT_SURPASSED: any;
    UNKNOWN_ERROR: any;
    USER_ID_INVALID: any;
}
export const ERROR_RESPONSES: {
    // [key in keyof ERROR_RESPONSE_KEYS]: Appdrop.Projects.API_Request_Error
    [key in keyof ERROR_RESPONSE_KEYS]: Appdrop.Aggregate.API_Request_Error
} = Object.freeze({
    APP_CONFIG_ERROR: {
        created: null,
        error_code: 'app-config-error',
        message: 'The request did not include a valid app config object',
        status_code: ERROR_STATUS_CODES.UNAUTHORIZED,
    },
    APP_ID_ERROR: {
        created: null,
        error_code: 'app-id-error',
        message: 'The app id included in this request is not associated with your API key',
        status_code: ERROR_STATUS_CODES.UNAUTHORIZED,
    },
    API_KEY_EXPIRED: {
        created: null,
        error_code: 'api-key-expired',
        message: 'The included API key is expired',
        status_code: ERROR_STATUS_CODES.FORBIDDEN,
    },
    API_KEY_INVALID: {
        created: null,
        error_code: 'api-key-invalid',
        message: 'The included API key is not associated with an active Appdrop account',
        status_code: ERROR_STATUS_CODES.FORBIDDEN,
    },
    API_KEY_MISSING: {
        created: null,
        error_code: 'api-key-missing',
        message: 'The request did not include an API key',
        status_code: ERROR_STATUS_CODES.UNAUTHORIZED,
    },
    API_KEY_REVOKED: {
        created: null,
        error_code: 'api-key-revoked',
        message: 'The included API key has been revoked',
        status_code: ERROR_STATUS_CODES.FORBIDDEN,
    },
    INTERNAL_SERVER_ERROR: {
        created: null,
        error_code: 'internal-server-error',
        message: 'Our server encountered a run-time error when processing your request',
        status_code: ERROR_STATUS_CODES.INTERNAL_SERVER_ERROR,
    },
    INVALID_DATA_PROPERTY: {
        created: null,
        error_code: 'invalid-data-property',
        message: 'Your data property was undefined or formatted incorrectly. Please refer to our docs to correct this issue.',
        status_code: ERROR_STATUS_CODES.BAD_REQUEST,
    },
    RATE_LIMIT_SURPASSED: {
        created: null,
        error_code: 'rate-limit-surpassed',
        message: 'You have reached the daily rate limit for the Starter Plan. Activate billing at https://appdrop.com/pricing',
        status_code: ERROR_STATUS_CODES.TOO_MANY_REQUESTS,
    },
    UNKNOWN_ERROR: {
        created: null,
        error_code: 'unknown-error',
        message: 'Our server encountered an unknown error when processing your request',
        status_code: ERROR_STATUS_CODES.BAD_REQUEST,
    },
    USER_ID_INVALID: {
        created: null,
        error_code: 'user-id-invalid',
        message: 'There is no user in your project with this id.',
        status_code: ERROR_STATUS_CODES.BAD_REQUEST,
    },
});
export function RandString(l = -1) {
    let result = "";
    const alphanumeric_characters = "012345789abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    const r = l > 0 ? l : (Math.floor(Math.random() * 20) + 20);
    for (let i = 0; i < r; i++) {
        result += alphanumeric_characters.charAt(
            Math.floor(Math.random() * alphanumeric_characters.length)
        );
    }
    return result;
}
// export function ValidConfig(app_config: Appdrop.Projects.AppConfig) {
export function ValidConfig(app_config: Appdrop.Aggregate.AppConfig) {
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
export function ValidParams(
    params: 
    Appdrop.Aggregate.CreateEventParams|
    Appdrop.Aggregate.CreateUserParams|
    Appdrop.Aggregate.UpdateUserParams |
    // Appdrop.Events.CreateEventParams|
    // Appdrop.Auth.CreateUserParams|
    // Appdrop.Auth.UpdateUserParams |
    undefined |
    null,
    action:
    'Create' |
    'Update',
    object:
    'Event' |
    'User'
) {
    // Fix this. 
    // Current implementation is to spread all properties passed.
    // There exist bug vectors where a develoepr could
    // pass incorrect data types -> 
    // corrupt data -> and 
    // crash their Appdrop dashboard
    // const invalid_keys = Object.keys(update_user_params).filter(k => ['Fix this.'].includes(k));
    // for (const k of invalid_keys) {
    //     delete (update_user_params as any)[k];
    // }
    if (params !== undefined && params !== null) {
        if (action === 'Create') {
            if (object === 'Event') {
                // const create_event_params = params as Appdrop.Events.CreateEventParams;
                const create_event_params = params as Appdrop.Aggregate.CreateEventParams;
                const keys = Object.keys(create_event_params);
                return (
                    keys.includes('name') && 
                    typeof create_event_params['name'] === 'string'
                );
            }
            else if (object === 'User') {
                // const create_user_params = params as Appdrop.Auth.CreateUserParams;
                const create_user_params = params as Appdrop.Aggregate.CreateUserParams;
                const keys = Object.keys(create_user_params);
                return (
                    keys.includes('id') &&
                    typeof create_user_params['id'] === 'string'
                );
            }
        }
        else if (action === 'Update') {
            if (object === 'User') {
                return (
                    (params as any)['id'] === undefined &&
                    (params as any)['livemode'] === undefined
                );
            }
        }
    }
    return false;
}
export const month_map = (n: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11, long: boolean) => {
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