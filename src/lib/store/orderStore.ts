'use client';

import { useState, useEffect } from 'react';
import { Order, OrderStatus } from '@/types';

const ORDERS_STORAGE_KEY = 'projectbee_orders_v1';

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'PB-202611-0041',
    status: 'delivered',
    createdAt: '2026-11-06T10:15:00Z',
    parentName: 'Priya Narayanan',
    parentPhone: '9845012345',
    parentWhatsapp: '9845012345',
    studentName: 'Rohan Narayanan',
    studentClass: 7,
    shippingAddress: {
      recipientName: 'Priya Narayanan',
      phone: '9845012345',
      addressLine1: 'Flat 402, Green Glen Layout, Bellandur',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560103'
    },
    items: [
      {
        productId: 'prod-001',
        titleSnapshot: 'Working Hydraulic Lift Model',
        skuSnapshot: 'PB-PHY-HYD-01',
        unitPricePaise: 64900,
        quantity: 1,
        totalPaise: 64900
      }
    ],
    subtotalPaise: 64900,
    discountPaise: 0,
    shippingFeePaise: 7000,
    totalPayablePaise: 71900,
    verifiedAt: '2026-11-06T10:16:30Z',
    shippedAt: '2026-11-07T09:00:00Z',
    deliveredAt: '2026-11-08T14:30:00Z',
    courierName: 'Shiprocket Express',
    awbNumber: 'SR-BLR-984210'
  },
  {
    id: 'ord-1002',
    orderNumber: 'PB-202611-0042',
    status: 'shipped',
    createdAt: '2026-11-08T16:20:00Z',
    parentName: 'Col. Amitav Sen',
    parentPhone: '9876501234',
    parentWhatsapp: '9876501234',
    studentName: 'Arjun Sen',
    studentClass: 8,
    shippingAddress: {
      recipientName: 'Col. Amitav Sen',
      phone: '9876501234',
      addressLine1: 'House 14, Defence Colony, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038'
    },
    items: [
      {
        productId: 'prod-004',
        titleSnapshot: 'Solar & Wind Hybrid Renewable Energy Power Plant',
        skuSnapshot: 'PB-EVS-SOL-04',
        unitPricePaise: 99900,
        quantity: 1,
        totalPaise: 99900
      }
    ],
    subtotalPaise: 99900,
    discountPaise: 0,
    shippingFeePaise: 0, // Free delivery
    totalPayablePaise: 99900,
    verifiedAt: '2026-11-08T16:21:45Z',
    shippedAt: '2026-11-09T08:30:00Z',
    courierName: 'Shiprocket Express',
    awbNumber: 'SR-BLR-984211'
  }
];

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (stored) {
        setOrders(JSON.parse(stored));
      } else {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
      }
    } catch (e) {
      console.error('Failed to load orders', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(newOrders));
    } catch (e) {
      console.error('Failed to save orders', e);
    }
  };

  const createOrder = (orderData: Omit<Order, 'id' | 'createdAt'>): Order => {
    const newOrder: Order = {
      ...orderData,
      id: `ord-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [newOrder, ...orders];
    saveOrders(updated);
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus, extra?: { awbNumber?: string; courierName?: string }) => {
    const updated = orders.map((ord) => {
      if (ord.id === orderId) {
        return {
          ...ord,
          status: newStatus,
          ...(extra?.awbNumber ? { awbNumber: extra.awbNumber } : {}),
          ...(extra?.courierName ? { courierName: extra.courierName } : {}),
          ...(newStatus === 'shipped' ? { shippedAt: new Date().toISOString() } : {}),
          ...(newStatus === 'delivered' ? { deliveredAt: new Date().toISOString() } : {}),
        };
      }
      return ord;
    });
    saveOrders(updated);
  };

  const getOrder = (orderNumber: string) => {
    return orders.find((o) => o.orderNumber === orderNumber || o.id === orderNumber);
  };

  return {
    orders,
    isLoaded,
    createOrder,
    updateOrderStatus,
    getOrder,
  };
}

