import footerData from "@/constant/home2/Footer"
import Link from "next/link";

export default function Footer2() {
    const { logo, menus, socialIcons } = footerData;
    return (
        <div className="footer-style-two">
            <div className="container">
                <div className="footer-main-wrap">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-3">
                            <div className="footer-icon">
                                <a href="#">
                                    <img src={logo} alt="home page logo on footer" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul className="footer-quick-links d-flex justify-content-lg-center flex-wrap">
                                {
                                    menus.length > 0 && menus.map(item => <li key={item.id}><Link href={item.links}>{item.txt}</Link></li>)
                                }

                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <ul className="footer-social-links d-flex justify-content-md-end">
                                {
                                    socialIcons.length > 0 && socialIcons.map(item => <li key={item.id}><Link href={item.links}><i className={item.icon}></i></Link></li>)
                                }

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="row gy-3">
                        <div className="col-lg-7 col-md-6 d-flex gap-5 flex-wrap">
                            <a href="#" className="footer-defult-links">Terms & condition</a>
                            <a href="#" className="footer-defult-links">Privacy policy</a>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <p className="footer-defult-links text-md-end">All Right Reserved @<a href="#">wprealizer</a>.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
