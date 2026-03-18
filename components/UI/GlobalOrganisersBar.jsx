import React from 'react';
import { Landmark, Globe, Building2, Award, Users, CheckCircle2, MapPin, ShoppingCart, Briefcase } from 'lucide-react';

const GlobalOrganisersBar = () => (
    <div className="bg-white py-12 border-t border-slate-200 shrink-0 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
            {/* Top Row: Hosted, Organised, Assoc, Managed, Winner */}
            <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-8 mb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Hosted by</div>
                    <div className="font-bold text-slate-800 flex items-center gap-2"><Landmark size={28} className="text-slate-400" /> MITI</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Organised by</div>
                    <div className="font-black text-slate-800 text-xl tracking-tight flex items-center gap-2">
                        <Globe size={24} className="text-orange-600" /> MATRADE
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">In Association with</div>
                    <div className="font-bold text-slate-700 flex items-center gap-4 text-lg">
                        <span className="flex items-center gap-1"><Building2 size={20} className="text-blue-600" /> HDC</span>
                        <span className="text-slate-300">|</span>
                        <span className="flex items-center gap-1"><Building2 size={20} className="text-green-600" /> JAKIM</span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Managed by</div>
                    <div className="font-bold text-slate-600 text-lg tracking-wider">qube<span className="text-orange-500">.</span></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Winner of</div>
                    <div className="font-bold text-yellow-600 flex items-center gap-1 text-lg"><Award size={24} /> WTPO Awards</div>
                </div>
            </div>

            {/* Bottom Row: Supported by, In Support of */}
            <div className="flex flex-wrap justify-center items-end gap-x-16 gap-y-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Supported by</div>
                    <div className="flex flex-wrap justify-center items-center gap-6 font-semibold text-slate-500 text-sm">
                        <span className="flex items-center gap-1"><Users size={16} /> ASEAN Malaysia 2025</span>
                        <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Malaysia Madani</span>
                        <span className="flex items-center gap-1"><MapPin size={16} /> Meet in Malaysia</span>
                        <span className="flex items-center gap-1"><ShoppingCart size={16} /> FAMA</span>
                        <span className="flex items-center gap-1"><Briefcase size={16} /> MYFutureJobs</span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">In Support of</div>
                    <div className="font-semibold text-slate-500 text-sm flex items-center gap-1">
                        <Globe size={16} /> Islamic Tourism Centre
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default GlobalOrganisersBar;
