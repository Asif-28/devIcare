import React from "react";
import { DreamList } from "../../constants/constants";
const Dream = () => {
  return (
    <div
      className="bg-blue-500 w-full md:px-10 py-8 sm:py-0"
      style={{
        backgroundImage: `url(./dream-assets/background-home-dream.png)`,
      }}
    >
      {/* flex container  */}
      <div>
        {/* for the mobile header  */}
        <h2 className="text-white font-bold font-mont text-2xl sm:text-4xl px-4 pt-4 md:hidden">
          Our partners are more than just therapists
        </h2>
        <div className="flex flex-row justify-evenly space-x-[5%] items-center md:pl-16 md:pb-[5%] py-[2%]">
          {/* left section  */}
          <div className="md:w-[70%] w-[75%] flex flex-col md:space-y-5 space-y-2 pl-4">
            <h2 className="text-white font-bold font-mont text-4xl hidden md:block">
              Our partners are more than just therapists
            </h2>
            <p className="text-small leading-4 sm:leading-normal sm:text-xl font-mont text-[#fff] ">
              We are on a mission to solve your issues and make sure that you
              make progress on your healing journey
            </p>
            {DreamList.map((ele, index) => (
              <div className="flex flex-row items-center font-mont space-x-4 md:py-2">
                <img
                  src={`${ele.imgscr}`}
                  alt=""
                  className="bg-white w-[14%] h-[50%]  sm:w-auto rounded-[100%] p-2 "
                />
                <p className="text-white leading-5 sm:leading-normal font-light sm:font-normal text-[13px] sm:text-base md:max-w-[70%]">{`${ele.p}`}</p>
              </div>
            ))}
          </div>
          {/* right section  */}
          <div className="md:w-[50%] w-[25%] flex md:justify-self-auto justify-end">
            <img
              src="./dream-assets/man-desktop.svg"
              alt="standing man"
              className="rounded-full w-[450px] hidden md:block md:pr-10 "
            />
            <img
              src="./dream-assets/man-mobile.svg"
              className="md:hidden z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
