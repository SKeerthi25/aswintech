import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface FloatingMobileCTAProps {
  onOpenQuoteModal: () => void;
}

export const FloatingMobileCTA: React.FC<FloatingMobileCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0f1115]/95 backdrop-blur-lg border-t border-white/10 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs py-2.5 px-3 rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Call Us</span>
        </a>
        <button
          onClick={onOpenQuoteModal}
          className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
};
