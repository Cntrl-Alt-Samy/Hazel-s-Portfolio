import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Play } from 'lucide-react';
import { siteData } from '../data/siteData';

const CUBE_SIZE = 260;
const HALF = CUBE_SIZE / 2;

const faces = [
  { label: 'Brand', value: 'Identity & Strategy', color: 'var(--accent-blue)' },
  { label: 'Web', value: 'Design & Development', color: 'var(--accent-lime)' },
  { label: 'UI/UX', value: 'Product Design', color: 'var(--accent-coral)' },
  { label: 'Growth', value: 'Marketing & Campaigns', color: 'var(--accent-green)' },
  { label: 'Social', value: 'Content & Media', color: 'var(--accent-blue)' },
  { label: 'Motion', value: 'Animation & Reels', color: 'var(--accent-lime)' },
];

const faceTransforms = [
  `rotateY(0deg) translateZ(${HALF}px)`,
  `rotateY(90deg) translateZ(${HALF}px)`,
  `rotateY(180deg) translateZ(${HALF}px)`,
  `rotateY(270deg) translateZ(${HALF}px)`,
  `rotateX(90deg) translateZ(${HALF}px)`,
  `rotateX(-90deg) translateZ(${HALF}px)`,
];

/* ─── Motion Object 1: Orbiting Satellite Cubes ─── */
function OrbitingSatellites() {
  const satellites = [
    { size: 48, radius: 200, speed: 12, delay: 0, color: 'rgba(33,69,183,0.25)', label: '✦' },
    { size: 36, radius: 220, speed: 18, delay: -4, color: 'rgba(238,255,0,0.2)', label: '◆' },
    { size: 42, radius: 190, speed: 15, delay: -8, color: 'rgba(145,79,69,0.2)', label: '●' },
  ];

  return (
    <>
      {satellites.map((s, i) => (
        <motion.div
          key={i}
          className="satellite-cube"
          style={{
            width: s.size,
            height: s.size,
            background: `linear-gradient(135deg, ${s.color}, rgba(255,255,255,0.1))`,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '10px',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: s.size * 0.35,
            color: 'rgba(255,255,255,0.8)',
            boxShadow: `0 4px 20px ${s.color}`,
            zIndex: 5,
          }}
          animate={{
            rotate: [0, 360],
            x: [
              Math.cos(0) * s.radius,
              Math.cos((Math.PI * 2) / 3) * s.radius,
              Math.cos((Math.PI * 4) / 3) * s.radius,
              Math.cos(Math.PI * 2) * s.radius,
            ],
            y: [
              Math.sin(0) * s.radius * 0.4,
              Math.sin((Math.PI * 2) / 3) * s.radius * 0.4,
              Math.sin((Math.PI * 4) / 3) * s.radius * 0.4,
              Math.sin(Math.PI * 2) * s.radius * 0.4,
            ],
          }}
          transition={{
            rotate: { duration: s.speed, repeat: Infinity, ease: 'linear', delay: s.delay },
            x: { duration: s.speed, repeat: Infinity, ease: 'linear', delay: s.delay },
            y: { duration: s.speed, repeat: Infinity, ease: 'linear', delay: s.delay },
          }}
        >
          {s.label}
        </motion.div>
      ))}
    </>
  );
}

/* ─── Motion Object 2: Floating Glass Particle Ring ─── */
function ParticleRing() {
  const count = 14;
  const seeds = [0.3, 0.7, 0.1, 0.9, 0.5, 0.2, 0.8, 0.4, 0.6, 0.35, 0.75, 0.15, 0.85, 0.55];
  const particles = Array.from({ length: count }, (_, i) => ({
    angle: (360 / count) * i,
    size: 4 + seeds[i] * 6,
    delay: i * 0.3,
    radiusX: 170 + seeds[(i + 1) % count] * 40,
    radiusY: 90 + seeds[(i + 2) % count] * 30,
  }));

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.5)',
            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
            zIndex: 3,
          }}
          animate={{
            x: [
              Math.cos((p.angle * Math.PI) / 180) * p.radiusX,
              Math.cos(((p.angle + 120) * Math.PI) / 180) * p.radiusX,
              Math.cos(((p.angle + 240) * Math.PI) / 180) * p.radiusX,
              Math.cos(((p.angle + 360) * Math.PI) / 180) * p.radiusX,
            ],
            y: [
              Math.sin((p.angle * Math.PI) / 180) * p.radiusY,
              Math.sin(((p.angle + 120) * Math.PI) / 180) * p.radiusY,
              Math.sin(((p.angle + 240) * Math.PI) / 180) * p.radiusY,
              Math.sin(((p.angle + 360) * Math.PI) / 180) * p.radiusY,
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 10 + seeds[i] * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
}

/* ─── Motion Object 3: Magnetic Cursor Faces ─── */
function MagneticFace({ children, index, mouseX, mouseY }) {
  const faceX = useTransform(mouseX, (v) => v * (0.02 + index * 0.008));
  const faceY = useTransform(mouseY, (v) => v * (0.02 + index * 0.008));
  const springX = useSpring(faceX, { stiffness: 150, damping: 15 });
  const springY = useSpring(faceY, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Hero Component ─── */
export function Hero({ onOpenReel }) {
  const [isDragging, setIsDragging] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, (v) => -v * 0.15), {
    stiffness: 80,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, (v) => v * 0.15), {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="hero-section">
      <div className="container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          We make <span className="creative-text">Creative Things.</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {siteData.subtitle}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="btn-primary" onClick={() => onOpenReel?.()}>
            <Play size={16} />
            Watch Reel
          </button>
        </motion.div>

        {/* 3D Glass Cube with Framer Motion */}
        <div
          className="cube-scene"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cube-stage">
            {/* Main Cube */}
            <motion.div
              className={`cube ${isDragging ? 'grabbing' : ''}`}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              whileDrag={{ scale: 1.05 }}
              animate={{
                rotateZ: [0, 0, 0],
              }}
            >
              {faces.map((face, i) => (
                <MagneticFace key={i} index={i} mouseX={mouseX} mouseY={mouseY}>
                  <div
                    className={`cube-face cube-face-${i}`}
                    style={{ transform: faceTransforms[i] }}
                  >
                    <div className="cube-face-shine" />
                    <span className="cube-face-label" style={{ color: face.color }}>
                      {face.label}
                    </span>
                    <span className="cube-face-value">{face.value}</span>
                  </div>
                </MagneticFace>
              ))}
            </motion.div>

            {/* Motion Object 1: Orbiting Satellites */}
            <OrbitingSatellites />

            {/* Motion Object 2: Particle Ring */}
            <ParticleRing />
          </div>

          <motion.p
            className="cube-hint font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Drag to rotate · Hover to interact
          </motion.p>
        </div>
      </div>

      {/* Client Logos Bar */}
      <div className="clients-section">
        <div className="container">
          <motion.p
            className="clients-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by world-leading enterprises
          </motion.p>
          <div className="clients-grid">
            {siteData.clientLogos.map((client, index) => (
              <motion.span
                key={index}
                className="client-logo-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {client.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
