import React from "react";

const WhoAreWe = () => {
  return (
    <div>
      <div id="who-are-we" className="flex justify-center my-24">
        <div className="w-[1200px] flex justify-center mx-5 tablet:gap-20 gap-12 flex-wrap z-10">
          <img src="./Assets/image1.png" alt="" className="ml-4 mr-4" />
          <div className="text-[#1A1A1A] max-w-[650px] min-w-min">
            <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] leading-[72px] mb-5">
              Who <span className="font-bold">Are We</span>
            </h1>
            <p className="tablet:text-[17px] mobile:text-[15px] text-[13px] font-medium">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
              <br />
              <br />
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

export default WhoAreWe;
