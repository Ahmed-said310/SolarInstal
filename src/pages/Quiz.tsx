import React, { useState } from 'react';
import { ChevronRight, Zap, Phone, Loader2, Home, Calendar, UserCheck } from 'lucide-react';
import { whatsappNumber } from '../data/data';

const QuizComponent = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [formData, setFormData] = useState({
    homeOwner: '',
    monthlyBill: '',
    roofType: '',
    timeline: '',
    zipCode: '',
    phone: ''
  });

  const totalSteps = 6;

  const isStepValid = () => {
    if (step === 5) return formData.zipCode.trim().length >= 3;
    if (step === 6) return formData.phone.trim().length >= 7;
    return true; 
  };

  const handleNext = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setStep(step + 1);
  };
  const API_URL = import.meta.env.VITE_API_KEY_APPSCRIPT_GOOGLE_SHEET;
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!isStepValid()) return;
  
  setIsLoading(true);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: formData.phone,
        homeOwner: formData.homeOwner,
        monthlyBill: formData.monthlyBill,
        roofType: formData.roofType,
        timeline: formData.timeline,
        zipcode: formData.zipCode
      }),
    });
    console.log(response);
    // Google Script response check
    // if (response.ok) {
    //   setIsFinished(true);  // Kaliya marka xogta la kaydiyay
    // } else {
    //   throw new Error('Server error');
    // }
    setIsFinished(true); // Assume success due to no-cors

  } catch (err) {
    // User u sheeg khaladka — ha qarinin
    alert("There was an error submitting your data. Please try again.");
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="max-w-xl mx-auto my-10 p-2 bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
      <div className="p-8">
        
        {!isFinished && (
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
              Step {step} of {totalSteps}
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 w-6 rounded-full transition-all duration-500 ${
                    step >= i ? 'bg-emerald-500' : 'bg-slate-100'
                  }`} 
                />
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: HOMEOWNER */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tight text-center sm:text-left">Are you a homeowner?</h2>
            <p className="text-slate-500 mb-8 font-medium text-center sm:text-left">Solar savings are currently optimized for property owners.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => handleNext('homeOwner', 'Yes')} className="group p-6 border-2 border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left">
                <p className="text-xl font-bold text-slate-900 group-hover:text-emerald-700">Yes, I am</p>
                <p className="text-sm text-slate-500">I own my residence</p>
              </button>
              <button onClick={() => handleNext('homeOwner', 'No')} className="group p-6 border-2 border-slate-100 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all text-left">
                <p className="text-xl font-bold text-slate-900">No, I rent</p>
                <p className="text-sm text-slate-500">I am a tenant</p>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: BILL */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">Average Monthly Bill?</h2>
            <p className="text-slate-500 mb-8 font-medium">Select your typical electricity expenditure.</p>
            <div className="grid grid-cols-1 gap-3">
              {['$0 - $100', '$101 - $200', '$201 - $300', '$300+'].map((range) => (
                <button key={range} onClick={() => handleNext('monthlyBill', range)} className="w-full p-5 text-left border-2 border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 font-bold text-slate-700 transition-all flex justify-between items-center">
                  {range} <ChevronRight size={20} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: ROOF TYPE (LEAD QUALITY FILTER) */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Home size={18} />
              <span className="text-xs font-black uppercase tracking-widest">Property Details</span>
            </div>
            <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">Roof / House Type?</h2>
            <div className="grid grid-cols-1 gap-3">
              {['Asphalt Shingle', 'Tile / Slate', 'Metal Roof', 'Flat / Other'].map((type) => (
                <button key={type} onClick={() => handleNext('roofType', type)} className="w-full p-5 text-left border-2 border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 font-bold text-slate-700 transition-all flex justify-between items-center">
                  {type} <ChevronRight size={20} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: TIMELINE (CONVERSION FILTER) */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Calendar size={18} />
              <span className="text-xs font-black uppercase tracking-widest">Installation Timing</span>
            </div>
            <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">When do you want to start?</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'ASAP', desc: 'Ready for a quote today' },
                { label: '1–3 Months', desc: 'Planning soon' },
                { label: 'Just Researching', desc: 'Thinking for the future' }
              ].map((time) => (
                <button key={time.label} onClick={() => handleNext('timeline', time.label)} className="group w-full p-5 text-left border-2 border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-700 group-hover:text-emerald-700">{time.label}</p>
                    <p className="text-xs text-slate-400 font-medium">{time.desc}</p>
                  </div>
                  <ChevronRight size={20} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: ZIP */}
        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">Service Area</h2>
            <input type="text" placeholder="Enter Zip Code" value={formData.zipCode} className="w-full p-6 bg-slate-50 border-2 border-transparent rounded-2xl mb-6 outline-none focus:border-emerald-500 focus:bg-white transition-all text-xl font-bold" onChange={(e) => setFormData({...formData, zipCode: e.target.value})} />
            <button disabled={!isStepValid()} onClick={() => setStep(6)} className={`w-full p-6 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all ${isStepValid() ? 'bg-slate-900 text-white shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
              Next Step <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* STEP 6: CONTACT */}
        {step === 6 && !isFinished && (
          <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">Final Details</h2>
            <div className="relative mb-6">
              <Phone size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="tel" placeholder="Enter Phone Number" required disabled={isLoading} value={formData.phone} className="w-full p-6 pl-14 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-emerald-500 focus:bg-white transition-all text-xl font-bold" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <button type="submit" disabled={!isStepValid() || isLoading} className={`w-full p-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 ${isStepValid() && !isLoading ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-2xl' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
              {isLoading ? <><Loader2 size={24} className="animate-spin" /> Reviewing your home details...</> : <><Zap size={24} fill="white" /> Calculate My Savings</>}
            </button>
          </form>
        )}

        {/* SUCCESS STATE: Human Specialist Touch */}
        {isFinished && (
  <div className="py-8 animate-in fade-in zoom-in duration-1000 text-center">
    <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
      <UserCheck size={32} />
    </div>

    <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase italic">Submission Success</h2>
    <p className="text-slate-600 font-medium mb-8 text-sm max-w-[280px] mx-auto">
      Expert analysis started for zip code <span className="font-bold text-slate-900">{formData.zipCode}</span>.
    </p>

    {/* WHATSAPP CTA - FIXED SIZE & PSYCHOLOGY */}
    <div className="mb-8 px-2">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I just finished the solar quiz. Can I get my savings report ASAP?. ")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto p-5 bg-[#25D366] text-white rounded-xl font-black text-lg shadow-lg hover:bg-[#20ba56] active:scale-95 transition-all"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        GET INSTANT QUOTE
      </a>
      <p className="text-[11px] text-emerald-600 mt-3 font-bold uppercase tracking-tighter">
        Click above to fast-track your results
      </p>
    </div>

    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left mx-2">
      <p className="text-slate-900 font-bold text-sm flex items-center gap-2 mb-4">
        <Zap size={16} className="text-emerald-500" fill="currentColor" /> What happens now?
      </p>
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">1</div>
          <p className="text-[11px] text-slate-500 font-medium">An expert reviews your energy bill data.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] font-bold">2</div>
          <p className="text-[11px] text-slate-500 font-medium">Personalized savings breakdown via call or text.</p>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default QuizComponent;