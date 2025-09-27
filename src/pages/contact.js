import Header from "@/components/home/Header";
import Footer2 from "@/components/home2/Footer2";
import ContactMap from "@/components/contact/ContactMap";
import FAQ from "@/components/contact/FAQ";
import ContactForm from "@/components/contact/ContactForm";
import { NextSeo } from "next-seo";
import React from "react";

export default function Contact() {
  return (
    <>
      <NextSeo
        title={"Contact Us - Brainwave Tech"}
        description={
          "Get in touch with Brainwave Tech. Visit our office in Bhopal, M.P or contact us via email or phone. Find answers to frequently asked questions about our brainwave analysis and sound therapy services."
        }
      />
      <div className="background-wrap inner-bg">
        <Header logo={"logo.png"} btn={"btn-outlined-round"} />

        {/* Hero Section */}
        <div className="contact-hero-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
          <img
            src="/images/shapes/line-svg-blue.svg"
            alt=""
            className="position-absolute top-0 start-0 corner-line low-index"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="contact-hero-header">
                  <h1 className="text-bright-gray mb-4">Contact Us</h1>
                  <p className="body-display-1 text-muted">
                    Get in touch with our team for any inquiries about our
                    brainwave analysis and sound therapy services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Contact Info */}
        <ContactMap />

        {/* FAQ and Contact Form Section */}
        <div className="contact-content-section section-gap-bottom">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6">
                <FAQ />
              </div>
              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <Footer2 />
      </div>
    </>
  );
}
