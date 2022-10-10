"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortFormatPercentage = exports.shortFormatCurrency = exports.longFormatNumber = exports.shortFormatNumber = exports.Currency = void 0;
var format_1 = __importDefault(require("./format"));
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["AUD"] = "AUD";
    Currency["CAD"] = "CAD";
    Currency["EUR"] = "EUR";
    Currency["BRL"] = "BRL";
})(Currency = exports.Currency || (exports.Currency = {}));
var shortFormatNumber = function (number) {
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
    return absNumber < 0
        ? "-" + formatNumber(-1 * absNumber)
        : formatNumber(absNumber);
};
exports.shortFormatNumber = shortFormatNumber;
var longFormatNumber = function (number) {
    return format_1.default.longNumber.format(number);
};
exports.longFormatNumber = longFormatNumber;
var shortFormatCurrency = function (number, currency) {
    if (currency === void 0) { currency = Currency.USD; }
    var prefix = currency === Currency.USD ? "$" : "";
    var suffix = currency === Currency.USD ? "" : "".concat(currency);
    return number < 0
        ? "-".concat(prefix).concat((0, exports.shortFormatNumber)(Math.abs(number))).concat(suffix)
        : "".concat(prefix).concat((0, exports.shortFormatNumber)(Math.abs(number))).concat(suffix);
};
exports.shortFormatCurrency = shortFormatCurrency;
var shortFormatPercentage = function (number) {
    return format_1.default.percentage.format(Math.abs(number));
};
exports.shortFormatPercentage = shortFormatPercentage;
