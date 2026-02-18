import React from 'react';
import { Building2, FileCheck, Users, Globe2, Award, Scale, Briefcase, Target, Rocket, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <Building2 className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-bold text-slate-300 tracking-wide uppercase">SDOS Project • Gov-Stack Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About SDOS</h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-4">
            The Sovereign Digital Operating System (SDOS) is a comprehensive government operating system transforming nations from paper bureaucracy into intelligent digital states.
          </p>
          <p dir="rtl" className="text-lg text-slate-500 max-w-2xl mx-auto italic">
            نظام تشغيل الدولة الرقمية السيادي - نحن لا نبني موقعاً، بل نبني بنية تحتية رقمية للدولة بأكملها
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-brand-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="text-brand-400 w-6 h-6"/> Our Mission
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-4">
              To transform developing nations into fully digital sovereign states where citizens experience government services through a single portal, data is entered once in a lifetime, and corruption is eliminated through radical transparency.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We build "Infrastructure as Code" (IaC) representing the entire government apparatus—not just websites, but the complete digital backbone of a modern state.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe2 className="text-indigo-400 w-6 h-6"/> Global Vision
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-4">
              To become the global standard for digital governance. A platform so flexible it can be cloned, translated, and deployed in any nation within days instead of years.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our vision: "One Citizen • One Portal • One Unbreakable Identity" — where digital sovereignty protects nations from technological colonization.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
           <h3 className="text-2xl font-bold text-white mb-8 text-center">SDOS Core Principles</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <Shield className="w-6 h-6 text-brand-400" />,
                  title: "Digital Sovereignty", 
                  desc: "Nations own their data and code. Hosted on local servers. No vendor lock-in. True digital independence." 
                },
                { 
                  icon: <Rocket className="w-6 h-6 text-indigo-400" />,
                  title: "Rapid Deployment", 
                  desc: "Deploy in days, not years. Clone successful services across ministries instantly. Fail fast, scale faster." 
                },
                { 
                  icon: <Users className="w-6 h-6 text-purple-400" />,
                  title: "Citizen-Centric", 
                  desc: "Design for end-users first. One portal, one identity, zero bureaucracy. Government serves people, not the reverse." 
                }
              ].map((val, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800/80 transition-colors">
                  <div className="mb-4 p-3 bg-slate-950 rounded-lg border border-slate-700 w-fit">
                    {val.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* The SDOS Story */}
        <div className="prose prose-invert max-w-none border-t border-slate-800 pt-16 mb-20">
          <h3 className="text-3xl font-bold text-white mb-6">Why SDOS Exists</h3>
          <p className="text-slate-400 mb-6 text-lg leading-relaxed">
            SDOS was born from observing the tragic waste in developing nations: years spent building fragile government systems that fail upon launch, millions of dollars lost to vendor lock-in, and citizens suffering from bureaucratic chaos while their data is repeatedly requested.
          </p>
          <p className="text-slate-400 mb-6 text-lg leading-relaxed">
            We asked: "What if a government could deploy like a startup?" What if services could be cloned like code repositories? What if citizen data was sacred and entered only once? The answer is SDOS—a microservices-based, AI-enhanced, multi-language government operating system.
          </p>
          <p className="text-slate-400 mb-6 text-lg leading-relaxed">
            Unlike traditional e-government projects that take 5-10 years, SDOS can transform a ministry in weeks. Unlike proprietary systems, SDOS gives nations full source code ownership. Unlike rigid platforms, SDOS adapts to any language, culture, or regulatory framework.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            We don't just build software—we architect the digital future of sovereign nations.
          </p>
        </div>

        {/* Investor Message */}
        <div className="bg-gradient-to-br from-brand-900/20 to-indigo-900/20 border border-brand-500/30 rounded-3xl p-10 md:p-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/20">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Message to Investors</h3>
              <p className="text-slate-400">Why SDOS is a Safe Investment</p>
            </div>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>
              <strong className="text-white">"We are not building just an application—we are constructing the future of good governance."</strong>
            </p>
            <p>
              Investing in Gov-Stack (SDOS) is investing in inevitable infrastructure. Every nation must digitize to survive the 21st century. One successful pilot in a single ministry is enough to 10x the company's valuation and unlock entire sovereign markets.
            </p>
            <p>
              The spin-off revenue alone (Identity APIs, Workflow SaaS, Digital Signatures) ensures ROI even before full government adoption. This is not a bet—it's a certainty.
            </p>
            <p className="text-brand-300 font-semibold italic">
              "Success in one pilot project opens sovereign markets worth billions. This is nation-building as a service."
            </p>
          </div>
        </div>

        {/* Powered By */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm mb-2">Powered & Developed By</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">
            <Building2 className="w-4 h-4 text-brand-400" />
            <span className="text-white font-semibold">Infragate Solutions Ltd</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-sm font-mono">UK Reg: 14805395</span>
          </div>
          <p className="text-slate-500 text-xs mt-2">British Engineering Standards • Global Impact</p>
        </div>

      </div>
    </div>
  );
};