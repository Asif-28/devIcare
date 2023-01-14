import playButton from "../../../public/selfcare-lowermid/playButton.svg";
import playLine from "../../../public/selfcare-lowermid/playLine.svg";
import heartWhite from "../../../public/selfcare-lowermid/heartWhite.svg";
import heartTransparent from "../../../public/selfcare-lowermid/heartTransparent.svg";

export default function SelfcareLowerMid() {
  return (
    <div className="font-mont flex  items-center px-4 flex-wrap justify-evenly">
      <div className="max-w-[450px]">
        <div className="w-[100px] h-[4px] bg-[#6084F4]"></div>
        <p className="font-bold text-[24px] sm:text-3xl mt-4 mb-4">
          Get immediate relief from your symotoms
        </p>
        <p className="text-[14px] sm:text-base text-[#7E7E7E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          consectetur eget id. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suscipit consectetur eget id.
        </p>
        <p className="text-[14px] sm:text-base text-[#7E7E7E] mt-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          consectetur eget id. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suscipit consectetur eget id.
        </p>
        <div>
          <p className="text-md font-bold mb-4">Your both birthday</p>
          <div className="flex gap-6 border-2 border-[#DADCE0] rounded-md p-4 w-[300px]">
            <img src={playButton} />
            <img src={playLine} className="w-[200px]" />
          </div>
        </div>
        <button className=" block font-bold text-small w-[160px] mr-4 mt-4 font-mont bg-[#6184F4] text-white px-2 py-2 md:py-3 rounded-md">
          Start your free Trial
        </button>
        <p className="font-bold text-[#7E7E7E] mt-4">Get a voucher? Read it </p>
      </div>
      <div className="flex md:flex-col lg:flex-col scrollbar-hide overflow-x-scroll">
        <div className="bg-[#6184F4] w-[320px] sm:w-[350px] flex-shrink-0 px-4 py-4 m-2 s:m-4 rounded-xl">
          <p className="text-lg text-white font-bold">Anxiety</p>
          <p className="text-white text-sm font-mont mt-4">
            A collection to promote feelings of clam, relation and groundedness
            when emotionsare running high.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="text-[#6184f4] bg-white font-bold text-sm px-4 py-2  rounded-r-full rounded-l-full ">
              33 EXERCISES
            </button>
            <img src={heartWhite} />
          </div>
        </div>

        <div className="bg-[#6184F4] w-[350px] flex-shrink-0 px-4 py-4 m-2 s:m-4 rounded-xl">
          <p className="text-lg text-white font-bold">Anxiety</p>
          <p className="text-white text-sm font-mont mt-4">
            A collection to promote feelings of clam, relation and groundedness
            when emotionsare running high.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="text-[#6184f4] bg-white font-bold text-sm px-4 py-2  rounded-r-full rounded-l-full ">
              33 EXERCISES
            </button>
            <img src={heartTransparent} />
          </div>
        </div>

        <div className="bg-[#6184F4] w-[350px] flex-shrink-0 px-4 py-4 m-2 s:m-4 rounded-xl">
          <p className="text-lg text-white font-bold">Anxiety</p>
          <p className="text-white font-mont text-sm mt-4">
            A collection to promote feelings of clam, relation and groundedness
            when emotionsare running high.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="text-[#6184f4] bg-white font-bold text-sm px-4 py-2  rounded-r-full rounded-l-full ">
              33 EXERCISES
            </button>
            <img src={heartTransparent} />
          </div>
        </div>
      </div>
    </div>
  );
}
