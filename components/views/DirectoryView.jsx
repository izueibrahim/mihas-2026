import React from 'react';
import { Search, Globe, ChevronRight } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { sectors } from '../../data/sectors';

const DirectoryView = ({ onOpenForm }) => (
    <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
        <PageHeader title="e-Directory" breadcrumb="Exhibitors" subtitle="Browse the 2025 Exhibitor List" />
        <div className="max-w-7xl mx-auto px-6 mt-12 space-y-12">
            <Card className="p-10 md:p-16 border-dashed border-2 bg-white flex flex-col items-center text-center shadow-md rounded-[40px]">
                <Search className="w-16 h-16 text-slate-200 mb-6" />
                <h3 className="font-h2 text-slate-900 mb-4 italic uppercase">Search Exhibitors</h3>
                <p className="font-body text-slate-500 mb-10 max-w-lg mx-auto">The interactive e-Directory featuring over 2,400 exhibitors from 80+ countries will be available closer to the event date. Stay tuned!</p>
                <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4 p-2 bg-slate-100 rounded-3xl">
                    <input type="text" placeholder="Search by company name, product or country..." className="flex-1 px-8 py-4 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 shadow-inner bg-white text-slate-800 font-body" />
                    <Button className="px-12 py-4 font-button">Search</Button>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, i) => (
                    <Card key={i} className="p-6 hover:border-orange-500/30 transition-all group cursor-pointer border-slate-200 rounded-2xl bg-white shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all font-label shadow-inner">{i + 1}</div>
                            <h4 className="font-body-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors uppercase italic">{sector}</h4>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-orange-500 transition-all group-hover:translate-x-1" />
                    </Card>
                ))}
            </div>

            <Card className="p-10 bg-slate-900 text-white border-none rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="relative z-10">
                    <h3 className="font-h3 text-white mb-3 italic uppercase underline underline-offset-8 decoration-orange-500/30">Are you an Exhibitor?</h3>
                    <p className="font-body text-slate-400 italic">Make sure your profile is complete to attract more visitors.</p>
                </div>
                <div className="flex flex-wrap gap-4 relative z-10">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 font-button">Book My Space</Button>
                    <Button variant="secondary" className="px-8 py-4 font-button shadow-lg shadow-orange-900/20">Login to Portal</Button>
                </div>
            </Card>
        </div>
    </div>
);

export default DirectoryView;
