export const currencyFormat = (amount: string | number): string => {
  const value = typeof amount === 'string' ? amount : amount.toString();
  const newValue = fromCurrencyToNumber(value);
  return Number(newValue).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const fromCurrencyToNumber = (currency: string): string => {
  return currency.replace(/,/g, '');
};

export const monthDiff = (date: Date): number => {
  const currentDate = new Date();
  let months = (date.getFullYear() - currentDate.getFullYear()) * 12;
  months -= currentDate.getMonth();
  months += date.getMonth();
  return months <= 0 ? 0 : months;
};

export const CALENDAR_MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const inputRegex =
  /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{0,4})*)|\d+)?(\.\d{0,2})?$/;

export const calculateMonthlyAmount = (
  amount: string,
  monthCount: number
): string => {
  const num = fromCurrencyToNumber(amount);
  const result = !Number(num) || !monthCount ? 0 : Number(num) / monthCount;
  return currencyFormat(result);
};
