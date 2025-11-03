import AboutHero from "@/components/about/AboutHero";
import PricingPlan from "@/components/about/PricingPlan";
import SupplyChain from "@/components/about/SupplyChain";
import Header from "@/components/home/Header";
import Footer from "@/components/home1/Footer";
import NewsLetter from "@/components/home1/NewsLetter";
import SuccessStory from "@/components/home1/SuccessStory";
import Footer2 from "@/components/home2/Footer2";
import Experience from "@/components/service/Experience";
import Experience2 from "@/components/service/Experience2";
import aboutPageData from "@/constant/about/aboutPageData";
import { NextSeo } from "next-seo";

export default function About() {
  return (
    <>
      <NextSeo
        title={
          "Brainwave Tech — Brain Wave Analysis & Customized Sound Therapy"
        }
        description={
          "Brainwave Tech provides cutting-edge brain wave analysis and customized sound therapy using patented BCI technology to measure, understand, and enhance your mental state with over 92% accuracy. Improve focus, relaxation, and wellbeing with personalized neurofeedback and sound programs."
        }
      />
      <div className="background-wrap inner-bg">
        <Header
          logo={"logo.png"}
          btn="btn-fill-pill md-btn"
          btnDefault={false}
          loginBtn={"btn-transparent-v2"}
          headerStyle={"header-style-two"}
        />
        <AboutHero />
        <Experience />
        <Experience2 />
        <SupplyChain />
        {/* <PricingPlan data={aboutPageData.pricingPlan} /> */}
        <SuccessStory spaceBottomXl={true} />
        {/* <NewsLetter /> */}
        <Footer2 />
      </div>
    </>
  );
}
