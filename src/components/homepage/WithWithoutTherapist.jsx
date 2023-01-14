import React from "react";

const WithWithoutTherapist = () => {
  return (
    <div className="overflow-hidden">
      {/* flex container  */}
      <div className="slides flex overflow-x-auto snap-mandatory scroll-smooth">
        {/* container 1  */}
        <div
          className="w-[100%] flex-shrink-0 md:w-[50%] px-6 sm:px-[10%] py-[10%] space-y-6 relative"
          style={{
            backgroundImage: `url(./withWithout-assets/whitebackground.png)`,
          }}
        >
          <img src="./withWithout-assets/brainGreen.svg" alt="" />
          <img src="./withWithout-assets/blueLine.svg" alt="" />
          <h2 className="sm:text-3xl font-mont text-[24px] font-bold">
            With Therapist
          </h2>
          <ul className="list-disc font-medium font-mont text-[14px] sm:text-[15px] leading-5 pl-3 sm:font-base">
            <li>Have a balanced mood</li>
            <li>Feel emotionally stable</li>
            <li>Able to channel thoughts and feelings properly</li>
            <li>
              Able to adapt to changes, and learn new skills and techniques.
            </li>
            <li>Manage daily stressors</li>
            <li>Have a whole new perspective on people and life</li>
            <li>You know you’re not alone</li>
            <li>Rewire your brain towards success</li>
            <li>Better teach the next generation</li>
            <li>Enjoy life, master self-love and become self-motivated</li>
          </ul>
        </div>
        {/* container 2  */}
        <div
          className="w-[100%] flex-shrink-0 md:w-[50%] px-6 sm:px-[10%] py-[10%] space-y-6 relative"
          style={{
            backgroundImage: `url(./withWithout-assets/redBackground.png)`,
          }}
        >
          <img src="./withWithout-assets/brainRed.svg" alt="" />
          <img src="./withWithout-assets/whiteLine.svg" alt="" />
          <h2 className="text-white font-mont sm:text-3xl  text-[24px] font-bold">
            Without Therapist
          </h2>
          <ul className="text-white list-disc font-medium font-mont leading-5 text-[14px] sm:text-[15px] pl-3 sm:font-base">
            <li>
              Struggle with emotional ups and downs, not knowing how to handle
              them
            </li>
            <li>
              Not understand weaknesses or strengths and can easily be
              manipulated
            </li>
            <li>Any small problem can become a disaster</li>
            <li>Easily disturbed</li>
            <li>Repressed emotions come back to haunt you frequently</li>
            <li>Struggle with procrastination – you need a push everyday</li>
            <li>Vulnerable to comparison</li>
            <li>Fall into regrets and guilt traps</li>
            <li>No control over desires and cravings</li>
            <li>
              Struggle with social pressures and feel unworthy or hopeless
            </li>
            <li>Feel bored and unable to express feelings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WithWithoutTherapist;
