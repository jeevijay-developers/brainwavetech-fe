import { newsLetterTitle, newsLetterSubTitle, inputIcon, buttonTxt } from "@/constant/home1/newslessterData"

export default function NewsLetter({ spaceTop, spaceTopXl }) {
    return (
        <div className={`newslatter-style-one position-relative ${spaceTop ? "pt-50" : ""} ${spaceTopXl ? "section-gap-xl-top" : ""}`}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="newslatter-wrap text-center px-3">
                            <h3 className="text-white">{newsLetterTitle}</h3>
                            <p className="body-disply-1 pb-2">{newsLetterSubTitle}</p>

                            <form action="#" method="POST">
                                <div className="newslatter-form-style-one mt-5">
                                    <div className="form-icon">
                                        <img src={inputIcon} alt="" />
                                    </div>
                                    <input type="text" placeholder="Type your email" />
                                    <button type="submit" className="submit-defult-btn submit-btn-one">{buttonTxt}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
