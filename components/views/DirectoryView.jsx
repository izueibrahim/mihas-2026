'use client';

import React from 'react';
import { Download, FileText, Maximize } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';

const DirectoryView = ({ onOpenForm }) => {
    const pdfPath = '/src/directory.pdf';

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <PageHeader title="e-Directory" breadcrumb="Exhibitors" subtitle="Browse the Official 2025 Exhibitor Directory" />
            <div className="max-w-7xl mx-auto px-6 mt-12 space-y-16">

                {/* PDF Viewer Section - Scrollable Full Document */}
                <Card className="p-4 md:p-8 bg-white border-slate-200 shadow-xl rounded-[40px] flex flex-col items-center">
                    <div className="w-full flex flex-col md:flex-row items-center justify-between mb-8 px-4 gap-6">
                        <div className="flex items-center gap-4 text-center md:text-left">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                                <FileText size={26} />
                            </div>
                            <div>
                                <h3 className="font-h3 italic uppercase text-slate-900 leading-none">MIHAS 2025 e-Directory</h3>
                                <p className="font-label text-slate-500 text-sm tracking-wider uppercase mt-2">Official Exhibitor Guide</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Button variant="outline" onClick={() => window.open(pdfPath, '_blank')} className="w-full sm:w-auto text-slate-700 hover:text-orange-600 border-slate-200 bg-white">
                                <Maximize size={18} className="mr-2" /> Open Fullscreen
                            </Button>
                            <Button onClick={() => { const a = document.createElement('a'); a.href = pdfPath; a.download = 'MIHAS_Directory.pdf'; a.click(); }} className="w-full sm:w-auto shadow-lg shadow-orange-950/20 bg-orange-600 hover:bg-orange-500 text-white">
                                <Download size={18} className="mr-2" /> Download PDF
                            </Button>
                        </div>
                    </div>

                    {/* The Full Page Viewer Screen Container */}
                    <div className="w-full bg-slate-100 rounded-[32px] overflow-hidden shadow-inner relative min-h-[600px] h-[85vh] border-2 border-slate-100">
                        {/* Fallback & Loading UI Behind Embed */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 pointer-events-none z-0">
                            <div className="animate-pulse flex flex-col items-center text-center px-6">
                                <FileText size={64} className="mb-6 opacity-20 text-orange-500" />
                                <p className="font-label uppercase tracking-widest opacity-50 text-xs">Loading Exhibitor Directory Document...</p>
                            </div>
                        </div>

                        {/* Standard Embed (Scrollable by default in all browsers) */}
                        <embed
                            src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1`}
                            type="application/pdf"
                            className="w-full h-full relative z-10"
                            title="MIHAS e-Directory PDF"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DirectoryView;
