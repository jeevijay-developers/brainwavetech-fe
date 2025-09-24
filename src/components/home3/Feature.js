import easyPayments from "@/constant/home3/easyPaymentsData"

export default function Feature() {
    const { img1, img2, subTitle, btnTxt } = easyPayments;
    return (
        <div className="feature-style-four section-gap-xl-top position-relative">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between gy-4">
                    <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center wow fadeInLeft">
                        <div className="feature-four-screens position-relative">
                            <img src={img1} alt="" className="img-fluid" />
                            <img src={img2} alt=""
                                className="anima-trasform-y-1 position-absolute bottom-0 feature-four-animi" />
                        </div>
                    </div>
                    <div className="col-lg-6 justify-content-center justify-content-lg-start d-flex">
                        <div className="feature-four-content">
                            <h2 className="line-height-70 text-nevy-blue">Quick and easy
                                <span className="d-inline-block position-relative text-bright-green">payments <img
                                    className="d-none d-lg-block position-absolute start-50 top-50 translate-middle low-index"
                                    src="/images/shapes/ring-text-highlighter-two.svg" alt="" /></span>with <br />
                                just a few clicks
                            </h2>
                            <p className="body-disply-2 pt-4 wow fadeInUp" data-wow-delay="0.3s">
                                {subTitle}
                            </p>

                            <div className="feature-btn pt-5 wow fadeInUp" data-wow-delay="0.6s">
                                <a href="#" className="btn-fill-pill-v2">
                                    {btnTxt} <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
