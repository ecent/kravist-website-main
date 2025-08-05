import { useState, useEffect, useCallback } from 'react';
import { cache, CacheConfig } from '@/utils/cacheManager';

interface UseCacheOptions<T> extends CacheConfig {
  fetchFunction: () => Promise<T>;
  deps?: any[]; // Dependencies that trigger refetch
  staleWhileRevalidate?: boolean; // Return stale data while fetching fresh
}

interface UseCacheReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  clearCache: () => void;
}

/**
 * Custom hook for cached data fetching with React
 */
export function useCache<T>({
  key,
  ttl,
  version,
  fetchFunction,
  deps = [],
  staleWhileRevalidate = true
}: UseCacheOptions<T>): UseCacheReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (useCache: boolean = true) => {
    try {
      setError(null);
      
      // Try to get from cache first
      if (useCache) {
        const cachedData = cache.get<T>(key);
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          
          // If stale-while-revalidate is disabled, return early
          if (!staleWhileRevalidate) {
            return;
          }
        }
      }

      // Set loading only if we don't have cached data
      if (!data) {
        setLoading(true);
      }

      // Fetch fresh data
      const freshData = await fetchFunction();
      
      // Cache the fresh data
      cache.set({ key, ttl, version }, freshData);
      
      // Update state
      setData(freshData);
      setLoading(false);
    } catch (err) {
      console.error(`[useCache] Error fetching data for key "${key}":`, err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
      setLoading(false);
    }
  }, [key, ttl, version, fetchFunction, staleWhileRevalidate, data]);

  // Refetch function for manual refresh
  const refetch = useCallback(async () => {
    await fetchData(false); // Bypass cache
  }, [fetchData]);

  // Clear cache function
  const clearCache = useCallback(() => {
    cache.delete(key);
    setData(null);
  }, [key]);

  // Effect to fetch data on mount and dependency changes
  useEffect(() => {
    fetchData();
  }, [fetchData, ...deps]);

  return {
    data,
    loading,
    error,
    refetch,
    clearCache
  };
}

/**
 * Hook for caching simple key-value data
 */
export function useSimpleCache<T>(key: string, defaultValue: T | null = null) {
  const [value, setValue] = useState<T | null>(() => {
    return cache.get<T>(key) || defaultValue;
  });

  const updateValue = useCallback((newValue: T, ttl: number = 24 * 60 * 60 * 1000) => {
    cache.set({ key, ttl }, newValue);
    setValue(newValue);
  }, [key]);

  const clearValue = useCallback(() => {
    cache.delete(key);
    setValue(defaultValue);
  }, [key, defaultValue]);

  return [value, updateValue, clearValue] as const;
}

/**
 * Hook for managing user preferences with cache
 */
export function usePreferences<T extends Record<string, any>>(defaultPreferences: T) {
  const [preferences, setPreferences] = useSimpleCache('user_preferences', defaultPreferences);

  const updatePreference = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
  }, [preferences, setPreferences]);

  return {
    preferences: preferences || defaultPreferences,
    updatePreference,
    clearPreferences: () => setPreferences(defaultPreferences)
  };
}