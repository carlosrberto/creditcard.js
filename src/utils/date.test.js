import { advanceTo, clear } from 'jest-date-mock';
import { isValidMonth } from './date';

describe('isValidMonth', () => {
  it('should return true if month is valid', () => {
    expect(isValidMonth(1)).toBeTruthy();
    expect(isValidMonth('01')).toBeTruthy();
  });

  it('should return false if month is invalid', () => {
    expect(isValidMonth(-1)).toBeFalsy();
    // expect(isValidMonth(0)).toBeFalsy();
    // expect(isValidMonth('0')).toBeFalsy();
    expect(isValidMonth(13)).toBeFalsy();
    expect(isValidMonth('13')).toBeFalsy();
  });
});
