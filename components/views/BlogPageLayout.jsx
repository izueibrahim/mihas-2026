'use client';

import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MultiStepForm from '../UI/MultiStepForm';
import { navLinks } from '../../data/navigation';
import { Rocket, Crown } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BlogPageLayout = ({ children }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (viewId, subId = 'overview') => {
    // On the blog page, any internal navigation should go back to the home page with the appropriate hash
    const hash = subId === 'overview' ? `#${viewId}` : `#${viewId}/${subId}`;
    router.push('/' + hash);
  };

  const handleOpenForm = (type) => {
    setFormOpen(type);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header 
        navLinks={navLinks} 
        currentView="media" // Since it's a blog under Media Center
        navigate={navigate} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        onOpenForm={handleOpenForm}
      />
      
      <main className="flex-grow">
        {children}
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
};

export default BlogPageLayout;
