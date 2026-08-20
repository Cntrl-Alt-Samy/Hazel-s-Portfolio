import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export function ProjectsGrid({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Website', 'Social Media', 'UX/UI', 'Growth', 'Branding'];

  const filteredProjects = activeFilter === 'All'
    ? siteData.projects
    : siteData.projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section className="projects-section" id="works">
      <div className="container">
        {/* Section Header & Filters */}
        <div className="section-header">
          <div>
            <span className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', display: 'block', marginBottom: '8px' }}>
              Featured Work
            </span>
            <h2 className="section-title">
              Selected projects built with ambitious brands and bold teams
            </h2>
          </div>

          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-image-wrapper">
                <div className="project-tags">
                  {project.categories.map((cat, idx) => (
                    <span key={idx} className="tag-pill">
                      {cat}
                    </span>
                  ))}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                </div>
                <div className="project-arrow-icon">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
