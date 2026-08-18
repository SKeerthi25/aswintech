import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface ServiceAreaPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ onOpenQuoteModal }) => {
  const [postcode, setPostcode] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const primaryPostcodes = ['CR0', 'CR2', 'CR7', 'CR8', 'SM1', 'SM2', 'BR1', 'BR2', 'SE19', 'SE25', 'SW16'];

  const handleCheckPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcode.toUpperCase().trim();
    if (!clean) return;

    const matches = primaryPostcodes.some(p => clean.startsWith(p));

    if (matches || clean.startsWith('CR') || clean.startsWith('SM') || clean.startsWith('SE') || clean.startsWith('BR') || clean.startsWith('SW')) {
      setSearchResult(`✅ Yes! Postcode area "${clean}" is fully covered by ASWIN TECH LTD for both CCTV and Electrical services.`);
    } else {
      setSearchResult(`ℹ️ "${clean}" is outside our primary South London core area, but we regularly cover surrounding UK locations. Contact us for confirmation.`);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Coverage Verification
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Croydon & South London Service Area
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Based at 17 Tavistock Court, Croydon (CR0 2AL), ASWIN TECH LTD provides fast-response CCTV installations and certified electrical work across local postcodes.
          </p>
        </div>
      </section>

      {/* Postcode Lookup Tool */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Check Service Availability For Your Postcode</h2>
            <p className="text-xs text-slate-400">Enter your UK postcode below to verify immediate service coverage.</p>
          </div>

          <form onSubmit={handleCheckPostcode} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="e.g. CR0 2AL or CR8 2AA"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="flex-1 bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white uppercase text-sm focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer"
            >
              Check Coverage
            </button>
          </form>

          {searchResult && (
            <div className="p-4 rounded-xl bg-[#181a22] border border-white/10 text-xs text-slate-200 animate-in fade-in duration-200">
              {searchResult}
            </div>
          )}
        </div>
      </section>

      {/* Covered Regions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Primary Towns & Boroughs Served</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
          {COMPANY_DETAILS.serviceAreas.map((area, idx) => (
            <div key={idx} className="bg-[#14161d] border border-white/10 rounded-2xl p-5 hover:border-amber-500/40 transition-all space-y-2">
              <MapPin className="w-5 h-5 text-amber-500 mx-auto" />
              <div className="font-bold text-white text-sm">{area}</div>
              <div className="text-[10px] text-slate-400">Full Coverage</div>
            </div>
          ))}
        </div>
      </section>

      {/* Map visual card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white">Croydon Headquarters Hub</h3>
            <p className="text-xs text-slate-300">17 Tavistock Court, Tavistock Road, Croydon CR0 2AL, UK</p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Croydon Site Survey')}
            className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-lg cursor-pointer"
          >
            Book a Croydon Site Visit
          </button>
        </div>
      </section>

    </div>
  );
};
