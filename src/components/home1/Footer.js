import { logo, description, socialIcons, ourLinks, ourServices, otherLinks } from "@/constant/home1/footerData"

export default function Footer() {

    return (
        <div className="footer-style-one position-relative">
            <div className="container">
                <div className="row pb-60">
                    <div className="col-lg-4 pt-4">
                        <div className="footer-about">
                            <div className="footer-logo">
                                <a href="index.html"><img src={logo} alt="" /></a>
                            </div>

                            <p className="footer-disc body-disply-1 text-purple-haze">Lorem Ipsum is simply dummy text of
                                {description}
                            </p>

                            <ul className="footer-social-links d-flex">
                                {
                                    socialIcons.length > 0 && socialIcons.map((icon, i) => (
                                        <li key={i}><a href="#"><i className={icon}></i></a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 d-lg-flex justify-content-center pt-4">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title text-bright-gray">Our links</h5>
                                    <ul className="footer-links">
                                        {
                                            ourLinks.length > 0 && ourLinks.map((link) => (
                                                <li key={link.id}><a href={link.uri}>{link.txt}</a></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 pt-4">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title text-bright-gray">Our Services</h5>
                                    <ul className="footer-links">

                                        {
                                            ourServices.length > 0 && ourServices.map((service) => (
                                                <li key={service.id}><a href={service.uri}>{service.txt}</a></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 pt-4">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title text-bright-gray">Others links</h5>
                                    <ul className="footer-links">
                                        <ul className="footer-links">

                                            {
                                                otherLinks.length > 0 && otherLinks.map((item) => (
                                                    <li key={item.id}><a href={item.uri}>{item.txt}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 pt-3">
                        <a href="#" className="footer-terms-text">Terms & condition</a>
                    </div>
                    <div className="col-md-6 pt-3">
                        <p className="footer-right-text text-md-end">All Right Reserved @<a href="#">wprealizer</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
