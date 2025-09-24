import React from 'react'
import SingleWorkProcess from './SingleWorkProcess'
import { title, workFeatures, subtitle, image } from '@/constant/home1/workprocessData'

export default function WorkProcess() {
    return (
        <div className="work-feature-style-one position-relative section-gap-xl-top ">
            <img src="/images/shapes/hero-dots.svg" alt="" className="feature-screen-dots" />
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6">
                        <div className="w-feature-content">

                            <div className="w-feature-content-title">
                                <h3 className="text-bright-gray">{title}</h3>
                                <p className="text-purple-haze body-disply-1 pt-3">{subtitle}</p>
                            </div>
                            <div className="work-features">
                                <SingleWorkProcess workFeaturesData={workFeatures} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 wow fadeInUp">
                        <div className="feature-screen-one fadeInRight wow position-relative" data-wow-delay="0.5s">
                            <img src={image} alt="" className="feature-filter-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
