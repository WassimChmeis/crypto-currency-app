/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MdSegment, MdClear } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) setNav(!nav);
  };

  return (
    <div className=" font-dominant bg-[#0f172a] fixed w-full flex justify-between items-center mx-auto px-5 md:px-12 text-white  h-20 shadow-md mb-1 ">
      <a href="/">
        <h1 className=" font-bold text-xl flex items-center">
          KRYPTO <BsCurrencyBitcoin className=" text-[#FFD700] text-[28px]" />
        </h1>
      </a>
      <ul className="font-semibold text-[17px] md:flex hidden">
        <li className="p-3">
          <a
            href=""
            className="hover:text-blue-500 transition-colors "
            onClick={(event) => handleClick(event, "hero")}
          >
            Home
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            className="hover:text-blue-500 transition-colors"
            onClick={(event) => handleClick(event, "market")}
          >
            Market
          </a>
        </li>
        <li className="p-3">
          <a
            href=""
            className="hover:text-blue-500 transition-colors"
            onClick={(event) => handleClick(event, "chooseus")}
          >
            Choose Us
          </a>
        </li>
        <li className="p-3">
          <a
            href=""
            className="hover:text-blue-500 transition-colors"
            onClick={(event) => handleClick(event, "app")}
          >
            App
          </a>
        </li>
      </ul>
      <div className="md:flex gap-3 hidden justify-between items-center text-[25px]">
        <div className="hover:text-blue-500 text-[28px]">
          <a
            href="https://www.linkedin.com/in/wassim-chmeis-988678236/"
            target="_blank"
          >
            <TbBrandLinkedin />
          </a>
        </div>
        <div className="hover:text-blue-500 text-[23px]">
          <a href="https://github.com/WassimChmeis" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
      <div onClick={handleNav} className="text-3xl block  md:hidden">
        <MdSegment />
      </div>
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-full h-screen bg-[#0f172a]  ease-in-out duration-500"
            : " ease-linear duration-700 fixed left-[-100%] top-0"
        }
      >
        <div className=" p-6 md:hidden">
          <div onClick={handleNav} className="text-4xl  burger md:hidden">
            <MdClear />
          </div>
          <ul className="p-4  text-center pt-24">
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600 ">
              <a href="/home" onClick={(event) => handleClick(event, "home")}>
                Home
              </a>
            </li>
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600">
              <a href="#" onClick={(event) => handleClick(event, "market")}>
                About
              </a>
            </li>
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600">
              <a href="#" onClick={(event) => handleClick(event, "chooseus")}>
                Projects
              </a>
            </li>

            <li className="p-4 border-b py-6 font-semibold">
              <a href="#" onClick={(event) => handleClick(event, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
