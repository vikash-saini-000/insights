import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// --- CUSTOM SVG COMPONENTS (Zero Dependencies) ---
const IconInstagram = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconLock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconSpinner = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

const RevealContent = () => {
  const [targetUsername, setTargetUsername] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleReveal = (e) => {
    e.preventDefault();
    if (!targetUsername) return;
    
    setIsSearching(true);
    // Simulate node connection and extraction
    setTimeout(() => {
      navigate("/insights"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[480px] space-y-6">
        
        {/* STEP HEADER */}
        <div className="bg-blue-600 text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
            <IconInstagram />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 bg-white/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <IconLock /> API Bridge Active
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase italic">Step 2: Reveal</h1>
            <p className="text-blue-100 text-sm font-medium leading-relaxed">
              Account Verified. Enter the <strong>Private Username</strong> of the profile you wish to extract content from.
            </p>
          </div>
        </div>

        {/* INPUT BOX */}
        <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-sm">
          <form onSubmit={handleReveal} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Target Profile Identifier</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <IconSearch />
                </div>
                <input
                  required
                  disabled={isSearching}
                  type="text"
                  placeholder="@username"
                  value={targetUsername}
                  onChange={(e) => setTargetUsername(e.target.value)}
                  className="w-full pl-14 pr-5 py-5 bg-white border border-slate-200 rounded-[22px] text-sm focus:border-blue-600 outline-none transition-all font-medium disabled:opacity-50"
                />
              </div>
            </div>

            <button 
              disabled={isSearching}
              className="w-full py-5 rounded-[22px] bg-blue-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98] disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
            >
              {isSearching ? <IconSpinner /> : <><IconEye /> Reveal Profile Content</>}
            </button>
          </form>

          {/* COMPLIANCE NOTE */}
          <div className="mt-8 pt-6 border-t border-slate-200/50">
             <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-black leading-relaxed">
               Encrypted Cloud Extraction <br /> 
               <span className="text-blue-500/50">Secure API Node #772</span>
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RevealContent;