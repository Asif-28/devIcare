import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const HomeMid = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    // THE TOP SECTION
    <div>
      <div className=" mx-3 sm:mx-16 md:mx-24 max-w-[1280px] lg:mx-auto md:pt-12 ">
        <div className="flex flex-col items-center pt-2 sm-pt-8 w-[100%]">
          {/* <h3 className="text-[#6184F4] py-4 text-[14px] font-mont font-bold sm:text-base">
            Steps Towards Abundance In Life
          </h3> */}
          <h1 className="font-mont font-bold py-2 sm:py-4  text-[24px] sm:text-4xl text-center">
            3 Steps Towards Abundance In Life
          </h1>
          <p className="text-[#7E7E7E] font-mont text-base sm:text-xl">
            How It Works
          </p>
        </div>
        {/* THE DOCTOR SECTION  */}
        <div className="flex flex-col md:flex-row pt-5 sm:pt-0">
          {/* Left section  */}
          <div className="flex-1  ">
            <img src="./home-mid/doctor.svg" alt="doctor" />
          </div>
          {/* Right section  */}
          <div className="flex-1 flex flex-col items-start mt-4 sm:mt-32 sm:pr-2 md:pr-20 ">
            <img
              src="./home-mid/heartbeat.svg"
              className="py-4 w-[100px] sm:w-auto"
              alt="heartbeat"
            />
            <div>
              <h1 className="font-mont font-bold text-[24px] sm:text-4xl py-2 md:py-4">
                Choose Your Therapist Or Be Matched With One
              </h1>
              <p className="text-[#7E7E7E] font-mont text-[14px] sm:text-base tracking-tight sm:tracking-normal font-normal pt-2 pb-4 md:py-4  md:w-[90%]">
                Answer a few questions to help us find a licensed therapist who
                fits your needs and preferences, or simply tap into our network
                of licensed, professional and board-certified providers and pick
                your own. Button: Find My Therapist
              </p>
              <button className="font-bold text-small md:w-[200px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-4 rounded-md">
                Find My Therapist
              </button>
              {/* <button className="font-bold text-small md:w-[140px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 py-2 border-solid border-[#6184F4]">
                Learn more
              </button> */}
            </div>
          </div>
        </div>

        {/* THE COMMUNICATION SECTION  */}
        <div className="flex flex-col md:flex-row-reverse mt-8 sm:mt-24">
          {/* right section  */}
          <div className="flex-1 md:flex md:justify-center ">
            <img src="./home-mid/girls.svg" alt="communication" />
          </div>
          {/* left section  */}
          <div className="flex-1 flex flex-col items-start md:mt-32 sm:pr-2 md:pr-20 ">
            <img
              src="./home-mid/heartbeat2.svg"
              className="py-4 w-[100px] sm:w-auto"
              alt="heartbeat"
            />
            <div>
              <h1 className="font-mont font-bold text-[24px] sm:text-4xl py-2 md:py-4">
                Communicate Your Way
              </h1>
              <p className="text-[#7E7E7E] font-mont text-[14px] sm:text-base tracking-tight sm:tracking-normal font-normal pt-2 pb-4 md:py-4  md:w-[90%]">
                Whether you prefer phone calls, video calls, or messages, we
                offer multiple options for you to connect with your therapist.
                You can also do it anonymously by using the incognito mode.
                Button: Get Started
              </p>
              <button className="font-bold text-small w-[160px] md:w-[200px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-4 rounded-md">
                Get Started
              </button>
              {/* <button className="font-bold text-small md:w-[140px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 py-2 border-solid border-[#6184F4]">
                Learn more
              </button> */}
            </div>
          </div>
        </div>

        {/* THE THERAPY YOU NEED  */}
        <div className="flex  flex-col md:flex-row mt-8 sm:mt-24">
          {/* Left section  */}
          <div className="flex-1  ">
            <img
              src="./home-mid/river.png"
              className="pl-20 sm:w-[70%] object-cover hidden sm:block
             "
              alt="doctor"
            />
            <img
              src="./home-mid/riversm.png"
              className="sm:hidden"
              alt="river"
            />
          </div>
          {/* Right section  */}
          <div className="flex-1 flex flex-col items-start sm:mt-20 sm:pr-2 md:pr-20 ">
            <img
              src="./home-mid/heartbeat3.svg"
              className="py-4 w-[100px] sm:w-auto"
              alt="heartbeat"
            />
            <div>
              <h1 className="font-mont font-bold text-[24px] sm:text-4xl py-2 md:py-4">
                Connect as much as you want, whenever you want.
              </h1>
              <p className="text-[#7E7E7E] font-mont text-[14px] sm:text-base tracking-tight sm:tracking-normal font-normal pt-2 pb-4 md:py-4  md:w-[90%]">
                Available 24/7, our network of therapists are here to help you
                whenever you need them. You can seek help multiple times until
                your issue is resolved. Button: Get Started
              </p>
              <button className="font-bold text-small w-[160px] md:w-[200px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-4 rounded-md">
                Get Started
              </button>
              {/* <button className="font-bold text-small md:w-[140px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 py-2 border-solid border-[#6184F4]">
                Learn more
              </button> */}
            </div>
          </div>
        </div>

        {/* GET IMMEDIATE RELIEF */}
        <div className="flex flex-col md:flex-row-reverse mt-8 sm:mt-24">
          {/* Right section  */}
          <div className="hidden sm:block flex-1 relative pl-10  ">
            <img
              src="./home-mid/Phone.svg"
              className="w-[70vw] sm:w-[75%] "
              alt="laptop"
            />
            <div className="absolute -top-4 right-3 -z-10 ">
              <img
                src="./home-mid/phonebackground.svg"
                className="sm:w-[90%]"
                alt=""
              />
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <img src="./home-mid/phonemo.svg" alt="" />
          </div>
          {/* Left section  */}
          <div className="flex-1 flex flex-col items-start mt-4 sm:mt-32 sm:pr-2 md:pr-20 ">
            {/* <img
            src="./home-mid/heartbeat2.svg"
            className="py-4 w-[100px] sm:w-auto"
            alt="heartbeat"
          /> */}
            <div>
              <h1 className="font-mont font-bold text-[24px] sm:text-4xl py-2 md:py-4 md:pr-4">
                Make a life-changing decision today
              </h1>
              <p className="text-[#7E7E7E] font-mont text-[14px] sm:text-base tracking-tight sm:tracking-normal font-normal pt-2 pb-4 md:py-4  md:w-[90%]">
                You are one click away from creating meaningful relationships
              </p>
              <button className="font-bold text-small md:w-[200px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-4 rounded-md">
                Get Free Trial
              </button>
              {/* <button className="font-bold text-small md:w-[140px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 py-2 border-solid border-[#6184F4]">
                Learn more
              </button> */}
            </div>
          </div>
        </div>

        {/* NETWORK  */}
        <div className="flex flex-col md:flex-row-reverse mt-8 sm:mt-24">
          {/* Left section  */}
          <div className="flex-1  ">
            <div className=" md:pl-20 md:w-[70%] md:mt-12">
              <img src="./home-mid/girl.svg " alt="girl" />
              <h1 className="p-4 font-mont text-[13px] sm:text-base ">
                Are You a provider?{" "}
                <span className="text-[#6184F4] font-bold cursor-pointer ">
                  Join Our Network
                </span>
              </h1>
            </div>
          </div>
          {/* Right section  */}
          <div className="flex-1 flex flex-col items-start mt-4 sm:mt-20 sm:pr-2 md:pr-20 overflow-x-hidden">
            <div className="w-[94px] h-[5px] bg-[#6184F4] "></div>

            <div>
              <h1 className="font-mont font-semibold text-[24px] sm:text-4xl py-4">
                A Wide Network Of Therapist From All Over The World To Provide
                Support In Every Field You Need.
              </h1>
              <div className="flex py-2 text-[10px] font-bold sm:text-base font-mont sm:font-normal sm:py-8">
                <div className="flex-1">
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Dipression</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Relationships</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Anxiety & Stress</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Parenting</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>LGBTQIA+</p>
                  </div>
                </div>
                <div className="flex-1">
                  {" "}
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Chronic illness</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Eating Disorder</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Anger Management</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Childhood abouse</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Mood Disorder</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>OCD</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Trauma & Grief</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Substance abuse</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Family Conflict</p>
                  </div>
                  <div className="flex items-center py-1">
                    <img
                      src="./home-mid/tick.svg"
                      className="w-[28px]"
                      alt="tick"
                    />
                    <p>Many More</p>
                  </div>
                </div>
              </div>

              <button className="font-bold text-small md:w-[200px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-4 rounded-md">
                Start Healing
              </button>
              {/* <button className="font-bold text-small md:w-[140px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 py-2 border-solid border-[#6184F4]">
                Learn more
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6084F4] flex flex-col md:flex-row md:justify-evenly md:items-center mt-14 sm:mt-24 py-8 md:py-28 ">
        <div className="relative mx-4 sm:mx-16 md:mx-24  ">
          <img
            src="./home-mid/leftarc.png"
            className="absolute top-14 right-0 w-[20%] hidden md:block"
            alt=""
          />
          <img
            src="./home-mid/bottomgirl.png"
            className="md:w-[400px] mx-auto hidden md:block"
            alt="doctor"
          />
          <img src="./home-mid/bottomgirl2.png" className="md:hidden" alt="" />
          <img
            src="./home-mid/Right.png"
            className="absolute top-14 -right-20 w-[40%] hidden md:block"
            alt="right"
          />
        </div>
        <div className="flex flex-col mx-4 sm:mx-16 md:mx-24 md:w-[40%] ">
          <div className="w-[94px] h-[5px] bg-[#fff] my-4 md:hidden "></div>
          <h1 className="font-mont font-bold text-[24px] text-white sm:text-4xl py-2 md:py-4 md:pr-10">
            Got questions? We’re happy to help!
          </h1>

          <div className="mt-4">
            <Accordion
              className="border-2 px-2 mb-3"
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className="text-white text-left text-[14px] sm:text-base font-mont font-light"
                onClick={() => handleOpen(1)}
              >
                Why should I choose iCare?
              </AccordionHeader>
              <AccordionBody className="font-mont text-white text-[14px] sm:text-base ">
                An integrated virtual clinic, iCare only offers the services of
                qualified psychologists who have years of experience working in
                the NHS. They also all have specialist training and receive
                regular supervision from experts in the field both from the UK
                and the US.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="border-2 mb-3 border-none "
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className="font-mont text-left text-[14px] sm:text-base font-light text-[#6084F4]  px-2  bg-white"
                onClick={() => handleOpen(2)}
              >
                Who will be helping me?
              </AccordionHeader>
              <AccordionBody className="text-mont text-white text-[14px] sm:text-base">
                Once you sign up, we will match you to an available therapist
                who fits your objectives, preferences, and the type of issues
                you are dealing with.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="border-2 px-2 mb-2"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className="text-white text-left text-[14px] sm:text-base  font-mont font-light"
                onClick={() => handleOpen(3)}
              >
                Why would I see a psychologist?
              </AccordionHeader>
              <AccordionBody className="text-mont text-white text-[14px] sm:text-base">
                Whether you are going through a particularly challenging time in
                your life, or you wish to understand yourself better, seeing a
                psychologist can be a useful tool to help you grow. Whatever the
                issue might be, our initial consultation can help you understand
                how psychological therapy can help you.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="flex py-2">
            <button className="font-bold text-small w-[160px] md:w-[200px]  font-mont bg-[#fff] text-[#6084F4] px-4 py-2 md:py-4 rounded-md">
              View All FAQs
            </button>
            {/* <button className="font-bold text-small w-[140px] border-white font-mont py-2 md:py-3 px-4  ml-2 text-[#fff] rounded-md border-2 border-solid ">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMid;
