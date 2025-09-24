import { useState } from "react"

export default function SimplePrice() {
    const [priceOption, setPriceOption] = useState('monthly');

    const setPricingOption = (e) => {
        if (e.target.checked) {
            setPriceOption('annually')
        } else {
            setPriceOption('monthly')
        }
    }
    return (
        <div className="pricing-style-one section-gap-xl-top position-relative">
            <img className="wow fadeInLeft position-absolute d-none d-lg-block bottom-0 start-0" src="/images/shapes/3d-joy-icon.png" alt="" />
            <div className="container position-relative">

                <img className="position-absolute end-0 bottom-50 d-none d-lg-block low-index anima-trasform-y-1" src="/images/shapes/3d-hourbox.png" alt="" />

                <div className="row justify-content-center pb-70">
                    <div className="col-lg-7">
                        <div className="text-center pb-5">
                            <h2>Flexible work, <span className="d-inline-block position-relative">Simple<img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span>  Price

                            </h2>
                            <p className="body-disply-2 pt-3">Growth your business with using us</p>
                        </div>


                    </div>
                    <div className="col-lg-6">
                        <div className="switch-container">
                            {/* <!-- Rounded switch --> */}

                            <h5>Monthly</h5>
                            <label className="switch">
                                <input id="priceSwitch" type="checkbox" onClick={(e) => setPricingOption(e)} />
                                <span className="slider round"></span>
                            </label>
                            <h5>Annually</h5>

                        </div>
                    </div>
                </div>

                {
                    priceOption === 'monthly' ? <div className="row justify-content-center gy-4" id="myMonthlyTables">
                        <div className="col-lg-5 col-md-6">
                            <div className="pricing-card-style">
                                <h2 className="card-status">Free</h2>

                                <ul className="pricing-features">
                                    <li>1 seat</li>
                                    <li>2 project</li>
                                    <li>1 Month free support</li>
                                    <li>No Updates</li>
                                </ul>

                                <div className="plan-pricing">
                                    <span className="doller-sign">$</span>
                                    <h2>0<span> /Forever</span></h2>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#">Start 14 Days Trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="pricing-card-style featured-plan">
                                <h2 className="card-status">Premium</h2>

                                <ul className="pricing-features">
                                    <li>Unlimited Seat</li>
                                    <li>Unlimited project</li>
                                    <li>Lifetime Support</li>
                                    <li>Lifetime updates</li>
                                </ul>

                                <div className="plan-pricing">
                                    <span className="doller-sign">$</span>
                                    <h2>30<span> /Forever</span></h2>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#">Start 14 Days Trial</a>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className="row justify-content-center gy-4" id="myAnnualTables">
                            <div className="col-lg-5 col-md-6">
                                <div className="pricing-card-style">
                                    <h2 className="card-status">Free</h2>

                                    <ul className="pricing-features">
                                        <li>1 seat</li>
                                        <li>2 project</li>
                                        <li>1 Month free support</li>
                                        <li>No Updates</li>
                                    </ul>

                                    <div className="plan-pricing">
                                        <span className="doller-sign">$</span>
                                        <h2>50<span> /Forever</span></h2>
                                    </div>
                                    <div className="pricing-btn">
                                        <a href="#">Start 14 Days Trial</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="pricing-card-style featured-plan">
                                    <h2 className="card-status">Premium</h2>

                                    <ul className="pricing-features">
                                        <li>Unlimited Seat</li>
                                        <li>Unlimited project</li>
                                        <li>Lifetime Support</li>
                                        <li>Lifetime updates</li>
                                    </ul>

                                    <div className="plan-pricing">
                                        <span className="doller-sign">$</span>
                                        <h2>300<span> /Forever</span></h2>
                                    </div>
                                    <div className="pricing-btn">
                                        <a href="#">Start 14 Days Trial</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                }
            </div>
        </div>
    )
}
