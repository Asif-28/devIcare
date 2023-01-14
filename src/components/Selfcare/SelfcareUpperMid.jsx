import mobileDesktopView from "../../../public/selfcare-mid/mobileDesktopView.svg";
import blueTick from "../../../public/selfcare-mid/blueTick.png";
import mobilePhoneView from "../../../public/selfcare-mid/mobilePhoneView.svg";

export default function SelfcareUpperMid() {
  return (
    <div className="font-mont overflow-x-hidden sm:mb-24 mb-8">
      <div className=" justify-evenly items-center xs:hidden sm:hidden md:flex lg:flex">
        <div>
          <img className="h-[600px]" src={mobileDesktopView} />
        </div>
        <div className="w-[40vw]">
          <div className="w-[100px] h-[4px] bg-[#6084F4]"></div>
          <p className="text-3xl font-bold mb-4 mt-4">
            Follow cources designed to help with specific issues
          </p>
          <p className="text-md text-[#7E7E7E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            consectetur eget id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suscipit consectetur eget id.
          </p>
          <p className="text-md text-[#7E7E7E] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            consectetur eget id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suscipit consectetur eget id.
          </p>
          <p className="font-bold text-xl mb-4">Courses available now</p>
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2">
              <img src={blueTick}></img>
              <p>Anxiety</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={blueTick}></img>
              <p>Depression</p>
            </div>
          </div>
          <p className="font-bold text-xl">Coming Soon</p>
          <div className="flex gap-4 sm:mb-4">
            <div className="flex flex-1 items-center gap-2">
              <img src={blueTick}></img>
              <p>Depression</p>
            </div>
            <div className="flex flex-1  items-center gap-2">
              <img src={blueTick}></img>
              <p>Chronic Illness</p>
            </div>
            <div className="flex  flex-1 items-center gap-2">
              <img src={blueTick}></img>
              <p>OCD</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex  flex-1 items-center gap-2">
              <img src={blueTick}></img>
              <p>Relationships</p>
            </div>
            <div className="flex  flex-1 items-center gap-2">
              <img src={blueTick}></img>
              <p>Eating Disorder</p>
            </div>
            <div className="flex  flex-1 items-center gap-2">
              <img src={blueTick}></img>
              <p>Trauma & Grief</p>
            </div>
          </div>
          <div className="flex ">
            <button className="font-bold text-small w-[160px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-2 py-2 md:py-3 rounded-md">
              Start your free Trial
            </button>
            <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="xs:block sm:block md:hidden lg:hidden w-[100vw] pl-3 mb-4 ">
        <div className="w-[100px] h-[4px] bg-[#6084F4]"></div>
        <p className="text-xl font-bold mb-4 mt-4">
          Follow cources designed to help with specific issues
        </p>
        <p className="text-small sm:text-base text-[#7E7E7E] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          consectetur eget id. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suscipit consectetur eget id.
        </p>
        <p className="text-small sm:text-base text-[#7E7E7E] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          consectetur eget id. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suscipit consectetur eget id.
        </p>
        <div className="flex justify-evenly font-mont text-[14px] items-center">
          <div className="pl-0 pr-4">
            <p className="font-bold text-[20px]  mb-4">Courses available now</p>
            <div className="flex items-center gap-2">
              <img src={blueTick}></img>
              <p>Anxiety</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={blueTick}></img>
              <p>Depression</p>
            </div>
            <p className="font-bold text-xl mt-6">Coming Soon</p>
            <div className="flex items-center gap-2 pb-1">
              <img src={blueTick}></img>
              <p>Relationships</p>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <img src={blueTick}></img>
              <p>Eating Disorder</p>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <img src={blueTick}></img>
              <p>Trauma & Grief</p>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <img src={blueTick}></img>
              <p>Relationships</p>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <img src={blueTick}></img>
              <p>Eating Disorder</p>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <img src={blueTick}></img>
              <p>Trauma & Grief</p>
            </div>
          </div>
          <div className="ml-3">
            <img src={mobilePhoneView} />
          </div>
        </div>
        <div className="flex sm:justify-center ">
          <button className="font-bold text-[12px]  mr-4 mt-4 font-mont bg-[#6184F4] text-white px-2 py-2 md:py-3 rounded-md">
            Start your free Trial
          </button>
          <button className="font-bold text-[12px]  font-mont px-4 mt-4 text-[#6184f4] rounded-md border-2 border-solid border-[#6184F4]">
            Explore Courses
          </button>
        </div>
      </div>
      <p className="sm:font-bold font-mont font-light text-[#7E7E7E] ml-[4vw] sm:ml-[47vw] sm:mt-0">
        Get a voucher? Read it
      </p>
    </div>
  );
}
