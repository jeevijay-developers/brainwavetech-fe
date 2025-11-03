import Header from "@/components/home/Header";
import AppDownload from "@/components/home2/AppDownload";
import Features from "@/components/home2/Features";
import Footer2 from "@/components/home2/Footer2";
import Hero2 from "@/components/home2/Hero2";
import Partners from "@/components/home2/Partners";
import PricingSection from "@/components/home2/PricingSection";
import SimplePrice from "@/components/home2/SimplePrice";
import SingleFeature2 from "@/components/home2/SingleFeature2";
import SingleFeature3 from "@/components/home2/SingleFeature3";
import Testimonial2 from "@/components/home2/Testimonial2";
import { NextSeo } from "next-seo";

export default function Home2() {
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
      <Header
        logo={"logo.png"}
        btn="btn-fill-pill md-btn"
        btnDefault={false}
        loginBtn={"btn-transparent-v2"}
        headerStyle={"header-style-two"}
      />
      <Hero2 />
      <Features />
      <SingleFeature2 />
      <SingleFeature3 />
      <PricingSection />
      {/* <SimplePrice /> */}
      <Partners />
      <Testimonial2 />
      {/* <AppDownload /> */}
      <Footer2 />
    </>
  );
}
