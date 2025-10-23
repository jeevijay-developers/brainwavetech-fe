export default function PricingSection() {
    const pricingPlans = [
        {
            id: 1,
            title: "BWT Hardware",
            price: "₹60,000",
            gst: "+ 18% GST",
            type: "one-time",
            description: "Complete brainwave monitoring hardware setup"
        },
        {
            id: 2,
            title: "BWT Software",
            price: "₹25,000",
            gst: "+ 18% GST",
            type: "per annum",
            description: "Advanced brainwave analysis software license"
        },
        {
            id: 3,
            title: "Report Generation Training",
            price: "₹50,000",
            gst: "+ 18% GST",
            type: "optional",
            description: "Comprehensive training for report generation"
        },
        {
            id: 4,
            title: "Customized Sound Track",
            price: "₹17,500",
            gst: "+ 18% GST",
            type: "per track",
            description: "Personalized therapeutic sound solutions"
        },
        {
            id: 5,
            title: "Report Delivery",
            price: "₹1,000",
            gst: "+ 18% GST",
            type: "per report",
            description: "Professional brainwave analysis reports"
        }
    ];

    return (
    <div className="pricing-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
  <div className="container">
    {/* Section Header */}
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <div className="section-title-2 pb-4 px-3 px-md-0">
          <h2 className="text-soft-black mb-3 fs-0 fs-md-2">
            Choose Your{" "}
            <span className="d-inline-block position-relative">
              BrainWave
              <img
                src="/images/shapes/text-cuntom-underline.svg"
                alt=""
                className="highlighter-shape position-absolute start-0 bottom-0 low-index"
              />
            </span>{" "}
            Solution
          </h2>
          <p className="body-disply-2 fs-6 fs-md-5 text-muted px-2 px-md-5">
            Flexible pricing options designed to meet your specific brainwave
            technology needs and requirements.
          </p>
        </div>
      </div>
    </div>

    {/* Pricing Cards */}
    <div className="row gy-4 justify-content-center mt-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={plan.id}
          className="col-lg-4 col-md-6 col-sm-10 col-12"
          data-aos="fade-up"
          data-aos-delay={`${(index + 1) * 100}`}
        >
          <div className="pricing-card h-100 text-center transition-all">
            <div
              className="pricing-header p-4"
              style={{
                backgroundColor: "#1B3C53",
                color: "white",
              }}
            >
              <h4 className="fw-bold mb-2 fs-5 fs-md-4">{plan.title}</h4>
              <div className="price-container">
                <div className="price fs-2 fw-bold">{plan.price}</div>
                <div className="gst-info fs-6 opacity-75">{plan.gst}</div>
                <div className="billing-cycle fs-6 opacity-75">{plan.type}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    .pricing-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      border: 1px solid #e9ecef;
      transition: all 0.3s ease;
    }

    .pricing-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(27, 60, 83, 0.15);
    }

    .pricing-header {
      position: relative;
      overflow: hidden;
    }

    .pricing-header::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.6s;
    }

    .pricing-card:hover .pricing-header::before {
      left: 100%;
    }

    /* ✅ Responsive Tweaks */
    @media (max-width: 575.98px) {
      .pricing-section {
        padding: 3rem 1rem;
      }

      .section-title-2 h2 {
        font-size: 1.6rem;
        line-height: 1.3;
      }

      .section-title-2 p {
        font-size: 0.95rem;
        padding: 0 0.5rem;
      }

      .pricing-card {
        max-width: 95%;
        margin: 0 auto 1.5rem;
        border-radius: 10px;
      }

      .pricing-header {
        padding: 1.5rem 1rem;
      }

      .price {
        font-size: 1.6rem;
      }

      .gst-info,
      .billing-cycle {
        font-size: 0.85rem;
      }
    }
  `}</style>
</div>

    );
}