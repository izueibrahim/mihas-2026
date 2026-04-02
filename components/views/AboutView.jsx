'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plane, Car, Hotel, Truck, Info } from 'lucide-react';
import PageHeader from '../UI/PageHeader';
import SubNav from '../UI/SubNav';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { aboutTabs } from '../../data/navigation';
import { airlinePartners, ehailingPartners, hotelPartners } from '../../data/partners';
import { shuttleServiceData } from '../../data/shuttle';

const AboutView = ({ subView, setSubView, onOpenForm }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader title="About MIHAS" breadcrumb="Information" />
      <SubNav items={aboutTabs} activeItem={subView} onSelect={setSubView} />
      
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <AnimatePresence mode="wait">
          <motion.div key={subView} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
        {subView === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <h2 className="font-h2 text-slate-900 mb-8 italic decoration-orange-500/30 underline underline-offset-8">The World's Largest Halal Showcase</h2>
                <p className="font-body text-slate-600">Since its inception in 2004, MIHAS has become an event for local and foreign businesses to thrive in the Halal trade and to contribute significantly to the global Halal economy.</p>
                <p className="font-body text-slate-600">In 2024, MIHAS had attracted over 43,000 trade visitors, resulted in total immediate and negotiated trade value of over RM4.30 billion.</p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-10 rounded-r-3xl">
                    <p className="text-orange-900 font-h4 italic">"MIHAS is a robust marketplace for both international and local players to seize opportunities beyond Halal food including Halal pharmaceutical, medical devices, finance, modest fashion, personal care and cosmetics, green technologies and even Muslim-friendly tourism."</p>
                </div>
                <p className="font-body text-slate-600">The 21st MIHAS will place special emphasis on the agenda of helping local and international players look to innovation and sustainable initiatives to spearhead steady growth for the Halal economy.</p>
                
                <h3 className="font-h3 text-slate-900 mt-12 mb-6 uppercase">MIHAS 2025 - The Biggest and Boldest Edition</h3>
                <p className="font-body text-slate-600">MIHAS 2025 Hybrid Edition combines the best of both conventional exhibition and virtual version. Featuring physical exhibitions together with exhibition booths with full multimedia microsite for product and services showcase.</p>
                
                <div className="flex flex-wrap gap-4 mt-12">
                    <Button className="shadow-xl shadow-orange-900/10" onClick={() => onOpenForm('exhibitor')}>Book Exhibition Space</Button>
                    <Button variant="outline" onClick={() => onOpenForm('visitor')}>Register as Visitor</Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-8 bg-slate-900 text-white border-none rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h4 className="font-label mb-10 text-orange-400 flex items-center gap-3">Key Organisers <div className="w-10 h-[1px] bg-orange-500/30"></div></h4>
                <ul className="space-y-8 text-sm">
                  <li>
                    <strong className="block text-slate-400 font-label mb-2 italic">Hosted By:</strong>
                    <div className="text-white font-h4">Ministry of Investment, Trade and Industry (MITI)</div>
                  </li>
                  <li>
                    <strong className="block text-slate-400 font-label mb-2 italic">Organised By:</strong>
                    <div className="text-white font-h4">Malaysia External Trade Development Corporation (MATRADE)</div>
                  </li>
                  <li>
                    <strong className="block text-slate-400 font-label mb-2 italic">In Association With:</strong>
                    <div className="text-white font-h4">Halal Development Corporation (HDC)<br />Department Of Islamic Development (JAKIM)</div>
                  </li>
                  <li>
                    <strong className="block text-slate-400 font-label mb-2 italic">Managed By:</strong>
                    <div className="text-white font-h4">ES Exhibition Services Sdn. Bhd.</div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {subView === 'organisers' && (
          <div className="space-y-6">
             {[
               {
                 role: "Host",
                 logo: "/images/organisers/miti.png",
                 name: "Ministry Of Investment, Trade And Industry (MITI), Malaysia",
                 desc: "The Ministry of Investment, Trade and Industry Malaysia (MITI) oversees Malaysia’s international trade and investment interest. Its policies and commitment to spur economic and industrial activity have resulted in Malaysia being one of the top trading nations in the world."
               },
               {
                 role: "Organiser",
                 logo: "/images/organisers/matrade.png",
                 name: "Malaysia External Trade Development Corporation (MATRADE)",
                 desc: "The Malaysia External Trade Development Corporation (MATRADE) develops and promotes Malaysia’s exports across the globe and is represented in 46 locations worldwide. In Malaysia, MATRADE has five local branches in Penang, Terengganu, Johor, Sabah and Sarawak. MATRADE provides endorsements and promotional support of International Trade Exhibitions and Conferences held in Malaysia."
               },
               {
                 role: "In Association With",
                 logo: "/images/organisers/hdc.png",
                 name: "Halal Development Corporation Berhad (HDC)",
                 desc: "Halal Development Corporation (HDC) was established in 2006 to co-ordinate the overall development of the Halal industry in Malaysia. HDC promotes participation and facilitates growth of Malaysian companies in the global Halal market."
               },
               {
                 role: "In Association With",
                 logo: "/images/organisers/jakim.png",
                 name: "Department of Islamic Development Malaysia (JAKIM)",
                 desc: "JAKIM is the lead government agency promoting the development of Islam in Malaysia. It is the sole Halal certification body in Malaysia and is widely recognised as the world leader in Halal Certification."
               },
               {
                 role: "Managed By",
                 logo: "/images/organisers/es.png",
                 name: "ES Exhibition Services Sdn. Bhd.",
                 desc: "With 30 years in the industry, ES has established itself as a leader in the ASEAN exhibition and event management sector, built on the core values of integrity, dedication, and the importance of relationships. ES values connections with its people, partners, and clients, driving its vision to not only meet but exceed the evolving standards of the industry."
               }
             ].map((org, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
               >
                 <Card className="p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-orange-200">
                    <div className="w-48 md:w-56 shrink-0 flex items-center justify-center p-6 bg-white rounded-[32px] border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-105">
                        <img src={org.logo} alt={org.role} className="w-full h-auto object-contain" />
                    </div>
                    <div className="flex-grow space-y-4 text-center md:text-left">
                        <div className="font-label text-orange-600 uppercase tracking-widest text-xs">{org.role}</div>
                        <h3 className="font-h3 text-slate-900 uppercase italic leading-tight">{org.name}</h3>
                        <p className="font-body text-slate-600 max-w-4xl">{org.desc}</p>
                    </div>
                 </Card>
               </motion.div>
             ))}
          </div>
        )}

        {subView === 'venue' && (
          <Card className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="font-h2 text-slate-900">Malaysia International Trade & Exhibition Centre</h2>
              <div className="inline-flex flex-col md:flex-row items-center md:items-start gap-4 px-4 py-3 bg-slate-100 rounded-lg text-slate-700 font-body-sm">
                <span className="flex items-center gap-2"><MapPin size={18} className="text-orange-600" /> 8 Jalan Dutamas 2, 50480 Kuala Lumpur</span>
                <span className="hidden md:inline text-slate-300">|</span>
                <span className="text-slate-500 font-mono">Lat: -3.17933, Lng: 101.66757</span>
              </div>
              <p className="font-body text-slate-600">The Malaysia International Trade and Exhibition Centre (MITEC) is the country's largest exhibition centre with 1 million square feet of gross exhibition space. The first component and flagship of KL Metropolis, a city within a city where trade, commerce, living and transport converge.</p>
              <p className="font-body text-slate-600">MITEC is poised to be the exhibition venue of choice in the Southeast Asia region. The 12,960 sqm of column-free space on level 3 provides an unobstructed view, making it the largest pillar-less exhibition hall in Malaysia, accommodating up to 47,700 visitors.</p>
            </div>
          </Card>
        )}

        {subView === 'getting-there' && (
          <div className="space-y-20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-h2 text-slate-900 mb-4">Plan Your Visit With Exclusive Offers</h2>
              <p className="font-body text-slate-600 italic">Travel and stay in comfort during MIHAS 2025 with our official partners.</p>
            </div>

            {/* Airline Partners */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Plane className="text-orange-600" />
                </div>
                <h3 className="font-h3 text-slate-900 uppercase tracking-wide">Supporting Airline Partners</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {airlinePartners.map((partner, i) => (
                  <Card key={i} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <img src={partner.image} alt={partner.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <h4 className="font-h4 text-white text-xl">{partner.name}</h4>
                        <div className="font-label text-orange-400">{partner.discount}</div>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="bg-orange-50 text-orange-800 px-6 py-4 rounded-2xl font-mono font-bold font-body-sm border border-orange-100 flex items-center justify-between shadow-inner">
                        <span className="text-xs uppercase tracking-widest opacity-60">Promo Code:</span>
                        <span className="text-xl tracking-wider">{partner.promoCode}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-[13px]">
                        <div className="space-y-1">
                          <div className="text-slate-400 font-label text-[10px] uppercase tracking-tighter">Sales Period</div>
                          <div className="text-slate-700 font-body-sm font-semibold">{partner.salesPeriod}</div>
                        </div>
                        <div className="space-y-1 text-right">
                          <div className="text-slate-400 font-label text-[10px] uppercase tracking-tighter">Travel Period</div>
                          <div className="text-slate-700 font-body-sm font-semibold">{partner.travelPeriod}</div>
                        </div>
                      </div>
                      <Button className="w-full group-hover:bg-orange-600">Book Flight</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Accommodation Partners - MOVED UP */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Hotel className="text-blue-600" />
                </div>
                <h3 className="font-h3 text-slate-900 uppercase tracking-wide">Accommodation Partners</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {hotelPartners.map((hotel, i) => (
                  <Card key={i} className="group flex flex-col h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative h-40 shrink-0">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-orange-600 shadow-sm border border-orange-100">
                        {hotel.rate}
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col space-y-4">
                      <div>
                        <h4 className="font-h4 text-sm text-slate-900 mb-2 min-h-12 leading-tight">{hotel.name}</h4>
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                          <MapPin size={12} className="shrink-0" />
                          <span className="text-[10px] truncate">{hotel.address}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px] border-y border-slate-50 py-3">
                        <div className="space-y-1">
                          <div className="text-slate-400 uppercase tracking-tighter scale-90 origin-left">Distance</div>
                          <div className="text-slate-800 font-bold">{hotel.distance}</div>
                        </div>
                        <div className="space-y-1 text-right">
                          <div className="text-slate-400 uppercase tracking-tighter scale-90 origin-right">Shuttle</div>
                          <div className="text-slate-800 font-bold truncate">{hotel.shuttle}</div>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 space-y-3">
                        <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-100 flex justify-between items-center group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                          <span className="text-[9px] font-label text-slate-400 uppercase tracking-wider">Promo Code</span>
                          <span className="font-mono font-bold text-slate-900 group-hover:text-orange-700">{hotel.code}</span>
                        </div>
                        <a href={hotel.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full text-xs h-9 font-label uppercase py-0 rounded-xl group-hover:bg-white group-hover:border-orange-500 group-hover:text-orange-600">Book Your Stay</Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* E-Hailing Partners - MOVED DOWN */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Car className="text-green-600" />
                </div>
                <h3 className="font-h3 text-slate-900 uppercase tracking-wide">E-Hailing Partners</h3>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {ehailingPartners.map((ride, i) => (
                  <Card key={i} className={`group p-6 flex flex-col h-full relative !overflow-visible transition-all duration-500 ease-[0.23,1,0.32,1] ${ride.isPreferred ? 'border-2 border-orange-400 ring-4 ring-orange-400/10' : 'border-slate-100 hover:border-orange-400 hover:bg-orange-50/50 hover:shadow-md'}`}>
                    {ride.isPreferred && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg z-10 transition-all duration-500 ease-[0.23,1,0.32,1] group-hover:scale-110">
                        Preferred E-Hailing Partner
                      </div>
                    )}
                    <div className="h-16 flex items-center justify-center mb-4 p-2">
                        <img src={ride.image} alt={ride.title} className="max-h-full max-w-full object-contain transition-transform duration-500 ease-[0.23,1,0.32,1] group-hover:scale-110" />
                    </div>
                    <div className="text-center flex-grow flex flex-col">
                      <h4 className="font-h4 text-sm text-slate-900 mb-2 uppercase italic transition-colors duration-500 ease-[0.23,1,0.32,1] group-hover:text-orange-600">{ride.title}</h4>
                      <p className="font-body-sm font-bold text-green-600 mb-2 leading-tight">{ride.desc}</p>
                      <p className="text-[10px] text-slate-400 mb-6 mt-auto">Valid: {ride.valid}</p>
                      <div className="bg-slate-900 text-white px-4 py-2 rounded-[14px] font-mono font-bold text-xs shadow-inner transition-all duration-500 ease-[0.23,1,0.32,1] group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-600/20">
                        <span className="opacity-50 text-[10px] mr-2">CODE:</span> {ride.code}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {subView === 'shuttle' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-slate-900 mb-4">Getting to MIHAS Made Easy</h2>
              <p className="font-body text-slate-600">Complimentary shuttle services are available for all attendees. Service runs in intervals (30-60 mins).</p>
            </div>

            {shuttleServiceData.map((service, i) => (
              service.special ? (
                <Card key={i} className="p-8 bg-orange-50 border-orange-200">
                  <h3 className="font-h4 text-slate-900 mb-4">{service.title}</h3>
                  <p className="font-body-sm text-slate-600 mb-4">{service.time}</p>
                  <div className="flex items-center gap-4 text-slate-800 font-bold">
                    <Truck className="text-orange-600 shrink-0" /> {service.route}
                  </div>
                </Card>
              ) : (
                <Card key={i} className="p-8">
                  <h3 className="font-h4 text-slate-900 mb-6 border-b border-slate-100 pb-4">{service.title}</h3>
                  <ul className="space-y-4 font-body text-slate-700">
                    {service.routes.map((route, j) => (
                      <li key={j} className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0" /> {route}</li>
                    ))}
                  </ul>
                </Card>
              )
            ))}
          </div>
        )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutView;
