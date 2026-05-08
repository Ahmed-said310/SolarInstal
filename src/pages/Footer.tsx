import { companyName, footer, contactSupport } from "../data/data";
import { Mail, ChevronUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Process", href: "#process" },
    { name: "Benefits", href: "#benefits" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "See How Much I Can Save", href: "#quiz" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          {/* Brand & Info */}
          <div className="max-w-sm space-y-4">
            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">
              {companyName}
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              {footer.description}
            </p>
            <div className="flex flex-col gap-3 pt-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-500" />
                <a href={`mailto:${contactSupport}`} className="hover:text-emerald-400 transition-colors">
                  <span>{contactSupport}</span>
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-500" />
                <span>Bosaso, Puntland, Somalia</span>
              </div> */}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-wider hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
              <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </div>
            <span>Back to top</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          <p>© {currentYear} {companyName}. All rights reserved.</p>
          <div className="hidden sm:block">
            Premium Solar Solution • Built for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}