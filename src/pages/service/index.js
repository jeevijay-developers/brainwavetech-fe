import TeamMember from "@/components/contact/TeamMember";
import Header from "@/components/home/Header";
import Footer from "@/components/home1/Footer";
import NewsLetter from "@/components/home1/NewsLetter";
import SuccessStory from "@/components/home1/SuccessStory";
import Experience from "@/components/service/Experience";
import Experience2 from "@/components/service/Experience2";
import ServiceHero from "@/components/service/ServiceHero";
import Solutions from "@/components/service/Solutions";
import { teamMemberData } from "@/constant/contact/contactPageData";
import servicePageData from "@/constant/service/servicePageData";
import { NextSeo } from "next-seo";

export default function Service() {
    return (
        <>
            <NextSeo
                title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
                description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
            />
            <div className="background-wrap inner-bg">
                <Header logo={'logo.png'} btn={'btn-outlined-round'} />
                <ServiceHero data={servicePageData} />
                <Solutions data={servicePageData} />
                <Experience gap={'section-gap-xl-top'} />
                <Experience2 pb={'pb-80'} />
                <TeamMember teamData={teamMemberData} />
                <SuccessStory gap={'section-gap-xl-top'} />
                <NewsLetter spaceTop={true} />
                <Footer />
            </div>
        </>
    )
}
