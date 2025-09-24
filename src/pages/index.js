export default function Preview() {
    return (
        // <!-- preview hero area start -->
        <>
            <div className="preview-hero-area position-relative overflow-hidden">
                <div className="hero-animated-blobs">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src="/images/shape-wave.svg" alt="" className="position-absolute top-0 start-0 wow fadeInDown" data-wow-delay="0.5s" />
                <img src="/images/corner-circle.svg" alt="" className="corner-circle" />
                <div className="preview-screens">
                    <img src="/images/02_Home.png" alt="" className="screen-1 single-screen" />
                    <img src="/images/01_Home.png" alt="" className="screen-2 single-screen wow fadeInUp" data-wow-delay="0.3s" />
                    <img src="/images/03_Home.png" alt="" className="screen-3 single-screen wow fadeInUp" data-wow-delay="0.3s" />
                    <img src="/images/05_Services.png" alt="" className="screen-4 wow fadeInRight single-screen" data-wow-delay="0.7s" />
                    <img src="/images/service-details.png" alt="" className="screen-5 single-screen wow fadeInLeft" data-wow-delay="0.7s" />
                </div>


                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-xl-8 col-lg-10">
                            <div className="preview-hero-contant">
                                <a href="#" className="logo"><img src="/images/logo.png" alt="" /></a>
                                <h2 className="hero-title pb-4"><span className="position-relative">Powerful <img src="/images/text-cuntom-underline.svg" alt="" className="position-absolute start-0 bottom-0" /></span> Responsive SaaS, Startup & Software Template.
                                </h2>

                                <div className="hero-btns d-flex  justify-content-center mt-5 flex-wrap">
                                    <a href="#demo" className="btn-fill-rounded">View Demos</a>
                                    <a href="#" className="btn-fill-rounded">Buy Saasto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- preview hero area end --> */}

            {/* <!-- Demos area start --> */}
            <div className="main-demo-area" id="demo">
                <div className="container">
                    <div className="row pb-60">
                        <div className="col-lg-12">
                            <h3 className="section-title">Explore <span>stunning</span> demos</h3>
                        </div>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/home1" target="_blank"><img src="/images/pages/home-one.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/home1" target="_blank">Home V1</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/home2" target="_blank"><img src="/images/pages/home-two.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/home2" target="_blank">Home V2</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/home3" target="_blank"><img src="/images/pages/home-three.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/home3" target="_blank">Home V3</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/about" target="_blank"><img src="/images/pages/about.jpg" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/about" target="_blank">About Us</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/service" target="_blank"><img src="/images/pages/service.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/service" target="_blank">Services</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/service-details" target="_blank"><img src="/images/pages/service-details.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/service-details" target="_blank">Service Details</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/blog" target="_blank"><img src="/images/pages/blog.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/blog" target="_blank">Blog</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/blog-details" target="_blank"><img src="/images/pages/blog-details.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/blog-details" target="_blank">Blog Details</a> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="demo-box">
                                <div className="demo-img-wrap">
                                    <a href="/contact" target="_blank"><img src="/images/pages/contact.png" alt="" /></a>
                                </div>
                                <div className="demo-content">
                                    <h3> <a href="/contact" target="_blank">Contact</a> </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Demos area end --> */}

            {/* <!-- features area start --> */}
            <div className="features-area ">
                <div className="container">
                    <div className="row pb-60">
                        <div className="col-lg-12">
                            <h3 className="section-title">Agencico <span>Core</span> Features</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center gy-4">
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/bootstrap.png" alt="" />
                                </div>
                                <p className="pt-2">Bootstrap V5</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/sass.png" alt="" />
                                </div>
                                <p className="pt-2">Sass</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/html5.png" alt="" />
                                </div>
                                <p className="pt-2">Html5</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/css3.png" alt="" />
                                </div>
                                <p className="pt-2">Css3</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/jquery.png" alt="" />
                                </div>
                                <p className="pt-2">Js</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/w3c-validation.png" alt="" />
                                </div>
                                <p className="pt-2">W3C Validation</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/responsive.png" alt="" />
                                </div>
                                <p className="pt-2">Fully Responsive</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/clean-code.png" alt="" />
                                </div>
                                <p className="pt-2">Clean Code</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/ajux.png" alt="" />
                                </div>
                                <p className="pt-2">Ajax Contact Form</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/google-font.png" alt="" />
                                </div>
                                <p className="pt-2">Google Font</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/speed.png" alt="" />
                                </div>
                                <p className="pt-2">Speed Optimized</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ">
                            <div className="feature-box text-center">
                                <div className="feature-icon">
                                    <img src="/images/document.png" alt="" />
                                </div>
                                <p className="pt-2">Well Documented</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- features area end --> */}

            {/* <!-- footer area start--> */}
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0">
                            <div className="footer-content text-center">
                                <h3 className="text-white section-title">Feeling in love? Purchase <span>Saasto</span></h3>
                                <div className="footer-btn-wrap pt-5">
                                    <a href="#" className="btn-fill-rounded"><img src="/images/envato-logo.svg" alt="" className="img-fluid" /> <span>Purchase Now</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    {/* <!-- footer area end--> */ }
}
