import partnersData from "@/constant/home2/partners"

export default function Partners() {
    const { title, p, btnTxt, images } = partnersData;
    return (
        <div className="partner-style-one section-gap-xl-top">
            <div className="container-fluid">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 order-1 order-lg-0">
                        <div className="row gx-lg-5 gx-4 align-items-center">
                            <div className="col-6 text-end">

                                {
                                    images.length > 0 && images.slice(0, 3).map((img, i) => {
                                        return (
                                            <div key={i} className="single-partner-logo partner-logo-enhanced">
                                                <img src={img.img} alt="" className={`partner-img ${i !== 0 ? "mt-lg-5 mt-4 wow zoomIn" : ""}`} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-6">
                                {
                                    images.length > 0 && images.slice(3).map((img, i) => {
                                        return (
                                            <div key={i} className="single-partner-logo partner-logo-enhanced">
                                                <img src={img.img} alt="" className={`partner-img wow zoomIn ${i !== 0 ? "mt-lg-5 mt-4" : ""}`} />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-0 order-lg-1">
                        <div className="partner-one-content">
                            <div className="text-start">
                                <h2>{title}</h2>
                                <p className="body-disply-2 pt-3">{p}</p>
                                <div className="partner-btn mt-5">
                                    <a href="#" className="btn-fill-outlined">{btnTxt}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
