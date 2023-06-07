import React from "react";
import { FaWallet } from "react-icons/fa";

const Card = (props) => {
  const Icon = props.icon;
  return (
    <>
      <div className="flex w-[100%] sm:w-[350px] sm:h-[220px] hover:border-orange-400 border border-gray-600 rounded-3xl">
        <div className="w-16 m-5 h-16 rounded-lg  text-[35px] flex justify-center items-center bg-orange-400">
          {Icon && <Icon />}
        </div>
        <div className=" w-[70%] mt-5">
          <h3 className=" uppercase">{props.title}</h3>
          <p className=" font-normal">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
