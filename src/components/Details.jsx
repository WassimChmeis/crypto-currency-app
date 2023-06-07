import React from "react";
import Card from "./Card";
import { FaWallet } from "react-icons/fa";
import data from "../data/cardsData";

const Details = () => {
  function createCard(cardItem) {
    return (
      <Card
        key={cardItem.key}
        title={cardItem.title}
        content={cardItem.content}
        icon={cardItem.iconName}
      />
    );
  }

  return (
    <>
      <div
        className="flex flex-col justify-center items-center py-20"
        id="chooseus"
      >
        <h1 className="sm:text-[60px] text-[40px] mb-16">What We Offer</h1>
        <div className=" flex justify-center items-center gap-16 flex-wrap">
          {data.map(createCard)}
          {/* <Card
            title="connect your wallet"
            content="Use Trust Wallet, Metamask or to connect to the app."
            icon={data[0].iconName}
          />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </>
  );
};

export default Details;
