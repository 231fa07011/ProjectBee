'use client';

import { useState, useEffect } from 'react';
import { Product, CartItem } from '@/types';

const CART_STORAGE_KEY = 'projectbee_cart_v1';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse cart storage', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to LocalStorage on change
  const saveItems = (newItems: CartItem[]) => {
    setItems(newItems);
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
    } catch (e) {
      console.error('Failed to save cart storage', e);
    }
  };

  const addItem = (product: Product, quantity = 1) => {
    const existingIndex = items.findIndex((i) => i.productId === product.id);
    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...items];
      updated[existingIndex].quantity = Math.min(10, updated[existingIndex].quantity + quantity);
    } else {
      updated = [...items, { productId: product.id, product, quantity: Math.min(10, quantity) }];
    }
    saveItems(updated);
  };

  const removeItem = (productId: string) => {
    saveItems(items.filter((i) => i.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    const updated = items.map((i) =>
      i.productId === productId ? { ...i, quantity: Math.min(10, quantity) } : i
    );
    saveItems(updated);
  };

  const clearCart = () => {
    saveItems([]);
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalPaise = items.reduce(
    (sum, item) => sum + item.product.sellingPricePaise * item.quantity,
    0
  );

  // Free shipping threshold ₹999 (99,900 paise); otherwise ₹70 (7,000 paise)
  const shippingFeePaise = subtotalPaise >= 99900 || subtotalPaise === 0 ? 0 : 7000;

  const totalPayablePaise = subtotalPaise + shippingFeePaise;

  return {
    items,
    isLoaded,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItemsCount,
    subtotalPaise,
    shippingFeePaise,
    totalPayablePaise,
  };
}
