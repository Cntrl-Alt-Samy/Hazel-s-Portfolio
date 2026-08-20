import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectModal({ project, onClose, onInquire }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '840px' }}
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={20} />
            </button>

            {/* Header Tags & Year */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {project.categories.map((cat, idx) => (
                <span key={idx} className="tag-pill" style={{ position: 'static', background: 'var(--bg-dark)' }}>
                  {cat}
                </span>
              ))}
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '4px 8px' }}>
                {project.year} • Client: {project.client}
              </span>
            </div>

            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
              {project.fullDescription || project.summary}
            </p>

            {/* Key Metrics Row */}
            {project.metrics && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', background: 'var(--bg-main)', padding: '20px', borderRadius: '16px', marginBottom: '24px' }}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--accent-blue)' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Visual Gallery */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', borderRadius: '16px', height: '360px', objectFit: 'cover' }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
              <button className="btn-outline" onClick={onClose}>
                Close Preview
              </button>
              <button className="btn-primary" onClick={() => { onClose(); onInquire(project.title); }}>
                <span>Start Similar Project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
