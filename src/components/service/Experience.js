import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Experience({gap}) {
    return (
        <div className={`about-company-wrapper ${gap ? gap : ""} position-relative z-index-1`}>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-7">
                        <div className="about-company-header">
                            <h3 className="text-bright-gray">We are in 6 years experience in this field</h3>
                            <p className="body-disply-1 text-purple-haze-700 pt-20">An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at </p>
                        </div>
                        <div className="company-clients wow fadeInLeft" data-wow-delay="0.3s">
                            <div className="swiper company-clients-slider">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    speed={1000}
                                    loop={true}
                                    centeredSlides={true}
                                    modules={[Autoplay]}
                                    autoplay={
                                        {
                                            delay: 2000,
                                            disableOnInteraction: false
                                        }
                                    }

                                    breakpoints={
                                        {
                                            480: {
                                                slidesPerView: 1
                                            },
                                            575: {
                                                slidesPerView: 2,
                                                centeredSlides: false,
                                            },
                                            992: {
                                                slidesPerView: 3
                                            }
                                        }
                                    }
                                >
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-logo-one.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-client-logo-two.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-client-logo-three.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-client-logo-four.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-logo-one.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-client-logo-two.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-client-logo">
                                        <img src="/images/client-logo/cus-client-logo-three.png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row gy-4">
                            <div className="col-lg-12 col-md-6 wow fadeInRight" >
                                <div className="about-fact-card">
                                    <h1>15k</h1>
                                    <h5>Happy customer</h5>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6 wow fadeInRight" data-wow-delay="0.3s">
                                <div className="about-fact-card">
                                    <h1>400+</h1>
                                    <h5>Complete Work</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
