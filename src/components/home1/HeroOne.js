import {
    heroBtnTxt,
    heroDots1,
    heroDots2,
    heroGraphImg1,
    heroGraphImg2,
    heroGraphImg3,
    heroGraphImg4,
    heroIdeaIcon,
    heroImgCurve,
    heroLineVactor,
    subTitle,
    title
} from "@/constant/home1/heroOneData"

export default function HeroOne() {

    return (
        <>
            <div className="hero-style-one position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 d-none d-lg-block"><img src="/images/shapes/shape-wave.svg" alt="" /></div>
                <div className="hero-animated-shape position-absolute bottom-0 start-0 low-index d-none d-lg-block">
                    <img src={heroDots1} alt="" />
                </div>
                <div className="container ">
                    <div className="row hero-one-row align-items-center py-5 py-lg-0">
                        <div className="col-lg-7">
                            <div className="hero-content py-5 mt-5 mt-lg-3 position-relative">
                                <div className="hero-animated-shape position-absolute bottom-50 anima-trasform-y-1 d-none d-lg-block">
                                    <img src={heroIdeaIcon} alt="" />
                                </div>
                                <h1 className="text-bright-gray">
                                    {title.split(' ').slice(0, (title.split(' ').length - 2)).join(' ')}
                                    <span className="primary-purple"> {title.split(' ').slice(-2).join(' ')}</span>
                                </h1>
                                <p className="body-disply-1 pt-20">
                                    {subTitle}
                                </p>
                                <div className="hero-btn">
                                    <a href="#" className="btn-fill-rounded">{heroBtnTxt}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 hero-florting-col position-absolute end-0 top-50 translate-middle-y pt-0 pt-lg-5 mt-4">
                            <img src={heroLineVactor} alt="" className="hero-line-vactor d-xl-block d-none" />
                            <img src={heroImgCurve} alt="" className="d-xl-block d-none position-absolute top-50 end-0 translate-middle-y" />
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-8 text-center">
                                    <img src={heroGraphImg2} alt="" className="hero-img-filter img-fluid anima-trasform-y-1" />
                                </div>

                            </div>
                            <div className="item-row d-flex justify-content-center gap-xl-5 gap-4 mt-xl-5 mt-3">
                                <img src={heroDots2} alt="" className="position-absolute start-0 bottom-0" />
                                <div className="item">
                                    <img src={heroGraphImg1} alt="" className="hero-img-filter img-fluid anima-trasform-x-1" />
                                </div>
                                <div className="d-inline-flex flex-column">
                                    <img src={heroGraphImg4} alt="" className="fit-content img-fluid" />
                                    <img src={heroGraphImg3} alt="" className="hero-img-filter img-fluid mt-xl-5 mt-3 fit-content" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
