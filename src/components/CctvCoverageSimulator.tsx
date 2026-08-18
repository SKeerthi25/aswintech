import React, { useState } from 'react';
import { Camera, ShieldCheck, Eye, Sliders, CheckCircle2, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface CctvCoverageSimulatorProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CctvCoverageSimulator: React.FC<CctvCoverageSimulatorProps> = ({ onOpenQuoteModal }) => {
  const [propertyType, setPropertyType] = useState<'house' | 'retail' | 'office' | 'warehouse'>('house');
  const [cameraCount, setCameraCount] = useState<number>(4);
  const [nightVision, setNightVision] = useState<'colorvu' | 'ir'>('colorvu');
  const [storageDays, setStorageDays] = useState<number>(30);

  const getRecommendation = () => {
    let rec = {
      nvr: '4-Channel 4K NVR with 1TB Surveillance HDD',
      cables: 'Cat6 Shielded Weatherproof PoE Cabling',
      features: ['Remote Smartphone Live Stream', 'Human & Vehicle AI Motion Alerts', 'HDMI Monitor Output', 'IP67 Waterproof Outdoor Metal Casing'],
      estimatedTime: '1 Day Installation',
      popularPackage: 'Croydon Home Security Standard'
    };

    if (cameraCount > 4 || propertyType === 'warehouse' || propertyType === 'office') {
      rec.nvr = '8-Channel or 16-Channel 4K Smart NVR with 2TB-4TB HDD';
      rec.estimatedTime = '1-2 Days Installation';
      rec.popularPackage = 'Commercial / Enterprise Security Package';
    }

    if (nightVision === 'colorvu') {
      rec.features.push('Full-Color 24/7 Night Vision with Warm Auxiliary Lighting');
    } else {
      rec.features.push('Smart IR Night Vision up to 30 meters');
    }

    return rec;
  };

  const rec = getRecommendation();

  return (
    <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-2">
              Interactive Planning Tool
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              CCTV System & Coverage Simulator
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Select your property parameters to generate a custom security layout recommendation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#181a22] px-4 py-2 rounded-xl border border-white/10 shrink-0">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Instant Quote Guidance</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'house', label: 'Home / Villa', desc: '4K Domestic Guards' },
                  { id: 'retail', label: 'Retail Shop', desc: 'POS & Door Coverage' },
                  { id: 'office', label: 'Corporate Office', desc: 'Access & Hallways' },
                  { id: 'warehouse', label: 'Warehouse / Site', desc: 'Perimeter PTZ' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      propertyType === type.id
                        ? 'bg-amber-500/20 border-amber-500 text-white font-bold shadow-md'
                        : 'bg-[#181a22] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="text-sm font-semibold">{type.label}</div>
                    <div className="text-[11px] text-slate-400">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Camera Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Number of Security Cameras
                </label>
                <span className="text-amber-400 font-extrabold text-sm">{cameraCount} Cameras</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[2, 4, 6, 8].map((count) => (
                  <button
                    key={count}
                    onClick={() => setCameraCount(count)}
                    className={`py-2 rounded-xl text-center text-xs font-bold border transition-all ${
                      cameraCount === count
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                        : 'bg-[#181a22] border-white/10 text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {count} Cams
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Night Vision Technology */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Night Vision Preference
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setNightVision('colorvu')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    nightVision === 'colorvu'
                      ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                      : 'bg-[#181a22] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-bold text-amber-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> 24/7 ColorVu (Recommended)
                  </div>
                  <div className="text-[11px] text-slate-400">Full color imagery in pitch dark</div>
                </button>

                <button
                  onClick={() => setNightVision('ir')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    nightVision === 'ir'
                      ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                      : 'bg-[#181a22] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-bold text-slate-200">
                    Smart IR Night Vision
                  </div>
                  <div className="text-[11px] text-slate-400">Standard monochrome IR LEDs</div>
                </button>
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#181a22] border border-amber-500/30 rounded-2xl p-6 h-full flex flex-col justify-between shadow-xl relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">
                    Recommended System Spec
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {rec.estimatedTime}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {cameraCount}x 4K UHD {nightVision === 'colorvu' ? 'ColorVu' : 'Smart IR'} Security System
                  </h4>
                  <div className="text-xs text-amber-300 font-medium">
                    {rec.popularPackage}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="font-semibold text-white">System Highlights:</div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 space-y-1.5 font-mono text-[11px]">
                    <div className="text-slate-300">DVR/NVR: {rec.nvr}</div>
                    <div className="text-slate-300">Cabling: {rec.cables}</div>
                    <div className="text-emerald-400">App: Free iPhone / Android Live Monitoring</div>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {rec.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenQuoteModal(`CCTV Package (${cameraCount} Cams - ${propertyType})`)}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d97706] text-white font-bold py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Request Quote For This Spec</span>
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
