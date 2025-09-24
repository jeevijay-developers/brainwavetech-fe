import excellentFeatures from "@/constant/home3/excellentFeatureData";
import SingleExcellentFeature from "./SingleExcellentFeature";

export default function ExcellentFeatures() {
    return (
        <div className="feature-cards-style section-gap-xl-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h2 className="line-height-70 text-nevy-blue">Some excellent <span
                                className="d-inline-block position-relative">features<img
                                    className="d-none d-lg-block position-absolute start-50 top-50 translate-middle low-index"
                                    src="/images/shapes/ring-text-highlighter-three.svg" alt="" /></span> for
                                you </h2>
                            <p className="body-disply-2 pt-3">An enim nullam tempor sapien gravida donec enim ipsum porta
                                justo congue magna at pretium purus pretium ligula </p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 pt-60">
                    <SingleExcellentFeature excellentFeatures={excellentFeatures} />
                </div>
            </div>
        </div>
    )
}
