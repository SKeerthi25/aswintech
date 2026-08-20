import React, { useState } from 'react';
import { Camera, ShieldCheck, Eye, Wifi, Video, Lock, Radio, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { CctvCoverageSimulator } from '../components/CctvCoverageSimulator';
import { SafeImage } from '../components/SafeImage';

interface CctvSolutionsPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CctvSolutionsPage: React.FC<CctvSolutionsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedDiagram, setSelectedDiagram] = useState<'home' | 'business' | 'warehouse'>('home');

  const categories = [
    {
      id: 'home-security',
      title: 'Home Security CCTV',
      desc: 'Discreet 4K turret cameras covering driveways, back gardens, alleyways, and front entrances with smart phone alerts.',
      specs: ['24/7 ColorVu Night Vision', 'No Monthly Cloud Fees', 'AI Human Detection', 'PIR Motion Triggers'],
      image: 'https://images.unsplash.com/photo-1512917774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'business-security',
      title: 'Business & Commercial Security',
      desc: 'Multi-camera IP surveillance systems for protecting retail stock, staff safety, and perimeter boundaries.',
      specs: ['16+ Channel NVR Storage', 'Multi-Site App Live Stream', 'Vandal-Proof Housings', 'GDPR Data Compliance'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'shop-security',
      title: 'Shop & Retail Security',
      desc: 'High-zoom cameras targeting POS tills, customer entrances, and high-value merchandise aisles.',
      specs: ['POS Cash Register Zoom', 'High-Density Store Coverage', 'Wide Dynamic Range (WDR)', 'Shoplifting Deterrent'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'office-security',
      title: 'Office Security Systems',
      desc: 'Access point surveillance, server room protection, and reception area live monitoring.',
      specs: ['Reception Desk Feeds', 'PoE Network Cabling', 'Encrypted Server Storage', 'Quiet Fanless Recorders'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'warehouse-security',
      title: 'Warehouse & Industrial Surveillance',
      desc: 'Long-distance Pan-Tilt-Zoom (PTZ) motorized cameras covering loading docks, tall aisles, and fence lines.',
      specs: ['80m+ IR Night Distance', '360° Motorized PTZ Sweep', 'Industrial Metal Enclosures', 'High-Bay Mounting'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'outdoor-surveillance',
      title: 'Outdoor & Perimeter Guard',
      desc: 'IP67 waterproof bullet and turret cameras designed for harsh weather, gardens, and car parks.',
      specs: ['IP67 Weatherproof Rating', 'Anti-Corrosion Casing', 'Dusk-to-Dawn Operation', 'Perimeter Alarm Sirens'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'remote-monitoring',
      title: 'Remote Smartphone Monitoring',
      desc: 'Instant mobile live view and video playback from anywhere in the world on iOS and Android.',
      specs: ['iPhone & Android App', 'Instant Push Notifications', 'Multi-User Permissions', 'Remote Playback'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            CCTV Architecture & Categories
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Targeted CCTV Solutions & Coverage Diagrams
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Explore our specialized CCTV layout configurations for homes, offices, retail shops, warehouses, and remote monitoring setup.
          </p>
        </div>
      </section>

      {/* Visual Diagrams Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white">Interactive Coverage Layout Architecture</h2>
              <p className="text-xs text-slate-400">Select a layout topology to visualize camera sightlines.</p>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'home', label: 'Residential Layout' },
                { id: 'business', label: 'Commercial Office' },
                { id: 'warehouse', label: 'Warehouse Yard' }
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiagram(d.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                    selectedDiagram === d.id
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-[#181a22] border-white/10 text-slate-300'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Diagram Display Box */}
          <div className="bg-[#181a22] border border-white/10 rounded-2xl p-6 relative overflow-hidden text-center space-y-4">
            <div className="max-w-2xl mx-auto space-y-2">
              <span className="text-amber-400 font-mono text-xs uppercase font-bold bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
                Topology Map • {selectedDiagram.toUpperCase()}
              </span>
              <h3 className="text-xl font-bold text-white">
                {selectedDiagram === 'home' 
                  ? '4-Camera Perimeter & Driveway Security Net'
                  : selectedDiagram === 'business'
                  ? '8-Camera Office Access Control & Lobby Grid'
                  : '12-Camera PTZ Warehouse & Loading Bay Perimeter'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left text-xs">
              <div className="bg-[#12141a] p-4 rounded-xl border border-white/5 space-y-1">
                <div className="font-bold text-amber-400">Front Entry & Gate</div>
                <div className="text-slate-400">ColorVu 4K Turret • 110° FOV • Active Deterrent LED</div>
              </div>
              <div className="bg-[#12141a] p-4 rounded-xl border border-white/5 space-y-1">
                <div className="font-bold text-amber-400">Perimeter / Side Alley</div>
                <div className="text-slate-400">Bullet Camera • IR 30m • Line Crossing AI Alert</div>
              </div>
              <div className="bg-[#12141a] p-4 rounded-xl border border-white/5 space-y-1">
                <div className="font-bold text-amber-400">Central Storage / NVR</div>
                <div className="text-slate-400">4K PoE NVR Hub • 2TB HDD • Smartphone Cloud Link</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CctvCoverageSimulator onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* Categories Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-[#14161d] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <SafeImage src={cat.image} alt={cat.title} categoryTitle={cat.title} fallbackType="cctv" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="space-y-1 pt-2 text-xs text-slate-400">
                    {cat.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(cat.title)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Request Quote For {cat.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
