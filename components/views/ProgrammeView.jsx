'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import { scheduleData } from '../../data/programmes';

const ProgrammeView = () => {
    const [activeDay, setActiveDay] = useState(Object.keys(scheduleData)[0]);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <PageHeader title="Show Programme" breadcrumb="Schedule" subtitle="Conferences, talks, and exhibitions happening across 17-20 Sept 2025." />
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {Object.keys(scheduleData).map((day) => (
                        <button key={day} onClick={() => setActiveDay(day)} className={`px-8 py-3 rounded-full font-button transition-all shadow-sm ${activeDay === day ? 'bg-orange-600 text-white shadow-orange-900/20' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>{day}</button>
                    ))}
                </div>

                <Card className="overflow-hidden border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="px-8 py-5 font-label">Time</th>
                                    <th className="px-8 py-5 font-label">Programme / Events</th>
                                    <th className="px-8 py-5 font-label">Location / Venue</th>
                                </tr>
                            </thead>
                            <AnimatePresence mode="wait">
                                <motion.tbody key={activeDay} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="divide-y divide-slate-100 bg-white">
                                    {scheduleData[activeDay].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                                            <td className="px-8 py-6 align-top">
                                                <div className="flex items-center gap-2 text-slate-500 font-body-sm font-bold">
                                                    <Clock size={14} className="text-orange-500" /> {row.time}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 align-top max-w-md">
                                                <div className="font-h5 text-slate-800 text-lg group-hover:text-orange-600 transition-colors uppercase font-bold">{row.event}</div>
                                            </td>
                                            <td className="px-8 py-6 align-top">
                                                <div className="flex items-start gap-2 text-slate-600 font-body-sm font-bold group-hover:text-slate-900 transition-colors">
                                                    <MapPin size={18} className="text-slate-400 shrink-0 mt-0.5" />
                                                    {row.loc}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </motion.tbody>
                            </AnimatePresence>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProgrammeView;
