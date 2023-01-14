import React from "react";
import { navLinks, accordianLinks } from "../constants/constants";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* navbar here data from the constants  */}
      <nav className="flex flex-row-reverse md:flex-row items-center gap-2 md:justify-between px-[7px] py-[12px] md:px-[30px] lg:px-[70px] md:py-[20px] w-full">
        <img src="./header-assets/Logo.svg" alt="logo of Company" />
        <div className="max-w-3xl">
          <ul className="md:flex flex-row gap-4 justify-center  flex-wrap hidden  ">
            {navLinks.map((ele, index) => (
              <li className="flex flex-row gap-3">
                <img
                  src="./header-assets/Ellipse.svg"
                  className={index == 0 ? `hidden` : " w-3"}
                />
                <a
                  href={`${ele.id}`}
                  className="text-navbar font-medium font-mont hover:text-black active:text-black"
                >
                  {` ${ele.title}`}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-1 sm:gap-3 md:gap-8 flex-row-reverse md:flex-row items-center md:w-auto w-full justify-between md:justify-self-auto">
          {/* Sign In & Sign up  */}
          <div className={`${toggle ? `hidden` : `flex`} md:flex`}>
            {" "}
            <div>
              <button className="text-primary font-medium font-mont text-small md:text-base px-3 sm:px-4 py-smscreen md:py-1.5 lg:py-2  ">
                Sign In
              </button>
            </div>
            <div>
              <button className="bg-primary font-medium font-mont rounded-full text-small md:text-base px-6 py-smscreen md:py-1.5 lg:py-2  text-white">
                Sign Up
              </button>
            </div>
          </div>

          {/* Shopping cart log  */}
          <button
            className={`${
              toggle ? `hidden` : `flex`
            } md:flex flex-col items-center w-7 ml-2`}
          >
            <img src="./header-assets/cart.svg" alt="" />
          </button>
        </div>

        {/* Hamburger Button here  */}
        <div
          className="w-8 md:hidden"
          onClick={() => setToggle((state) => !state)}
        >
          <img
            className={`${toggle ? `` : `hidden`} ml-2`}
            src="./header-assets/cross.svg"
            alt="close menu"
          />
          <div className={`${toggle ? `hidden` : ``} space-y-0.5`}>
            <img src="./header-assets/hamburger.svg" alt="" />
          </div>
        </div>
      </nav>
      {/* mobile menu  */}
      <nav
        className={`${
          toggle ? `flex flex-col` : `hidden`
        } md:hidden w-full absolute z-40 bg-white justify-between pb-10 h-[87vh]`}
      >
        <div>
          {accordianLinks.map((ele, index) => (
            <Accordion
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  className="text-blue-400"
                  sx={{ width: "33%", flexShrink: 0, fontWeight: 700 }}
                >
                  {`${ele.title}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="flex flex-col text-blue-400">
                  {ele.sublinks.map((elem) => (
                    <a href={`${ele.title}`}>{`${elem.title}`}</a>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <img src="./header-assets/Logo.svg" className="w-[20%] mx-auto" />
      </nav>
    </div>
  );
};

export default Header;
