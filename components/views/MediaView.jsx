'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Video, Camera, ArrowRight, Download, Clock, Mail, Info } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import SubNav from '../UI/SubNav';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { mediaTabs } from '../../data/navigation';
import { newsData } from '../../data/news';
import { blogs } from '../../data/blogs';
import { galleryImages, galleryVideos } from '../../data/gallery';

const MediaView = ({ subView, setSubView, onOpenForm }) => {
    const [galleryType, setGalleryType] = useState('photos');

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <PageHeader title="Media Center" breadcrumb="Communications" subtitle="Press Releases, News, and Multimedia Highlights" />
            <SubNav items={mediaTabs} activeItem={subView} onSelect={setSubView} />
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <AnimatePresence mode="wait">
                    <motion.div key={subView} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>

                {subView === 'registration' && (
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="font-h1 text-slate-900 mb-4 italic uppercase">Media Accreditation</h2>
                            <p className="font-body text-slate-600">Join over 200 global media outlets covering the world's premier Halal showcase. Register now for exclusive access.</p>
                        </div>
                        <div className="grid lg:grid-cols-5 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="p-8 bg-slate-900 text-white border-slate-800 shadow-xl">
                                    <h3 className="font-h4 mb-6 flex items-center gap-2 text-orange-400 italic uppercase"><Info size={20} /> Media Privileges</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Access to dedicated Media Lounge",
                                            "Exclusive interview arrangements",
                                            "Priority seating at events",
                                            "Real-time press bulletins",
                                            "High-speed work stations"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 font-body-sm text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                                <div className="p-8 bg-orange-50 rounded-[32px] border border-orange-100 shadow-sm">
                                    <h4 className="font-h4 text-slate-900 mb-2 italic uppercase">Media Kit 2025</h4>
                                    <p className="font-body-sm text-slate-600 mb-6">Download official logos, event photos, and pre-show press releases.</p>
                                    <Button variant="outline" className="w-full bg-white border-orange-200 text-orange-600 hover:bg-orange-50 font-button group">
                                        Download Assets <Download size={16} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                                    </Button>
                                </div>
                            </div>

                            <Card className="lg:col-span-3 p-8 md:p-10 border-slate-200">
                                <h3 className="font-h3 text-slate-900 mb-8 flex items-center gap-3 italic uppercase"><Mail className="text-orange-500" /> Apply For Pass</h3>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="font-label text-slate-400 italic">First Name</label>
                                            <input type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-body" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label text-slate-400 italic">Last Name</label>
                                            <input type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-body" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label text-slate-400 italic">Media Organisation</label>
                                        <input type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-body" placeholder="e.g. News Agency, TV Station" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label text-slate-400 italic">Email Address</label>
                                        <input type="email" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-body" placeholder="john@media.com" />
                                    </div>
                                    <Button className="w-full py-4 font-button shadow-lg shadow-orange-900/10" onClick={() => onOpenForm('media')}>Submit Registration <ArrowRight size={18} className="ml-2" /></Button>
                                    <p className="font-label text-slate-400 text-center italic mt-4">Verification may take up to 3 working days</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}

                {subView === 'news' && (
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                            <div>
                                <h2 className="font-h2 text-slate-900 mb-2 italic uppercase">Press Releases</h2>
                                <p className="font-body text-slate-500">Official announcements and news from the organiser.</p>
                            </div>
                            <Button variant="outline" className="font-button">Filter By Category</Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsData.map((news, i) => (
                                <Card key={i} className="group cursor-pointer border-slate-200 overflow-hidden flex flex-col hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                                    <div className="h-56 bg-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                        <div className="absolute top-4 left-4 bg-orange-600 text-white font-label px-3 py-1.5 rounded-full shadow-lg">New</div>
                                    </div>
                                     <div className="p-8 flex-grow flex flex-col">
                                        <div className="flex items-center gap-2 text-orange-600 font-label mb-4">
                                            <Clock size={12} /> {news.date}
                                        </div>
                                        <h3 className="font-h4 text-slate-900 mb-4 line-clamp-2 group-hover:text-orange-600 transition-colors uppercase italic">{news.title}</h3>
                                        <p className="font-body-sm text-slate-500 mb-6 line-clamp-3">MATRADE continues to champion the global halal economy through strategic exhibitions and B2B matching...</p>
                                        <div className="mt-auto flex items-center gap-2 font-label text-slate-400 group-hover:text-orange-600 transition-colors italic">
                                            Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {subView === 'blog' && (
                    <div className="space-y-12">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="font-h1 text-slate-900 mb-4 italic uppercase">MIHAS Insight</h2>
                            <p className="font-body text-slate-600">Thought leadership and deep dives into the global halal economy.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            {blogs.map((blog) => (
                                <Card key={blog.id} className="group cursor-pointer border-slate-200 overflow-hidden flex flex-col md:flex-row h-full hover:shadow-2xl transition-all duration-500">
                                    <div className="md:w-2/5 h-64 md:h-auto bg-slate-100 shrink-0 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                     <div className="p-8 flex flex-col flex-grow">
                                        <div className="text-slate-400 font-label mb-4 italic">{blog.date}</div>
                                        <h3 className="font-h4 text-slate-900 mb-4 group-hover:text-orange-600 transition-colors italic uppercase">{blog.title}</h3>
                                        <p className="font-body-sm text-slate-500 mb-8 line-clamp-3 italic">{blog.excerpt}</p>
                                         <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                                            <span className="font-label text-slate-400 italic">{blog.author}</span>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {subView === 'gallery' && (
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                            <div>
                                <h2 className="font-h2 text-slate-900 italic uppercase">Multimedia Archives</h2>
                                <p className="font-body-sm text-slate-500">Official collection from MIHAS 2024 HIGHLIGHTS</p>
                            </div>
                            <div className="flex bg-slate-100 p-1.5 rounded-2xl shadow-inner">
                                <button onClick={() => setGalleryType('photos')} className={`px-8 py-3 rounded-xl font-button transition-all flex items-center gap-2 ${galleryType === 'photos' ? 'bg-white text-orange-600 shadow-md ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}><Camera size={16} /> Photos</button>
                                <button onClick={() => setGalleryType('videos')} className={`px-8 py-3 rounded-xl font-button transition-all flex items-center gap-2 ${galleryType === 'videos' ? 'bg-white text-orange-600 shadow-md ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}><Video size={16} /> Videos</button>
                            </div>
                        </div>

                        {galleryType === 'photos' ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-700">
                                {galleryImages.map((img) => (
                                    <div key={img.id} className="aspect-[4/5] bg-slate-100 rounded-[32px] group relative overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                         <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                            <p className="text-white font-label mb-4 italic">{img.alt}</p>
                                            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><Download size={20} /></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
                                {galleryVideos.map((vid) => (
                                    <Card key={vid.id} className="group cursor-pointer overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 pb-4">
                                        <div className="h-60 bg-slate-900 relative flex items-center justify-center">
                                             <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-500 transition-all duration-500">
                                                <Video size={24} fill="currentColor" />
                                            </div>
                                            <div className="absolute bottom-4 right-4 bg-black/60 text-white font-label px-3 py-1.5 rounded-full backdrop-blur-md italic">{vid.duration}</div>
                                        </div>
                                         <div className="p-8 text-center">
                                            <h4 className="font-h4 text-slate-900 group-hover:text-orange-600 transition-colors uppercase italic">{vid.title}</h4>
                                            <div className="mt-6 flex items-center justify-center gap-2 font-label text-slate-300 italic">
                                                <Clock size={12} /> MIHAS 2024 RECAP
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MediaView;
