import React from 'react';
import { newsData } from '@/data/news';
import NewsHero from '@/components/views/NewsHero';
import BlogContent from '@/components/views/BlogContent';
import NewsSidebar from '@/components/views/NewsSidebar';
import SocialShare from '@/components/UI/SocialShare';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogPageLayout from '@/components/views/BlogPageLayout';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const news = newsData.find((b) => b.slug === slug);
  
  if (!news) {
    return {
      title: 'News Not Found | MIHAS 2026',
    };
  }

  return {
    title: `${news.title} | MIHAS News`,
    description: news.excerpt || `Read more about ${news.title} on the official MIHAS 2026 news portal.`,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.frontImage],
    },
  };
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

const NewsDetailPage = async ({ params }) => {
  const { slug } = await params;
  const news = newsData.find((b) => b.slug === slug);

  if (!news) {
    notFound();
  }

  // Get related news (excluding the current one)
  const relatedNews = newsData
    .filter((b) => b.id !== news.id)
    .slice(0, 3);

  return (
    <BlogPageLayout>
      {/* News Hero Section */}
      <NewsHero news={news} />

      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            {/* Title (Now visible below the hero) */}
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight italic uppercase">
              {news.title}
            </h1>

            {/* Main Content Image */}
            <div className="relative aspect-video mb-12 overflow-hidden rounded-xl shadow-lg border border-slate-100">
              <img 
                src={news.contentImage} 
                alt={news.title} 
                className="object-cover w-full h-full"
              />
            </div>

            {/* News Content */}
            <BlogContent content={news.content} />

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
          <NewsSidebar relatedNews={relatedNews} />
          
        </div>
      </main>
    </BlogPageLayout>
  );
};

export default NewsDetailPage;
