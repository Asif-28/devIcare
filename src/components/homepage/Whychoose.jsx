import React from "react";

const Whychoose = () => {
  return (
    <section className="bg-blue-500 pb-20 sm:pb-32 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-row justify-end mr-[5%]">
          <img
            src="./WhyChoose-assets/map.svg"
            className="absolute z-10 max-w-[60%] -translate-y-20"
          />
        </div>
        <div className="text-white space-y-1 sm:space-y-4  sm:pt-6 pl-[5%] pb-4">
          <div className="w-[94px] h-[5px] bg-[#fff] "></div>
          <h2 className="py-2 sm:py-4 font-bold text-white font-mont text-[24px] sm:text-4xl md:max-w-[60%]">
            Why choose iCare?
          </h2>
          <p className="leading-[130%] font-mont text-small sm:text-base tracking-wide">
            Voted the most advanced integrated therapy platform
          </p>
          {/* <div className="flex flex-row gap-2 pb-2 sm:pb-4">
            <button className="font-bold text-small md:w-[160px] mr-4 mt-4 font-mont bg-[#fff] text-[#6184F4] px-4 py-2 md:py-3 rounded-md">
              Get Started
            </button>
            <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-[#fff] rounded-md border-2 border-solid border-[#fff]">
              Learn more
            </button>
          </div> */}
        </div>
        {/* cards section  */}
        <div className="flex flex-row mx-auto  px-4 sm:px-0 md:grid md:grid-cols-3 gap-6  md:w-[90%] slides overflow-x-scroll overflow-y-hidden snap-mandatory scroll-smooth">
          {/* card 01  */}

          <div className="flex-shrink-0 w-[60vw] h-[48vh] sm:h-auto sm:w-auto rounded-xl  bg-white px-4 sm:px-8 max-w-sm relative">
            <img
              src="./WhyChoose-assets/purpleBlock.svg"
              className="-translate-x-10"
            />
            <div className="space-y-4 -translate-y-6">
              <h3 className="font-bold text-[20px] sm:text-2xl">
                100% guarantee
              </h3>
              <img src="./WhyChoose-assets/blue-line.svg" />
              <p className="text-slate-500 leading-5 sm:leading-normal font-normal w-[100%] sm:w-[80%]">
                By offering the services of only the best therapists, we
                guarantee a positive outcome 100% of the time, with 100%
                confidentiality
              </p>
            </div>
          </div>
          {/* card 02  */}
          <div className="flex-shrink-0 w-[65vw] h-[48vh] sm:h-auto  sm:w-auto rounded-xl bg-white px-4 sm:px-8 pt-0 max-w-sm relative">
            <img
              src="./WhyChoose-assets/GreenBlock.svg"
              className="-translate-x-10"
            />
            <div className="space-y-4 -translate-y-6">
              <h3 className="font-bold text-[20px] sm:text-2xl">
                Exclusive Programs
              </h3>
              <img src="./WhyChoose-assets/blue-line.svg" />
              <p className="text-slate-500 leading-5 sm:leading-normal w-[95%] sm:w-[80%]">
                We focus on concerns that require special attention, such as
                Love programs, Kids programs, and Addiction Rehab programs
              </p>
            </div>
          </div>
          {/* card 03  */}
          <div className="flex-shrink-0 w-[65vw] h-[48vh] sm:h-auto  sm:w-auto rounded-xl bg-white px-4 sm:px-8 pt-0 max-w-sm relative">
            <img
              src="./WhyChoose-assets/DarkBlueIcon.svg"
              className="-translate-x-10"
            />
            <div className="space-y-4 -translate-y-6">
              <h3 className="font-bold text-[20px] sm:text-2xl">
                Qualified therapist
              </h3>
              <img src="./WhyChoose-assets/blue-line.svg" />
              <p className="text-slate-500 leading-5 sm:leading-normal w-[95%] sm:w-[80%]">
                We offer a wide variety of licensed, professional,
                board-certified doctors who speak multiple languages
              </p>
            </div>
          </div>
          {/* card 04  */}
          <div className="flex-shrink-0 w-[65vw] h-[48vh] sm:h-auto  sm:w-auto rounded-xl bg-white px-4 sm:px-8 pt-0 max-w-sm relative">
            <img
              src="./WhyChoose-assets/RedBlock.svg"
              className="-translate-x-10"
            />
            <div className="space-y-4 -translate-y-6">
              <h3 className="font-bold text-[20px] sm:text-2xl">Affordable</h3>
              <img src="./WhyChoose-assets/blue-line.svg" />
              <p className="text-slate-500 leading-5 sm:leading-normal w-[95%] sm:w-[80%]">
                iCare makes investing in your mental health more affordable than
                ever before
              </p>
            </div>
          </div>
          {/* card 05 */}
          <div className="flex-shrink-0 w-[65vw] h-[48vh] sm:h-auto  sm:w-auto rounded-xl bg-white px-4 sm:px-8 pt-0 max-w-sm relative">
            <img
              src="./WhyChoose-assets/YellowBlock.svg"
              className="-translate-x-10"
            />

            <div className="space-y-4 -translate-y-6">
              <h3 className="font-bold text-[20px] sm:text-2xl">
                Fast And Easy
              </h3>
              <img src="./WhyChoose-assets/blue-line.svg" />
              <p className="text-slate-500 leading-5 sm:leading-normal w-[95%] sm:w-[80%]">
                Provides you with instant solutions and fast access to your
                therapist in less than 60 minutes
              </p>
            </div>
          </div>
          {/* card 06  */}
          <div className="flex-shrink-0 w-[65vw] h-[48vh] sm:h-auto  sm:w-auto rounded-xl bg-white px-4 sm:px-8 pt-0 max-w-sm relative">
            <img
              src="./WhyChoose-assets/BlueBlock.svg"
              className="-translate-x-10"
            />
            <div className="space-y-4 -translate-y-6">
              <h3 className="font-bold text-[20px] sm:text-2xl">
                Free coaching
              </h3>
              <img src="./WhyChoose-assets/blue-line.svg" />
              <p className="text-slate-500 leading-5 sm:leading-normal w-[95%] sm:w-[80%]">
                Free coaching access provided by best therapist and succesful
                people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
