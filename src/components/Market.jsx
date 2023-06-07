import React from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

// import FetchData from "../data/FetchData";

const Market = ({ data }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/all-coins");
  }

  return (
    <div className="flex justify-center items-center pb-16 mt-16 " id="market">
      <div className="">
        <h1 className="text-[40px] mb-8">Market Updates</h1>
        <Table data={data} />
        <div className="flex justify-center  ">
          <button
            className=" border rounded-lg py-2 text-[15px] mt-5  hover:bg-gray-600 px-6"
            onClick={handleClick}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Market;
