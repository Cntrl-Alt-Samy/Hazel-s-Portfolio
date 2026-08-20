import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export function Footer({ onOpenContact }) {
  return (
    <footer>
      {/* Big CTA Banner */}
      <div className="footer-cta-banner">
        <div className="container">
          <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-lime)', display: 'block', marginBottom: '16px' }}>
            Idea → Reality
          </span>
          <h2 className="footer-title">
            Got a great idea you<br />want to bring to life?
          </h2>

          <button className="footer-cta-btn" onClick={onOpenContact}>
            <span>Get in Touch</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-flex">
            <div>
              <span className="font-serif" style={{ fontSize: '1.25rem', color: '#fff', marginRight: '16px' }}>
                {siteData.studioName}
              </span>
              <span>{siteData.copyright}</span>
            </div>

            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">X (Twitter)</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-link">Behance</a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-link">Dribbble</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
