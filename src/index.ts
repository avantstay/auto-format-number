import format from "./format";

export enum Currency {
  USD = "USD",
  AUD = "AUD",
  CAD = "CAD",
  EUR = "EUR",
  BRL = "BRL",
}

export const shortFormatNumber = (number: number): string => {
  const absNumber = Math.abs(number);
  const formatNumber = (n: number): string => {
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "mi";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "bi";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "tri";
    return format.shorten.format(n);
  };

  return number < 0 ? "-" + formatNumber(absNumber) : formatNumber(absNumber);
};

export const longFormatNumber = (number: number) => {
  return format.longNumber.format(number);
};

export const shortFormatCurrency = (
  number: number,
  currency: Currency = Currency.USD
) => {
  const prefix = currency === Currency.USD ? "$" : "";
  const suffix = currency === Currency.USD ? "" : `${currency}`;

  return number < 0
    ? `-${prefix}${shortFormatNumber(Math.abs(number))}${suffix}`
    : `${prefix}${shortFormatNumber(Math.abs(number))}${suffix}`;
};

export const shortFormatPercentage = (number: number) => {
  return `${shortFormatNumber(number)}%`;
};
