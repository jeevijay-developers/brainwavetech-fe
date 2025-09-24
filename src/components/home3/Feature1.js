import transactionHistory from "@/constant/home3/transactionHistoryData"

export default function Feature1() {
    const { subTitle, btnTxt, img1, img2 } = transactionHistory;
    return (
        <div className="feature-style-five section-gap-top-y-1">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 order-1 order-lg-0">
                        <div className="feature-four-content">
                            <h2 className="line-height-70 text-nevy-blue">You can view <span
                                className="d-inline-block position-relative">transaction<img
                                    className="d-none d-lg-block position-absolute start-50 top-50 translate-middle low-index"
                                    src="/images/shapes/ring-text-highlighter-two.svg" alt="" /></span> <br />
                                history easily
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
                    <div className="col-lg-6 order-0 order-lg-1 wow fadeInRight">
                        <div className="feature-five-screen position-relative">
                            <img src={img1} alt="" className="screen-five" />
                            <img src={img2} alt=""
                                className="position-absolute top-0 start-50 feature-animi anima-trasform-x-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
