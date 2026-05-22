import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Compass, HeartHandshake, MapPin, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { PRIVATE_CHINA_TOURS_FAQS } from '../seo/siteConfig';

const PrivateChinaToursPage: React.FC = () => {
  const customisations = [
    'Route planning across cities, scenic regions, and cultural destinations',
    'Private guides and private transfers within China',
    'Flexible daily pacing shaped around comfort and interests',
    'Hotel selection aligned to your route and travel style',
    'High-speed rail planning where it improves logistics',
    'Family-friendly adjustments for children or multi-generational travel',
  ];

  const audiences = [
    'Couples who prefer a more personal and flexible route',
    'Families who need simpler logistics and adjustable pacing',
    'First-time visitors who want guidance without a large group format',
    'Travellers who want to avoid shops, factories, and forced detours',
  ];

  const tourIdeas = [
    {
      title: 'Classic Private China Journey',
      description:
        'A customised route through major cultural cities with private guides, smooth transfers, and pacing that suits first-time visitors.',
    },
    {
      title: 'Family-Focused China Tour',
      description:
        'Private planning for families with practical hotel choices, manageable daily structure, and room for flexibility on the ground.',
    },
    {
      title: 'Scenic and Cultural Mix',
      description:
        'A private itinerary combining headline landmarks with nature, regional character, and rail connections that make the journey more efficient.',
    },
  ];

  const planningSteps = [
    'We start with your preferred pace, interests, travel window, and practical needs.',
    'We shape a China-side itinerary with guides, hotels, transfers, and rail planning where appropriate.',
    'Before departure, we help clarify practical details for travelling in China as an Australian visitor.',
    'During the trip, local support in China helps keep the journey coordinated and responsive.',
  ];

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/private-china-tours')} />
      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
              <Sparkles size={14} /> Private Customised Touring
            </div>
            <h1 className="text-5xl md:text-6xl font-bold serif mb-6 tracking-tight text-slate-900">
              Private China Tours
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Private China tours with customised itineraries, private guides, flexible pacing, transfers, hotels, high-speed rail planning, and no forced shopping stops.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              A private China tour is best for travellers who want a route built around their own pace, interests, and comfort level. VisitChina.au mainly arranges China-side travel services, including private guides, private transfers, hotels, rail planning, and local support in China.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Private customised itineraries for Australian travellers</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Private guides, private transfers, and flexible daily pacing</p>
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
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Why Choose a Private Tour in China</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                China is a destination where the quality of the route and the day-to-day logistics can make a major difference to the travel experience. A private tour allows the itinerary to be shaped around your interests rather than forcing you into a fixed group rhythm.
              </p>
              <p>
                For Australian travellers, private planning can also make rail transfers, local coordination, family needs, and pacing easier to manage. The result is usually a smoother trip with more control over how the days actually feel.
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm space-y-5">
            <div className="flex items-start gap-4">
              <Compass className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">Custom routing built around your priorities and pace</p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">Private guides and transfers throughout the China-side journey</p>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">Suitable for couples, families, and multi-generational groups</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">No shopping stops, factory detours, or unnecessary filler days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 mt-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">What Can Be Customised</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customisations.map((item) => (
              <div key={item} className="bg-white border border-slate-200 p-6 shadow-sm flex gap-4 items-start">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={18} />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Who Private China Tours Are Best For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item) => (
            <div key={item} className="bg-white border border-slate-200 p-8 shadow-sm">
              <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">Private Tour Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tourIdeas.map((idea) => (
              <div key={idea.title} className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-2xl font-bold serif mb-4 text-white">{idea.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{idea.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/china-tours-from-australia" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Tours from Australia
            </Link>
            <Link to="/itineraries" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              Sample Itineraries
            </Link>
            <Link to="/destinations" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">How VisitChina.au Plans Your Private Tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planningSteps.map((step, index) => (
            <div key={step} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-900 flex items-center justify-center font-black text-sm shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/styles/family" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Family China Tours
          </Link>
          <Link to="/contact" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions about private touring in China for Australian travellers.</p>
        </div>
        <div className="space-y-6">
          {PRIVATE_CHINA_TOURS_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Start Planning a Private China Tour</h2>
        <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
          If you want a private route with more flexibility, clearer logistics, and China-side support shaped around your trip, we can help plan it.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default PrivateChinaToursPage;
