import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const MultiStepForm = ({ type, onClose }) => {
    const isSponsor = type === 'sponsor';
    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-slate-50 px-6 py-4 border-b flex justify-between items-center shrink-0">
                    <h3 className="font-bold text-lg text-slate-800">
                        {isSponsor ? 'Sponsor Enquiry Form' : type === 'media' ? 'Media Registration Form' : 'Enquiry Form'}
                    </h3>
                    <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"><X size={20} /></button>
                </div>
                <div className="p-6 md:p-8 overflow-y-auto">
                    {isSponsor && (
                        <p className="text-sm text-slate-600 mb-6 border-b border-slate-100 pb-6">
                            MIHAS 2025 provides a unique platform for your brand to communicate the brand story and gain access to new markets. As the world's largest Halal B2B trade show, the association with MIHAS 2025 will elevate your brand profile to a global level.
                        </p>
                    )}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                                <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                                <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email *</label>
                                <input type="email" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Contact *</label>
                                <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label>
                                <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                                <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                            </div>
                        </div>
                        {(type === 'exhibitor' || type === 'sponsor') && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Website *</label>
                                    <input type="url" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nature of Business *</label>
                                    <select className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500 bg-white">
                                        <option>Food & Beverages</option>
                                        <option>Pharmaceuticals & Cosmetics</option>
                                        <option>Islamic Finance</option>
                                        <option>Modest Fashion</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                            <textarea rows="3" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500 resize-none"></textarea>
                        </div>
                        <p className="text-xs text-slate-500">By clicking the "Submit" button, I agree to MIHAS Terms & Conditions and Privacy Policy.</p>
                        <Button className="w-full" onClick={() => {
                            alert("Application Submitted! (Mock)");
                            onClose();
                        }}>Submit Application</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
