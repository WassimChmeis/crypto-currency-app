import Hero from "../components/Hero";
import Market from "../components/Market";
import Url from "../apis/Url";
import FetchData from "../data/FetchData";
import "../table.css";
import Details from "../components/Details";
import MobileApp from "../components/MobileApp";
import Footer from "../components/Footer";

const Home = () => {
  const url = Url[0];
  const url2 = Url[1];

  const data = FetchData(url);
  const data2 = FetchData(url2);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Error fetching data!");
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [url]);

  return (
    <div className=" px-5 font-bold min-h-[900px] text-white text-[22px] font-dominant pt-[160px] bg-[#0f192e] w-full ">
      <Hero data={data} />
      <Market data={data2} />
      <Details />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Home;
