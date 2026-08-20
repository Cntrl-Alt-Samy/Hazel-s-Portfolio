import React from 'react';
import { siteData } from '../data/siteData';

export function ProcessSteps() {
  return (
    <section className="process-section">
      <div className="container">
        <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
          How We Work
        </span>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto' }}>
          From Complexity to Clarity in 3 Steps
        </h2>

        <div className="process-grid">
          {siteData.processSteps.map((stepItem) => (
            <div key={stepItem.step} className="process-card">
              <div className="process-step">{stepItem.step}</div>
              <h3 className="process-name">{stepItem.name}</h3>
              <p className="process-desc">{stepItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
