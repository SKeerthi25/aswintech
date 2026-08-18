import React, { useState } from 'react';
import { FAQS } from '../data/company';
import { ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onOpenQuoteModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenQuoteModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'cctv' | 'electrical' | 'quote'>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Clear Answers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Everything you need to know about our CCTV security installations, electrical services, service coverage, and quotation process.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-7" />
            <input
              type="text"
              placeholder="Search questions (e.g. Croydon, power sockets, CCTV)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#181a22] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Categories */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'cctv', label: 'CCTV Questions' },
              { id: 'electrical', label: 'Electrical Questions' },
              { id: 'general', label: 'General Info' },
              { id: 'quote', label: 'Quotation & Response' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                    : 'bg-[#181a22] border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-[#14161d] border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-amber-500/30"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-white text-base flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#14161d] rounded-2xl border border-white/10 text-slate-400">
              No matching questions found. Try searching another term or request a quote directly.
            </div>
          )}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-white">Have a Specific Question Not Listed Here?</h2>
          <p className="text-xs text-slate-300">Contact ASWIN TECH LTD directly or request a custom quotation.</p>
          <button
            onClick={onOpenQuoteModal}
            className="bg-amber-500 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl hover:bg-amber-600 transition-all cursor-pointer"
          >
            Ask a Question / Request Quote
          </button>
        </div>
      </section>

    </div>
  );
};
