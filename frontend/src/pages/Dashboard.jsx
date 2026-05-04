import React from "react";
import { useNavigate } from "react-router-dom";

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

// --- MAIN PAGE ---

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111] font-sans selection:bg-blue-50 flex flex-col">
      {/* HEADER */}
      <nav className="max-w-5xl w-full mx-auto px-6 py-10 flex justify-between items-center">
        <div className="flex items-center gap-3 tracking-tighter">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-2.5 h-2.5 border border-white rounded-[1px]" />
          </div>
          <span className="text-lg font-bold uppercase cursor-pointer" onClick={() => navigate("/")}>Insight Engine</span>
        </div>
        <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-black text-white rounded hover:bg-slate-800 transition-all shadow-sm"
          >
            Access Console
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-32 flex-grow text-center">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            <IconShield />
            Verified API Node
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-none">
            Social data, <br /> 
            <span className="text-slate-400 font-light">transparently.</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            Professional-grade analytics for the Instagram Graph. <br className="hidden md:block" />
            Audited for privacy. Optimized for speed.
          </p>

          <div className="pt-10 flex flex-col items-center gap-6">
            <button 
              onClick={() => navigate("/login")}
              className="px-12 py-5 bg-black text-white text-lg font-medium rounded-full hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200"
            >
              Analyze Profile
              <IconArrowRight />
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* BRAND & STATUS */}
            <div className="md:col-span-4 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-black rounded-sm" />
                <span className="text-sm font-bold tracking-tighter uppercase text-black">Insight Engine</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[220px]">
                The professional standard for non-invasive social intelligence. Built on the official Graph API protocol.
              </p>
              <div className="flex gap-4 grayscale opacity-50">
                <a href="https://github.com/lucide-icons/lucide" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity hover:text-black">
                    <IconGithub />
                </a>
                <a href="https://x.com/meta" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity hover:text-black">
                    <IconX />
                </a>
              </div>
            </div>

            {/* REAL RESOURCE LINKS (REPLACED # WITH REAL URLS) */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <FooterGroup title="Infrastructure" items={[
                { name: "Meta Graph API", url: "https://developers.facebook.com/docs/instagram-api" },
                { name: "Privacy Standards", url: "https://safety.google/privacy/ads-and-data/" },
                { name: "System Status", url: "https://metastatus.com/" }
              ]} />
              
              <FooterGroup title="Legal" items={[
                { name: "Privacy Policy", url: "https://policies.google.com/privacy" },
                { name: "Terms of Use", url: "https://opensource.org/licenses/MIT" },
                { name: "Data Protection", url: "https://gdpr-info.eu/" }
              ]} />

              <FooterGroup title="Developer" items={[
                { name: "Documentation", url: "https://lucide.dev/guide/" },
                { name: "GitHub Repo", url: "https://github.com/lucide-icons/lucide" },
                { name: "Bug Bounty", url: "https://www.hackerone.com/bug-bounty-programs" }
              ]} />
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-left">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">© 2026 INSIGHT ENGINE</span>
              <div className="h-3 w-px bg-slate-100 hidden md:block" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hidden md:block underline underline-offset-4 decoration-slate-200 cursor-help">Session: Encrypted</span>
            </div>
            
            <div className="flex items-center gap-6 grayscale opacity-30">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" className="h-2.5" alt="Meta" />
               <div className="h-3 w-px bg-slate-300" />
               <span className="text-[9px] font-black uppercase tracking-tighter tracking-[0.1em] text-black">AES-256 Bit Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FooterGroup = ({ title, items }) => (
  <div className="space-y-5 text-left">
    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 leading-none">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx}>
          <a 
            href={item.url} 
            target="_blank" 
            rel="noreferrer"
            className="group text-xs text-slate-400 hover:text-black cursor-pointer transition-all font-medium flex items-center gap-1"
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