'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AwardsView = ({ onOpenForm }) => (
    <div className="bg-slate-50 min-h-screen pb-20">
        <PageHeader title="MIHAS Awards" breadcrumb="Recognition" subtitle="Get The Recognition Your Business Deserves" />
        <div className="max-w-7xl mx-auto px-6 mt-12 space-y-12">
            <div className="font-body text-slate-700 text-center mx-auto max-w-4xl">
                <p>Celebrate excellence in the global halal industry with the prestigious MIHAS Awards! We proudly recognize outstanding achievements by MIHAS Exhibitors, honouring innovation and leadership in halal products, services, and ESG (environmental, social, and governance) practices. Join us as we spotlight the remarkable contributions of our esteemed participants.</p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid lg:grid-cols-2 gap-8">
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="h-full">
                    <Card className="p-8 h-full">
                        <Award className="w-12 h-12 text-orange-600 mb-6" />
                        <h3 className="font-h3 text-slate-900 mb-4">Products and Services Excellence Award</h3>
                        <p className="font-body text-slate-600 mb-6">Recognises MIHAS exhibitors with significant values in export performance and business recognition, product/service offerings, digitalisation in business and Corporate Social Responsibility (CSR) Initiatives.</p>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-label text-slate-900 mb-3">Excellence Award Prerequisites</h4>
                                <ul className="space-y-2 font-body-sm text-slate-700 list-disc list-inside">
                                    <li>Confirmed participation as an exhibitor in MIHAS 2025</li>
                                    <li>Participated in MIHAS exhibitions at least 5 times since 2016</li>
                                    <li>Reported average sales &gt; RM1,000,000 (Products) / RM500,000 (Services)</li>
                                    <li>Registered as a MATRADE Member (for local companies)</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <h4 className="font-label text-slate-900 mb-3 flex items-center gap-2"><Star size={18} className="text-orange-500" /> Emerging Star Award</h4>
                                <ul className="space-y-2 font-body-sm text-slate-700 list-disc list-inside">
                                    <li>Confirmed participation as an exhibitor in MIHAS 2025</li>
                                    <li>Participated in MIHAS exhibitions at least 2 times since 2016</li>
                                    <li>Reported average sales &gt; RM1,000,000 (Products) / RM500,000 (Services)</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="h-full">
                    <Card className="p-8 flex flex-col h-full">
                        <Award className="w-12 h-12 text-orange-600 mb-6" />
                        <h3 className="font-h3 text-slate-900 mb-4">Innovation and Sustainability Award</h3>
                        <p className="font-body text-slate-600 mb-6">Recognises exhibitors who excel in the halal industry through innovative solutions and integration of sustainability principles into their operations and global value chains.</p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                            <h4 className="font-label text-slate-900 mb-3">Prerequisites</h4>
                            <ul className="space-y-2 font-body-sm text-slate-700 list-disc list-inside">
                                <li>Confirmed participation as an exhibitor in MIHAS 2025</li>
                                <li>Incorporated elements of innovation and sustainability practices</li>
                                <li>Registered as a MATRADE Member (for local companies)</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex-1">
                            <h4 className="font-label text-slate-900 mb-3">Evaluation Criteria</h4>
                            <ul className="space-y-2 font-body-sm text-slate-700 list-disc list-inside">
                                <li>Innovative Solution Offered in Product / Service Quality</li>
                                <li>Design / Appearance, Services Uniqueness</li>
                                <li>Global Sustainability Elements (Governance, Reporting)</li>
                                <li>Avoidance of Greenwashing & Human Rights Due Diligence</li>
                                <li>Greenhouse Gas (GHG) Emissions Management</li>
                                <li>Impactful Project in line with the UN 17 SDGs</li>
                            </ul>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid md:grid-cols-2 gap-8">
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="h-full">
                    <Card className="p-10 bg-slate-900 text-white border-slate-800 rounded-[40px] shadow-2xl h-full">
                        <h3 className="font-h4 text-orange-400 mb-8 uppercase italic underline underline-offset-8 decoration-orange-400/30">Winners' Benefits</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-label text-white mb-4 pb-2 border-b border-slate-700 flex items-center justify-between italic">For Malaysian Companies <div className="w-2 h-2 rounded-full bg-orange-500"></div></h4>
                                <ul className="space-y-3 font-body-sm text-slate-300">
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Trophy and Certificate during Award Ceremony</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Featured in MATRADE's social media platforms</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> 3 months Featured Banner on MATRADE Portal</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Featured in SUCCESS STORIES page</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Free listing in Malaysian Brand Directory</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Premium B2B Matching at INSP MIHAS 2026</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-label text-white mb-4 pb-2 border-b border-slate-700 flex items-center justify-between italic">For Foreign Companies <div className="w-2 h-2 rounded-full bg-slate-500"></div></h4>
                                <ul className="space-y-3 font-body-sm text-slate-300">
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Trophy and Certificate during Award Ceremony</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Featured in MATRADE's social media platforms</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> 3 months Success Stories feature</li>
                                    <li className="flex gap-3"><span className="text-orange-500">✓</span> Invitation as speaker in MATRADE's webinar</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="h-full">
                    <Card className="p-10 rounded-[40px] border-slate-200 h-full">
                        <h3 className="font-h4 text-slate-900 mb-10 uppercase italic underline underline-offset-8 decoration-orange-500/20">How to Participate</h3>
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Visit the Portal", desc: "Access the MIHAS Awards portal at official website." },
                                { step: "02", title: "Select Category", desc: "Choose your nomination category based on prerequisites." },
                                { step: "03", title: "Submit Form", desc: "Complete and submit your form by 15 August 2025." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 font-label flex items-center justify-center shrink-0 shadow-sm">{item.step}</div>
                                    <div className="space-y-1">
                                        <h4 className="font-h4 text-slate-900 uppercase italic">{item.title}</h4>
                                        <p className="font-body-sm text-slate-500 italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-10 border-t border-slate-100 mt-6 text-center">
                                <div className="mb-6">
                                    <p className="font-label text-slate-400 mb-2">Deadine: 15 Aug 2025</p>
                                </div>
                                <Button className="w-full shadow-xl shadow-orange-900/10" onClick={() => onOpenForm('exhibitor')}>Submit Award Application</Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    </div>
);

export default AwardsView;
