import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { BlogSubTitle, BlogTitle, arrowLeft, arrowRight, sliderData, sliderTitle } from '@/constant/home1/blogsData';

export default function Blogs() {

    return (
        <div className="blog-style-one position-relative section-gap-xl-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="blog-header text-center">
                            <h3 className="text-bright-gray">{BlogTitle}</h3>
                            <p className="pt-3 body-disply-1 text-mid-gray">{BlogSubTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row align-content-center pt-60">
                    <div className="col-md-7">
                        <h4>{sliderTitle}</h4>
                    </div>
                    <div className="col-md-5 ">
                        <div className="blog-slider-nav d-md-flex justify-content-end d-none">
                            <div className="blog-prev"><i className={arrowLeft}></i></div>
                            <div className="blog-next"><i className={arrowRight}></i></div>
                        </div>
                    </div>
                </div>

                <div className="swiper blog-slider-one pt-5">
                    <Swiper
                        slidesPerView={3}
                        speed={1000}
                        spaceBetween={24}
                        loop={true}
                        roundLengths={true}
                        centeredSlides={false}
                        autoplay={{ delay: 10000 }}
                        freeMode={true}
                        navigation={
                            {
                                nextEl: '.blog-next',
                                prevEl: '.blog-prev',
                            }
                        }
                        breakpoints={
                            {
                                480: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                }
                            }
                        }
                        modules={[Autoplay, Navigation]}
                        className="swiper-wrapper">
                        {
                            sliderData.length > 0 && sliderData.map(dt => {
                                const { id, img, title, date, txt } = dt;
                                return (
                                    <SwiperSlide key={id} className="swiper-slide">
                                        <div className="blog-card-style-one">
                                            <div className="blog-thumb">
                                                <a href="blog-details.html"><img src={`/images/blog/${img}`} alt="" /></a>
                                            </div>
                                            <div className="blog-disc">
                                                <div className="blog-meta d-flex justify-content-between">
                                                    <a href="#">{txt}</a>
                                                    <a href="#">{date}</a>
                                                </div>
                                                <h5 className="blog-title"><a href="blog-details.html">{title}</a></h5>
                                                <div className="blog-btn">
                                                    <a href="blog-details.html">{dt.btnTxt}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
