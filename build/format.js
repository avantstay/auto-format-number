"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    longNumber: new Intl.NumberFormat("en-US", {
        useGrouping: true,
        maximumFractionDigits: 2,
    }),
    shorten: new Intl.NumberFormat("en-US", {
        //@ts-ignore
        notation: "compact",
        compactDisplay: "short",
    }),
    percentage: new Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 2,
    }),
};
