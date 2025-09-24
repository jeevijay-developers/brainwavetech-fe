import { contactInfo, subTitle } from '@/constant/contact/contactPageData'
import React from 'react'
export default function ContactUs() {
    return (
        <div className="contact-wrapper pt-xxl section-gap-bottom-y-1 position-relative z-index-1">
            <img src="/images/shapes/line-svg-blue.svg" alt="" className="position-absolute top-0 start-0 corner-line low-index" />
            <div className="container">
                <div className="row justify-content-between align-items-end gy-4">
                    <div className="col-lg-7">
                        <div className="contact-content">
                            <h1 className="text-bright-gray">Let's get in <br /> touch!</h1>
                            <p className="body-disply-1">{subTitle}</p>
                            <form action="#" method="POST" id="contact__form">
                                <div className="contact-form-wrapper row">
                                    <div className="col-sm-6">
                                        <div className="primary-input-group">
                                            <input type="text" id="first__name" required />
                                            <label htmlFor="first__name">First name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="primary-input-group">
                                            <input type="text" id="last__name" required />
                                            <label htmlFor="last__name">Last name </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="primary-input-group">
                                            <input type="email" id="user__email" required />
                                            <label htmlFor="user__email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="primary-input-group">
                                            <input type="tel" id="user__phone" required />
                                            <label htmlFor="user__phone">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="primary-input-group">
                                            <textarea id="message" cols="15" rows="4"></textarea>
                                            <label htmlFor="message" className="area-label">Message</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="contact-info">
                            <div className="contact-info-box">
                                <p>Address</p>
                                <h5>{contactInfo.address}</h5>
                            </div>
                            <div className="contact-info-box">
                                <p>Support</p>
                                <h5><a href="tel:+321303555121" >{contactInfo.phone}</a></h5>
                                <h5><a href="mailto:sinfo@mymt.com">{contactInfo.email}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
