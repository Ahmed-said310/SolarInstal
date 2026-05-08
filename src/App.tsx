import { useEffect } from "react";
import Hero from "./pages/Hero";
import Quiz from "./pages/Quiz";
import Benefits from "./pages/Benifits";
import Testimonials from "./pages/Testimonials";
import HowItWorks from "./pages/HowItWorks";
import Faq from "./pages/Faq";
import FinalCta from "./pages/FinalCta";
import Navbar from "./pages/Navbar2";
import Mechanism from "./pages/mechanism";
import Footer from "./pages/Footer";
export default function App() {
  
  // High-End UX: Ensures the user always starts fresh at the top on reload
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 antialiased">
      
      {/* 
          MODERN UI BLOOM: 
          Subtle background gradients to make the site feel "alive" and expensive. 
      */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-50/60 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-blue-50/50 blur-[100px] rounded-full" />
      </div>

      {/* 1. NAVIGATION BAR */}
      <Navbar />

      <main className="relative">
        
        {/* SECTION 1: HERO */}
        <section id="hero">
          <Hero />
        </section>
        <section>
            <Mechanism />
          </section>
          <section id="process">
          <HowItWorks />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="quiz" className="relative py-16 bg-slate-50/50 border-y border-slate-100">
           <div className="max-w-5xl mx-auto px-6">
              <Quiz />
           </div>
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        {/* SECTION 7: FAQ (The Reassurance) */}
        <section id="faq">
          <Faq />
        </section>

        {/* SECTION 8: FINAL CALL TO ACTION */}
        <div className="bg-white">
        <FinalCta />
        </div>
      </main>

      {/* 2. FOOTER (Reserved for later) */}
      <Footer /> 

      {/* 
          GLOBAL PREMIUM STYLES
          Includes the 'scroll-margin-top' fix to ensure Navbar doesn't cover section headers.
      */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        /* Essential for Fixed Navbars: Prevents section headers from being hidden */
        section {
          scroll-margin-top: 100px;
        }
        
        /* Custom scrollbar for a polished tech aesthetic */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }

        /* Performance: Prevent layout shift */
        img {
          content-visibility: auto;
        }

        /* Smooth reveal animation for sections */
        .animate-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}