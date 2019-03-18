const grands = ['k', 'mi', 'bi', 'tri']

export enum Currency {
  USD = 'USD',
  AUD = 'AUD',
  CAD = 'CAD',
  EUR = 'EUR',
  BRL = 'BRL',
}

const tenLog = Math.log(10)

export const shortFormatNumber = (n: number): string => {
  const absNumber = Math.abs(n)

  if (absNumber < 1000) {
    const fractionDigits = 2 - Math.floor(Math.log(absNumber) / tenLog)
    const maxFractionDigits = Math.min(2, fractionDigits)

    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: maxFractionDigits,
    }).format(n)
  }

  const reduction = Math.floor(Math.log(absNumber) / Math.log(1000))
  const suffix = grands[reduction - 1] || '...' // TODO: if needed, expand this

  return shortFormatNumber(n / Math.pow(1000, reduction)) + suffix
}

export const longFormatNumber = (n: number) => {
  return new Intl.NumberFormat('en-US', {
    useGrouping: true,
    maximumFractionDigits: 2,
  }).format(n)
}

export const shortFormatCurrency = (
  n: number, currency: Currency = Currency.USD) => {
  const prefix = currency === Currency.USD ? '$' : ''
  const suffix = currency === Currency.USD ? '' : `${currency}`

  return n < 0
    ? `-${prefix}${shortFormatNumber(Math.abs(n))}${suffix}`
    : `${prefix}${shortFormatNumber(Math.abs(n))}${suffix}`
}

export const shortFormatPercentage = (n: number) => {
  return `${shortFormatNumber(Math.abs(n))}%`
}

console.log(shortFormatNumber(1093734.0083066323))
console.log(shortFormatNumber(109373.0083066323))
console.log(shortFormatNumber(10937.0083066323))
console.log(shortFormatNumber(1093.0083066323))
console.log(shortFormatNumber(109.0083066323))