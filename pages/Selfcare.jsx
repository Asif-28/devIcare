import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import SelfCareUpper from "../src/components/Selfcare/SelfCareUpper";
import SelfCarelower from "../src/components/Selfcare/SelfCarelower";
import SelfcareUpperMid from "../src/components/Selfcare/SelfcareUpperMid";
import SelfcareLowerMid from "../src/components/Selfcare/SelfcareLowerMid";
import SelfCareLower1 from "../src/components/Selfcare/SelfCareLower1";

const Selfcare = () => {
  return (
    <div>
      <Header />
      <SelfCareUpper />
      <SelfcareUpperMid />
      <SelfcareLowerMid />
      <SelfCareLower1 />
      <SelfCarelower />
      <Footer />
    </div>
  );
};

export default Selfcare;
