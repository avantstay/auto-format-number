"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __importDefault(require("./format"));
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["AUD"] = "AUD";
    Currency["CAD"] = "CAD";
    Currency["EUR"] = "EUR";
    Currency["BRL"] = "BRL";
})(Currency = exports.Currency || (exports.Currency = {}));
exports.shortFormatNumber = function (number) {
    var absNumber = Math.abs(number);
    var formatNumber = function (n) {
        if (n >= 1e3 && n < 1e6)
            return +(n / 1e3).toFixed(1) + "k";
        if (n >= 1e6 && n < 1e9)
            return +(n / 1e6).toFixed(1) + "mi";
        if (n >= 1e9 && n < 1e12)
            return +(n / 1e9).toFixed(1) + "bi";
        if (n >= 1e12)
            return +(n / 1e12).toFixed(1) + "tri";
        return format_1.default.shorten.format(n);
    };
    return number < 0 ? "-" + formatNumber(absNumber) : formatNumber(absNumber);
};
exports.longFormatNumber = function (number) {
    return format_1.default.longNumber.format(number);
};
exports.shortFormatCurrency = function (number, currency) {
    if (currency === void 0) { currency = Currency.USD; }
    var prefix = currency === Currency.USD ? "$" : "";
    var suffix = currency === Currency.USD ? "" : "" + currency;
    return number < 0
        ? "-" + prefix + exports.shortFormatNumber(Math.abs(number)) + suffix
        : "" + prefix + exports.shortFormatNumber(Math.abs(number)) + suffix;
};
exports.shortFormatPercentage = function (number) {
    return exports.shortFormatNumber(number) + "%";
};
