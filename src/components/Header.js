import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-background tablet:h-[1006px] mobile:h-[906px] h-[806px] bg-cov bg-no-repeat">
        <div className="flex justify-center py-10">
          <div className="w-[1200px] mx-5 flex justify-center gap-14 z-10">
            <img src="./Assets/logo1.png" alt="" />
            <div className="tablet:flex hidden text-[15px] text-center items-center font-semibold gap-5">
              <div className="text-[white] hover:border-b-4 border-[#5FA69C] p-2 cursor-pointer duration-300">
                HOME
              </div>
              <div className="text-[white] hover:border-b-4 border-[#5FA69C] p-2 cursor-pointer duration-300">
                <a href="#who-are-we">WHO ARE WE</a>
              </div>
              <div className="text-[white] hover:border-b-4 border-[#5FA69C] p-2 cursor-pointer duration-300">
                <a href="#what-do-we-want">WHAT DO WE WANT</a>
              </div>
              <div className="text-[white] hover:border-b-4 border-[#5FA69C] p-2 cursor-pointer duration-300">
                <a href="#what-we-do">WHAT WE DO</a>
              </div>
              <div className="text-[white] hover:border-b-4 border-[#5FA69C] p-2 cursor-pointer duration-300">
                <a href="#how-we-do-it">HOW WE DO IT</a>
              </div>
              <div className="text-[white] hover:border-b-4 border-[#5FA69C] p-2 cursor-pointer duration-300">
                <a href="#contact-us">CONTACT US</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-[white] tablet:mt-36 mobile:mt-32 mt-28 tablet:leading-[80px] mobile:leading-[60px] leading-[50px]">
          <h1 className="font-normal tablet:text-[70px] mobile:text-[50px] text-[35px] tracking-tight">
            New Flexibility
          </h1>
          <h1 className="font-bold tablet:text-[85px] mobile:text-[65px] text-[50px]">
            Technologies
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
