export default {
  longNumber: new Intl.NumberFormat("en-US", {
    useGrouping: true,
    maximumFractionDigits: 2,
  }),
  shorten: new Intl.NumberFormat("en-US", {
    //@ts-ignore
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }),
  percentage: new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }),
};
