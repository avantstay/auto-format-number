# Install it
`yarn add https://github.com/avantstay/auto-format-number.git#v1.0.0`

# Use it
```typescript
import { shortFormatNumber, shortFormatCurrency, shortFormatPercentage, Currency } from 'auto-format-number'

// Regular number
console.log(shortFormatNumber(23.124124))

// Currency
console.log(shortFormatCurrency(23.1241))
console.log(shortFormatCurrency(23.1241, Currency.USD))

// Percentage
console.log(shortFormatPercentage(23.1241))
```