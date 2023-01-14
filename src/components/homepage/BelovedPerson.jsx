import React from "react";

const BelovedPerson = () => {
  return (
    <div className="w-full md:px-[10%] md:py-[8%] pt-[5%] px-3  sm:px-[5%]  bg-blue-500">
      {/* flex container  */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* container one  */}
        <div className=" bg-blue-500 md:pr-[10%]">
          <img src="./beloved-assets/girlSitting.svg" alt="" />
        </div>
        {/* container two  */}
        <div className="text-white md:max-w-[50%] space-y-1 md:pt-32 py-3 md:space-y-5">
          <div className="w-[94px] h-[5px] bg-[#fff] "></div>
          <h2 className="py-4 font-bold text-white text-[24px] font-mont sm:text-4xl">
            Is a loved one going through a tough time?
          </h2>
          <p className=" font-mont font-small sm:font-base">
            A therapist may be just what you need
          </p>
          <div className="flex flex-row gap-2 pb-2 sm:pb-0 sm:py-4">
            <button className="font-bold text-small md:w-[160px] mr-4 mt-4 font-mont bg-[#fff] text-[#6184F4] px-4 py-2 md:py-4 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* flex-container  */}
      <div className="overflow-x-scroll slides z-10">
        <div className="md:grid md:grid-cols-2 flex md:w-full slides overflow-x-auto snap-mandatory scroll-smooth py-2 gap-6">
          {/* slide 1 */}
          <div className="relative mt-10 w-[70%] sm:w-[80%] h-[280px] sm:h-[480px] flex-shrink-0 flex flex-col items-center  space-y-6 bg-[#809CF6] rounded-2xl">
            <img
              src="./beloved-assets/phone.svg"
              className="w-[150px] sm:w-[200px]  md:w-[300px] pt-2 sm:pt4"
              alt=""
            />
            <img
              src="./beloved-assets/1.svg"
              className="w-[40px] sm:w-[60px] md:w-auto absolute -top-10 -right-0 sm:-top-14 sm:-right-8"
              alt=""
            />
            <h1 className="text-white font-mont px-2 sm:px-4 text-center sm:text-2xl">
              Book an urgent appointment on their behalf
            </h1>
          </div>
          {/* 2 */}
          <div className="relative mt-10 w-[70%] sm:w-[80%] h-[280px] sm:h-[480px] flex-shrink-0 flex flex-col items-center  space-y-6 bg-[#809CF6] rounded-2xl">
            <img
              src="./beloved-assets/girl.svg"
              className="w-[150px] sm:w-[300px] "
              alt=""
            />
            <img
              src="./beloved-assets/2.svg"
              className="w-[40px] sm:w-auto absolute bottom-6"
              alt=""
            />
            <h1 className="text-white font-mont px-2 sm:px-4 text-center sm:text-2xl">
              Talk to the therapist and specify the issue
            </h1>
          </div>
          {/* 3 */}
          <div className="relative mt-10 w-[70%] sm:w-[80%] h-[280px] sm:h-[480px] flex-shrink-0 flex flex-col items-center  space-y-6 bg-[#809CF6] rounded-2xl">
            <img
              src="./beloved-assets/doc.svg"
              className="w-[150px] sm:w-[200px]  md:w-[300px] pt-4"
              alt=""
            />
            <img
              src="./beloved-assets/3.svg"
              className="w-[40px] sm:w-[60px] md:w-auto absolute -top-10 -right-0 sm:-top-14 sm:-right-8"
              alt=""
            />
            <h1 className="text-white font-mont px-2 sm:px-4 text-center sm:text-2xl">
              Put the therapist in touch with your loved one
            </h1>
          </div>
          {/* 4 */}
          <div className="relative mt-10 w-[70%] sm:w-[80%] h-[280px] sm:h-[480px] flex-shrink-0 flex flex-col items-center  space-y-6 bg-[#809CF6] rounded-2xl">
            <img
              src="./beloved-assets/hand.svg"
              className="w-[150px] sm:w-[200px]  md:w-[300px] pt-2 sm:pt-4"
              alt=""
            />
            <img
              src="./beloved-assets/4.svg"
              className="w-[40px] sm:w-[60px] md:w-auto absolute -top-10 -right-0 sm:-top-14 sm:-right-8"
              alt=""
            />
            <br />
            <h1 className="text-white font-mont px-2 sm:px-4 text-center sm:text-2xl">
              Relax knowing that your loved one is in good hands
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelovedPerson;
