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
    serviceInterest: 'Enterprise Architecture',
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
      q: "Do you work with international clients?",
      a: "Yes. While we are UK-based and registered, we serve clients globally, particularly in the Middle East and Europe, ensuring compliance with local data regulations."
    },
    {
      q: "What is your typical project timeline?",
      a: "Timeline depends on complexity. A typical government portal MVP might take 3-6 months, while complex enterprise integration can be 6-12 months. We work in 2-week agile sprints."
    },
    {
      q: "Are you ISO 27001 certified?",
      a: "Our internal workflows are aligned with ISO 27001 and Cyber Essentials Plus standards. We can assist your project in achieving these certifications."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Absolutely. We offer 24/7 Service Level Agreements (SLAs) for critical infrastructure, including security patching, uptime monitoring, and feature updates."
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-400">
            Discuss your requirements with our London-based engineering team.
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
              <h4 className="text-white font-bold mb-3 text-lg">Join the Team</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We are always looking for exceptional talent in React, Node, Python, and DevOps. If you are passionate about high-performance engineering, get in touch.
              </p>
              <a href="mailto:info@infragatesolutions.com" className="text-brand-400 hover:text-brand-300 font-semibold text-sm">Send us your CV &rarr;</a>
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
                  <h3 className="text-2xl font-bold text-white">Project Enquiry</h3>
                  <div className="flex items-center gap-2 text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                    <ShieldCheck size={12} />
                    <span>SSL Secured</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-6">Tell us about your project infrastructure and requirements.</p>
                
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
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="Acme Corp Ltd"
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
                   <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2">Service Interest</label>
                   <div className="relative">
                     <select
                        id="service"
                        value={formState.serviceInterest}
                        onChange={e => setFormState({...formState, serviceInterest: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                     >
                       <option>Government Digital Systems (GDS)</option>
                       <option>Enterprise Architecture</option>
                       <option>AI & Smart Applications</option>
                       <option>IoT & Smart Cities</option>
                       <option>Cybersecurity Audit</option>
                       <option>FinTech Infrastructure</option>
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 pointer-events-none w-5 h-5" />
                   </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Please describe your requirements, timeline, and technical constraints..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full py-4 text-lg shadow-xl shadow-brand-500/20">
                  Submit Enquiry
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