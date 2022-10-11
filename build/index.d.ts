export declare enum Currency {
    USD = "USD",
    AUD = "AUD",
    CAD = "CAD",
    EUR = "EUR",
    BRL = "BRL"
}
export declare const shortFormatNumber: (number: number) => string;
export declare const longFormatNumber: (number: number) => string;
export declare const shortFormatCurrency: (number: number, currency?: Currency) => string;
export declare const shortFormatPercentage: (number: number) => string;
