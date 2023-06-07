import React from "react";
import Table from "../components/Table";
import FetchData from "../data/FetchData";
import Url from "../apis/Url";

const AllCoins = () => {
  var data = FetchData(Url[2]);

  return (
    <div className="bg-[#0f192e] min-h-[900px] text-white font-bold text-[50px] py-28 w-full flex justify-center ">
      <div className=" w-fit px-5">
        <h1 className="text-[25px] mb-6">Market Crypto currencies:</h1>
        <Table data={data} />
      </div>
    </div>
  );
};

export default AllCoins;
