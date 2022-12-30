import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center mb-20">
        <div className="w-[600px] mx-5 z-10">
          <div className="flex justify-center">
            <img src="./Assets/logo2.png" alt="" className="mb-10" />
          </div>
          <div className="flex justify-center flex-wrap tablet:gap-8 gap-5 text-[#1A1A1A] tablet:text-[17px] mobile:text-[15px] text-[13px]">
            <p className="font-bold cursor-pointer hover:text-[#5FA69C] duration-300">
              NFT © 2022 All rights reserved
            </p>
            <p className="font-bold cursor-pointer hover:text-[#5FA69C] duration-300">
              Privacy Policy
            </p>
            <p className="font-bold cursor-pointer hover:text-[#5FA69C] duration-300">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;