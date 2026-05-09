import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconSpinner = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
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
    <div className="h-screen bg-white flex flex-col font-sans antialiased text-[#262626] overflow-hidden">
      
      {/* Navbar - Instagram Style */}
      <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <ArrowLeft size={22} className="cursor-pointer hover:opacity-60" onClick={() => navigate(-1)} />
            <h2 className="font-bold text-base sm:text-lg tracking-tight">Reveal Engine</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFB400] via-[#FF0056] to-[#7E00FF] p-[2px]">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <img 
                  src="/logo3.png" 
                  className="w-4 h-4 object-contain" 
                  alt="Instagram Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Centered within 100vh */}
      <main className="flex-1 flex items-center justify-center min-h-0 overflow-y-auto">
        <div className="w-full max-w-[400px] sm:max-w-[480px] px-4 py-4">
          
          {/* STEP HEADER - Instagram Gradient Style */}
          <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white rounded-2xl sm:rounded-[28px] p-5 sm:p-6 shadow-xl mb-4 sm:mb-5 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
              <IconInstagram />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 bg-white/20 w-fit px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                <IconLock /> API Bridge Active
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 uppercase italic">Step 2: Reveal</h1>
              <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
                Account Verified. Enter the <strong>Private Username</strong> of the profile you wish to extract content from.
              </p>
            </div>
          </div>

          {/* INPUT BOX - Instagram Style */}
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm">
            <form onSubmit={handleReveal} className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#8e8e8e] ml-2">Target Profile Identifier</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e8e8e] group-focus-within:text-[#0095F6] transition-colors">
                    <IconSearch />
                  </div>
                  <input
                    required
                    disabled={isSearching}
                    type="text"
                    placeholder="@username"
                    value={targetUsername}
                    onChange={(e) => setTargetUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-white border border-gray-200 rounded-xl sm:rounded-2xl text-sm focus:border-[#0095F6] outline-none transition-all font-medium disabled:opacity-50 focus:ring-1 focus:ring-[#0095F6]"
                  />
                </div>
              </div>

              <button 
                disabled={isSearching}
                className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? <IconSpinner /> : <><IconEye /> Reveal Profile Content</>}
              </button>
            </form>

            {/* COMPLIANCE NOTE */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200/50">
               <p className="text-center text-[9px] sm:text-[10px] text-[#8e8e8e] uppercase tracking-widest font-black leading-relaxed">
                 Encrypted Cloud Extraction <br /> 
                 <span className="text-[#0095F6]/60">Secure API Node #772</span>
               </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer - Instagram Style */}
      <footer className="w-full py-2 sm:py-3 flex-shrink-0 border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[#0064E0] text-lg sm:text-xl font-black">∞</span>
          <span className="text-sm sm:text-base font-bold tracking-tighter">Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default RevealContent;