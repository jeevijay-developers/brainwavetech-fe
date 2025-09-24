export default function AboutHero() {
    return (
        <div className="about-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
            <img src="/images/shapes/line-svg-blue.svg" alt="" className="position-absolute top-0 start-0 corner-line low-index" />

            <div className="container">
                <div className="row gy-4 justify-content-between align-items-center py-lg-4">
                    <div className="col-xl-6 col-lg-7">
                        <div className="about-wrap-highlighted">
                            <h1 className=" text-bright-gray">Working Closely With Customers In Our MYMT</h1>
                            <p className="body-disply-1 mt-24">An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at </p>

                            <div className="hero-btn mt-5">
                                <a href="#" className="btn-fill-rounded">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-highlighted-screens position-relative mb-lg-4">
                            <img src="/images/shapes/line-svg-yellow.svg" alt="" className="position-absolute bottom-100 start-100 line-shape" />
                            <div className="about-screen-one ">
                                <img src="/images/screen/about-screen-one.png" alt="" className="wow fadeInRight" />
                            </div>
                            <img src="/images/screen/about-screent-two.png" alt="" className="anima-trasform-y-1 about-screen-two" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
