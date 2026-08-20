import React, { useState } from 'react';
import { ChevronDown, X, ArrowUpRight, Check } from 'lucide-react';

const colorTokens = [
  { name: '--bg-main', value: '#F9F8F6', category: 'Background' },
  { name: '--bg-card', value: '#FFFFFF', category: 'Background' },
  { name: '--bg-dark', value: '#141414', category: 'Background' },
  { name: '--bg-dark-card', value: '#1C1C1E', category: 'Background' },
  { name: '--bg-dark-surface', value: '#0A0A0B', category: 'Background' },
  { name: '--bg-sunken', value: '#F2F1EF', category: 'Background' },
  { name: '--bg-glass', value: 'rgba(249,248,246,0.88)', category: 'Background' },
  { name: '--text-main', value: '#141414', category: 'Text' },
  { name: '--text-muted', value: '#656565', category: 'Text' },
  { name: '--text-light', value: '#A4A4A4', category: 'Text' },
  { name: '--text-inverse', value: '#FFFFFF', category: 'Text' },
  { name: '--accent-blue', value: '#2145B7', category: 'Accent' },
  { name: '--accent-lime', value: '#EEFF00', category: 'Accent' },
  { name: '--accent-coral', value: '#914F45', category: 'Accent' },
  { name: '--accent-green', value: '#1BA920', category: 'Accent' },
];

const spacingTokens = [
  { name: '--space-xs', value: '4px' },
  { name: '--space-sm', value: '8px' },
  { name: '--space-md', value: '16px' },
  { name: '--space-lg', value: '24px' },
  { name: '--space-xl', value: '32px' },
  { name: '--space-2xl', value: '48px' },
  { name: '--space-3xl', value: '64px' },
  { name: '--space-4xl', value: '80px' },
  { name: '--space-5xl', value: '100px' },
];

const shadowTokens = [
  { name: '--shadow-xs', value: '0 1px 2px rgba(0,0,0,0.03)' },
  { name: '--shadow-sm', value: '0 2px 8px rgba(0,0,0,0.04)' },
  { name: '--shadow-md', value: '0 8px 24px rgba(0,0,0,0.06)' },
  { name: '--shadow-lg', value: '0 12px 40px rgba(0,0,0,0.08)' },
  { name: '--shadow-xl', value: '0 20px 50px rgba(0,0,0,0.12)' },
  { name: '--shadow-2xl', value: '0 30px 60px rgba(0,0,0,0.18)' },
];

const radiusTokens = [
  { name: '--radius-sm', value: '8px' },
  { name: '--radius-md', value: '12px' },
  { name: '--radius-lg', value: '16px' },
  { name: '--radius-xl', value: '20px' },
  { name: '--radius-2xl', value: '24px' },
  { name: '--radius-full', value: '9999px' },
];

export function DesignSystemPage() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <span className="section-label" style={{ color: 'var(--accent-blue)' }}>
            Design System v1.0
          </span>
          <h1 className="text-h1" style={{ marginBottom: 'var(--space-md)' }}>
            Hazel Zimuto Design Tokens
          </h1>
          <p className="text-body-lg">
            A comprehensive vanilla CSS design system for an ultra-premium editorial creative studio.
          </p>
        </div>

        {/* ── COLOR TOKENS ── */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Color Palette</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Color Tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
            {colorTokens.map((token) => (
              <div key={token.name} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '80px',
                  background: token.value,
                  borderBottom: token.name.includes('bg-dark') || token.name.includes('text-main') || token.name.includes('accent-coral')
                    ? '1px solid var(--border-dark)'
                    : '1px solid var(--border-light)',
                }} />
                <div style={{ padding: '12px 16px' }}>
                  <div className="text-mono-number" style={{ fontSize: 'var(--text-caption)', color: 'var(--text-main)', marginBottom: '2px' }}>
                    {token.name}
                  </div>
                  <div className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: 'var(--ls-wider)' }}>
                    {token.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TYPOGRAPHY SPECIMEN ── */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Typography</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Type Scale</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-display</span>
              <p className="text-display" style={{ marginTop: 'var(--space-sm)' }}>We make Creative Things.</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-h1</span>
              <p className="text-h1" style={{ marginTop: 'var(--space-sm)' }}>Heading Level 1</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-h2</span>
              <p className="text-h2" style={{ marginTop: 'var(--space-sm)' }}>Heading Level 2</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-h3</span>
              <p className="text-h3" style={{ marginTop: 'var(--space-sm)' }}>Heading Level 3</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-h4</span>
              <p className="text-h4" style={{ marginTop: 'var(--space-sm)' }}>Heading Level 4</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-h5</span>
              <p className="text-h5" style={{ marginTop: 'var(--space-sm)' }}>Heading Level 5</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-body</span>
              <p className="text-body" style={{ marginTop: 'var(--space-sm)' }}>Body text for paragraphs and general content. The quick brown fox jumps over the lazy dog.</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-body-lg</span>
              <p className="text-body-lg" style={{ marginTop: 'var(--space-sm)' }}>Large body text for lead paragraphs and subtitles.</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-caption</span>
              <p className="text-caption" style={{ marginTop: 'var(--space-sm)' }}>Caption text for metadata and secondary information.</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-micro</span>
              <p className="text-micro" style={{ marginTop: 'var(--space-sm)' }}>Micro text for labels and tags</p>
            </div>

            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-lg)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-mono-number</span>
              <p className="text-mono-number" style={{ fontSize: 'var(--text-h2)', marginTop: 'var(--space-sm)' }}>150+</p>
            </div>

            <div style={{ paddingBottom: 'var(--space-sm)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>.text-gradient</span>
              <p className="text-gradient text-h2" style={{ marginTop: 'var(--space-sm)' }}>Gradient Text Sample</p>
            </div>
          </div>
        </section>

        {/* ── SPACING SCALE ── */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Layout</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Spacing Scale</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
            {spacingTokens.map((token) => (
              <div key={token.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                <span className="font-mono" style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', minWidth: '120px' }}>{token.name}</span>
                <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--text-light)', minWidth: '60px' }}>{token.value}</span>
                <div style={{ height: '12px', width: token.value, background: 'var(--accent-blue)', borderRadius: 'var(--radius-sm)', opacity: 0.7 }} />
              </div>
            ))}
          </div>
        </section>

        {/* ── SHADOW TOKENS ── */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Elevation</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Shadow Tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-lg)' }}>
            {shadowTokens.map((token) => (
              <div key={token.name} style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                textAlign: 'center',
                boxShadow: token.value,
                border: '1px solid var(--border-light)',
              }}>
                <span className="font-mono" style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{token.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── BORDER RADIUS ── */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Shape</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Border Radius</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-lg)', alignItems: 'end' }}>
            {radiusTokens.map((token) => (
              <div key={token.name} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--accent-blue)',
                  borderRadius: token.value,
                  marginBottom: 'var(--space-sm)',
                  opacity: 0.8,
                }} />
                <span className="font-mono" style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{token.name}</span>
                <br />
                <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--text-light)' }}>{token.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FONT FAMILIES ── */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Font Families</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Typography Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
            <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Serif — Fraunces</span>
              <p className="font-serif" style={{ fontSize: 'var(--text-h2)', marginTop: 'var(--space-md)', lineHeight: 'var(--lh-tight)' }}>Aa Bb Cc</p>
              <p className="font-serif" style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                Used for display headings, section titles, and editorial statement text. Variable optical sizing.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Mono — Geist Mono</span>
              <p className="font-mono" style={{ fontSize: 'var(--text-h2)', marginTop: 'var(--space-md)', lineHeight: 'var(--lh-tight)' }}>01 02 03</p>
              <p className="font-mono" style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                Used for step numbers, timestamps, tags, pricing figures, and technical labels.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
              <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Sans — Inter</span>
              <p className="font-sans" style={{ fontSize: 'var(--text-h2)', marginTop: 'var(--space-md)', lineHeight: 'var(--lh-tight)' }}>Aa Bb Cc</p>
              <p className="font-sans" style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                Used for body copy, UI navigation, form labels, and general interface text.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE B — BUTTONS
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate B — US-13</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Button System</h2>

          <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Variants</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginTop: 'var(--space-md)', alignItems: 'center' }}>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-primary btn-icon"><ArrowUpRight size={16} /></button>
            </div>

            <hr className="divider" style={{ margin: 'var(--space-xl) 0' }} />

            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Sizes</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginTop: 'var(--space-md)', alignItems: 'center' }}>
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary">Default</button>
              <button className="btn btn-primary btn-lg">Large</button>
              <button className="btn btn-primary btn-xl">Extra Large</button>
            </div>

            <hr className="divider" style={{ margin: 'var(--space-xl) 0' }} />

            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>States</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginTop: 'var(--space-md)', alignItems: 'center' }}>
              <button className="btn btn-primary" disabled>Disabled</button>
              <button className="btn btn-primary btn-loading">Loading</button>
              <button className="btn btn-outline" disabled>Disabled</button>
              <button className="btn btn-outline btn-loading">Loading</button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE B — MARQUEE
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate B — US-15</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Marquee Ribbon</h2>

          <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Default</span>
            <div className="marquee" style={{ marginTop: 'var(--space-md)' }}>
              <div className="marquee-track">
                <div className="marquee-content">
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                </div>
                <div className="marquee-content">
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                  <span>Watch our reel</span><span className="marquee-dot">·</span>
                </div>
              </div>
            </div>

            <hr className="divider" style={{ margin: 'var(--space-xl) 0' }} />

            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Reverse + Fast</span>
            <div className="marquee marquee--fast marquee--reverse" style={{ marginTop: 'var(--space-md)' }}>
              <div className="marquee-track">
                <div className="marquee-content">
                  <span>Brand Identity</span><span className="marquee-dot">◆</span>
                  <span>Web Design</span><span className="marquee-dot">◆</span>
                  <span>UI/UX</span><span className="marquee-dot">◆</span>
                  <span>Growth</span><span className="marquee-dot">◆</span>
                  <span>Social Media</span><span className="marquee-dot">◆</span>
                </div>
                <div className="marquee-content">
                  <span>Brand Identity</span><span className="marquee-dot">◆</span>
                  <span>Web Design</span><span className="marquee-dot">◆</span>
                  <span>UI/UX</span><span className="marquee-dot">◆</span>
                  <span>Growth</span><span className="marquee-dot">◆</span>
                  <span>Social Media</span><span className="marquee-dot">◆</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE C — CARDS
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate C — US-16</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Card System</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
            <div className="card card-interactive">
              <div style={{ height: '180px', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-lime))' }} />
              <div className="card-body">
                <h3 className="card-title">Default Card</h3>
                <p className="card-text">Hover to see the interactive zoom and elevation effect.</p>
              </div>
            </div>

            <div className="card-elevated card-interactive">
              <div className="card-body">
                <h3 className="card-title">Elevated Card</h3>
                <p className="card-text">Always elevated with shadow, no border.</p>
              </div>
            </div>

            <div className="card-bordered card-interactive">
              <div className="card-body">
                <h3 className="card-title">Bordered Card</h3>
                <p className="card-text">Strong 2px border for emphasis.</p>
              </div>
            </div>

            <div className="card-glass card-interactive">
              <div className="card-body">
                <h3 className="card-title">Glass Card</h3>
                <p className="card-text">Frosted glass with backdrop blur.</p>
              </div>
            </div>

            <div className="card-stat card-interactive">
              <div className="card-stat-value">150+</div>
              <div className="card-stat-label">Projects Delivered</div>
            </div>

            <div className="card-stat card-interactive">
              <div className="card-stat-value">25+</div>
              <div className="card-stat-label">Industries</div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE C — ACCORDION
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate C — US-17</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Accordion System</h2>
          <AccordionDemo />
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE C — MODALS
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate C — US-18</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Modal & Overlay System</h2>
          <ModalDemo />
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE D — FORM INPUTS
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate D — US-19</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Form Input System</h2>

          <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)', maxWidth: '640px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="input" placeholder="e.g. Alex Morgan" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="input input--lg" placeholder="alex@company.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <select className="select">
                  <option>Select a role...</option>
                  <option>Designer</option>
                  <option>Developer</option>
                  <option>Manager</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input className="input input--sm" placeholder="First" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input className="input input--sm" placeholder="Last" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="textarea" placeholder="Tell us about your project..." rows={4} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: '#DC3545' }}>Error State</label>
                <input className="input input--error" value="Invalid input" readOnly />
                <span className="form-error">This field is required.</span>
              </div>
              <div className="form-group">
                <label className="form-label">Success State</label>
                <input className="input input--success" value="Valid input" readOnly />
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
                <label className="checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Checkbox</span>
                </label>
                <label className="radio">
                  <input type="radio" name="demo" defaultChecked />
                  <span>Radio</span>
                </label>
                <label className="radio">
                  <input type="radio" name="demo" />
                  <span>Radio 2</span>
                </label>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <div className="toggle-track"><div className="toggle-thumb" /></div>
                  <span>Toggle</span>
                </label>
              </div>
              <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <Check size={16} /> Submit
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GATE D — UTILITIES
            ══════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: 'var(--space-5xl)' }}>
          <span className="section-label">Gate D — US-20</span>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-2xl)' }}>Utility Classes</h2>

          <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Flex Utilities</span>
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)', flexWrap: 'wrap' }}>
              <div className="flex items-center gap-sm" style={{ background: 'var(--bg-sunken)', padding: '8px 16px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ width: 16, height: 16, background: 'var(--accent-blue)', borderRadius: 4 }} />
                <span className="text-caption">flex items-center gap-sm</span>
              </div>
              <div className="flex justify-between items-center" style={{ background: 'var(--bg-sunken)', padding: '8px 16px', borderRadius: 'var(--radius-md)', flex: 1, minWidth: 200 }}>
                <span className="text-caption">justify-between</span>
                <div style={{ width: 16, height: 16, background: 'var(--accent-lime)', borderRadius: 4 }} />
              </div>
            </div>

            <hr className="divider" style={{ margin: 'var(--space-xl) 0' }} />

            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Grid Utilities</span>
            <div className="grid grid-3 gap-md" style={{ marginTop: 'var(--space-md)' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ background: 'var(--bg-sunken)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <span className="text-caption">grid-3 col {i}</span>
                </div>
              ))}
            </div>

            <hr className="divider" style={{ margin: 'var(--space-xl) 0' }} />

            <span className="font-mono" style={{ fontSize: 'var(--text-tag)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)' }}>Dividers</span>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <p className="text-caption" style={{ marginBottom: 'var(--space-sm)' }}>Default</p>
              <hr className="divider" />
              <p className="text-caption" style={{ margin: 'var(--space-md) 0 var(--space-sm)' }}>Dark</p>
              <hr className="divider divider--dark" />
              <p className="text-caption" style={{ margin: 'var(--space-md) 0 var(--space-sm)' }}>Thick</p>
              <hr className="divider divider--thick" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ── Accordion Demo (internal component) ── */
function AccordionDemo() {
  const [openIdx, setOpenIdx] = useState(0);
  const items = [
    { q: 'What services does Hazel Zimuto provide?', a: 'We offer Brand Identity & Strategy, Website Design & Development, UI/UX & Product Design, Digital Marketing & Growth, and Social Media & Content Marketing.' },
    { q: 'How long does a typical project take?', a: 'A standard project takes 4 to 8 weeks depending on scope, complexity, and feedback rounds.' },
    { q: 'Do you work with startups?', a: 'We work with both ambitious early-stage startups and established market leaders looking to transform their digital presence.' },
  ];

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion-item ${openIdx === i ? 'open' : ''}`}>
          <button className="accordion-trigger" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span>{item.q}</span>
            <span className="accordion-chevron"><ChevronDown size={18} /></span>
          </button>
          <div className="accordion-panel">
            <div className="accordion-content">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Modal Demo (internal component) ── */
function ModalDemo() {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <div style={{ background: 'var(--bg-card)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-light)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>Open Modal</button>
        <button className="btn btn-outline" onClick={() => setDrawer(true)}>Open Drawer</button>
      </div>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal modal--md" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}><X size={18} /></button>
            <span className="section-label" style={{ color: 'var(--accent-blue)' }}>Modal Demo</span>
            <h3 className="text-h3" style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>Sample Modal</h3>
            <p className="text-body" style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)' }}>
              This is a modal with backdrop blur, slide-up entrance animation, and size variants. Click outside or the close button to dismiss.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <button className="btn btn-primary" onClick={() => setOpen(false)}>Confirm</button>
              <button className="btn btn-outline" onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {drawer && (
        <>
          <div className="drawer-overlay" onClick={() => setDrawer(false)} />
          <div className="drawer">
            <button className="modal-close" onClick={() => setDrawer(false)} style={{ position: 'absolute', top: 16, right: 16 }}><X size={18} /></button>
            <span className="section-label" style={{ color: 'var(--accent-blue)' }}>Drawer Demo</span>
            <h3 className="text-h3" style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>Slide-in Drawer</h3>
            <p className="text-body" style={{ color: 'var(--text-muted)' }}>
              This drawer slides in from the right edge. It's useful for side panels, filters, and detail views.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
