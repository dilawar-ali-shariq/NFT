import "./App.css";
import Particle from "./components/Particle";

function App() {
  return (
    <div>
      <Particle/>
      <div>
        <div className="w-full bg-background tablet:h-[1006px] mobile:h-[906px] h-[806px] bg-cov bg-no-repeat">
          <div className="flex justify-center py-10">
            <div className="w-[1200px] mx-5 flex justify-center gap-14 z-10">
              <img src="./Assets/logo1.png" alt=""/>
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
        <div id="who-are-we" className="flex justify-center my-24">
          <div className="w-[1200px] flex justify-center mx-5 tablet:gap-20 gap-12 flex-wrap z-10">
            <img src="./Assets/image1.png" alt="" className="ml-4 mr-4" />
            <div className="text-[#1A1A1A] max-w-[650px] min-w-min">
              <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] leading-[72px] mb-5">
                Who <span className="font-bold">Are We</span>
              </h1>
              <p className="tablet:text-[17px] mobile:text-[15px] text-[13px] font-medium">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
                <br />
                <br />
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
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
                  <img src="./Assets/vision.png" alt=""/>
                </div>
                <h2 className="tablet:text-[35px] mobile:text-[30px] text-[25px] ml-4 font-semibold">
                  Vision
                </h2>
              </div>
              <p className="tablet:text-[20px] mobile:text-[18px] text-[16px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
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
                  <img src="./Assets/mission.png" alt=""/>
                </div>
                <h2 className="tablet:text-[35px] mobile:text-[30px] text-[25px] ml-4 font-semibold">
                  Mission
                </h2>
              </div>
              <p className="tablet:text-[20px] mobile:text-[18px] text-[16px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div id="how-we-do-it" className="flex justify-center my-14">
          <div className="w-[1200px] mx-5 z-10">
            <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] text-[#1A1A1A] text-center mb-14 font-semibold">
              Services
            </h1>
            <div className="flex gap-12 justify-center flex-wrap">
              <div className="text-[#1A1A1A] p-5 max-w-[368px] min-w-min cursor-pointer hover:bg-[#EEEEEE] rounded-2xl duration-300">
                <div className="text-[#5FA69C]">
                  <img src="./Assets/consultancy.png" alt=""/>
                </div>
                <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] my-3 font-semibold">
                  Consultancy
                </h3>
                <p className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled..
                </p>
              </div>
              <div className="text-[#1A1A1A] p-5 max-w-[368px] min-w-min cursor-pointer hover:bg-[#EEEEEE] rounded-2xl duration-300">
                <div className="text-[#5FA69C]">
                  <img src="./Assets/software.png" alt=""/>
                </div>
                <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] my-3 font-semibold">
                  Software
                </h3>
                <p className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled..
                </p>
              </div>
              <div className="text-[#1A1A1A] p-5 max-w-[368px] min-w-min cursor-pointer hover:bg-[#EEEEEE] rounded-2xl duration-300">
                <div className="text-[#5FA69C]">
                  <img src="./Assets/hardware.png" alt=""/>
                </div>
                <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] my-3 font-semibold">
                  Hardware Development
                </h3>
                <p className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled..
                </p>
              </div>
              <div className="text-[#1A1A1A] p-5 max-w-[368px] min-w-min cursor-pointer hover:bg-[#EEEEEE] rounded-2xl duration-300">
                <div className="text-[#5FA69C]">
                  <img src="./Assets/hosting.png" alt=""/>
                </div>
                <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] my-3 font-semibold">
                  Hosting
                </h3>
                <p className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled..
                </p>
              </div>
              <div className="text-[#1A1A1A] p-5 max-w-[368px] min-w-min cursor-pointer hover:bg-[#EEEEEE] rounded-2xl duration-300">
                <div className="text-[#5FA69C]">
                  <img src="./Assets/maintenance.png" alt=""/>
                </div>
                <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] my-3 font-semibold">
                  Maintenance
                </h3>
                <p className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled..
                </p>
              </div>
              <div className="text-[#1A1A1A] p-5 max-w-[368px] min-w-min cursor-pointer hover:bg-[#EEEEEE] rounded-2xl duration-300">
                <div className="text-[#5FA69C]">
                  <img src="./Assets/product.png" alt=""/>
                </div>
                <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] my-3 font-semibold">
                  Product Development
                </h3>
                <p className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-20 pb-24 bg-[#EEEEEE] z-10">
            <div className="w-[1200px] mx-5 z-20">
              <h1 className="tablet:text-[77px] mobile:text-[57px] text-[42px] text-[#1A1A1A] text-center mt-8 tablet:mb-16 mb-12 font-semibold">
                Values
              </h1>
              <div className="flex gap-5 justify-center flex-wrap">
                <div className="px-5 py-10 w-[224px] shadow-3xl bg-[white] text-[#1A1A1A] rounded-xl cursor-pointer hover:text-[white] hover:bg-[#1A1A1A] duration-300">
                  <div className="flex justify-center tablet:mb-8 mb-5">
                    <div className="flex items-center">
                      <img src="./Assets/check.png" alt=""/>
                    </div>
                    <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] ml-4 font-bold">
                      Agility
                    </h3>
                  </div>
                  <p className="tablet:text-[15px] mobile:text-[13.5px] text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown..
                  </p>
                </div>
                <div className="px-5 py-10 w-[224px] shadow-3xl bg-[white] text-[#1A1A1A] rounded-xl cursor-pointer hover:text-[white] hover:bg-[#1A1A1A] duration-300">
                  <div className="flex justify-center tablet:mb-8 mb-5">
                    <div className="flex items-center">
                      <img src="./Assets/check.png" alt=""/>
                    </div>
                    <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] ml-4 font-bold">
                      Integrity
                    </h3>
                  </div>
                  <p className="tablet:text-[15px] mobile:text-[13.5px] text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown..
                  </p>
                </div>
                <div className="px-5 py-10 w-[224px] shadow-3xl bg-[white] text-[#1A1A1A] rounded-xl cursor-pointer hover:text-[white] hover:bg-[#1A1A1A] duration-300">
                  <div className="flex justify-center tablet:mb-8 mb-5">
                    <div className="flex items-center">
                      <img src="./Assets/check.png" alt=""/>
                    </div>
                    <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] ml-4 font-bold">
                      Simplicity
                    </h3>
                  </div>
                  <p className="tablet:text-[15px] mobile:text-[13.5px] text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown..
                  </p>
                </div>
                <div className="px-5 py-10 w-[224px] shadow-3xl bg-[white] text-[#1A1A1A] rounded-xl cursor-pointer hover:text-[white] hover:bg-[#1A1A1A] duration-300">
                  <div className="flex justify-center tablet:mb-8 mb-5">
                    <div className="flex items-center">
                      <img src="./Assets/check.png" alt=""/>
                    </div>
                    <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] ml-4 font-bold">
                      Innovation
                    </h3>
                  </div>
                  <p className="tablet:text-[15px] mobile:text-[13.5px] text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown..
                  </p>
                </div>
                <div className="px-5 py-10 w-[224px] shadow-3xl bg-[white] text-[#1A1A1A] rounded-xl cursor-pointer hover:text-[white] hover:bg-[#1A1A1A] duration-300">
                  <div className="flex justify-center tablet:mb-8 mb-5">
                    <div className="flex items-center">
                      <img src="./Assets/check.png" alt=""/>
                    </div>
                    <h3 className="tablet:text-[25px] mobile:text-[22.5px] text-[20px] ml-4 font-bold">
                      Kindness
                    </h3>
                  </div>
                  <p className="tablet:text-[15px] mobile:text-[13.5px] text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default App;
