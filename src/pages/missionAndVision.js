import Footer2 from "@/components/home2/Footer2";
import MissionVisionHero from "@/components/missionVision/MissionVisionHero";
import VisionSection from "@/components/missionVision/VisionSection";
import MissionSection from "@/components/missionVision/MissionSection";
import { NextSeo } from "next-seo";
import Header from "@/components/home/Header";

export default function MissionAndVision() {
  return (
    <>
      <NextSeo
        title={"Mission & Vision - Brainwave Tech"}
        description={
          "Learn about our mission to help individuals overcome their fears and shortcomings through technology and therapies, and our vision to enhance learning potential and serve as a valuable resource for society."
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
        <MissionVisionHero />
        <VisionSection />
        <MissionSection />
        <Footer2 />
      </div>
    </>
  );
}
