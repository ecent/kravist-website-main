// Cache management utilities for client-side caching

export interface CacheConfig {
  key: string;
  ttl: number; // Time to live in milliseconds
  version?: string;
}

export interface CachedData<T> {
  data: T;
  timestamp: number;
  version: string;
  ttl: number;
}

export class CacheManager {
  private static instance: CacheManager;
  private readonly defaultTTL = 5 * 60 * 1000; // 5 minutes
  private readonly version = '1.0.0';

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  /**
   * Set data in cache with TTL
   */
  set<T>(config: CacheConfig, data: T): void {
    try {
      const cachedData: CachedData<T> = {
        data,
        timestamp: Date.now(),
        version: config.version || this.version,
        ttl: config.ttl || this.defaultTTL
      };

      localStorage.setItem(
        this.getCacheKey(config.key),
        JSON.stringify(cachedData)
      );
    } catch (error) {
      console.warn('[Cache] Failed to set cache:', error);
    }
  }

  /**
   * Get data from cache if not expired
   */
  get<T>(key: string): T | null {
    try {
      const cached = localStorage.getItem(this.getCacheKey(key));
      if (!cached) return null;

      const cachedData: CachedData<T> = JSON.parse(cached);
      
      // Check if cache is expired
      if (this.isExpired(cachedData)) {
        this.delete(key);
        return null;
      }

      // Check version compatibility
      if (cachedData.version !== this.version) {
        this.delete(key);
        return null;
      }

      return cachedData.data;
    } catch (error) {
      console.warn('[Cache] Failed to get cache:', error);
      return null;
    }
  }

  /**
   * Delete specific cache entry
   */
  delete(key: string): void {
    try {
      localStorage.removeItem(this.getCacheKey(key));
    } catch (error) {
      console.warn('[Cache] Failed to delete cache:', error);
    }
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('kravist_cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('[Cache] Failed to clear cache:', error);
    }
  }

  /**
   * Get cache info for debugging
   */
  getInfo(): { totalSize: number; entries: number; keys: string[] } {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith('kravist_cache_')
      );
      
      const totalSize = keys.reduce((size, key) => {
        return size + (localStorage.getItem(key)?.length || 0);
      }, 0);

      return {
        totalSize,
        entries: keys.length,
        keys: keys.map(key => key.replace('kravist_cache_', ''))
      };
    } catch (error) {
      console.warn('[Cache] Failed to get cache info:', error);
      return { totalSize: 0, entries: 0, keys: [] };
    }
  }

  private getCacheKey(key: string): string {
    return `kravist_cache_${key}`;
  }

  private isExpired<T>(cachedData: CachedData<T>): boolean {
    return Date.now() - cachedData.timestamp > cachedData.ttl;
  }
}

// Pre-configured cache configurations
export const CacheConfigs = {
  // Short-term caches (5 minutes)
  SCHEDULE_DATA: { key: 'schedule', ttl: 5 * 60 * 1000 },
  CONTACT_INFO: { key: 'contact', ttl: 5 * 60 * 1000 },
  
  // Medium-term caches (30 minutes)
  PRICING_DATA: { key: 'pricing', ttl: 30 * 60 * 1000 },
  INSTRUCTOR_DATA: { key: 'instructors', ttl: 30 * 60 * 1000 },
  
  // Long-term caches (24 hours)
  STATIC_CONTENT: { key: 'static', ttl: 24 * 60 * 60 * 1000 },
  USER_PREFERENCES: { key: 'preferences', ttl: 24 * 60 * 60 * 1000 }
};

export const cache = CacheManager.getInstance();