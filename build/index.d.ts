export declare enum Currency {
    USD = "USD",
    AUD = "AUD",
    CAD = "CAD",
    EUR = "EUR",
    BRL = "BRL"
}
export declare const shortFormatNumber: (n: number) => string;
export declare const longFormatNumber: (n: number) => string;
export declare const shortFormatCurrency: (n: number, currency?: Currency) => string;
export declare const shortFormatPercentage: (n: number) => string;
