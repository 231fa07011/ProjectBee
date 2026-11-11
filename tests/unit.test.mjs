import test from 'node:test';
import assert from 'node:assert';

test('Paise currency calculation', () => {
  const mrpPaise = 89900;
  const sellingPricePaise = 64900;
  const savings = mrpPaise - sellingPricePaise;
  assert.strictEqual(savings, 25000);
  assert.strictEqual(Math.round((savings / mrpPaise) * 100), 28);
});

test('Free shipping threshold check', () => {
  const threshold = 99900;
  const fee = 7000;
  const order1 = 64900;
  const order2 = 104800;

  assert.strictEqual(order1 >= threshold ? 0 : fee, 7000);
  assert.strictEqual(order2 >= threshold ? 0 : fee, 0);
});

test('Indian WhatsApp phone number regex validation', () => {
  const indianMobileRegex = /^[6-9]\d{9}$/;
  assert.strictEqual(indianMobileRegex.test('9876543210'), true);
  assert.strictEqual(indianMobileRegex.test('8884012345'), true);
  assert.strictEqual(indianMobileRegex.test('7331102982'), true);
  assert.strictEqual(indianMobileRegex.test('1234567890'), false);
  assert.strictEqual(indianMobileRegex.test('98765'), false);
});

test('Indian Pincode regex validation', () => {
  const pincodeRegex = /^\d{6}$/;
  assert.strictEqual(pincodeRegex.test('560034'), true);
  assert.strictEqual(pincodeRegex.test('560001'), true);
  assert.strictEqual(pincodeRegex.test('56003'), false);
  assert.strictEqual(pincodeRegex.test('5600345'), false);
  assert.strictEqual(pincodeRegex.test('ABC560'), false);
});

test('Academic Group Derivation for Classes 1–12', () => {
  function getAcademicGroup(grade) {
    if (grade <= 2) return 'early_learners';
    if (grade <= 5) return 'primary';
    if (grade <= 8) return 'middle_school';
    if (grade <= 10) return 'secondary';
    return 'senior_secondary';
  }

  assert.strictEqual(getAcademicGroup(1), 'early_learners');
  assert.strictEqual(getAcademicGroup(4), 'primary');
  assert.strictEqual(getAcademicGroup(7), 'middle_school');
  assert.strictEqual(getAcademicGroup(10), 'secondary');
  assert.strictEqual(getAcademicGroup(12), 'senior_secondary');
});

test('Stock Reservation Logic prevents overselling', () => {
  let stockOnHand = 2;
  let stockReserved = 0;

  function attemptReserve(qty) {
    const available = stockOnHand - stockReserved;
    if (available < qty) return false;
    stockReserved += qty;
    return true;
  }

  assert.strictEqual(attemptReserve(1), true);
  assert.strictEqual(stockReserved, 1);
  assert.strictEqual(attemptReserve(1), true);
  assert.strictEqual(stockReserved, 2);
  // Third concurrent reservation must fail
  assert.strictEqual(attemptReserve(1), false);
  assert.strictEqual(stockReserved, 2);
});

test('Order Number formatting PB-YYYYMMDD-XXXX', () => {
  const orderNumber = 'PB-20261109-4082';
  const orderRegex = /^PB-\d{8}-\d{4}$/;
  assert.strictEqual(orderRegex.test(orderNumber), true);
});

test('Supabase URL encoding for special characters in database password', () => {
  const rawPassword = 'C@5&%WJdq+ELiq8';
  const encoded = encodeURIComponent(rawPassword);
  assert.strictEqual(encoded, 'C%405%26%25WJdq%2BELiq8');
  assert.strictEqual(decodeURIComponent(encoded), rawPassword);
});
