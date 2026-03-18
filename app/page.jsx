'use client';

import React, { useState, useEffect } from 'react';
import { Rocket, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HomeView from '../components/views/HomeView';
import AboutView from '../components/views/AboutView';
import ProgrammeView from '../components/views/ProgrammeView';
import DirectoryView from '../components/views/DirectoryView';
import AwardsView from '../components/views/AwardsView';
import InspView from '../components/views/InspView';
import VisitorView from '../components/views/VisitorView';
import ExhibitorView from '../components/views/ExhibitorView';
import MediaView from '../components/views/MediaView';
import ContactView from '../components/views/ContactView';
import MultiStepForm from '../components/UI/MultiStepForm';
import { navLinks } from '../data/navigation';

export default function MihasWebsite() {
  const [currentView, setCurrentView] = useState('home');
  const [subView, setSubView] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(null); // null, 'exhibitor', 'visitor', 'media', 'sponsor'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    // Hash-based Routing Persistence
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const [view, sub] = hash.split('/');
        // Validate if the view exists in our navigation (basic check)
        setCurrentView(view || 'home');
        setSubView(sub || 'overview');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', syncFromHash);
    
    // Initial sync
    syncFromHash();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, []);

  const navigate = (viewId, subId = 'overview') => {
    // Update hash which triggers syncFromHash via listener
    window.location.hash = subId === 'overview' ? viewId : `${viewId}/${subId}`;
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleOpenForm = (type) => {
    setFormOpen(type);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView navigate={navigate} onOpenForm={handleOpenForm} />;
      case 'about': return <AboutView subView={subView} setSubView={setSubView} onOpenForm={handleOpenForm} />;
      case 'programme': return <ProgrammeView />;
      case 'directory': return <DirectoryView onOpenForm={handleOpenForm} />;
      case 'awards': return <AwardsView onOpenForm={handleOpenForm} />;
      case 'insp': return <InspView navigate={navigate} onOpenForm={handleOpenForm} />;
      case 'visitor': return <VisitorView subView={subView} setSubView={setSubView} onOpenForm={handleOpenForm} />;
      case 'exhibitor': return <ExhibitorView subView={subView} setSubView={setSubView} onOpenForm={handleOpenForm} />;
      case 'media': return <MediaView subView={subView} setSubView={setSubView} onOpenForm={handleOpenForm} />;
      case 'contact': return <ContactView subView={subView} setSubView={setSubView} onOpenForm={handleOpenForm} />;
      default: return <HomeView navigate={navigate} onOpenForm={handleOpenForm} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900 flex flex-col">
      <Header 
        navLinks={navLinks} 
        currentView={currentView} 
        navigate={navigate} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        onOpenForm={handleOpenForm}
      />
      
      <main className="flex-grow relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer navigate={navigate} />

      {/* Sticky Bottom/Side Actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={() => handleOpenForm('sponsor')}
          className="bg-white text-slate-900 border border-slate-200 px-5 py-3 rounded-2xl font-button shadow-2xl hover:bg-slate-50 flex items-center justify-center gap-3 group transition-all"
        >
          <Crown size={18} className="text-orange-600 opacity-80 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all" />
          <span>Sponsor</span>
        </button>
        <button
          onClick={() => handleOpenForm('exhibitor')}
          className="bg-orange-600 text-white px-5 py-3 rounded-2xl font-button shadow-2xl shadow-orange-900/20 hover:bg-orange-500 flex items-center justify-center gap-3 group transition-all"
        >
          <Rocket size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          <span>Book Space</span>
        </button>
      </div>

      {formOpen && (
        <MultiStepForm type={formOpen} onClose={() => setFormOpen(null)} />
      )}

    </div>
  );
}