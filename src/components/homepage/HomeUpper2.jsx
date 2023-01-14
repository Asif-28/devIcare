import pic1 from "../../../public/homepage/pic1.svg";
import pic2 from "../../../public/homepage/pic2.svg";
import pic3 from "../../../public/homepage/pic3.svg";
import yellowheart from "../../../public/homepage/yellowheart.svg";
import yellowhappy from "../../../public/homepage/yellowhappy.svg";
import yellowhappy2 from "../../../public/homepage/yellowhappy2.svg";
import pic1mo from "../../../public/homepage/pic1mo.svg";
import arrow from "../../../public/homepage/arrow.svg";
import hand from "../../../public/homepage/hand.svg";
const HomeUpper2 = () => {
  return (
    <div className="mt-4 bg-[#6084F4] overflow-x-hidden text-white font-mont py-6 md:py-16">
      <div className="absolute hidden md:block  right-40 w-[120px]">
        <img src={yellowheart} />
      </div>{" "}
      <div className="absolute md:hidden right-0 w-[60px]">
        <img src={yellowhappy2} />
      </div>
      <p className="font-semibold text-[18px] leading-6 sm:leading-10 sm:text-4xl w-[80%] md:text-center text-center sm:text-left  md:w-[45%] mx-4 md:pt-6 md:mx-auto">
        You are braver than you know, stronger than you seem and smarter than
        you think.
      </p>
      {/* <p className="text-small md:text-center mt-4 w-[95%]  md:w-[40%] ml-4  md:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        t
      </p> */}
      <div className="sm:flex md:flex-col lg:flex-col xs:flex gap-8 bg-[#6084F4] px-[6vw] sm:px-[10vw] md:overflow-x-visible overflow-x-scroll slides">
        <div className="relative mt-8 md:mt-12 sm:flex-row md:flex items-center justify-around bg-[#6084F4]">
          <div className="absolute hidden md:block bottom-0 -left-32 w-[120px] ">
            <img src={yellowhappy} />
          </div>
          <div className="block">
            <img src={pic1} className="hidden sm:block w-[350px] mb-2" />
            <img src={pic1mo} className="sm:hidden w-[350px] mb-2" />
          </div>

          <div className="">
            <div className="w-[100px] h-[4px] mb-2 sm:mb-8 bg-white"></div>
            <p className="font-semibold md:w-[350px]  text-[16px] sm:text-4xl md:font-bold  text-left  md:mx-auto ">
              You are special
            </p>
            {/* <p className="w-[300px] font-light text-small sm:text-base mt-4">
              we help you feel better. You deserve to be happy and to do so
              follow this simple steps fill the quiz properly
            </p> */}
            <div className="flex ">
              <button className="font-bold text-small w-[200px] mr-4 mt-4 font-mont bg-white text-[#6184F4] px-4 py-2 sm:py-3 rounded-md">
                Start Healing
              </button>
              {/* <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-white rounded-md border-2 border-solid border-white">
                Learn more
              </button> */}
            </div>
          </div>
        </div>

        <div className="mx-auto sm:hidden xs:hidden md:block">
          <img src={arrow} />
        </div>

        <div className="mt-8 md:mt-0  xs:flex-reverse sm:flex-reverse md:flex md:flex-row  items-center justify-around bg-[#6084F4] ">
          <div className="md:hidden">
            <img src={pic2} className="hidden sm:block w-[350px] mb-2" />
            <img src={pic1mo} className="sm:hidden w-[350px] mb-2" />
          </div>
          <div className="">
            <div className="w-[100px] h-[4px] mb-2 sm:mb-8 bg-white"></div>
            <p className="md:w-[350px] font-semibold text-[16px] sm:text-4xl md:font-bold  text-left  md:mx-auto">
              You deserve to be loved
            </p>

            {/* <p className="w-[300px] font-light text-small sm:text-base mt-4">
              We help you save your relations. you deserve to experience reel
             
            </p> */}
            {/* <br /> */}
            <div className="flex ">
              <button className="font-bold text-small w-[200px] mr-4 mt-4 font-mont bg-white text-[#6184F4] px-4 py-2 sm:py-3 rounded-md">
                Start Trusting Again
              </button>
              {/* <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-white rounded-md border-2 border-solid border-white">
                Learn more
              </button> */}
            </div>
          </div>
          <div className="sm:hidden xs:hidden md:block">
            <img src={pic2} className="w-[350px] mb-2" />
          </div>
        </div>

        <div className="mx-auto sm:hidden xs:hidden md:block rotate-90">
          <img src={arrow} />
        </div>

        <div className="mt-8 md:mt-0  sm:flex-row md:flex items-center justify-around bg-[#6084F4]  ">
          <div className="absolute hidden md:block right-24 w-[120px]">
            <img src={hand} />
          </div>
          <div className="">
            <img src={pic3} className="hidden sm:block w-[350px] mb-2" />
            <img src={pic1mo} className="sm:hidden w-[350px] mb-2" />
          </div>
          <div className="">
            <div className="w-[100px] h-[4px] mb-2 sm:mb-8 bg-white"></div>
            <p className="font-mediun md:w-[350px] font-semibold  text-[16px] sm:text-4xl md:font-bold text-left  md:mx-auto">
              You deserve everything
            </p>
            {/* <p className="w-[300px]  font-light text-small sm:text-base mt-4">
              We help you save your relations. You deserve to experience reel
              love and to do so you need courage
            </p> */}
            <div className="flex ">
              <button className="font-bold text-small w-[200px] mr-4 mt-4 font-mont bg-white text-[#6184F4] px-4 py-2 sm:py-3 rounded-md">
                Grow Confidence
              </button>
              {/* <button className="font-bold text-small md:w-[160px] font-mont px-4 mt-4 text-white rounded-md border-2 border-solid border-white">
                Learn more
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col pt-4 sm:pt-12">
        <h1 className="font-mediun font-semibold  text-[18px] sm:text-4xl md:font-bold ">
          You are our priority
        </h1>
        <div className="flex flex-col sm:flex-row ">
          <button className="font-bold text-small w-[240px] mr-4 mt-2 sm:mt-4 font-mont bg-white text-[#6184F4] px-4 py-2 sm:py-3 rounded-md">
            Embark on self care journey
          </button>
          <button className="font-bold text-small w-[240px] font-mont px-4 mt-2 sm:mt-4 text-white rounded-md border-2 py-2 sm:py-3 border-solid border-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeUpper2;
