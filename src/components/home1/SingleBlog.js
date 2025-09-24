import { SwiperSlide } from "swiper/react";

export default function SingleBlog({ data }) {
    console.log(data)
    return (
        <>
            {
                data.length > 0 && data.map((dt, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="blog-card-style-one">
                            <div className="blog-thumb">
                                <a href="blog-details.html"><img src="/images/blog/blog-thumb-1.png" alt="" /></a>
                            </div>
                            <div className="blog-disc">
                                <div className="blog-meta d-flex justify-content-between">
                                    <a href="#">Random</a>
                                    <a href="#">24 nov, 2021</a>
                                </div>
                                <h5 className="blog-title"><a href="blog-details.html">Weekly roundup SaaS global SaaS </a></h5>
                                <div className="blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </>
    )
}
