import React from 'react';
import { Home } from 'lucide-react';
import Link from 'next/link';

const BlogHero = ({ blog }) => {
  return (
    <div className="relative bg-[#1e2a47] overflow-hidden">
      {/* Decorative Background Pattern (Re-added for the dark theme) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[200%] rotate-12 border-[40px] border-[#c41e3a10] rounded-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[120%] -rotate-12 border-[20px] border-[#fb923c10] rounded-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-white/70 text-sm mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            <Home size={16} />
          </Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-white transition-colors uppercase tracking-wider font-semibold">Blogs</Link>
          <span>/</span>
          <span className="text-white font-semibold truncate max-w-[200px] md:max-w-md">{blog.title}</span>
        </div>

        {/* Content Header */}
        <div className="max-w-4xl">
          <div className="inline-block bg-[#c41e3a] text-white text-xs font-black px-3 py-1 mb-4 tracking-[0.2em] uppercase">
            {blog.category || "MIHAS NEWS"}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fb923c]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fb923c]"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              By {blog.author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogHero;
