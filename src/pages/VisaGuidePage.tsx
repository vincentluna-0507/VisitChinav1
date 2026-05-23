
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, CheckCircle2, TriangleAlert, CreditCard, Smartphone, TrainFront, Sparkles, MapPin } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { VISA_GUIDE_FAQS } from '../seo/siteConfig';

const VisaGuidePage: React.FC = () => {
  const usefulFor = [
    'First-time visitors to China',
    'Australian families planning a China holiday',
    "Travellers visiting Beijing, Shanghai, Chengdu, Xi'an or Zhangjiajie",
    'Short-term holidaymakers',
    'People combining several Chinese cities in one trip',
  ];

  const preparations = [
    'Valid Australian passport',
    'Confirmed travel dates',
    'Hotel or accommodation information',
    'Return or onward travel plan',
    'Travel insurance',
    'Payment setup such as Alipay or WeChat Pay',
    'eSIM or roaming plan',
    'A realistic city-to-city itinerary',
  ];

  const mistakes = [
    'Assuming China is easy to navigate without local apps',
    'Planning too many cities in a short trip',
    'Underestimating high-speed rail and station transfer time',
    'Not preparing payment apps before arrival',
    'Choosing hotels without considering location and transport',
    'Leaving attraction tickets too late during peak seasons',
  ];

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/visa-guide')} />
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
            <Sparkles size={14} /> Practical Entry Planning
          </div>
          <ShieldCheck className="mx-auto text-emerald-800 mb-6" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold serif mb-6">China Visa-Free Travel Guide for Australians</h1>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            A practical guide for Australian passport holders planning a short-term trip to China, including visa-free entry, stay length, travel purpose, and planning notes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-emerald-900 text-white px-10 py-4 rounded-sm font-medium transition-all text-lg shadow-lg hover:bg-emerald-800">
              Plan My China Trip
            </Link>
            <Link to="/itineraries" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-sm font-medium transition-all text-lg hover:bg-slate-50">
              View Sample Itineraries
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              Australian passport holders can currently visit China visa-free for eligible short-term purposes, including tourism, for up to 30 days under China&apos;s visa-free policy. Travellers should always check the latest official entry requirements before departure, as policies can change.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white border border-emerald-100 p-8 shadow-sm">
            <TriangleAlert className="text-emerald-800 mb-4" size={22} />
            <p className="text-sm text-slate-600 leading-relaxed">
              This page is practical travel guidance rather than legal advice. Official sources should be checked before departure.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">What the 30-Day Visa-Free Policy Means</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                For eligible Australian passport holders, the current policy can make short-term China travel easier to plan because a separate tourist visa may not be required in advance for qualifying visits. That can remove one major step from the planning process for a shorter holiday.
              </p>
              <p>
                Even so, no-visa travel does not mean no planning. Payments, apps, train coordination, hotel location, and realistic pacing still matter, especially for first-time visitors.
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold serif flex items-center gap-3 mb-6 text-slate-900">
              <FileText className="text-emerald-800" size={24} /> Who This Is Useful For
            </h3>
            <ul className="space-y-4">
              {usefulFor.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 mt-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">What Travellers Should Still Prepare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparations.map((item) => (
              <div key={item} className="bg-white border border-slate-200 p-6 shadow-sm flex gap-4 items-start">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={18} />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Common Planning Mistakes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mistakes.map((item) => (
            <div key={item} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-4 items-start">
              <TriangleAlert className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">Payments, Apps and Connectivity in China</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-8">
              <CreditCard className="text-emerald-400 mb-4" size={22} />
              <p className="text-slate-300 text-sm leading-relaxed">
                China can still require planning even when no visa is needed. Payments and local apps are often the first practical hurdle for new visitors.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <Smartphone className="text-emerald-400 mb-4" size={22} />
              <p className="text-slate-300 text-sm leading-relaxed">
                Alipay, WeChat Pay, and connectivity setup are easier to manage before departure than after arrival.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <TrainFront className="text-emerald-400 mb-4" size={22} />
              <p className="text-slate-300 text-sm leading-relaxed">
                Transport, hotel location, and city-to-city planning work best when tied to a realistic itinerary rather than treated as separate last-minute tasks.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/payment-help" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Payment Help
            </Link>
            <Link to="/first-time-china-travel-guide" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              First-Time China Travel Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">How VisitChina.au Helps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <MapPin className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              VisitChina.au mainly arranges China-side travel services, including route planning, private guides, private transfers, suitable hotels, high-speed rail connections, attraction tickets, and local support.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <ShieldCheck className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              The focus is on practical travel planning for Australians, with no shops, no factories, and no forced detours added into the itinerary.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/china-tours-from-australia" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            China Tours from Australia
          </Link>
          <Link to="/private-china-tours" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Private China Tours
          </Link>
          <Link to="/itineraries" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            View Sample Itineraries
          </Link>
          <Link to="/contact" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions about visa-free travel and practical China trip planning for Australians.</p>
        </div>
        <div className="space-y-6">
          {VISA_GUIDE_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Plan a Practical China Trip Under the Current Policy</h2>
        <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
          Share your travel dates, group size, preferred cities, and travel style, and VisitChina.au can help plan a suitable China-side itinerary.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Plan My China Trip
        </Link>
      </section>

      <section className="pb-10">
        <p className="text-xs text-slate-400 uppercase tracking-widest text-center px-4">
          Information should be checked against current official requirements before departure.
        </p>
      </section>
    </div>
  );
};

export default VisaGuidePage;
