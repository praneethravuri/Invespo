const computePnl = require('./pnl');
test('Testing positive PNL', () => {
expect(computePnl(10, 100.1, 100.2)).toBeCloseTo(1.0);
});
test('Testing undefined shares', () => {
expect(computePnl(null, 100.1, 100.2)).toBeCloseTo(0);
});
test('Testing undefined original price', () => {
expect(computePnl(10, undefined, 100.2)).toBeCloseTo(0);
});
test('Testing undefined current price', () => {
expect(computePnl(10, 100.1, undefined)).toBeCloseTo(0);
});