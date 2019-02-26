"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grands = ['k', 'mi', 'bi', 'tri'];
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["AUD"] = "AUD";
    Currency["CAD"] = "CAD";
    Currency["EUR"] = "EUR";
    Currency["BRL"] = "BRL";
})(Currency = exports.Currency || (exports.Currency = {}));
exports.shortFormatNumber = function (n) {
    var absNumber = Math.abs(n);
    if (absNumber < 1000) {
        var fractionDigits = 2 - Math.floor(Math.log(absNumber) / Math.log(10));
        var maxFractionDigits = Math.min(1, fractionDigits);
        return new Intl.NumberFormat('en-US', {
            maximumFractionDigits: maxFractionDigits,
        }).format(n);
    }
    var reduction = Math.floor(Math.log(absNumber) / Math.log(1000));
    var suffix = grands[reduction - 1] || '...'; // TODO: if needed, expand this
    return exports.shortFormatNumber(n / Math.pow(1000, reduction)) + suffix;
};
exports.longFormatNumber = function (n) {
    return new Intl.NumberFormat('en-US', {
        useGrouping: true,
        maximumFractionDigits: 2,
    }).format(n);
};
exports.shortFormatCurrency = function (n, currency) {
    if (currency === void 0) { currency = Currency.USD; }
    var prefix = currency === Currency.USD ? '$' : '';
    var suffix = currency === Currency.USD ? '' : "" + currency;
    return n < 0
        ? "-" + prefix + exports.shortFormatNumber(Math.abs(n)) + suffix
        : "" + prefix + exports.shortFormatNumber(Math.abs(n)) + suffix;
};
exports.shortFormatPercentage = function (n) {
    return exports.shortFormatNumber(Math.abs(n)) + "%";
};
