import { describe, it, expect } from 'vitest';

describe('Pricing & Currency Calculations (Paise Math)', () => {
  it('calculates selling price and discount correctly in integer paise', () => {
    const mrpPaise = 89900; // ₹899.00
    const sellingPricePaise = 64900; // ₹649.00
    const savingsPaise = mrpPaise - sellingPricePaise;
    const discountPercent = Math.round((savingsPaise / mrpPaise) * 100);

    expect(savingsPaise).toBe(25000); // ₹250.00
    expect(discountPercent).toBe(28);
    // Ensure no floating point rounding discrepancies
    expect(Number.isInteger(savingsPaise)).toBe(true);
  });

  it('determines free shipping threshold correctly (threshold = ₹999)', () => {
    const freeShippingThresholdPaise = 99900;
    const standardShippingFeePaise = 7000; // ₹70

    const order1SubtotalPaise = 64900; // ₹649
    const order1Shipping = order1SubtotalPaise >= freeShippingThresholdPaise ? 0 : standardShippingFeePaise;
    expect(order1Shipping).toBe(7000);

    const order2SubtotalPaise = 104800; // ₹1,048
    const order2Shipping = order2SubtotalPaise >= freeShippingThresholdPaise ? 0 : standardShippingFeePaise;
    expect(order2Shipping).toBe(0);
  });

  it('calculates cart item line totals without precision loss', () => {
    const itemUnitPricePaise = 74900; // ₹749.00
    const quantity = 3;
    const lineTotal = itemUnitPricePaise * quantity;

    expect(lineTotal).toBe(224700); // ₹2,247.00
    expect(lineTotal / 100).toBe(2247);
  });
});

