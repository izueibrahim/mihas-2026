"use client";
import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Users, Building, Globe, TrendingUp, 
  ChevronRight, CheckCircle2, Search, ArrowRight,
  Briefcase, Mic, Star, Menu, X, Plane, Train, Hotel, Car, 
  Info, LayoutGrid, Award, Phone, Clock, FileText, Image as ImageIcon,
  Building2, Landmark, Truck, ShoppingCart, Utensils, HeartPulse,
  Quote, Play
} from 'lucide-react';

// --- GLOBAL DESIGN SYSTEM COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
    outline: "border border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600 bg-white",
    ghost: "text-slate-600 hover:text-orange-600 hover:bg-orange-50"
  };
  return <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ${className}`}>
    {children}
  </div>
);

const PageHeader = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-slate-900 text-white pt-32 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      {breadcrumb && <div className="text-orange-400 text-sm font-semibold mb-4 tracking-wider uppercase">{breadcrumb}</div>}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl text-slate-300 max-w-3xl">{subtitle}</p>}
    </div>
  </div>
);

const SubNav = ({ items, activeItem, onSelect }) => (
  <div className="bg-white border-b border-slate-200 sticky top-[72px] md:top-[88px] z-30">
    <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto hide-scrollbar">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`px-6 py-4 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors ${
            activeItem === item.id 
              ? 'border-orange-600 text-orange-600 bg-orange-50/30' 
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

// --- PAGE VIEWS ---

const SponsorShowcase = () => {
  const [activeTab, setActiveTab] = useState('premium');
  
  const sponsors = {
    premium: [
      { tier: "Platinum", names: ["Halal Approval Global", "Nestle", "Ajinomoto", "F&B Partner"] },
      { tier: "Diamond", names: ["Total Swiss"] },
      { tier: "Gold & Silver", names: ["CIMB Islamic", "Bubbles", "Matrix"] }
    ],
    strategic: [
      { tier: "Strategic Partners", names: ["SolidCool", "Big Onion", "Malaysia Truly Asia", "MyFashionChamber", "SIRIM", "DITPE", "D'Lina Spa & Wellness"] }
    ],
    media: [
      { tier: "Airline & Logistic", names: ["Firefly", "Malaysia Airlines", "Redly Pos Malaysia"] },
      { tier: "Media & Others", names: ["MSCM Studios", "Seni Jaya", "All Kurma", "Barkath Foods", "Khee San", "Mamee", "Miaow Miaow", "Sunquick", "Wedrink"] }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button onClick={() => setActiveTab('premium')} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'premium' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>Premium Sponsors</button>
        <button onClick={() => setActiveTab('strategic')} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'strategic' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>Strategic Partners</button>
        <button onClick={() => setActiveTab('media')} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'media' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600'}`}>Media, Logistics & Others</button>
      </div>
      
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {sponsors[activeTab].map((group, idx) => (
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

const HomeView = ({ navigate }) => (
  <div className="animate-in fade-in">
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden px-6 text-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-slate-900 to-slate-900" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Welcome To The World's <span className="text-orange-500">Biggest</span> Halal Showcase
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          17-20 Sept 2026 | MITEC, KL
        </p>
      </div>
    </section>

    {/* Intro & Stats Section */}
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-slate-600 mb-6">The 21st edition of MIHAS created a world of opportunities for international Halal business and exporters.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            The 22nd edition of MIHAS will be a 4-day trade showcase held in Kuala Lumpur, Malaysia, alongside the MIHAS Virtual platform.
          </h2>
          <Button onClick={() => navigate('about')} className="mx-auto">About MIHAS</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Deals Concluded", value: "RM6.05 billion", icon: TrendingUp },
            { label: "Exhibition Booths", value: "2,400", icon: Building },
            { label: "PR Value", value: "RM37 million", icon: Globe },
            { label: "Industry Clusters", value: "14", icon: LayoutGrid },
            { label: "Trade Visitors", value: "50,340", icon: Users },
            { label: "Business Meetings", value: "4,000", icon: Briefcase }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i} className="p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{stat.value}</h3>
                <p className="font-bold text-slate-800">{stat.label}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>

    {/* 3 CTAs Block */}
    <section className="w-full">
      <div className="grid md:grid-cols-3 h-auto md:h-[400px] divide-y md:divide-y-0 md:divide-x divide-white/5">
         {/* CTA 1 */}
         <div className="bg-gradient-to-tr from-slate-800 to-slate-900 text-white p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-2xl lg:text-3xl font-bold mb-8 leading-snug">Why should you<br/>exhibit at MIHAS?</h3>
             <button onClick={() => navigate('exhibitor')} className="mx-auto rounded-full bg-white text-slate-900 font-bold px-12 py-3.5 hover:bg-slate-100 transition-colors shadow-lg">Learn More</button>
           </div>
         </div>
         {/* CTA 2 */}
         <div className="bg-slate-900 text-white p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-2xl lg:text-3xl font-bold mb-8 leading-snug">Registration for<br/>exhibitors is open!</h3>
             <button onClick={() => navigate('exhibitor')} className="mx-auto rounded-full bg-white text-slate-900 font-bold px-12 py-3.5 hover:bg-slate-100 transition-colors shadow-lg">Reserve My Booth</button>
           </div>
         </div>
         {/* CTA 3 */}
         <div className="bg-gradient-to-bl from-slate-950 to-slate-900 text-white p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-2xl lg:text-3xl font-bold mb-8 leading-snug">The world's<br/>largest halal event<br/>at a glance.</h3>
             <button className="w-16 h-16 rounded-full border border-white flex items-center justify-center mx-auto hover:bg-white/10 transition-colors">
               <Play className="ml-1" size={24} />
             </button>
           </div>
         </div>
      </div>
    </section>

    {/* Word from CEO - Quote Section */}
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="mx-auto text-orange-200 w-20 h-20 mb-8 rotate-180" />
        <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-10">
          "The event has become the largest gathering of those who are in this segment (halal) specifically, and Specially the MIHAS platform. I think it is now the largest trade show for the industry and it keeps growing."
        </p>
        <div>
          <div className="font-bold text-slate-900 tracking-wide text-lg">RAFI-UDDIN SHIKOH</div>
          <div className="text-orange-600 font-semibold text-sm tracking-widest uppercase">CEO DinarStandard USA</div>
        </div>
      </div>
    </section>

    {/* Awards & News Highlight */}
    <section className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Awards Highlight */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-between">
            MIHAS Awards 2025
            <Button variant="ghost" onClick={() => navigate('awards')} className="text-orange-400 hover:text-orange-300 p-0 hover:bg-transparent">View All <ArrowRight size={16}/></Button>
          </h2>
          <Card className="bg-slate-800 border-slate-700 text-white p-0 overflow-hidden">
            <div className="h-48 bg-slate-700 flex items-center justify-center">
               <Award size={48} className="text-slate-500" />
            </div>
            <div className="p-8">
              <div className="text-orange-400 text-sm font-bold mb-3">20 SEPTEMBER 2025</div>
              <h3 className="text-2xl font-bold mb-4">Excellence, Innovation and Sustainability Take Centre Stage at MIHAS Awards 2025</h3>
              <p className="text-slate-400 mb-6">KUALA LUMPUR, 20 SEPTEMBER 2025 - The Malaysia International Halal Showcase (MIHAS) Awards 2025 concluded with a celebration of excellence...</p>
              <Button variant="outline" onClick={() => navigate('awards')} className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 bg-transparent">Read more</Button>
            </div>
          </Card>
        </div>
        
        {/* Newsletter & News list */}
        <div className="flex flex-col">
          <div className="bg-orange-600 rounded-2xl p-8 mb-8 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-2">Get the latest of MIHAS and the global halal industry.</h3>
            <p className="mb-6 opacity-90">Join MIHAS Newsletter and never miss another update.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white" />
              <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">Sign Me Up!</button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">MIHAS in The News</h2>
          <div className="space-y-4 flex-1">
            {[
              { d: "20 SEPTEMBER 2025", t: "MIHAS 2025 ON TRACK TO HIT RM4.5 BILLION TARGET" },
              { d: "17 SEPTEMBER 2025", t: "Malaysia Powers Halal Trade Growth With MIHAS Knowledge Hub 2025" },
              { d: "10 SEPTEMBER 2025", t: "INSP MIHAS 2025 Facilitates Over 4,000 Business Meetings" }
            ].map((news, i) => (
              <div key={i} onClick={() => navigate('media', 'news')} className="group border-b border-slate-800 pb-4 cursor-pointer">
                <div className="text-orange-400 text-xs font-bold mb-1">{news.d}</div>
                <div className="font-semibold text-slate-200 group-hover:text-orange-400 transition-colors flex justify-between items-center">
                  {news.t}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Logo Cloud Section */}
    <section className="py-24 bg-slate-50 border-t border-slate-200">
       <div className="text-center mb-16 px-6">
         <h2 className="text-3xl font-bold text-slate-900">Our Esteemed Sponsors & Partners</h2>
       </div>
       
       <SponsorShowcase />
    </section>
  </div>
);

const AboutView = ({ subView, setSubView }) => {
  const tabs = [
    { id: 'overview', label: 'MIHAS Overview' },
    { id: 'organisers', label: 'Organisers' },
    { id: 'venue', label: 'The Venue' },
    { id: 'getting-there', label: 'Getting There' },
    { id: 'shuttle', label: 'Free Shuttle Services' }
  ];

  return (
    <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
      <PageHeader title="About MIHAS" breadcrumb="Information" />
      <SubNav items={tabs} activeItem={subView} onSelect={setSubView} />
      
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {subView === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The World's Largest Halal Showcase</h2>
                <p>Since its inception in 2004, MIHAS has become an event for local and foreign businesses to thrive in the Halal trade and to contribute significantly to the global Halal economy.</p>
                <p>In 2024, MIHAS had attracted over 43,000 trade visitors, resulted in total immediate and negotiated trade value of over RM4.30 billion.</p>
                <p>MIHAS is a robust marketplace for both international and local players to seize opportunities beyond Halal food including Halal pharmaceutical, medical devices, finance, modest fashion, personal care and cosmetics, green technologies and even Muslim-friendly tourism.</p>
                <p>The 21st MIHAS will place special emphasis on the agenda of helping local and international players look to innovation and sustainable initiatives to spearhead steady growth for the Halal economy.</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">MIHAS 2025 - The Biggest and Boldest Edition</h3>
                <p>MIHAS 2025 Hybrid Edition combines the best of both conventional exhibition and virtual version. Featuring physical exhibitions together with exhibition booths with full multimedia microsite for product and services showcase.</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Get Connected To The Right Business</h3>
                <p>There will also be Business Matching sessions for attendees, as well as MIHAS connect, an A.I. assisted business matching suite for virtual visitors, matching relevant exhibitors to trade visitors.</p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-slate-900 text-white border-slate-800">
                <h4 className="font-bold text-lg mb-4 text-orange-400">Key Organisers</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li><strong className="block text-white">Hosted By:</strong> Ministry of Investment, Trade and Industry (MITI)</li>
                  <li><strong className="block text-white">Organised By:</strong> MATRADE</li>
                  <li><strong className="block text-white">In Association With:</strong> HDC, JAKIM</li>
                  <li><strong className="block text-white">Managed By:</strong> Qube Integrated</li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {subView === 'organisers' && (
          <div className="grid md:grid-cols-2 gap-8">
             <Card className="p-8">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Host</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ministry Of Investment, Trade And Industry (MITI)</h3>
                <p className="text-slate-600 leading-relaxed">The Ministry of Investment, Trade and Industry Malaysia (MITI) oversees Malaysia's international trade and investment interest. Its policies and commitment to spur economic and industrial activity have resulted in Malaysia being one of the top trading nations in the world.</p>
             </Card>
             <Card className="p-8">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Organiser</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">MATRADE</h3>
                <p className="text-slate-600 leading-relaxed">The Malaysia External Trade Development Corporation (MATRADE) develops and promotes Malaysia's exports across the globe and is represented in 46 locations worldwide. MATRADE provides endorsements and promotional support of International Trade Exhibitions and Conferences held in Malaysia.</p>
             </Card>
          </div>
        )}

        {subView === 'venue' && (
          <Card className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Malaysia International Trade & Exhibition Centre</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-medium text-sm">
                <MapPin size={18} className="text-orange-600"/> 8 Jalan Dutamas 2, 50480 Kuala Lumpur
              </div>
              <p className="text-slate-600 leading-relaxed">The Malaysia International Trade and Exhibition Centre (MITEC) is the country's largest exhibition centre with 1 million square feet of gross exhibition space. The first component and flagship of KL Metropolis.</p>
              <p className="text-slate-600 leading-relaxed">MITEC is poised to be the exhibition venue of choice in the Southeast Asia region. The 12,960 sqm of column-free space on level 3 makes it the largest pillar-less exhibition hall in Malaysia, accommodating up to 47,700 visitors in theatre style seating.</p>
            </div>
          </Card>
        )}

        {subView === 'getting-there' && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Plan Your Visit With Exclusive Offers</h2>
              <p className="text-slate-600">Travel and stay in comfort during MIHAS 2025 with our official partners.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Plane className="text-orange-600" /> Supporting Airline Partners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400 text-xs">LOGO</div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Malaysia Airlines</h4>
                      <div className="text-sm text-slate-500">Discount Up to 15%</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 text-orange-800 px-4 py-3 rounded-lg mb-4 font-mono font-semibold text-sm border border-orange-100">
                    Promo Code: MHMHAS15
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Sales Period: Now - 19 September 2025</li>
                    <li>• Travel Period: 10 September - 27 September 2025</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400 text-xs">LOGO</div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Firefly Airlines</h4>
                      <div className="text-sm text-slate-500">Discount Up to 15%</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 text-orange-800 px-4 py-3 rounded-lg mb-4 font-mono font-semibold text-sm border border-orange-100">
                    Promo Code: FYMIHAS15
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Sales Period: Now - 18 September 2025</li>
                    <li>• Travel Period: 10 September - 27 September 2025</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Car className="text-orange-600" /> E-Hailing Partners</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "AirAsia Ride", code: "MIHAS2025", desc: "Get RM3 OFF to/from MITEC" },
                  { title: "MyCar", code: "MIHAS2025", desc: "Get RM2 OFF to/from MITEC" },
                  { title: "Grab", code: "MIHAS2025", desc: "Exclusive event discounts" },
                  { title: "Trek Rides", code: "MIHAS", desc: "Get RM2 OFF to/from MITEC" }
                ].map((ride, i) => (
                  <Card key={i} className="p-6">
                     <h4 className="font-bold text-lg text-slate-900 mb-2">{ride.title}</h4>
                     <p className="text-sm text-slate-600 mb-4">{ride.desc}</p>
                     <div className="bg-slate-100 px-3 py-2 rounded-lg font-mono text-sm text-slate-700 inline-block">Code: {ride.code}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Hotel className="text-orange-600" /> Accommodation Partners</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Hyatt House KL", code: "MITEC" },
                  { name: "Sunway Putra Hotel", code: "MIHAS 2025" },
                  { name: "Dorsett Hartamas", code: "MIHAS2025" },
                  { name: "EQ Kuala Lumpur", code: "MIHAS2025" },
                  { name: "Resort & Hotel KL", code: "GRPMIHAS" },
                  { name: "Wedgewood Residences", code: "MIHAS 2025" },
                  { name: "Hyatt Regency KL", code: "MIHAS 2025" },
                  { name: "Seri Pacific Hotel", code: "MIHAS 2025" }
                ].map((hotel, i) => (
                  <Card key={i} className="p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{hotel.name}</h4>
                    <div className="text-xs text-slate-500 mb-3">Sales Period: Sep 2025</div>
                    <div className="bg-orange-50 px-3 py-2 rounded text-xs font-mono font-semibold text-orange-800">Code: {hotel.code}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {subView === 'shuttle' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Getting to MIHAS Made Easy</h2>
              <p className="text-slate-600">Complimentary shuttle services are available for all attendees. Service runs in intervals (30-60 mins).</p>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">17-18 September 2025 (9:00 AM - 7:00 PM)</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0"/> MITEC South Entrance ↔ KL Court Complex MATRADE Parking ↔ Publika</li>
                <li className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0"/> MITEC South Entrance ↔ Sunway Putra Mall</li>
                <li className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0"/> MITEC South Entrance ↔ LRT Pasar Seni (New)</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">19-20 September 2025 (9:00 AM - 7:00 PM)</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0"/> MITEC South Entrance ↔ Sunway Putra Mall</li>
                <li className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0"/> MITEC South Entrance ↔ Pasar Seni LRT (New)</li>
                <li className="flex items-center gap-4"><Truck className="text-orange-500 shrink-0"/> MITEC South Entrance ↔ MRT Titiwangsa</li>
              </ul>
            </Card>

            <Card className="p-8 bg-orange-50 border-orange-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Friday Special (19 September 2025)</h3>
              <p className="text-slate-600 mb-4 text-sm">Time: 12:00 PM - 2:00 PM For Friday Prayer</p>
              <div className="flex items-center gap-4 text-slate-800 font-medium">
                <Truck className="text-orange-600 shrink-0"/> MITEC South Entrance ↔ Masjid Wilayah Persekutuan
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

const ProgrammeView = () => {
  const tableData = [
    { time: "08:30 - 20:00", event: "15th Halal Certification Bodies Convention (HCBC) 2025 by JAKIM (Invitation Only)", loc: "Shangri-La Hotel" },
    { time: "10:00 - 18:00", event: "MIHAS 2025 Exhibition", loc: "Halls 2-11" },
    { time: "10:00 - 13:00", event: "MIHAS Knowledge Hub: Power Talk - Halal Meat Importation", loc: "The Gallery Level 1A" },
    { time: "14:00 - 17:00", event: "World Halal Business Conference 2025 by HDC", loc: "Grand Ballroom, Level 3" },
    { time: "10:00 - 18:00", event: "Hosted Buyers Program (INSP)", loc: "Buyer's Lounge, Level 2" },
    { time: "09:00 - 10:00", event: "Opening Ceremony of MIHAS 2025 by YAB Prime Minister", loc: "Grand Ballroom, Level 3" },
    { time: "10:00 - 12:30", event: "MIHAS Awards Ceremony 2025", loc: "Main Stage, Hall 7" },
  ];

  return (
    <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
      <PageHeader title="Show Programme" breadcrumb="Schedule" subtitle="Conferences, talks, and exhibitions happening across 23-26 Sept 2026." />
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base whitespace-nowrap md:whitespace-normal">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold w-1/4">Time</th>
                  <th className="px-6 py-4 font-semibold w-1/2">Events</th>
                  <th className="px-6 py-4 font-semibold w-1/4">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap align-top">{row.time}</td>
                    <td className="px-6 py-4 text-slate-700 align-top">
                      <div className="font-semibold text-slate-900 mb-1">{row.event}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 align-top flex items-start gap-2">
                      <MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      {row.loc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

const DirectoryView = () => (
  <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
    <PageHeader title="e-Directory" breadcrumb="Exhibitors" subtitle="Browse the 2025 Exhibitor List" />
    <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
      <Card className="p-16 border-dashed border-2 bg-slate-50">
         <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
         <h3 className="text-2xl font-bold text-slate-900 mb-2">Directory Search</h3>
         <p className="text-slate-500 mb-8 max-w-md mx-auto">The interactive e-Directory featuring 2,400+ exhibitors will be available closer to the event date.</p>
         <div className="max-w-xl mx-auto flex gap-2">
           <input type="text" placeholder="Search by company name, product or country..." className="flex-1 p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
           <Button>Search</Button>
         </div>
      </Card>
    </div>
  </div>
);

const AwardsView = () => (
  <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
    <PageHeader title="MIHAS Awards" breadcrumb="Recognition" subtitle="Get The Recognition Your Business Deserve" />
    <div className="max-w-7xl mx-auto px-6 mt-12 space-y-12">
      <div className="prose prose-lg max-w-3xl text-slate-700">
        <p>Celebrate excellence in the global halal industry with the prestigious MIHAS Awards! We proudly recognize outstanding achievements by MIHAS Exhibitors, honouring innovation and leadership in halal products, services, and ESG practices.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <Award className="w-12 h-12 text-orange-600 mb-6" />
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Products and Services Excellence Award</h3>
          <p className="text-slate-600 mb-6">Recognises MIHAS exhibitors with significant values in export performance and business recognition, product/service offerings, digitalisation in business and Corporate Social Responsibility (CSR) Initiatives.</p>
          <div className="bg-slate-50 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-4">Prerequisites</h4>
            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Confirmed participation as an exhibitor in MIHAS 2025</li>
              <li>Participated in MIHAS exhibitions at least 5 times since 2016</li>
              <li>Reported average sales &gt; RM1M (Products) / RM500k (Services)</li>
              <li>Registered as a MATRADE Member (for local companies)</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8">
          <Award className="w-12 h-12 text-orange-600 mb-6" />
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation and Sustainability Award</h3>
          <p className="text-slate-600 mb-6">Recognises exhibitors who excel in the halal industry through innovative solutions and integration of sustainability principles into their operations and global value chains.</p>
          <div className="bg-slate-50 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-4">Evaluation Criteria</h4>
            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Innovative Solution Offered in Product/Service Quality</li>
              <li>Design/Appearance, Services Uniqueness</li>
              <li>Global Sustainability Elements (Governance, Reporting)</li>
              <li>Impactful Project in line with UN 17 SDGs</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

const InspView = () => (
  <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
    <PageHeader title="INSP" breadcrumb="Sourcing Programme" subtitle="International Sourcing Programme (INSP) MIHAS" />
    <div className="max-w-5xl mx-auto px-6 mt-12 space-y-12">
      <Card className="p-8 md:p-12">
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="lead text-xl text-slate-900 font-medium mb-8">MATRADE will be organising the International Sourcing Program (INSP) MIHAS in conjunction with the 22nd showcase.</p>
          <p>INSP MIHAS is a demand-driven programme in which MATRADE identifies and matches international buyers with Malaysian exporters through its 49 offices worldwide.</p>
          
          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h4 className="font-bold text-orange-900 mb-2">Virtual Sessions</h4>
              <p className="text-sm text-orange-800">1 April - 5 November 2025</p>
              <p className="text-xs text-orange-700 mt-2">Deadline to register: 5 Nov</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Physical Sessions</h4>
              <p className="text-sm text-slate-800">17 September 2025</p>
              <p className="text-xs text-slate-600 mt-2">Deadline to register: 30 June</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">What you get for RM 120.00:</h3>
          <ul className="space-y-4">
             <li className="flex items-center gap-3"><CheckCircle2 className="text-orange-500 shrink-0"/> One-to-one Business Matching Session via MDT</li>
             <li className="flex items-center gap-3"><CheckCircle2 className="text-orange-500 shrink-0"/> Digital Directory Listing on the platform for enhanced global visibility</li>
          </ul>
        </div>
      </Card>
    </div>
  </div>
);

const VisitorView = ({ subView, setSubView }) => {
  const tabs = [
    { id: 'why-visit', label: 'Why Visit' },
    { id: 'who-should', label: 'Who Should Visit' },
    { id: 'admission', label: 'Admission & Opening Hours' }
  ];

  const categories = [
    { title: "Food", items: ["Meat/Poultry", "Halal Ingredients", "Confectionery", "Frozen Foods", "Dairy Products", "Preserved/Canned Food", "Bakery Products", "Sauces and Paste", "Spices and Condiments"] },
    { title: "Pharmaceuticals & Cosmetics", items: ["Pharmaceuticals", "Medicine", "Vaccine", "Supplements", "Nutraceuticals", "Cosmetics", "Raw Materials", "Personal Care/Wellness"] },
    { title: "Beverage", items: ["Coffee", "Concentrates/Cordials", "Energy Drinks", "Health & Herbal Drinks", "Chocolate", "Juices", "Malt Beverage", "Milk/Dairy Drinks"] },
    { title: "Islamic Finance & Banking", items: ["Commercial", "Takaful", "Financial Technology", "Electronic Banking"] },
    { title: "Manufacturing", items: ["Process technology", "Filling and packaging", "Packing materials", "Labelling Solutions", "Automation data processing", "Safety and Analytics"] },
    { title: "Modest Fashion", items: ["Ready-to-wear", "Footwear", "Accessories", "Textile", "Contract Manufacturers"] }
  ];

  return (
    <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
      <PageHeader title="Visitor" breadcrumb="Attend" subtitle="The World's No.1 Platform for Sourcing Halal Products & Services" />
      <SubNav items={tabs} activeItem={subView} onSelect={setSubView} />
      
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {subView === 'why-visit' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "14 Major Halal Industry Clusters", desc: "Source for Halal products & services across 14 industry clusters" },
              { title: "Meet The Halal Giants", desc: "Meet some of the biggest halal producers from around the world" },
              { title: "Widest Variety of Products", desc: "This showcase assembles over 1.5 million different types of halal products" },
              { title: "Hosted Buyer Programme", desc: "Grab your opportunity to do business with suppliers from around the world" },
              { title: "Conferences & Seminars", desc: "Learn from the ins and outs of the halal sector from industry thought leaders" },
              { title: "MIHAS Connect", desc: "Connect with more than 2,028 exhibition booths from all over the world" }
            ].map((item, i) => (
              <Card key={i} className="p-8">
                <div className="text-4xl font-black text-slate-100 mb-4">#{i+1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        )}

        {subView === 'who-should' && (
          <div className="space-y-8">
            <div className="prose prose-lg text-slate-700 max-w-3xl mb-12">
              <p>From Food & Beverage to Pharmaceuticals to Cosmetics, from Finance to E-commerce and Logistics to Tourism, the entire halal ecosystem meets at MIHAS, offering you an unbeatable platform to network, share market insights and ultimately, add to your bottom-line.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <Card key={i} className="p-6">
                  <h4 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 mb-4">{cat.title}</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {cat.items.map((item, j) => <li key={j} className="flex items-start gap-2"><span className="text-orange-500">•</span> {item}</li>)}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        )}

        {subView === 'admission' && (
          <div className="max-w-4xl space-y-8">
             <Card className="p-8 md:p-12">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Opening Hours</h3>
               <div className="grid md:grid-cols-2 gap-12">
                 <div>
                   <h4 className="font-bold text-orange-600 uppercase tracking-wider mb-2 text-sm">Trade Days</h4>
                   <p className="text-xl font-medium text-slate-900 mb-1">17th - 19th September 2025</p>
                   <p className="text-slate-600">10.00 a.m. - 6.00 p.m.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-orange-600 uppercase tracking-wider mb-2 text-sm">Public Day</h4>
                   <p className="text-xl font-medium text-slate-900 mb-1">20th September 2025</p>
                   <p className="text-slate-600">10.00 a.m. - 6.00 p.m.</p>
                 </div>
               </div>
             </Card>
             <Card className="p-8 md:p-12 bg-slate-900 text-white">
               <h3 className="text-2xl font-bold text-white mb-6">Admission & Dress Code</h3>
               <ul className="space-y-4 text-slate-300">
                 <li className="flex items-start gap-3"><Info className="shrink-0 text-orange-500 mt-1" /> MIHAS is open for visitors above 16 years old only</li>
                 <li className="flex items-start gap-3"><Info className="shrink-0 text-orange-500 mt-1" /> Office Attire / Business Casual. No slippers / sandals, singlets, shorts are allowed.</li>
               </ul>
               <p className="text-xs text-slate-500 mt-8">*The Organiser reserves the right to refuse admission, without prejudice, to visitors who are deemed to be inappropriately dressed.</p>
             </Card>
          </div>
        )}
      </div>
    </div>
  );
};

const ExhibitorView = () => (
  <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
    <PageHeader title="Exhibitor" breadcrumb="Join the Showcase" subtitle="Join the world's largest Halal Showcase: MIHAS 2025 - Hybrid Edition" />
    <div className="max-w-7xl mx-auto px-6 mt-12 space-y-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "The World's Most Comprehensive Halal Showcase", desc: "MIHAS is the leading event for the halal industry. Part of the World Halal Week programme." },
          { title: "Located in the World's #1 Halal Economy", desc: "Malaysia's no.1 ranking provides the perfect backdrop for MIHAS." },
          { title: "World-Record Halal Showcase", desc: "Made history by earning the Guinness World Record for the Largest Attendance at a Halal Trade Show." },
          { title: "The Centre of Growth", desc: "MIHAS 2024 welcomed around 43,353 trade visitors and generated RM4.30 billion for its exhibitors." },
          { title: "Trade Delegations", desc: "Welcomed trade delegations from Singapore, China, Indonesia, Saudi Arabia, South Korea, Thailand." },
          { title: "Booming Halal Sectors", desc: "Delivers opportunities across Halal Food, Islamic Finance, Pharmaceuticals, Cosmetics, Tourism & Logistics." }
        ].map((item, i) => (
          <Card key={i} className="p-8">
            <div className="text-4xl font-black text-slate-100 mb-4">#{i+1}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>

      <Card className="p-12 text-center bg-slate-900 text-white border-slate-800">
        <h2 className="text-3xl font-bold mb-6">Our Figures Tell The Story</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">Over 43,353 trade visitors and 2,028 exhibition booths representing the entire Halal supply chain have attended MIHAS.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "2,028", l: "Exhibition Booths" },
            { v: "43,353", l: "Trade Visitors" },
            { v: "37,499 sqm", l: "Exhibition Space" },
            { v: "14", l: "Industry Clusters" }
          ].map((stat, i) => (
             <div key={i}>
               <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">{stat.v}</div>
               <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{stat.l}</div>
             </div>
          ))}
        </div>
        <Button className="mt-12 mx-auto">Sign Up As An Exhibitor</Button>
      </Card>
    </div>
  </div>
);

const MediaView = ({ subView, setSubView }) => {
  const tabs = [
    { id: 'registration', label: 'Media Registration' },
    { id: 'news', label: 'MIHAS In The News' },
    { id: 'blog', label: 'MIHAS Blog' },
    { id: 'gallery', label: 'Photo Gallery' }
  ];

  const newsData = [
    { date: "15 Sept", title: "Excellence, Innovation and Sustainability Take Centre Stage at MIHAS Awards" },
    { date: "10 Sept", title: "MIHAS 2025 ON TRACK TO HIT RM4.5 BILLION TARGET" },
    { date: "05 Sept", title: "Malaysia Powers Halal Trade Growth With MIHAS Knowledge Hub 2025" },
    { date: "01 Sept", title: "INSP Facilitates Over 4,000 Business Meetings, Targeting RM2.5 billion in Sales" }
  ];

  return (
    <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
      <PageHeader title="Media" breadcrumb="Press & Center" subtitle="Latest updates, blogs, and press materials." />
      <SubNav items={tabs} activeItem={subView} onSelect={setSubView} />
      
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {subView === 'registration' && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-10">
               <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Media Registration Form</h2>
               <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                     <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                   </div>
                   <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                     <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email *</label>
                     <input type="email" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                   </div>
                   <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Your Contact</label>
                     <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Designation</label>
                   <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                 </div>
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                   <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
                 </div>
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                   <textarea rows="4" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500 resize-none"></textarea>
                 </div>
                 <Button className="w-full">Submit Registration</Button>
               </div>
            </Card>
          </div>
        )}

        {subView === 'news' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, i) => (
              <Card key={i} className="flex flex-col h-full group">
                <div className="p-6 flex-1 flex flex-col">
                   <div className="text-sm font-bold text-orange-600 mb-3 flex items-center gap-2">
                     <Calendar size={14}/> {news.date}
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{news.title}</h3>
                   <div className="mt-auto font-semibold text-sm text-slate-500 flex items-center gap-1 group-hover:text-orange-600">
                     Read More <ArrowRight size={16} />
                   </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {subView === 'blog' && (
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <Card className="p-6 text-center text-slate-500 py-20 border-dashed col-span-full">
               <FileText className="w-12 h-12 mx-auto mb-4 text-slate-300" />
               <p>Blog articles will be available soon.</p>
             </Card>
           </div>
        )}

        {subView === 'gallery' && (
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {[1,2,3,4,5,6,7,8].map((img, i) => (
                <div key={i} className="aspect-square bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-slate-300 transition-colors cursor-pointer">
                  <ImageIcon size={32} />
                </div>
             ))}
           </div>
        )}
      </div>
    </div>
  );
};

const ContactView = () => (
  <div className="animate-in fade-in bg-slate-50 min-h-screen pb-20">
    <PageHeader title="Contact" breadcrumb="Get In Touch" subtitle="We would be more than pleased to attend to your queries." />
    <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-900">MIHAS Secretariat</h2>
        <Card className="p-8 space-y-6">
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
               <MapPin className="text-orange-600" />
             </div>
             <div>
               <h4 className="font-bold text-slate-900 mb-1">Address</h4>
               <p className="text-slate-600 text-sm leading-relaxed">A-13-11, Menara The Met, No. 20, Jalan Dutamas 2, 50480 Kuala Lumpur, Malaysia</p>
             </div>
           </div>
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
               <Phone className="text-orange-600" />
             </div>
             <div>
               <h4 className="font-bold text-slate-900 mb-1">Telephone</h4>
               <p className="text-slate-600 text-sm">+603 6211 9973</p>
             </div>
           </div>
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
               <Mic className="text-orange-600" />
             </div>
             <div>
               <h4 className="font-bold text-slate-900 mb-1">Email</h4>
               <p className="text-slate-600 text-sm">enquiry@mihas.com.my</p>
             </div>
           </div>
        </Card>
      </div>

      <Card className="p-8 md:p-10">
         <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Form</h3>
         <div className="space-y-6">
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
               <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
             </div>
             <div>
               <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
               <input type="text" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
             </div>
           </div>
           <div>
             <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email *</label>
             <input type="email" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500" />
           </div>
           <div>
             <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
             <textarea rows="4" className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-orange-500 resize-none"></textarea>
           </div>
           <Button className="w-full">Submit</Button>
         </div>
      </Card>
    </div>
  </div>
);

// --- MAIN APP CONTROLLER ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentSubView, setCurrentSubView] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, currentSubView]);

  const navigate = (view, subView = null) => {
    setCurrentView(view);
    if (subView) {
      setCurrentSubView(subView);
    } else {
      // Set default subviews
      if (view === 'about') setCurrentSubView('overview');
      if (view === 'visitor') setCurrentSubView('why-visit');
      if (view === 'media') setCurrentSubView('registration');
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About MIHAS', defaultSub: 'overview' },
    { id: 'programme', label: 'Show Programme' },
    { id: 'directory', label: 'e-Directory' },
    { id: 'awards', label: 'MIHAS Awards' },
    { id: 'insp', label: 'INSP' },
    { id: 'visitor', label: 'Visitor', defaultSub: 'why-visit' },
    { id: 'exhibitor', label: 'Exhibitor' },
    { id: 'media', label: 'Media', defaultSub: 'registration' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-[72px] md:h-[88px] flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => navigate('home')}
            className="font-black tracking-tighter text-xl md:text-2xl flex items-center gap-3 text-slate-900"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white text-lg md:text-xl shadow-sm">M</div>
            <div>MIHAS <span className="text-orange-500 font-bold hidden sm:inline">2026</span></div>
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.filter(l => l.id !== 'home').map(link => (
              <button 
                key={link.id}
                onClick={() => navigate(link.id, link.defaultSub)}
                className={`font-semibold text-sm px-3 py-2 rounded-lg transition-colors ${
                  currentView === link.id 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)] bg-white overflow-y-auto border-t border-slate-100 flex flex-col">
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => navigate(link.id, link.defaultSub)}
                  className={`p-4 text-left font-bold text-lg rounded-xl transition-colors ${
                    currentView === link.id ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col relative z-0">
        {currentView === 'home' && <HomeView navigate={navigate} />}
        {currentView === 'about' && <AboutView subView={currentSubView} setSubView={setCurrentSubView} />}
        {currentView === 'programme' && <ProgrammeView />}
        {currentView === 'directory' && <DirectoryView />}
        {currentView === 'awards' && <AwardsView />}
        {currentView === 'insp' && <InspView />}
        {currentView === 'visitor' && <VisitorView subView={currentSubView} setSubView={setCurrentSubView} />}
        {currentView === 'exhibitor' && <ExhibitorView />}
        {currentView === 'media' && <MediaView subView={currentSubView} setSubView={setCurrentSubView} />}
        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800 shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="font-black text-white text-2xl mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white text-xl">M</div>
              MIHAS 2026
            </div>
            <p className="mb-6 max-w-sm leading-relaxed">
              The 22nd Malaysia International Halal Showcase. Hosted by MITI, Organised by MATRADE.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><button onClick={() => navigate('visitor')} className="hover:text-orange-400 transition-colors">Trade Visitor</button></li>
              <li><button onClick={() => navigate('exhibitor')} className="hover:text-orange-400 transition-colors">Book a Space</button></li>
              <li><button onClick={() => navigate('insp')} className="hover:text-orange-400 transition-colors">INSP Programme</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 font-medium">
              <li>MITEC, Kuala Lumpur, Malaysia</li>
              <li>enquiry@mihas.com.my</li>
              <li>+603 6211 9973</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 MIHAS. All Rights Reserved.</p>
          <div className="flex gap-6 font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}