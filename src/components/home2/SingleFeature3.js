import { singleFeature3 } from "@/constant/home2/featuresData";

export default function SingleFeature3() {
    const { features, graph: { img1, img2, img3 } } = singleFeature3;
    return (
        <div className="single-feature-style-three section-gap-top-y-1 section-gap-bottom-y-1 position-relative z-index-1">
            <img className="d-none d-lg-block position-absolute top-0 end-0  low-index" src="/images/shapes/3D-focus.png" alt="" data-aos="fade-left" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text-start pb-2">
                            <h2>
                                How our  <span className="d-inline-block position-relative">Tracker <img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span> work for you </h2>
                            <p className="body-disply-2 pt-3">An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative z-index-1">
                <img className="anima-trasform-x-1 d-none d-lg-block position-absolute top-25 start-0 translate-middle-y low-index" src="/images/shapes/3d-bord.png" alt="" data-aos="fade-right" />
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-7">

                            {
                                features.length > 0 && features.map((dt, i) => {
                                    return (
                                        <div key={dt.id} className={`feature-card-style-three ${dt.varient ? dt.varient : ""} ${i % 2 !== 0 ? "feature-futured-card" : ""} wow fadeInUp`} data-wow-delay="0.3s">
                                            <div className="feature-icon">
                                                <img src={dt.icon} alt="" className="img-fluid" />
                                            </div>
                                            <div className="feature-disc">
                                                <h5>{dt.title}</h5>
                                                <p className="body-disply-2">{dt.p}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-5">
                            <div className="row align-items-center feature-three-screen">
                                <div className="col-lg-8 col-6 text-end">
                                    <div className="feature-single-three-screens text-end">
                                        <img src={img1} alt="" className="img-fluid wow fadeInDown" />
                                        <img src={img2} alt="" className="d-none d-lg-inline-block mt-4 img-fluid wow fadeInUp" data-aos-delay="0.3s" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="feature-single-three-screens">
                                        <img src={img3} alt="" className=" wow fadeInRight" data-aos-delay="0.6s" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
