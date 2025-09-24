import Header from '@/components/home/Header'
import Footer from '@/components/home1/Footer'
import NewsLetter from '@/components/home1/NewsLetter'
import Pricing from '@/components/home1/Pricing'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function Price() {
    return (
        <>
            <NextSeo
                title={"SaaSto - Digital Agency & Multipurpose React Nextjs Template"}
                description={"Welcome to SaaSto NextJs We are a dynamic web agency specializing in creating visually stunning and highly functional websites. Our team of skilled designers, developers, and marketers work together to bring your online presence to life."}
            />
            <div className='background-wrap inner-bg'>
                <Header logo={'logo.png'} btn={'btn-outlined-round'} />
                <Pricing spaceTopXl={true} spaceBottomXl={true} />
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}
