import { hero2Counter } from "@/constant/home2/heroTwoData";
import SingleCounter from "./SingleCounter";

export default function Hero2() {
    return (
        <div className="hero-style-two-wrapper">
            {/* hero style start  */}
            <div className="hero-style-two position-relative z-index-1">
                <div className="hero-mobil-screen position-absolute low-index anima-trasform-x-1 d-none d-lg-block">
                    <img src="/images/hero/hero-mobil-screen.png" alt="" className="wow fadeInRight" data-wow-offset="300" data-wow-duration="2s" />
                </div>
                <div className="container">
                    <div className="row justify-content-center min-vh-100 align-items-center section-gap-xl-bottom section-gap-xl-top">
                        <div className="col-lg-8 ">
                            <div className="hero-contents text-center position-relative mt-100">
                                <img src="/images/shapes/hero-two-ball.png" alt="" className="position-absolute end-100 hero-floting-img-one anima-trasform-y-1 d-none d-lg-block" />
                                <img src="/images/shapes/hero-two-sheet.png" alt="" className="hero-floting-img-two position-absolute end-0 top-50 d-none d-xl-block low-index fadeInUp wow" />

                                <h1 className="text-soft-black">Unlock Your <span className="d-inline-block position-relative z-index-1">Mind&apos;s <img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute bottom-0 start-0 low-index" /></span> <br />Full Potential</h1>
                                <p>Discover clarity, focus, and well-being with our Brain Waves Analysis — your first step toward success, balance, and personal growth.</p>
                                <div className="hero-btn">
                                    <a href="#" className="btn-fill-pill">Book your Brain Waves Analysis<span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero style end  */}
            {/* fun-fact style start  */}
            <div className="fun-fact-style-two">
                <div className="fun-fact-overlay"></div>
                <div className="fun-fact-bg-wrap">
                    <div className="counter d-flex gap-6 flex-wrap justify-content-center" >
                        <div className="row gy-4 justify-content-center" style={{ width: "90%", maxWidth: "1300px" }}>
                            <SingleCounter counterData={hero2Counter} />
                        </div>
                    </div>
                </div>
            </div>
            {/* fun-fact style end */}
        </div>
    )
}
