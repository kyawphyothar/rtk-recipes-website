import React from "react";
import { BsFacebook, BsTwitter,BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-10 ">
      <footer className="footer footer-center p-5  bg-gray-300 dark:bg-[#2c2c2f]  text-lg font-medium">
        <div className="">
          <p className=" text-gray-600 dark:text-white/75">Copyright © 2023 - All right reserved by themealdb.com</p>
          <div className="">
            <p className="text-lg font-medium text-gray-600 dark:text-white/75">Join Community on</p>
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/TheDataDB/"
                target="_blank"
                className=""
              >
                <BsFacebook className=" text-blue-600 text-2xl" />
              </a>
              <a
                href="https://twitter.com/TheAudioDB"
                target="_blank"
                className=""
              >
                <BsTwitter className=" text-blue-500 text-2xl" />
              </a>
              <a
                href="#"
                target="_blank"
                className=""
              >
                <BsDiscord className=" text-blue-700 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
