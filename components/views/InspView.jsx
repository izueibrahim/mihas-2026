import React, { useState } from 'react';
import { 
    Briefcase, Users, Handshake, CheckCircle2, Globe, Monitor, MapPin, 
    Calendar, Clock, Mail, Leaf, Shirt, Coffee, Utensils, Hand, 
    Droplets, Pill, Wrench, Gift, Package, PawPrint, Watch, Footprints, 
    Truck, Banknote, Store, Laptop, Tv, GraduationCap
} from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';

const CATEGORIES = [
    { name: "Agricultural Produce", icon: Leaf },
    { name: "Apparel, Garments and Accessories", icon: Shirt },
    { name: "Beverages", icon: Coffee },
    { name: "Prepared Food", icon: Utensils },
    { name: "Gloves", icon: Hand },
    { name: "Palm Oil Products", icon: Droplets },
    { name: "Pharmaceuticals, Toiletries and Cosmetics", icon: Pill },
    { name: "Machinery and Equipment", icon: Wrench },
    { name: "Gifts, Souvenirs and Jewelleries", icon: Gift },
    { name: "Packaging and Containers", icon: Package },
    { name: "Pet Products", icon: PawPrint },
    { name: "Fashion Accessories and Textiles", icon: Watch },
    { name: "Footwear", icon: Footprints },
    { name: "Logistics", icon: Truck },
    { name: "Islamic Financial Services", icon: Banknote },
    { name: "Franchise", icon: Store },
    { name: "Information and Communication Technology", icon: Laptop },
    { name: "Islamic Entertainment", icon: Tv },
    { name: "Education", icon: GraduationCap }
];

const InspView = () => {
    const [activeTab, setActiveTab] = useState('physical');

    return (
        <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
            <PageHeader title="INSP MIHAS" breadcrumb="Sourcing" subtitle="International Sourcing Programme (INSP)" />
            
            <div className="max-w-7xl mx-auto px-6 mt-12 space-y-16">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-h1 text-slate-900 mb-6 uppercase italic">Your Gateway to Global Halal Trade</h2>
                        <p className="font-body-lg text-slate-600 mb-6">The International Sourcing Programme (INSP) MIHAS is a flagship business matching event that connects international buyers with Malaysian Halal suppliers.</p>
                        <p className="text-slate-600 mb-8 border-l-4 border-orange-500 pl-4 font-label">Organised by MATRADE</p>
                        <p className="font-body text-slate-600 mb-8">Through pre-arranged B2B meetings, we ensure a higher success rate for trade transactions. This year, INSP connects over 800 Malaysian companies with over 500 international buyers.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button 
                                as="a" 
                                href="https://tpms.matrade.gov.my/matrade-tpms/promotionRegistrationPublicSubmitSearch/16284?" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Register as Buyer
                            </Button>
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
                        <Card className="bg-white p-8 flex flex-col justify-center border-slate-200 shadow-sm">
                            <Briefcase className="text-slate-400 mb-4" size={32} />
                            <h4 className="font-h2 text-slate-900 mb-1">500+</h4>
                            <p className="font-label text-slate-500">International Buyers</p>
                        </Card>
                        <Card className="bg-slate-50 p-8 flex flex-col justify-center border-slate-200 shadow-sm">
                            <Handshake className="text-orange-500 mb-4" size={32} />
                            <h4 className="font-h2 text-slate-900 mb-1">RM2.5B</h4>
                            <p className="font-label text-slate-500">Potential Sales</p>
                        </Card>
                    </div>
                </div>

                {/* Participation Sessions */}
                <div className="space-y-8 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-100 pb-8">
                        <div className="text-center md:text-left">
                            <h2 className="font-h2 text-slate-900 italic uppercase">Participation Sessions</h2>
                            <p className="text-slate-500 mt-1 font-body-sm">Select your preferred session type to view details and deadlines</p>
                        </div>
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl shadow-inner border border-slate-200/50">
                            <button onClick={() => setActiveTab('physical')} className={`px-8 py-3 rounded-xl font-button transition-all flex items-center gap-2 ${activeTab === 'physical' ? 'bg-white text-orange-600 shadow-lg ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}>
                                <MapPin size={18} /> Physical
                            </button>
                            <button onClick={() => setActiveTab('virtual')} className={`px-8 py-3 rounded-xl font-button transition-all flex items-center gap-2 ${activeTab === 'virtual' ? 'bg-white text-orange-600 shadow-lg ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}>
                                <Monitor size={18} /> Virtual
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {activeTab === 'physical' ? (
                            <>
                                <Card className="p-8 border-slate-200 hover:border-orange-200 transition-colors">
                                    <h3 className="font-label text-orange-600 mb-4 flex items-center gap-2 uppercase tracking-wider"><MapPin size={16} /> Venue</h3>
                                    <p className="font-h4 text-slate-900">MITEC, Kuala Lumpur</p>
                                    <p className="text-slate-500 mt-1 font-body-sm italic">Level 2, Hall 5</p>
                                </Card>
                                <Card className="p-8 border-slate-200 hover:border-orange-200 transition-colors">
                                    <h3 className="font-label text-orange-600 mb-4 flex items-center gap-2 uppercase tracking-wider"><Calendar size={16} /> Date & Deadline</h3>
                                    <p className="font-h4 text-slate-900">17 September 2025</p>
                                    <p className="text-orange-600 font-label text-xs mt-2 bg-orange-50 px-3 py-1 rounded-full inline-block">Deadline: 30 June 2025</p>
                                </Card>
                                <Card className="p-8 border-slate-200 hover:border-orange-200 transition-colors">
                                    <h3 className="font-label text-orange-600 mb-4 flex items-center gap-2 uppercase tracking-wider"><Clock size={16} /> Time</h3>
                                    <p className="font-h4 text-slate-900">9:00 AM - 5:00 PM</p>
                                    <p className="text-slate-500 mt-1 font-body-sm italic">B2B Business Matching</p>
                                </Card>
                            </>
                        ) : (
                            <>
                                <Card className="p-8 border-slate-200 hover:border-blue-200 transition-colors">
                                    <h3 className="font-label text-blue-600 mb-4 flex items-center gap-2 uppercase tracking-wider"><Monitor size={16} /> Platform</h3>
                                    <p className="font-h4 text-slate-900">MIHAS Virtual Platform</p>
                                    <p className="text-slate-500 mt-1 font-body-sm italic">Pre-scheduled video calls</p>
                                </Card>
                                <Card className="p-8 border-slate-200 hover:border-blue-200 transition-colors">
                                    <h3 className="font-label text-blue-600 mb-4 flex items-center gap-2 uppercase tracking-wider"><Calendar size={16} /> Period & Deadline</h3>
                                    <p className="font-h4 text-slate-900">1 April – 5 Nov 2025</p>
                                    <p className="text-blue-600 font-label text-xs mt-2 bg-blue-50 px-3 py-1 rounded-full inline-block">Deadline: 5 Nov 2025</p>
                                </Card>
                                <Card className="p-8 border-slate-200 hover:border-blue-200 transition-colors">
                                    <h3 className="font-label text-blue-600 mb-4 flex items-center gap-2 uppercase tracking-wider"><Users size={16} /> Interaction</h3>
                                    <p className="font-h4 text-slate-900">24/7 Connectivity</p>
                                    <p className="text-slate-500 mt-1 font-body-sm italic">Global timezone support</p>
                                </Card>
                            </>
                        )}
                    </div>
                </div>

                {/* Participation Fee & Package */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-h2 text-white mb-6 italic uppercase underline decoration-orange-500 underline-offset-8">Participation Fee</h2>
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-6xl font-h1 text-orange-500">RM 120.00</span>
                                <span className="font-body text-slate-400">per company</span>
                            </div>
                            <p className="font-body text-slate-300 mb-8 max-w-lg">
                                This renowned international program includes a comprehensive support package designed to maximize your business matching success and global visibility.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-600/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-label text-slate-400 text-xs uppercase tracking-widest">Questions?</p>
                                        <a href="mailto:inspmihas@matrade.gov.my" className="font-body font-bold hover:text-orange-500 transition-colors">inspmihas@matrade.gov.my</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                            <h3 className="font-h4 text-orange-400 uppercase italic">Package Inclusions:</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mt-1"><CheckCircle2 size={16} /></div>
                                    <p className="font-body text-slate-200">One-to-one Business Matching Session via MADANI Digital Trade (MDT) Platform</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mt-1"><CheckCircle2 size={16} /></div>
                                    <p className="font-body text-slate-200">Digital Directory Listing on the platform for enhanced global visibility</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mt-1"><CheckCircle2 size={16} /></div>
                                    <p className="font-body text-slate-200">Access to premium networking opportunities with verified buyers</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Product Categories Section - FINAL DESIGN */}
                <div className="space-y-12">
                    <div>
                        <h2 className="font-h2 text-slate-900 italic uppercase">Product Categories</h2>
                        <p className="text-slate-500 mt-1 font-body-sm">Promoting innovative products and services across various industries</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {CATEGORIES.map((cat, i) => {
                            const Icon = cat.icon;
                            return (
                                <Card key={i} className="p-6 flex flex-col items-center text-center border-orange-500 bg-white">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                                        <Icon size={24} />
                                    </div>
                                    <p className="font-body-sm font-bold text-orange-700">{cat.name}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Benefits & Procedure */}
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
                                <div className="pt-4">
                                    <Button 
                                        as="a" 
                                        href="https://tpms.matrade.gov.my/matrade-tpms/promotionRegistrationPublicSubmitSearch/16284?" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        Start Registration
                                    </Button>
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
