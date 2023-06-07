import { FaWallet } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { ImStackoverflow } from "react-icons/im";

const data = [
  {
    key: 1,
    title: "Connect your wallet",
    content: "Use Trust Wallet, Metamask or to connect to the app.",
    iconName: FaWallet,
  },
  {
    key: 2,
    title: "RECEIVE YOUR OWN NFTS",
    content: "Invest all your crypto at one place on one platform.",
    iconName: FaSatelliteDish,
  },
  {
    key: 3,
    title: "CONFIRM TRANSACTION",
    content: "Earn by selling your crypto on our marketplace.",
    iconName: GiElectric,
  },
  {
    key: 4,
    title: "TAKE A MARKET TO SELL",
    content: "Discover, collect the right crypto collections to buy or sell",
    iconName: FaChessKnight,
  },
  {
    key: 5,
    title: "DRIVE YOUR COLLECTION",
    content: "We make it easy to Discover, Invest and manage.",
    iconName: ImStackoverflow,
  },
];

export default data;
