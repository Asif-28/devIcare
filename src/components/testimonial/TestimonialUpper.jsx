import testimonialStarDesktop from "./testimonial/testimonialStarDesktop.svg";
import testimonialGirl from "./testimonial/testimonialGirl.svg";
import arrowButton from "./testimonial/arrowButton.svg";
import testimonialBlueStar from "./testimonial/testimonialBlueStar.svg";
const TestimonialUpper = () => {
  return (
    <div className="md:flex md:flex-row gap-8  sm:flex  sm:flex-col-reverse xs:flex xs:flex-col-reverse   my-12 mx-12">
      <div className="md:w-[60%] md:h-[90vh] pt-24  relative">
        <div className="w-[94px] h-[5px] bg-[#6184F4] "></div>
        <div className="text-[#252B42] font-bold text-4xl mt-5 font-mons tracking-[3px]">
          Testimonials
        </div>
        <div className="text-[#7E7E7E] mt-4 md:w-[30vw] text-[18px]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </div>
        <div className="mt-4">
          <button className="text-bold bg-[#6184F4] text-white px-8 py-2 rounded-sm">
            Get Started
          </button>
          <button className="text-bold py-[6px] px-8 ml-2 text-[#6184f4] rounded-sm border-2 border-solid border-[#6184F4]">
            Learn more
          </button>
        </div>
        <div>
          <img
            src={testimonialStarDesktop}
            className="md:block hidden absolute left-[24vw] top-0"
          />
        </div>
      </div>
      <div className="relative md:w-[40vw] sm:w-[90vw] ">
        <img
          src={testimonialGirl}
          className="relative sm:w-[300px]  md:w-[400px] md:h-[450px] block ml-4  "
        />
        {/* <img src={arrowButton} className="absolute top-[30%] left-[55%]  md:left-[85%]"/> */}
        <div className="relative bottom-16 left-16 w-[80%] min-w-[200px]  px-12 py-8 border-l-4 border-[#F14A52] rounded-md bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.3)]">
          <div>
            <div className="w-[100px] h-[2px] rotate-90 relative right-[65px] top-[54px]  bg-[#7E7E7E]"></div>
            <p className="text-[#7E7E7E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
          <div className="flex mt-8 justify-between ">
            <p className="text-[#252B42] font-bold">Gloria Rose</p>
            <img src={testimonialBlueStar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialUpper;
