import AboutHero from "@/components/about/AboutHero";
import PricingPlan from "@/components/about/PricingPlan";
import SupplyChain from "@/components/about/SupplyChain";
import Header from "@/components/home/Header";
import Footer from "@/components/home1/Footer";
import NewsLetter from "@/components/home1/NewsLetter";
import SuccessStory from "@/components/home1/SuccessStory";
import Experience from "@/components/service/Experience";
import Experience2 from "@/components/service/Experience2";
import aboutPageData from "@/constant/about/aboutPageData";
import { NextSeo } from "next-seo";

export default function About() {
    return (
        <>
            <NextSeo
                title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
                description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
            />
            <div className="background-wrap inner-bg">
                <Header logo={'logo.png'} btn={'btn-outlined-round'} />
                <AboutHero />
                <Experience />
                <Experience2 />
                <SupplyChain />
                <PricingPlan data={aboutPageData.pricingPlan} />
                <SuccessStory spaceBottomXl={true} />
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}
