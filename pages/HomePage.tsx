import React from 'react';
import { Button } from '../components/Button';
import { PageView } from '../types';
import { Shield, Server, Cpu, Layers, ArrowRight, CheckCircle, Lock, Globe, Database, Activity, Code2, Scale, Users, Building2, Zap, FileCheck, Search, Copy, Languages, Smartphone } from 'lucide-react';
import { Logo } from '../components/Logo';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-40 flex items-center justify-center overflow-hidden min-h-[90vh]">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[0%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md mb-10 animate-in fade-in slide-in-from-bottom-5 duration-700 shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200 tracking-wider uppercase">Sovereign Digital Operating System (SDOS)</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-indigo-500">Digital State</span><br className="hidden md:block"/>
            Operating System
          </h1>
          
          <p className="mt-6 max-w-4xl mx-auto text-xl text-slate-300 mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 leading-relaxed font-light drop-shadow-lg">
            From scattered paper bureaucracy to a smart, unified digital state aligned with the future of governance
          </p>
          
          <p dir="rtl" lang="ar" className="mt-4 max-w-4xl mx-auto text-lg text-slate-400 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 leading-relaxed font-light italic">
            "من بيروقراطية ورقية متناثرة.. إلى دولة رقمية ذكية، موحدة، ومتواكبة مع المستقبل الرقمي للحكومات"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <Button size="lg" onClick={() => onNavigate(PageView.SERVICES)} icon={<ArrowRight className="w-5 h-5"/>} className="shadow-brand-500/25 shadow-xl backdrop-blur-sm">
              Explore SDOS
            </Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate(PageView.CONTACT)}>
              Request Demo
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-24 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in delay-300 duration-1000 text-left md:text-center backdrop-blur-sm bg-slate-950/20 rounded-2xl p-6">
            <div>
              <p className="text-3xl font-bold text-white mb-1">1</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Citizen • One Portal</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white mb-1">80%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Cost Reduction</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white mb-1">Days</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Not Years to Deploy</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Digital Journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-slate-950/80 backdrop-blur-md border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4">The Challenge</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Breaking Free from <span className="text-red-400">Fragmented Bureaucracy</span>
              </h3>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Developing nations face a critical challenge: citizens and businesses must navigate dozens of disconnected government portals, repeatedly entering the same data, facing paper-based processes, and enduring corruption-prone bottlenecks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-400"><strong className="text-white">Scattered Services:</strong> Multiple portals for different ministries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-400"><strong className="text-white">Weak Infrastructure:</strong> Outdated systems that cannot scale</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-400"><strong className="text-white">Lack of Transparency:</strong> No digital tracking leads to corruption</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-400"><strong className="text-white">Wasted Investment:</strong> Years and millions spent with poor results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-8 overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code2 className="w-48 h-48" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  The SDOS Solution
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "Unified Portal", desc: "One search portal for all government services", icon: <Search className="w-5 h-5 text-brand-400" /> },
                    { title: "Master Profile", desc: "Enter citizen data once, use everywhere", icon: <Users className="w-5 h-5 text-indigo-400" /> },
                    { title: "Plug & Play", desc: "Deploy new ministries in days, not years", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
                    { title: "Unhackable Security", desc: "WebAuthn, multi-signature, zero trust", icon: <Lock className="w-5 h-5 text-emerald-400" /> }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-950/50 flex items-center justify-center border border-brand-500/30">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-sm">{item.title}</h5>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDOS Core Features - Bento Box Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SDOS Core Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Infrastructure as Code (IaC) for entire government operations — not just websites, but the complete digital backbone of a modern state
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Large Card - Identity Service */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 transition-all duration-500 cursor-pointer backdrop-blur-sm" onClick={() => onNavigate(PageView.SERVICES)}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/90 z-10"></div>
              <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Digital Identity" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 grayscale" />
              <div className="relative z-20 p-10 h-full flex flex-col justify-end min-h-[450px]">
                <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-600/20">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Identity Core (Master Profile)</h3>
                <p className="text-slate-300 mb-8 max-w-lg text-lg leading-relaxed">
                  One Citizen • One ID • One Portal. The heart of SDOS manages all citizens, residents, investors, and visitors with a unified national ID. Enter your data once in a lifetime, and it becomes the sovereign database for all government decisions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-slate-800/80 text-sm text-brand-300 border border-slate-700">WebAuthn</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-800/80 text-sm text-brand-300 border border-slate-700">Biometric Auth</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-800/80 text-sm text-brand-300 border border-slate-700">Zero Trust</span>
                </div>
              </div>
            </div>

            {/* Side Card 1 - Service Engine */}
            <div className="group rounded-3xl bg-slate-900/80 border border-slate-800 p-8 hover:bg-slate-800/90 transition-colors duration-300 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-600/20">
                  <Copy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Service Cloning Engine</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Drag & drop service creation with zero code. Clone successful services across ministries instantly. A/B test improvements and deploy nationally when ready.
                </p>
              </div>
              <button onClick={() => onNavigate(PageView.SERVICES)} className="text-indigo-400 font-medium hover:text-indigo-300 flex items-center mt-6 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Side Card 2 - Multi-language */}
            <div className="group rounded-3xl bg-slate-900/80 border border-slate-800 p-8 hover:bg-slate-800/90 transition-colors duration-300 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-sky-600/20">
                  <Languages className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Multi-Language Support</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Built-in i18n with RTL and LTR support. Add any language (Arabic, English, French, Chinese, Persian) through translation files. Deploy globally, govern locally.
                </p>
              </div>
               <button onClick={() => onNavigate(PageView.SERVICES)} className="text-sky-400 font-medium hover:text-sky-300 flex items-center mt-6 group-hover:translate-x-1 transition-transform">
                Explore i18n <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

             {/* Bottom Wide Card - AI Assistant */}
             <div className="md:col-span-3 bg-gradient-to-r from-slate-900/90 to-slate-800/90 rounded-3xl p-10 border border-slate-700/50 relative overflow-hidden group backdrop-blur-md">
                 <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Cpu className="text-purple-400 w-6 h-6" />
                        <h3 className="text-2xl font-bold text-white">AI Assistant (Digital Secretary)</h3>
                      </div>
                      <p className="text-slate-300 text-lg">
                        Smart AI works inside government dashboards to draft decisions, suggest organizational structures, and prepare budget templates. The AI assists but never executes—final approval always requires human signature.
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => onNavigate(PageView.SERVICES)}>AI Features</Button>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-brand-900/20 border border-brand-500/30 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center backdrop-blur-md">
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transform Your Nation</h2>
               <p className="text-slate-300 text-xl mb-4 max-w-2xl mx-auto">
                 Join the digital governance revolution. One successful pilot in a single ministry can multiply your nation's efficiency tenfold.
               </p>
               <p dir="rtl" lang="ar" className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
                 نحن لا نصمم مجرد تطبيق، نحن نبني مستقبل الحوكمة الرشيدة
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button variant="primary" size="lg" onClick={() => onNavigate(PageView.CONTACT)} className="px-10">
                   Request Demo
                 </Button>
                 <Button variant="secondary" size="lg" onClick={() => onNavigate(PageView.SERVICES)}>
                   Explore SDOS Features
                 </Button>
               </div>
               <p className="mt-8 text-xs text-slate-500 font-mono uppercase tracking-widest">
                 Powered by Infragate Solutions • UK Reg: 14805395
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};