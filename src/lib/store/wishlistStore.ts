'use client';

import { useState, useEffect } from 'react';

const WISHLIST_STORAGE_KEY = 'projectbee_wishlist_v1';

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored) {
        setWishlistIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load wishlist', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveWishlist = (ids: string[]) => {
    setWishlistIds(ids);
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  };

  const toggleWishlist = (productId: string) => {
    if (wishlistIds.includes(productId)) {
      saveWishlist(wishlistIds.filter((id) => id !== productId));
    } else {
      saveWishlist([...wishlistIds, productId]);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistIds.includes(productId);
  };

  return {
    wishlistIds,
    isLoaded,
    toggleWishlist,
    isInWishlist,
    count: wishlistIds.length,
  };
}

