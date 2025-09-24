import appDownload from "@/constant/home2/appDownloadData"

export default function AppDownload() {
    const { span1, btn1, span2, btn2, img, subtitle } = appDownload;
    return (
        <div className="app-download-style section-gap-top-y-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="app-download-content-wrap pb-5 pb-lg-0">
                            <div className="text-start pb-5">
                                <h2> Get it now <span className="z-index-1 d-inline-block position-relative">for free <img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span> </h2>
                                <p className="body-disply-2 pt-3">{subtitle}</p>
                            </div>

                            <div className="download-options">
                                <a href="#" className="download-btn-fill">
                                    <i className="bi bi-apple"></i>
                                    <div>
                                        <span>{span1}</span>
                                        <h5>{btn1}</h5>
                                    </div>
                                </a>
                                <a href="#" className="download-btn-outlined">
                                    <i className="bi bi-microsoft"></i>
                                    <div>
                                        <span>{span2}</span>
                                        <h5>{btn2}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="download-app-screen text-center d-none d-lg-block wow fadeInRight" data-wow-offset="300" data-wow-duration="2s">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
