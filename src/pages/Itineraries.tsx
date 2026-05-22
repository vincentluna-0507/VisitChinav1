import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Activity, ShieldCheck, Sparkles, CheckCircle, ListChecks, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import Seo from '../components/Seo';
import { ITINERARIES, ItineraryExtended } from '../data';
import { getSeoRoute } from '../seo/routes';

const Itineraries: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const whyAustraliansLoveThis: Record<string, string> = {
    'avatar-mountains': "Experience extreme visual contrasts—from neon lights in Shanghai to the misty limestone peaks of Yangshuo.",
    'imperial-pandas': "A perfectly balanced journey of ancient history and China’s relaxed modern lifestyle. Great for first-timers.",
    'china-for-kids': "The 'Wow' factor is real. China's theme parks and play centers are a multi-story luxury fantasy land for families."
  };

  const toggleDetails = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo route={getSeoRoute('/itineraries')} />
      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
            <ShieldCheck size={14} /> Visa-Free Eligible Itineraries
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 serif tracking-tight">Hand-Crafted Journeys</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed font-light">
            Designed by Australian specialists who know China intimately. These sample routes are fully customisable to your pace and style.
          </p>
        </div>
      </section>

      {/* FILTER/INFO BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-slate-900 text-white p-6 md:p-8 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
              <Sparkles className="text-emerald-300" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight">100% Personalised</h4>
              <p className="text-slate-400 text-sm">Every itinerary is a starting point, not a fixed tour.</p>
            </div>
          </div>
          <Link to="/contact" className="w-full md:w-auto bg-white text-slate-900 px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-emerald-50 transition-colors text-center">
            Customise a Route
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-24">
          {ITINERARIES.map((trip: ItineraryExtended, idx: number) => {
            // Split the title into two parts: [Route Name] and [Theme/Subtitle]
            const titleParts = trip.title.split(':');
            const routeName = titleParts[0]?.trim();
            const themeHeadline = titleParts[1]?.trim();

            return (
              <div key={trip.id} className="border-b border-slate-100 pb-24 last:border-0">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}>
                  <div className="lg:w-1/2 relative group">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                      <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                    </div>
                    {parseInt(trip.duration) <= 30 && (
                      <div className="absolute top-6 left-6 bg-emerald-900/95 backdrop-blur-md text-white px-4 py-2 rounded-sm shadow-xl flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-emerald-400/30">
                        <CheckCircle size={14} className="text-emerald-400" /> 30-Day Visa-Free Friendly
                      </div>
                    )}
                    <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-8 shadow-2xl border border-slate-100 hidden md:block max-w-xs">
                      <h5 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-2 italic text-[10px]">Why Australians love this:</h5>
                      <p className="text-sm text-slate-600 leading-relaxed font-light italic">"{whyAustraliansLoveThis[trip.id]}"</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 flex flex-col justify-center py-4">
                    <div className="flex items-center gap-6 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {trip.duration}</span>
                      <span className="flex items-center gap-1.5"><Activity size={14} /> {trip.activityLevel} Pace</span>
                    </div>
                    
                    <header className="mb-10">
                      {themeHeadline && (
                        <h2 className="text-4xl md:text-6xl font-bold serif mb-4 tracking-tight leading-[1.1] text-slate-900">
                          {themeHeadline}
                        </h2>
                      )}
                      <h3 className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-emerald-800/80">
                        {routeName}
                      </h3>
                    </header>

                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">{trip.overview}</p>
                    
                    <div className="space-y-4 mb-12">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Destinations Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trip.destinations.map((dest: string) => (
                          <span key={dest} className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium rounded-full">
                            <MapPin size={12} className="text-emerald-700" /> {dest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/contact"
                        className="flex-1 bg-emerald-900 text-white px-8 py-4 text-center font-bold hover:bg-emerald-800 transition-all shadow-xl text-sm uppercase tracking-widest flex items-center justify-center gap-3"
                      >
                        <MessageSquare size={18} /> Customise This Journey
                      </Link>
                      <button 
                        onClick={() => toggleDetails(trip.id)}
                        className="flex-1 border-2 border-slate-200 text-slate-800 px-8 py-4 text-center font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        {expandedId === trip.id ? <><ChevronUp size={16} /> Hide Details</> : <><ChevronDown size={16} /> More Details</>}
                      </button>
                    </div>
                  </div>
                </div>

                {/* EXPANDED DETAILS */}
                {expandedId === trip.id && (
                  <div className="mt-12 bg-white p-8 md:p-12 border border-slate-100 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold serif mb-8 flex items-center gap-3">
                          <ListChecks className="text-emerald-800" /> Daily Highlights
                        </h4>
                        <div className="space-y-8">
                          {trip.dailyHighlights.map((h: { day: string; title: string; description: string }, i: number) => (
                            <div key={i} className="flex gap-6 border-l-2 border-emerald-50 pl-6 relative">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-800 border-4 border-white"></div>
                              <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 mb-1 block">{h.day}</span>
                                <h5 className="font-bold text-slate-900 mb-2">{h.title}</h5>
                                <p className="text-slate-500 text-sm leading-relaxed">{h.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-8 rounded-sm">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6 border-b border-slate-200 pb-2">What's Included</h4>
                        <ul className="space-y-4">
                          {trip.inclusions.map((inc: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                              <CheckCircle size={14} className="text-emerald-700" /> {inc}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-10 p-6 bg-white border border-slate-100 italic text-xs text-slate-500 leading-relaxed">
                          * All itineraries are 100% customisable. Our Australia-based team will work with you to swap cities, extend stays, or upgrade hotels.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="bg-emerald-950 text-white py-32 mt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">Didn't find the perfect route?</h2>
          <p className="text-emerald-100/60 text-xl mb-12 font-light leading-relaxed">
            Our experts specialise in building itineraries from scratch. Whether you're chasing high-speed rail, remote mountains, or family heritage, we'll design it for you.
          </p>
          <Link to="/contact" className="bg-emerald-500 text-emerald-950 px-12 py-5 font-bold shadow-2xl hover:bg-emerald-400 transition-all text-xl inline-block uppercase tracking-widest">
            Start Your Bespoke Design
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Itineraries;
