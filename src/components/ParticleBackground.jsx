import { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(Array.from({ length: 58 }, (_, i) => ({
      id: i, left: `${Math.random() * 100}%`, size: `${2 + Math.random() * 3}px`,
      duration: `${8 + Math.random() * 14}s`, delay: `${-Math.random() * 18}s`,
      drift: `${Math.random() * 100 - 50}px`, opacity: 0.25 + Math.random() * 0.65,
    })));
  }, []);
  return <div className="particle-background" aria-hidden="true">
    <div className="glow-orb orb-a" /><div className="glow-orb orb-b" /><div className="glow-orb orb-c" />
    <div className="particle-field">{particles.map(p => <span key={p.id} className="particle" style={{ left: p.left, width: p.size, height: p.size, animationDuration: p.duration, animationDelay: p.delay, '--drift': p.drift, opacity: p.opacity }} />)}</div>
    <div className="grid-overlay" />
  </div>;
}
