import React from "react";

const HeroIcons = (props) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(props.price);

  const formattedPercentage = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(props.changepercentage / 100);

  const percentageStyle = {
    color: props.changepercentage > 0 ? "#0ecb81" : "#ff0000",
  };

  return (
    <div>
      <div className="text-[22px] w-[200px] flex flex-col justify-center items-center">
        <img className="w-[90px]" src={props.image} alt="/" />
        <div className="flex">
          <div className="mr-2">{props.name} </div>
          <div style={percentageStyle}>{formattedPercentage}</div>
        </div>
        <div>{formattedPrice}</div>
      </div>
    </div>
  );
};

export default HeroIcons;
