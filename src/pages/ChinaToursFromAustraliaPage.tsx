import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Compass, HeartHandshake, MapPin, ShieldCheck, Sparkles, TrainFront, Users } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { CHINA_TOURS_FROM_AU_FAQS } from '../seo/siteConfig';

const ChinaToursFromAustraliaPage: React.FC = () => {
  const serviceItems = [
    'Private customised itineraries across major cities and regional highlights',
    'Private guides and private transfers within China',
    'Hotel planning matched to your comfort level and route',
    'High-speed rail planning between key destinations',
    'Family-friendly pacing and practical day-to-day logistics',
    'Local support in China during the trip',
  ];

  const tripIdeas = [
    {
      title: 'First China Journey',
      description: 'A balanced route built around major cultural cities, comfortable pacing, and straightforward logistics for first-time visitors.',
    },
    {
      title: 'Family China Tour',
      description: 'Private family-friendly planning with flexible pacing, practical transfers, and destinations that work well for children and parents.',
    },
    {
      title: 'Scenic China by Rail',
      description: 'A route combining major cities with selected nature destinations, using high-speed rail where it makes the journey smoother.',
    },
  ];

  const notes = [
    'Most arrangements focus on China-side travel services rather than international flights.',
    'Digital payments, rail logistics, and local coordination are easier when planned in advance.',
    'Private touring allows more control over pacing, meal breaks, and day-to-day adjustments.',
  ];

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/china-tours-from-australia')} />
      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
              <Sparkles size={14} /> Australia-Based China Travel Planning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold serif mb-6 tracking-tight text-slate-900">
              China Tours from Australia
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Private China tours from Australia with customised itineraries, local guides, hotels, transfers, high-speed rail planning, and practical support for Australian travellers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              VisitChina.au mainly arranges China-side travel services for Australians: private itineraries, local guides, transfers, hotels, rail planning, and on-the-ground support. The service is best suited to travellers who want a private, tailored route rather than a fixed coach-style group tour.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Australia-based planning before departure</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Private guides and transfers in China</p>
            </div>
            <div className="flex items-start gap-3">
              <HeartHandshake className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">No shops, no factories, no forced detours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Why Australians Choose Private China Tours</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Private planning gives travellers more control over pace, comfort, and day-to-day logistics. For many Australians, that matters in a destination where rail coordination, transfers, payment setup, and language differences can shape the overall experience.
              </p>
              <p>
                VisitChina.au focuses on tailored routing, family-friendly planning where needed, and practical coordination inside China. The aim is not to oversell a fixed package, but to arrange a trip that fits the traveller, the route, and the pace they actually want.
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm space-y-5">
            <div className="flex items-start gap-4">
              <Compass className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">Custom routes planned from an Australian traveller’s perspective</p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">Private guides, private drivers, and local support in China</p>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">Suitable for couples, families, and multi-generational travel</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">No shopping stops, no factory visits, and no forced detours added to the route</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 mt-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">What We Can Arrange in China</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceItems.map((item) => (
              <div key={item} className="bg-white border border-slate-200 p-6 shadow-sm flex gap-4 items-start">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={18} />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Popular China Trip Ideas from Australia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tripIdeas.map((idea) => (
            <div key={idea.title} className="bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold serif mb-4 text-slate-900">{idea.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{idea.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/itineraries" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            See Sample Itineraries
          </Link>
          <Link to="/styles/family" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Explore Family China Tours
          </Link>
          <Link to="/destinations" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Browse Destinations
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">China Travel Notes for Australians</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div key={note} className="bg-white/5 border border-white/10 p-8">
                <TrainFront className="text-emerald-400 mb-4" size={22} />
                <p className="text-slate-300 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/visa-guide" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Visa Guide
            </Link>
            <Link to="/payment-help" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Payment Help
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions from Australians planning private travel in China.</p>
        </div>
        <div className="space-y-6">
          {CHINA_TOURS_FROM_AU_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Plan Your China Trip with Local Support</h2>
        <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
          If you want a private route planned around your pace, interests, and practical travel needs in China, we can help arrange the China-side journey.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ChinaToursFromAustraliaPage;
