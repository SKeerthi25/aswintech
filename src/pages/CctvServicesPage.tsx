import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ShieldCheck, Eye, Wifi, Video, CheckCircle2, ArrowRight, Phone, RefreshCcw, Lock } from 'lucide-react';
import { SERVICES_LIST } from '../data/company';
import { CctvCoverageSimulator } from '../components/CctvCoverageSimulator';

interface CctvServicesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CctvServicesPage: React.FC<CctvServicesPageProps> = ({ onOpenQuoteModal }) => {
  const cctvServices = SERVICES_LIST.filter(s => s.category === 'cctv');

  const cctvCategories = [
    { title: 'CCTV Installation', desc: 'Complete 4K IP or HD CCTV setup for home or business.' },
    { title: 'Camera Replacement', desc: 'Swap faulty or blurry lens units with modern sensors.' },
    { title: 'System Upgrades', desc: 'Convert old analog coaxial lines into smart 4K networks.' },
    { title: 'CCTV Maintenance', desc: 'Annual lens cleaning, hard drive checks & firmware updates.' },
    { title: 'CCTV Troubleshooting', desc: 'Fix offline feeds, black screens, power and video faults.' },
    { title: 'Indoor CCTV', desc: 'Discreet dome cameras for hallways, reception & stockrooms.' },
    { title: 'Outdoor CCTV', desc: 'Weatherproof IP67 turret cameras with ColorVu night vision.' },
    { title: 'Commercial CCTV', desc: 'Multi-site central NVR monitoring for shops, offices & sites.' },
    { title: 'Residential CCTV', desc: 'Home driveway, back garden & entrance guard kits.' },
    { title: 'Remote Monitoring', desc: 'Live iPhone & Android smartphone app push alerts.' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Smart Security Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            High-Definition CCTV Services & Solutions
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            From 4K Ultra HD installations and camera repairs to 24/7 ColorVu night vision and remote smartphone access across Croydon & South London.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal('CCTV Installation')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg text-sm cursor-pointer"
            >
              Request CCTV Installation Quote
            </button>
          </div>
        </div>
      </section>

      {/* 10 Detailed Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Complete CCTV Capabilities</h2>
          <p className="text-slate-400 text-sm">Engineered for total perimeter coverage and crystal-clear recording.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {cctvCategories.map((cat, i) => (
            <div key={i} className="bg-[#14161d] border border-white/10 rounded-2xl p-5 hover:border-amber-500/40 transition-all space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-white text-sm">{cat.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CctvCoverageSimulator onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* CCTV Service Cards Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cctvServices.map((srv) => (
            <div key={srv.id} className="bg-[#14161d] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded font-mono">4K UHD Spec</span>
              </div>
              <p className="text-sm text-slate-300">{srv.fullDesc}</p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <Link to={`/services/${srv.id}`} className="text-amber-400 font-bold hover:underline">
                  Full Service Page →
                </Link>
                <button
                  onClick={() => onOpenQuoteModal(srv.title)}
                  className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded"
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
