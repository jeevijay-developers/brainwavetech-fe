import SingleInfoSection from "@/components/blog-details/SingleInfoSection";
import TeamMember from "@/components/contact/TeamMember";
import Header from "@/components/home/Header";
import Footer from "@/components/home1/Footer";
import NewsLetter from "@/components/home1/NewsLetter";
import SuccessStory from "@/components/home1/SuccessStory";
import AgencySolution from "@/components/serviceDetails/AgencySolution";
import OurWorkingProcess from "@/components/serviceDetails/OurWorkingProcess";
import ServiceDetailsHero from "@/components/serviceDetails/ServiceDetailsHero";
import { singleInfoSection } from "@/constant/blog-details/blogDetailsData";
import { teamMemberData } from "@/constant/contact/contactPageData";
import { NextSeo } from "next-seo";

export default function ServiceDetails() {
  return (
    <>
      <NextSeo
        title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
        description={
          "Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."
        }
      />
      <div className="background-wrap inner-bg">
        <Header logo={"logo-v2.svg"} btn={"btn-outlined-round"} />
        <ServiceDetailsHero />
        <OurWorkingProcess />
        <AgencySolution />
        <SingleInfoSection data={singleInfoSection} />
        <TeamMember teamData={teamMemberData} />
        <SuccessStory spaceBottomXl={true} />
        <NewsLetter spaceTop={true} />
        <Footer />
      </div>
    </>
  );
}
