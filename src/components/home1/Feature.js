import { feature1 } from '@/constant/home1/featureData'
import React from 'react'

export default function Feature() {
    const { img1, img2, img3, vectorLine, dotsImg, balonIcon, title, subTitle, btnTxt } = feature1;
    return (
        <div className="single-feature-one-style position-relative section-gap-xl-top section-gap-xl-bottom">
            <div className="florting-balon-icon d-none d-lg-block translate-middle-y end-0 anima-trasform-y-1 position-absolute" >
                <img src={balonIcon} alt="" />
            </div>


            <div className="container-fluid">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 order-1 order-lg-0">
                        <div className="single-feature-screens position-relative">
                            <img src={vectorLine} alt="" className="img-fluid feat-one-line d-lg-block d-none" />
                            <img src={dotsImg} alt="" className="img-fluid feat-one-dots" />
                            <div className="row justify-content-center align-items-center gy-4 position-relative z-index-1">
                                <div className=" d-lg-block d-none single-feature-one-bg position-absolute low-index">
                                </div>
                                <div className="col-xl-5 col-6 text-end">
                                    <img src={img1} alt="" className="feat-one-screen img-fluid wow fadeInLeft" />
                                </div>
                                <div className="col-xl-5 col-6">
                                    <img src={img3} alt="" className="feat-one-screen feat-one-screen-sm img-fluid wow fadeIn d-block" />
                                    <img src={img2} alt="" className="feat-one-screen img-fluid mt-4 wow fadeInUp" data-wow-delay="0.4s" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-0 order-lg-1 position-relative z-index-5">
                        <div className="single-feature-content-one">
                            <h3 className="text-bright-gray">{title}</h3>
                            <p className="text-purple-haze body-disply-1 pt-3">{subTitle}</p>

                            <div className="trial-btn mt-5">
                                <a href="#" className="btn-fill-rounded">{btnTxt}</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
