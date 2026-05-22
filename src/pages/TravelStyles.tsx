
import React from 'react';
import { Link } from 'react-router-dom';
import { TRAVEL_STYLES } from '../data';
import Seo from '../components/Seo';
import { getSeoRoute, getStyleRoutePath } from '../seo/routes';
import { TravelStyle } from '../types';
import { Activity, Star, Sparkles, ChevronRight, MapPin } from 'lucide-react';

const TravelStyles: React.FC = () => {
  const getCitiesForStyle = (id: string) => {
    const mapping: Record<string, string> = {
      nature: "Zhangjiajie, Jiuzhaigou Valley, Guilin & Yangshuo, Chengdu",
      culture: "Beijing, Xi’an, Chengdu, Shanghai",
      'local-life': "Beijing, Chengdu, Guilin",
      relaxed: "Guilin, Chengdu, Shanghai",
      adventure: "Zhangjiajie, Jiuzhaigou Valley, Beijing",
      kids: "Beijing, Xi'an, Chengdu, Shanghai",
      food: "Beijing, Shanghai, Chengdu, Xi'an, Qingdao"
    };
    return mapping[id] || "";
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo route={getSeoRoute('/styles')} />
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 serif tracking-tight">China Travel Styles</h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed font-light">
          Find the journey that fits you. We group our adventures by travel style, ensuring the pacing and experiences match your expectations perfectly.
        </p>
      </section>

      {/* STYLE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {TRAVEL_STYLES.map((style: TravelStyle, idx: number) => (
          <div key={style.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl group">
                <img src={style.image} alt={style.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {style.icon}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-2 text-emerald-800 font-black uppercase tracking-widest text-[10px]">
                <Sparkles size={14} /> Style Spotlight
              </div>
              <h2 className="text-4xl font-bold serif">{style.name}</h2>
              <div className="space-y-4">
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                  {style.description}
                </p>
                
                {/* Cities List */}
                <div className="pt-2 flex flex-col gap-2">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Featured Cities:</span>
                   <div className="flex items-center gap-2 text-emerald-900 font-medium text-sm">
                      <MapPin size={14} className="text-emerald-700 shrink-0" />
                      <span>{getCitiesForStyle(style.id)}</span>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 py-4">
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-wider"><Activity size={14} /> Tailored Pace</span>
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-wider"><Star size={14} /> Premium Comfort</span>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Link to={getStyleRoutePath(style.id)} className="inline-flex items-center gap-3 bg-emerald-900 text-white px-8 py-4 font-bold hover:bg-emerald-800 transition-all text-sm uppercase tracking-widest shadow-xl group">
                   Explore Style Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PERSONAL GUIDANCE */}
      <section className="bg-slate-50 py-24 mt-32 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold serif mb-8">Not Sure Which Style Fits You?</h2>
          <p className="text-slate-600 text-lg mb-12 font-light leading-relaxed">
            Many travellers enjoy a blend of styles—culture with nature, or local life with a relaxed pace. Tell us your interests, and our Australian team will match you with the perfect route.
          </p>
          <Link to="/contact" className="text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1 text-2xl hover:text-emerald-700 hover:border-emerald-700 transition-all uppercase tracking-tight">
            Consult an Australian Specialist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TravelStyles;
