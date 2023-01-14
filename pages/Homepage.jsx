import Header from "../src/components/Header";
import HomeUpper from "../src/components/homepage/HomeUpper";
import HomeUpper2 from "../src/components/homepage/HomeUpper2";
import HomeMid from "../src/components/homepage/HomeMid";
import HomePageLowerMid from "../src/components/homepage/HomePageLowerMid";
import Footer from "../src/components/Footer";
import HelpSolve from "../src/components/homepage/HelpSolve";
import Dream from "../src/components/homepage/Dream";
import HomeLast from "../src/components/homepage/HomeLast";
import Whychoose from "../src/components/homepage/Whychoose";
import BelovedPerson from "../src/components/homepage/BelovedPerson";
import WithWithoutTherapist from "../src/components/homepage/WithWithoutTherapist";
export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeUpper />
      <HomeUpper2 />
      <HomeMid />
      <HomePageLowerMid />
      <HelpSolve />
      <Dream />
      <WithWithoutTherapist />
      <BelovedPerson />
      <Whychoose />
      <HomeLast />
      <Footer />
    </div>
  );
}
