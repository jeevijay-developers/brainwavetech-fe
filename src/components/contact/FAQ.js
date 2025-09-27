import { useState } from "react";
import { faqData } from "@/constant/contact/brainwaveContactData";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="container">
        <div className="section-title-container mb-4">
          <h3 className="section-title text-bright-gray">
            <span className="section-title-main">
              Frequently Asked Questions
            </span>
          </h3>
        </div>
        <p className="lead mb-4 text-mid-gray">
          Please read our FAQ before sending us a message.
        </p>

        <div className="accordion-container">
          {faqData.map((faq, index) => (
            <div key={faq.id} className="accordion-item">
              <button
                className={`accordion-title ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="accordion-question">{faq.question}</span>
                <div className="accordion-toggle">
                  <i
                    className={`bi ${
                      activeIndex === index
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    }`}
                  ></i>
                </div>
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="accordion-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
