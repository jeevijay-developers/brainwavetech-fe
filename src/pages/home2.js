import Header from "@/components/home/Header";
import AppDownload from "@/components/home2/AppDownload";
import Features from "@/components/home2/Features";
import Footer2 from "@/components/home2/Footer2";
import Hero2 from "@/components/home2/Hero2";
import Partners from "@/components/home2/Partners";
import SimplePrice from "@/components/home2/SimplePrice";
import SingleFeature2 from "@/components/home2/SingleFeature2";
import SingleFeature3 from "@/components/home2/SingleFeature3";
import Testimonial2 from "@/components/home2/Testimonial2";
import { NextSeo } from "next-seo";

export default function Home2() {
    return (
        <>
            <NextSeo
                title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
                description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
            />
            <Header logo={'logo-v2.png'} btn="btn-fill-pill md-btn" btnDefault={false} loginBtn={'btn-transparent-v2'} headerStyle={'header-style-two'} />
            <Hero2 />
            <Features />
            <SingleFeature2 />
            <SingleFeature3 />
            <SimplePrice />
            <Partners />
            <Testimonial2 />
            <AppDownload />
            <Footer2 />
        </>
    )
}
