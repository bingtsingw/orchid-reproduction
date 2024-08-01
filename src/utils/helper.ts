import { expect } from 'bun:test';

export const expectCloseToDate = (d1: Date, d2: Date, ms = 1000) => {
  expect(Math.abs(d1.valueOf() - d2.valueOf())).toBeLessThan(ms);
};

export const expectNotCloseToDate = (d1: Date, d2: Date, ms = 1000) => {
  expect(Math.abs(d1.valueOf() - d2.valueOf())).toBeGreaterThanOrEqual(ms);
};
