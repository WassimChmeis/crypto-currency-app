import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import Formatting from "../components/Formatting";

function Coin() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  var price = coin.market_data?.price_change_percentage_24h;

  return (
    <div className=" min-h-screen lg:h-screen justify-center lg:flex  px-5 font-bold text-white text-[22px] font-dominant py-[160px] bg-[#0f192e] w-full ">
      <div className="px-9">
        <div className="flex flex-col max-w-[350px] mx-auto  items-center lg:border-r-2 lg:pr-16 lg:border-b-0 lg:mt-9 border-b-2 pb-7">
          <img className=" mb-8 w-[230px]" src={coin.image?.large} alt="/" />
          <h1 className="mb-3 text-[30px]"> {coin.name}</h1>
          <h3 className="">Rank: #{coin.market_cap_rank}</h3>
        </div>
      </div>
      <div className="lg:w-[640px] mt-6">
        <div className="flex flex-wrap lg:justify-between justify-center items-center gap-5">
          <h4>
            24h change:
            <span className={price > 0 ? "text-[#0ecb81]" : "text-[#ff0000]"}>
              {" "}
              {Formatting.formatPriceChangePerc(price)}
            </span>
          </h4>
          <h4>
            Price:{" "}
            <span className="text-[#0ecb81]">
              {Formatting.formatCurrentPrice(
                coin.market_data?.current_price?.usd
              )}
            </span>
          </h4>
          <h4>Symbol: {coin.symbol}</h4>
        </div>
        <div className=" overflow-y-scroll paragraph-container mt-9 px-4">
          <p
            className="text-[20px] description py-4 font-normal "
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Coin;

// <>
//   <div>
//     <h1 className="text-[60px] py-16 text-purple-900 ">
//       saasjkdhajshdkajsdk
//     </h1>
//     <p
//       className="text-[20px] description py-16 text-purple-900"
//       dangerouslySetInnerHTML={{
//         __html: DOMPurify.sanitize(
//           coin.description ? coin.description.en : ""
//         ),
//       }}
//     ></p>
//   </div>
// </>
