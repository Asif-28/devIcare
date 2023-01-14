import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import LoveTreatmentLower from "../src/components/lovetreatment/LoveTreatmentLower";
import LovetreatmentUpper from "../src/components/lovetreatment/LovetreatmentUpper";
import LovetreatmentUpperMid from "../src/components/lovetreatment/LovetreatmentUpperMid";
import LovetreatmentLowerMid  from "../src/components/lovetreatment/LovetreatmentLowerMid";
const Love = () => {
  return (
    <div>
      <Header />
      <LovetreatmentUpper />
      <LovetreatmentUpperMid />
      <LovetreatmentLowerMid/>
      <LoveTreatmentLower />
      <Footer />
    </div>
  );
};

export default Love;
