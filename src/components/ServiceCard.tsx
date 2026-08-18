import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ShieldCheck, Wrench, Cpu, Home, Building2, Zap, Plug, CheckCircle2, AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenQuoteModal: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenQuoteModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Camera': return Camera;
      case 'ShieldCheck': return ShieldCheck;
      case 'Wrench': return Wrench;
      case 'Cpu': return Cpu;
      case 'Home': return Home;
      case 'Building2': return Building2;
      case 'Zap': return Zap;
      case 'Plug': return Plug;
      case 'CheckCircle2': return CheckCircle2;
      case 'AlertTriangle': return AlertTriangle;
      case 'Shield': return Shield;
      default: return Camera;
    }
  };

  const IconComponent = getIcon(service.iconName);
  const isCctv = service.category === 'cctv';

  return (
    <div className="bg-[#14161d] border border-white/10 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group flex flex-col justify-between relative overflow-hidden">
      
      {/* Subtle top indicator bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
        isCctv ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-orange-500 to-amber-400'
      }`} />

      {/* Badge if present */}
      {service.badge && (
        <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
          {service.badge}
        </span>
      )}

      <div>
        {/* Icon & Category */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#1d202b] border border-white/10 group-hover:border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:bg-amber-500/10 transition-all shadow-inner">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              {isCctv ? 'Security Solution' : 'Electrical Service'}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Key Features bullet list */}
        <ul className="space-y-2 mb-6 text-xs text-slate-400">
          {service.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span className="truncate">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
        <Link
          to={`/services/${service.id}`}
          className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={() => onOpenQuoteModal(service.title)}
          className="bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-semibold px-3 py-1.5 rounded-lg border border-white/10 transition-all cursor-pointer"
        >
          Quote
        </button>
      </div>

    </div>
  );
};
