import { singleFeature2 } from "@/constant/home2/featuresData"

export default function SingleFeature2() {
    const { features } = singleFeature2;
    return (
       <div className="single-feature-style-two section-gap-xl-top section-gap-xl-bottom">
  <div className="container-fluid px-3 px-lg-5">
    <div className="row align-items-center gy-4">
      
      {/* Left Image Section */}
      <div className="col-lg-6 text-center mb-4 mb-lg-0">
        <div className="single-feature-two-screen text-center position-relative d-inline-block w-100">
          
          {/* Main screen */}
          <div  className="main-screen">
            <img
              src="/images/screen/wave.png"
              alt="Feature Main Screen"
              className="img-fluid rounded"
              style={{maxWidth: "78% !important" }}
            />

          </div>

          {/* Floating decorations */}
        
          <div className="float-screen-one position-absolute d-none d-lg-block wow fadeInDown anima-trasform-y-1"
                 style={{ left: '0', transform: 'translateX(-20px)' }}>
                     <img src="/images/shapes/feature-sheet.png" alt="" className="img-fluid" />
            </div>

          
          <div className="float-screen-two position-absolute wow fadeInLeft" data-wow-delay="0.3s">
            <img src="/images/shapes/hero-two-ball.png" alt="" className="circle-shadow-two img-fluid"/>
          </div>
         
         
          <div
  className="float-screen-four position-absolute wow fadeInLeft"
  data-wow-delay="0.9s"
  style={{
    transform: 'translateX(200px) scale(0.3)', 
    transition: 'transform 1s ease-in-out', 
  }}
>
  <img
    src="/images/shapes/neuron.png"
    alt=""
    className="circle-shadow-two img-fluid"
  />
</div>



        </div>
      </div>

      {/* Right Text & Features */}
      <div className="col-lg-6 d-flex flex-column justify-content-center">
        <div className="feature-analytics-contents text-center text-lg-start">
          <h2 className="fs-0 fs-lg-2">
            Brainwave
            <span className="d-inline-block position-relative mx-1 mx-lg-3">
              Analysis <img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" />
            </span>
            Breakdown
          </h2>
          <p className="body-disply-2 pt-3 fs-6 fs-lg-5">
            Gain clarity and control over your productivity with smart tracking, insightful dashboards, and detailed reports designed to help you grow.
          </p>

          {/* Feature cards */}
          {features.length > 0 &&
            features.map((dt, i) => (
              <div key={dt.id} className={`feature-card-style-two ${dt.varient ? dt.varient : ""} wow fadeInUp mt-3`} data-wow-delay="0.3s">
                <div className="feature-icon mb-2">
                  <img src={dt.icon} alt={dt.title} className="img-fluid" />
                </div>
                <div className="feature-disc">
                  <h5 className="fs-6 fs-lg-5">{dt.title}</h5>
                  <p className="fs-6 fs-lg-5">{dt.p}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  </div>

  <style jsx>{`
    /* Feature cards */
    .feature-card-style-two {
      background: #fff;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease;
    }

    .feature-card-style-two:hover {
      transform: translateY(-5px);
    }

    .feature-icon img {
      max-width: 60px;
      max-height: 60px;
      transition: transform 0.25s ease;
    }

    .feature-icon img:hover {
      transform: scale(1.05);
    }

    /* Mobile adjustments for ≤425px */
    @media (max-width: 575.98px) {
      .single-feature-two-screen {
        width: 90%;
        margin: 0 auto;
      }

      .float-screen-one,
      .float-screen-two,
      .float-screen-three,
      .float-screen-four {
        display: none !important; /* hide floating decorations on small screens */
      }

      .feature-analytics-contents h2 {
        font-size: 1.6rem;
      }

      .feature-analytics-contents p {
        font-size: 0.95rem;
      }

      .feature-card-style-two {
        padding: 0.75rem;
        margin-top: 1rem;
      }

      .feature-icon img {
        max-width: 50px;
        max-height: 50px;
      }
    }
  `}</style>
</div>

    )
}
