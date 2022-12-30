import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div
        id="contact-us"
        className="flex justify-center mb-20 pb-24 bg-[#5FA69C]"
      >
        <div className="w-[600px] mx-5 z-10">
          <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] text-[white] text-center mt-14 mb-14 font-bold">
            CONTACT US
          </h1>
          <div className="flex justify-center gap-5 flex-wrap w-full">
            <input
              type="text"
              placeholder="Name"
              className="tablet:w-[290px] w-full focus:outline-none bg-[#EEEEFD] p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Company"
              className="tablet:w-[290px] w-full focus:outline-none bg-[#EEEEFD] p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Email"
              className="tablet:w-[290px] w-full focus:outline-none bg-[#EEEEFD] p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone"
              className="tablet:w-[290px] w-full focus:outline-none bg-[#EEEEFD] p-3 rounded-lg"
            />
            <textarea
              type="text"
              placeholder="Message"
              className="w-full h-[140px] focus:outline-none bg-[#EEEEFD] p-3 rounded-lg"
            />
            <button className="text-[white] bg-[#1A1A1A] font-semibold tablet:text-[17px] mobile:text-[15px] text-[13px] px-10 py-3 rounded-md hover:opacity-80 cursor-pointer duration-300">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
