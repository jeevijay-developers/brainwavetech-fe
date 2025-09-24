import { excellentFeaturesData } from "@/constant/home2/featuresData";
import Feature from "./Feature";

export default function Features() {
    return (
        <div className="feature-style-two pt-30">
            <div className="container">
                <div className="row justify-content-center position-relative">
                    <div className="col-lg-8">
                        <img src="/images/shapes/3d_rocket.png" alt="" className="position-absolute end-0 d-none d-lg-block anima-trasform-z-1 " data-aos="fade-left" data-aos-delay="300" />
                        <div className="section-title-2 text-center pb-60">
                            <h2 className="text-soft-black">Some excellent <span className="d-inline-block position-relative">features <img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span> for you</h2>
                            <p className="body-disply-2 px-lg-5 pt-3">An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    <Feature featuresData={excellentFeaturesData} />
                </div>
            </div>
        </div>
    )
}
