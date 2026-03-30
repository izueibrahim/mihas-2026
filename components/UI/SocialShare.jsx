"use client";

import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const SocialShare = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#3b5998]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#0077b5]'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#1da1f2]'
    }
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mt-8 pt-8 border-t border-gray-100">
      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
        Share Now :
      </span>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition-opacity text-sm font-medium`}
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
