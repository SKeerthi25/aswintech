import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/company';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'cctv' | 'electrical'>('all');

  const filteredServices = SERVICES_LIST.filter(
    (s) => filter === 'all' || s.category === filter
  );

  return (
    <div className="space-y-16 pb-16">
      
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Comprehensive Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Security & Electrical Services
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Explore our complete range of certified CCTV surveillance systems and professional electrical engineering services.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex justify-center gap-2">
            {[
              { id: 'all', label: 'All Services (11)' },
              { id: 'cctv', label: 'CCTV Solutions' },
              { id: 'electrical', label: 'Electrical Work' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  filter === tab.id
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                    : 'bg-[#181a22] border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onOpenQuoteModal={onOpenQuoteModal} 
            />
          ))}
        </div>
      </section>

    </div>
  );
};
