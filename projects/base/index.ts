import atob = require('atob');
import { AuthenticateUserParams, CreateUserParams, RequestUserPasswordResetParams, RetrieveUserSecurityQuestionParams, UpdateUserParams, User } from '../../auth';
import { BankAccount, Card, Charge, CreateBankAccountParams, CreateBankAccountVerificationParams, CreateCardParams, CreateChargeParams, CreateRefundParams, CreateSubscriptionParams, Subscription, UpdateSubscriptionParams } from '../../billing';
import { ConfirmOrderParams, CreateOrderParams, Order, UpdateOrderParams } from '../../orders';
import { CreateEntityParams, Entity, UpdateEntityParams } from '../../entities';
import { Identifiable } from '../../base';
import { Product } from '../../products';
import { RemoteAsset } from '../../assets';
import { randString, validString } from '../../utils';

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
    CreateBankAccountVerificationParams|
    CreateBankAccountParams|
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
export type APIResponseBodyType = BankAccount |
Card |
Charge |
Order |
Entity |
InitAppResponseBody|
Product |
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
) {
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
        const api_request: APIRequest = {
            created_at: admin.firestore.Timestamp.fromDate(new Date()),
            livemode: true,
            endpoint: endpoint,
            id: api_request_id,
            ip_address: ip_address,
            method: method,
            object: 'api_request',
            request_body: request_body,
            response_body: response_body,
            status_code: 200
        };
        await db.collection('api_requests').doc(api_request_id).set(api_request);
        console.log(`${method} ${endpoint} success`);
    }
    catch (error) {
        console.error('handleSuccessError');
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
) {
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
        }
    }
    catch (error) {
        console.error('handleError error', error);
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
'v1/customers/:customerId/bankAccounts' |
'v1/customers/:customerId/verifyBankAccount' |
'v1/customers/:customerId/cards' |
'v1/customers/:customerId/charges' |
'v1/customers/:customerId/orders/:orderId/refunds' |
'v1/customers/:customerId/subscriptions' |
'v1/customers/:customerId/subscriptions/:subscriptionId'|
'v1/entities/:entityId' |
'v1/entities' |
'v1/initAppState' |
'v1/projects' |
'v1/projects/:projectId' |
'v1/projects/:projectId/apps' |
'v1/projects/:projectId/apps/:appId' |
'v1/projects/:projectId/apps/:appId/config' |
'v1/projects/:projectId/retrieveUserSecurityQuestion' |
'v1/projects/:projectId/signInUser' |
'v1/projects/:projectId/signUpUser' |
'v1/projects/:projectId/syncPrintfulProducts' |
'v1/projects/:projectId/tickets' |
'v1/projects/:projectId/users' |
'v1/projects/:projectId/users/:userId' |
'v1/projects/:projectId/users/:userId/requestUserPasswordReset' |
'v1/projects/:projectId/users/:userId/orders' |
'v1/projects/:projectId/users/:userId/orders/:orderId' |
'v1/projects/:projectId/users/:userId/orders/:orderId/cancel' |
'v1/projects/:projectId/users/:userId/orders/:orderId/confirm' |
'v1/projectTemplates' |
'v1/projectTemplates/:projectTemplateId';

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