import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Zap, Phone, Mail, MapPin, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0d11] text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="ASWIN TECH LTD Logo" 
                className="w-11 h-11 object-contain rounded-xl shadow-lg shadow-amber-500/20 border border-amber-500/30 bg-[#12141a]" 
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  ASWIN TECH <span className="text-amber-500 font-normal text-sm">LTD</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                  CCTV & Electrical Services
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              {COMPANY_DETAILS.subtitle} Dedicated to safeguarding properties and providing dependable, safe electrical engineering solutions across Croydon and South London.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-amber-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>Certified UK CCTV & Electrical Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>17 Tavistock Court, Tavistock Road, Croydon CR0 2AL, UK</span>
              </div>
            </div>
          </div>

          {/* Col 2: Company Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full inline-block"></span>
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/our-process" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: CCTV Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-amber-500" />
              CCTV Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/cctv-installation" className="hover:text-amber-400 transition-colors">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link to="/services/cctv-maintenance" className="hover:text-amber-400 transition-colors">
                  CCTV Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/cctv-repair" className="hover:text-amber-400 transition-colors">
                  CCTV Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/cctv-upgrades" className="hover:text-amber-400 transition-colors">
                  CCTV System Upgrades
                </Link>
              </li>
              <li>
                <Link to="/services/residential-cctv" className="hover:text-amber-400 transition-colors">
                  Residential CCTV
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-cctv" className="hover:text-amber-400 transition-colors">
                  Commercial CCTV
                </Link>
              </li>
              <li>
                <Link to="/cctv-solutions" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-400/90 font-medium pt-1">
                  CCTV Diagrams & Solutions <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Electrical & Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              Electrical Services
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link to="/services/lighting-installation" className="hover:text-amber-400 transition-colors">
                  Lighting Installation
                </Link>
              </li>
              <li>
                <Link to="/services/power-socket-installation" className="hover:text-amber-400 transition-colors">
                  Power Socket Installation
                </Link>
              </li>
              <li>
                <Link to="/services/electrical-installation" className="hover:text-amber-400 transition-colors">
                  Electrical Installation
                </Link>
              </li>
              <li>
                <Link to="/services/electrical-repairs" className="hover:text-amber-400 transition-colors">
                  Electrical Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/electrical-maintenance" className="hover:text-amber-400 transition-colors">
                  Electrical Maintenance
                </Link>
              </li>
            </ul>

            <div className="pt-2 border-t border-white/10">
              <div className="text-xs uppercase font-semibold text-slate-400 mb-2">Direct Contact</div>
              <a 
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="text-white font-bold text-base hover:text-amber-400 transition-colors flex items-center gap-2 mb-1"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                {COMPANY_DETAILS.phone}
              </a>
              <a 
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="text-xs text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">{COMPANY_DETAILS.name}</span>. All rights reserved. Registered in England & Wales.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-amber-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/cookies" className="hover:text-amber-400 transition-colors">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="hover:text-amber-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
