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
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title-2 text-center pb-50">
                            <h2 className="text-soft-black mb-3">
                                Choose Your <span className="d-inline-block position-relative">
                                    BrainWave<img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" />
                                </span> Solution
                            </h2>
                            <p className="body-disply-2 px-lg-4">
                                Flexible pricing options designed to meet your specific brainwave technology needs and requirements.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row gy-4 justify-content-center mt-5">
                    {pricingPlans.map((plan, index) => (
                        <div key={plan.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                            <div className="pricing-card h-100 position-relative">
                                <div className="pricing-header h-100 text-center p-4" style={{ backgroundColor: '#1B3C53', color: 'white' }}>
                                    <h4 className="fw-bold mb-2">{plan.title}</h4>
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
                    transition: all 0.3s ease;
                    border: 1px solid #e9ecef;
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
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    transition: left 0.6s;
                }

                .pricing-card:hover .pricing-header::before {
                    left: 100%;
                }

                .btn {
                    transition: all 0.3s ease;
                }

                .transition-all {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @media (max-width: 768px) {
                    .pricing-card {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </div>
    );
}