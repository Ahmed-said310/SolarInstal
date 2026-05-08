import { useState } from "react";
import { faq, contactSupport } from "../data/data";
import { ChevronDown, HelpCircle } from "lucide-react";
export default function Faq() {
    // State to track which question is currently open
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-black uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 rounded-full">
                        <HelpCircle size={14} />
                        <span>Before You Go Solar</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Questions People Ask Before Installing Solar
                    </h2>
                    <p className="mt-4 text-slate-500 font-medium">
                        Before You Request Your Savings Estimate
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faq.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`group transition-all duration-300 rounded-2xl border ${isOpen
                                    ? "bg-slate-50 border-emerald-200 shadow-sm"
                                    : "bg-white border-slate-100 hover:border-slate-200"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                                >
                                    <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-emerald-700" : "text-slate-900"
                                        }`}>
                                        {item.question}
                                    </span>

                                    <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? "bg-emerald-500 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                        }`}>
                                        <ChevronDown size={20} strokeWidth={3} />
                                    </div>
                                </button>

                                {/* Animated Content Area */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-8 text-slate-600 leading-relaxed font-medium border-t border-emerald-100/50 pt-4">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Contact Hint */}
                <div className="mt-8 text-center p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl">
                    <p className="text-slate-400 font-medium">Still have more questions?</p>
                    <div className="mt-4">
                        <a
                            href={`mailto:${contactSupport}`}
                            className="inline-block text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-all duration-300 underline underline-offset-8 decoration-2 hover:underline-offset-4"
                        >
                            Speak With a Solar Specialist
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}