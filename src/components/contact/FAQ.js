import { useState } from "react";
import { faqData } from "@/constant/contact/brainwaveContactData";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section-tech">
      <div className="faq-header mb-4">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <p className="faq-description">
          Quick answers to common questions about our services
        </p>
      </div>

      <div className="accordion-container">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="accordion-question">{faq.question}</span>
              <span className="accordion-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-section-tech {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 2rem;
        }

        .faq-header {
          border-bottom: 2px solid #1f2937;
          padding-bottom: 1rem;
        }

        .faq-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.5rem;
          letter-spacing: -0.025em;
        }

        .faq-description {
          font-size: 0.95rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .accordion-item {
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          transition: all 0.2s ease;
          background: #fafafa;
        }

        .accordion-item:hover {
          border-color: #3b82f6;
          background: #ffffff;
        }

        .accordion-item.active {
          border-color: #1f2937;
          background: #ffffff;
        }

        .accordion-header {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.25rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1rem;
          transition: all 0.2s ease;
        }

        .accordion-question {
          flex: 1;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.6;
        }

        .accordion-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          font-size: 1.5rem;
          font-weight: 300;
          color: #3b82f6;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .accordion-item.active .accordion-icon {
          color: #1f2937;
        }

        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .accordion-item.active .accordion-body {
          max-height: 300px;
        }

        .accordion-content {
          padding: 0 1.25rem 1.25rem 1.25rem;
          border-top: 1px solid #f3f4f6;
        }

        .accordion-content p {
          margin: 0;
          padding-top: 1rem;
          color: #4b5563;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .faq-section-tech {
            padding: 1.5rem;
          }

          .faq-title {
            font-size: 1.25rem;
          }

          .accordion-question {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
