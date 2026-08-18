import React from 'react';
import { PROCESS_STEPS } from '../data/company';
import { ArrowRight, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

interface OurProcessPageProps {
  onOpenQuoteModal: () => void;
}

export const OurProcessPage: React.FC<OurProcessPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Seamless Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our 6-Step Installation Process
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            From initial consultation to final testing and continuous support, we ensure a transparent, stress-free experience.
          </p>
        </div>
      </section>

      {/* Vertical & Horizontal Visual Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-orange-500 before:to-amber-500">
          
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={step.stepNumber}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Timeline Icon Marker */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#161920] border-2 border-amber-500 text-amber-400 font-mono font-extrabold text-lg shadow-xl shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {step.stepNumber}
                </div>

                {/* Step Card Content */}
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-[#14161d] border border-white/10 p-6 rounded-2xl shadow-xl hover:border-amber-500/40 transition-all space-y-2">
                  <div className="text-xs uppercase font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20 inline-block">
                    Step {step.stepNumber}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    {step.desc}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Process CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-white">Ready Step 01? Contact Us Today</h2>
          <p className="text-xs text-slate-300">Start with a free, no-obligation consultation with our technical team.</p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-amber-500 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl hover:bg-amber-600 transition-all cursor-pointer"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
