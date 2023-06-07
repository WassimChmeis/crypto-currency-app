import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import HeroIcons from "./HeroIcons";

const Hero = ({ data }) => {
  function createHeroIcon(item, index) {
    return (
      <HeroIcons
        key={index}
        name={item.name}
        image={item.image}
        price={item.current_price}
        changepercentage={item.price_change_percentage_24h}
      />
    );
  }

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  //   console.log(data[0].name);
  //   const name = data[0]?.name;
  //   const img = data[0]?.image;
  //   const currentPrice = data[0]?.current_price;
  //   const priceChangePerc = data[0]?.price_change_percentage_24h;

  return (
    <div className="text-white " id="hero">
      <div className="text-[45px] text-center">
        <div className="sm:text-[65px] text-[48px] mb-8">
          <p>TRACK AND TRADE</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">
            CRYPTO CURRENCIES
          </p>
        </div>
        <div className="text-[25px] mb-16  sm:hidden">
          <button
            className="my-6  text-[20px] px-10 py-3 rounded-lg border border-gray-500 shadow-none hover:shadow shadow-orange-500 hover:border-orange-500 "
            onClick={(event) => handleClick(event, "market")}
          >
            <div className="flex justify-center items-center">
              See Prices
              <MdOutlineKeyboardArrowDown className="font-bold text-[30px]" />
            </div>
          </button>
        </div>
        <div className="flex justify-center pb-14  gap-8 flex-wrap ">
          {data.map(createHeroIcon)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
