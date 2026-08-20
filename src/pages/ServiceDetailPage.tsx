import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Camera, Zap, CheckCircle2, ArrowRight, Phone, ShieldCheck, Wrench, ChevronRight, HelpCircle } from 'lucide-react';
import { SERVICES_LIST, COMPANY_DETAILS } from '../data/company';
import { SafeImage } from '../components/SafeImage';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = SERVICES_LIST.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES_LIST.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Service Hero */}
      <section className="bg-[#12141a] border-b border-white/10 py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-amber-400">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-400 font-bold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
                {service.category === 'cctv' ? 'CCTV Security Solution' : 'Electrical Service'}
              </span>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Quote For {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/10 text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                <SafeImage 
                  src={service.image} 
                  alt={service.title} 
                  categoryTitle={service.title}
                  fallbackType={service.category === 'cctv' ? 'cctv' : 'electrical'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-400">{service.title} Specialists</div>
                  <div>Croydon, South London & Surrounding Postcodes</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Detail Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Key Benefits */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-white">Key Service Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-[#14161d] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Is Included */}
            <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-extrabold text-white">What Is Included</h2>
              <ul className="space-y-3">
                {service.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-By-Step Process */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-white">Our Installation Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="bg-[#14161d] border border-white/10 rounded-xl p-4 space-y-1">
                    <div className="text-xs font-mono font-bold text-amber-400">Step 0{idx + 1}</div>
                    <div className="font-bold text-white text-base">{step.title}</div>
                    <div className="text-xs text-slate-400">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQs */}
            {service.faqs.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-[#14161d] border border-white/10 rounded-xl p-5 space-y-2">
                      <div className="font-bold text-white text-sm">{faq.question}</div>
                      <div className="text-xs text-slate-300 leading-relaxed">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Quote Card */}
            <div className="bg-[#14161d] border border-amber-500/40 rounded-2xl p-6 space-y-4 shadow-xl sticky top-24">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> ASWIN TECH Guarantee
              </div>

              <h3 className="font-extrabold text-xl text-white">
                Need {service.title}?
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our Croydon technical team today for a free site assessment and upfront quote.
              </p>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] text-white font-bold py-3 rounded-xl shadow-lg text-sm cursor-pointer"
                >
                  Get a Free Quote
                </button>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl border border-white/10 text-xs flex items-center justify-center gap-2 text-center block"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
                <div>✓ Professional certified engineers</div>
                <div>✓ Clean concealed wiring guarantee</div>
                <div>✓ Local Croydon & South London coverage</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Related Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-12">
        <h3 className="text-xl font-bold text-white mb-6">Related Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/services/${rel.id}`}
              className="bg-[#14161d] border border-white/10 rounded-2xl p-5 hover:border-amber-500/40 transition-all space-y-2 group block"
            >
              <div className="text-xs font-mono text-amber-400 font-bold uppercase">{rel.category}</div>
              <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">{rel.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-2">{rel.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
