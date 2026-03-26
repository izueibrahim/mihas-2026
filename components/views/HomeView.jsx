'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Play, Quote, Award, ArrowRight, MousePointer2 } from 'lucide-react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import AnimatedCounter from '../UI/AnimatedCounter';
import SponsorShowcase from '../UI/SponsorShowcase';
import { statsData } from '../../data/stats';
import { newsData } from '../../data/news';
import { blogs } from '../../data/blogs';

const HomeView = ({ navigate, onOpenForm }) => (
  <div className="bg-white">
    {/* Full Size Hero Section */}
    <section className="relative min-h-[85vh] md:min-h-screen w-full flex flex-col justify-center pt-[72px] md:pt-[88px] pb-16 bg-slate-900 overflow-hidden">
      {/* Hero Background Images */}
      <picture className="absolute inset-0">
        <source media="(max-width: 768px)" srcSet="/images/hero/hero-mobile.png" />
        <img
          src="/images/hero/hero-desktop.png"
          alt="MIHAS 2026 Global Halal Economy"
          className="w-full h-full object-cover"
        />
      </picture>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-700"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="font-label text-white">23 - 26 September 2026 • MITEC, Kuala Lumpur</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="font-h1 text-white mb-12 text-center flex flex-col items-center"
          >
            {/* ROW 1: Your "h1" (Logo + MIHAS) */}
            <span className="flex items-center justify-center gap-3 md:gap-5">
              {/* Change 'mihas-logo.png' to your actual file name! */}
              <img src="images/mihas-logo/mihas-logo.png" alt="MIHAS Logo" className="h-16 md:h-20 w-auto object-contain" />
              <span className="tracking-wider text-6xl md:text-7xl font-bold">MIHAS</span>
            </span>

            {/* ROW 2: Your "h2" (Subtitle) */}
            <span className="block text-lg md:text-xl font-normal mt-2 tracking-wide text-white/90">
              Malaysia International <span className="text-orange-500 font-medium">Halal</span> Showcase
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="text-center mb-12 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* ROW 1: Made bigger so it matches better */}
            <span className="block text-3xl md:text-4xl text-white/90 font-medium mb-2">
              Join the World's
            </span>

            {/* ROW 2: Brought the size down slightly so it doesn't overpower Row 1 */}
            <span className="block text-4xl md:text-5xl font-bold text-white tracking-wide">
              Biggest <span className="text-orange-500">Halal</span> Showcase
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white shadow-2xl shadow-orange-950/20"
              onClick={() => onOpenForm('exhibitor')}
            >
              Book Space <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900"
              onClick={() => onOpenForm('visitor')}
            >
              Register as Visitor
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <MousePointer2 size={32} />
      </div>
    </section>

    {/* Intro & Global Impact Section */}
    <section className="py-24 px-6 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="space-y-8">
          <h3 className="text-orange-600 font-label">MIHAS Heritage</h3>
          <h2 className="font-h1 text-slate-900 italic">
            Global Halal <br />Leadership.
          </h2>
          <p className="font-body-lg text-slate-500 italic">The 22nd edition of MIHAS will be a 4-day trade showcase held in Kuala Lumpur, Malaysia, alongside the MIHAS Virtual platform. Since 2004, we've set the standard for Halal excellence.</p>
          <div className="pt-4">
            <Button variant="outline" className="border-slate-200" onClick={() => navigate('about')}>About MIHAS Excellence</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-y-12 gap-x-8">
          {statsData.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center flex flex-col items-center justify-center">
              <h3 className="font-h1 md:font-h1 text-orange-600 mb-2 leading-none"><AnimatedCounter value={stat.value} duration={2} /></h3>
              <p className="font-label text-slate-900 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Strategic 3 CTAs Block */}
    <section className="w-full">
      <div className="grid md:grid-cols-3 h-auto md:h-[450px]">
        {/* CTA 1 */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-slate-900 text-white p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="font-h2 italic uppercase leading-none">Exhibitor<br />Incentives</h3>
            <p className="text-slate-400 font-medium uppercase tracking-tight italic">Unlock unparalleled access to OIC markets and beyond.</p>
            <Button
              className="bg-white text-slate-900 hover:bg-orange-600 hover:text-white"
              onClick={() => navigate('exhibitor', 'incentives')}
            >
              View Benefits
            </Button>
          </div>
        </motion.div>
        {/* CTA 2 */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-orange-600 text-white p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 space-y-8 text-center sm:text-left">
            <h3 className="font-h2 italic uppercase leading-none text-slate-900">Registration<br />is Open</h3>
            <p className="text-orange-100 font-body italic">Secure your space before early bird passes expire.</p>
            <Button
              className="bg-slate-900 text-white hover:bg-white hover:text-slate-900 shadow-2xl shadow-orange-950/20"
              onClick={() => onOpenForm('exhibitor')}
            >
              Reserve Space Now
            </Button>
          </div>
        </motion.div>
        {/* CTA 3 */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-slate-50 text-slate-900 p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="font-h2 italic uppercase leading-none underline decoration-orange-500/20 underline-offset-8">At a <br />Glance</h3>
            <div className="flex items-center gap-6">
              <button className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 shadow-2xl transition-all group-hover:bg-orange-600">
                <Play className="ml-1" size={28} />
              </button>
              <span className="font-ui italic text-slate-400">Watch <br />Showcase Film</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Word from CEO - Premium Quote Section */}
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="py-32 bg-white px-6 relative overflow-hidden font-serif">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote size={400} />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Quote className="mx-auto text-orange-200 w-24 h-24 mb-12 rotate-180 opacity-40" />
        <p className="font-h3 text-slate-800 leading-[1.2] mb-16 italic tracking-tight">
          "The event has become the largest gathering of those who are in this segment specifically. It is now the largest trade show for the industry and it keeps growing."
        </p>
        <div className="space-y-2">
          <div className="font-h4 italic text-slate-900">Rafi-uddin Shikoh</div>
          <div className="text-orange-600 font-label">CEO DinarStandard USA</div>
        </div>
      </div>
    </motion.section>

    {/* Blog & News Dynamic Highlight */}
    <section className="py-32 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
          {/* Awards Segment */}
          <div className="space-y-10">
            <div className="flex items-end justify-between border-b border-white/10 pb-6">
              <h2 className="font-h3 italic uppercase">MIHAS Awards 2025</h2>
              <Button variant="ghost" onClick={() => navigate('awards')} className="text-orange-400 hover:text-white group hidden sm:flex">The Ceremony <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" /></Button>
            </div>
            <Card className="bg-slate-800 border-slate-700 text-white p-0 overflow-hidden ring-1 ring-white/5 shadow-2xl hover:shadow-orange-900/10 transition-all">
              <div className="h-48 md:h-64 bg-slate-700 relative group overflow-hidden">
                <Award size={120} className="text-slate-600 absolute bottom-4 right-4 opacity-20 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-8">
                  <div className="bg-orange-600 text-white font-ui px-4 py-1.5 rounded-full mb-2 inline-block">Event Highlight</div>
                  <h3 className="font-h3 italic uppercase leading-none">Global Excellence</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 space-y-6">
                <h3 className="font-h3 italic uppercase underline decoration-orange-500/30 underline-offset-8">Innovation and Sustainability Take Centre Stage</h3>
                <p className="text-slate-400 leading-relaxed font-medium">The Malaysia International Halal Showcase (MIHAS) Awards 2025 concluded with a celebration of excellence across various halal sectors, setting new benchmarks for the industry.</p>
                <Button className="bg-white text-slate-900 hover:bg-orange-600 hover:text-white" onClick={() => navigate('awards')}>View All Winners</Button>
              </div>
            </Card>
          </div>

          {/* News list */}
          <div className="space-y-10 lg:pt-2">
            <div className="space-y-6">
              <h2 className="font-h3 text-white border-l-4 border-orange-500 pl-4 uppercase italic">Press Highlights</h2>
              <div className="space-y-2">
                {newsData.slice(0, 4).map((news, i) => (
                  <div key={i} onClick={() => navigate('media', 'news')} className="group flex items-center justify-between p-6 rounded-2xl bg-slate-800/40 hover:bg-slate-800 cursor-pointer border border-white/5 transition-all">
                    <div className="space-y-1 pr-4">
                      <div className="text-orange-500 font-label italic">{news.date}</div>
                      <div className="font-h4 group-hover:text-white transition-colors uppercase italic text-sm">
                        {news.title}
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-slate-600 group-hover:text-orange-500 shrink-0 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Refined Blog Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-orange-600 font-label italic">Knowledge Center</h3>
            <h2 className="font-h2 italic uppercase underline decoration-white/10 underline-offset-[12px]">Latest Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {blogs.slice(0, 3).map((blog, i) => (
              <motion.div key={blog.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="h-full">
                <Card className="bg-slate-800 border-none text-white overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500 flex flex-col h-full rounded-[32px] shadow-2xl shadow-black/20">
                  <div className="h-48 bg-slate-700 relative overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="font-label text-slate-500 group-hover:text-orange-500 italic transition-colors">{blog.date}</span>
                    <h3 className="font-h4 mt-4 mb-4 group-hover:text-white transition-colors line-clamp-2 uppercase italic">{blog.title}</h3>
                    <p className="font-body-sm text-slate-400 line-clamp-3 mb-8 italic">{blog.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 font-label text-orange-500 italic group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={14} />
                      </div>
                      <div className="font-label text-slate-600">Article</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center pt-8">
            <Button variant="outline" onClick={() => navigate('media', 'blog')} className="border-slate-700 text-slate-500 hover:text-white hover:border-orange-500">Enter Blog Archives</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Dedicated MIHAS Insight Section */}
    <section className="py-20 bg-orange-600 text-white px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-h2 italic uppercase tracking-tighter">MIHAS Insight</h2>
        <p className="font-body-lg text-orange-100 italic">Industry reports and exclusive show updates delivered directly to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto pt-6">
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white font-label"
          />
          <button className="px-10 py-5 bg-slate-900 text-white font-button rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>

    {/* Global Network Section */}
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="text-center mb-16 px-6 space-y-4">
        <h2 className="font-h2 text-slate-900 italic uppercase">Strategic Partnerships</h2>
        <p className="text-slate-500 font-label">Empowering the Halal Ecosystem through Global Collaboration</p>
      </div>
      <SponsorShowcase />
    </section>
  </div>
);

export default HomeView;
