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
                            <h2 className="text-soft-black">Key Features for <span className="d-inline-block position-relative"> Mental<img src="/images/shapes/text-cuntom-underline.svg" alt="" className="highlighter-shape position-absolute start-0 bottom-0 low-index" /></span><br /> Clarity &amp; Inner Transformation
                            </h2>
                            <p className="body-disply-2 px-lg-5 pt-3">Harness the power of neuroscience, brainwave mapping, and personalized sound therapy—designed to unlock your true potential, enhance focus, and bring lasting emotional balance. </p>
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
