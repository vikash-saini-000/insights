import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

// --- CUSTOM SVG COMPONENTS ---
const IconLoading = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#0095F6] animate-spin">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const IconAlert = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const PersistentLoadingPage = () => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasError(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col font-sans antialiased text-[#262626] overflow-hidden">
      
      {/* Navbar - Same as RevealSteps */}
      <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <ArrowLeft size={22} className="cursor-pointer hover:opacity-60" onClick={() => navigate(-1)} />
            <h2 className="font-bold text-base sm:text-lg tracking-tight">Processing Engine</h2>
          </div>
          <img 
            src="/logo3.png" 
            alt="Instagram" 
            className="h-5 sm:h-6 hidden md:block"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center min-h-0 overflow-y-auto">
        <div className="w-full max-w-[480px] px-4 py-6">
          
          {!hasError ? (
            /* LOADING STATE */
            <div className="space-y-6 sm:space-y-8">
              {/* Logo with gradient - Same as RevealSteps */}
              <div className="flex justify-center">
                <div className="inline-block relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[28px] bg-gradient-to-tr from-[#FFB400] via-[#FF0056] to-[#7E00FF] p-[3px] shadow-2xl animate-pulse">
                    <div className="w-full h-full bg-white rounded-[25px] flex items-center justify-center">
                      <img 
                        src="/logo3.png" 
                        className="w-11 h-11 sm:w-14 sm:h-14 object-contain" 
                        alt="Instagram Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Loading Content */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <IconLoading />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-[#262626] uppercase italic">
                  Syncing Data
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0095F6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0095F6]"></span>
                  </span>
                  <p className="text-[10px] sm:text-xs font-bold text-[#8e8e8e] uppercase tracking-[0.2em]">
                    Optimizing Insights
                  </p>
                </div>
              </div>

              {/* Protocol Note Card - Same style as steps */}
              <div className="bg-[#FAFAFA] border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm">
                <p className="text-[10px] text-[#0095F6] font-bold uppercase tracking-wider mb-2 text-center">Protocol Note</p>
                <p className="text-xs text-[#8e8e8e] font-medium leading-relaxed text-center">
                  We are currently aggregating public engagement metrics. Larger profiles may require additional processing time.
                </p>
              </div>
            </div>
          ) : (
            /* ERROR STATE */
            <div className="space-y-6 sm:space-y-8">
              {/* Logo with gradient */}
              <div className="flex justify-center">
                <div className="inline-block relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[28px] bg-gradient-to-tr from-[#FFB400] via-[#FF0056] to-[#7E00FF] p-[3px] shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[25px] flex items-center justify-center">
                      <img 
                        src="/logo3.png" 
                        className="w-11 h-11 sm:w-14 sm:h-14 object-contain" 
                        alt="Instagram Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Content */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                    <IconAlert />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-red-500 uppercase">
                  Congestion Detected
                </h2>
                <p className="text-sm text-[#8e8e8e] leading-relaxed">
                  Meta nodes are experiencing unusually high traffic. Your request is in the queue, but it's taking longer than expected.
                </p>
                
                <div className="pt-4 space-y-3">
                  <button 
                    onClick={() => window.location.reload()}
                    className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold text-sm sm:text-base hover:brightness-110 transition-all shadow-lg"
                  >
                    Retry Connection
                  </button>
                  <button 
                    onClick={() => navigate("/")}
                    className="text-xs font-bold text-[#8e8e8e] uppercase tracking-widest hover:text-[#262626] transition-colors"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer - Same as RevealSteps */}
      <footer className="w-full py-2 sm:py-3 flex-shrink-0 border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[#0064E0] text-lg sm:text-xl font-black">∞</span>
          <span className="text-sm sm:text-base font-bold tracking-tighter">Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default PersistentLoadingPage;