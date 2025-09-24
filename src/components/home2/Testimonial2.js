import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function Testimonial2() {
    let slider1 = useRef(null);
    let slider2 = useRef(null);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [])
    return (
        <div className="testimonial-style-two section-gap-xl-top section-gap-xl-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="text-center pb-60">
                            <h2 className="text-soft-black">What our <span className="d-inline-block position-relative">client<img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span> says </h2>

                            <p className="body-disply-2 pt-3">Growth your business with using us</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3">
                        <Slider
                            asNavFor={nav1}
                            ref={slider => slider2 = slider}
                            fade={true}
                            speed={500}
                        >
                            <div className="avarter-1">
                                <img src="/images/shapes/testi-thumb-man-1.png" alt="" />
                            </div>
                            <div className="avarter-1">
                                <img src="/images/shapes/testi-thumb-man-1.png" alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-7 testi-pagination-two">
                        <Slider
                            asNavFor={nav2}
                            ref={slider => slider1 = slider}
                            dots={true}
                            speed={500}
                            arrows={false}
                        >
                            <div>
                                <div className="testimonial-card-style-two px-4">
                                    <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding</p>
                                    <div className="testimonial-card-bottom">
                                        <h5 className="reviewer-name">Mila McSabbu</h5>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial-card-style-two px-4">
                                    <p className="body-disply-2">Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding</p>
                                    <div className="testimonial-card-bottom">
                                        <h5 className="reviewer-name">Mila McSabbu</h5>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
