import { Identifiable } from '../base';
import { CurrencyCode } from '../billing';

/**
 * Store product
 */
export interface Product extends Identifiable, ProductBase {
    
    /**
     * Whether or not the product should be pushed to customers
     */
    active: boolean;
    
    /**
     * Decimal number displayed as the discount on the 
     * item. 
     * 
     * @Important Generated during store sync.
     * 
     * Example: 0.25 means 25% off. This means that if the item had 
     * a retail price $75 then the store shows that the original 
     * price was $100
     */
    discount: number;
    
    /**
     * Object name
     */
    object: 'product';
    
    /**
     * A string representation of the rrice of the lowe
     */
    price_range: string;
    
    /**
     * Map of all the product's sync variants
     * 
     * Key is the `id` field of the variant
     * 
     * @Important Generated during store sync.
     */
    sync_variants: {
    
        [key: string]: ProductVariant;
        
    };
    
    /**
     * Utility map of the product's color and sizes to assist
     * with navigating the sync variants.
     * 
     * @Important Generated during store sync.
     * 
     * Top level keys are color codes
     * 
     * Second level keys are size codes
     * 
     * Nested string value is the `id` field of the variant
     * 
     * @Important When displaying these key perform a global
     * replacement of `-` with a space ` `
     * 
     */
    variant_map: {
    
        [key: string]: {
            
            [key: string]: string;
    
        };
    
    };

};

/**
 * Shared Product API
 */
export interface ProductBase {

    /**
     * Name of the item
     */
    name: string;

    /**
     * Small thumbnail of the product
     */
    thumbnail_url: string;

}

/**
 * Product variant for purchase
 */
export interface ProductVariant extends ProductVariantBase {    

    /**
     * Currency of item.
     */
    currency: CurrencyCode;
    
    /**
     * Files for store preview
     */
    files: ProductVariantFile[];

    /**
     * Unique identifier for the variant
     */
    id: string;
    
    /**
     * Order that the variant appeared in Printful's original result set.
     * Used in the product size sorting algorithm so that XL is not before M.
     */
    variant_index: number;

}

/**
 * Shared Variant API
 */
export interface ProductVariantBase {

    /**
     * Identifier in external system.
     * 
     * @Important This value is passed with orders.
     * 
     * Example: `"5bc04fbe956148"`
     */
    external_id: string;

    /**
     * Variant name
     * 
     * Example: `"Trust the Process Tee - Black / XS"`
     */
    name: string;

    /**
     * Underlying Product information.
     */
    product: {
        
        /**
         * Variant id
         */
        variant_id?: number;
        
        /**
         * Product id
         */
        product_id?: number;
        
        /**
         * Image url
         */
        image: string;
        
        /**
         * Name
         * 
         * Example: "Bella + Canvas 3501 Unisex Long Sleeve Shirt (Black / XS)"
         */
        name: string;

    };

    /**
     * Price set by store owner.
     * 
     * Example: `"24.00"`
     */
    retail_price: string;

    /**
     * Product sku
     * 
     * Example: `"602644B04979C_Black-XS"`
     */
    sku: string;

    /**
     * Whether or not the variant is synced
     */
    synced: boolean;


}

/**
 * Product variant file
 */
export interface ProductVariantFile extends FileBase {

    /**
     * Unique identifier
     */
    id: string;
    
}


/**
 * Shared File API
 */
export interface FileBase {
    
    /**
     * Height in px
     */
    height: number;
    
    /**
     * Large image
     */
    preview_url: string;
    
    /**
     * Small image
     */
    thumbnail_url: string;

    /**
     * File type
     */
    type: VariantFileType;

    /**
     * Width in px
     */
    width: number;
    
}

/**
 * Type of file
 */
export type VariantFileType = 'default'|'preview';


/**
 * Response body from call to Printful /products endpoint
 * 
 * GET `https://api.printful.com/store/products?offset=${n}&limit=100`
 */
export interface PrintfulStoreResponseBody {

    /**
     * Status code. Returns `200` Unless call performed incorrectly.
     */
    code: number;
    
    /**
     * Extra data (ignoreable)
     */
    extra: any[];
    
    /**
     * Numeric information. Used to ensure no products are left behind
     */
    paging: {
    
        /**
         * Total number of products in the store
         */
        total: number;
    
        /**
         * Result set offset from query string
         */
        offset: number;
    
        /**
         * Result limit from query string
         */
        limit: number;
    
    };
    
    /**
     * List of results
     */
    result: PrintfulProductSummary[];
    
}

/**
 * Printful Porduct summary
 */
export interface PrintfulProductSummary extends ProductBase {
    
    /**
     * Id in external system
     */
    id: number;
    
    /**
     * Id in external system
     */
    external_id: string;
    
    /**
     * Number of variants
     */
    variants: number;
    
    /**
     * Number of variants that are synced
     */
    synced: number;

}

/**
 * Response body from call to Printful Sync Product detail
 * 
 * GET https://api.printful.com/store/products/{id}
 */
export interface PrintfulProductDetailResponseBody {
    
    /**
     * Status code. Returns `200` Unless call performed incorrectly.
     */
    code: number;
    
    /**
     * Call result
     */
    result: {

        /**
         * Summary of product
         */
        sync_product: PrintfulProductSummary;
        
        /**
         * List of variants
         */
        sync_variants: PrintfulSyncVariant[];
    
    };

    /**
     * Extra data (ignoreable)
     */
    extra: [];
}

/**
 * Printful sync variant
 */
export interface PrintfulSyncVariant extends ProductVariantBase {

    /**
     * Currency code in all caps
     */
    currency: string;

    /**
     * Files for store preview
     */
    files: PrintfulFile[];

    /**
     * Unique identifier.
     */
    id: number;

    /**
     * Sync product id
     */
    sync_product_id: string;
    
    /**
     * Id of the variant
     */
    variant_id: number;
    
    /**
     * Warehouse identifier
     */
    warehouse_product_variant_id: number|null;
    
}

/**
 * Printful preview file
 */
export interface PrintfulFile extends FileBase {
    
    /**
     * Unique identifier
     */
    id: number;
    
    /**
     * File size
     */
    size: number;
    
    /**
     * `ok` when file is working
     */
    status: string;

}