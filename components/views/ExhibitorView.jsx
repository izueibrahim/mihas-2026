'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Globe, Award, Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';
import SubNav from '../UI/SubNav';
import AnimatedCounter from '../UI/AnimatedCounter';
import { exhibitorTabs, whyExhibitData, exhibitorCategories } from '../../data/exhibitor';

const ExhibitorView = ({ subView, setSubView, onOpenForm }) => {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <PageHeader title="Exhibitors" breadcrumb="Participation" subtitle="Join the World's Largest Halal Trade Show" />
            <SubNav items={exhibitorTabs} activeItem={subView} onSelect={setSubView} />

            <div className="max-w-7xl mx-auto px-6 mt-12">
                <AnimatePresence mode="wait">
                    <motion.div key={subView} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                {subView === 'why-exhibit' && (
                    <div className="space-y-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="font-h1 text-slate-900 italic uppercase">Your gateway to the global Halal market.</h2>
                                <p className="font-body-lg text-slate-600">Position your brand alongside the industry's finest. Reach thousands of trade visitors, forge high-value partnerships, and expand your market footprint at the most inclusive Halal showcase.</p>
                                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                    <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0"><Globe size={20} /></div>
                                        <span className="font-label text-slate-800"><AnimatedCounter value="80+" duration={2} /> Countries</span>
                                    </div>
                                    <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0"><Award size={20} /></div>
                                        <span className="font-label text-slate-800"><AnimatedCounter value="4,000+" duration={2.5} /> Meetings</span>
                                    </div>
                                    <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0"><BarChart3 size={20} /></div>
                                        <span className="font-label text-slate-800"><AnimatedCounter value="RM4.3B" duration={2} /> Sales</span>
                                    </div>
                                    <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0"><Megaphone size={20} /></div>
                                        <span className="font-label text-slate-800">Global Coverage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <Card className="p-8 bg-orange-600 text-white shadow-xl shadow-orange-900/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 opacity-20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="font-h3 mb-4 italic uppercase text-white">Book Your Space Today</h3>
                                    <p className="font-body mb-8 opacity-90">Secure your spot at MIHAS 2025. Standard and Premium booth allocations are filling up fast.</p>
                                    <Button variant="secondary" className="w-full shadow-lg" onClick={() => onOpenForm('exhibitor')}>Book My Space <ArrowRight size={18} className="ml-2" /></Button>
                                </Card>
                                <Card className="p-8 bg-slate-900 text-white shadow-xl shadow-slate-900/40 relative overflow-hidden">
                                    <h3 className="font-h3 mb-4 italic uppercase text-white">MIHAS Hybrid</h3>
                                    <p className="font-body mb-8 opacity-80">Take your presence beyond the physical floor with MIHAS Virtual and reach global buyers 24/7.</p>
                                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none">Learn About Hybrid</Button>
                                </Card>
                            </div>
                        </div>

                        <div className="space-y-10 py-12">
                            <h2 className="font-h2 text-center text-slate-900 italic uppercase">Why You Should Exhibit</h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {whyExhibitData.map((reason, i) => (
                                    <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white border p-8 rounded-3xl hover:border-orange-500/30 transition-all shadow-sm">
                                        <div className="text-orange-600 font-label flex items-center gap-2 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">0{i + 1}</div>
                                        </div>
                                        <h4 className="font-h4 text-slate-900 mb-3 italic uppercase">{reason.title}</h4>
                                        <p className="font-body-sm text-slate-500">{reason.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                )}

                {subView === 'who-should-exhibit' && (
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-h2 text-slate-900 mb-4 italic uppercase">Exhibitor Profiles</h2>
                            <p className="font-body text-slate-600">MIHAS welcomes participants across various sectors of the global halal economy. Is your business in the list?</p>
                        </div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {exhibitorCategories.map((cat, i) => (
                                <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="h-full">
                                    <Card className="p-8 hover:shadow-xl transition-all border-slate-100 group h-full">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h4 className="font-h4 text-slate-900 mb-4 h-12 flex items-center italic uppercase">{cat.title}</h4>
                                        <ul className="space-y-2">
                                            {cat.items.slice(0, 4).map((item, j) => (
                                                <li key={j} className="font-body-sm text-slate-500 flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div> {item}
                                                </li>
                                            ))}
                                            {cat.items.length > 4 && <li className="font-label text-orange-500 mt-2 italic">+ {cat.items.length - 4} more</li>}
                                        </ul>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className="bg-slate-900 text-white rounded-[40px] p-12 text-center mt-20 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-h2 mb-4 italic uppercase text-white">Don't see your category?</h3>
                                <p className="font-body text-slate-400 mb-8 max-w-xl mx-auto">MIHAS is always expanding to new clusters. Contact us to see how you can fit into the showcase.</p>
                                <Button variant="secondary" onClick={() => onOpenForm('exhibitor')}>Enquire Directly</Button>
                            </div>
                        </div>
                    </div>
                )}

                {subView === 'incentives' && (
                    <div className="space-y-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="font-h1 text-slate-900 italic uppercase">Exhibitor<br/>Incentives</h2>
                                <p className="font-body-lg text-slate-600 italic">Unlock unparalleled access to OIC markets and beyond. MIHAS offers a comprehensive suite of benefits designed to maximize your exhibition ROI and global reach.</p>
                                <Button className="bg-orange-600 text-white hover:bg-orange-500" onClick={() => onOpenForm('exhibitor')}>
                                    Apply Now <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </div>
                            <Card className="p-10 bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                                <div className="relative z-10 space-y-6">
                                    <h3 className="font-h3 italic uppercase text-white">Key Benefits</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Direct access to 80+ country delegations',
                                            'Pre-matched B2B meetings with verified global buyers',
                                            'Complimentary listing in the MIHAS e-Directory',
                                            'Marketing & branding support across MIHAS channels',
                                            'Invitation to exclusive networking events',
                                            'Access to MIHAS Virtual platform for year-round visibility',
                                            'Eligibility for MIHAS Awards recognition'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                                                <span className="text-slate-300 font-medium text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'OIC Market Access', desc: 'Tap into 57 OIC member nations representing over 1.8 billion consumers and a rapidly growing halal economy worth $2.3 trillion.', icon: Globe },
                                { title: 'Brand Amplification', desc: 'Leverage MIHAS\'s global media reach across 200+ international publications and digital channels for maximum brand exposure.', icon: Megaphone },
                                { title: 'Industry Recognition', desc: 'Showcase your innovations at the MIHAS Awards ceremony, earning credibility and trust from global halal industry stakeholders.', icon: Award }
                            ].map((item, i) => (
                                <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                                    <Card className="p-8 hover:shadow-xl transition-all border-slate-100 group h-full">
                                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <item.icon size={24} />
                                        </div>
                                        <h4 className="font-h4 text-slate-900 mb-3 italic uppercase">{item.title}</h4>
                                        <p className="font-body-sm text-slate-500">{item.desc}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="bg-orange-600 text-white rounded-[40px] p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-50"></div>
                            <div className="relative z-10">
                                <h3 className="font-h2 mb-4 italic uppercase text-white">Ready to Exhibit?</h3>
                                <p className="font-body text-orange-100 mb-8 max-w-xl mx-auto">Secure your spot and unlock the full suite of exhibitor incentives. Early bookings receive priority placement.</p>
                                <Button className="bg-white text-slate-900 hover:bg-slate-900 hover:text-white" onClick={() => onOpenForm('exhibitor')}>
                                    Book My Space <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ExhibitorView;
