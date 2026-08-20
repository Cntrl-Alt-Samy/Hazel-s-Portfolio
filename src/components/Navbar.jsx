import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export function Navbar({ activePage, setActivePage, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // GMT-7 calculation
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const gmt7Time = new Date(utcTime - (7 * 3600000));
      const hours = gmt7Time.getHours().toString().padStart(2, '0');
      const mins = gmt7Time.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${mins} GMT-7`);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Works' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' }
  ];

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Brand Logo */}
        <button 
          onClick={() => setActivePage('home')} 
          className="navbar-brand"
        >
          <span className="navbar-brand-symbol">✦</span>
          <span>{siteData.studioName}</span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActivePage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions & Status */}
        <div className="navbar-actions">
          <div className="status-badge" title="Studio Local Time">
            <span className="status-dot"></span>
            <span>{currentTime || '09:42 GMT-7'}</span>
          </div>

          <button className="btn-primary" onClick={onOpenContact}>
            <span>Book a call</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Burger Icon */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            pointerEvents: 'auto',
            background: '#141414',
            color: '#fff',
            borderRadius: '20px',
            marginTop: '10px',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              style={{
                textAlign: 'left',
                fontSize: '1.25rem',
                color: activePage === item.id ? '#EEFF00' : '#fff',
                fontFamily: 'Fraunces, serif',
                padding: '8px 0'
              }}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
          >
            <span>Book a call</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
