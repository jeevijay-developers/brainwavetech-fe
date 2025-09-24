import SinglePricingPlan from "./SinglePricingPlan";

export default function PricingPlan({ data }) {
    return (
        <div className="pricing-style-start section-gap-xl-top position-relative z-index-1">
            <div className="container">
                <div className="row justify-content-center pb-60">
                    <div className="col-lg-6 text-center">
                        <h3 className="text-bright-gray">Pricing Plan</h3>
                        <p className="body-disply-1 pt-20 text-purple-haze-700">Two simple options, Free for everyone and the pro  for these who need that extra flavor.</p>
                    </div>
                </div>

                <div className="row gy-5">
                    <SinglePricingPlan pricingPlanData={data} />
                </div>
            </div>
        </div>
    )
}
