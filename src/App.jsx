import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSteps } from './components/ProcessSteps';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { AboutPage } from './pages/AboutPage';
import { DesignSystemPage } from './pages/DesignSystemPage';

import { ProjectModal } from './components/ProjectModal';
import { ReelModal } from './components/ReelModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleOpenContact = (planTitle = '') => {
    setSelectedPlan(planTitle);
    setIsContactOpen(true);
  };

  return (
    <div className="app-main">
      {/* Global Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Dynamic Page Views */}
      {activePage === 'home' && (
        <main>
          <Hero onOpenReel={() => setIsReelOpen(true)} />
          <Marquee onOpenReel={() => setIsReelOpen(true)} />
          <ProjectsGrid onSelectProject={(project) => setSelectedProject(project)} />
          <ProcessSteps />
          <ServicesSection />
          <PricingSection onOpenContact={(plan) => handleOpenContact(plan)} />
          <Testimonials />
          <BlogSection onSelectBlog={() => handleOpenContact()} />
          <FaqSection />
        </main>
      )}

      {activePage === 'about' && (
        <main>
          <AboutPage onOpenContact={() => handleOpenContact()} />
        </main>
      )}

      {activePage === 'design-system' && (
        <main>
          <DesignSystemPage />
        </main>
      )}

      {activePage === 'services' && (
        <main style={{ paddingTop: '100px' }}>
          <ServicesSection />
          <ProcessSteps />
        </main>
      )}

      {activePage === 'pricing' && (
        <main style={{ paddingTop: '100px' }}>
          <PricingSection onOpenContact={(plan) => handleOpenContact(plan)} />
          <FaqSection />
        </main>
      )}

      {activePage === 'blog' && (
        <main style={{ paddingTop: '100px' }}>
          <BlogSection onSelectBlog={() => handleOpenContact()} />
        </main>
      )}

      {/* Global Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => handleOpenContact(`Project: ${title}`)}
      />

      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
