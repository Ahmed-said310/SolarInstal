import { Cpu, Users, Zap, CheckCircle2 } from "lucide-react";

export default function Mechanism() {
  const steps = [
    {
      id: "01",
      title: "Data Analysis",
      description: "We check your roof, your bill, and local incentives — then find the right installer for your zip code..",
      icon: <Cpu className="text-emerald-500" size={32} />,
    },
    {
      id: "02",
      title: "Precision Matching",
      description: "We match your profile with the top-rated local installers in your specific zip code to ensure local expertise.",
      icon: <Users className="text-emerald-500" size={32} />,
    },
    {
      id: "03",
      title: "Rapid Connection",
      description: "A solar specialist reviews your data and contacts you within 24 hours to finalize your custom savings roadmap.",
      icon: <Zap className="text-emerald-500" size={32} />,
    }
  ];

  return (
    <section id="process" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            How We Secure Your <span className="text-emerald-600">Savings</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            We don't just find installers; we engineer the perfect connection between your energy needs and the best local resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-100 -z-10" />
              )}
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
                  {step.icon}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    Step {step.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 items-center py-8 border-y border-slate-100">
          <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 size={18} className="text-emerald-500" />
            Vetted Installers Only
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 size={18} className="text-emerald-500" />
            No Random Cold Calls
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 size={18} className="text-emerald-500" />
            Secure Data Encryption
          </div>
        </div>
      </div>
    </section>
  );
}