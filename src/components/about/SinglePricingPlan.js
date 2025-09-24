import React from 'react'

export default function SinglePricingPlan({ pricingPlanData }) {
    return (
        <>
            {
                pricingPlanData.length > 0 && pricingPlanData.map(dt => {
                    return (
                        <div key={dt.id} className="col-lg-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={dt.delay ? dt.delay : ""}>
                            <div className="pricing-card-style-two">
                                <div className="pricing-card-body">
                                    <h4 className="text-bright-gray">Enterprise</h4>

                                    <h4 className="primary-purple pricing-tag">$16.9</h4>
                                    <p className="body-disply-1 text-purple-haze-700">Great for new business</p>
                                    <ul className="pricing-features">
                                        <li>250 customer profile.</li>
                                        <li>No setup, hidden charge.</li>
                                        <li>Entire course library.</li>
                                        <li>Integrations facebook</li>
                                    </ul>
                                </div>

                                <div className="pricing-btn mt-5">
                                    <a href="#" className="btn-outlined-round hover-fill">start now</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
