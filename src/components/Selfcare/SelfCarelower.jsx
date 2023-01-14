import React from "react";

const SelfCarelower = () => {
  return (
    <div className="bg-white">
      <section className="w-[90%] mx-auto flex pb-[8%] md:flex-row justify-evenly flex-col">
        <div className="space-y-4 md:w-[40%]">
          <div className="w-[94px] h-[5px] bg-[#6184F4] "></div>
          <h2 className="sm:w-[70%] text-[23px] md:text-4xl tracking-tight font-mont font-bold">
            Become Happier, Clamer, More you
          </h2>
          <p className="text-[#7E7E7E] font-mont sm:tracking-tight text-small sm:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            consectetur eget id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suscipit consectetur eget id.
          </p>
          <p className="text-[#7E7E7E] font-mont sm:tracking-tight text-small sm:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            consectetur eget id.
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
        <div className="md:w-[60%] flex justify-center">
          <img
            src="./SelfCare/chartLower.svg"
            className="md:w-[50%]"
            alt="Stats Image"
          />
        </div>
      </section>

      <section className="ml-[5%] flex pb-[10%] flex-row justify-between gap-6 space-y-4 ">
        <div className="space-y-6 md:w-[40%] w-[80%] ">
          <img src="./SelfCare/blueLine.svg" alt="" />
          <h2 className="md:w-[100%] w-[90%] md:text-4xl font-bold font-mont text-2xl">
            Start Self-care For Free
          </h2>
          <p className="text-[#7E7E7E] font-mont sm:tracking-tight text-small sm:text-base">
            Take The First Step Towards Changing Your Life For The Better Today
          </p>
          <div className=" space-y-6 sm:space-y-8">
            <div className="relative">
              <div className="text-blue-500 p-1 border border-blue-500 rounded-md absolute -translate-y-[50%] bg-white right-0">
                <p className="max-w-fit font-mont text-small sm:text-base ">
                  {" "}
                  14 Days Hostal
                </p>
              </div>
              <div className="px-2 sm:px-4 py-4 space-y-1 sm:space-y-4 rounded-md border border-blue-500">
                <h3 className="font-mont font-bold text-[16px] sm:text-2xl">
                  Nnual-$69.99
                </h3>
                <p className="text-slate-500 text-small sm:text-base font-mont">
                  $5 Per Month/Cancel Anytime
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-blue-500 p-1 border border-blue-500 max-w-fit rounded-md absolute -translate-y-[50%] bg-white right-0">
                <p className="max-w-fit font-mont text-small sm:text-base ">
                  14 Days Hostal
                </p>
              </div>
              <div className="px-2 sm:px-4 py-4 space-y-1 sm:space-y-4 rounded-md border border-blue-500">
                <h3 className="font-mont font-bold text-[16px] sm:text-2xl">
                  Monthly-$99.99
                </h3>
                <p className="text-slate-500 text-small sm:text-base font-mont">
                  Automatic Reward/cancel Anytime
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="font-bold text-xs sm:text-small sm:w-[190px] mr-2 sm:mr-4 mt-4 font-mont bg-[#6184F4] text-[#fff] px-4 py-3   md:py-4  rounded-md">
              Start your free trial
            </button>
          </div>
          <p className="text-slate-500 md:font-bold font-mont text-small sm:text-base">
            Got a Vouchar?Read It
          </p>
          <div className="flex flex-row space-x-2">
            <img src="./SelfCare/star.svg" />
            <p className="text-slate-500 font-mont text-small sm:text-base">
              Trash Pilot
            </p>
          </div>
        </div>
        <div className="md:w-[40%] w-[20%] flex flex-row">
          <img
            className="hidden md:block"
            src="./SelfCare/tabletPhone.svg"
            alt="Tablet Phone Image"
          />
          <img className="md:hidden" src="./SelfCare/mobile.svg" alt="Mobile" />
        </div>
      </section>
    </div>
  );
};

export default SelfCarelower;
