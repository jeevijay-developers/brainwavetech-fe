import { NextSeo } from 'next-seo';
import Header from "@/components/home/Header";
import Blogs from "@/components/home1/Blogs";
import CountryMap from "@/components/home1/CountryMap";
import Fact from "@/components/home1/Fact";
import Feature from "@/components/home1/Feature";
import Feature1 from "@/components/home1/Feature1";
import Footer from "@/components/home1/Footer";
import HeroOne from "@/components/home1/HeroOne";
import NewsLetter from "@/components/home1/NewsLetter";
import Pricing from "@/components/home1/Pricing";
import SuccessStory from "@/components/home1/SuccessStory";
import WorkProcess from "@/components/home1/WorkProcess";

export default function Home() {
  return (
    <>
      <NextSeo
        title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
        description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
      />
      <div className="background-wrap home-bg-one">
        <Header logo={'logo.png'} btn="btn-outlined-round" />
        <HeroOne />
        <Fact />
        <WorkProcess />
        <Feature />
        <Feature1 />
        <Pricing />
        <CountryMap />
        <SuccessStory />
        <Blogs />
        <NewsLetter spaceTopXl={true} />
        <Footer />
      </div>
    </>
  )
}
