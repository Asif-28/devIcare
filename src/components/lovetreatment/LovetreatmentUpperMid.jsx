import cardImage1 from "../../../public/homepage/cardImage1.svg";
import cardImage2 from "../../../public/homepage/cardImage2.svg";
import cart from "../../../public/homepage/cart.svg";
import eye from "../../../public/homepage/eye.svg";
import whiteHeart from "../../../public/homepage/whiteHeart.svg";
import star from "../../../public/homepage/star.svg";
import buttonArrow from "../../../public/homepage/buttonArrow.svg";
import longLine from "../../../public/loveCardsAssets/longLine.svg";
import shortLine from "../../../public/loveCardsAssets/shortLine.svg";

export default function IloveUpperMid() {
  return (
    <div className="font-mont my-4 md:max-w-[1280px] md:mx-auto ">
      <div className="w-[100px] h-[4px] bg-red mx-auto"></div>
      <div className="font-bold text-2xl sm:text-3xl text-center mt-6">
        We Offer you Indivisual as well as Couple Therapy
      </div>

      <div className="flex ml-[4vw] sm:ml-[10vw] overflow-x-scroll gap-6 md:gap-28 md:overflow-x-visible slides">
        <div className="mt-12 ">
          <div className="relative w-[30vw] min-w-[250px]">
            <img src={cardImage1} className="w-[30vw] min-w-[250px]" />
            <button className="absolute top-3 left-3 tracking-normal sm:tracking-wider  rounded-md text-white font-bold bg-red px-2 py-1">
              Sale
            </button>
            <img
              src={cart}
              className="absolute bottom-1 w-[45px] sm:w-auto left-[20%]"
            />
            <img
              src={eye}
              className="absolute bottom-1 w-[45px] sm:w-auto left-[40%]"
            />
            <img
              src={whiteHeart}
              className="absolute bottom-1 w-[45px] sm:w-auto left-[60%]"
            />
          </div>
          <div className="bg-white shadow-xl w-[30vw] text-left rounded-b-lg py-4 px-3 min-w-[250px]">
            <div className="flex justify-between items-center px-2 pt-4">
              <p className="text-red text-bold">Book now</p>
              <svg
                width="70"
                height="33"
                viewBox="0 0 70 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.988281"
                  width="69.0136"
                  height="32.0136"
                  rx="15"
                  fill="#F14A52"
                />
                <path
                  d="M31.1203 13.4196C31.0627 13.2498 30.9565 13.1006 30.8151 12.9904C30.6736 12.8802 30.5029 12.8139 30.3242 12.7996L25.095 12.3841L22.8322 7.37506C22.7601 7.21373 22.6429 7.07671 22.4947 6.98052C22.3465 6.88434 22.1736 6.8331 21.9969 6.83301C21.8202 6.83291 21.6472 6.88395 21.4989 6.97998C21.3506 7.076 21.2332 7.2129 21.161 7.37415L18.8982 12.3841L13.669 12.7996C13.4933 12.8135 13.3254 12.8777 13.1852 12.9846C13.0451 13.0915 12.9387 13.2365 12.8788 13.4022C12.8189 13.568 12.808 13.7475 12.8475 13.9193C12.8869 14.091 12.975 14.2478 13.1012 14.3708L16.9656 18.1379L15.5989 24.0559C15.5574 24.235 15.5707 24.4225 15.6371 24.594C15.7034 24.7655 15.8198 24.913 15.9711 25.0175C16.1224 25.1221 16.3016 25.1787 16.4855 25.1801C16.6693 25.1815 16.8494 25.1276 17.0022 25.0254L21.9966 21.6958L26.9909 25.0254C27.1472 25.1291 27.3314 25.1825 27.5189 25.1784C27.7064 25.1743 27.8881 25.1129 28.0397 25.0024C28.1912 24.8919 28.3053 24.7377 28.3666 24.5604C28.4278 24.3832 28.4333 24.1914 28.3824 24.0109L26.7047 18.1406L30.8653 14.3965C31.1377 14.1507 31.2377 13.7673 31.1203 13.4196Z"
                  fill="#FFCE31"
                />
                <path
                  d="M39.0463 18.4308V17.7028L44.2403 11.2068H45.3603L40.2083 17.7028L39.6623 17.5348H47.5443V18.4308H39.0463ZM44.5763 21.0068V18.4308L44.6043 17.5348V15.2668H45.5843V21.0068H44.5763ZM49.4996 21.0768C49.2943 21.0768 49.117 21.0022 48.9676 20.8528C48.8276 20.7035 48.7576 20.5215 48.7576 20.3068C48.7576 20.0828 48.8276 19.9008 48.9676 19.7608C49.117 19.6208 49.2943 19.5508 49.4996 19.5508C49.705 19.5508 49.8776 19.6208 50.0176 19.7608C50.167 19.9008 50.2416 20.0828 50.2416 20.3068C50.2416 20.5215 50.167 20.7035 50.0176 20.8528C49.8776 21.0022 49.705 21.0768 49.4996 21.0768ZM54.7624 11.1228C55.6304 11.1228 56.3631 11.3188 56.9604 11.7108C57.5578 12.0935 58.0104 12.6488 58.3184 13.3768C58.6264 14.1048 58.7804 14.9868 58.7804 16.0228C58.7804 17.1242 58.5891 18.0528 58.2064 18.8088C57.8331 19.5648 57.3104 20.1342 56.6384 20.5168C55.9664 20.8995 55.1871 21.0908 54.3004 21.0908C53.8618 21.0908 53.4418 21.0488 53.0404 20.9648C52.6484 20.8808 52.2938 20.7455 51.9764 20.5588L52.3824 19.7468C52.6344 19.9148 52.9238 20.0362 53.2504 20.1108C53.5864 20.1762 53.9318 20.2088 54.2864 20.2088C55.3411 20.2088 56.1811 19.8728 56.8064 19.2008C57.4411 18.5288 57.7584 17.5255 57.7584 16.1908C57.7584 15.9762 57.7444 15.7195 57.7164 15.4208C57.6978 15.1222 57.6464 14.8235 57.5624 14.5248L57.9124 14.7908C57.8191 15.2762 57.6184 15.6915 57.3104 16.0368C57.0118 16.3728 56.6384 16.6295 56.1904 16.8068C55.7518 16.9842 55.2618 17.0728 54.7204 17.0728C54.0764 17.0728 53.5024 16.9515 52.9984 16.7088C52.5038 16.4662 52.1164 16.1255 51.8364 15.6868C51.5564 15.2482 51.4164 14.7302 51.4164 14.1328C51.4164 13.5168 51.5611 12.9848 51.8504 12.5368C52.1398 12.0888 52.5364 11.7435 53.0404 11.5008C53.5538 11.2488 54.1278 11.1228 54.7624 11.1228ZM54.8044 11.9768C54.3378 11.9768 53.9224 12.0655 53.5584 12.2428C53.2038 12.4108 52.9238 12.6535 52.7184 12.9708C52.5131 13.2882 52.4104 13.6662 52.4104 14.1048C52.4104 14.7488 52.6298 15.2622 53.0684 15.6448C53.5164 16.0275 54.1184 16.2188 54.8744 16.2188C55.3784 16.2188 55.8171 16.1255 56.1904 15.9388C56.5731 15.7522 56.8671 15.4955 57.0724 15.1688C57.2871 14.8422 57.3944 14.4782 57.3944 14.0768C57.3944 13.7128 57.2964 13.3722 57.1004 13.0548C56.9044 12.7375 56.6151 12.4808 56.2324 12.2848C55.8498 12.0795 55.3738 11.9768 54.8044 11.9768Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-[#252B42] font-bold ml-2 text-2xl ">
              For individual
            </p>
            <p className="text-[#7E7E7E] text-small sm:text-base mx-2 mt-2 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              tellus arcu vel erat sit egestas mauris interdum.
            </p>
            <p className="ml-2 my-4">
              <span className="text-[#7E7E7E] font-bold">$16.48 </span>
              <span className="text-[#FE6644] font-bold">$6.48</span>
            </p>
            <button className="font-bold text-white bg-red rounded-r-full rounded-l-full ml-2 w-[160px] sm:w-[200px] px-4 sm:px-6 py-3 sm:py-4">
              Learn More{" "}
              <span>
                <img src={buttonArrow} className="ml-4 inline" />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-12 ">
          <div className="relative w-[30vw] min-w-[250px]">
            <img src={cardImage2} className="w-[30vw] min-w-[250px]" />
            <button className="absolute top-3 left-3 tracking-normal sm:tracking-wider  rounded-md text-white font-bold bg-red px-2 py-1">
              Sale
            </button>
            <img
              src={cart}
              className="absolute bottom-1 w-[45px] sm:w-auto left-[20%]"
            />
            <img
              src={eye}
              className="absolute bottom-1 w-[45px] sm:w-auto left-[40%]"
            />
            <img
              src={whiteHeart}
              className="absolute bottom-1 w-[45px] sm:w-auto left-[60%]"
            />
          </div>
          <div className="bg-white shadow-xl w-[30vw] rounded-b-lg py-4 px-3 min-w-[250px]">
            <div className="flex justify-between items-center px-2 pt-4">
              <p className="text-red text-bold">Book now</p>
              <svg
                width="70"
                height="33"
                viewBox="0 0 70 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.988281"
                  width="69.0136"
                  height="32.0136"
                  rx="15"
                  fill="#F14A52"
                />
                <path
                  d="M31.1203 13.4196C31.0627 13.2498 30.9565 13.1006 30.8151 12.9904C30.6736 12.8802 30.5029 12.8139 30.3242 12.7996L25.095 12.3841L22.8322 7.37506C22.7601 7.21373 22.6429 7.07671 22.4947 6.98052C22.3465 6.88434 22.1736 6.8331 21.9969 6.83301C21.8202 6.83291 21.6472 6.88395 21.4989 6.97998C21.3506 7.076 21.2332 7.2129 21.161 7.37415L18.8982 12.3841L13.669 12.7996C13.4933 12.8135 13.3254 12.8777 13.1852 12.9846C13.0451 13.0915 12.9387 13.2365 12.8788 13.4022C12.8189 13.568 12.808 13.7475 12.8475 13.9193C12.8869 14.091 12.975 14.2478 13.1012 14.3708L16.9656 18.1379L15.5989 24.0559C15.5574 24.235 15.5707 24.4225 15.6371 24.594C15.7034 24.7655 15.8198 24.913 15.9711 25.0175C16.1224 25.1221 16.3016 25.1787 16.4855 25.1801C16.6693 25.1815 16.8494 25.1276 17.0022 25.0254L21.9966 21.6958L26.9909 25.0254C27.1472 25.1291 27.3314 25.1825 27.5189 25.1784C27.7064 25.1743 27.8881 25.1129 28.0397 25.0024C28.1912 24.8919 28.3053 24.7377 28.3666 24.5604C28.4278 24.3832 28.4333 24.1914 28.3824 24.0109L26.7047 18.1406L30.8653 14.3965C31.1377 14.1507 31.2377 13.7673 31.1203 13.4196Z"
                  fill="#FFCE31"
                />
                <path
                  d="M39.0463 18.4308V17.7028L44.2403 11.2068H45.3603L40.2083 17.7028L39.6623 17.5348H47.5443V18.4308H39.0463ZM44.5763 21.0068V18.4308L44.6043 17.5348V15.2668H45.5843V21.0068H44.5763ZM49.4996 21.0768C49.2943 21.0768 49.117 21.0022 48.9676 20.8528C48.8276 20.7035 48.7576 20.5215 48.7576 20.3068C48.7576 20.0828 48.8276 19.9008 48.9676 19.7608C49.117 19.6208 49.2943 19.5508 49.4996 19.5508C49.705 19.5508 49.8776 19.6208 50.0176 19.7608C50.167 19.9008 50.2416 20.0828 50.2416 20.3068C50.2416 20.5215 50.167 20.7035 50.0176 20.8528C49.8776 21.0022 49.705 21.0768 49.4996 21.0768ZM54.7624 11.1228C55.6304 11.1228 56.3631 11.3188 56.9604 11.7108C57.5578 12.0935 58.0104 12.6488 58.3184 13.3768C58.6264 14.1048 58.7804 14.9868 58.7804 16.0228C58.7804 17.1242 58.5891 18.0528 58.2064 18.8088C57.8331 19.5648 57.3104 20.1342 56.6384 20.5168C55.9664 20.8995 55.1871 21.0908 54.3004 21.0908C53.8618 21.0908 53.4418 21.0488 53.0404 20.9648C52.6484 20.8808 52.2938 20.7455 51.9764 20.5588L52.3824 19.7468C52.6344 19.9148 52.9238 20.0362 53.2504 20.1108C53.5864 20.1762 53.9318 20.2088 54.2864 20.2088C55.3411 20.2088 56.1811 19.8728 56.8064 19.2008C57.4411 18.5288 57.7584 17.5255 57.7584 16.1908C57.7584 15.9762 57.7444 15.7195 57.7164 15.4208C57.6978 15.1222 57.6464 14.8235 57.5624 14.5248L57.9124 14.7908C57.8191 15.2762 57.6184 15.6915 57.3104 16.0368C57.0118 16.3728 56.6384 16.6295 56.1904 16.8068C55.7518 16.9842 55.2618 17.0728 54.7204 17.0728C54.0764 17.0728 53.5024 16.9515 52.9984 16.7088C52.5038 16.4662 52.1164 16.1255 51.8364 15.6868C51.5564 15.2482 51.4164 14.7302 51.4164 14.1328C51.4164 13.5168 51.5611 12.9848 51.8504 12.5368C52.1398 12.0888 52.5364 11.7435 53.0404 11.5008C53.5538 11.2488 54.1278 11.1228 54.7624 11.1228ZM54.8044 11.9768C54.3378 11.9768 53.9224 12.0655 53.5584 12.2428C53.2038 12.4108 52.9238 12.6535 52.7184 12.9708C52.5131 13.2882 52.4104 13.6662 52.4104 14.1048C52.4104 14.7488 52.6298 15.2622 53.0684 15.6448C53.5164 16.0275 54.1184 16.2188 54.8744 16.2188C55.3784 16.2188 55.8171 16.1255 56.1904 15.9388C56.5731 15.7522 56.8671 15.4955 57.0724 15.1688C57.2871 14.8422 57.3944 14.4782 57.3944 14.0768C57.3944 13.7128 57.2964 13.3722 57.1004 13.0548C56.9044 12.7375 56.6151 12.4808 56.2324 12.2848C55.8498 12.0795 55.3738 11.9768 54.8044 11.9768Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-[#252B42] font-bold ml-2 text-2xl ">
              For individual
            </p>
            <p className="text-[#7E7E7E] text-small sm:text-base mx-2 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              tellus arcu vel erat sit egestas mauris interdum.
            </p>
            <p className="ml-2 my-4">
              <span className="text-[#7E7E7E] font-bold">$16.48 </span>
              <span className="text-[#FE6644] font-bold">$6.48</span>
            </p>
            <button className="font-bold text-white bg-red rounded-r-full rounded-l-full ml-2 w-[160px] sm:w-[200px] px-4 sm:px-6 py-3 sm:py-4">
              Learn More{" "}
              <span>
                <img src={buttonArrow} className="ml-4 inline" />
              </span>
            </button>
          </div>
        </div>
        <img
          src={longLine}
          className="ml-[47vw] mt-[28vw] -z-10 xs:hidden sm:hidden md:block lg:block absolute"
        />
      </div>
      <img
        src={shortLine}
        className="ml-[26vw] -mt-[18vw]  -z-10 xs:hidden sm:hidden md:block lg:block "
      />
    </div>
  );
}
