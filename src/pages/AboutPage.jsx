import React from 'react';
import { siteData } from '../data/siteData';

export function AboutPage({ onOpenContact }) {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container">
        {/* About Hero */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-blue)', display: 'block', marginBottom: '12px' }}>
            ✦ About Hazel Zimuto
          </span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '24px' }}>
            We Craft Digital Experiences
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Hazel Zimuto is an independent creative design studio crafting brands, websites, and digital experiences for ambitious companies worldwide.
          </p>
        </div>

        {/* Studio Timeline / Narrative */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '100px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
            <span className="font-mono" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)', fontWeight: '700' }}>2020</span>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '8px 0' }}>The Beginning of Hazel Zimuto</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              Founded with a mission to bridge high-end brand identity with cutting-edge web technology.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
            <span className="font-mono" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)', fontWeight: '700' }}>2023</span>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '8px 0' }}>Early Systems & Creative Validation</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              Expanded our team and introduced custom Figma design tokens and design systems.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
            <span className="font-mono" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)', fontWeight: '700' }}>2026</span>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '8px 0' }}>Hazel Zimuto Today</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              A global boutique studio partnering with market leaders and high-growth startups across 25+ industries.
            </p>
          </div>
        </div>

        {/* Creative Team Grid */}
        <div style={{ marginBottom: '100px' }}>
          <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
            The Humans Behind the Craft
          </span>
          <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 48px auto' }}>
            Our Creative Team
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
            {siteData.team.map((member, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
                <div style={{ padding: '20px' }}>
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', marginBottom: '8px' }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
