export default function SupplyChain() {
    return (
        <div className="section-gap-xl-top about-disply-features position-relative z-index-1">
            <div className="container">
                <div className="row align-items-center gy-4 justify-content-between">
                    <div className="col-lg-5">
                        <div className="disply-features-content">
                            <h3 className="text-bright-gray">Supply <br />
                                Chain Optimization</h3>
                            <p className="body-disply-1 pt-20 text-purple-haze-700">Our powerful procurement tools and dedicated consultants simplify how your business buys and manages hardware and software. We provide end-to-end support for your entire IT lifecycle.
                            </p>
                            <div className="hero-btn mt-5">
                                <a href="#" className="btn-fill-rounded">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row disply-feature-cards position-relative z-index-1">
                            <div className="disply-feature-card v1 wow fadeInRight">
                                <div className="feature-icon">
                                    <img src="/images/Icons/tick-square-icon.svg" alt="" />
                                </div>
                                <div className="feature-info">
                                    <span>Cloud</span>
                                    <h5>Clound solutions & management</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="disply-feature-card mt-20 ">
                                    <div className="feature-icon">
                                        <img src="/images/Icons/tick-square-icon.svg" alt="" />
                                    </div>
                                    <div className="feature-info">
                                        <span>Software</span>
                                        <h5>Software solutions & services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="disply-feature-card v2 mt-20 wow fadeInRight" data-wow-delay="0.6s">
                                <div className="feature-icon">
                                    <img src="/images/Icons/tick-square-icon.svg" alt="" />
                                </div>
                                <div className="feature-info">
                                    <span>Product</span>
                                    <h5>Product lifecycle services</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
