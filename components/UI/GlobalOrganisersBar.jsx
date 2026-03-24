import React from 'react';
import Image from 'next/image';

const GlobalOrganisersBar = () => {
    const organisers = [
        { label: "Hosted by", logo: "/images/organisers/miti.jpeg", width: 120, height: 60 },
        { label: "Organised by", logo: "/images/organisers/matrade.png", width: 168, height: 48 },
        { 
            label: "In Association with", 
            logos: [
                { src: "/images/organisers/hdc.png", width: 72, height: 48 },
                { src: "/images/organisers/jakim.png", width: 72, height: 48 }
            ] 
        },
        { label: "Managed by", logo: "/images/organisers/es.png", width: 96, height: 48 },
        { label: "Winner of", logo: "/images/organisers/wtpo-award.png", width: 144, height: 48 }
    ];

    const supportedBy = [
        { name: "ASEAN Malaysia 2025", logo: "/images/organisers/asean-malaysia-2025.jpeg" },
        { name: "Malaysia Madani", logo: "/images/organisers/malaysia-madani.png" },
        { name: "Malaysian Convention", logo: "/images/organisers/malaysian-convention.jpeg" },
        { name: "Visit Malaysia 2026", logo: "/images/organisers/visit-malaysia-2026.jpeg" },
        { name: "Meet in Malaysia", logo: "/images/organisers/meet-in-malaysia.jpeg" },
        { name: "FAMA", logo: "/images/organisers/fama.jpeg" },
        { name: "Islamic Tourism Centre", logo: "/images/organisers/islamic-tourism.png" },
        { name: "PDRM", logo: "/images/organisers/pdrm-police.jpeg" },
        { name: "PERKESO", logo: "/images/organisers/perkeso.png" },
        { name: "MYFutureJobs", logo: "/images/organisers/my-future-jobs.png" }
    ];

    return (
        <div className="bg-white py-12 border-t border-slate-200 shrink-0 mt-auto">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Row: Hosted, Organised, Assoc, Managed, Winner */}
                <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-10 mb-12 text-center">
                    {organisers.map((org, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{org.label}</div>
                            {org.logos ? (
                                <div className="flex items-center gap-4">
                                    {org.logos.map((logo, j) => (
                                        <React.Fragment key={j}>
                                            <Image src={logo.src} alt="Association Logo" width={logo.width} height={logo.height} className="h-12 w-auto object-contain" />
                                            {j < org.logos.length - 1 && <span className="text-slate-200 text-lg">|</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            ) : (
                                <Image src={org.logo} alt={org.label} width={org.width} height={org.height} className="h-14 w-auto object-contain" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Supported by, In Support of */}
                <div className="space-y-10">
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Supported by</div>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
                            {supportedBy.map((item, i) => (
                                <Image key={i} src={item.logo} alt={item.name} width={120} height={48} className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">In Support of</div>
                        <Image src="/images/organisers/islamic-tourism-month-2025.png" alt="In Support of" width={144} height={60} className="h-12 w-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GlobalOrganisersBar;
