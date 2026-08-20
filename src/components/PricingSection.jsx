import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export function PricingSection({ onOpenContact }) {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
          Investment & Tiers
        </span>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto' }}>
          Choose a plan that fits your needs
        </h2>

        <div className="pricing-grid">
          {siteData.pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}
            >
              <div className="pricing-badge">{plan.badge}</div>

              <div>
                <h3 className="pricing-title">{plan.title}</h3>
                <div className="pricing-price-wrap">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-unit">{plan.unit}</span>
                </div>
                <p className="pricing-desc">{plan.description}</p>

                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature-item">
                      <span className="check-icon">
                        <Check size={12} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={plan.isFeatured ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                onClick={() => onOpenContact(plan.title)}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
