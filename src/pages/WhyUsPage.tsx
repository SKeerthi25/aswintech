import React from 'react';
import { Shield, CheckCircle2, Award, Users, Clock, ThumbsUp, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface WhyUsPageProps {
  onOpenQuoteModal: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Our Key Differentiators
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Why Choose ASWIN TECH LTD
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Providing reliable security camera systems and certified electrical engineering with an unwavering commitment to quality and customer trust.
          </p>
        </div>
      </section>

      {/* 6 Large Visual Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Professional Service',
              badge: 'Certified Technicians',
              desc: 'Polite, punctual engineers who respect your property, wear shoe covers, and maintain immaculate job sites with zero mess.',
              icon: Award
            },
            {
              title: 'Reliable Support',
              badge: 'Ongoing Maintenance',
              desc: 'We do not walk away after installation. We provide full app training, user guidance, and dedicated ongoing maintenance support.',
              icon: Clock
            },
            {
              title: 'Quality Installation',
              badge: 'Commercial-Grade Hardware',
              desc: 'We fit top-spec 4K cameras, heavy-duty metal NVRs, and BS 7671 certified electrical fittings designed to endure.',
              icon: Shield
            },
            {
              title: 'Tailored Solutions',
              badge: 'Custom Engineered',
              desc: 'No generic one-size-fits-all kits. Every camera angle and electrical circuit layout is specifically engineered for your building.',
              icon: Users
            },
            {
              title: 'Residential & Commercial',
              badge: 'Versatile Experience',
              desc: 'Proven capability managing domestic private houses, retail stores, multi-story offices, warehouses, and landlord portfolios.',
              icon: ThumbsUp
            },
            {
              title: 'Customer-Focused Approach',
              badge: '100% Upfront Pricing',
              desc: 'Transparent itemized estimates with zero hidden callout charges or surprise additions. Clear communication every step of the way.',
              icon: CheckCircle2
            }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-[#14161d] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-amber-500/40 transition-all shadow-xl group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 font-mono">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-white">Experience The ASWIN TECH LTD Difference</h2>
          <p className="text-xs sm:text-sm text-slate-300">Get in touch with our team for a free, transparent site survey and quote.</p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
