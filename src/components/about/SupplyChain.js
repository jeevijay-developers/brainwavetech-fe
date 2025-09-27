export default function SupplyChain() {
  return (
    <div className="section-gap-xl-top about-disply-features position-relative z-index-1">
      <div className="container">
        <div className="row align-items-center gy-4 justify-content-between">
          <div className="col-lg-5">
            <div className="disply-features-content">
              <h3 className="text-bright-gray">
                Brain Waves Tech <br />
                Solutions & Benefits
              </h3>
              <p className="body-disply-1 pt-20 text-purple-haze-700">
                Our patented Brain Wave Analysis and Customized Sound Therapy
                empower individuals, counselors, and organizations to achieve
                clarity, focus, and emotional well-being. With over 92%
                accuracy, we deliver insights that transform personal growth and
                professional performance.
              </p>
              <div className="hero-btn mt-5">
                <a href="#services" className="btn-fill-rounded">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row disply-feature-cards position-relative z-index-1">
              <div className="disply-feature-card v1 wow fadeInRight">
                <div className="feature-icon">
                  <img
                    src="/images/Icons/tick-square-icon.svg"
                    alt="Brainwave Report Icon"
                  />
                </div>
                <div className="feature-info">
                  <span>Analysis</span>
                  <h5>Brain Wave Reports with 15+ parameters</h5>
                </div>
              </div>
              <div
                className="d-flex justify-content-end wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="disply-feature-card mt-20 ">
                  <div className="feature-icon">
                    <img
                      src="/images/Icons/tick-square-icon.svg"
                      alt="Sound Therapy Icon"
                    />
                  </div>
                  <div className="feature-info">
                    <span>Therapy</span>
                    <h5>Customized Sound Solutions</h5>
                  </div>
                </div>
              </div>
              <div
                className="disply-feature-card v2 mt-20 wow fadeInRight"
                data-wow-delay="0.6s"
              >
                <div className="feature-icon">
                  <img
                    src="/images/Icons/tick-square-icon.svg"
                    alt="Training Icon"
                  />
                </div>
                <div className="feature-info">
                  <span>Support</span>
                  <h5>Training, AI Reports & Ongoing Guidance</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
