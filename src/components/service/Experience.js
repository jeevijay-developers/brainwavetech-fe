import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Experience({ gap }) {
  return (
    <div
      className={`about-company-wrapper ${
        gap ? gap : ""
      } position-relative z-index-1`}
    >
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-7">
            <div className="about-company-header">
              <h3 className="text-bright-gray">
                6+ Years of Empowering Mental Wellness
              </h3>
              <p className="body-disply-1 text-purple-haze-700 pt-20">
                Brain Waves Tech has transformed lives with cutting-edge Brain
                Wave Analysis and Customized Sound Therapy—benefiting thousands
                across age groups with measurable results and over 92% accuracy.
              </p>
            </div>
            {/* <div
              className="company-clients wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="swiper company-clients-slider">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  speed={1000}
                  loop={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    480: { slidesPerView: 1 },
                    575: { slidesPerView: 2, centeredSlides: false },
                    992: { slidesPerView: 3 },
                  }}
                >
                  <SwiperSlide className="single-client-logo">
                    <img
                      src="/images/client-logo/cus-logo-one.png"
                      alt="IBM verified technology"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="single-client-logo">
                    <img
                      src="/images/client-logo/cus-client-logo-two.png"
                      alt="Educational institutions"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="single-client-logo">
                    <img
                      src="/images/client-logo/cus-client-logo-three.png"
                      alt="Healthcare partners"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="single-client-logo">
                    <img
                      src="/images/client-logo/cus-client-logo-four.png"
                      alt="Corporate clients"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
          </div>
          <div className="col-lg-5">
            <div className="row gy-4">
              <div className="col-lg-12 col-md-6 wow fadeInRight">
                <div className="about-fact-card">
                  <h1>10K+</h1>
                  <h5>Individuals Benefited</h5>
                </div>
              </div>
              <div
                className="col-lg-12 col-md-6 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="about-fact-card">
                  <h1>130K+</h1>
                  <h5>Data Points Analyzed</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
