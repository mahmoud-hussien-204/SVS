import Header from "../components/Header";
import SecureComponent from "../components/SecureComponent";
import GetStartedSection from "../components/GetStartedSection";
import BuyAndSellSvsSection from "../components/BuyAndSellSvsSection";
import AboutSvsCoin from "../components/AboutSvsCoin";
import WhyChooseUs from "../components/WhyChooseUs";
import TheSvsCoin from "../components/TheSvsCoin";
import RoadMap from "../components/RoadMap";
import WhitePaperSection from "../components/WhitePaperSection";
import TheSVSProject from "../components/TheSVSProject";
import TokenSVSSection from "../components/TokenSVSSection";
import OurTeamSection from "../components/OurTeamSection";
import PartnersAndSuporters from "../components/PartnersAndSuporters";
import NewsSection from "../components/NewsSection";
// import BlogsSection from "../components/BlogsSection";
// import MediaSection from "../components/MediaSection";
import SingleNewSection from "../components/SingleNewSection";
import SubscribeSection from "../components/SubscribeSection";
import FooterSection from "../components/FooterSection";
import SocialMedia from "../components/SocialMedia";
import Navbar from "../components/Navbar";

export const Component = () => {
  return (
    <div>
      <SocialMedia />

      {/* Navbar */}
      <Navbar />
      <div>
        <Header />
        <SecureComponent />
        <GetStartedSection />
        <BuyAndSellSvsSection />
        <AboutSvsCoin />
        <WhyChooseUs />
        <TheSvsCoin />
        <RoadMap />
        <WhitePaperSection />
        <TheSVSProject />
        <TokenSVSSection />
        <OurTeamSection />
        <PartnersAndSuporters />
        <NewsSection />
        {/* <BlogsSection /> */}
        {/* <MediaSection /> */}
        <SingleNewSection />
        <SubscribeSection />
        <FooterSection />
      </div>
    </div>
  );
};

Component.displayName = "LandingPage";
