import {Identifiable, Timestamped} from '../base';

/**
 * Supported Assets
 */
export type AssetType = 'image';

/**
 * An Asset uploaded to Appdrop Cloud Storage
 */
export interface RemoteAsset extends Identifiable {

    /**
     * Type of asset
     */
	asset_type: AssetType;
	
    /**
     * Height in px.
     */
    native_asset_height: number;
	
    /**
     * Width in px.
     */
    native_asset_width: number;
	
    /**
     * Asset download url
     */
    remote_url: string;

    /**
     * Last update timestamp.
     */
    updated_at: Timestamped;

}

/**
 * Local asset
 */
export interface CachedAsset extends RemoteAsset {
    
    /**
     * Cache timestamp
     */
    cached_at: Timestamped;

}