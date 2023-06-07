/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "../index.css";
import Phone from "./Phone";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center pt-28 pb-40"
        id="app"
      >
        <h1 className="mb-16 text-[50px]">Mobile App</h1>
        <div className="flex sm:flex-row flex-col gap-14 justify-center items-center">
          <div className="max-w-[565px] order-2 sm:order-1  ">
            <div className="max-w-[600px]">
              <h3 className="text-[29px]">Earn Up To</h3>
              <div className="flex flex-col">
                <div className="flex  items-baseline">
                  <h1 className="text-[100px] text-[#ef693b]">20</h1>
                  <h1 className="text-[50px] text-[#ef693b]">%</h1>
                  <h2 className=" text-[50px]">APY</h2>
                </div>
                <p className="font-normal text-[18px] text-gray-500 ">
                  Manage all your DeFi and crypto from one place – a single
                  wallet to buy, sell, swap, track, and earn on your crypto! Our
                  industry-leading security protocols make CoinStats Wallet one
                  of the world's most secure crypto and DeFi wallets.
                </p>
              </div>
              <div className="flex gap-4 mt-16">
                <a href="https://www.apple.com/app-store/" target="_blank">
                  <button className="flex items-center border py-2 rounded-md px-5 hover:border-orange-500 hover:shadow-orange-500 shadow-md transition-colors">
                    <FaApple className="text-[30px] mr-2" />
                    iOS
                  </button>
                </a>
                <a href="https://play.google.com/store/apps" target="_blank">
                  <button className="flex items-center border py-2 rounded-md px-5 hover:border-orange-500 hover:shadow-orange-500 shadow-md transition-colors">
                    <FaGooglePlay className="mr-2" /> Android
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-[206px] flex justify-end sm:order-2 order-1 ">
            <Phone />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApp;
