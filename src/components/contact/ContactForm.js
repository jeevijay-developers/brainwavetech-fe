import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      alert("Thank you for your message! We will get back to you soon.");
    }, 1500);
  };

  return (
    <div className="contact-form-tech">
      <div className="form-header mb-4">
        <h3 className="form-title">Send Message</h3>
        <p className="form-description">
          We'll respond to your inquiry within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="+91 98930 64372"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Product inquiry"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="6"
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        .contact-form-tech {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 2rem;
        }

        .form-header {
          border-bottom: 2px solid #1f2937;
          padding-bottom: 1rem;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.5rem;
          letter-spacing: -0.025em;
        }

        .form-description {
          font-size: 0.95rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .contact-form {
          margin-top: 1.5rem;
        }

        .form-group {
          margin-bottom: 0;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          background: #fafafa;
          color: #1f2937;
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-control::placeholder {
          color: #9ca3af;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 140px;
          font-family: inherit;
        }

        .btn-submit {
          width: 100%;
          padding: 1rem 1.5rem;
          background: #1f2937;
          color: #ffffff;
          border: 2px solid #1f2937;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-submit:hover:not(:disabled) {
          background: #111827;
          border-color: #111827;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-arrow {
          font-size: 1.25rem;
          transition: transform 0.2s ease;
        }

        .btn-submit:hover:not(:disabled) .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .contact-form-tech {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
