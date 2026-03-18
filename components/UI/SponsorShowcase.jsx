import React, { useState } from 'react';
import { sponsorsData } from '../../data/sponsors';

const SponsorShowcase = () => {
    const [activeTab, setActiveTab] = useState('premium');

    return (
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button onClick={() => setActiveTab('premium')} className={`px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider transition-all ${activeTab === 'premium' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>PREMIUM SPONSORS</button>
                <button onClick={() => setActiveTab('strategic')} className={`px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider transition-all ${activeTab === 'strategic' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>STRATEGIC PARTNERS</button>
                <button onClick={() => setActiveTab('media')} className={`px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider transition-all ${activeTab === 'media' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>MEDIA, LOGISTICS & OTHERS</button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {sponsorsData[activeTab].map((group, idx) => (
                    <div key={idx} className="mb-10">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-6">{group.tier}</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {group.names.map((name, i) => (
                                <div key={i} className="bg-white border border-slate-200 h-24 px-8 min-w-[180px] rounded-2xl flex items-center justify-center text-center font-bold text-slate-500 hover:text-orange-600 hover:border-orange-300 hover:shadow-md transition-all cursor-default">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorShowcase;
