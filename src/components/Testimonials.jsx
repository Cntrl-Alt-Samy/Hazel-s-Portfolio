import React from 'react';
import { siteData } from '../data/siteData';

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
          Client Voices
        </span>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto' }}>
          Where ambitious brands build their digital future
        </h2>

        <div className="testimonials-grid">
          {siteData.testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                />
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-title">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter Bar */}
        <div className="stats-row">
          {siteData.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
