import { singleFeature2 } from "@/constant/home2/featuresData"

export default function SingleFeature2() {
    const { features } = singleFeature2;
    return (
        <div className="single-feature-style-two section-gap-xl-top section-gap-xl-bottom">
            <div className="container-fluid">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 text-center">
                        <div className="single-feature-two-screen text-center position-relative d-inline-block ">
                            <div className="main-screen"><img src="/images/screen/feature-two-main-screen.png" alt="" className="img-fluid" /></div>

                            <div className="float-screen-one position-absolute d-none d-lg-block wow fadeInDown anima-trasform-y-1">
                                <img src="/images/shapes/feature-sheet.png" alt="" />
                            </div>
                            <div className="float-screen-two position-absolute wow fadeInLeft" data-wow-delay="0.3s">
                                <img src="/images/shapes/hero-two-ball.png" alt="" className="circle-shadow-two" />
                            </div>
                            <div className="float-screen-three position-absolute wow fadeInRight" style={{position: "relative", left:"10rem"}} data-wow-delay="0.6s">
                                <img src="/images/shapes/sinewave.png" alt="" className="circle-shadow-two" />
                            </div>
                            <div className="float-screen-four position-absolute wow fadeInLeft" data-wow-delay="0.9s">
                                <img src="/images/shapes/neuron.png" alt="" className="circle-shadow-two" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <div className="feature-analytics-contents">
                            <div className="text-start">
                                <h2>
                                    Brainwave
                                    <span className="d-inline-block position-relative mx-3"> Analysis <img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span>
                                    Breakdown
                                </h2>
                                <p className="body-disply-2 pt-3">Gain clarity and control over your productivity with smart tracking, insightful dashboards, and detailed reports designed to help you grow.</p>
                            </div>

                            {
                                features.length > 0 && features.map(dt => {
                                    return (
                                        <div key={dt.id} className={`feature-card-style-two ${dt.varient ? dt.varient : ""} wow fadeInUp`} data-wow-delay="0.3s">
                                            <div className="feature-icon">
                                                <img src={dt.icon} alt="" />
                                            </div>
                                            <div className="feature-disc">
                                                <h5>{dt.title}</h5>
                                                <p>{dt.p}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
