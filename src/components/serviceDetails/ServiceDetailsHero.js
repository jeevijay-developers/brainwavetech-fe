export default function ServiceDetailsHero() {
    return (
        <div className="service-details-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
            <img src="/images/shapes/line-svg-blue.svg" alt="" className="position-absolute top-0 start-0 corner-line low-index" />
            <div className="container">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <h1 className="text-bright-gray">Analytics & reporting service for your business</h1>
                        <p className="body-disply-1 mt-4">An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at </p>
                        <div className="service-details-wrapper-btn mt-5">
                            <a href="#" className="btn-fill-rounded">Get Started Now</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-lg-end">
                        <div className="service-price position-relative">
                            <div className="service-price-shape">
                                <img src="/images/shapes/service-details-shape.png" alt="" className="img-fluid" />
                            </div>
                            <div className="service-price-tag position-absolute top-50 start-50 translate-middle text-center">
                                <h5>Start from</h5>
                                <h3 className="text-bright-gray">$48</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
