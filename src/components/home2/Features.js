import { excellentFeaturesData } from "@/constant/home2/featuresData";
import Feature from "./Feature";

export default function Features() {
    return (
        <div className="feature-style-two pt-30">
            <div className="container">
                <div className="row justify-content-center position-relative">
                    <div className="col-lg-8">
                        <img src="/images/shapes/3d_rocket.png" alt="" className="position-absolute end-0 d-none d-lg-block anima-trasform-z-1 " data-aos="fade-left" data-aos-delay="300" />
                        <div className="section-title-2 text-center pb-60">
                            <h2 className="text-soft-black">Key Features for <span className="d-inline-block position-relative"> Mental<img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span><br /> Clarity &amp; Inner Transformation
                            </h2>
                            <p className="body-disply-2 px-lg-5 pt-3">Harness the power of neuroscience, brainwave mapping, and personalized sound therapy—designed to unlock your true potential, enhance focus, and bring lasting emotional balance. </p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    <Feature featuresData={excellentFeaturesData} />
                </div>
                
                {/* Brain Waves Categories Section */}
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-lg-10">
                        <div className="section-title-2 text-center pb-50">
                            <h3 className="text-soft-black mb-3">Categories & <span className="d-inline-block position-relative">Characteristics<img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span> of Brain Waves</h3>
                            <p className="body-disply-2 px-lg-4">Understand the different types of brain waves and their unique impact on your mental state, cognitive functions, and overall well-being.</p>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="brainwave-item bg-white shadow-sm border-0 rounded-4 p-4 h-100 position-relative overflow-hidden hover-lift">
                                    <div className="brainwave-icon mb-3">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                                            <span className="fw-bold text-primary fs-5">δ</span>
                                        </div>
                                    </div>
                                    <h5 className="text-dark fw-bold mb-2">Delta Waves <span className="text-primary fs-6">(0.5–3 Hz)</span></h5>
                                    <p className="text-muted mb-0 lh-base">Sleep quality, satisfaction, self-esteem</p>
                                    <div className="position-absolute top-0 end-0 p-3 opacity-25">
                                        <div className="bg-primary rounded-circle" style={{width: '8px', height: '8px'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="brainwave-item bg-white shadow-sm border-0 rounded-4 p-4 h-100 position-relative overflow-hidden hover-lift">
                                    <div className="brainwave-icon mb-3">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                                            <span className="fw-bold text-success fs-5">θ</span>
                                        </div>
                                    </div>
                                    <h5 className="text-dark fw-bold mb-2">Theta Waves <span className="text-success fs-6">(3–8 Hz)</span></h5>
                                    <p className="text-muted mb-0 lh-base">Thought processes, emotions, overthinking, rigidity</p>
                                    <div className="position-absolute top-0 end-0 p-3 opacity-25">
                                        <div className="bg-success rounded-circle" style={{width: '8px', height: '8px'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="brainwave-item bg-white shadow-sm border-0 rounded-4 p-4 h-100 position-relative overflow-hidden hover-lift">
                                    <div className="brainwave-icon mb-3">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                                            <span className="fw-bold text-warning fs-5">α</span>
                                        </div>
                                    </div>
                                    <h5 className="text-dark fw-bold mb-2">Alpha Waves <span className="text-warning fs-6">(8–12 Hz)</span></h5>
                                    <p className="text-muted mb-0 lh-base">Brain control, balanced thinking, positivity, vision</p>
                                    <div className="position-absolute top-0 end-0 p-3 opacity-25">
                                        <div className="bg-warning rounded-circle" style={{width: '8px', height: '8px'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="brainwave-item bg-white shadow-sm border-0 rounded-4 p-4 h-100 position-relative overflow-hidden hover-lift">
                                    <div className="brainwave-icon mb-3">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                                            <span className="fw-bold text-info fs-5">β</span>
                                        </div>
                                    </div>
                                    <h5 className="text-dark fw-bold mb-2">Beta Waves <span className="text-info fs-6">(12–38 Hz)</span></h5>
                                    <p className="text-muted mb-0 lh-base">Intellect, learning, memory, interpretation</p>
                                    <div className="position-absolute top-0 end-0 p-3 opacity-25">
                                        <div className="bg-info rounded-circle" style={{width: '8px', height: '8px'}}></div>
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
