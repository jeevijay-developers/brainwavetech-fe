export default function Experience2({ pb }) {
    return (
        <div className={`about-experience-wrap section-gap-xl-top position-relative z-index-1 ${pb ? pb : ""}`}>
            <div className="container-fluid">
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-6 text-lg-end">
                        <div className="position-relative about-experience-screens d-lg-inline-block d-flex flex-wrap flex-sm-nowrap">
                            <div className="about-experience-bg d-lg-block d-none">
                                <img src="/images/shapes/experience-bg.png" alt="" className="img-fluid" />
                            </div>
                            <div className="wow fadeInDown experience-screen screen-1 text-start position-absolute start-0">
                                <img src="/images/screen/experince-screen-one.png" alt="" className="img-fluid" />
                            </div>
                            <div className="wow fadeInUp experience-screen screen-2 position-absolute  end-0">
                                <img src="/images/screen/experince-screen-two.png" alt="" className="img-fluid" />
                            </div>
                            <div className="experience-screen screen-3 position-absolute d-none d-lg-block">
                                <img src="/images/screen/experince-screen-three.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="experience-content">
                            <h3 className="text-bright-gray">We are in 6 years experience in this field</h3>
                            <p className="body-disply-1 mt-4 text-purple-haze-700">Our co-founders Tuomo Riekki and Kristo Ovaska are serial entrepreneurs who, back in 2013, noticed how advanced marketers were starting to ramp up their Facebook advertising, but the platform was unstable and cumber-some to manage. </p>

                            <ul className="experience-list mt-5">
                                <li className="d-flex align-items-center">
                                    <span></span>
                                    <h5> Get insights only Google can give</h5>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span></span>
                                    <h5> Get insights only Google can give</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
