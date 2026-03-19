import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import GlobalOrganisersBar from '../UI/GlobalOrganisersBar';

const Footer = ({ navigate }) => {
    return (
        <>
            <GlobalOrganisersBar />
            <footer className="bg-slate-900 text-slate-400 py-20 px-6 border-t border-slate-800 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                    <div className="lg:col-span-1 space-y-8">
                        <div className="group cursor-pointer" onClick={() => navigate('home')}>
                            <img src="/src/logo.png" alt="MIHAS 2026" className="h-16 w-auto brightness-0 invert mb-6 transition-transform group-hover:scale-105" />
                        </div>
                        <p className="text-sm text-slate-500 italic leading-relaxed max-w-xs">
                            The 22nd Malaysia International Halal Showcase. Hosted by MITI, Organised by MATRADE. The world's largest Halal exhibition.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm text-white mb-8 uppercase tracking-wider">Quick Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { id: 'visitor', label: 'Trade Visitor' },
                                { id: 'exhibitor', label: 'Book Space' },
                                { id: 'programme', label: 'Show Schedule' },
                                { id: 'media', label: 'Media Center' },
                                { id: 'awards', label: 'MIHAS Awards' }
                            ].map((link) => (
                                <li key={link.id}>
                                    <button onClick={() => navigate(link.id)} className="font-nav text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm text-white mb-8 uppercase tracking-wider">Contact Info</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex gap-4">
                                {/* <MapPin size={18} className="text-orange-500 shrink-0" /> */}
                                <span className="leading-relaxed">MITEC, Level 1, 8 Jalan Dutamas 2,<br />50480 Kuala Lumpur</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail size={18} className="text-orange-500 shrink-0" />
                                <span className="hover:text-white transition-colors cursor-pointer">enquiry@mihas.com.my</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone size={18} className="text-orange-500 shrink-0" />
                                <span className="hover:text-white transition-colors cursor-pointer">+603 6211 9973</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/5 rounded-[40px] p-8 border border-white/10 backdrop-blur-sm">
                        <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Stay Informed</h4>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">Subscribe to our newsletter for the latest Halal industry insights and show updates.</p>
                        <div className="relative">
                            <input type="email" placeholder="YOUR EMAIL" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-xs text-white outline-none focus:border-orange-500 transition-all font-black tracking-widest" />
                            <button className="absolute right-2 top-2 bottom-2 bg-orange-600 hover:bg-orange-500 text-white px-4 rounded-xl transition-all"><ArrowRight size={18} /></button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-600">© 2026 MIHAS Malaysia. All rights reserved.</p>
                    <div className="flex gap-10 text-slate-500">
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Cookies Policy</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
