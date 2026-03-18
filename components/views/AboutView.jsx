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
                    <Button className="px-10 py-4 font-black shadow-xl shadow-orange-900/10" onClick={() => onOpenForm('exhibitor')}>Book Exhibition Space</Button>
                    <Button variant="outline" className="px-10 py-4 font-black" onClick={() => onOpenForm('visitor')}>Register as Visitor</Button>
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
                    <div className="text-white font-h4">Qube Integrated (Malaysia) Sdn. Bhd.</div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {subView === 'organisers' && (
          <div className="grid md:grid-cols-2 gap-8">
             <Card className="p-8">
                <div className="font-label text-orange-600 mb-2">Host</div>
                <h3 className="font-h3 text-slate-900 mb-4">Ministry Of Investment, Trade And Industry (MITI), Malaysia</h3>
                <p className="font-body text-slate-600">The Ministry of Investment, Trade and Industry Malaysia (MITI) oversees Malaysia's international trade and investment interest. Its policies and commitment to spur economic and industrial activity have resulted in Malaysia being one of the top trading nations in the world.</p>
             </Card>
             <Card className="p-8">
                <div className="font-label text-orange-600 mb-2">Organiser</div>
                <h3 className="font-h3 text-slate-900 mb-4">Malaysia External Trade Development Corporation (MATRADE)</h3>
                <p className="font-body text-slate-600">The Malaysia External Trade Development Corporation (MATRADE) develops and promotes Malaysia's exports across the globe and is represented in 46 locations worldwide. MATRADE provides endorsements and promotional support of International Trade Exhibitions and Conferences held in Malaysia.</p>
             </Card>
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
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-h2 text-slate-900 mb-4">Plan Your Visit With Exclusive Offers</h2>
              <p className="font-body text-slate-600">Travel and stay in comfort during MIHAS 2025 with our official partners.</p>
            </div>

            <div>
              <h3 className="font-h3 text-slate-900 mb-6 flex items-center gap-3"><Plane className="text-orange-600" /> Supporting Airline Partners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {airlinePartners.map((partner, i) => (
                  <Card key={i} className={`p-6 border-t-4 border-t-${partner.color}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-h4 text-slate-900">{partner.name}</h4>
                        <div className="font-body-sm font-bold text-green-600">{partner.discount}</div>
                      </div>
                    </div>
                    <div className="bg-orange-50 text-orange-800 px-4 py-3 rounded-lg mb-4 font-mono font-bold font-body-sm border border-orange-100 flex items-center justify-between">
                      <span>Promo Code:</span>
                      <span className="text-lg">{partner.promoCode}</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li><strong>Sales Period:</strong> {partner.salesPeriod}</li>
                      <li><strong>Travel Period:</strong> {partner.travelPeriod}</li>
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-h3 text-slate-900 mb-6 flex items-center gap-3"><Car className="text-orange-600" /> E-Hailing Partners</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {ehailingPartners.map((ride, i) => (
                  <Card key={i} className="p-5 flex flex-col h-full">
                    <h4 className="font-h4 text-base text-slate-900 mb-1">{ride.title}</h4>
                    <p className="font-body-sm font-bold text-green-600 mb-2">{ride.desc}</p>
                    <p className="text-[10px] text-slate-400 mb-4 flex-1">Valid: {ride.valid}</p>
                    <div className="bg-slate-100 px-3 py-2 rounded-lg font-mono font-bold font-body-sm text-slate-700 text-center">Code: {ride.code}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-h3 text-slate-900 mb-6 flex items-center gap-3"><Hotel className="text-orange-600" /> Accommodation Partners</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {hotelPartners.map((hotel, i) => (
                  <Card key={i} className="p-5">
                    <h4 className="font-h4 text-sm text-slate-900 mb-3 h-10">{hotel.name}</h4>
                    <div className="bg-orange-50 px-2 py-1.5 rounded font-body-sm font-mono font-bold text-orange-800 flex justify-between">
                      <span className="opacity-70">Code:</span> <span>{hotel.code}</span>
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
