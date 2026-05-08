import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyName } from '../data/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Scroll detection — navbar style changes past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Outside click — any tap outside menu+toggle closes it
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        toggleRef.current && !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    // Small delay so the toggle click doesn't immediately re-fire
    const timer = setTimeout(() => document.addEventListener('mousedown', handleClick), 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 300); // wait for menu close animation
  };

  const navLinks = [
    { name: 'Benefits', id: 'benefits' },
    { name: 'Process', id: 'process' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white shadow-md border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24">

            {/* Brand */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <span className="text-xl font-black tracking-[0.25em] text-slate-900 uppercase italic">
                {companyName}
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('quiz')}
                className="bg-slate-900 text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all hover:-translate-y-1 shadow-xl shadow-slate-200 flex items-center gap-2"
              >
                Check My Eligibility — It&apos;s Free <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              ref={toggleRef}
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 
        Mobile Menu — rendered OUTSIDE <nav> so it doesn't affect nav height.
        Uses a full-screen overlay with its own scroll context.
        bg-white is solid (no transparency) to ensure text always readable.
      */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[90] bg-white lg:hidden flex flex-col transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-x-0'
            : 'opacity-0 pointer-events-none translate-x-full'
        }`}
        style={{ paddingTop: '80px' }} // matches nav height (h-20 = 80px)
        aria-hidden={!isOpen}
      >
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="flex flex-col px-8 pt-6 pb-10 gap-0">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-3xl font-black uppercase tracking-tighter text-slate-900 border-b border-slate-100 py-6 text-left hover:text-emerald-600 transition-colors active:scale-[0.98]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection('quiz')}
              className="mt-8 w-full bg-emerald-500 text-white p-6 rounded-3xl text-lg font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-emerald-100 active:scale-95 transition-transform"
            >
              Claim My Free Savings Report <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop — tap to close, sits below menu above content */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
