import register from "@/constant/home3/registerNowData"

export default function Register() {
    const { title, p, btnTxt, img } = register;
    return (
        <div className="register-style-one z-index-1 position-relative">
            <div className="register-style-one-bg low-index d-none d-lg-block">

            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="register-content py-lg-5">
                            <h2 className="text-white">{title}</h2>
                            <p className="body-disply-2 pt-4 text-white">{p}</p>
                            <div className="register-btn pt-5">
                                <a href="#" className="btn-fill-pill-v3">{btnTxt}<span></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 d-none d-lg-block">
                        <div className="register-one-screen text-center wow fadeInRight">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
