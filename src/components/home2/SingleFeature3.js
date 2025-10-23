import { singleFeature3 } from "@/constant/home2/featuresData";

export default function SingleFeature3() {
    const { features, graph: { img1, img2, img3 } } = singleFeature3;
    return (
       <div className="single-feature-style-three section-gap-top-y-1 section-gap-bottom-y-1 position-relative z-index-1">

  {/* Decorative Background */}
  <img
    className="d-none d-xl-block position-absolute top-0 end-0 low-index img-fluid"
    src="/images/shapes/3D-focus.png"
    alt="3D Focus Shape"
    data-aos="fade-left"
  />

  {/* Header Section */}
  <div className="container">
    <div className="row justify-content-center text-center text-lg-start">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <h2 className="fw-bold fs-0 fs-md-2">
          How Brainwave{" "}
          <span className="d-inline-block position-relative">
            Analytics{" "}
            <img
              src="/images/shapes/text-cuntom-underline.svg"
              alt="Underline"
              className="highlighter-shape position-absolute start-0 bottom-0 low-index"
            />
          </span>{" "}
          work for you
        </h2>
        <p className="body-disply-2 pt-3 fs-6 fs-md-5">
          In just 2 minutes, our MEG headset captures deep insights into your
          mental state—helping you understand, improve, and balance your life.
        </p>
      </div>
    </div>  
  </div>

  {/* Feature + Image Section */}
  <div className="position-relative z-index-1 mt-5">
    <img
      className="anima-trasform-x-1 d-none d-xl-block position-absolute top-25 start-0 translate-middle-y low-index img-fluid"
      src="/images/shapes/3d-bord.png"
      alt="3D Border Shape"
      data-aos="fade-right"
    />

    <div className="container">
      <div className="row align-items-center gy-4">
        {/* Features Column */}
        <div className="col-lg-7 col-md-12 order-2 order-lg-1">
          {features.length > 0 &&
            features.map((dt, i) => (
              <div
                key={dt.id}
                className={`feature-card-style-three ${
                  dt.varient ? dt.varient : ""
                } ${i % 2 !== 0 ? "feature-futured-card" : ""} wow fadeInUp`}
                data-wow-delay="0.3s"
              >
                <div className="d-flex align-items-start flex-column flex-sm-row text-center text-sm-start">
                  <div className="feature-icon flex-shrink-0 mb-3 mb-sm-0 me-sm-3">
                    <img src={dt.icon} alt={dt.title} className="img-fluid w-50 w-sm-auto" />
                  </div>
                  <div className="feature-disc">
                    <h5 className="fs-6 fs-md-5">{dt.title}</h5>
                    <p className="body-disply-2 mb-0">{dt.p}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Image Column */}
        <div className="col-lg-5 col-md-10 col-12 order-1 order-lg-2 mb-4 mb-lg-0">
          <div className="row align-items-center feature-three-screen gx-2 gy-3 justify-content-center">
            <div className="col-6 text-end">
              <div className="feature-single-three-screens">
                <img src={img1} alt="Screen 1" className="img-fluid mb-3 wow fadeInDown" />
                <img
                  src={img2}
                  alt="Screen 2"
                  className="img-fluid wow fadeInUp"
                  data-aos-delay="0.3s"
                />
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="feature-single-three-screens">
                <img
                  src={img3}
                  alt="Screen 3"
                  className="img-fluid wow fadeInRight"
                  data-aos-delay="0.6s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
