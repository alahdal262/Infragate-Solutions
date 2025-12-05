import React, { useState } from 'react';
import { PageView } from '../types';
import { Menu, X, ChevronRight, ShieldCheck, Lock } from 'lucide-react';
import { Logo } from './Logo';
import { DigitalBackground } from './DigitalBackground';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: PageView.HOME },
    { label: 'Our Services', value: PageView.SERVICES },
    { label: 'About Us', value: PageView.ABOUT },
    { label: 'Contact', value: PageView.CONTACT },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans selection:bg-brand-500/30 relative">
      <DigitalBackground />
      
      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%]"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 supports-[backdrop-filter]:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate(PageView.HOME)}
            >
              <div className="relative mr-4">
                 <Logo className="w-12 h-12 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="block text-2xl font-bold tracking-tight text-white leading-none">Infragate</span>
                <span className="block text-xs text-brand-400 tracking-[0.2em] uppercase font-semibold mt-1.5">Solutions Ltd</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`text-sm font-medium transition-all duration-200 relative py-2 group ${
                    currentPage === item.value 
                      ? 'text-brand-400' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-400 transition-all duration-300 ${currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
              <button 
                 onClick={() => onNavigate(PageView.CONTACT)}
                 className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:border-slate-600 flex items-center gap-2"
              >
                <Lock className="w-3 h-3 text-brand-400" />
                Client Portal
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top-5">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                     currentPage === item.value 
                      ? 'bg-brand-900/20 text-brand-400 border border-brand-900/50' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-800">
                 <button className="w-full flex items-center justify-center gap-2 bg-slate-800 py-3 rounded-xl text-slate-200 font-medium">
                   <Lock className="w-4 h-4" /> Client Portal Access
                 </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - adjusted z-index to sit above background */}
      <main className="flex-grow pt-24 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/90 backdrop-blur-sm border-t border-slate-900 relative overflow-hidden z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-900 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center mb-6">
                <Logo className="w-10 h-10 mr-4" />
                <div>
                  <span className="text-2xl font-bold text-white block">Infragate Solutions</span>
                  <span className="text-[10px] text-brand-400 tracking-widest uppercase font-bold">Systems & Architecture</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-7 max-w-md mb-8">
                Infragate Solutions is a UK-registered leader in high-complexity software engineering. We architect the digital infrastructure that powers government bodies, financial institutions, and large-scale enterprises. Our commitment to security, scalability, and code sovereignty is unwavering.
              </p>
              <div className="flex flex-col gap-1 text-xs text-slate-500 font-mono bg-slate-900/50 p-4 rounded-lg border border-slate-800 inline-block">
                <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-green-500" /> UK REGISTERED COMPANY NO: 14805395</div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-green-500" /> VAT REGISTRATION PENDING</div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-green-500" /> ISO 27001 COMPLIANT WORKFLOWS</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6 border-l-2 border-brand-500 pl-3">Expertise</h3>
              <ul className="space-y-4">
                <li><button onClick={() => onNavigate(PageView.SERVICES)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>Government Digital Service</button></li>
                <li><button onClick={() => onNavigate(PageView.SERVICES)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>Enterprise Cloud Systems</button></li>
                <li><button onClick={() => onNavigate(PageView.SERVICES)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>AI & Predictive Analytics</button></li>
                <li><button onClick={() => onNavigate(PageView.SERVICES)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>Cybersecurity & Audit</button></li>
                <li><button onClick={() => onNavigate(PageView.SERVICES)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>FinTech Infrastructure</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6 border-l-2 border-brand-500 pl-3">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="text-slate-400 text-sm">
                  <strong className="block text-slate-300 mb-1">Headquarters</strong>
                  London, United Kingdom
                </li>
                <li className="text-slate-400 text-sm">
                  <strong className="block text-slate-300 mb-1">Enquiries</strong>
                  info@infragatesolutions.com
                </li>
                <li>
                  <button onClick={() => onNavigate(PageView.CONTACT)} className="mt-4 bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center transition-all shadow-lg shadow-brand-500/20">
                    Schedule Consultation <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Infragate Solutions Ltd. Registered in England & Wales (No: 14805395). All rights reserved.</p>
            <div className="flex flex-wrap gap-6 justify-center">
               <span className="text-slate-600 text-xs hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
               <span className="text-slate-600 text-xs hover:text-slate-400 cursor-pointer transition-colors">Terms & Conditions</span>
               <span className="text-slate-600 text-xs hover:text-slate-400 cursor-pointer transition-colors">Modern Slavery Statement</span>
               <span className="text-slate-600 text-xs hover:text-slate-400 cursor-pointer transition-colors">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};