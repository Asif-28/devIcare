import React from "react";

const SelfCareLower1 = () => {
  return (
    <div>
      <section className="sm:mx-auto flex pt-8 pb-8 sm:pt-24 sm:pb-24 md:flex-row mx-4 justify-evenly sm:flex-col flex-col-reverse">
        <div className="flex justify-center mt-5 sm:pl-32 w-[280px] sm:w-auto mx-auto">
          <img src="./SelfCare/graph.png" className="" alt="Stats Image" />
        </div>
        <div className="space-y-4 md:w-[40%]">
          <div className="w-[94px] h-[5px] bg-[#6184F4] "></div>
          <h2 className="sm:w-[70%] text-[23px] md:text-4xl tracking-tight font-mont font-bold">
            Track your progress over time
          </h2>
          <p className="text-[#7E7E7E] font-mont sm:tracking-tight text-small sm:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            consectetur eget id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suscipit consectetur eget id.
          </p>

          <div>
            <button className="font-bold text-xs sm:text-small sm:w-[190px] mr-2 sm:mr-4 mt-4 font-mont bg-[#6184F4] text-[#fff] px-4 py-3   md:py-4  rounded-md">
              Start your free trial
            </button>
          </div>
          <p className="text-[#7E7E7E] text-[14px] font-mont font-light sm:font-bold">
            Got a Vouchar?Read It
          </p>
        </div>
      </section>
    </div>
  );
};

export default SelfCareLower1;
