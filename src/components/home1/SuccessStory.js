import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function SuccessStory({ spaceTopXl = true, spaceBottomXl }) {
  let slider1 = useRef(null);
  let slider2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  return (
    <div
      className={`testimonial-style-one position-relative ${
        spaceTopXl ? "section-gap-xl-top" : ""
      } ${spaceBottomXl ? "section-gap-bottom-y-1" : ""}`}
    >
      <div className="container">
        <div className="testimonial-slider-wrap">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <h3 className="text-bright-gray">See Our Success Stories</h3>

              <Slider
                asNavFor={nav2}
                ref={(slider) => (slider1 = slider)}
                dots={true}
                speed={500}
                arrows={false}
                className="success__story"
              >
                <div>
                  <div className="testimonial-card-style-one">
                    <p>
                      “After my Brain Wave Analysis, I learned how to manage my
                      anxiety and now I feel more calm and focused in both my
                      studies and daily life.”
                    </p>
                    <div className="testimonial-bottom">
                      <h5 className="text-bright-gray">Priya Sharma</h5>
                      <span>University Student</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="testimonial-card-style-one">
                    <p>
                      “Customized Sound Therapy has improved my sleep and
                      clarity at work. My productivity and emotional resilience
                      have increased drastically.”
                    </p>
                    <div className="testimonial-bottom">
                      <h5 className="text-bright-gray">Rahul Mehta</h5>
                      <span>Corporate Executive</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="testimonial-card-style-one">
                    <p>
                      “As a CEO, I deal with stress every day. This analysis
                      gave me real insights into my mind and helped me achieve
                      better balance and performance.”
                    </p>
                    <div className="testimonial-bottom">
                      <h5 className="text-bright-gray">Ananya Gupta</h5>
                      <span>CEO & Entrepreneur</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="col-lg-6 col-xl-5 position-relative">
              <div className="d-none d-lg-block">
                <div className="floarting-avater-1 position-absolute end-0">
                  <img
                    src="/images/shapes/testi-avater-3.png"
                    alt="floating avatar"
                    className="circle-shadow rounded-circle"
                  />
                </div>
                <div className="floarting-avater-2 position-absolute top-0 start-100">
                  <img
                    src="/images/shapes/testi-avater-1.png"
                    alt="floating avatar"
                    className="circle-shadow rounded-circle"
                  />
                </div>
                <div className="floarting-avater-2 position-absolute top-0 start-0">
                  <img
                    src="/images/shapes/testi-avater-2.png"
                    alt="floating avatar"
                    className="circle-shadow rounded-circle"
                  />
                </div>

                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (slider2 = slider)}
                  fade={true}
                  speed={500}
                  touchMove={false}
                  className="swiper testimonial-thumbs px-lg-4"
                >
                  <div>
                    <div className="testimonial-thumb-style">
                      <div className="thumb-avater1">
                        <img
                          src="/images/shapes/testimonial-avater-xl.png"
                          alt="testimonial avatar"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testimonial-thumb-style">
                      <div className="thumb-avater1">
                        <img
                          src="/images/shapes/testimonial-avater-xl2.png"
                          alt="testimonial avatar"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testimonial-thumb-style">
                      <div className="thumb-avater1">
                        <img
                          src="/images/shapes/testimonial-avater-xl.png"
                          alt="testimonial avatar"
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block testi-pagination text-center pt-60"></div>
        </div>
      </div>
    </div>
  );
}
