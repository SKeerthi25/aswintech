import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/company';
import { Clock, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'CCTV Guides', 'Electrical Guides', 'Business Security'];

  const filteredPosts = BLOG_POSTS.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Security & Electrical Resources
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Expert articles, CCTV selection guides, electrical safety advice, and compliance tips from ASWIN TECH LTD.
          </p>

          {/* Filter tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                    : 'bg-[#181a22] border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-[#14161d] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <SafeImage src={post.image} alt={post.title} categoryTitle={post.title} fallbackType="blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-[10px] uppercase font-bold px-2.5 py-1 rounded border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};
