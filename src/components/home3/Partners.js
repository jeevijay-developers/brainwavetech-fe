import partnersData from "@/constant/home3/trustedPartners"

export default function Partners() {
    const { subTitle, btnTxt, images: { img1, img2, img3, img4 } } = partnersData;
    return (
        <div className="partner-style-two section-gap-xl-top position-relative">
            <div className="container">
                <div className="row justify-content-between align-items-center gy-4">
                    <div className="col-lg-5">
                        <div className="partner-style-two-content">
                            <h2 className="line-height-70 text-nevy-blue"> See Our <span
                                className="d-inline-block position-relative text-bright-green">trusted <img
                                    className="d-none d-lg-block position-absolute start-50 top-50 translate-middle low-index"
                                    src="/images/shapes/ring-text-highlighter-three.svg" alt="" /></span> <br />
                                partners
                            </h2>
                            <p className="body-disply-2 pt-4">{subTitle}</p>

                            <div className="partner-btn mt-4">
                                <a href="#" className="btn-transparent-v1">{btnTxt}<i
                                    className="bi bi-chevron-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="partner-logo-row d-flex gap-lg-5 gap-4">
                            <div className="partner-logo wow zoomIn"> <img
                                src={img1} alt="" className="img-fluid" />
                            </div>

                            <div className="partner-logo mt-lg-5">
                                <img src={img2} alt="" className="img-fluid" />
                            </div>

                            <div className="partner-logo  wow zoomIn" data-wow-delay="0.3s"><img
                                src={img3} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="partner-logo-row d-flex">
                            <div className="partner-logo  wow zoomIn mt-4 single-client-logo" data-wow-delay="0.6s">
                                <img src={img4} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
