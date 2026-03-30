import React from 'react';
import { blogs } from '@/data/blogs';
import BlogHero from '@/components/views/BlogHero';
import BlogContent from '@/components/views/BlogContent';
import BlogSidebar from '@/components/views/BlogSidebar';
import SocialShare from '@/components/UI/SocialShare';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogPageLayout from '@/components/views/BlogPageLayout';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found | MIHAS 2026',
    };
  }

  return {
    title: `${blog.title} | MIHAS Blog`,
    description: blog.excerpt || `Read more about ${blog.title} on the official MIHAS 2026 blog.`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs (excluding the current one)
  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  return (
    <BlogPageLayout>
      {/* Blog Hero Section */}
      <BlogHero blog={blog} />

      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            {/* Main Image */}
            <div className="relative aspect-video mb-12 overflow-hidden rounded-xl shadow-lg">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="object-cover w-full h-full"
              />
            </div>

            {/* Title (Hidden in content because its in Hero, but good for SEO/Structure) */}
            <h1 className="sr-only">{blog.title}</h1>

            {/* Blog Content */}
            <BlogContent content={blog.content} />

            {/* Registration / Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-12 py-10 border-t border-gray-100">
              <Link 
                href="/registration/visitor" 
                className="px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-black rounded-lg transition-all uppercase tracking-widest text-sm shadow-lg shadow-red-900/10"
              >
                Visitor Registration
              </Link>
              <Link 
                href="/registration/booth" 
                className="px-8 py-4 bg-[#1e2a47] hover:bg-black text-white font-black rounded-lg transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-900/10"
              >
                Book A Space
              </Link>
            </div>

            {/* Social Share */}
            <SocialShare />
          </article>

          {/* Sidebar */}
          <BlogSidebar relatedBlogs={relatedBlogs} />
          
        </div>
      </main>
    </BlogPageLayout>
  );
};

export default BlogDetailPage;
