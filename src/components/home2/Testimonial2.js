import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function Testimonial2() {
    let slider1 = useRef(null);
    let slider2 = useRef(null);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [])
    return (
        <div className="testimonial-style-two section-gap-xl-top section-gap-xl-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">

                {/* ====================== Testimonials Header ========== */}

                       <div className="text-center pb-60 testimonial-header">
  <h2 className="text-soft-black">
    What our{" "}
    <span className="d-inline-block position-relative">
      client
      <img
        src="/images/shapes/text-cuntom-underline.svg"
        alt=""
        className="highlighter-shape position-absolute start-0 bottom-0 low-index"
      />
    </span>{" "}
    says
  </h2>

  <p className="body-disply-2 pt-3">
    Growth your business with using us
  </p>

  <style jsx>{`
    .testimonial-header h2 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.3;
    }

    .testimonial-header p {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .testimonial-header h2 {
        font-size: 1.8rem;
      }
      .testimonial-header p {
        font-size: 1rem;
      }
    }

    @media (max-width: 425px) {
      .testimonial-header {
        padding-bottom: 30px !important;
      }

      .testimonial-header h2 {
        font-size: 1.8rem;
        line-height: 1.2;
      }

      .testimonial-header p {
        font-size: 0.9rem;
        margin-top: 8px;
      }

      .highlighter-shape {
        width: 60%;
      }
    }
  `}</style>
</div>

                {/* ====================== Testimonials Header ========== */}

                    </div>
                </div>

                {/* ====================== Testimonials ========== */}

               <div className="row justify-content-center align-items-center testimonial-wrapper">
  {/* Image Slider */}
  <div className="col-lg-3 col-md-4 col-8 text-center mb-4 mb-lg-0">
    <Slider
      asNavFor={nav1}
      ref={(slider) => (slider2 = slider)}
      fade={true}
      speed={500}
    >
      {[...Array(4)].map((_, i) => (
        <div key={i} className="avarter-1">
          <img
            src="/images/shapes/testi-thumb-man-1.png"
            alt="testimonial"
            className="img-fluid testimonial-img"
          />
        </div>
      ))}
    </Slider>
  </div>

  {/* Text Slider */}
  <div className="col-lg-7 col-md-8 col-11 testi-pagination-two text-center text-lg-start">
    <Slider
      asNavFor={nav2}
      ref={(slider) => (slider1 = slider)}
      dots={true}
      speed={500}
      arrows={false}
    >
      <div>
        <div className="testimonial-card-style-two px-3 px-md-4">
          <p className="body-disply-2">
            From managing stress to boosting decision-making, Brain Waves
            Analysis has sharpened my mental clarity and emotional resilience.
          </p>
          <div className="testimonial-card-bottom">
            <h5 className="reviewer-name">Kavita Iyer</h5>
            <span>CEO, Tech Startup</span>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial-card-style-two px-3 px-md-4">
          <p className="body-disply-2">
            Real transformation! The brainwave feedback helped me achieve peace
            of mind and better study focus. I feel more confident than ever.
          </p>
          <div className="testimonial-card-bottom">
            <h5 className="reviewer-name">Arjun Mehta</h5>
            <span>University Student</span>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial-card-style-two px-3 px-md-4">
          <p className="body-disply-2">
            I overcame anxiety and gained the clarity I needed through Brain
            Waves Analysis. It has truly improved my productivity and focus.
          </p>
          <div className="testimonial-card-bottom">
            <h5 className="reviewer-name">Priya Sharma</h5>
            <span>Marketing Professional</span>
          </div>
        </div>
      </div>
    </Slider>
  </div>

  <style jsx>{`
    .testimonial-img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      margin: 0 auto;
      transition: transform 0.3s ease;
    }

    .testimonial-img:hover {
      transform: scale(1.05);
    }

    
    @media (max-width: 992px) {
      .testimonial-img {
        width: 100px;
        height: 100px;
      }
    }

    @media (max-width: 768px) {
      .testimonial-wrapper {
        text-align: center;
      }

      .testimonial-img {
        width: 90px;
        height: 90px;
      }

      .testimonial-card-style-two {
        margin-top: 20px;
      }
    }

    @media (max-width: 425px) {
      .testimonial-wrapper {
        flex-direction: column !important;
      }
        
      .testimonial-img {
        width: 80px;
        height: 80px;
      }
        
      .testi-pagination-two {
        margin-top: 25px;
        padding: 0 10px;
      }

      .testimonial-card-style-two p {
        font-size: 14px;
        line-height: 1.6;
      }

      .reviewer-name {
        font-size: 15px;
      }
    }
  `}</style>
</div>

                               {/* ====================== Testimonials ========== */}
            </div>
        </div>
    )
}
