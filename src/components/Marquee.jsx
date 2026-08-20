import React from 'react';
import { Play } from 'lucide-react';

export function Marquee({ onOpenReel }) {
  const items = Array(8).fill("Watch our reel");

  return (
    <div className="marquee-container" onClick={onOpenReel} title="Click to watch studio video reel">
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((text, idx) => (
            <React.Fragment key={idx}>
              <span>{text}</span>
              <Play size={14} className="marquee-dot" fill="currentColor" />
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((text, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span>{text}</span>
              <Play size={14} className="marquee-dot" fill="currentColor" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
