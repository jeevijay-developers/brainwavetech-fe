import Header from "@/components/home/Header";
import Footer from "@/components/home1/Footer";
import NewsLetter from "@/components/home1/NewsLetter";
import Pricing from "@/components/home1/Pricing";
import { NextSeo } from "next-seo";
import React from "react";

export default function Price() {
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
          logo={"logo-v2.svg"}
          btn="btn-fill-pill md-btn"
          btnDefault={false}
          loginBtn={"btn-transparent-v2"}
          headerStyle={"header-style-two"}
        />
        <Pricing spaceTopXl={true} spaceBottomXl={true} />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
