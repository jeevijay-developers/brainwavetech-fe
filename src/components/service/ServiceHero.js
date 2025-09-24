import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ServiceHero({ data }) {
    const { hero } = data;
    return (
        <div className="service-wrapper pt-xxl section-gap-xl-bottom position-relative">
            <img src="/images/shapes/line-svg-blue.svg" alt="" className="position-absolute top-0 start-0 corner-line low-index" />
            <img src="/images/shapes//hero-square-dots.png" alt="" className="position-absolute bottom-0 start-0 corner-line low-index" />

            <div className="container-fluid">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <div className="row justify-content-xxl-end justify-content-center">
                            <div className="col-xxl-9 col-xl-9 col-lg-12 service-main-content">
                                <h1 className="text-bright-gray">{hero.title}</h1>
                                <p className="text-purple-haze-700 mt-4 body-disply-1">{hero.p}</p>
                                <div className="hero-btn mt-5">
                                    <a href="#" className="btn-fill-rounded">{hero.btnTxt}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-slider swiper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                speed={1000}
                                loop={false}
                                centeredSlides={false}
                                breakpoints={{
                                    480: {
                                        slidesPerView: 1
                                    },
                                    575: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 2.5
                                    }
                                }}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="single-service-slide">
                                        <div className="service-slide-img">
                                            <img src="/images/service/service-one.png" alt="" />
                                        </div>
                                        <div className="service-slide-overlay featured d-flex align-items-end justify-content-between">
                                            <h5 className="text-white">Our business <br /> goes on fire</h5>

                                            <div className="text-center text-white">
                                                <h4>100</h4>
                                                <span>Topic</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-v2">
                                    <div className="single-service-slide">
                                        <div className="service-slide-img">
                                            <img src="/images/service/service-three.png" alt="" />
                                        </div>
                                        <div className="service-slide-overlay d-flex align-items-end">
                                            <h5 className="topic"><a href="#" className="text-white ">Writing</a></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-service-slide">
                                        <div className="service-slide-img">
                                            <img src="/images/service/service-three.png" alt="" />
                                        </div>
                                        <div className="service-slide-overlay d-flex align-items-end">
                                            <h5 className="topic"><a href="#" className="text-white ">Business</a></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
