import React from "react";

const HelpSolve = () => {
  return (
    <section className="bg-black ">
      {/* flex container  */}
      <div className="flex md:flex-row flex-col-reverse w-[90%] mx-auto py-6 sm:py-[10%]">
        {/* backgroudn svgs  */}
        <div className="absolute w-[200px] sm:w-auto opacity-70 -translate-x-10 sm:-translate-x-20 -translate-y-80 sm:-translate-y-40 md:z-30">
          <img
            src="./HelpSolver-assets/top-left-doodle.svg"
            alt="background img"
          />
        </div>
        <div className="absolute -translate-y-6 opacity-70  md:-translate-y-28 sm:mb-[70%] mb-[95%] ml-[55%]">
          <img
            src="./HelpSolver-assets/cloud-doodle.svg"
            alt="background img"
          />
        </div>
        <div className="hidden md:block absolute -mt-[6%] -ml-[5%] ">
          <img src="./HelpSolver-assets/left-doodle.svg" alt="background img" />
        </div>
        <div className="absolute opacity-80 ml-[55%] mt-[2%]">
          <img src="./HelpSolver-assets/bottom-right-doodle.svg" />
        </div>
        <div className="absolute ml-[40%] mt-[25%]">
          <img
            src="./HelpSolver-assets/heart-doodle.svg"
            className="max-w-[150px]"
          />
        </div>
        {/* image  */}
        <div className="md:w-[50%] pb-4 flex justify-center">
          <img
            src="./HelpSolver-assets/Rectangle 1.png"
            alt="girl image"
            className="md:w-[60%] hidden sm:block z-10"
          />{" "}
          <img
            src="./HelpSolver-assets/girl.png"
            alt="girl image"
            className="sm:hidden z-10"
          />
        </div>

        {/* content  */}
        <div className="md:w-[50%] space-y-4 md:pt-24 z-10">
          <div className="w-[94px] h-[5px] bg-[#6184F4] "></div>
          <h2 className="text-white  text-[24px] md:text-4xl font-mont font-bold">
            We help you navigate any situation
          </h2>
          <p className="text-slate-400 font-mont">
            Need help getting over someone and moving on with your life? You’re
            in the right place
          </p>
          <div className="flex flex-row gap-2 pb-6">
            <button className="font-bold text-small w-[250px] mr-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-4 rounded-md">
              Leave The Past In The Past
            </button>
            {/* <button className="font-bold text-small md:w-[140px] font-mont px-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSolve;
