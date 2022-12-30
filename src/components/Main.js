import React from "react";

const Main = () => {
  return (
    <div>  
      <div className="flex justify-center mb-20">
        <div className="w-[1200px] mx-5 flex flex-col tablet:flex-row gap-4">
          <div
            id="what-do-we-want"
            className="max-w-[592px] min-w-min cursor-pointer hover:shadow-4xl duration-300 mx-auto bg-[#5FA69C] text-[white] px-8 pb-20 pt-14 rounded-tl-3xl tablet:rounded-bl-3xl rounded-tr-3xl tablet:rounded-tr-none"
          >
            <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] flex flex-col tablet:leading-[75px] mobile:leading-[55px] leading-[45px] tracking-tighter">
              What Do <span className="font-bold">We Want</span>
            </h1>
            <div className="flex my-10">
              <div className="flex items-center">
                <img src="./Assets/vision.png" alt="" />
              </div>
              <h2 className="tablet:text-[35px] mobile:text-[30px] text-[25px] ml-4 font-semibold">
                Vision
              </h2>
            </div>
            <p className="tablet:text-[20px] mobile:text-[18px] text-[16px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div
            id="what-we-do"
            className="max-w-[592px] min-w-min cursor-pointer hover:shadow-4xl duration-300 mx-auto bg-[#1A1A1A] text-[white] px-8 pb-20 pt-14 tablet:rounded-tr-3xl tablet:rounded-bl-none rounded-bl-3xl rounded-br-3xl"
          >
            <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] flex flex-col tablet:leading-[75px] mobile:leading-[55px] leading-[45px] tracking-tighter">
              What <span className="font-bold">We Do</span>
            </h1>
            <div className="flex my-10">
              <div className="flex items-center">
                <img src="./Assets/mission.png" alt="" />
              </div>
              <h2 className="tablet:text-[35px] mobile:text-[30px] text-[25px] ml-4 font-semibold">
                Mission
              </h2>
            </div>
            <p className="tablet:text-[20px] mobile:text-[18px] text-[16px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;