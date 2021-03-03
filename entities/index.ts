import { CreateUserParams, UpdateUserParams, User } from '../auth';
import { Identifiable } from '../base';
import { CreateEntityFinancialDetailsParams, EntityFinancialDetails, UpdateEntityFinancialDetailsParams } from '../billing';

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
     * This object contains each User with read and write access
     * to the Enterprise.
     */
    team_members: {

        /**
         * key is the team member's id.
         */
        [key: string]: CreateUserParams;

    };

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
     * This object contains each User with read and write access
     * to the Enterprise.
     */
    team_members?: {

        /**
         * key is the team member's id.
         */
        [key: string]: UpdateUserParams;

    };

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
    team_members: {

        /**
         * key is the team member's id.
         */
        [key: string]: User;

    };

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
        bank_account: null,
        billing_interval: 'annually',
        billing_method: 'bank_account',
        card: null,
        canceled_at: null,
        converted_at: null,
        coupons: {},
        currency: 'usd',
        payout_balance: 0,
        stripe_customer_id: '',
        stripe_subscription: null,
        tier: 'small'
    },
    id: '',
    livemode: true,
    name: '',
    object: 'entity',
    organization_ids: [],
    owner_id: '',
    team_members: {},
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
     * Type of entity
     */
    entity_type: 'organization';

    /**
     * This object contains each User with read and write access
     * to the Enterprise.
     */
    team_members: {

        /**
         * key is the team member's id.
         */
        [key: string]: User;

    };

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
        bank_account: null,
        billing_interval: 'annually',
        billing_method: 'bank_account',
        card: null,
        canceled_at: null,
        converted_at: null,
        coupons: {},
        currency: 'usd',
        payout_balance: 0,
        stripe_customer_id: '',
        stripe_subscription: null,
        tier: 'starter'
    },
    id: '',
    livemode: true,
    name: '',
    object: 'entity',
    owner_id: '',
    project_ids: [],
    team_members: {},
};

/**
 * Params to create an organization
 */
export interface CreateOrganizationParams extends CreateEntityParams {

    /**
     * This array includes the id of each API Key that this Organization owns.
     */
    api_key: string;

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