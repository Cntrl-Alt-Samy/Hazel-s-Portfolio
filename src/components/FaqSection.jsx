import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
          FAQ
        </span>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto' }}>
          Questions? We are here to help
        </h2>

        <div className="faq-list">
          {siteData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIdx === idx ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
