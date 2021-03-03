import { AuthenticateUserParams, CreateUserParams, RequestUserPasswordResetParams, RetrieveUserSecurityQuestionParams, UpdateUserParams, User } from '../../auth';
import { Identifiable } from '../../base';
import { RemoteAsset } from '../../assets';
import { CreateEntityParams, Entity, UpdateEntityParams } from '../../entities';
import { BankAccount, Card, CreateBankAccountParams, CreateCardParams, CreateSubscriptionParams, Subscription, UpdateSubscriptionParams } from '../../billing';

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
    CreateBankAccountParams|
    CreateCardParams|
    CreateEntityParams|
    CreateProjectParams|
    CreateSubscriptionParams|
    CreateSupportTicketParams|
    CreateUserParams|
    InitAppParams|
    RequestUserPasswordResetParams|
    RetrieveUserSecurityQuestionParams|
    UpdateSubscriptionParams|
    UpdateEntityParams|
    UpdateUserParams;
    
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
    response_body:
    BankAccount |
    Card |
    Entity |
    InitAppResponseBody|
    Subscription |
    User |
    {
        error: APIRequestError
    };

    /**
     * The HTTP status code.
     */
    status_code: 200|ErrorStatusCode;

}

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

}

/**
 * The HTTP status codes for Errors
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
export type ErrorType = 'app-config-error'|
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
'v1/bank-accounts' |
'v1/cards' |
'v1/entities/:entityId' |
'v1/entities' |
'v1/initAppState' |
'v1/orders/:orderId' |
'v1/orders'|
'v1/products/:productId' |
'v1/products' |
'v1/projects' |
'v1/projects/:projectId' |
'v1/projects/:projectId/apps' |
'v1/projects/:projectId/apps/:appId' |
'v1/projects/:projectId/apps/:appId/config' |
'v1/projects/:projectId/retrieveUserSecurityQuestion' |
'v1/projects/:projectId/signInUser' |
'v1/projects/:projectId/signUpUser' |
'v1/projects/:projectId/tickets' |
'v1/projects/:projectId/users' |
'v1/projects/:projectId/users/:userId' |
'v1/projects/:projectId/users/:userId/requestUserPasswordReset' |
'v1/projectTemplates' |
'v1/projectTemplates/:projectTemplateId' |
'v1/subscriptions' |
'v1/subscriptions/:subscriptionId';

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