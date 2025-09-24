import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OurWorkingProcess() {
    return (
        <div className="service-process-wrap position-relative z-index-1">
            <div className="container">
                <div className="row pb-60 gy-4">
                    <div className="col-lg-6">
                        <h3 className="text-bright-gray">Look what our working process</h3>
                    </div>
                    <div className="col-lg-6">
                        <p className="body-disply-1 text-purple-haze-700">Our co-founders Tuomo Riekki and Kristo Ovaska are serial entrepreneurs who, back in 2013, noticed how advanced marketers were starting to ramp up their Facebook advertising, but the platform was unstable</p>
                    </div>
                </div>

                <div className="swiper service-process-slider">
                    <Swiper
                        slidesPerView={1}
                        speed={1000}
                        spaceBetween={24}
                        roundLengths={true}
                        centeredSlides={false}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={
                            {
                                delay: 6000
                            }
                        }

                        breakpoints={{
                            480: {
                                slidesPerView: 1
                            },
                            575: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 3
                            },
                            992: {
                                slidesPerView: 4
                            }
                        }}
                        className="d-flex align-items-end">
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-one.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">analysis</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-two.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">Design</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-three.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">development</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-four.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">Deploy</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-one.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">analysis</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-two.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">Design</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-three.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">development</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-porcess-single">
                                <div className="service-porcess-img">
                                    <img src="/images/service/process-four.png" alt="" />
                                </div>
                                <div className="service-porcess-overlay">
                                    <h5><a href="#">Deploy</a></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
