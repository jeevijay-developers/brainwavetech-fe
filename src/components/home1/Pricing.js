import Link from "next/link";

function Pricing({ mt, spaceTop = true, spaceTopXl, spaceBottomXl }) {
  return (
    <>
      <div className="container">
        <div className="row"></div>
      </div>

      <div
        className={`price-area ${spaceTop ? "pt-120" : ""} ${
          spaceTopXl ? "pt-xxl" : ""
        } ${spaceBottomXl ? "section-gap-xl-bottom" : ""}`}
      >
        <div className="pricing-tab-btn">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="blog-header text-center">
                  <h3 className="text-bright-gray">SOFTWARE PRICE</h3>
                  <p className="pt-3 body-disply-1 text-mid-gray">
                    Choose the plan that fits your needs—from demo to
                    professional to full rental solution
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="price-wrap" style={{ marginTop: "50px" }}>
                  <div className="row gy-4 justify-content-center">
                    {/* 3 Days Demo */}
                    <div className="col-lg-6 col-md-6 col-xl-4 p-xl-2 price-col">
                      <div className="price-box">
                        <div className="price-title-box">
                          <h2 className="price-title">3 DAYS DEMO</h2>
                          <h3 className="price-number">
                            INR 10/- <sub></sub>
                          </h3>
                          <p>
                            For Individuals interested in learning about
                            Brainwave data analysis
                          </p>
                        </div>
                        <div className="price-list">
                          <a
                            className="d-inline-block btn-fill-rounded w-100 text-center"
                            href="#"
                          >
                            Get Started
                          </a>
                          <ul>
                            <li>Read Brainwave Graph</li>
                            <li>3 Days access for one time</li>
                            <li>View one record</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Professional */}
                    <div className="col-lg-6 col-md-6 col-xl-4 p-xl-2 price-col">
                      <div className="price-box popular">
                        <div className="price-title-box">
                          <h2 className="price-title">PROFESSIONAL</h2>
                          <h3 className="price-number">
                            INR 2,499/- <sub>per month</sub>
                          </h3>
                          <p>
                            per month per account for individual Professionals/
                            Alternate Therapists/ Counsellors
                          </p>
                        </div>
                        <div className="price-list">
                          <a
                            className="d-inline-block btn-fill-rounded w-100 text-center"
                            href="#"
                          >
                            Purchase Now
                          </a>
                          <ul>
                            <li>
                              <b>Annual Subscription 24,999/-</b>
                            </li>
                            <li>Unlimited Recordings</li>
                            <li>One Month Free Support</li>
                            <li>Advanced Brain Wave Analysis</li>
                            <li>Customized Sound Therapy</li>
                            <li>Personalized Reports</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Rental Model */}
                    <div className="col-lg-6 col-md-6 col-xl-4 p-xl-2 price-col">
                      <div className="price-box">
                        <div className="price-title-box">
                          <h2 className="price-title">RENTAL MODEL</h2>
                          <h3 className="price-number">
                            INR 9,500/- <sub>per month</sub>
                          </h3>
                          <p>Hardware & Software subscription for a month</p>
                        </div>
                        <div className="price-list">
                          <a
                            className="d-inline-block btn-fill-rounded w-100 text-center"
                            href="#"
                          >
                            Know More, Contact Us
                          </a>
                          <ul>
                            <li>
                              <b>Complete Solution:</b>
                            </li>
                            <li>BCI Hardware Rental</li>
                            <li>Full Software Access</li>
                            <li>Unlimited Recordings</li>
                            <li>Advanced Analysis Tools</li>
                            <li>Customized Sound Therapy</li>
                            <li>Priority Support</li>
                            <li>Training & Onboarding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
