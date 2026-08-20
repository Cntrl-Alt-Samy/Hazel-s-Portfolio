import React from 'react';
import { X, Play } from 'lucide-react';

export function ReelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          maxWidth: '960px', 
          background: '#09090B', 
          color: '#fff',
          padding: '24px'
        }}
      >
        <button className="modal-close-btn" onClick={onClose} style={{ background: '#27272A', color: '#fff' }}>
          <X size={20} />
        </button>

        <div style={{ padding: '12px 0 20px 0' }}>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: '#EEFF00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ✦ Studio Showreel 2026
          </span>
          <h2 className="font-serif" style={{ fontSize: '2rem', marginTop: '4px' }}>
            Hazel Zimuto Creative Reel
          </h2>
        </div>

        {/* Video Player Frame */}
        <div style={{ position: 'relative', width: '100%', height: '480px', borderRadius: '16px', overflow: 'hidden', background: '#18181B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="Hazel Zimuto Showreel"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
