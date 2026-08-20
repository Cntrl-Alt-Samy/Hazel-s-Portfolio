import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState(siteData.services[0].id);

  return (
    <section className="faq-section" id="services" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
          What We Do
        </span>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 48px auto' }}>
          Services & Capabilities
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {siteData.services.map((service) => {
            const isOpen = expandedId === service.id;

            return (
              <div 
                key={service.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '20px',
                  padding: '24px 32px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  onClick={() => setExpandedId(isOpen ? null : service.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '6px' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                      {service.description}
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--bg-dark)' : 'var(--bg-main)',
                    color: isOpen ? 'var(--text-white)' : 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    marginLeft: '16px'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                    <p style={{ fontFamily: 'Geist Mono', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '12px' }}>
                      Deliverables & Scope
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={16} color="var(--accent-blue)" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
