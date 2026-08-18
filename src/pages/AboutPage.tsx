import React from 'react';
import { Shield, CheckCircle2, ArrowRight, Phone, Award, Users, Target, HeartHandshake, Lock } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            About ASWIN TECH LTD
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Who We Are
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            A trusted Croydon-based technology company specializing in high-end CCTV surveillance systems, security cameras, and certified electrical services.
          </p>
        </div>
      </section>

      {/* Main Narrative & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              Dependable Security & Certified Electrical Engineering
            </h2>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              At <strong className="text-white">ASWIN TECH LTD</strong>, we believe every property—whether a cozy family home in Purley or a busy retail store in Croydon High Street—deserves uncompromised security and safe electrical wiring.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Our team provides end-to-end services ranging from 4K IP smart camera installations with mobile phone remote viewing to fuse box replacements, energy-efficient LED downlighting, and commercial electrical troubleshooting.
            </p>

            {/* Mission Box */}
            <div className="bg-[#14161d] border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="text-xs uppercase font-mono font-bold text-amber-400 mb-2">Our Core Mission</div>
              <blockquote className="text-lg font-semibold text-white italic">
                "{COMPANY_DETAILS.mission}"
              </blockquote>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-bold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt="ASWIN TECH LTD Engineer" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs">
                <div className="font-bold text-amber-400">Croydon Headquarters</div>
                <div className="text-slate-300">17 Tavistock Court, Tavistock Road, CR0 2AL</div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Our 4-Step Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Methodology
          </span>
          <h2 className="text-3xl font-extrabold text-white">Our 4-Step Approach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Understand', desc: 'We take the time to listen to your property layout, budget, and specific security or electrical needs.' },
            { step: '02', title: 'Plan', desc: 'We engineer an exact equipment placement plan, cable route, and clear itemized quote.' },
            { step: '03', title: 'Install', desc: 'Our technicians execute clean, immaculate installation with zero mess or visible cable clutter.' },
            { step: '04', title: 'Support', desc: 'We configure your phone apps, demonstrate full system usage, and provide ongoing maintenance support.' }
          ].map((item) => (
            <div key={item.step} className="bg-[#14161d] border border-white/10 rounded-2xl p-6 space-y-3 relative">
              <div className="text-3xl font-mono font-extrabold text-amber-500">{item.step}</div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Core Company Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-white">Company Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COMPANY_DETAILS.values.map((val, i) => (
              <div key={i} className="bg-[#181a22] border border-white/10 rounded-2xl p-5 space-y-2 hover:border-amber-500/30 transition-all text-center">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto font-bold text-sm">
                  ✓
                </div>
                <h3 className="font-bold text-white text-base">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
