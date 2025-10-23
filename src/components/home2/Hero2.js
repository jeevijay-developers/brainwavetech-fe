import { hero2Counter } from "@/constant/home2/heroTwoData";
import SingleCounter from "./SingleCounter";

export default function Hero2() {
    return (
       <div className="hero-style-two-wrapper">
  {/* hero style start  */}
  <div className="hero-style-two position-relative z-index-1">
    
    {/* Decorative images */}
    <div className="hero-mobil-screen position-absolute low-index anima-trasform-x-1 d-none d-lg-block">
      <img
        src="/images/hero/hero-mobil-screen.png"
        alt=""
        className="wow fadeInRight img-fluid"
        data-wow-offset="300"
        data-wow-duration="2s"
      />
    </div>
    <div className="container">
      <div className="row justify-content-center min-vh-100 align-items-center section-gap-xl-bottom section-gap-xl-top">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="hero-contents text-center position-relative mt-100">
            
            <img
              src="/images/shapes/hero-two-ball.png"
              alt=""
              className="position-absolute end-100 hero-floting-img-one anima-trasform-y-1 d-none d-lg-block img-fluid"
            />
            <img
              src="/images/shapes/hero-two-sheet.png"
              alt=""
              className="hero-floting-img-two position-absolute end-0 top-50 d-none d-xl-block low-index fadeInUp wow img-fluid"
            />

            {/* Heading */}
            <h1 className="text-soft-black fw-bold fs-0 fs-md-1 ">
              Unlock Your{" "}
              <span className="d-inline-block position-relative z-index-1">
                Mind&apos;s{" "}
                <img
                  src="/images/shapes/text-cuntom-underline.svg"
                  alt=""
                  className="highlighter-shape position-absolute bottom-0 start-0 low-index"
                />
              </span>{" "}
              <br />
              Full Potential
            </h1>

            {/* Paragraph */}
            <p className="fs-6 fs-md-5 mt-3 px-2 px-md-0">
              Discover clarity, focus, and well-being with our Brain Waves Analysis —
              your first step toward success, balance, and personal growth.
            </p>

            {/* Button */}
            <div className="hero-btn mt-4">
              <a href="#" className="btn-fill-pill btn btn-primary px-4 py-2 rounded-pill">
                Book your Brain Waves Analysis<span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* hero style end  */}

  {/* fun-fact style start */}
  <div className="fun-fact-style-two mt-5 mt-lg-0">
    <div className="fun-fact-overlay"></div>
    <div className="fun-fact-bg-wrap">
      <div className="counter d-flex gap-4 flex-wrap justify-content-center">
        <div className="row gy-4 justify-content-center" style={{ width: "90%", maxWidth: "1300px" }}>
          <SingleCounter counterData={hero2Counter} />
        </div>
      </div>
    </div>
  </div>
  {/* fun-fact style end */}

  <style jsx>{`
    .hero-contents h1 {
      line-height: 1.2;
    }

    .btn-fill-pill {
      background-color: #1b3c53;
      color: #fff;
      transition: all 0.3s ease;
    }

    .btn-fill-pill:hover {
      background-color: #14506a;
      color: #fff;
    }

    @media (max-width: 575.98px) {
      /* Hero adjustments for mobile-L 425px */
      .hero-contents {
        margin-top: 50px !important;
        padding: 0 1rem;
      }

      .hero-contents h1 {
        font-size: 1.5rem;
        line-height: 1.3;
      }

      .hero-contents p {
        font-size: 0.95rem;
        padding: 0 0.5rem;
      }

      .hero-btn a {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
      }

      /* Hide absolute decorative images on very small screens */
      .hero-mobil-screen,
      .hero-floting-img-one,
      .hero-floting-img-two {
        display: none !important;
      }
    }
  `}</style>
</div>

    )
}
