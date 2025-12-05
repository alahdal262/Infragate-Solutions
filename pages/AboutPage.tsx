import React from 'react';
import { Building2, FileCheck, Users, Globe2, Award, Scale, Briefcase } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <Building2 className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-bold text-slate-300 tracking-wide uppercase">Est. 2023 • London, UK</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Infragate Solutions</h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            We are a British software engineering firm dedicated to building the critical infrastructure of the digital age. 
            We operate with the precision, security, and integrity expected of a UK corporate entity.
          </p>
        </div>

        {/* Company Details Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-10 mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
             <Scale className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
              <div className="p-3 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/20">
                <FileCheck className="text-white w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Corporate Registration</h2>
                <p className="text-slate-400 text-sm">Official details from Companies House (UK)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold">Registered Company Name</p>
                <p className="text-xl text-white font-medium tracking-tight">Infragate Solutions Ltd</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold">Company Number</p>
                <p className="text-xl text-white font-medium font-mono">14805395</p>
              </div>
               <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold">Jurisdiction</p>
                <p className="text-xl text-white font-medium">England & Wales</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold">Company Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                  <p className="text-xl text-white font-medium">Active & Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe2 className="text-brand-400 w-6 h-6"/> Global Vision
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              To be the global benchmark for secure, scalable government and enterprise software. We aim to bridge the gap between bureaucratic complexity and digital simplicity, exporting British engineering standards to the global market.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-indigo-400 w-6 h-6"/> Our Mission
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              We strive to empower organizations with "Smart Systems" that are not only robust and secure but also intelligent. We utilize the latest in AI and machine learning to automate processes and provide deep insights, ensuring our clients stay ahead of the curve.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
           <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Core Values</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Sovereignty", desc: "We believe in data sovereignty and code ownership. We build systems where you own your data and your logic." },
                { title: "Resilience", desc: "We design for failure. Our systems are architected to self-heal and maintain operations under high stress." },
                { title: "Transparency", desc: "We operate with absolute transparency. Regular audits, open communication, and clear documentation." }
              ].map((val, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                  <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
                  <p className="text-slate-400">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* History/Story */}
        <div className="prose prose-invert max-w-none border-t border-slate-800 pt-16">
          <h3 className="text-3xl font-bold text-white mb-6">The Infragate Story</h3>
          <p className="text-slate-400 mb-6 text-lg leading-relaxed">
            Founded in the United Kingdom, Infragate Solutions was born from a need for higher standards in the software outsourcing market. We observed that many off-the-shelf solutions lacked the architectural rigour required for sensitive government or financial data.
          </p>
          <p className="text-slate-400 mb-6 text-lg leading-relaxed">
            We assembled a team of senior architects, security experts, and AI researchers to create a firm that treats code as infrastructure—meant to last, meant to scale, and meant to be secure. Our name, "Infragate", reflects our role as the gateway to robust digital infrastructure.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Today, we serve clients ranging from public sector bodies to innovative FinTech startups, providing the same level of British engineering excellence to every project we touch.
          </p>
        </div>

      </div>
    </div>
  );
};