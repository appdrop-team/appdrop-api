import { Timestamp } from '@google-cloud/firestore';
import { Address, CountryCode, Identifiable, StateCodeUSA } from '../base';

/**
 * Customer Order
 */
export interface Order extends Identifiable, CreateOrderParams, OrderResultBase {

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
    updated_at: Timestamp;

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
export interface UpdateOrderParams extends AttachOrderId {

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
export interface ConfirmOrderParams extends AttachOrderId {

    /**
     * Id of the stripe charge. Used for refunds.
     */
    stripe_charge_id: string;

}

/**
 * Params to cancel an order that has status `pending` or `draft`. 
 * Charged amount is returned to the store owner's credit card.
 * 
 * DELETE https://api.printful.com/orders/{id}
 */
export interface CancelOrderParams extends AttachOrderId {}

/**
 * Common Params for Order operations
 */
export interface AttachOrderId {

    /**
     * Id of the order being operated on.
     */
    order_id: string;

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