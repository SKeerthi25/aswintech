import React from 'react';
import { INDUSTRIES } from '../data/company';
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface IndustriesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Tailored Sector Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Industries We Protect & Serve
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Customized CCTV surveillance and electrical solutions designed to address the distinct requirements of residential, retail, office, and commercial properties.
          </p>
        </div>
      </section>

      {/* 10 Industry Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div key={ind.id} className="bg-[#14161d] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-slate-950/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-extrabold text-white">
                    {ind.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {ind.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="bg-[#181a22] p-3 rounded-xl border border-white/5 space-y-1.5">
                      <div className="font-bold text-red-400">Sector Challenges</div>
                      <ul className="space-y-1 text-slate-400">
                        {ind.challenges.map((c, i) => (
                          <li key={i}>• {c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#181a22] p-3 rounded-xl border border-amber-500/20 space-y-1.5">
                      <div className="font-bold text-amber-400">ASWIN Solutions</div>
                      <ul className="space-y-1 text-slate-200">
                        {ind.solutions.map((s, i) => (
                          <li key={i}>✓ {s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(`Industry Spec: ${ind.title}`)}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-bold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote For {ind.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
