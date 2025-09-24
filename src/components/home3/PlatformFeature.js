import platformData from "@/constant/home3/platformData";

export default function PlatformFeature() {
    return (
        <div className="feature-style-six section-gap-xl-top position-relative">
            <div className="container-fluid">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6">
                        <div className="feature-six-screen d-flex justify-content-center">
                            <img src={platformData.img} alt=""
                                className="img-fluid wow fadeInUp" />
                            <div className="feature-six-bg"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <div className="feature-six-contents">
                            <h2 className="line-height-70 text-nevy-blue">Platform to make it <span
                                className="d-inline-block position-relative">easier<img
                                    className="d-none d-lg-block position-absolute start-50 top-50 translate-middle low-index"
                                    src="/images/shapes/ring-text-highlighter-four.svg" alt="" /></span> for
                                users
                            </h2>
                            <p className="body-disply-2 pt-3">Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
                                altera legimu. Me vita de lege ndos expet end is ad. Ex mei omita aliu mi ando, haeo
                                tibi que com titure viset cut.</p>

                            <div className="feature-actions d-flex flex-wrap gap-4 pt-5">
                                <div className="feature-action-single feature-action wow fadeInRight" data-wow-delay="0.2s">
                                    <h5>Checkout</h5>
                                    <p>Accept payments by sharing the link</p>
                                    <div className="action-btn">
                                        <a href="#"><i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div className="feature-action-single wow fadeInRight" data-wow-delay="0.5s">
                                    <h5>Integration</h5>
                                    <p>Accept payments by store integration</p>
                                    <div className="action-btn">
                                        <a href="#"><i className="bi bi-arrow-right"></i></a>
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
