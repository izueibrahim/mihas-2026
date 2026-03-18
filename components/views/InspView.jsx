import React, { useState } from 'react';
import { Briefcase, Users, Handshake, CheckCircle2, Globe, Monitor, MapPin, Calendar, Clock } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';

const InspView = ({ onOpenForm }) => {
    const [activeTab, setActiveTab] = useState('physical');

    return (
        <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
            <PageHeader title="INSP MIHAS" breadcrumb="Sourcing" subtitle="International Sourcing Programme (INSP)" />
            <div className="max-w-7xl mx-auto px-6 mt-12 space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-h1 text-slate-900 mb-6 uppercase italic">Your Gateway to Global Halal Trade</h2>
                        <p className="font-body-lg text-slate-600 mb-6">The International Sourcing Programme (INSP) MIHAS is a flagship business matching event that connects international buyers with Malaysian Halal suppliers.</p>
                        <p className="text-slate-600 mb-8 border-l-4 border-orange-500 pl-4 font-label">Organised by MATRADE</p>
                        <p className="font-body text-slate-600 mb-8">Through pre-arranged B2B meetings, we ensure a higher success rate for trade transactions. In 2025, INSP generated RM2.50 billion in potential trade with over 4,000 meetings.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button onClick={() => onOpenForm('media')}>Register as Buyer</Button>
                            <Button variant="outline">Download Brochure</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="bg-slate-900 text-white p-8 flex flex-col justify-center border-slate-800">
                            <Users className="text-orange-500 mb-4" size={32} />
                            <h4 className="font-h2 mb-1">4,000+</h4>
                            <p className="font-label text-slate-400">Business Meetings</p>
                        </Card>
                        <Card className="bg-orange-600 text-white p-8 flex flex-col justify-center border-orange-500">
                            <Globe className="text-white mb-4" size={32} />
                            <h4 className="font-h2 mb-1">80+</h4>
                            <p className="font-label text-orange-200">Buying Countries</p>
                        </Card>
                        <Card className="bg-white p-8 flex flex-col justify-center border-slate-200">
                            <Briefcase className="text-slate-400 mb-4" size={32} />
                            <h4 className="font-h2 text-slate-900 mb-1">500+</h4>
                            <p className="font-label text-slate-500">International Buyers</p>
                        </Card>
                        <Card className="bg-slate-50 p-8 flex flex-col justify-center border-slate-200">
                            <Handshake className="text-orange-500 mb-4" size={32} />
                            <h4 className="font-h2 text-slate-900 mb-1">RM2.5B</h4>
                            <p className="font-label text-slate-500">Potential Sales</p>
                        </Card>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-6">
                        <h2 className="font-h2 text-slate-900 italic uppercase">Participation Sessions</h2>
                        <div className="flex bg-slate-100 p-1.5 rounded-xl shadow-inner border border-slate-200">
                            <button onClick={() => setActiveTab('physical')} className={`px-8 py-2.5 rounded-lg font-button transition-all ${activeTab === 'physical' ? 'bg-white text-orange-600 shadow-md ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}>Physical Session</button>
                            <button onClick={() => setActiveTab('virtual')} className={`px-8 py-2.5 rounded-lg font-button transition-all ${activeTab === 'virtual' ? 'bg-white text-orange-600 shadow-md ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}>Virtual Session</button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 grayscale-0">
                        {activeTab === 'physical' ? (
                            <>
                                <Card className="p-8 border-t-4 border-t-orange-500">
                                    <h3 className="font-h4 text-slate-900 mb-4 flex items-center gap-2 italic uppercase"><MapPin size={20} className="text-orange-500" /> Venue</h3>
                                    <p className="font-body text-slate-600">MITEC, Kuala Lumpur</p>
                                    <p className="font-body-sm text-slate-400 mt-2">Level 2, Hall 5</p>
                                </Card>
                                <Card className="p-8 border-t-4 border-t-orange-500">
                                    <h3 className="font-h4 text-slate-900 mb-4 flex items-center gap-2 italic uppercase"><Calendar size={20} className="text-orange-500" /> Date</h3>
                                    <p className="font-body text-slate-600">17 September 2025</p>
                                    <p className="font-body-sm text-slate-400 mt-2">Registration starts 8:00 AM</p>
                                </Card>
                                <Card className="p-8 border-t-4 border-t-orange-500">
                                    <h3 className="font-h4 text-slate-900 mb-4 flex items-center gap-2 italic uppercase"><Clock size={20} className="text-orange-500" /> Time</h3>
                                    <p className="font-body text-slate-600">9:00 AM - 5:00 PM</p>
                                    <p className="font-body-sm text-slate-400 mt-2">B2B Business Matching</p>
                                </Card>
                            </>
                        ) : (
                            <>
                                <Card className="p-8 border-t-4 border-t-blue-500">
                                    <h3 className="font-h4 text-slate-900 mb-4 flex items-center gap-2 italic uppercase"><Monitor size={20} className="text-blue-500" /> Platform</h3>
                                    <p className="font-body text-slate-600">MIHAS Virtual Platform</p>
                                    <p className="font-body-sm text-slate-400 mt-2">Pre-scheduled video calls</p>
                                </Card>
                                <Card className="p-8 border-t-4 border-t-blue-500">
                                    <h3 className="font-h4 text-slate-900 mb-4 flex items-center gap-2 italic uppercase"><Calendar size={20} className="text-blue-500" /> Period</h3>
                                    <p className="font-body text-slate-600">15 Feb - 31 Aug 2025</p>
                                    <p className="font-body-sm text-slate-400 mt-2">Extension based on demand</p>
                                </Card>
                                <Card className="p-8 border-t-4 border-t-blue-500">
                                    <h3 className="font-h4 text-slate-900 mb-4 flex items-center gap-2 italic uppercase"><Users size={20} className="text-blue-500" /> Interaction</h3>
                                    <p className="font-body text-slate-600">24/7 Connectivity</p>
                                    <p className="font-body-sm text-slate-400 mt-2">Global timezone support</p>
                                </Card>
                            </>
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-12">
                    <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <h3 className="font-h3 text-white mb-8 flex items-center gap-3 italic uppercase"><Monitor className="text-orange-500" /> Participation Benefits</h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Global Network", desc: "Gain access to a vast network of international buyers." },
                                { title: "Pre-arranged Meetings", desc: "Save time with targeted and pre-matched B2B sessions." },
                                { title: "Market Insights", desc: "Obtain firsthand information on global halal market trends." },
                                { title: "Cost-Effective", desc: "Maximum exposure with minimal marketing spend." }
                            ].map((benefit, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                                    <div><p className="font-body font-bold text-white">{benefit.title}</p><p className="text-slate-400 font-body-sm">{benefit.desc}</p></div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-h3 text-slate-900 px-2 italic uppercase">Ready to expand your market?</h3>
                        <p className="font-body text-slate-600 px-2">Join INSP MIHAS 2025 and connect with top-tier buyers from all corners of the world. Limited slots available for premium matching.</p>
                        <div className="bg-white border rounded-3xl p-8 shadow-sm">
                            <h4 className="font-h4 text-slate-900 mb-4 italic uppercase">Registration Procedure</h4>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-label text-slate-400">01</div>
                                    <div className="font-body-sm text-slate-700">Submit your registration via the MATRADE profile system</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-label text-slate-400">02</div>
                                    <div className="font-body-sm text-slate-700">Selection of buyers based on product compatibility</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-label text-slate-400">03</div>
                                    <div className="font-body-sm text-slate-700">Confirmation of meeting schedule via email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspView;
