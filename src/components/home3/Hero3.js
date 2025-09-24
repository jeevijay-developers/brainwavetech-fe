import heroData from "@/constant/home3/heroData"

export default function Hero3() {
    const { dotsImg, subTitle, img1, img2, img3, btnTxt } = heroData;
    return (
        <div className="hero-style-three position-relative z-index-1">
            <div className="dot-shape anima-trasform-y-1 low-index d-none d-lg-block">
                <img src="/images/shapes/hero-three-dots-shape.png" alt="dots" />
            </div>

            <div className="hero-animated-blobs">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content py-5">
                            <h1 className="text-xxl">Manage Your
                                business <span className="d-inline-block position-relative text-bright-green">finance <img
                                    className="d-none d-lg-block position-absolute start-50 top-50 translate-middle d-none d-lg-block"
                                    src="/images/shapes/ring-text-highlighter.svg" alt="" /></span>
                                easily</h1>
                            <p className="body-disply-2">{subTitle}</p>
                            <div className="hero-btn">
                                <a href="#" className="btn-fill-pill-v2">
                                    {btnTxt} <span></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="hero-mobil-screen position-relative" >
                            <img src={img1} alt="hero section" className="hero-screen-three" />
                            <img className="animated-kit position-absolute anima-trasform-y-1 translate-middle-y"
                                src={img2} alt="hero section small" />
                            <img className="animated-kit-two position-absolute"
                                src={img3} alt="hero section graph" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
