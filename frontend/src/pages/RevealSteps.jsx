import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, ShieldCheck, UserSearch, LayoutGrid } from "lucide-react";

const RevealSteps = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Secure Verification",
      text: "Authorize your session via secure login to enable the retrieval engine.",
      icon: <ShieldCheck size={20} className="text-[#0095F6]" />,
    },
    {
      title: "Target Selection",
      text: "Enter the username of the private profile you wish to unlock.",
      icon: <UserSearch size={20} className="text-[#0095F6]" />,
    },
    {
      title: "Instant Results",
      text: "Access hidden photos, stories, and activity logs instantly.",
      icon: <LayoutGrid size={20} className="text-[#0095F6]" />,
    }
  ];

  return (
    <div className="h-screen bg-white flex flex-col font-sans antialiased text-[#262626] overflow-hidden">
      
      {/* Compact Navbar */}
      <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <ArrowLeft size={22} className="cursor-pointer hover:opacity-60" onClick={() => navigate(-1)} />
            <h2 className="font-bold text-base sm:text-lg tracking-tight">Engine Overview</h2>
          </div>
          <img 
            src="/logo3.png" 
            alt="Instagram" 
            className="h-5 sm:h-6 hidden md:block"
          />
        </div>
      </nav>

      {/* Main Content - Exactly fills remaining space */}
      <main className="flex-1 flex flex-col items-center justify-center min-h-0 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto px-4 py-3 sm:py-4">
          
          {/* Logo - Compact */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#FFB400] via-[#FF0056] to-[#7E00FF] p-[2px] shadow-lg">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <img 
                  src="/logo3.png" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
                  alt="Instagram Icon"
                />
              </div>
            </div>
          </div>

          {/* Heading Section */}
          <div className="text-center space-y-1 sm:space-y-2 mb-4 sm:mb-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter leading-tight">
              Unlock Private <br className="hidden sm:block" /> Insights Instantly
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto px-2">
              Professional-grade tool to analyze private profile data with 100% anonymity.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
            {steps.map((step, idx) => (
              <div key={idx} className="p-3 sm:p-4 bg-[#FAFAFA] border border-gray-100 rounded-xl sm:rounded-2xl hover:border-gray-300 transition-all">
                <div className="mb-2 bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                  {step.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base">Step {idx + 1}</h4>
                <p className="text-gray-500 text-xs mt-0.5 leading-tight">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => navigate("/login")}
              className="group w-full sm:w-auto sm:px-8 md:px-12 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Start Reveal Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[9px] sm:text-xs text-gray-400 mt-3 uppercase tracking-widest font-semibold">
              End-to-End Encrypted • 100% Anonymous
            </p>
          </div>
        </div>
      </main>

      {/* Compact Footer */}
      <footer className="w-full py-2 sm:py-3 flex-shrink-0 border-t border-gray-50">
        <div className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[#0064E0] text-lg sm:text-xl font-black">∞</span>
          <span className="text-sm sm:text-base font-bold tracking-tighter">Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default RevealSteps;