import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export function BlogSection({ onSelectBlog }) {
  return (
    <section className="projects-section" id="blog" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <div className="section-header">
          <div>
            <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px' }}>
              Insights
            </span>
            <h2 className="section-title">
              Ideas, Insights & Perspectives
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {siteData.blogs.slice(0, 3).map((article) => (
            <div
              key={article.id}
              style={{
                background: 'var(--bg-main)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => onSelectBlog(article)}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="tag-pill" style={{ position: 'static', background: 'var(--accent-blue)' }}>
                    {article.tag}
                  </span>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {article.date}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: '1.3' }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                  {article.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '0.875rem', color: 'var(--accent-blue)' }}>
                  <span>Read Article</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
