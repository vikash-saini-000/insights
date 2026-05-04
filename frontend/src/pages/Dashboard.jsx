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
            Encrypted Data Extraction
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-none">
            Unlock profile <br /> 
            <span className="text-slate-400 font-light">intelligence.</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            Access complete profile details and hidden posts for any Instagram user. <br className="hidden md:block" />
            Verify your session to bridge the secure API and start exploring.
          </p>

          <div className="pt-10 flex flex-col items-center gap-6">
            <button 
              onClick={() => navigate("/login")}
              className="px-12 py-5 bg-black text-white text-lg font-medium rounded-full hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200"
            >
              Reveal Private Content
              <IconArrowRight />
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Live Node: Instagram Graph Bridge Active
            </div>
          </div>
        </div>
      </main>

      {/* TARGETED VALUE PROPS */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
               <IconEye />
            </div>
            <h3 className="font-bold text-lg italic tracking-tight">Full Profile Access</h3>
            <p className="text-sm text-slate-500">By-pass visual barriers. View full-resolution posts, stories, and metadata from target usernames through our secure node.</p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
               <IconLayers />
            </div>
            <h3 className="font-bold text-lg italic tracking-tight">Post Extraction</h3>
            <p className="text-sm text-slate-500">Extract every detail. Once verified, simply enter a username to fetch an organized library of all profile posts instantly.</p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
               <IconShield />
            </div>
            <h3 className="font-bold text-lg italic tracking-tight">Secure Handshake</h3>
            <p className="text-sm text-slate-500">Identity verification is required to authorize the API bridge. Your details act as the key to unlock the Graph Engine.</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            <div className="md:col-span-4 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-black rounded-sm" />
                <span className="text-sm font-bold tracking-tighter uppercase text-black">Insight Engine</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[220px]">
                Proprietary node for Instagram profile intelligence and content extraction.
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

          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-left">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">© 2026 INSIGHT ENGINE</span>
              <div className="h-3 w-px bg-slate-100 hidden md:block" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hidden md:block underline underline-offset-4 decoration-slate-200 cursor-help">Social Node Connected</span>
            </div>
            
            <div className="flex items-center gap-6 grayscale opacity-30">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" className="h-2.5" alt="Meta" />
               <div className="h-3 w-px bg-slate-300" />
               <span className="text-[9px] font-black uppercase tracking-tighter tracking-[0.1em] text-black">AES-256 Bit Encryption</span>
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