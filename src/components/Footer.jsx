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
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Footer = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="relative">
      {/* THE MOBILE AND DESKTOP VERSION OF THE FOOTER */}
      <div
        style={{
          backgroundImage: `url("./footer-img/footerbackgroundsm.svg")`,
          minHeight: "40rem",
          zIndex: "-10",
        }}
        className="bg-no-repeat bg-cover "
      >
        {/* FOR MOBILE VIEW   THE CONTENTS  */}
        <div className=" pt-20 md:hidden px-3 ">
          <div className="flex flex-col items-center">
            <img src="./footer-img/footerlogo.svg" alt="the logo" />
            <h1 className="text-white text-center text-lg pb-2 font-mont font-semibold">
              We keep you up to date
            </h1>
          </div>
          <div className="flex justify-between pt-4">
            <input
              type="email"
              placeholder="Your E Mail Address"
              name=""
              id=""
              required
              className="text-white placeholder:text-white bg-primary w-full font-mont font-thin focus:outline-none"
            />
            <img src="./footer-img/footerarrow.svg" alt="arrow" />
          </div>
          <hr className="mt-4" />
        </div>
        {/* THE ACCORDIAN SECTION FOR THE MOBILE VIEW  */}
        <div className="accordian px-3 md:hidden pt-4">
          <div className="">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                className="text-white font-mont font-bold"
                onClick={() => handleOpen(1)}
              >
                Social
              </AccordionHeader>
              <AccordionBody className="flex flex-col text-white font-mont pl-4 py-1">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Pinterest</a>
              </AccordionBody>
              <hr />
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                className="text-white font-mont font-bold"
                onClick={() => handleOpen(2)}
              >
                Quick link
              </AccordionHeader>
              <AccordionBody className="flex flex-col text-white font-mont pl-4 py-1">
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
              </AccordionBody>
              <hr />
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                className="text-white font-mont font-bold"
                onClick={() => handleOpen(3)}
              >
                New
              </AccordionHeader>
              <AccordionBody className="flex flex-col text-white font-mont pl-4 py-1 ">
                <a href="#">Blog</a>
                <a href="#">FAQ</a>
                <a href="#">Lift Media</a>
                <a href="#">Lorem</a>
                <a href="#">Lorem</a>
              </AccordionBody>
              <hr />
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                className="text-white font-mont font-bold"
                onClick={() => handleOpen(4)}
              >
                Lorem
              </AccordionHeader>
              <AccordionBody className="flex flex-col text-white font-mont pl-4 py-1">
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
                <a href="#">lorem</a>
              </AccordionBody>
              <hr />
            </Accordion>
          </div>
          {/* COPYRIGHT FOR MOBILE */}
          <div className="text-white font-mont  py-4">
            <h1 className="font-bold py-5 text-sm ">
              &copy; 2022 I care history.All rights are reserved
            </h1>
            <div className="flex justify-center gap-6">
              <span>Privacy Policy </span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
      {/* FOR THE LARGE SCREEN VIEW CONTENTS */}
      <div className=" hidden absolute md:flex flex-col md:left-56 top-1/4 lg:left-72 w-3/5 z-20">
        <div className="flex justify-center gap-6 ">
          <div>
            <img src="./footer-img/footerlogo.svg" alt="the logo" />
          </div>
          <div className="text-white">
            <h1 className=" pb-2 font-mont font-semibold">
              We keep you up to date
            </h1>
            <div className="flex justify-between py-4">
              <input
                type="email"
                placeholder="Your E Mail Address"
                name=""
                id=""
                required
                className="text-white placeholder:text-white bg-primary w-full font-mont font-thin focus:outline-none"
              />
              <button type="submit">
                <img src="./footer-img/footerarrow.svg" alt="arrow" />
              </button>
              {/* <a href="#" className="cursor-pointer "></a> */}
            </div>
            <hr className="w-80" />
          </div>
        </div>

        {/* THE LINKS FOR ALL THE PAGES  */}
        <div className=" hidden md:flex font-mont text-white md:mt-6 md:pl-28 lg:pl-32  ">
          <div className="social  flex-1">
            <h1>Social</h1>
            <ul className="font-thin cursor-pointer ">
              <li className="py-1 ">
                <a href="#">Facebook</a>
              </li>

              <li className="py-1">
                <a href="#"> Instagram</a>
              </li>

              <li className="py-1">
                <a href="#">Linkdin</a>
              </li>

              <li className="py-1">
                <a href="#">Pintrest</a>
              </li>
            </ul>
          </div>
          <div className="links flex-1 cursor-pointer">
            <h1>Quicklink</h1>
            <ul className="font-thin">
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>

              <li className="py-1">
                <a href="#">Lorem</a>
              </li>

              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
            </ul>
          </div>
          <div className="new flex-1">
            New
            <ul className="font-thin cursor-pointer">
              <li className="py-1">
                <a href="#">Blog</a>
              </li>
              <li className="py-1">
                <a href="#">FAQ</a>
              </li>

              <li className="py-1">
                <a href="#">Lift Media</a>
              </li>

              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
            </ul>
          </div>
          <div className="lorem flex-1">
            Lorem
            <ul className="font-thin cursor-pointer">
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
              <li className="py-1">
                <a href="#">Lorem</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white font-mont py-8">
          <h1 className="font-bold py-5 text-center ">
            &copy; 2022 I care history.All rights are reserved
          </h1>
          <div className="flex justify-center gap-6">
            <span>Privacy Policy </span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
      {/* TWO DOCTORS IMAGE FOE THE BACKGROUND */}
      <div className="md:w-full absolute bottom-0 z-10">
        <div className="hidden md:flex md:justify-between">
          <img
            className="md:w-52  lg:w-auto"
            src="./footer-img/DoctorL.svg"
            alt=""
          />
          <img
            className="md:w-52 lg:w-auto"
            src="./footer-img/DoctorR.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
