import React from "react";

const LovetreatmentUpper = () => {
  return (
    <div className="bg-[#FF3E3E] min-h-[22rem] flex flex-col sm:flex-row sm:justify-evenly items-center py-12">
      <div className="ml-4 sm:ml-12 md:ml-2 mb-6 ">
        <h1 className="text-[24px] md:w-[60%] sm:text-4xl font-mont font-bold text-[#fff] py-2 sm:py-4 leading-8 md:leading-tight">
          Lo
          <span className="inline-block w-[15px] sm:w-auto">
            <img className="" src="./love-upper/heart.svg" alt="" />
          </span>
          e Treatment
        </h1>
        <p className="text-[14px] md:w-[90%] text-[#fff] sm:text-base font-mont tracking-wide font-normal py-2 sm:py-4 ">
          Love is most powerful feeling in the world, embrasse it now with us.
        </p>
        <div className="flex ">
          <button className="font-bold text-xs sm:text-small sm:w-[160px] mr-2 sm:mr-4 mt-4 font-mont bg-[#fff] text-[#6184F4] px-4 py-3   md:py-4  rounded-md">
            Get Quote Now
          </button>
          <button className="font-bold text-small md:w-[140px] font-mont px-4 mt-4 text-[#fff] rounded-md border-2 py-2 border-solid border-[#ffff]">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/love-upper/landing.svg"
          className="py-4 w-[80%] sm:w-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default LovetreatmentUpper;
