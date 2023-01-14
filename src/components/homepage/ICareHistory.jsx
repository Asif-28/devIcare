import React from "react";

const ICareHistory = () => {
  return (
    <section className="w-[90%] mx-auto py-20">
      {/* flex container  */}
      <div className="flex flex-col justify-between md:flex-row gap-4 ">
        {/* History content  */}
        <div className="md:w-40% flex flex-col justify-between gap-4">
          <div>
            <img src="./ICareHistory-assets/blueLine.svg" />
          </div>
          <h2 className="font-bold text-2xl sm:text-4xl">I Care History</h2>
          <p className="text-slate-500">Our History</p>
          <h3 className="font-bold">Contacts</h3>
          <div className="grid grid-cols-2">
            <div className=" text-blue-500">
              <ul className="space-y-2">
                <li>Phone:</li>
                <li>Fax:</li>
                <li>Toll Free:</li>
                <li>Email:</li>
              </ul>
            </div>
            <div className="text-slate-500">
              <ul className="space-y-2">
                <li>(604) 678 – 9274</li>
                <li>(604) 678 – 9279</li>
                <li>(888) 978 – 9115</li>
                <li>info@azshowtime.com</li>
              </ul>
            </div>
          </div>
          <h3 className="font-bold pb-1">Social Media</h3>
          {/* links section */}
          <div className="flex flex-row gap-4 align-bottom ">
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
    </section>
  );
};

export default ICareHistory;
