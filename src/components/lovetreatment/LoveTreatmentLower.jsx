import React from "react";

const LoveTreatmentLower = () => {
  return (
    <div className="">
      {/* lower 01  */}
      <section className="bg-black ">
        {/* doodles  */}
        <div className="grid grid-cols-2 overflow-x-hidden overflow-y-hidden absolute">
          <div className="hidden md:block translate-y-[14%] w-[90%] ">
            <img src="./loveTreatment-assets/DoodlesLeft.svg" />
          </div>
          <div className="hidden md:block translate-y-[7%] translate-x-7 w-[80%] ">
            <img src="./loveTreatment-assets/DoodlesRight.svg" />
          </div>
        </div>
        {/* other doodles  */}
        <div className="absolute flex flex-row">
          <div className="hidden md:block">
            <img src="./loveTreatment-assets/top-left.svg" />{" "}
          </div>
          <div className="translate-x-[40%] sm:translate-x-[100%] md:translate-x-[300%]">
            <img src="./loveTreatment-assets/cloud.svg" />
          </div>
        </div>
        {/* container  */}
        <div className="mx-auto md:w-[90%] w-[95%] space-y-6 py-[10%] text-white relative">
          <div className="space-y-4">
            <div className="flex justify-center">
              <img src="./loveTreatment-assets/whiteLine.svg" />
            </div>
            <h2 className="md:block hidden font-medium text-4xl text-center">
              You have a Trauma?
            </h2>
            <h2 className="md:hidden block font-medium text-4xl text-center">
              Couples Therapy
            </h2>
          </div>
          <div className="overflow-x-hidden">
            <div className="slides flex flex-row md:gap-6 gap-2 overflow-x-auto">
              {/* card 01  */}
              <div className="rounded-2xl bg-white p-[3%] md:flex-shrink flex-shrink-0 md:w-auto w-1/2 h-auto space-y-2">
                <img src="./loveTreatment-assets/card01.svg" />
                <h3 className="text-black font-bold font-mont text-xl sm:text-2xl leading-5 pt-2">
                  Cheated in the past?
                </h3>
                <img src="./loveTreatment-assets/blueLine.svg" />
                <p className="text-slate-500 font-mont hidden sm:block text-small sm:text-[15px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi voluptatibus, minus dolores non sapiente vel quis
                  iure modi. Laudantium quae sit ab tenetur excepturi ipsum
                  ipsam laborum dolore aspernatur id!
                </p>
                <p className="text-slate-500 font-mont sm:hidden text-small ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              {/* card 02  */}
              <div className="rounded-2xl bg-white p-[3%] md:flex-shrink flex-shrink-0 md:w-auto w-1/2 h-auto space-y-2">
                <img src="./loveTreatment-assets/card02.svg" />
                <h3 className="text-black font-bold font-mont leading-5   text-xl sm:text-2xl">
                  Can't find the right person?
                </h3>
                <img src="./loveTreatment-assets/blueLine.svg" />
                <p className="text-slate-500 font-mont hidden sm:block text-small sm:text-[15px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi voluptatibus, minus dolores non sapiente vel quis
                  iure modi. Laudantium quae sit ab tenetur excepturi ipsum
                  ipsam laborum dolore aspernatur id!
                </p>
                <p className="text-slate-500 font-mont sm:hidden text-small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              {/* card 03  */}
              <div className="rounded-2xl bg-white p-[3%] md:flex-shrink flex-shrink-0 md:w-auto w-1/2 h-auto space-y-2">
                <img src="./loveTreatment-assets/card03.svg" />
                <h3 className="text-black font-bold text-xl sm:text-2xl">
                  Cheated Move on?
                </h3>
                <img src="./loveTreatment-assets/blueLine.svg" />
                <p className="text-slate-500 font-mont hidden sm:block text-small sm:text-[15px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi voluptatibus, minus dolores non sapiente vel quis
                  iure modi. Laudantium quae sit ab tenetur excepturi ipsum
                  ipsam laborum dolore aspernatur id!
                </p>
                <p className="text-slate-500 font-mont sm:hidden text-small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* lower 02  */}
      <section>
        {/* flex container  */}
        <div className="flex md:flex-row flex-col-reverse w-[90%] sm:mx-auto space-y-4 sm:py-[10%] py-4">
          <div className="md:w-[50%] flex justify-center">
            <img src="./loveTreatment-assets/lower.svg" />
          </div>
          <div className="md:w-[50%] space-y-4 pl-[5%]">
            <img src="./loveTreatment-assets/redLine.svg" />
            <h2 className="md:text-4xl font-mont text-3xl font-bold">
              We Help You Solve Any Situation
            </h2>
            <p className="text-slate-500 font-mont">
              Maybe have an old trauma ? We are here for you
            </p>
            <div className="flex flex-row gap-2 py-4">
              <a
                href=""
                className="py-2 px-6 font-smallfont-bold rounded-md bg-red text-white"
              >
                Get Started
              </a>
              <a
                href=""
                className="py-2 px-6 font-small font-bold rounded-md border text-red border-red "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoveTreatmentLower;
