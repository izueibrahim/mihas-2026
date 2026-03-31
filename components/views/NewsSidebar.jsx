import React from 'react';
import Link from 'next/link';

const NewsSidebar = ({ relatedNews }) => {
  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Related Posts */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#fb923c] inline-block">More News</h3>
        <div className="space-y-6">
          {relatedNews.map((newsItem) => (
            <div key={newsItem.id} className="group flex flex-col gap-3">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={newsItem.frontImage} 
                  alt={newsItem.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[#fb923c] text-xs font-bold uppercase tracking-wider">{newsItem.date}</span>
                <h4 className="font-bold text-gray-900 line-clamp-2 mt-1 group-hover:text-[#fb923c] transition-colors leading-snug">
                  <Link href={`/news/${newsItem.slug}`}>
                    {newsItem.title}
                  </Link>
                </h4>
                <Link 
                  href={`/news/${newsItem.slug}`} 
                  className="inline-flex items-center text-sm font-bold text-[#fb923c] mt-3 hover:gap-2 transition-all gap-1"
                >
                  READ MORE 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default NewsSidebar;
