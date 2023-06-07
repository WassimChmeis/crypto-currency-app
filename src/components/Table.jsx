import React, { useState } from "react";
import "../table.css";
import { useNavigate } from "react-router-dom";

//   console.log(data[0].name);
//   const name = data[0]?.name;
//   const img = data[0]?.image;
//   const currentPrice = data[0]?.current_price;
//   const priceChangePerc = data[0]?.price_change_percentage_24h;

const Table = ({ data }) => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  function formatPriceChangePerc(num) {
    const formattedPercentage = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
    return formattedPercentage;
  }

  function formatCurrentPrice(num) {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);

    return formattedPrice;
  }
  function formatMarketCap(num) {
    const billion = 1000000000;
    const formattedCap =
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num / billion) + "B";
    return formattedCap;
  }

  function handleClick(num) {
    navigate("/coins/" + num);
  }

  return (
    <div className="table-container  py-6 px-1 lg:p-6 rounded-xl overflow-y-scroll  hover:border-orange-400 max-h-[600px] transition-colors duration-200 ">
      <table className="sm:w-[550px] md:w-[700px] w-[95%] mx-auto  lg:w-[850px]  text-[13px]">
        <thead className="  bg-orange-400 ">
          <tr className=" flex-wrap ">
            <th className="mobileprop">#</th>
            <th className="p-2 text-left md:pl-24">Name</th>
            <th className="sm:text-right ">Price</th>
            <th className="text-right ">Change</th>
            <th className="text-right ">Market Cap</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item, index) => (
            <tr
              className="border-b hover:bg-gray-700  "
              key={index}
              onClick={() => handleClick(item.id)}
            >
              <td className="mobileprop">{index + 1}</td>
              <td className="flex md:pl-24 items-center my-5">
                <img className="w-7 h-7 mr-2" src={item.image} alt="coin" />{" "}
                <div>{item.name}</div>
              </td>
              <td className="text-right ">
                {formatCurrentPrice(item.current_price)}
              </td>
              <td
                className={`text-right   ${
                  item.price_change_percentage_24h > 0
                    ? "text-[#0ecb81]"
                    : "text-[#ff0000]"
                }`}
              >
                {formatPriceChangePerc(item.price_change_percentage_24h)}
              </td>
              <td className="text-right ">
                {formatMarketCap(item.market_cap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// return (
//     <div className="w-[900px] ">
//       <div className="flex justify-between">
//         <div>#</div>
//         <div>Name</div>
//         <div>price</div>
//         <div>24h Change</div>
//         <div>Market Cap</div>
//       </div>
//       <div>
//         {data.map((item, index) => (
//           <div className="flex justify-between">
//             <div>{index + 1}</div>
//             <div className="flex justify-center items-center ml-6">
//               <img className="w-[40px]" src={item.image} alt="coin" />
//               <h4>{item.name}</h4>
//             </div>
//             <div>{formatCurrentPrice(item.current_price)}</div>
//             <div>{formatPriceChangePerc(item.price_change_percentage_24h)}</div>
//             <div>{formatMarketCap(item.market_cap)}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
