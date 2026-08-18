import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/company';
import { Calendar, Clock, User, ArrowRight, ChevronRight, Tag } from 'lucide-react';

interface BlogPostPageProps {
  onOpenQuoteModal: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="bg-[#12141a] border-b border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/blog" className="hover:text-amber-400">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-400 font-bold truncate">{post.title}</span>
          </div>

          <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded border inline-block ${post.categoryColor}`}>
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-amber-500" /> {post.author}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-500" /> {post.date}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
        <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="bg-[#14161d] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {post.content}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
            <Tag className="w-4 h-4 text-amber-500" />
            {post.tags.map((tag, i) => (
              <span key={i} className="bg-[#181a22] text-slate-300 px-3 py-1 rounded-full border border-white/5">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Quote Box */}
        <div className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] rounded-2xl p-6 text-white text-center space-y-3 shadow-xl">
          <h3 className="text-xl font-bold">Need CCTV or Electrical Assistance?</h3>
          <p className="text-xs text-amber-100">Contact ASWIN TECH LTD for certified advice and site assessment.</p>
          <button
            onClick={onOpenQuoteModal}
            className="bg-slate-950 text-amber-400 font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-slate-900 transition-all cursor-pointer"
          >
            Get a Free Quote
          </button>
        </div>
      </article>

    </div>
  );
};
