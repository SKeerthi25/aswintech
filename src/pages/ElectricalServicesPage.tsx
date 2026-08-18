import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Plug, Lightbulb, CheckCircle2, ArrowRight, ShieldCheck, Wrench, Building2, Home } from 'lucide-react';
import { SERVICES_LIST } from '../data/company';

interface ElectricalServicesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ElectricalServicesPage: React.FC<ElectricalServicesPageProps> = ({ onOpenQuoteModal }) => {
  const electricalServices = SERVICES_LIST.filter(s => s.category === 'electrical');

  const electricalFeatures = [
    { title: 'Lighting Installation', desc: 'Downlights, pendants, and architectural ambient lighting.' },
    { title: 'LED Lighting Upgrades', desc: 'Cut energy costs by up to 85% with long-life LED technology.' },
    { title: 'Indoor Lighting', desc: 'Kitchen spotlights, bathroom IP-rated lights & dimmers.' },
    { title: 'Outdoor Lighting', desc: 'Garden pathway lights, spike spots & architectural highlights.' },
    { title: 'Security Lighting', desc: 'PIR motion-activated dusk-to-dawn floodlights.' },
    { title: 'Power Socket Installation', desc: 'New double sockets, spur additions & heavy-duty points.' },
    { title: 'Socket Replacement', desc: 'Upgrade worn faceplates to USB-A / USB-C smart outlets.' },
    { title: 'Switch Installation', desc: 'Touch dimmers, 2-way switches & smart home switches.' },
    { title: 'Electrical Repairs', desc: 'Fast diagnostic isolation of tripping breakers & arcing.' },
    { title: 'Electrical Maintenance', desc: 'EICR safety certificates, PAT testing & periodic checks.' },
    { title: 'Commercial Electrical', desc: 'Office trunking, 3-phase power & emergency exit lights.' },
    { title: 'Residential Electrical', desc: 'Consumer unit upgrades, full/partial house rewires.' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20 inline-block flex items-center gap-1.5 w-fit mx-auto">
            <Zap className="w-3.5 h-3.5" /> Certified Electrical Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Electrical Installation, Lighting & Repairs
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            BS 7671 certified electrical services for Croydon homes and commercial properties. From power socket upgrades to full fuse board replacements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal('Electrical Installation')}
              className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-extrabold px-6 py-3 rounded-xl shadow-lg text-sm cursor-pointer"
            >
              Request Electrical Quote
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Electrical Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Full Range of Electrical Services</h2>
          <p className="text-slate-400 text-sm">Executing every job to stringent UK safety and wiring standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {electricalFeatures.map((item, idx) => (
            <div key={idx} className="bg-[#14161d] border border-white/10 rounded-2xl p-5 hover:border-orange-500/40 transition-all space-y-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-xs">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Electrical Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {electricalServices.map((srv) => (
            <div key={srv.id} className="bg-[#14161d] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                <span className="text-xs text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded font-mono">BS 7671</span>
              </div>
              <p className="text-sm text-slate-300">{srv.fullDesc}</p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <Link to={`/services/${srv.id}`} className="text-orange-400 font-bold hover:underline">
                  Full Service Details →
                </Link>
                <button
                  onClick={() => onOpenQuoteModal(srv.title)}
                  className="bg-orange-500 text-slate-950 font-bold px-3 py-1.5 rounded"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
