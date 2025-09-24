import { feature2 } from '@/constant/home1/featureData'

export default function Feature1() {
    const { img, title, subTitle, btnTxt, dotsImg } = feature2;
    return (
        <div className="single-feature-style section-gap-bottom-y-2 position-relative">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6">
                        <div className="single-feature-content position-relative">
                            <img src={dotsImg} alt="" className="feature-single-dot" />
                            <h3 className="text-bright-gray">{title}</h3>
                            <p className="text-purple-haze body-disply-1 pt-3">{subTitle}</p>

                            <div className="trial-btn mt-5">
                                <a href="#" className="btn-fill-rounded">{btnTxt}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-screen-three">
                            <img src={img} alt="" className="wow fadeInRight" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
