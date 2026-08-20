import React, { useState } from 'react';
import { Camera, ShieldCheck, Zap, Building, Layers } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'cctv' | 'electrical' | 'project' | 'industry' | 'blog' | 'general';
  categoryTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'general',
  categoryTitle,
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`w-full h-full min-h-[160px] bg-gradient-to-br from-[#181a22] via-[#14161d] to-[#0f1115] border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group ${className}`}>
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-2.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
            {fallbackType === 'cctv' ? (
              <Camera className="w-6 h-6" />
            ) : fallbackType === 'electrical' ? (
              <Zap className="w-6 h-6" />
            ) : fallbackType === 'industry' ? (
              <Building className="w-6 h-6" />
            ) : fallbackType === 'project' ? (
              <ShieldCheck className="w-6 h-6" />
            ) : (
              <Layers className="w-6 h-6" />
            )}
          </div>
          
          <div className="space-y-1">
            <span className="text-xs font-bold text-white tracking-wide block">
              {categoryTitle || alt || 'ASWIN TECH LTD'}
            </span>
            <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block">
              Certified Systems
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};
