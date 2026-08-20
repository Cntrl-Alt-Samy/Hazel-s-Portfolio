import React from 'react';
import { Play } from 'lucide-react';
import { siteData } from '../data/siteData';
import heroImage from '../assets/hero.png';

export function Hero({ onOpenReel }) {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          We make <span className="creative-text">Creative Things.</span>
        </h1>
        <p className="hero-subtitle">
          {siteData.subtitle}
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onOpenReel?.()}>
            <Play size={16} />
            Watch Reel
          </button>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Orionix creative work showcase" className="hero-image" />
        </div>
      </div>

      {/* Client Logos Bar */}
      <div className="clients-section">
        <div className="container">
          <p className="clients-label">Trusted by world-leading enterprises</p>
          <div className="clients-grid">
            {siteData.clientLogos.map((client, index) => (
              <span key={index} className="client-logo-item">
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
