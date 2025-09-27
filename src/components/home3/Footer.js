import { services, about, help, socialIcons } from "@/constant/home3/footerData"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="footer-style-three pb-60 section-gap-top-y-1 position-relative">
            <div className="container">
                <div className="footer-top gap-4 d-flex justify-content-between align-items-center flex-wrap">
                    <div className="footer-logo">
                        <a href="index-3.html"><img src="/images/logo-v2.png" alt="" /></a>
                    </div>

                    <ul className="footer-social-links d-flex justify-content-md-end gap-lg-5 gap-4">
                        {
                            socialIcons.length > 0 && socialIcons.map(icons => <li key={icons.id}><a href={icons.links}><i className={icons.icon}></i></a></li>)
                        }
                    </ul>
                </div>

                <div className="foooter-main-wrap row">
                    <div className="col-lg-4">
                        <div className="footer-newslatter pt-4">
                            <h4>Subscribe to our <br />newsletter</h4>
                            <form action="#">
                                <div className="footer-newslatter-form">
                                    <input type="email" placeholder="Email address" />
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title">
                                        Services
                                    </h5>

                                    <ul className="footer-links">
                                        {
                                            services.length > 0 && services.map(item => <li key={item.id}> <a href={item.uri}>{item.txt}</a> </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title">
                                        About
                                    </h5>

                                    <ul className="footer-links">
                                        {
                                            about.length > 0 && about.map(item => <li key={item.id}> <a href={item.uri}>{item.txt}</a> </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title">
                                        Help
                                    </h5>

                                    <ul className="footer-links">
                                        {
                                            help.length > 0 && help.map(item => <li key={item.id}> <a href={item.uri}>{item.txt}</a> </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="footer-bottom">
                    <div className="row gy-3">
                        <div className="col-lg-7 col-md-6 d-flex gap-5 flex-wrap">
                            <a href="#" className="footer-defult-links">Terms &amp; condition</a>
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
