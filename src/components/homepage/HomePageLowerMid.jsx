import cardImage1 from "../../../public/homepage/cardImage1.svg";
import cardImage2 from "../../../public/homepage/cardImage2.svg";
import cart from "../../../public/homepage/cart.svg";
import eye from "../../../public/homepage/eye.svg";
import whiteHeart from "../../../public/homepage/whiteHeart.svg";
import star from "../../../public/homepage/star.svg";
import buttonArrow from "../../../public/homepage/buttonArrow.svg";
const HomePageLowerMid = () => {
  return (
    <div
      style={{
        backgroundImage: `url(./homepage/background.jpeg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="font-mont py-8 sm:py-20 slides"
    >
      <h3 className="text-white py-4 text-center text-[14px] font-mont font-bold sm:text-base">
        Practice Advice
      </h3>
      <p className="font-bold text-2xl md:text-3xl text-center sm:mt-0 text-white">
        iCare Love Treatment
      </p>
      <p className="text-center  text-white mt-6 text-[14px] sm:text-base w-[80%] sm:w-[60%] mx-auto">
        Heal from the loss of your relationship, and learn how to cherish love.
        Provided by professionals that are exclusively trained for love stories,
        we solve all problems.
      </p>
      <div className="flex sm:justify-center slides overflow-x-scroll gap-4 sm:gap-32 md:overflow-x-visible pr-3">
        <div className="mt-4 sm:mt-12 ml-3 sm:ml-0">
          <div className="relative w-[30vw] min-w-[310px] max-w-[450px]">
            <img
              src={cardImage2}
              className="w-[30vw] min-w-[310px] max-w-[450px]"
            />
            <button className="text-small absolute top-3 left-3 tracking-wider  rounded-md text-white sm:font-semibold bg-primary px-2 py-1">
              Sale
            </button>
            <img
              src={whiteHeart}
              className="absolute bottom-4 w-[40px] sm:w-auto  left-[25%]"
            />
            <img
              src={cart}
              className="absolute bottom-4 w-[40px] sm:w-auto  left-[43%]"
            />
            <img
              src={eye}
              className="absolute bottom-4 w-[40px] sm:w-auto  left-[61%]"
            />
          </div>
          <div className="bg-white w-[30vw] rounded-b-3xl pb-4 pt-1 sm:pb-4 px-3 min-w-[310px] max-w-[450px]">
            <div className="flex justify-between items-center px-2 sm:pt-4">
              <p className="text-[#474FA0] text-bold">Book now</p>
              <img src={star} className="w-[50px] sm:w-auto" />
            </div>
            <p className="text-[#252B42] font-bold ml-2 text-[18px] sm:text-2xl ">
              Couple
            </p>
            <p className="text-[#7E7E7E] text-small mx-2 mt-2 tracking-tight sm:tracking-normal leading-5 sm:leading-normal">
              Bring back the spark and ignite the love in your relationship
              Button: Learn More
            </p>
            <p className="ml-2 my-4">
              <span className="text-[#7E7E7E] font-light sm:font-bold pr-1">
                $16.48
              </span>
              <span className="text-[#FE6644] font-light sm:font-bold">
                $6.48
              </span>
            </p>
            <button className="font-bold text-white text-small sm:text-base bg-primary rounded-r-full rounded-l-full ml-2 w-[160px] sm:w-[200px] px-4 sm:px-6 py-3 sm:py-4">
              Learn More
              <span>
                <img src={buttonArrow} className="ml-4 inline" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-4 sm:mt-12 ml-3 sm:ml-0">
          <div className="relative w-[30vw] min-w-[310px] max-w-[450px]">
            <img
              src={cardImage1}
              className="w-[30vw] min-w-[310px] max-w-[450px]"
            />
            <button className="text-small absolute top-3 left-3 tracking-wider  rounded-md text-white sm:font-semibold bg-primary px-2 py-1">
              Sale
            </button>
            <img
              src={whiteHeart}
              className="absolute bottom-4 w-[40px] sm:w-auto  left-[25%]"
            />
            <img
              src={cart}
              className="absolute bottom-4 w-[40px] sm:w-auto  left-[43%]"
            />
            <img
              src={eye}
              className="absolute bottom-4 w-[40px] sm:w-auto  left-[61%]"
            />
          </div>
          <div className="bg-white w-[30vw] rounded-b-3xl pb-4 pt-1 sm:pb-4 px-3 min-w-[310px] max-w-[450px]">
            <div className="flex justify-between items-center px-2 sm:pt-4">
              <p className="text-[#474FA0] text-bold">Book now</p>
              <img src={star} className="w-[50px] sm:w-auto" />
            </div>
            <p className="text-[#252B42] font-bold ml-2 text-[18px] sm:text-2xl ">
              Individuals
            </p>
            <p className="text-[#7E7E7E] text-small mx-2 mt-2 tracking-tight sm:tracking-normal leading-5 sm:leading-normal">
              Find your inner peace and get in touch with your true self Button:
              Learn More
            </p>
            <p className="ml-2 my-4">
              <span className="text-[#7E7E7E] font-light sm:font-bold pr-1">
                $16.48
              </span>
              <span className="text-[#FE6644] font-light sm:font-bold">
                $6.48
              </span>
            </p>
            <button className="font-bold text-white text-small sm:text-base bg-primary rounded-r-full rounded-l-full ml-2 w-[160px] sm:w-[200px] px-4 sm:px-6 py-3 sm:py-4">
              Learn More
              <span>
                <img src={buttonArrow} className="ml-4 inline" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLowerMid;
