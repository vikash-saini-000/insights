import React from "react";
import { Loader2 } from "lucide-react";

const PersistentLoadingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-in fade-in duration-1000">
      
      {/* THE SPINNER CONTAINER */}
      <div className="relative flex items-center justify-center">
        {/* Static outer ring for a "hollow" premium effect */}
        <div className="absolute w-20 h-20 border-[1px] border-slate-100 rounded-full"></div>
        
        {/* The active spinning element */}
        <Loader2 
          size={56} 
          className="text-blue-600 animate-spin stroke-[1.2px]" 
        />
      </div>

      {/* STATUS TEXT */}
      <div className="mt-10 text-center space-y-2">
        <h2 className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
          Syncing Data
        </h2>
        <div className="flex items-center justify-center gap-1.5">
          {/* Small pulsing dot to show the app hasn't "frozen" */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Optimizing Insights
          </p>
        </div>
      </div>

      {/* BENTO-STYLE HINT CARD (Bottom) */}
      <div className="absolute bottom-12 max-w-[300px]">
        <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-4 text-center">
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
            Our engine is currently aggregating public engagement metrics. This usually takes a few moments depending on profile size.
          </p>
        </div>
      </div>

      {/* LOGO */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-40">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-[10px] text-white font-bold">
          I
        </div>
        <span className="text-xs font-black tracking-tighter uppercase">Insight.</span>
      </div>
    </div>
  );
};

export default PersistentLoadingPage;