import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Camera, Zap, Phone, Mail, Shield, Menu, X, ChevronDown, 
  MapPin, CheckCircle2, ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/company';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'CCTV Solutions', path: '/cctv-solutions' },
    { name: 'Electrical Services', path: '/electrical-services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#12141a] border-b border-white/5 text-xs py-2 px-4 text-slate-300 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              <Shield className="w-3.5 h-3.5" /> Professional • Reliable • Responsive
            </span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 inline" /> Croydon, South London & Surrounding Areas
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`} 
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f1115]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3' 
          : 'bg-[#0f1115] border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="ASWIN TECH LTD Logo" 
                onError={(e) => (e.currentTarget.style.display = 'none')}
                className="w-11 h-11 object-contain rounded-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-500/30 bg-[#12141a]" 
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  ASWIN TECH <span className="text-amber-500 font-normal text-sm">LTD</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                  CCTV & Electrical Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                          isActive(link.path) 
                            ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20' 
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="bg-[#161920] border border-white/10 rounded-xl shadow-2xl p-3 grid gap-1">
                            <div className="px-3 py-1.5 text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-white/5 mb-1">
                              <Camera className="w-3.5 h-3.5" /> All Services & Solutions
                            </div>
                            {SERVICES_LIST.slice(0, 8).map((srv) => (
                              <Link
                                key={srv.id}
                                to={`/services/${srv.id}`}
                                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 flex items-center justify-between group transition-colors"
                              >
                                <span>{srv.title}</span>
                                <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            ))}
                            <div className="pt-2 border-t border-white/5 mt-1 text-center">
                              <Link 
                                to="/services" 
                                className="text-xs text-amber-400 hover:underline font-semibold block py-1"
                              >
                                View All 11 Services →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d97706] text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenQuoteModal}
                className="sm:hidden bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-800/80 text-slate-200 hover:text-amber-400 hover:bg-slate-800 transition-colors border border-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12141a] border-b border-white/10 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top duration-300 shadow-2xl">
            <div className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto pr-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive(link.path)
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold'
                      : 'text-slate-200 hover:bg-white/5 hover:text-amber-400'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-center"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-3 px-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
