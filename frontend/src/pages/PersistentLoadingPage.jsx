import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- CUSTOM SVG COMPONENTS ---
const IconLoading = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-blue-600 animate-spin">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const IconAlert = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.2" className="animate-pulse">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const PersistentLoadingPage = () => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // If loading takes more than 10 seconds, show the error state
    const timer = setTimeout(() => {
      setHasError(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
      
      {/* CENTRAL ICON CONTAINER */}
      <div className="relative flex items-center justify-center mb-10">
        <div className={`absolute w-20 h-20 border-[1px] rounded-full transition-colors duration-500 ${hasError ? 'border-red-100' : 'border-slate-100'}`}></div>
        {hasError ? <IconAlert /> : <IconLoading />}
      </div>

      {/* DYNAMIC CONTENT */}
      <div className="text-center space-y-4 max-w-sm">
        {!hasError ? (
          <>
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">
              Syncing Data
            </h2>
            <div className="flex items-center justify-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                Optimizing Insights
              </p>
            </div>
          </>
        ) : (
          <div className="animate-in slide-in-from-bottom-2 duration-500">
            <h2 className="text-2xl font-black tracking-tighter text-red-500 uppercase leading-tight">
              Congestion Detected
            </h2>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              Meta nodes are experiencing unusually high traffic. Your request is in the queue, but it's taking longer than expected.
            </p>
            
            <div className="pt-6 flex flex-col gap-3">
              <button 
                onClick={() => window.location.reload()}
                className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all"
              >
                Retry Connection
              </button>
              <button 
                onClick={() => navigate("/")}
                className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-black transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}
      </div>

      {/* BENTO HINT CARD */}
      {!hasError && (
        <div className="absolute bottom-12 max-w-[300px] animate-in fade-in duration-1000">
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-5 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Protocol Note</p>
            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
              We are currently aggregating public engagement metrics. Larger profiles may require additional processing time.
            </p>
          </div>
        </div>
      )}

      {/* BRANDING */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-[10px] text-white font-bold">
          I
        </div>
        <span className="text-xs font-black tracking-tighter uppercase">Insight.</span>
      </div>
    </div>
  );
};

export default PersistentLoadingPage;