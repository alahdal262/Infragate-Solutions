import React from 'react';
import { Server, Database, Smartphone, ShieldCheck, Code, Settings, Cpu, Cloud, Lock, Zap, BarChart, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { PageView } from '../types';

export const ServicesPage: React.FC<{ onNavigate: (p: PageView) => void }> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-indigo-400" />,
      title: "Government Digital Systems",
      description: "We are experts in the UK Government Design System (GDS). We build citizen-facing services that are accessible (WCAG 2.1), secure, and capable of handling national-scale traffic. Our solutions include tax submission portals, license registries, and secure inter-departmental data exchanges via GOV.UK Notify and Pay integrations.",
      tags: ["GovTech", "GDS Standards", "Accessibility", "GOV.UK Pay"]
    },
    {
      icon: <Settings className="w-8 h-8 text-sky-400" />,
      title: "Enterprise Architecture",
      description: "We help large organizations move away from brittle legacy monoliths to resilient, scalable microservices. Utilizing Domain-Driven Design (DDD), we map complex business logic into independent, deployable units. We specialize in Event-Driven Architecture (EDA) using Apache Kafka to ensure real-time data consistency across distributed systems.",
      tags: ["Microservices", "Kafka", "Kubernetes", "DDD"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "AI & Smart Applications",
      description: "Infragate Solutions integrates state-of-the-art AI models (Gemini, GPT-4, Llama) into practical business applications. From intelligent chatbots for customer support to complex predictive maintenance models for manufacturing. We build 'Smart Systems' that learn, adapt, and optimize themselves over time.",
      tags: ["Generative AI", "TensorFlow", "NLP", "Predictive Models"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      title: "IoT & Smart Cities",
      description: "Connecting the physical and digital worlds. We develop the full stack for IoT solutions: from firmware on edge devices to high-throughput MQTT brokers and real-time visualization dashboards. We process telemetry data for Smart City initiatives, traffic management, and utility grid monitoring.",
      tags: ["IoT", "MQTT", "Edge Computing", "Real-time Dashboards"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
      title: "Cybersecurity & Compliance",
      description: "Security is not a feature; it is our foundation. We implement DevSecOps pipelines where security testing (SAST/DAST) is automated. We ensure all deliverables meet ISO 27001 standards, GDPR data sovereignty requirements, and Cyber Essentials Plus benchmarks. We conduct rigorous penetration testing before handover.",
      tags: ["DevSecOps", "GDPR", "ISO 27001", "Pen Testing"]
    },
    {
      icon: <Code className="w-8 h-8 text-amber-400" />,
      title: "FinTech & Blockchain",
      description: "Building the financial rails of tomorrow. We develop high-frequency trading interfaces, secure payment gateways compliant with PCI-DSS, and private blockchain ledgers for immutable audit trails. Our systems are designed for zero-latency transaction processing and absolute financial accuracy.",
      tags: ["FinTech", "PCI-DSS", "Blockchain", "High Frequency"]
    }
  ];

  return (
    <>
      <SEO
        title="Our Services"
        description="Expert software engineering services: Government digital systems, enterprise architecture, cloud infrastructure, mobile applications, and API development. UK-based team specializing in scalable, secure solutions."
        canonical="/services"
        keywords="software engineering services, government digital systems, enterprise architecture, cloud infrastructure, DevOps, API development"
      />
      <div className="bg-slate-950 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Capabilities</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Infragate Solutions delivers end-to-end engineering excellence. From the kernel to the cloud, our expertise covers the full spectrum of modern digital infrastructure.
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

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Cloud className="text-brand-400 w-8 h-8" /></div>
              <h4 className="text-white font-bold mb-2">Cloud & DevOps</h4>
              <p className="text-sm text-slate-500">AWS, Azure, GCP, Terraform, Kubernetes, Docker</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Code className="text-blue-400 w-8 h-8" /></div>
              <h4 className="text-white font-bold mb-2">Backend</h4>
              <p className="text-sm text-slate-500">Node.js, Python, Go, Rust, Java (Spring Boot)</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Globe className="text-indigo-400 w-8 h-8" /></div>
              <h4 className="text-white font-bold mb-2">Frontend</h4>
              <p className="text-sm text-slate-500">React, Next.js, TypeScript, Tailwind CSS, WebGL</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Database className="text-emerald-400 w-8 h-8" /></div>
              <h4 className="text-white font-bold mb-2">Data & AI</h4>
              <p className="text-sm text-slate-500">PostgreSQL, Redis, Kafka, TensorFlow, Gemini API</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-brand-900/10 rounded-3xl p-10 md:p-16 border border-brand-500/20">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">The Engineering Process</h2>
             <p className="text-slate-400">Our ISO 9001 aligned methodology ensures consistent, high-quality delivery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
            
            {[
              { step: "01", title: "Discovery", desc: "Requirements gathering, regulatory analysis, and feasibility studies." },
              { step: "02", title: "Architecture", desc: "System design, security modelling, and technology selection." },
              { step: "03", title: "Development", desc: "Agile sprints, code reviews, and automated testing (CI/CD)." },
              { step: "04", title: "Delivery", desc: "UAT, security auditing, and zero-downtime deployment." }
            ].map((item, i) => (
              <div key={item.step} className="relative bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                <div className="w-10 h-10 bg-brand-600 rounded-full text-white font-bold flex items-center justify-center mx-auto mb-4 border-4 border-slate-950 relative z-10 shadow-lg shadow-brand-600/20">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-2xl text-white font-bold mb-6">Need a custom solution?</h3>
            <Button size="lg" onClick={() => onNavigate(PageView.CONTACT)}>
              Book a Technical Consultation
            </Button>
        </div>
      </div>
    </div>
    </>
  );
};