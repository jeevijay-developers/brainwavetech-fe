import BlogTop from "@/components/blog-details/BlogTop";
import SingleInfoSection from "@/components/blog-details/SingleInfoSection";
import WorkingProcess from "@/components/blog/WorkingProcess";
import TeamMember from "@/components/contact/TeamMember";
import Header from "@/components/home/Header";
import Footer from "@/components/home1/Footer";
import NewsLetter from "@/components/home1/NewsLetter";
import { singleInfoSection } from "@/constant/blog-details/blogDetailsData";
import workingProcessData from "@/constant/blog/workingProcessData";
import { teamMemberData } from "@/constant/contact/contactPageData";
import { NextSeo } from "next-seo";

export default function BlogDetails() {
    return (
        <>
            <NextSeo
                title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
                description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
            />
            <div className="background-wrap inner-bg">
                <Header logo={'logo.png'} btn={'btn-outlined-round'} />
                <BlogTop />
                <WorkingProcess data={workingProcessData} />
                <SingleInfoSection data={singleInfoSection} />
                <TeamMember teamData={teamMemberData} />
                <NewsLetter spaceTop={true} />
                <Footer />
            </div>
        </>
    )
}
