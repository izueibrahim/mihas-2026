'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';
import SubNav from '../UI/SubNav';
import { contactTabs } from '../../data/navigation';
import { matradeNetwork } from '../../data/partners';

const ContactView = ({ subView, setSubView, onOpenForm }) => (
    <div className="bg-slate-50 min-h-screen pb-20">
        <PageHeader title="Get In Touch" breadcrumb="Contact" subtitle="We're here to help you with your participation." />
        <SubNav items={contactTabs} activeItem={subView} onSelect={setSubView} />
        <div className="max-w-7xl mx-auto px-6 mt-12">
            <AnimatePresence mode="wait">
                <motion.div key={subView} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
            {subView === 'contact-us' && (
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 space-y-8">
                        <Card className="p-8 md:p-12 border-slate-200 shadow-xl shadow-slate-200/50">
                            <div className="text-center max-w-2xl mx-auto mb-16">
                                <h2 className="font-h2 text-slate-900 mb-4 italic uppercase">Get in Touch</h2>
                                <p className="font-body text-slate-500">Have questions about MIHAS 2025? Our team is here to help you with any enquiries.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="font-label text-slate-400">Full Name</label>
                                        <input type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-medium text-slate-800" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label text-slate-400">Work Email</label>
                                        <input type="email" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-medium text-slate-800" placeholder="email@company.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-slate-400">Subject</label>
                                    <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-medium text-slate-800 appearance-none">
                                        <option>General Enquiry</option>
                                        <option>Exhibition Space Booking</option>
                                        <option>Visitor Registration Support</option>
                                        <option>Media & Press Inquiry</option>
                                        <option>Sponsorship Opportunities</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-slate-400">Your Message</label>
                                    <textarea rows="4" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition-all font-medium text-slate-800 resize-none" placeholder="Tell us how we can help..."></textarea>
                                </div>
                                <Button className="w-full py-4 font-button shadow-lg shadow-orange-900/10" onClick={() => onOpenForm('visitor')}>Send Inquiry <Send size={18} className="ml-2" /></Button>
                            </div>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Card className="p-8 border-slate-200 shadow-sm">
                            <h4 className="font-label text-orange-600 mb-8">Direct Contacts</h4>
                            <div className="space-y-10">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100"><Mail size={22} /></div>
                                    <div>
                                        <div className="font-label text-slate-400 mb-1">General Support</div>
                                        <div className="font-body text-slate-800">enquiry@mihas.com.my</div>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100"><Phone size={22} /></div>
                                    <div>
                                        <div className="font-label text-slate-400 mb-1">Hotline</div>
                                        <div className="font-body text-slate-800">+603 6211 9973</div>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100"><MapPin size={22} /></div>
                                    <div>
                                        <div className="font-label text-slate-400 mb-1">Our Location</div>
                                        <div className="font-body-sm text-slate-600 leading-relaxed mt-2">
                                            Qube Integrated Malaysia Sdn Bhd,<br />
                                            Level 1, MITEC, 8, Jalan Dutamas 2,<br />
                                            50480 Kuala Lumpur, Malaysia.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 bg-slate-50 border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-between">Partner Enquiries <ArrowRight size={18} className="text-orange-500" /></h4>
                            <p className="text-slate-500 text-sm leading-relaxed">For strategic partnerships, global pavilions, or government enquiries, please contact our International Relations team directly.</p>
                        </Card>
                    </div>
                </div>
            )}

            {subView === 'matrade-network' && (
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-h2 text-slate-900 mb-4 italic uppercase">Global MATRADE Network</h2>
                        <p className="font-body text-slate-500">Connecting Malaysian businesses with the world through our extensive network of international trade offices.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {matradeNetwork.map((region, i) => (
                            <Card key={i} className="p-8 hover:border-orange-500/30 transition-all group">
                                <h3 className="font-h4 text-slate-900 mb-6 italic uppercase flex items-center justify-between">
                                    {region.region}
                                    <div className="w-12 h-[1px] bg-slate-200 group-hover:bg-orange-500/30 transition-all"></div>
                                </h3>
                                <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                                    {region.offices.map((office, j) => (
                                        <li key={j} className="font-body-sm text-slate-600 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-orange-500/40"></div>
                                            {office}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>

                    <Card className="p-10 bg-slate-900 text-white rounded-[40px] shadow-2xl relative overflow-hidden text-center mt-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <h3 className="font-h3 mb-4">Interested in Malaysian Products?</h3>
                        <p className="text-slate-400 font-body mb-8 max-w-xl mx-auto">Contact our nearest trade office to discover verified Malaysian suppliers and international trade opportunities.</p>
                        <div className="flex justify-center">
                            <Button className="font-button px-10">Find Nearest Office</Button>
                        </div>
                    </Card>
                </div>
            )}
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
);

export default ContactView;
