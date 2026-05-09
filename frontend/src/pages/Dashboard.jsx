import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, ShieldCheck, Eye, LayoutGrid } from "lucide-react";

// --- STABLE SVG COMPONENTS (No Dependencies) ---

const IconShield = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconArrowRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  </svg>
);

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
  </svg>
);

const IconExternal = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#262626] font-sans antialiased">
      
      {/* HEADER - Instagram Style */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFB400] via-[#FF0056] to-[#7E00FF] p-[2px]">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <img 
                  src="/logo3.png" 
                  className="w-4 h-4 object-contain" 
                  alt="Instagram Icon"
                />
              </div>
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight">Insight Engine</span>
          </div>
          <button 
            onClick={() => navigate("/login")}
            className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-xs sm:text-sm font-bold rounded-full hover:brightness-110 transition-all shadow-md"
          >
            Access Console
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Instagram Style */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFA] border border-gray-100 rounded-full text-[10px] font-bold text-[#0095F6] uppercase tracking-widest">
            <ShieldCheck size={12} className="text-[#0095F6]" />
            Encrypted Data Extraction
          </div>
          
          <div className="flex justify-center">
            <div className="inline-block relative">
             
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl font-black tracking-tighter leading-tight">
            Unlock profile <br /> 
            <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">intelligence.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#8e8e8e] max-w-2xl mx-auto leading-relaxed">
            Access complete profile details and hidden posts for any Instagram user. <br className="hidden md:block" />
            Verify your session to bridge the secure API and start exploring.
          </p>

          <div className="pt-6 sm:pt-10 flex flex-col items-center gap-5">
            <button 
              onClick={() => navigate("/instagram")}
              className="group px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold text-base sm:text-lg shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-3"
            >
              Reveal Private Profile
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0095F6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0095F6]"></span>
              </span>
              <span className="text-[10px] sm:text-xs text-[#8e8e8e] font-medium uppercase tracking-widest">
                Live Node: Instagram Graph Bridge Active
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* TARGETED VALUE PROPS - Instagram Style Cards */}
      <section className="bg-[#FAFAFA] py-16 sm:py-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter">Premium Features</h2>
            <p className="text-[#8e8e8e] mt-2">Enterprise-grade Instagram intelligence tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center mb-5">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Full Profile Access</h3>
              <p className="text-sm text-[#8e8e8e] leading-relaxed">By-pass visual barriers. View full-resolution posts, stories, and metadata from target usernames through our secure node.</p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center mb-5">
                <LayoutGrid size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Post Extraction</h3>
              <p className="text-sm text-[#8e8e8e] leading-relaxed">Extract every detail. Once verified, simply enter a username to fetch an organized library of all profile posts instantly.</p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center mb-5">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Secure Handshake</h3>
              <p className="text-sm text-[#8e8e8e] leading-relaxed">Identity verification is required to authorize the API bridge. Your details act as the key to unlock the Graph Engine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION - Instagram Style */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-12 sm:mb-20">
            
            <div className="md:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB400] via-[#FF0056] to-[#7E00FF] p-[2px]">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <img 
                      src="/logo3.png" 
                      className="w-5 h-5 object-contain" 
                      alt="Instagram Icon"
                    />
                  </div>
                </div>
                <span className="font-bold text-base tracking-tight">Insight Engine</span>
              </div>
              <p className="text-xs text-[#8e8e8e] leading-relaxed max-w-[260px]">
                Proprietary node for Instagram profile intelligence and content extraction.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/lucide-icons/lucide" target="_blank" rel="noreferrer" className="text-[#8e8e8e] hover:text-[#262626] transition-colors">
                  <IconGithub />
                </a>
                <a href="https://x.com/meta" target="_blank" rel="noreferrer" className="text-[#8e8e8e] hover:text-[#262626] transition-colors">
                  <IconX />
                </a>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <FooterGroup title="Operations" items={[
                { name: "Graph API Node", url: "https://developers.facebook.com/docs/instagram-api" },
                { name: "Content Scraper", url: "#" },
                { name: "Meta System Status", url: "https://metastatus.com/" }
              ]} />
              
              <FooterGroup title="Security" items={[
                { name: "API Encryption", url: "https://policies.google.com/privacy" },
                { name: "Terms of Access", url: "https://opensource.org/licenses/MIT" },
                { name: "GDPR Compliance", url: "https://gdpr-info.eu/" }
              ]} />

              <FooterGroup title="Developer" items={[
                { name: "Documentation", url: "#" },
                { name: "GitHub Repo", url: "https://github.com/lucide-icons/lucide" },
                { name: "Bug Bounty", url: "https://www.hackerone.com/bug-bounty-programs" }
              ]} />
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-[9px] sm:text-[10px] font-bold text-[#8e8e8e] uppercase tracking-widest">© 2026 INSIGHT ENGINE</span>
              <div className="h-3 w-px bg-gray-200 hidden md:block" />
              <span className="text-[9px] sm:text-[10px] font-bold text-[#8e8e8e] uppercase tracking-widest hidden md:block">Social Node Connected</span>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tighter text-[#8e8e8e]">AES-256 Bit Encryption</span>
              <div className="flex items-center gap-2 opacity-60">
                <span className="text-[#0064E0] text-lg sm:text-xl font-black">∞</span>
                <span className="text-sm sm:text-base font-bold tracking-tighter">Meta</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FooterGroup = ({ title, items }) => (
  <div className="space-y-4">
    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#262626]">{title}</h4>
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx}>
          <a 
            href={item.url} 
            target="_blank" 
            rel="noreferrer"
            className="group text-xs text-[#8e8e8e] hover:text-[#0095F6] cursor-pointer transition-all flex items-center gap-1"
          >
            {item.name}
            {item.url.startsWith("http") && (
                <IconExternal />
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LandingPage;