import heart1 from "../../../public/homepage/heart1.svg";
import doctor1 from "../../../public/homepage/doctor1.svg";
import doctor2 from "../../../public/homepage/doctor2.svg";
import doctor2mo from "../../../public/homepage/doctor2mo.svg";
import heart2 from "../../../public/homepage/heart2.svg";
const HomeUpper = () => {
  return (
    <div className="mt-6 sm:mt-8">
      <div className="flex flex-wrap sm:justify-evenly items-center ">
        <div className="mx-4 mb-6 md:pl-16">
          <img src={heart1} className="mb-4" />
          <div className="flex flex-col">
            <p className="md:text-4xl sm:text-2xl xs:text-xl font-bold text-[#252B40] sm:mb-1  font-mont">
              Take A Step Towards
            </p>
            <p className="md:text-4xl sm:text-2xl xs:text-xl font-bold text-[#6184F4] sm:mb-1  font-mont">
              Online therapy
            </p>
          </div>
          <p className="md:text-4xl sm:text-2xl xs:text-xl font-bold text-[#252B40] sm:mb-1  font-mont">
            That Soothes Your Soul
          </p>
          {/* <p className="font-mont test-base">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p> */}
          <div className="flex ">
            <button className="font-bold text-small w-[160px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-3 rounded-md">
              Start Free Trial
            </button>
            <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
              Learn more
            </button>
          </div>
        </div>
        <div className="pr-10">
          <img src={doctor1} className="w-[360px] sm:w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap-reverse mt-8  justify-evenly items-center ">
        <div>
          <img className="hidden sm:block" src={doctor2} />
          <img className="sm:hidden w-[340px]" src={doctor2mo} />
        </div>
        <div className="mx-4 mb-6 w-[90vw] md:w-[40vw] lg:w-[40vw]">
          <img src={heart2} className="mb-4" />
          <p className="md:text-4xl sm:text-2xl xs:text-2xl font-bold text-[#252B40] mb-1  font-mont md:w-[80%]">
            We Provide More Than Just Therapy
          </p>
          <p className="text-small sm:text-base font-mont text-[#7E7E7E] sm:py-4">
            Lifelong mentors, friends, and access to highly experienced doctors,
            we provide the keys to happiness! Access expert advice 24/7 for your
            immediate relief. Discover our exclusive programs: Love treatment,
            Self Care and Coaching.
          </p>
          <div className="flex ">
            <button className="font-bold text-small w-[180px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-4 py-2 md:py-3 rounded-md">
              I'm Ready To Heal
            </button>
            {/* <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUpper;
