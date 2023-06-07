import React from "react";

const Formatting = {
  formatPriceChangePerc: (num) => {
    const formattedPercentage = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
    return formattedPercentage;
  },
  formatCurrentPrice: (num) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);

    return formattedPrice;
  },
  formatMarketCap: (num) => {
    const billion = 1000000000;
    const formattedCap =
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num / billion) + "B";
    return formattedCap;
  },
};

export default Formatting;
