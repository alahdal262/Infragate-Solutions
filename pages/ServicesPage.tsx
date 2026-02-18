import React from 'react';
import { Server, Database, Smartphone, ShieldCheck, Code, Settings, Cpu, Cloud, Lock, Zap, BarChart, Globe, Users, Copy, Languages, FileCheck, Building2, DollarSign, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/Button';
import { PageView } from '../types';

export const ServicesPage: React.FC<{ onNavigate: (p: PageView) => void }> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Identity Core Service",
      description: "The heart of SDOS. One unified national ID system managing citizens, residents, investors, and visitors. Enter data once in your lifetime—it becomes the master record for all government interactions. Built on WebAuthn with biometric authentication and zero-trust architecture.",
      tags: ["WebAuthn", "Biometric", "Master Profile", "Zero Trust"]
    },
    {
      icon: <Copy className="w-8 h-8 text-sky-400" />,
      title: "Service Cloning Engine",
      description: "Revolutionary drag-and-drop service creation without writing code. Clone successful services from one ministry and deploy to others instantly. A/B test improvements safely, then scale nationally with a single click. Change service names, fees, workflows—without touching the core database.",
      tags: ["No-Code", "Rapid Deploy", "A/B Testing", "Scalable"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "AI Assistant (Digital Secretary)",
      description: "Intelligent AI embedded in government dashboards. Drafts decisions, suggests organizational structures, prepares budget templates, and automates repetitive workflows. The AI assists but never decides—all actions require human approval and digital signature.",
      tags: ["Generative AI", "Smart Workflows", "Decision Support", "Compliance"]
    },
    {
      icon: <Languages className="w-8 h-8 text-emerald-400" />,
      title: "Multi-Language & Localization",
      description: "Built-in internationalization (i18n) with support for RTL and LTR languages. Add Arabic, English, French, Chinese, Persian, or any language through simple translation files. Deploy the same system globally while adapting to local regulations and cultural needs.",
      tags: ["i18n", "RTL Support", "Multi-Region", "Cultural Adapt"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
      title: "Security & Digital Signatures",
      description: "Unhackable security architecture based on modern banking standards. WebAuthn authentication, multi-signature approvals for sensitive actions, and a 'digital constitution' preventing system hijacking. Even if an admin account is compromised, critical operations require multiple approvals over a time delay.",
      tags: ["Multi-Sig", "WebAuthn", "Audit Trail", "Cyber Resilient"]
    },
    {
      icon: <FileCheck className="w-8 h-8 text-amber-400" />,
      title: "Smart Archiving (Hybrid Mode)",
      description: "Seamlessly transition between digital and paper workflows. Cloud archiving with MinIO on sovereign servers. Print any digital document with an encrypted QR code—citizens without smartphones can use paper, and staff scan codes to continue digitally. Track physical files with IoT sensors.",
      tags: ["Cloud Archive", "Hybrid Mode", "QR Codes", "IoT Tracking"]
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: "Real-Time Analytics & Dashboards",
      description: "Every service has automatic analytics: request counts, average processing time, revenue generated, and employee performance metrics. Leadership dashboards show national-level KPIs, bottlenecks, and efficiency trends. Make data-driven decisions in real-time.",
      tags: ["Analytics", "KPIs", "Leadership Dash", "Big Data"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-400" />,
      title: "Ministry Plug & Play",
      description: "Deploy a complete new ministry or government agency in days, not years. Pre-configured organizational hierarchy, role-based access control (RBAC), and workflow templates. Inheritance system ensures new entities automatically receive all core services and security policies.",
      tags: ["Rapid Setup", "RBAC", "Workflows", "Templates"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: "Economic Impact Engine",
      description: "Enable micro-businesses directly from citizen portals. Integrated payment gateways, tax automation, and licensing workflows. Citizens can launch businesses, pay taxes, and manage operations entirely digitally—stimulating local economies and creating jobs.",
      tags: ["FinTech", "Micro-Business", "Tax Automation", "Job Creation"]
    }
  ];

  const spinoffProducts = [
    {
      title: "Identity & eKYC Provider",
      description: "Sell identity verification services to banks, telcos, and private apps via API (like Saudi Arabia's 'Nafath')",
      icon: <Users className="w-5 h-5 text-brand-400" />
    },
    {
      title: "Workflow & Approval SaaS",
      description: "License the workflow engine to large enterprises for internal task management and compliance",
      icon: <Settings className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Digital Signature Hub",
      description: "Provide QR-code-backed contract signing for businesses, notarized by the government",
      icon: <FileCheck className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Org Chart & RBAC System",
      description: "Sell organizational management tools to private sector for employee permission systems",
      icon: <Building2 className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Credit Score System",
      description: "Enable credit scoring for loans, rentals, and business deals based on citizen transaction history",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">SDOS Features & Services</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4">
              Complete government operating system—from citizen identity to AI-powered workflows to economic transformation
            </p>
            <p dir="rtl" className="text-lg text-slate-500 max-w-2xl mx-auto italic">
              نظام تشغيل حكومي شامل يحوّل الدول إلى دول رقمية بالكامل
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20 group flex flex-col h-full">
              <div className="mb-6 p-4 bg-slate-950 rounded-2xl inline-block border border-slate-800 group-hover:border-brand-500/30 transition-colors w-fit shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-base flex-grow">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spin-off Products Section */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Spin-off Revenue Streams</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              SDOS components can be sold independently as commercial products to banks, telcos, and enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spinoffProducts.map((product, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/80 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-700 flex-shrink-0">
                    {product.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{product.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Microservices Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-6 p-4 bg-slate-950 rounded-xl border border-slate-700 w-fit mx-auto">
                <Users className="text-brand-400 w-10 h-10" />
              </div>
              <h4 className="text-white font-bold mb-3 text-xl">Identity Service</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Core of SDOS. Manages citizens, residents, investors, visitors with unified national ID</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-6 p-4 bg-slate-950 rounded-xl border border-slate-700 w-fit mx-auto">
                <Settings className="text-blue-400 w-10 h-10" />
              </div>
              <h4 className="text-white font-bold mb-3 text-xl">Service Engine</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Drag-and-drop service creation. No code required. Clone and scale instantly</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-6 p-4 bg-slate-950 rounded-xl border border-slate-700 w-fit mx-auto">
                <Cpu className="text-indigo-400 w-10 h-10" />
              </div>
              <h4 className="text-white font-bold mb-3 text-xl">AI Assistant</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Digital secretary in dashboards. Drafts decisions but requires human approval</p>
            </div>
          </div>
        </div>

        {/* Beneficiaries Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Benefits from SDOS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-brand-400" />
                <h3 className="text-xl font-bold text-white">Citizens & Residents</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                One portal for all services. See your documents, applications, medical records, and assets. Never carry paper again. Launch micro-businesses from your dashboard.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-brand-300 rounded-full border border-slate-800">Unified Portal</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-brand-300 rounded-full border border-slate-800">Digital Wallet</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-brand-300 rounded-full border border-slate-800">Business Launcher</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">Investors & Businesses</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                100% digital journey to establish companies, pay taxes, open bank accounts remotely. No physical presence required. Transparent timelines and automated approvals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-indigo-300 rounded-full border border-slate-800">Remote Setup</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-indigo-300 rounded-full border border-slate-800">Auto Tax</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-indigo-300 rounded-full border border-slate-800">Banking API</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Government Leadership</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Real-time dashboards showing performance of every ministry, revenue streams, bottlenecks, and citizen satisfaction. Make data-driven decisions instantly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-purple-300 rounded-full border border-slate-800">Live KPIs</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-purple-300 rounded-full border border-slate-800">Big Data</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-purple-300 rounded-full border border-slate-800">Analytics</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Government Employees</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Simplified work interface with AI assistance. Process requests faster, track workload, and get performance metrics. AI drafts responses, you approve.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-emerald-300 rounded-full border border-slate-800">AI Helper</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-emerald-300 rounded-full border border-slate-800">Fast Processing</span>
                <span className="text-xs px-3 py-1.5 bg-slate-950 text-emerald-300 rounded-full border border-slate-800">Metrics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Impact */}
        <div className="bg-brand-900/10 rounded-3xl p-10 md:p-16 border border-brand-500/20 mb-20">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">Economic Transformation</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">SDOS doesn't just digitize—it multiplies government revenue and empowers citizens economically</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">For Government</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Eliminate tax evasion and lost fees from paper processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Reduce operational costs by 80% (printing, buildings, queues)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Attract foreign direct investment (FDI) with transparency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Real-time revenue tracking and prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-brand-400" />
                <h3 className="text-xl font-bold text-white">For Citizens</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-1">•</span>
                  <span>Launch micro-businesses from portal with payment integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-1">•</span>
                  <span>Access credit scoring for loans and rentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-1">•</span>
                  <span>Stimulate local economy and create new jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-1">•</span>
                  <span>Transparent business operations and digital contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-brand-900/20 to-indigo-900/20 border border-brand-500/30 rounded-3xl p-12">
            <h3 className="text-3xl text-white font-bold mb-4">Ready to Transform Your Nation?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              One pilot project can prove the concept. Contact us to discuss deployment in your country.
            </p>
            <Button size="lg" onClick={() => onNavigate(PageView.CONTACT)}>
              Schedule a Consultation
            </Button>
        </div>
      </div>
    </div>
  );
};