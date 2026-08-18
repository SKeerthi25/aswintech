import React, { useState } from 'react';
import { Camera, Zap, ShieldCheck, Eye, Wifi, Video, Lock, Radio, Server, Check } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeCam, setActiveCam] = useState<number>(1);

  const cameras = [
    { id: 1, name: 'CAM-01 • Main Entrance', status: 'LIVE • 4K UHD', alert: 'System Armed' },
    { id: 2, name: 'CAM-02 • Driveway & Gates', status: 'LIVE • ColorVu', alert: 'Smart Motion ON' },
    { id: 3, name: 'CAM-03 • Commercial Building', status: 'LIVE • PTZ 360°', alert: 'Infrared Active' },
    { id: 4, name: 'CAM-04 • Electrical Unit', status: 'LIVE • Thermal Audit', alert: 'BS7671 Safe' }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-orange-600/20 rounded-3xl blur-2xl opacity-60 animate-pulse pointer-events-none" />

      {/* Main Glass Visual Frame */}
      <div className="relative bg-[#12141a] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping inline-block" />
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block -ml-5" />
            <span className="font-mono text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
              ASWIN NVR SECURITY HUB v4.8
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
              <Wifi className="w-3.5 h-3.5" /> 1Gbps Connected
            </span>
            <span className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Armed & Monitoring
            </span>
          </div>
        </div>

        {/* Live Camera Feed Screen Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-slate-950 group">
          
          {/* Animated Scanline Overlay */}
          <div className="animate-scan pointer-events-none" />

          {/* Camera Image Backdrop based on selected camera */}
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{
            backgroundImage: activeCam === 1 
              ? `url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80')`
              : activeCam === 2
              ? `url('https://images.unsplash.com/photo-1512917774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80')`
              : activeCam === 3
              ? `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80')`
              : `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80')`
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
          </div>

          {/* Camera HUD Overlays */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
            {/* Top HUD */}
            <div className="flex items-center justify-between text-[11px] font-mono text-white">
              <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 flex items-center gap-2">
                <Video className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span className="font-bold text-amber-400">{cameras[activeCam - 1].name}</span>
              </div>
              <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {cameras[activeCam - 1].status}
              </div>
            </div>

            {/* Middle Targeting Reticle Graphic */}
            <div className="relative self-center w-28 h-28 border border-dashed border-amber-500/40 rounded-full flex items-center justify-center animate-cctv-pulse">
              <div className="w-12 h-12 border border-amber-500/60 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
              </div>
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-amber-400" />
            </div>

            {/* Bottom HUD info */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
              <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-2">
                <Eye className="w-3 h-3 text-amber-400" />
                <span>AI Human/Vehicle Filter: ACTIVE</span>
              </div>
              <div className="bg-amber-500/20 backdrop-blur-md px-2.5 py-1 rounded border border-amber-500/40 text-amber-300 font-semibold">
                {cameras[activeCam - 1].alert}
              </div>
            </div>
          </div>
        </div>

        {/* Camera Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          {cameras.map((cam) => (
            <button
              key={cam.id}
              onClick={() => setActiveCam(cam.id)}
              className={`p-2 rounded-xl text-left text-xs transition-all border ${
                activeCam === cam.id
                  ? 'bg-amber-500/20 border-amber-500/50 text-white font-bold shadow-md shadow-amber-500/10'
                  : 'bg-[#181a22] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-0.5">
                <span className="font-mono font-bold">CAM 0{cam.id}</span>
                {activeCam === cam.id && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
              </div>
              <div className="truncate text-[10px] text-slate-300 font-medium">
                {cam.name.split('•')[1]?.trim() || cam.name}
              </div>
            </button>
          ))}
        </div>

        {/* Floating Service Badges Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-[#181a22] p-2.5 rounded-xl border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">4K CCTV Installation</div>
              <div className="text-slate-400 text-[11px]">Night Vision • Remote App</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#181a22] p-2.5 rounded-xl border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">Electrical & Lighting</div>
              <div className="text-slate-400 text-[11px]">BS 7671 Certified Work</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
