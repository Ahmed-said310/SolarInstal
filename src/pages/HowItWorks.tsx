import { howItWorks } from "../data/data";
import { ClipboardCheck, PhoneCall, Zap, ShieldCheck } from "lucide-react";

// Mapping icons to steps for a professional, non-generic look
const icons = [ClipboardCheck, PhoneCall, Zap];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-[#0F172A] text-white overflow-hidden relative">
      {/* Subtle Background Glow for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Your Journey to <span className="text-emerald-500">$0 Energy Bills</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We’ve streamlined the switch to solar into {howItWorks.length} simple, transparent steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {howItWorks.map((step, index) => {
              const Icon = icons[index % icons.length];
              
              return (
                <div key={index} className="group relative flex flex-col items-center text-center">
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 bg-slate-800 border border-slate-700 text-emerald-500 text-xs font-black px-3 py-1 rounded-full mb-4 z-20 group-hover:border-emerald-500 transition-colors">
                    STEP 0{index + 1}
                  </div>

                  {/* Icon Container with Glow Effect */}
                  <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-3xl group-hover:border-emerald-500 transition-all duration-500" />
                    <Icon size={40} className="relative z-10 text-emerald-500 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {step.step}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-relaxed font-medium px-4">
                    {step.description}
                  </p>

                  {/* Mobile/Tablet Arrow Indicator */}
                  {index !== howItWorks.length - 1 && (
                    <div className="lg:hidden mt-8 text-slate-700">
                      <Zap size={24} className="animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}