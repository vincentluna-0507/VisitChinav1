
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { STYLE_DETAILS } from '../data';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { StyleCityHighlight } from '../types';
import { ChevronLeft, MapPin, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';

const StyleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (id === 'kids') {
    return <Navigate to="/styles/family" replace />;
  }
  const resolvedId = id === 'family' ? 'kids' : id;
  const style = resolvedId ? STYLE_DETAILS[resolvedId] : null;

  if (!style) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold serif mb-4">Style not found</h2>
        <Link to="/styles" className="text-emerald-800 underline">Back to all styles</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute(`/styles/${id ?? style.id}`)} />
      {/* Header */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={style.image} alt={style.name} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-in fade-in zoom-in duration-700">
           <Link to="/styles" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 uppercase tracking-[0.3em] text-[10px] font-bold transition-all">
              <ChevronLeft size={14} /> All Travel Styles
            </Link>
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-4 font-black uppercase tracking-widest text-xs">
              <Sparkles size={16} /> {style.icon} Signature Experiences
            </div>
            <h1 className="text-5xl md:text-7xl font-bold serif mb-6 tracking-tight">{style.name}</h1>
            <p className="text-xl md:text-2xl font-light italic text-white/80">{style.introTitle}</p>
        </div>
      </header>

      {/* Overview Intro */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <p className="text-2xl text-slate-600 font-light leading-relaxed italic">
          "{style.description}"
        </p>
      </section>

      {/* City by City Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-40">
        {style.cities.map((city: StyleCityHighlight, cIdx: number) => (
          <div key={cIdx} className="space-y-20">
            {/* City Title */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <MapPin size={24} className="text-emerald-800" />
              <h2 className="text-4xl font-bold serif text-slate-900">{city.cityName}</h2>
            </div>

            {/* Sections within the city */}
            <div className="space-y-24">
              {city.sections.map((section: { title: string; points: string[]; image?: string; images?: string[] }, sIdx: number) => (
                <div key={sIdx} className={`flex flex-col ${sIdx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}>
                  {(section.image || (section.images && section.images.length > 0)) && (
                    <div className="w-full md:w-1/2 space-y-4">
                      {section.images && section.images.length > 1 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {section.images.map((img: string, i: number) => (
                            <div key={i} className={`overflow-hidden rounded-sm shadow-lg ${i === 0 && section.images!.length % 2 !== 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
                              <img src={img} alt={`${section.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
                          <img src={section.images?.[0] || section.image} alt={section.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      )}
                    </div>
                  )}
                  <div className={`w-full ${(section.image || section.images) ? 'md:w-1/2' : 'md:w-full'} space-y-6`}>
                    <h3 className="text-2xl font-bold serif text-emerald-900">{section.title}</h3>
                    <ul className="space-y-4">
                      {section.points.map((point: string, pIdx: number) => (
                        <li key={pIdx} className="flex gap-4 items-start group">
                          <CheckCircle size={18} className="text-emerald-700 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                          <p className="text-lg text-slate-600 leading-relaxed font-light">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold serif mb-8">Like This Travel Style?</h2>
          <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
            Our Australia-based consultants can weave these experiences into a bespoke itinerary tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/itineraries" className="bg-emerald-600 text-white px-10 py-4 font-bold hover:bg-emerald-500 transition-all text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-2">
                See Sample Itineraries <ChevronRight size={16} />
             </Link>
             <Link to="/contact" className="border-2 border-slate-700 text-white px-10 py-4 font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-widest flex items-center justify-center">
                Request a Custom Quote
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleDetail;
