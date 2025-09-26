import { useRef, useState } from "react";
import { Controller, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial3() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <div className="testimonial-style-three section-gap-top-y-1 position-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="text-center">
                            <h2 className="line-height-70 text-nevy-blue">What our happy <span className="d-inline-block position-relative">users<img className="d-none d-lg-block position-absolute start-50 top-50 translate-middle low-index" src="/images/shapes/ring-text-highlighter-four.svg" alt="" /></span>  say </h2>
                            <p className="body-disply-2 pt-3">Read real experience of our user</p>
                        </div>
                    </div>
                </div>

                <Swiper
                    speed={1000}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 100,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Controller]}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    touchRatio={0.2}
                    slideToClickedSlide={true}
                    loop={true}
                    loopedSlides={3}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    className="swiper testimonial-thumbs-three pt-5 pb-5">
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-one.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-two.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-three.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-four.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-one.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-two.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-three.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-four.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-thumb-style-three">
                        <img src="/images/reviewers/testi-three-avater-five.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Swiper
                speed={1000}
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={1}
                pagination={
                    {
                        el: ".testi-pagination-three",
                        clickable: true
                    }
                }
                loop={true}
                loopedSlides={4}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                breakpoints={
                    {
                        480: {
                            slidesPerView: 1
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 2
                        }
                    }
                }
                className="swiper testimonil-slider-three">
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">I overcame anxiety and gained the clarity I needed through Brain Waves Analysis. It has truly improved my productivity and focus.</p>
                        <h5>Priya Sharma</h5>
                        <span>Marketing Professional</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Real transformation! The brainwave feedback helped me achieve peace of mind and better study focus. I feel more confident than ever.</p>
                        <h5>Arjun Mehta</h5>
                        <span>University Student</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">From managing stress to boosting decision-making, Brain Waves Analysis has sharpened my mental clarity and emotional resilience.</p>
                        <h5> Kavita Iyer</h5>
                        <span>CEO, Tech Startup</span>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                        <h5>Mila McSabbu</h5>
                        <span>Designer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                        <h5>Mila McSabbu</h5>
                        <span>Designer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                        <h5>Mila McSabbu</h5>
                        <span>Designer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                        <h5>Mila McSabbu</h5>
                        <span>Designer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                        <h5>Mila McSabbu</h5>
                        <span>Designer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card-style-three">
                        <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                        <h5>Mila McSabbu</h5>
                        <span>Designer</span>
                    </div>
                </SwiperSlide> */}
            </Swiper>

            <div className="container">
                <div className="row">
                    <div className="co-lg-12 text-center mt-5 d-lg-block d-none">
                        <div className="testi-pagination-three"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
