import {
  mapEmbedUrl,
  contactInfo,
} from "@/constant/contact/brainwaveContactData";

export default function ContactMap() {
  return (
    <div className="contact-map-section section-gap-bottom position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-map-wrapper">
              <div className="map-container mb-4">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "16px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brainwave Tech Office Location"
                ></iframe>
              </div>

              <div className="contact-details-section">
                <h3 className="contact-title text-bright-gray mb-4">
                  Contact us:
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12">
                    <div className="contact-detail-item">
                      <h5 className="detail-label">Office Address:</h5>
                      <p className="detail-text">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-detail-item">
                      <h5 className="detail-label">E-mail id:</h5>
                      <p className="detail-text">
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="contact-link"
                        >
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-detail-item">
                      <h5 className="detail-label">Contact Number:</h5>
                      <p className="detail-text">
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="contact-link"
                        >
                          {contactInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
