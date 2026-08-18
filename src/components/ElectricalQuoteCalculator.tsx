import React, { useState } from 'react';
import { Zap, Plug, Lightbulb, ShieldCheck, CheckCircle2, ArrowRight, Calculator } from 'lucide-react';

interface ElectricalQuoteCalculatorProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ElectricalQuoteCalculator: React.FC<ElectricalQuoteCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'sockets' | 'lighting' | 'fusebox' | 'repairs'>('sockets');
  
  // Sockets state
  const [socketCount, setSocketCount] = useState<number>(4);
  const [socketType, setSocketType] = useState<'usb' | 'standard' | 'outdoor'>('usb');

  // Lighting state
  const [downlightCount, setDownlightCount] = useState<number>(8);
  const [lightingType, setLightingType] = useState<'led-downlights' | 'track' | 'outdoor-security'>('led-downlights');

  // Fusebox state
  const [consumerUnitType, setConsumerUnitType] = useState<'dual-rcd' | 'rcbo-spd'>('rcbo-spd');

  const getSummary = () => {
    switch (activeTab) {
      case 'sockets':
        return {
          title: `${socketCount}x ${socketType === 'usb' ? 'Smart USB-A/C Double' : socketType === 'outdoor' ? 'IP66 Weatherproof Outdoor' : 'Standard Double'} Sockets`,
          desc: 'Includes spur analysis, backbox fitting, polarity check, and BS7671 safety test.',
          badge: 'Power Socket Package'
        };
      case 'lighting':
        return {
          title: `${downlightCount}x ${lightingType === 'led-downlights' ? 'Fire-Rated LED Downlights' : lightingType === 'outdoor-security' ? 'PIR Security Floodlights' : 'Architectural Track Spots'}`,
          desc: 'Energy efficient LED fittings, ceiling precision cutouts, transformer connections & testing.',
          badge: 'Lighting Solution'
        };
      case 'fusebox':
        return {
          title: `Metal Consumer Unit Upgrade (${consumerUnitType === 'rcbo-spd' ? 'RCBO + Surge Protection SPD' : 'Dual RCD Board'})`,
          desc: 'Includes full bonding verification, circuit labelling, testing, and official Certificate.',
          badge: 'Consumer Unit Board'
        };
      default:
        return {
          title: 'Electrical Fault Finding & Diagnostic Callout',
          desc: 'Professional multi-meter diagnostic tracing, isolating tripping circuits, and minor repairs.',
          badge: 'Repair & Callout'
        };
    }
  };

  const summary = getSummary();

  return (
    <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 inline-block mb-2 flex items-center gap-1.5 w-fit">
              <Zap className="w-3.5 h-3.5" /> Electrical Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Electrical Service & Spec Calculator
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Select your required electrical installation or repair details.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#181a22] px-4 py-2 rounded-xl border border-white/10 shrink-0">
            <Calculator className="w-4 h-4 text-orange-500" />
            <span>BS 7671 Certified Engineers</span>
          </div>
        </div>

        {/* Service Type Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {[
            { id: 'sockets', label: 'Power Sockets', icon: Plug },
            { id: 'lighting', label: 'Lighting Install', icon: Lightbulb },
            { id: 'fusebox', label: 'Fuse Box Upgrade', icon: Zap },
            { id: 'repairs', label: 'Fault & Repairs', icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`p-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white border-orange-500 shadow-lg shadow-orange-500/20'
                    : 'bg-[#181a22] border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Specific Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {activeTab === 'sockets' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Socket Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'usb', label: 'USB Dual Sockets' },
                      { id: 'standard', label: 'Standard Chrome/White' },
                      { id: 'outdoor', label: 'Outdoor IP66 Waterproof' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSocketType(s.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          socketType === s.id
                            ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                            : 'bg-[#181a22] border-white/10 text-slate-400'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                    <span>Number of Sockets to Fit/Replace</span>
                    <span className="text-amber-400">{socketCount} Outlets</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={socketCount}
                    onChange={(e) => setSocketCount(parseInt(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1 Socket</span>
                    <span>6 Sockets</span>
                    <span>12 Sockets</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lighting' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Lighting Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'led-downlights', label: 'LED Downlights' },
                      { id: 'track', label: 'Spotlight Track' },
                      { id: 'outdoor-security', label: 'PIR Floodlights' }
                    ].map((l) => (
                      <button
                        key={l.id}
                        onClick={() => setLightingType(l.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          lightingType === l.id
                            ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                            : 'bg-[#181a22] border-white/10 text-slate-400'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                    <span>Number of Lighting Points</span>
                    <span className="text-amber-400">{downlightCount} Lights</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    step="2"
                    value={downlightCount}
                    onChange={(e) => setDownlightCount(parseInt(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>
              </div>
            )}

            {activeTab === 'fusebox' && (
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Consumer Unit Specification
                </label>
                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => setConsumerUnitType('rcbo-spd')}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      consumerUnitType === 'rcbo-spd'
                        ? 'bg-amber-500/20 border-amber-500 text-white'
                        : 'bg-[#181a22] border-white/10 text-slate-400'
                    }`}
                  >
                    <div className="text-sm font-bold text-amber-400">RCBO Board + Surge Protection Device (SPD)</div>
                    <div className="text-xs text-slate-300 mt-1">Individual circuit RCBO trip protection + lightning/surge protection.</div>
                  </button>

                  <button
                    onClick={() => setConsumerUnitType('dual-rcd')}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      consumerUnitType === 'dual-rcd'
                        ? 'bg-amber-500/20 border-amber-500 text-white'
                        : 'bg-[#181a22] border-white/10 text-slate-400'
                    }`}
                  >
                    <div className="text-sm font-bold text-slate-200">Dual RCD Metal Consumer Unit</div>
                    <div className="text-xs text-slate-400 mt-1">Standard 18th edition dual RCD fuse board upgrade.</div>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'repairs' && (
              <div className="space-y-3 text-xs text-slate-300 bg-[#181a22] p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white text-sm">Common Electrical Issues Handled:</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Tripping Main Switch</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Burning Smell / Arcing</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Flickering Lights</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Dead Sockets</div>
                </div>
              </div>
            )}

          </div>

          {/* Result Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#181a22] border border-amber-500/30 rounded-2xl p-6 h-full flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block">
                  {summary.badge}
                </span>

                <h4 className="text-lg font-bold text-white">
                  {summary.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {summary.desc}
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="font-semibold text-white">Included Standards:</div>
                  <div className="space-y-1 text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Compliant with BS 7671 UK Wiring Regulations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Safety Earth Bonding & Polarity Verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Full Workmanship Guarantee Included</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-4">
                <button
                  onClick={() => onOpenQuoteModal(`Electrical Spec: ${summary.title}`)}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Request Electrical Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
