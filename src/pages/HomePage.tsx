import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Camera, Zap, CheckCircle2, ArrowRight, Phone, Mail, 
  MapPin, Clock, Award, Star, AlertTriangle, ChevronDown, ChevronUp, Check, X
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST, PROCESS_STEPS, INDUSTRIES, PROJECTS, FAQS, CUSTOMER_REVIEWS } from '../data/company';
import { HeroVisual } from '../components/HeroVisual';
import { ServiceCard } from '../components/ServiceCard';
import { CctvCoverageSimulator } from '../components/CctvCoverageSimulator';

interface HomePageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 lg:pt-16 pb-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge Indicator */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-inner">
                <Shield className="w-4 h-4 text-amber-500" />
                <span>Professional • Reliable • Responsive</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Smart Security. <br />
                <span className="gradient-text-orange">Reliable Electrical Solutions.</span>
              </h1>

              {/* Supporting Subtext */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Professional CCTV installation and complete electrical services for homes and businesses across <strong className="text-white">Croydon</strong> and surrounding South London areas.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d97706] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-[#181a22] hover:bg-[#202430] text-slate-200 hover:text-white font-bold text-base px-7 py-4 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Key Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-400 font-medium max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>BS 7671 Electrical</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>4K Smart CCTV</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Zero Hidden Fees</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>


      {/* ================= SERVICES OVERVIEW SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Our Core Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Complete Security & Electrical Solutions
          </h2>
          <p className="text-slate-300 text-sm">
            High-grade CCTV installation, camera maintenance, security upgrades, lighting design, socket fitting, and certified electrical engineering.
          </p>
        </div>

        {/* 8 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.slice(0, 8).map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onOpenQuoteModal={onOpenQuoteModal} 
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#181a22] hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold px-6 py-3 rounded-xl border border-white/10 transition-all text-sm"
          >
            <span>View All 11 Comprehensive Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* ================= INTERACTIVE CCTV COVERAGE SIMULATOR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CctvCoverageSimulator onOpenQuoteModal={onOpenQuoteModal} />
      </section>


      {/* ================= TRADITIONAL VS SMART CCTV COMPARISON ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Technology Upgrade
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Traditional Security vs Smart CCTV Security
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              See why upgrading to modern 4K ColorVu CCTV with ASWIN TECH LTD provides superior protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Column */}
            <div className="bg-[#181a22] border border-red-500/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="font-bold text-lg text-slate-300">Traditional Security Systems</h3>
                <span className="text-xs bg-red-500/10 text-red-400 px-2.5 py-0.5 rounded border border-red-500/20 font-bold">Outdated</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Grainy black-and-white night vision with poor face details</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>High monthly cloud subscription fees per camera</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Frequent false alerts from rain, pets, or blowing trees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No live mobile access or sluggish app connectivity</span>
                </li>
              </ul>
            </div>

            {/* Smart CCTV Column */}
            <div className="bg-[#181a22] border border-amber-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="font-bold text-lg text-white">ASWIN TECH LTD Smart CCTV</h3>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded border border-amber-500/30 font-bold">Next-Gen Spec</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>4K UHD & 24/7 ColorVu:</strong> Full color footage in dark environments</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Subscriptions:</strong> Local high-capacity hard drive storage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>AI Human & Vehicle Detection:</strong> Accurate push notifications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Instant Mobile Live View:</strong> Watch live feeds anytime from iPhone/Android</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenQuoteModal('CCTV System Upgrade')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg cursor-pointer"
            >
              Request CCTV Installation Quote
            </button>
          </div>
        </div>
      </section>




      {/* ================= OUR 6-STEP PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Clear Workflow
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Our 6-Step Installation Process
          </h2>
          <p className="text-slate-400 text-sm">
            From initial consultation to final testing and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.stepNumber}
              className="bg-[#14161d] border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-extrabold text-amber-500/40 group-hover:text-amber-400 transition-colors">
                  {step.stepNumber}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                  Phase {step.stepNumber}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 font-medium mb-2">
                {step.desc}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Why Partner With ASWIN TECH LTD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Built On Quality, Trust & Professional Standards
            </h2>
            <p className="text-slate-300 text-sm">
              We focus strictly on authentic customer satisfaction, clean cabling, transparent itemized pricing, and robust equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Professional Service', desc: 'Certified technicians committed to neat cabling, polite communication, and clean work environments.' },
              { title: 'Reliable Support', desc: 'Dedicated post-installation assistance, user training, and maintenance servicing when required.' },
              { title: 'Quality Installation', desc: 'Commercial-grade cameras, heavy-duty electrical fittings, and concealed wiring finishes.' },
              { title: 'Tailored Solutions', desc: 'Custom engineered security layouts and electrical specs designed for your exact property.' },
              { title: 'Residential & Commercial', desc: 'Proven expertise handling both domestic private homes and commercial business sites.' },
              { title: 'Customer-Focused Approach', desc: 'Transparent upfront quotes with zero hidden extras or surprise callout charges.' }
            ].map((card, i) => (
              <div key={i} className="bg-[#181a22] border border-white/10 rounded-2xl p-6 space-y-2 hover:border-amber-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-white text-base">{card.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= FEATURED PROJECTS PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Work Portfolio
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Featured Recent Installations
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-amber-400 hover:text-amber-300 font-bold text-sm flex items-center gap-1.5"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((proj) => (
            <div key={proj.id} className="bg-[#14161d] border border-white/10 rounded-2xl overflow-hidden group hover:border-amber-500/40 transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] uppercase font-bold px-2.5 py-1 rounded border border-white/10">
                  {proj.categoryLabel}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{proj.location}</span>
                </div>
                <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors leading-snug">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {proj.shortDesc}
                </p>
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {proj.servicesProvided.map((s, i) => (
                    <span key={i} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= EMERGENCY / URGENT HELP BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1b1e28] via-[#161922] to-[#12141a] border border-amber-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Urgent Technical Assistance
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Help With Your CCTV or Electrical System?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Contact our Croydon engineering team directly to discuss your urgent requirements or arrange an prompt site visit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call 07468 602458</span>
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl border border-white/10 transition-all text-center text-sm"
            >
              Contact ASWIN TECH LTD
            </Link>
          </div>
        </div>
      </section>


      {/* ================= CUSTOMER REVIEWS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Verified Feedback
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Structured customer reviews reflecting our quality standards across South London.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-[#14161d] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                    ✓ Verified Client
                  </span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-xs">
                {rev.author && <div className="font-bold text-white">{rev.author}</div>}
                <div className="text-slate-400 text-[11px]">{rev.serviceType} • {rev.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= SERVICE AREA SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Coverage Region
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Serving Croydon, South London & Surrounding Areas
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Based at 17 Tavistock Court, Croydon (CR0 2AL), ASWIN TECH LTD provides prompt site visits, emergency fault finding, and complete installations across all local postcodes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs pt-2">
              {COMPANY_DETAILS.serviceAreas.map((area, i) => (
                <div key={i} className="bg-[#181a22] p-2.5 rounded-xl border border-white/5 text-slate-200 font-medium flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#181a22] border border-white/10 rounded-2xl p-6 text-center space-y-4 relative overflow-hidden">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Croydon HQ Hub</h3>
                <p className="text-xs text-slate-400">17 Tavistock Court, Tavistock Road, Croydon CR0 2AL</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/service-area"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:underline"
                >
                  <span>Check Postcode Coverage Details →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FAQS ACCORDION SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 6).map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-[#14161d] border border-white/10 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/faqs" className="text-xs font-bold text-amber-400 hover:underline">
            View All Frequently Asked Questions →
          </Link>
        </div>
      </section>


      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden space-y-6">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Security or Electrical System?
            </h2>
            <p className="text-amber-100 text-sm sm:text-base">
              Contact ASWIN TECH LTD today for a free, transparent quote and site assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer text-base"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-base border border-white/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call 07468 602458</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
