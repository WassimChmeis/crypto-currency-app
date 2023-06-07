import React from "react";
import { BsBatteryFull, BsWifi2 } from "react-icons/bs";
import { CgSignal } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";

const Phone = () => {
  return (
    <>
      <div className="w-[206px] border border-gray-600 rounded-3xl h-[420px] bg-[#] flex justify-center items-center">
        <div className="w-[85%] h-[93%] bg-[#0f192e]">
          <div className="flex justify-between">
            <div className="text-[10px] mt-[2px]">09:41</div>
            <div className="flex justify-center items-center text-[12px]">
              <BsWifi2 />
              <CgSignal className="mt-[3px]" />
              <BsBatteryFull className="mt-[2px]" />
            </div>
          </div>
          <div className="text-[12px] mt-2 ">
            <IoIosArrowBack />
          </div>
          <h1 className="text-[13px] mt-2 ">
            Choose with wallet you'd like to connect
          </h1>
          <p className="font-normal text-[8px] text-gray-500 my-2 ">
            You can connect an unlimited amount of different wallets Psst...
            thanks again for being PRO!
          </p>
          <div className=" rounded-md w-[100%] gap-1 h-9 items-center bg-[#402607] text-[8px] flex font-semibold">
            <div className="ml-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
                alt="/"
                className="w-7"
              />{" "}
            </div>
            <div>
              <h3 className="font-normal">MetaMask</h3>
              <h3 className="text-[#bb6e13]">Connect {">"}</h3>
            </div>
          </div>
          <div className="flex gap-2 mt-2 text-[7px]">
            <div className="rounded-md w-[50%] items-center flex h-9 bg-[#263700] gap-1">
              <img
                src="https://marketing.etorostatic.com/cache1/hp/v_251/images/meta/etoro_logo_social_share.png"
                alt="eToro Wallet"
                className="w-5 rounded-sm ml-2"
              />
              <div className="">
                <h3 className="font-normal">eToro Wallet</h3>
                <h3 className="text-[#608b00]">Connect {">"}</h3>
              </div>
            </div>
            <div className="rounded-md w-[50%] items-center flex h-9 bg-[#122f4e] font-normal">
              <img
                src="https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.png"
                alt="WalletConnect"
                className="w-7"
              />
              <div>
                <h3>WalletConnect</h3>
                <h3 className="text-[#3b9afd]">Connect {">"}</h3>
              </div>
            </div>
          </div>
          <h2 className="text-[10px] my-3">
            {" "}
            You can aslo add a wallet manually via its wallet address
          </h2>
          <div className="text-[9px] flex justify-between font-normal border-b-[1px] pb-2 border-gray-600 mt-2">
            <h3>Bitcoin Wallet</h3>
            <h3>{">"}</h3>
          </div>
          <div className="text-[9px] flex justify-between font-normal border-b-[1px] pb-2 border-gray-600 mt-2">
            <h3>Bitcoin Cash Wallet</h3>
            <h3>{">"}</h3>
          </div>
          <div className="text-[9px] flex justify-between font-normal border-b-[1px] pb-2 border-gray-600 mt-2">
            <h3>Cardano Wallet</h3>
            <h3>{">"}</h3>
          </div>
          <div className="text-[9px] flex justify-between font-normal border-b-[1px] pb-2 border-gray-600 mt-2">
            <h3>Dash Wallet</h3>
            <h3>{">"}</h3>
          </div>
          <div className="h-[2px] rounded-full w-16 mx-auto mt-2 bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Phone;
