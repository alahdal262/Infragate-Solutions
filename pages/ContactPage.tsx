import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ChevronDown, ChevronUp, Loader2, CheckCircle, Database, Server, ShieldCheck, Smartphone } from 'lucide-react';
import { Button } from '../components/Button';
import { ContactFormData } from '../types';
import { submitContactForm } from '../services/contactService';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    serviceInterest: 'SDOS Pilot Program',
    message: '' 
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [currentStep, setCurrentStep] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const result = await submitContactForm(formState, (step) => {
        setCurrentStep(step);
      });
      
      if (result.success && result.id) {
        setReferenceId(result.id);
        setStatus('success');
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('idle');
    }
  };

  const faqs = [
    {
      q: "What countries can deploy SDOS?",
      a: "SDOS is designed for any nation seeking digital transformation. It's particularly effective for developing countries looking to leapfrog traditional e-government approaches. We support deployment in any language and regulatory framework."
    },
    {
      q: "How long does a pilot deployment take?",
      a: "A typical pilot for a single ministry can be deployed in 2-4 weeks. Full national rollout timelines depend on scope, but our cloning technology means successful pilots can scale to other ministries in days, not years."
    },
    {
      q: "Do we own the source code?",
      a: "Yes. SDOS emphasizes digital sovereignty. Your nation receives full source code ownership and can host on local servers. There is no vendor lock-in—you control your digital future."
    },
    {
      q: "What about security and compliance?",
      a: "SDOS is built on modern banking-grade security standards: WebAuthn authentication, multi-signature approvals, zero-trust architecture, and comprehensive audit trails. We align with ISO 27001, GDPR, and can adapt to local regulations."
    },
    {
      q: "Can SDOS integrate with existing systems?",
      a: "Absolutely. SDOS can operate in hybrid mode, working alongside existing systems while gradually migrating services. We provide APIs for integration with legacy databases and third-party services."
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Request SDOS Demo</h1>
          <p className="text-xl text-slate-400 mb-4">
            Schedule a pilot program consultation for your nation or ministry
          </p>
          <p dir="rtl" lang="ar" className="text-lg text-slate-500 italic">
            احجز استشارة لتطبيق نظام SDOS في بلدك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group-hover:border-brand-500/50 transition-colors">
                  <MapPin className="text-brand-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Headquarters</h3>
                  <p className="text-slate-400 text-base">London, United Kingdom</p>
                  <p className="text-slate-500 text-sm mt-1">Registered Office: 128 City Road, London, EC1V 2NX</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group-hover:border-brand-500/50 transition-colors">
                  <Mail className="text-brand-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-slate-400 text-base">info@infragatesolutions.com</p>
                  <p className="text-slate-500 text-sm mt-1">For all project enquiries and RFPs</p>
                </div>
              </div>

               <div className="flex items-start gap-5 group">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group-hover:border-brand-500/50 transition-colors">
                  <Phone className="text-brand-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Direct Line</h3>
                  <p className="text-slate-400 text-base">+44 7733 369839</p>
                  <p className="text-slate-500 text-sm mt-1">Mon - Fri, 09:00 - 17:00 (UK Time)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-brand-900/20 to-indigo-900/20 border border-brand-500/20 rounded-2xl">
              <h4 className="text-white font-bold mb-3 text-lg">Government Partnerships</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We partner with governments, development agencies, and international organizations to deploy SDOS. Contact us to discuss sovereign partnerships and technical cooperation agreements.
              </p>
              <a href="mailto:info@infragatesolutions.com" className="text-brand-400 hover:text-brand-300 font-semibold text-sm">Explore Partnerships &rarr;</a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50 shadow-lg shadow-emerald-500/20">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Securely Logged</h3>
                <p className="text-brand-400 font-mono text-sm mb-6 bg-brand-900/30 px-3 py-1 rounded border border-brand-500/30">REF: {referenceId}</p>
                <p className="text-slate-400 max-w-xs mx-auto mb-8">
                  Your project details have been encrypted and stored in our database. Our administration team has been notified via email.
                </p>
                <div className="w-full bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs font-mono space-y-2 mb-8 text-slate-500">
                   <div className="flex items-center gap-2"><Database size={12} className="text-emerald-500"/> Data written to secure_ledger_01</div>
                   <div className="flex items-center gap-2"><Mail size={12} className="text-sky-500"/> Alert sent to info@infragatesolutions.com</div>
                   <div className="flex items-center gap-2"><Smartphone size={12} className="text-purple-500"/> SMS Alert sent to +44 7733369839</div>
                </div>
                <button onClick={() => setStatus('idle')} className="text-brand-400 hover:text-brand-300 font-medium border-b border-brand-400/20 hover:border-brand-400 transition-all">Submit another enquiry</button>
              </div>
            ) : status === 'submitting' ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20">
                 <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full border-t-2 border-l-2 border-brand-500 animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Server className="w-8 h-8 text-brand-400" />
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Processing Request</h3>
                 <p className="text-brand-400 font-mono text-sm animate-pulse">{currentStep}</p>
                 <div className="mt-8 w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 animate-progress"></div>
                 </div>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">SDOS Demo Request</h3>
                  <div className="flex items-center gap-2 text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                    <ShieldCheck size={12} />
                    <span>SSL Secured</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-6">Tell us about your government or ministry and digital transformation goals.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">Organization / Ministry</label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="Ministry of Digital Transformation"
                      value={formState.company}
                      onChange={e => setFormState({...formState, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="+44 7000 000000"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2">Interest Area</label>
                   <div className="relative">
                     <select
                        id="service"
                        value={formState.serviceInterest}
                        onChange={e => setFormState({...formState, serviceInterest: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                     >
                       <option>SDOS Pilot Program</option>
                       <option>Full National Deployment</option>
                       <option>Single Ministry Implementation</option>
                       <option>Technical Consultation</option>
                       <option>Partnership Discussion</option>
                       <option>Investment Opportunity</option>
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 pointer-events-none w-5 h-5" />
                   </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Your Requirements</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Describe your digital transformation goals, current challenges, timeline expectations..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full py-4 text-lg shadow-xl shadow-brand-500/20">
                  Request Demo
                </Button>
                
                <p className="text-xs text-slate-600 text-center mt-4">
                  Protected by reCAPTCHA and subject to the Google Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto border-t border-slate-800 pt-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-slate-200">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-brand-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};