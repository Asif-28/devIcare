import React from "react";

const HomeLast = () => {
  return (
    <div className="w-[90%] mx-auto py-4 sm:py-20">
      {/* flex container  */}
      <div className="flex flex-col-reverse sm:flex-col justify-between md:flex-row gap-4 ">
        {/* History content  */}
        <div className="md:w-40% flex flex-col gap-4">
          <div className="w-[94px] h-[5px] bg-[#6184F4] "></div>

          <h2 className="font-bold text-2xl sm:text-3xl">
            Need help? Get in touch with us
          </h2>
          <p className="text-slate-500 font-mont">
            We’re always here when you need us
          </p>
          <h3 className="font-semibold text-[20px] sm:text-2xl">Contacts</h3>
          <div className="flex gap-4 sm:grid sm:grid-cols-2">
            <div className=" text-blue-500">
              <ul className="space-y-2 font-mont">
                <li>Phone:</li>
                <li>Fax:</li>
                <li>Toll Free:</li>
                <li>Email:</li>
              </ul>
            </div>
            <div className="text-slate-500">
              <ul className="space-y-2 font-mont">
                <li>(604) 678 – 9274</li>
                <li>(604) 678 – 9279</li>
                <li>(888) 978 – 9115</li>
                <li>info@icare.press</li>
              </ul>
            </div>
          </div>
          <h3 className="pb-1 font-semibold text-[20px] sm:text-2xl ">
            Social Media
          </h3>
          {/* links section */}
          <div className="flex flex-row gap-8 align-bottom ">
            <a href="#">
              <img
                src="./ICareHistory-assets/facebook-icon.svg"
                alt="facebook"
              />
            </a>
            <a href="#">
              <img src="./ICareHistory-assets/linkdin-icon.svg" alt="linkdin" />
            </a>
            <a href="#">
              <img src="./ICareHistory-assets/twitter-icon.svg" alt="twitter" />
            </a>
            <a href="#">
              <img
                src="./ICareHistory-assets/instagram-icon.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="md:w-[60%]">
          {/* Replace with video  */}
          <img src="./ICareHistory-assets/videoPlayer.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeLast;
