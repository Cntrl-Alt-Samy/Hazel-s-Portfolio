import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export function ContactModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedPlan || 'Growth Plan',
    budget: '$5k - $10k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
    }, 3000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(27, 169, 32, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <CheckCircle size={36} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '8px' }}>
              Inquiry Sent!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
              Thank you for reaching out to Hazel Zimuto. Our team will review your project brief and respond within 24 hours.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-blue)', display: 'block', marginBottom: '8px' }}>
              ✦ Start a Conversation
            </span>
            <h2 className="font-serif" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
              Book an Intro Call
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '24px' }}>
              Tell us about your brand, project timeline, and vision.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                    Interested Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-main)',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Launch Plan">Launch Plan ($5,000)</option>
                    <option value="Growth Plan">Growth Plan ($6,000)</option>
                    <option value="Scale Plan">Scale Plan ($12,000/mo)</option>
                    <option value="Brand Identity">Brand Identity & Strategy</option>
                    <option value="Website Development">Website Design & Dev</option>
                    <option value="UI/UX Product">UI/UX & Product Design</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-main)',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="<$5k">&lt; $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Project Overview
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a brief overview of what you want to build or achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                <span>Submit Inquiry</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
