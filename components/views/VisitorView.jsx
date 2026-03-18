'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Building2, CheckSquare, Search, Users, TrendingUp, Handshake, Info, ArrowRight } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import SubNav from '../UI/SubNav';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { visitorTabs } from '../../data/navigation';
import { whyVisitData, visitorCategories } from '../../data/visitor';

const VisitorView = ({ subView, setSubView, onOpenForm }) => {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <PageHeader title="Visitors" breadcrumb="Participation" subtitle="Explore the Global Halal Marketplace" />
            <SubNav items={visitorTabs} activeItem={subView} onSelect={setSubView} />
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <AnimatePresence mode="wait">
                    <motion.div key={subView} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                {subView === 'why-visit' && (
                    <div className="space-y-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="font-h1 text-slate-900 uppercase italic">Connecting you to the world of Halal.</h2>
                                <p className="font-body-lg text-slate-600">MIHAS is the premier platform to source global Halal products, find new partners, and stay ahead of industry trends.</p>
                                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                    {[
                                        { icon: Search, title: "Source Products", desc: "Discover 10,000+ products" },
                                        { icon: Users, title: "Network", desc: "Connect with 40,000+ peers" },
                                        { icon: TrendingUp, title: "Trends", desc: "Latest market intelligence" },
                                        { icon: Handshake, title: "B2B Matching", desc: "Guaranteed business leads" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0"><item.icon size={20} /></div>
                                            <div><p className="font-body-sm font-bold text-slate-800">{item.title}</p><p className="font-label text-slate-400">{item.desc}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Card className="bg-slate-900 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                                <h3 className="font-h3 mb-6 italic text-white uppercase">Admission is Free for Trade Visitors</h3>
                                <p className="font-body text-slate-400 mb-10">Avoid long queues and gain priority entry by pre-registering online. Get your digital badge instantly.</p>
                                <Button className="w-full py-4 font-button shadow-lg shadow-orange-900/40" onClick={() => onOpenForm('visitor')}>Pre-Register Online Now <ArrowRight size={18} className="ml-2" /></Button>
                            </Card>
                        </div>

                        <div className="space-y-10">
                            <h2 className="font-h2 text-center text-slate-900 italic uppercase">Experience the Full Spectrum</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {whyVisitData.map((reason, i) => (
                                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors"><CheckSquare size={24} /></div>
                                        <h3 className="font-h4 text-slate-900 mb-4 italic uppercase">{reason.title}</h3>
                                        <p className="font-body-sm text-slate-500">{reason.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {subView === 'who-should' && (
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-h2 text-slate-900 mb-4 italic uppercase">Target Visitor Groups</h2>
                            <p className="font-body text-slate-600">MIHAS is a trade event. We welcome professionals from the following sectors:</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {visitorCategories.map((cat, i) => (
                                <Card key={i} className="p-10 hover:border-orange-500/30 transition-all border-slate-200">
                                    <h3 className="font-label text-slate-900 mb-8 flex items-center justify-between border-b border-slate-100 pb-4 italic">
                                        {cat.title} <Building2 size={20} className="text-orange-500" />
                                    </h3>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, idx) => (
                                            <li key={idx} className="flex gap-3 font-body-sm text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div> {item}</li>
                                        ))}
                                    </ul>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {subView === 'admission' && (
                    <div className="grid lg:grid-cols-5 gap-8">
                        <Card className="lg:col-span-2 p-10 bg-slate-900 text-white border-none rounded-[40px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
                            <Clock className="w-12 h-12 text-orange-500 mb-8" />
                            <h3 className="font-h2 mb-10 italic text-white uppercase">Exhibition Hours</h3>
                            <div className="space-y-10">
                                <div className="relative pl-6 border-l-2 border-orange-500">
                                    <div className="font-label text-orange-400 mb-2 italic">Trade Days</div>
                                    <div className="font-h4 text-white uppercase italic">17 - 19 Sept 2025</div>
                                    <div className="font-body font-bold text-slate-400 mt-1">10:00 AM - 6:00 PM</div>
                                </div>
                                <div className="relative pl-6 border-l-2 border-slate-700">
                                    <div className="font-label text-slate-400 mb-2 italic">Public Day</div>
                                    <div className="font-h4 text-white uppercase italic">20 Sept 2025</div>
                                    <div className="font-body font-bold text-slate-500 mt-1">10:00 AM - 6:00 PM</div>
                                </div>
                            </div>
                        </Card>
                        <div className="lg:col-span-3 space-y-6">
                            <Card className="p-10 rounded-[40px] border-slate-200 shadow-sm">
                                <MapPin className="w-12 h-12 text-orange-500 mb-6" />
                                <h3 className="font-h2 text-slate-900 mb-4 italic uppercase">Venue Location</h3>
                                <p className="font-h4 text-slate-900 mb-2 uppercase italic">MITEC, Kuala Lumpur</p>
                                <p className="font-body-sm text-slate-500 mb-10 uppercase italic">8 Jalan Dutamas 2, Kompleks Kerajaan, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="outline" className="px-8 py-4 font-button">View Map</Button>
                                    <Button variant="outline" className="px-8 py-4 font-button">Parking Info</Button>
                                </div>
                            </Card>
                            <Card className="p-8 bg-orange-50 border-orange-100 rounded-[32px] flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0"><Info size={28} /></div>
                                <div>
                                    <h4 className="font-h4 text-slate-900 mb-1 italic uppercase">Important Note</h4>
                                    <p className="font-body-sm text-slate-600">Strictly business attire only. Children under 18 are not permitted on trade days.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default VisitorView;
