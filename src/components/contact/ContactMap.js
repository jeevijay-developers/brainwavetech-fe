import {
  mapEmbedUrl,
  contactInfo,
} from "@/constant/contact/brainwaveContactData";

export default function ContactMap() {
  return (
    <div className="contact-map-tech-section section-gap-bottom position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Map Container */}
            <div className="map-container-tech mb-5">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brainwave Tech Office Location"
              ></iframe>
            </div>

            {/* Contact Information Grid */}
            <div className="contact-info-grid">
              <div className="row g-4">
                {/* Address */}
                <div className="col-lg-6">
                  <div className="info-card">
                    <div className="info-header">
                      <span className="info-label">OFFICE ADDRESS</span>
                    </div>
                    <div className="info-content">
                      <p className="info-text">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="info-card">
                        <div className="info-header">
                          <span className="info-label">EMAIL</span>
                        </div>
                        <div className="info-content">
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="info-link"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="info-card">
                        <div className="info-header">
                          <span className="info-label">PHONE</span>
                        </div>
                        <div className="info-content">
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="info-link"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="col-12">
                  <div className="info-card">
                    <div className="info-header">
                      <span className="info-label">BUSINESS HOURS</span>
                    </div>
                    <div className="info-content">
                      <div className="hours-list">
                        <div className="hours-row">
                          <span className="hours-day">Monday - Friday</span>
                          <span className="hours-time">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="hours-row">
                          <span className="hours-day">Saturday</span>
                          <span className="hours-time">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="hours-row">
                          <span className="hours-day">Sunday</span>
                          <span className="hours-time">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-map-tech-section {
          position: relative;
        }

        .map-container-tech {
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
          background: #f9fafb;
        }

        .map-container-tech iframe {
          display: block;
          width: 100%;
        }

        .contact-info-grid {
          margin-top: 2rem;
        }

        .info-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.2s ease;
          height: 100%;
        }

        .info-card:hover {
          border-color: #3b82f6;
        }

        .info-header {
          background: #fafafa;
          border-bottom: 1px solid #e5e7eb;
          padding: 0.875rem 1.25rem;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #374151;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .info-content {
          padding: 1.25rem;
        }

        .info-text {
          margin: 0;
          color: #4b5563;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .info-link {
          color: #3b82f6;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .info-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .hours-row:last-child {
          border-bottom: none;
        }

        .hours-day {
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }

        .hours-time {
          color: #6b7280;
          font-size: 0.9rem;
          font-family: "Courier New", monospace;
        }

        @media (max-width: 768px) {
          .map-container-tech {
            margin-bottom: 1.5rem !important;
          }

          .hours-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
}
