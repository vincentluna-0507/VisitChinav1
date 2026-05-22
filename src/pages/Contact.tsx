
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Sparkles, Calendar as CalendarIcon, User, Loader2, Globe } from 'lucide-react';
import Seo from '../components/Seo';
import { getTravelSuggestionStream } from '@/services/gemini';
import { sendEmailEnquiry } from '@/services/email';
import { getSeoRoute } from '../seo/routes';

const loadingMessages = [
  "Preparing your request...",
  "Alerting our specialist team...",
  "Transmitting to sales@visitchina.au...",
  "Finalising confirmation..."
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [loadingStep, setLoadingStep] = useState(0);
  
  // AI Assistant States
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiInput, setAiInput] = useState('');
  
  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    comment: '',
    bookingDate: '',
    bookingTime: ''
  });

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (formState === 'submitting') {
      interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % loadingMessages.length);
      }, 550);
    } else {
      setLoadingStep(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [formState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const success = await sendEmailEnquiry({
      ...formData,
      requestCall: true,
      aiContext: aiResponse
    });

    if (success) {
      setFormState('success');
    } else {
      setFormState('idle');
      alert("Submission error. Please try again or email us directly at sales@visitchina.au.");
    }
  };

  const handleAiAsk = async () => {
    if (!aiInput.trim() || aiLoading) return;
    const prompt = aiInput;
    setAiInput('');
    setAiLoading(true);
    setAiResponse('');
    try {
      const stream = getTravelSuggestionStream(prompt);
      for await (const chunk of stream) {
        setAiResponse(prev => (prev || '') + chunk);
      }
    } catch {
      setAiResponse("I encountered an issue. Please try describing your plan again.");
    } finally {
      setAiLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const timeSlots = [];
  for (let hour = 10; hour <= 20; hour++) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    timeSlots.push({ value: `${hour.toString().padStart(2, '0')}:00`, label: `${displayHour}:00 ${period}` });
    if (hour < 20) {
      timeSlots.push({ value: `${hour.toString().padStart(2, '0')}:30`, label: `${displayHour}:30 ${period}` });
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo route={getSeoRoute('/contact')} />
      <section className="bg-white pt-24 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-8 serif tracking-tight text-slate-900">Plan Your Journey</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Connect with our Australian-based specialists. Request a bespoke itinerary or share your dreams for a refined plan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7 bg-white p-10 md:p-16 shadow-2xl rounded-sm border border-slate-100">
            {formState === 'success' ? (
              <div className="text-center py-20 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="text-4xl font-bold serif mb-6">Enquiry Sent Successfully</h2>
                <p className="text-slate-600 text-xl font-light mb-10 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name.split(' ')[0]}. Your travel request has been transmitted to <strong>sales@visitchina.au</strong>. 
                  <br/><br/>
                  Our team will review your details and respond asap.
                </p>
                <button onClick={() => setFormState('idle')} className="text-emerald-800 font-black uppercase tracking-widest text-sm border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                  Make another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold serif flex items-center gap-3 text-slate-900">
                    <User className="text-emerald-800" size={24} /> 1. Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name *</label>
                      <input name="name" type="text" required value={formData.name} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 focus:bg-white focus:border-emerald-800 outline-none transition-all rounded-sm" placeholder="e.g. John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address *</label>
                      <input name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 focus:bg-white focus:border-emerald-800 outline-none transition-all rounded-sm" placeholder="e.g. john@example.com.au" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile / WhatsApp Number *</label>
                      <input name="mobile" type="tel" required value={formData.mobile} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 focus:bg-white focus:border-emerald-800 outline-none transition-all rounded-sm" placeholder="e.g. 0400 000 000" />
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-bold serif flex items-center gap-3 text-slate-900">
                    <MessageCircle className="text-emerald-800" size={24} /> 2. Your Travel Dreams
                  </h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Comments or Specific Requests</label>
                    <textarea name="comment" rows={4} value={formData.comment} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 focus:bg-white focus:border-emerald-800 outline-none transition-all rounded-sm" placeholder="Tell us about your dates, group size, or preferred destinations..."></textarea>
                  </div>
                </div>

                <div className="p-8 border border-emerald-100 bg-emerald-50 rounded-sm space-y-8">
                  <h3 className="text-2xl font-bold serif flex items-center gap-3 text-emerald-900">
                    <CalendarIcon className="text-emerald-800" size={24} /> 3. Schedule a Phone Call
                  </h3>
                  <div className="animate-in fade-in duration-500 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Preferred Date</label>
                        <input name="bookingDate" type="date" min={today} value={formData.bookingDate} onChange={handleInputChange} className="w-full bg-white border border-emerald-200 px-6 py-4 focus:border-emerald-800 outline-none rounded-sm text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Preferred Time (AEST)</label>
                        <select name="bookingTime" value={formData.bookingTime} onChange={handleInputChange} className="w-full bg-white border border-emerald-200 px-6 py-4 focus:border-emerald-800 outline-none rounded-sm text-sm">
                          <option value="">Anytime</option>
                          {timeSlots.map(slot => (
                            <option key={slot.value} value={slot.value}>{slot.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button disabled={formState === 'submitting'} className="w-full bg-emerald-900 text-white py-6 font-bold flex flex-col items-center justify-center gap-1 hover:bg-emerald-800 transition-all shadow-2xl rounded-sm disabled:bg-slate-300 relative group">
                  {formState === 'submitting' ? (
                    <div className="flex items-center gap-3 text-lg uppercase tracking-widest">
                      <Loader2 className="animate-spin" /> {loadingMessages[loadingStep]}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 text-lg uppercase tracking-widest">
                      <Globe size={20} /> Request Call & Send Enquiry
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-16">
            {/* AI Assistant Tool */}
            <div className="bg-emerald-50 p-10 border border-emerald-100 rounded-sm space-y-8 shadow-sm relative overflow-hidden">
              {aiLoading && (
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-200 overflow-hidden">
                  <div className="h-full bg-emerald-600 animate-[loading_1.5s_infinite_linear]"></div>
                </div>
              )}
              <div className="flex items-center gap-3 text-emerald-900 font-black uppercase tracking-widest text-xs">
                <Sparkles size={20} className="text-emerald-700" />
                <span>Trip Builder Assistant</span>
              </div>
              <p className="text-sm text-emerald-800/70 font-light leading-relaxed">
                Describe your ideas below. The AI's suggestions will be automatically attached to your enquiry for our consultants.
              </p>
              <div className="relative">
                <input type="text" value={aiInput} disabled={aiLoading} onChange={(e) => setAiInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()} placeholder={aiLoading ? "Consulting..." : "e.g. 2 weeks in October..."} className="w-full bg-white border border-slate-200 pl-6 pr-14 py-4 text-sm focus:border-emerald-800 outline-none rounded-sm" />
                <button onClick={handleAiAsk} disabled={aiLoading} className="absolute right-3 top-3 p-2 text-emerald-900"><Send size={20} /></button>
              </div>
              {(aiResponse || aiLoading) && (
                <div className="bg-white p-6 text-sm text-slate-600 border border-emerald-100 leading-relaxed italic shadow-sm rounded-sm">
                  {aiResponse}
                </div>
              )}
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-sm shadow-xl space-y-10">
              <h3 className="text-2xl font-bold serif text-white text-center border-b border-white/10 pb-4">Boutique AU Service</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-[11px] uppercase tracking-widest text-white/50 mb-1">Direct Line</h5>
                    <p className="text-white text-sm leading-relaxed">(02) 9055 4216</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle size={18} className="text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-[11px] uppercase tracking-widest text-white/50 mb-1">WhatsApp</h5>
                    <p className="text-white text-sm leading-relaxed">Australian Support Line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
