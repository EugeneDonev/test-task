import expect from 'expect';
import {
  calculateMonthlyAmount,
  currencyFormat,
  fromCurrencyToNumber,
  monthDiff,
} from '../utils';

describe('currencyFormat function', () => {
  it('if the amount is an empty string', () => {
    expect(currencyFormat('')).toEqual('0');
  });

  it('if the amount is an zero', () => {
    expect(currencyFormat(0)).toEqual('0');
  });

  it('if the amount is an number 1000', () => {
    expect(currencyFormat(1000)).toEqual('1,000');
  });

  it('if the amount is an number 1000.5', () => {
    expect(currencyFormat(1000.5)).toEqual('1,000.5');
  });

  it('if the amount is an string 1000', () => {
    expect(currencyFormat('1000')).toEqual('1,000');
  });

  it('if the amount is an string 1000.0', () => {
    expect(currencyFormat('1000.0')).toEqual('1,000');
  });

  it('if the amount is an string 1000.5', () => {
    expect(currencyFormat('1000.5')).toEqual('1,000.5');
  });

  it('if the amount is an string 1,0000.5', () => {
    expect(currencyFormat('1,0000.5')).toEqual('10,000.5');
  });

  it('if the amount is an string 1,000.50', () => {
    expect(currencyFormat('1,0000.50')).toEqual('10,000.5');
  });

  it('if the amount is an string 1,000.5055', () => {
    expect(currencyFormat('1,0000.5055')).toEqual('10,000.51');
  });

  it('if the amount is an string 1,0000.5155', () => {
    expect(currencyFormat('1,0000.5155')).toEqual('10,000.52');
  });
});

describe('fromCurrencyToNumber function', () => {
  it('if the value is an empty string', () => {
    expect(fromCurrencyToNumber('')).toEqual('');
  });

  it('if there is a comma in the value', () => {
    expect(fromCurrencyToNumber('10,000.52')).toEqual('10000.52');
  });

  it('if there are more than one comma in the value', () => {
    expect(fromCurrencyToNumber('34,10,000.52')).toEqual('3410000.52');
  });

  it('if the value without dot', () => {
    expect(fromCurrencyToNumber('34,10,000')).toEqual('3410000');
  });
});

describe('monthDiff function', () => {
  const currentDate = new Date();

  it('one month difference', () => {
    const testedDate = new Date();
    testedDate.setMonth(currentDate.getMonth() + 1);
    expect(monthDiff(testedDate)).toEqual(1);
  });

  it('the current date is larger than the test date', () => {
    const testedDate = new Date();
    testedDate.setMonth(currentDate.getMonth() - 1);
    expect(monthDiff(testedDate)).toEqual(0);
  });
});

describe('calculateMonthlyAmount function', () => {
  it('if the amount and number of months is zero', () => {
    expect(calculateMonthlyAmount('0', 0)).toEqual('0');
  });

  it('if the amount is zero', () => {
    expect(calculateMonthlyAmount('0', 10)).toEqual('0');
  });

  it('if the number of months is zero', () => {
    expect(calculateMonthlyAmount('1000', 0)).toEqual('0');
  });

  it('If there is an amount = 1000 and number of months = 10', () => {
    expect(calculateMonthlyAmount('1000', 10)).toEqual('100');
  });

  it('If there is an amount = 10,000 and number of months = 10', () => {
    expect(calculateMonthlyAmount('10,000', 10)).toEqual('1,000');
  });

  it('If there is an amount = 10,000.5 and number of months = 10', () => {
    expect(calculateMonthlyAmount('10,000.5', 10)).toEqual('1,000.05');
  });
});
