import Header from "@/components/home/Header";
import Footer2 from "@/components/home2/Footer2";
import CoreValuesHero from "@/components/coreValues/CoreValuesHero";
import CoreValuesSection from "@/components/coreValues/CoreValuesSection";
import { NextSeo } from "next-seo";

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
        <Header logo={"logo.png"} btn={"btn-outlined-round"} />
        <CoreValuesHero />
        <CoreValuesSection />
        <Footer2 />
      </div>
    </>
  );
}
