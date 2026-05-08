import { ArrowRight, ShieldCheck } from "lucide-react";
import { benefits, finalCta} from "../data/data";
const ctaBenefits = ["$0 Upfront", "No Hidden Fees", "Local Installers"]
export default function FinalCta() {
    const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="pt-8 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Card Container */}
        <div className="relative rounded-[2.5rem] bg-slate-900 px-8 py-16 md:px-16 md:py-24 overflow-hidden shadow-2xl">
          
          {/* Visual Flourish: Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Headline: "The Closer" */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8">
              {finalCta.headline}
            </h2>

            {/* Sub-Headline */}
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-2xl leading-relaxed">
              {finalCta.subHeadline}
            </p>

            {/* Premium Button & Social Proof */}
            <div className="flex flex-col items-center gap-6 w-full">
              <button className="group relative w-full sm:w-auto px-12 py-6 bg-emerald-500 hover:bg-emerald-400 text-white text-xl font-black rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3" 
              onClick={scrollToQuiz}>
                {finalCta.ctaText}
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
                {ctaBenefits.map((benefit, index) => (
              <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 font-bold uppercase tracking-widest text-xs" key={index}>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span>{benefit}</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}