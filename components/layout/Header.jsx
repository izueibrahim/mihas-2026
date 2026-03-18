import React, { useState } from 'react';
import { Menu, X, ChevronDown, Rocket, Crown } from 'lucide-react';
import Button from '../UI/Button';

const Header = ({ navLinks, currentView, navigate, isMobileMenuOpen, setIsMobileMenuOpen, onOpenForm }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleNavigate = (id, subId = null) => {
    navigate(id, subId);
    setHoveredLink(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="mx-auto flex items-center h-[72px] md:h-[88px]">
        
        {/* Dark Logo Box */}
        <div className="bg-slate-900 h-full flex items-center px-8 shrink-0">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center group"
          >
            <img 
              src="/src/logo.png" 
              alt="MIHAS 2026" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-end px-6 lg:px-10 h-full">

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 h-full">
            {navLinks.map(link => (
              <div
                key={link.id}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button
                  onClick={() => handleNavigate(link.id, link.defaultSub)}
                  className={`flex items-center gap-2 font-nav px-4 py-2.5 rounded-full transition-all whitespace-nowrap ${currentView === link.id && link.id === 'home'
                    ? 'text-orange-600 bg-orange-50'
                    : currentView === link.id
                      ? 'text-orange-600'
                      : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                  {link.label}
                  {link.subs && <ChevronDown size={14} className={`transition-transform duration-300 opacity-50 ${hoveredLink === link.id ? 'rotate-180' : ''}`} />}
                </button>

                {/* Luxury Dropdown */}
                {link.subs && hoveredLink === link.id && (
                  <div className={`absolute top-[75px] w-72 bg-white shadow-2xl border border-slate-100 rounded-3xl py-4 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden ring-1 ring-slate-900/5 ${
                    navLinks.indexOf(link) > navLinks.length - 3 ? 'right-0' : 'left-0'
                  }`}>
                    <div className="px-6 py-2 mb-2">
                      <p className="font-label text-slate-300">{link.label} Explore</p>
                    </div>
                    {link.subs.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavigate(link.id, sub.id)}
                        className="w-full text-left px-6 py-4 font-button text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-all flex items-center justify-between group/item"
                      >
                        {sub.label}
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {/* CTA Actions Removed to become sticky elsewhere */}
            <div className="hidden xl:flex items-center gap-4">
              {/* CTAs removed */}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-2xl transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)] bg-white overflow-y-auto border-t border-slate-100 flex flex-col animate-in slide-in-from-right duration-500">
          <div className="p-6 flex flex-col gap-2">
            {navLinks.map(link => (
              <div key={link.id} className="flex flex-col border-b border-slate-50 last:border-0">
                <button
                  onClick={() => handleNavigate(link.id, link.defaultSub)}
                  className={`p-5 text-left font-bold text-lg uppercase tracking-tight rounded-2xl transition-all flex items-center justify-between ${currentView === link.id ? 'bg-orange-50 text-orange-600' : 'text-slate-900'
                    }`}
                >
                  {link.label}
                  {link.subs && <ChevronDown size={18} className="text-slate-300" />}
                </button>
                {link.subs && (
                  <div className="px-6 pb-4 flex flex-col gap-1">
                    {link.subs.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavigate(link.id, sub.id)}
                        className="p-4 text-left font-label text-slate-400 hover:text-orange-600 rounded-xl hover:bg-orange-50 transition-all"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-4 pb-12">
              <Button
                variant="outline"
                className="py-4 font-button"
                onClick={() => { onOpenForm('sponsor'); setIsMobileMenuOpen(false); }}
              >
                Sponsor
              </Button>
              <Button
                className="py-4 font-button"
                onClick={() => { onOpenForm('exhibitor'); setIsMobileMenuOpen(false); }}
              >
                Book Space
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
