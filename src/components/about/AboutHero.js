export default function AboutHero() {
  return (
    <div className="about-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
      <img
        src="/images/shapes/line-svg-blue.svg"
        alt=""
        className="position-absolute top-0 start-0 corner-line low-index"
      />

      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center py-lg-4">
          <div className="col-xl-6 col-lg-7">
            <div className="about-wrap-highlighted">
              <h1 className="text-bright-gray">
                Unlock Mental Clarity & Wellness with Brain Waves Tech
              </h1>
              <p className="body-disply-1 mt-24">
                We provide cutting-edge Brain Wave Analysis and Customized Sound
                Therapy, using patented BCI technology to measure, understand,
                and enhance your mental state with over 92% accuracy.
              </p>

              <div className="hero-btn mt-5">
                <a href="#services" className="btn-fill-rounded">
                  Get Your Brainwave Report
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-highlighted-screens position-relative mb-lg-4">
              {/* <img
                src="/images/shapes/line-svg-yellow.svg"
                alt=""
                className="position-absolute bottom-100 start-100 line-shape"
              /> */}
              <div className="about-screen-one">
                <img
                  src="/images/shapes/vb/Gemini_Generated_Image_avs09eavs09eavs0.png"
                  alt="Brainwave Analysis Report"
                  className="wow fadeInRight"
                  style={{
                    maxHeight: "400px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
              {/* <img
                src="/images/screen/about-screent-two.png"
                alt="Customized Sound Therapy"
                className="anima-trasform-y-1 about-screen-two"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
