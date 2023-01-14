import React from "react";

const Hero = () => {
  return (
    <section className=" h-screen">
      <div className="absolute -z-10 w-full">
        <img
          className="hidden md:block w-screen "
          src="./header-assets/background-desktop.png"
        />
        <img className="md:hidden w-screen" src="./header-assets/background-mobile.png" />
      </div>
      <div className="text-white md:max-w-[50%] px-[10px] md:px-[100px] pt-[280px]">
        <img src="./header-assets/whiteLine.svg" />
        <h2 className="py-4 font-bold text-white text-4xl">
          We Will Soon Be Offering Group Therapy And Kids Therapy
        </h2>
        <p className="leading-[130%] tracking-wide">
          Answer a few questions to find a licensed therapist who fits your
          needs and preferences. Tap into the largest network of licensed,
          professional, board-certified providers.
        </p>
        <div className="flex flex-row gap-2 py-4">
          <a href="" className="py-2 px-6 font-medium rounded-md bg-blue-500">
            Get Quote Now
          </a>
          <a href="" className="py-2 px-6 font-medium rounded-md border">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
