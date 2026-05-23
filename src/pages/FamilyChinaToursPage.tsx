import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, HeartHandshake, Hotel, MapPin, ShieldCheck, Sparkles, TrainFront, Users } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { FAMILY_TOURS_FAQS } from '../seo/siteConfig';

const FamilyChinaToursPage: React.FC = () => {
  const planningPoints = [
    'Family-friendly pacing with realistic daily structure',
    'Private transfers to reduce friction between hotels, stations, and attractions',
    'Hotels with breakfast and suitable room options for families',
    'Kid-friendly attractions mixed with cultural experiences',
    'Less stressful city-to-city planning for first-time family trips',
    'Support for children and multi-generational groups',
  ];

  const destinations = [
    {
      title: 'Beijing',
      description:
        'A strong family starting point with major landmarks, broad cultural storytelling, and room for a balanced pace.',
      link: '/destinations/beijing',
    },
    {
      title: 'Shanghai',
      description:
        'Well-suited to families looking for comfort, modern infrastructure, and a smoother urban introduction to China.',
      link: '/destinations/shanghai',
    },
    {
      title: 'Chengdu',
      description:
        'A relaxed city that works well for families, especially when pandas, parks, and slower days are part of the plan.',
      link: '/destinations/chengdu',
    },
  ];

  const tripStyles = [
    'Classic first family trip with major cities and manageable travel days',
    'Culture-and-fun mix with landmarks, hands-on experiences, and lighter pacing',
    'Multi-generational private route with comfortable hotels and simpler logistics',
  ];

  const helpPoints = [
    'A private plan gives families more control over timing, meals, breaks, and energy levels.',
    'Private guides and private transfers can make a trip feel more predictable and less rushed.',
    'No shops, no factories, and no forced detours means more useful time for the family itself.',
    'Local support in China helps keep the trip coordinated when plans need small adjustments.',
  ];

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/styles/family')} />

      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
              <Sparkles size={14} /> Family-Friendly China Travel
            </div>
            <h1 className="text-5xl md:text-6xl font-bold serif mb-6 tracking-tight text-slate-900">
              China Family Tours
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Family-friendly China tours with customised itineraries, private guides, comfortable pacing, hotels, transfers, and local support for Australian families.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              China can work very well for Australian families when the itinerary is planned around comfort, pacing, and practical logistics. VisitChina.au mainly arranges China-side family travel services such as customised itineraries, private guides, private transfers, hotels, and local support in China.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <Users className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Suitable for children and multi-generational groups</p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Private guides and transfers for smoother family days</p>
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
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Why China Works Well for Family Trips</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                For families, China offers a strong mix of memorable landmarks, everyday cultural experiences, and city infrastructure that can support a comfortable trip when planned properly. The key is not trying to do too much too quickly.
              </p>
              <p>
                Children, parents, and grandparents often need different things from the same itinerary. A private route with better pacing can make the whole trip feel calmer, more flexible, and more enjoyable for everyone involved.
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm space-y-5">
            {planningPoints.map((item) => (
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
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">What We Consider When Planning Family China Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <Hotel className="text-emerald-800 mb-4" size={22} />
              <p className="text-slate-600 text-sm leading-relaxed">
                Hotel selection matters more for families, especially when breakfast, room configuration, and recovery time between days are part of the experience.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <TrainFront className="text-emerald-800 mb-4" size={22} />
              <p className="text-slate-600 text-sm leading-relaxed">
                City-to-city planning needs to stay manageable. Less stressful transfer days usually mean a better overall family trip.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <MapPin className="text-emerald-800 mb-4" size={22} />
              <p className="text-slate-600 text-sm leading-relaxed">
                Kid-friendly attractions and cultural experiences work best when balanced rather than packed too tightly together.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <Users className="text-emerald-800 mb-4" size={22} />
              <p className="text-slate-600 text-sm leading-relaxed">
                Private guides and private transfers can reduce friction for children, parents, and older family members alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Family-Friendly Destination Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div key={destination.title} className="bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold serif mb-4 text-slate-900">{destination.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{destination.description}</p>
              <Link to={destination.link} className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Explore {destination.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">Example Family Trip Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tripStyles.map((style) => (
              <div key={style} className="bg-white/5 border border-white/10 p-8">
                <p className="text-slate-300 text-sm leading-relaxed">{style}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/china-tours-from-australia" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              China Tours from Australia
            </Link>
            <Link to="/private-china-tours" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              Private China Tours
            </Link>
            <Link to="/itineraries" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              Sample Itineraries
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">How Private Planning Helps Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpPoints.map((point) => (
            <div key={point} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-4 items-start">
              <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/payment-help" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            China Payment Help
          </Link>
          <Link to="/contact" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions about planning family-friendly China travel from Australia.</p>
        </div>
        <div className="space-y-6">
          {FAMILY_TOURS_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Plan a Smoother Family Trip to China</h2>
        <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
          If you want a family route with calmer logistics, better pacing, and practical support inside China, we can help arrange the China-side journey.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default FamilyChinaToursPage;
