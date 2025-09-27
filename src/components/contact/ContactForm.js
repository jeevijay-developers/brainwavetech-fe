import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! We will get back to you soon.");
    }, 1000);
  };

  return (
    <div className="contact-form-section">
      <div className="container">
        <div className="section-title-container mb-4">
          <h3 className="section-title text-bright-gray">
            <span className="section-title-main">Send us an email</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              Your Name (required)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Your Email (required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message" className="form-label">
              Your Message (required)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="6"
              required
              aria-required="true"
            ></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className={`btn-submit ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              {isSubmitting && <span className="spinner"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
