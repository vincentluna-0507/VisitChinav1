import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Compass, CreditCard, MapPin, ShieldCheck, Smartphone, Sparkles, TrainFront, TriangleAlert, Users } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { FIRST_TIME_CHINA_GUIDE_FAQS } from '../seo/siteConfig';

const FirstTimeChinaTravelGuidePage: React.FC = () => {
  const firstTimePoints = [
    'China can feel unfamiliar for first-time visitors, especially outside airports and major hotel environments.',
    'Payments, local apps, and everyday logistics are easier when set up before departure.',
    'High-speed rail and city-to-city movement work well, but they still require coordination.',
  ];

  const transportPoints = [
    'High-speed rail is often the best way to connect major cities efficiently.',
    'Private transfers can reduce friction on arrival days, station changes, and family travel days.',
    'Itinerary pacing matters because long cross-country jumps can quickly make a first trip feel rushed.',
  ];

  const mistakes = [
    'Trying to see too many cities in one trip',
    'Leaving payment setup until arrival',
    'Underestimating transfer time between stations, hotels, and attractions',
    'Choosing a fixed route with shopping stops or unnecessary detours',
  ];

  const helpPoints = [
    'Australia-based planning before departure',
    'First-time-friendly and family-friendly route design',
    'Private guides and transfers where they make the journey smoother',
    'No shops, no factories, no forced detours',
    'Local support in China during the trip',
  ];

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/first-time-china-travel-guide')} />
      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
              <Sparkles size={14} /> Practical Guide for Australian Travellers
            </div>
            <h1 className="text-5xl md:text-6xl font-bold serif mb-6 tracking-tight text-slate-900">
              First-Time China Travel Guide for Australians
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              A practical first-time China travel guide for Australians covering visa-free entry, payments, transport, apps, itinerary planning, and local travel support.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              China is absolutely manageable for first-time Australian travellers, but it usually feels smoother when payments, apps, transport, and pacing are thought through in advance. VisitChina.au mainly helps with China-side travel planning, including itineraries, guides, transfers, hotels, rail coordination, and local support in China.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Practical planning for first-time and family-friendly trips</p>
            </div>
            <div className="flex items-start gap-3">
              <TrainFront className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Rail, transfers, and city-to-city coordination matter more than many travellers expect</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Private guides and transfers can make a first trip much smoother</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">What First-Time Travellers Should Know Before Visiting China</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                China can feel unfamiliar on a first visit because the travel systems, daily apps, and local routines are not always intuitive for Australian travellers. That does not make it difficult in a dramatic sense, but it does mean practical preparation matters.
              </p>
              <p>
                A well-paced route, clear city-to-city planning, and realistic day structure can make a major difference. First-time travellers often enjoy the trip more when the logistics are simpler and the itinerary is not overloaded.
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm space-y-5">
            {firstTimePoints.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={20} />
                <p className="text-sm text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 mt-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Visa-Free Entry for Australians</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <p className="text-slate-600 leading-relaxed text-lg">
                For short trips, entry rules can change over time, so travellers should always check official requirements before departure. The practical takeaway for first-time visitors is to confirm passport validity, entry conditions, and current policy details well before the trip rather than assuming old information still applies.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white border border-slate-200 p-8 shadow-sm">
              <TriangleAlert className="text-emerald-800 mb-4" size={22} />
              <p className="text-sm text-slate-600 leading-relaxed">
                This page provides practical travel guidance only. Official government and embassy sources should be checked before you depart.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/visa-guide" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              Read the China Visa Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Payments, Apps and Connectivity in China</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <CreditCard className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              Payments and local apps can be confusing for first-time travellers, especially if everything is left until arrival.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <Smartphone className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              It helps to prepare payment tools, app access, and connectivity options in advance rather than troubleshooting them on the ground.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <ShieldCheck className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              Good preparation reduces friction and makes the first few days much more comfortable.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/payment-help" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            China Payment Help
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">Getting Around China</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportPoints.map((point) => (
              <div key={point} className="bg-white/5 border border-white/10 p-8">
                <TrainFront className="text-emerald-400 mb-4" size={22} />
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">How to Plan a First-Time China Itinerary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <Compass className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              Start with a realistic number of destinations. First-time travellers usually benefit from a route that allows enough time to settle into each place rather than constantly moving.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <MapPin className="text-emerald-800 mb-4" size={22} />
            <p className="text-slate-600 text-sm leading-relaxed">
              Good pacing matters. Private guides, private transfers, and well-timed rail connections can make the trip feel easier and more enjoyable from the first day.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/itineraries" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            See Sample Itineraries
          </Link>
          <Link to="/destinations" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Browse Destinations
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Common Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mistakes.map((mistake) => (
              <div key={mistake} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-4 items-start">
                <TriangleAlert className="text-emerald-800 shrink-0 mt-1" size={18} />
                <p className="text-slate-600 text-sm leading-relaxed">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">How VisitChina.au Helps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpPoints.map((point) => (
            <div key={point} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-4 items-start">
              <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/china-tours-from-australia" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            China Tours from Australia
          </Link>
          <Link to="/private-china-tours" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Private China Tours
          </Link>
          <Link to="/contact" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions from Australians planning a first trip to China.</p>
        </div>
        <div className="space-y-6">
          {FIRST_TIME_CHINA_GUIDE_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Plan a Smoother First China Trip</h2>
        <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
          If you want a first-time-friendly route with practical pacing and better on-the-ground coordination, we can help arrange the China-side journey.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default FirstTimeChinaTravelGuidePage;
