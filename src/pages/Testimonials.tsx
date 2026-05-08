import { testimonials } from "../data/data";
import { Star, ShieldCheck, MapPin, Calendar, Info } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section - More Grounded, Less SaaS */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-100 rounded-md">
            <ShieldCheck size={12} />
            <span>Verified Homeowner Feedback</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Recent Solar Installations & Results
          </h2>
          <p className="max-w-xl text-slate-500 font-medium text-base">
            Read how our neighbors are transitioning to clean energy and what their actual utility savings look like.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Star Rating - Mixed for Realism (Logical Fix) */}
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < (index === 1 ? 4 : 5) ? "currentColor" : "none"} 
                    className={i < (index === 1 ? 4 : 5) ? "" : "text-slate-300"}
                  />
                ))}
              </div>

              {/* Feedback Text - No Italics, More Authority */}
              <p className="text-slate-700 font-medium leading-relaxed mb-6 grow">
                "{t.feedback}"
              </p>

              {/* Legal Realism Signal */}
              <div className="flex items-start gap-2 mb-8 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <Info size={14} className="text-slate-400 mt-0.5 shrink-0" />
                <p className="text-[10px] text-slate-500 leading-tight">
                  Individual results may vary based on household usage, local utility rates, and weather conditions.
                </p>
              </div>

              {/* Stats Bar - Professional Slate Design */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 mb-8">
                {Object.entries(t.stats).map(([key, value], i) => (
                  <div key={i} className="text-center border-r last:border-r-0 border-slate-100">
                    <p className="text-[9px] font-bold uppercase tracking-tighter text-slate-400 mb-1">
                      {key.replace('_', ' ')}
                    </p>
                    <p className="text-xs font-extrabold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              {/* Profile - Institutional & Stable */}
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale-[0.2]"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-tight">{t.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 uppercase tracking-tighter">
                    <MapPin size={10} />
                    <span>{t.location}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-slate-400">
                    <Calendar size={10} />
                    <span>Project Completed: {t.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Localized Social Proof Footnote */}
        <div className="mt-12 text-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Serving homeowners across TX, AZ & FL with local installation crews.
            </p>
        </div>
      </div>
    </section>
  );
}