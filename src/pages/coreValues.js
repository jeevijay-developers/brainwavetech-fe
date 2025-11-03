import Footer2 from "@/components/home2/Footer2";
import CoreValuesHero from "@/components/coreValues/CoreValuesHero";
import CoreValuesSection from "@/components/coreValues/CoreValuesSection";
import { NextSeo } from "next-seo";
import Header from "@/components/home/Header";

export default function CoreValues() {
  return (
    <>
      <NextSeo
        title={"Core Values - Brainwave Tech"}
        description={
          "Discover our core values focused on creating a one-stop self-development atmosphere to improve quality of life and develop a mentally, physically and spiritually healthier society."
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
        <CoreValuesHero />
        <CoreValuesSection />
        <Footer2 />
      </div>
    </>
  );
}
