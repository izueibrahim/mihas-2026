import React from 'react';
import Link from 'next/link';

const BlogSidebar = ({ relatedBlogs }) => {
  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Related Posts */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#c41e3a] inline-block">Read More</h3>
        <div className="space-y-6">
          {relatedBlogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col gap-3">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[#c41e3a] text-xs font-bold uppercase tracking-wider">{blog.date}</span>
                <h4 className="font-bold text-gray-900 line-clamp-2 mt-1 group-hover:text-[#c41e3a] transition-colors leading-snug">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h4>
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="inline-flex items-center text-sm font-bold text-[#c41e3a] mt-3 hover:gap-2 transition-all gap-1"
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

export default BlogSidebar;
