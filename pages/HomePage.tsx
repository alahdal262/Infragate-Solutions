import React from 'react';
import { Button } from '../components/Button';
import { PageView } from '../types';
import { Shield, Server, Cpu, Layers, ArrowRight, CheckCircle, Lock, Globe, Database, Activity, Code2, Scale } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-40 flex items-center justify-center overflow-hidden min-h-[90vh]">
        {/* Abstract Background - Now reduced opacity to let DigitalBackground show */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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
            <span className="text-xs font-semibold text-slate-200 tracking-wider uppercase">Infragate Solutions • UK Reg: 14805395</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-2xl">
            Architecting <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-indigo-500">Sovereign Systems</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 leading-relaxed font-light drop-shadow-lg">
            We are the British engineering standard for complex government platforms, secure enterprise architectures, and mission-critical AI applications. We deliver <span className="text-white font-medium">clarity</span> in complexity and <span className="text-white font-medium">security</span> by design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <Button size="lg" onClick={() => onNavigate(PageView.SERVICES)} icon={<ArrowRight className="w-5 h-5"/>} className="shadow-brand-500/25 shadow-xl backdrop-blur-sm">
              View Capabilities
            </Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate(PageView.ABOUT)}>
              Company Profile
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-24 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in delay-300 duration-1000 text-left md:text-center backdrop-blur-sm bg-slate-950/20 rounded-2xl p-6">
            <div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">UK Sovereign Code</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white mb-1">ISO</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">27001 Aligned</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white mb-1">99.99%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Uptime SLA</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Support & Ops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Value Proposition */}
      <section className="py-24 bg-slate-950/80 backdrop-blur-md border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4">Why Infragate Solutions?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Bridging the Gap Between <span className="text-indigo-400">Bureaucracy</span> and <span className="text-brand-400">Innovation</span>
              </h3>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  In an era where digital sovereignty is paramount, Infragate Solutions stands as a fortress of engineering integrity. We do not simply "build apps"; we construct national-grade digital infrastructure designed to withstand high concurrency, cyber threats, and shifting regulatory landscapes.
                </p>
                <p>
                  Our unique value lies in our deep understanding of <strong>UK Government Design Systems (GDS)</strong> and complex enterprise compliance requirements (GDPR, HIPAA, PCI-DSS). We enable large organizations to innovate with the agility of a startup while retaining the governance of a global institution.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white font-medium bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                  <Shield className="text-green-500 w-5 h-5" /> GDPR Compliant
                </div>
                 <div className="flex items-center gap-2 text-white font-medium bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                  <Scale className="text-brand-500 w-5 h-5" /> Regulatory Tech
                </div>
                 <div className="flex items-center gap-2 text-white font-medium bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                  <Lock className="text-indigo-500 w-5 h-5" /> Zero Trust Security
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-8 overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code2 className="w-48 h-48" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Our Engineering Standards</h4>
                <ul className="space-y-4">
                  {[
                    { title: "Clean Architecture", desc: "Decoupled logic for maintainable, testable systems." },
                    { title: "Infrastructure as Code", desc: "Terraform & Ansible for reproducible environments." },
                    { title: "Continuous Compliance", desc: "Automated security scanning in CI/CD pipelines." },
                    { title: "Event-Driven Design", desc: "Kafka & RabbitMQ for real-time data consistency." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-900/50 flex items-center justify-center border border-brand-500/30 text-brand-400 font-bold text-sm">
                        {i + 1}
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

      {/* Feature Grid / Bento Box Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Core Competencies</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We specialize in the "Hard Problems" of software engineering. High load, complex logic, and strict security are where we thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Large Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 transition-all duration-500 cursor-pointer backdrop-blur-sm" onClick={() => onNavigate(PageView.SERVICES)}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/90 z-10"></div>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Government Building" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity" />
              <div className="relative z-20 p-10 h-full flex flex-col justify-end min-h-[450px]">
                <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-600/20">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Government Systems & G-Cloud</h3>
                <p className="text-slate-300 mb-8 max-w-lg text-lg leading-relaxed">
                  Specialized development for public sector infrastructure. We build secure citizen portals, national data registries, and inter-agency communication protocols compliant with GDS standards.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-slate-800/80 text-sm text-brand-300 border border-slate-700">GovTech</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-800/80 text-sm text-brand-300 border border-slate-700">WCAG 2.1 AA</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-800/80 text-sm text-brand-300 border border-slate-700">Cyber Essentials Plus</span>
                </div>
              </div>
            </div>

            {/* Side Card 1 */}
            <div className="group rounded-3xl bg-slate-900/80 border border-slate-800 p-8 hover:bg-slate-800/90 transition-colors duration-300 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-600/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI & Smart Intelligence</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Integrating Gemini, TensorFlow, and Large Language Models (LLMs) into business workflows. We build semantic search, automated decision support, and predictive maintenance engines.
                </p>
              </div>
              <button onClick={() => onNavigate(PageView.SERVICES)} className="text-indigo-400 font-medium hover:text-indigo-300 flex items-center mt-6 group-hover:translate-x-1 transition-transform">
                AI Solutions <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Side Card 2 */}
            <div className="group rounded-3xl bg-slate-900/80 border border-slate-800 p-8 hover:bg-slate-800/90 transition-colors duration-300 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-sky-600/20">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Complex Architecture</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We specialize in decomplexifying the enterprise. Microservices, Event-Driven Architecture, and Cloud-Native solutions (Kubernetes) designed for infinite horizontal scalability.
                </p>
              </div>
               <button onClick={() => onNavigate(PageView.SERVICES)} className="text-sky-400 font-medium hover:text-sky-300 flex items-center mt-6 group-hover:translate-x-1 transition-transform">
                View Tech Stack <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

             {/* Bottom Wide Card */}
             <div className="md:col-span-3 bg-gradient-to-r from-slate-900/90 to-slate-800/90 rounded-3xl p-10 border border-slate-700/50 relative overflow-hidden group backdrop-blur-md">
                 <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Activity className="text-emerald-400 w-6 h-6" />
                        <h3 className="text-2xl font-bold text-white">Smart Applications & IoT</h3>
                      </div>
                      <p className="text-slate-300 text-lg">
                        Connecting the physical world to the digital. From Smart Cities infrastructure to Industrial IoT (IIoT), we build the ingestion pipelines and dashboards that make sense of millions of sensor data points in real-time.
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => onNavigate(PageView.SERVICES)}>Learn More</Button>
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
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Modernize?</h2>
               <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
                 Partner with a UK-registered engineering firm that understands the nuance of government and enterprise requirements. 
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button variant="primary" size="lg" onClick={() => onNavigate(PageView.CONTACT)} className="px-10">
                   Contact Sales Department
                 </Button>
                 <Button variant="secondary" size="lg" onClick={() => onNavigate(PageView.SERVICES)}>
                   Browse Service Catalog
                 </Button>
               </div>
               <p className="mt-8 text-xs text-slate-500 font-mono uppercase tracking-widest">
                 Infragate Solutions Ltd • Company No: 14805395
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};