import React from "react";
import JohnDoe from "../../../public/testimonial/JohnDoe.svg";
import quotes1 from "../../../public/testimonial/quotes1.svg";
import quotes2 from "../../../public/testimonial/quotes2.svg";

const SelfCareUpper = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center ml-4 sm:ml-16 md:ml-24 py-4 sm:py-8">
        <div className="pb-14 mr-2">
          <h3 className="text-[14px]font-thin font-mont sm:font-extrabold sm:text-sm py-2 sm:py-3 text-[#6184F4]">
            Online training
          </h3>
          <div className="w-[94px] h-[5px] bg-[#6184F4] my-2 sm:my-4"></div>
          <h1 className="text-[22px] md:w-[60%] sm:text-4xl font-mont font-bold text-[#252B42] py-2 sm:py-4 leading-8 md:leading-tight">
            We Gonna Help You Become Happier & Solve Your Problem
          </h1>
          <p className="text-[12px] text-[#7E7E7E] sm:text-base font-mont font-normal py-2 sm:py-4 ">
            Overcame any hurdle or any other problem
          </p>
          <div className="flex ">
            <button className="font-bold text-xs sm:text-small sm:w-[160px] mr-2 sm:mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-3   md:py-4  rounded-md">
              Get Quote Now
            </button>
            <button className="font-bold text-xs sm:text-small md:w-[160px] font-mont px-2 sm:px-4 mt-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
              Learn more
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="./selfcare-upper/laptop.png"
            className="hidden sm:block"
            alt=""
          />
          <img
            src="./selfcare-upper/laptopmobile.svg"
            className="sm:hidden h-[300px] w-[240px]"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-4  ">
        <div className="w-[94px] h-[5px] bg-[#6184F4] my-2 sm:my-4"></div>
        <h1 className="text-[20px] sm:text-3xl font-mont font-bold text-center text-[#252B42] py-2 sm:py-4 leading-8 md:leading-tight">
          People Who Have Tried It Say This
        </h1>
        <p className="text-[#7E7E7E] text-small sm:text-base">
          Join others like you on a journey of ce f improvement
        </p>
        <div className="flex ">
          <button className="font-bold text-xs sm:text-small mr-2 sm:mr-4 mt-4 font-mont bg-[#6184F4] text-white px-6 py-3 md:py-4  rounded-md">
            Get Started
          </button>
          <button className="font-bold text-xs sm:text-small  font-mont px-6 sm:px-6 mt-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
            Learn more
          </button>
        </div>
      </div>
      <div className="bg-white slides  md:my-12 md:mx-16 overflow-x-scroll px-4 py-16 md:overflow-x-visible sm:flex xs:flex md:gap-x-8 md:gap-y-14  gap-4 sm:gap-8 md:grid md:grid-cols-3 ">
        <div className=" w-[75vw] sm:w-[60vw] md:w-[26vw] px-6 py-6 flex-shrink-0  flex flex-col justify-center gap-6 bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.1)] rounded-lg">
          <img
            src={JohnDoe}
            className="block mx-auto relative w-[75px] sm:w-auto bottom-14"
          />
          <p className="relative mx-auto text-center">
            <img src={quotes1} className="relative opacity-70" />
            <p className="px-8 text-[#7E7E7E] text-small sm:text-base font-mont">
              The service was absolutely impeccible. I see myself and my family
              visiting here much more frequently.
            </p>

            <img src={quotes2} className="absolute right-0 opacity-70" />
          </p>
          <div className="flex items-center gap-3 mx-auto">
            <div className=" w-[30px] h-[2px] bg-black "></div>
            <p className="text-[#252B42] font-bold text-xl font-mont">
              John Doe
            </p>
          </div>
        </div>

        <div className="w-[75vw] sm:w-[60vw] md:w-[26vw] px-6 py-5 flex-shrink-0  flex flex-col justify-center gap-6 bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.1)] rounded-lg">
          <img
            src={JohnDoe}
            className="block mx-auto relative  w-[75px] sm:w-auto bottom-14"
          />
          <p className="relative mx-auto text-center">
            <img src={quotes1} className="relative opacity-70" />
            <p className="px-8 text-[#7E7E7E] text-small sm:text-base font-mont">
              The service was absolutely impeccible. I see myself and my family
              visiting here much more frequently.
            </p>
            <img src={quotes2} className="absolute right-0 opacity-70" />
          </p>
          <div className="flex items-center gap-3 mx-auto">
            <div className=" w-[30px] h-[2px] bg-black "></div>
            <p className="text-[#252B42] font-bold text-xl font-mont">
              John Doe
            </p>
          </div>
        </div>

        <div className=" w-[75vw] sm:w-[60vw] md:w-[26vw] px-6 py-5 flex-shrink-0  flex flex-col justify-center gap-6 bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.1)] rounded-lg">
          <img
            src={JohnDoe}
            className="block mx-auto relative w-[75px] sm:w-auto bottom-14"
          />
          <p className="relative mx-auto text-center">
            <img src={quotes1} className="relative opacity-70" />
            <p className="px-8 text-[#7E7E7E] text-small sm:text-base font-mont">
              The service was absolutely impeccible. I see myself and my family
              visiting here much more frequently.
            </p>
            <img src={quotes2} className="absolute right-0 opacity-70" />
          </p>
          <div className="flex items-center gap-3 mx-auto">
            <div className=" w-[30px] h-[2px] bg-black "></div>
            <p className="text-[#252B42] font-bold text-xl font-mont">
              John Doe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCareUpper;
