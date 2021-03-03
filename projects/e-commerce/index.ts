import { CreateProjectParams, CreateProjectUserParams, InitAppParams, InitAppResponseBody, Project, ProjectUser, UpdateProjectParams, UpdateProjectUserParams } from '../base';
import { Order } from '../../orders';
import { Product } from '../../products';
import { FinancialDetails, UpdateFinancialDetailsParams } from '../../billing';

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
        card: null,
        currency: 'usd',
        stripe_customer_id: ''
    },
    id: '',
    livemode: true,
    metadata: {},
    name: '',
    object: 'user',
    order_ids: [],
    password_hash: '',
    phone: '',
    project_id: '',
    security_question: '',
    security_answer_hash: ''
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