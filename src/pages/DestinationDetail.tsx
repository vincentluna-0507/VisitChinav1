import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DESTINATIONS } from '../data';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { Destination, Activity as ActivityType } from '../types';
import { ChevronLeft, Info, Sparkles, Utensils, Activity } from 'lucide-react';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const destination = DESTINATIONS.find((d: Destination) => d.id === id);

  if (!destination) {
    return <div className="py-40 text-center">Destination not found. <Link to="/destinations" className="text-emerald-800">Back to all destinations</Link></div>;
  }

  const getCulinaryDescription = (cityName: string) => {
    switch (cityName) {
      case 'Beijing':
        return "From the world-famous Peking Duck to the humble Jianbing sold on street corners, Beijing's food scene is as royal as it is rustic. Experience authentic imperial banquets and hidden Hutong gems with our local guides.";
      case 'Shanghai':
        return "A refined palate compared to the spicier inland regions. Famous for its Xiao Long Bao (Soup Dumplings) and delicate Jiangnan cuisine. We book the tables that matter.";
      case 'Chengdu':
        return "Chengdu’s food culture is an essential part of its daily life and social scene. From bold spices to the signature 'Ma' (numbing) sensation, we take you beyond the spicy hotpot to the heart of Sichuanese home cooking.";
      case 'Xi\'an':
        return "Showcasing Xi’an’s multicultural heritage, the Muslim Quarter food stalls offer a lively introduction to Silk Road flavors and hand-pulled noodles.";
      case 'Zhangjiajie':
        return "Tujia ethnic minority cuisine. Spicy, pickled, and wild-harvested from the mountains. A unique taste of the frontier landscapes.";
      case 'Jiuzhaigou Valley':
        return "High-altitude Tibetan flavors. Yak meat, tsamba, and butter tea provide energy and warmth in this stunning alpine environment.";
      case 'Guilin & Yangshuo':
        return "Fresh river fish, Guilin rice noodles, and local pomelos. Clean, vibrant flavors that reflect the emerald landscape of the Li River.";
      default:
        return "China's culinary regions are as diverse as its landscapes. We curate dining experiences that highlight authentic local flavors and high standards.";
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo route={getSeoRoute(`/destinations/${destination.id}`)} />
      {/* HEADER */}
      <div className="relative h-[65vh]">
        <img src={destination.image} className="w-full h-full object-cover" alt={destination.name} loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl animate-in fade-in zoom-in duration-1000">
            <Link to="/destinations" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 uppercase tracking-[0.3em] text-[10px] font-bold transition-all">
              <ChevronLeft size={14} /> Back to Destinations
            </Link>
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-4 font-black uppercase tracking-widest text-xs">
              <Sparkles size={16} /> Signature City Spotlight
            </div>
            <h1 className="text-6xl md:text-9xl font-bold serif leading-none mb-6">{destination.name}</h1>
            <p className="text-xl md:text-2xl font-light italic text-white/80">{destination.overview}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
        <div className="bg-white p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              <section className="space-y-6">
                <h2 className="text-4xl font-bold serif text-slate-900 border-b border-slate-100 pb-6">History & Context</h2>
                <p className="text-slate-600 text-xl leading-relaxed font-light first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-emerald-800">
                  {destination.longDescription}
                </p>
              </section>

              <section className="space-y-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px bg-slate-200 flex-grow"></div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 shrink-0">Signature Pillars</h3>
                  <div className="h-px bg-slate-200 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-16">
                  {destination.activities?.map((activity: ActivityType, i: number) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center group`}>
                      <div className="w-full md:w-1/2 relative overflow-hidden aspect-[16/10] shadow-xl">
                        <img src={activity.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={activity.title} loading="lazy" />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-900">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-4">
                        <h4 className="text-2xl font-bold serif text-slate-900">{activity.title}</h4>
                        <p className="text-slate-600 leading-relaxed font-light text-lg">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-emerald-50 p-10 md:p-14 rounded-sm border border-emerald-100 space-y-8">
                <div className="flex items-center gap-3">
                   <Utensils size={24} className="text-emerald-800" />
                   <h3 className="text-2xl font-bold serif text-emerald-900">Culinary Identity</h3>
                </div>
                <p className="text-emerald-900/70 text-lg leading-relaxed italic">
                  {getCulinaryDescription(destination.name)}
                </p>
                <Link to="/contact" className="inline-block text-emerald-800 font-bold uppercase tracking-widest text-[10px] border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">Enquire for a foodie-led tour</Link>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 text-white p-10 rounded-sm shadow-xl sticky top-32">
                <div className="flex items-center gap-3 mb-8">
                   <Info size={18} className="text-emerald-400" />
                   <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Local Perspective</h4>
                </div>
                <ul className="space-y-8">
                  {destination.localTips ? destination.localTips.map((tip: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed font-light">{tip}</span>
                    </li>
                  )) : (
                    <>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="text-sm text-slate-300 leading-relaxed font-light">Download Alipay and link your Australian card before departure.</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="text-sm text-slate-300 leading-relaxed font-light">30-day visa-free rules apply to AU passport holders for tourism.</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="text-sm text-slate-300 leading-relaxed font-light">High-speed rail is the most efficient way to connect between major cities.</span>
                      </li>
                    </>
                  )}
                </ul>
                
                <div className="mt-12 pt-10 border-t border-white/10 space-y-6">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Ready to see {destination.name} through an Australian lens?
                  </p>
                  <Link to="/contact" className="block w-full bg-emerald-700 text-white py-4 text-center font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all shadow-lg">
                    Request custom quote
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-10 space-y-6 shadow-sm">
                <Activity size={32} className="text-emerald-800" />
                <h4 className="text-xl font-bold serif">Activity Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400 uppercase font-black">Pace</span>
                    <span className="font-bold text-slate-900">{destination.activityLevel}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400 uppercase font-black">Best For</span>
                    <span className="font-bold text-slate-900">{destination.bestFor.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
