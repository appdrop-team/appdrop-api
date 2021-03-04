import * as Projects from '../projects';
import { ErrorType } from '../projects/base';

export const ERROR_RESPONSES: {
    [key in ErrorType]: Projects.Base.APIRequestError;
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
    },
};
export function RandString(l = -1) {
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
export const validString = (s: string|null|undefined, l: boolean) => {
    return (
        s !== null &&
        s !== undefined &&
        typeof s === 'string' &&
        (!l || s.length > 0)
    );
};