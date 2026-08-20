import React, { useState } from 'react';
import { PROJECTS } from '../data/company';
import type { ProjectItem } from '../types';
import { MapPin, Calendar, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface ProjectsPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cctv', label: 'CCTV Projects' },
    { id: 'commercial', label: 'Commercial Projects' },
    { id: 'residential', label: 'Residential Projects' },
    { id: 'electrical', label: 'Electrical Projects' },
    { id: 'lighting', label: 'Lighting Projects' }
  ];

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Proven Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Projects & Case Highlights
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Demonstrating our precision security camera installations and certified electrical work across Croydon and South London.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  filter === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                    : 'bg-[#181a22] border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="bg-[#14161d] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <SafeImage 
                    src={proj.image} 
                    alt={proj.title} 
                    categoryTitle={proj.title}
                    fallbackType="project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] uppercase font-bold px-2.5 py-1 rounded border border-white/10">
                    {proj.categoryLabel}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {proj.location}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {proj.completionDate}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.shortDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.servicesProvided.map((srv, i) => (
                      <span key={i} className="text-[10px] bg-white/5 text-amber-300 px-2 py-0.5 rounded border border-white/5 font-mono">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full bg-[#181a22] hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs py-2.5 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#12141a] border border-white/10 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden relative max-h-[85vh] flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <SafeImage src={selectedProject.image} alt={selectedProject.title} categoryTitle={selectedProject.title} fallbackType="project" className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                {selectedProject.categoryLabel} • {selectedProject.location}
              </span>
              
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Project Highlights</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenQuoteModal(`Similar to: ${title}`);
                  }}
                  className="bg-amber-500 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-amber-600 transition-all cursor-pointer"
                >
                  Request Similar Project Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
