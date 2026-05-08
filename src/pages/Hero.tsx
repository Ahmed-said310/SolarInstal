import { hero } from "../data/data";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
    const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-white">
      {/* Decorative Background for Desktop Premium Feel */}
      <div className="absolute top-0 right-0 hidden w-1/3 h-full bg-slate-50 lg:block -z-10" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          
          {/* CONTENT COLUMN: Mobile-First Centered, Desktop Left-Aligned */}
          <div className="w-full text-center lg:w-1/2 lg:text-left order-2 lg:order-1">
            {/* Trust Badge / Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100">
              <Zap size={16} className="fill-emerald-600" />
              <span>Premium Solar Solutions</span>
            </div>

            {/* Headline: High Contrast & Tight Tracking */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.1]">
              {hero.headline}
            </h1>

            {/* Sub-Headline: Balanced Line Height for Readability */}
            <p className="max-w-xl mt-6 text-lg leading-relaxed text-slate-600 mx-auto lg:mx-0 sm:text-xl">
              {hero.subHeadline}
            </p>

            {/* Call to Action & Security Proof */}
            <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center lg:justify-start">
              <button 
                className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-black text-white transition-all duration-300 rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl shadow-emerald-500/20"
                onClick={scrollToQuiz}
              >
                {hero.ctaText}
                <ArrowRight size={22} />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-slate-500 font-semibold px-4 py-2">
                <ShieldCheck size={20} className="text-emerald-500" />
                <span>Verified Provider</span>
              </div>
            </div>

            {/* Social Proof Bar */}
            {/* <div className="pt-10 mt-10 border-t border-slate-100 hidden md:block">
              <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4">
                Global Certifications
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-40 grayscale">
                {Certifications.map((cert, index) => (
                  <span key={index} className="text-lg font-bold italic tracking-tighter">
                    {cert}
                  </span>
                ))}
              </div>
            </div> */}
          </div>

          {/* IMAGE COLUMN: Mobile-First Top, Desktop Right */}
          <div className="relative w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src={hero.image} // This renders the premium visual of the modern home
                alt="Aurora Solar Installation" 
                className="object-cover w-full h-[300px] sm:h-[450px] lg:h-[650px]"
              />
              
              {/* Overlay Gradient for Premium Finish */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Value Proposition Card (Desktop Only) */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden lg:block">
              <div className="p-6 bg-white rounded-2xl shadow-2xl border border-slate-50 flex items-center gap-5">
                <div className="flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-2xl text-emerald-600">
                  <Zap size={32} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">$0 Down</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Start Saving Today</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}