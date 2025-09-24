import Header from '@/components/home/Header'
import CustomerTrust from '@/components/home3/CustomerTrust'
import ExcellentFeatures from '@/components/home3/ExcellentFeatures'
import FactHome3 from '@/components/home3/FactHome3'
import Feature from '@/components/home3/Feature'
import Feature1 from '@/components/home3/Feature1'
import Footer from '@/components/home3/Footer'
import Hero3 from '@/components/home3/Hero3'
import Partners from '@/components/home3/Partners'
import PlatformFeature from '@/components/home3/PlatformFeature'
import Register from '@/components/home3/Register'
import Testimonial3 from '@/components/home3/Testimonial3'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function Home3() {
    return (
        <>
            <NextSeo
                title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
                description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
            />
            <div className='background-wrap home-bg-two'>
                <Header logo={'logo-v3.png'} btn="btn-fill-pill-v2 md-btn" btnDefault={false} loginBtn={'btn-transparent-v3'} headerStyle={'header-style-two'} />
                <Hero3 />
                <FactHome3 />
                <Feature />
                <Feature1 />
                <ExcellentFeatures />
                <PlatformFeature />
                <Testimonial3 />
                <Partners />
                <CustomerTrust />
                <Register />
                <Footer />
            </div>
        </>
    )
}
