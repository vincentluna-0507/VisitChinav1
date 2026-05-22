
import React from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { Destination } from '../types';
import { Plane, Smartphone, CreditCard, Sparkles, Activity, Star } from 'lucide-react';

const Destinations: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <Seo route={getSeoRoute('/destinations')} />
      {/* HERO SECTION */}
      <section className="bg-emerald-950 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/Destinations/shanghai.jpg" className="w-full h-full object-cover" alt="" aria-hidden="true" loading="eager" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-8 serif tracking-tight">Iconic Destinations</h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Curated cities and regions that provide the perfect balance of comfort, culture, and accessibility for Australian travellers.
          </p>
        </div>
      </section>

      {/* TRAVEL ESSENTIALS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white p-8 rounded-sm shadow-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Smartphone className="text-emerald-800 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Stay Connected</h4>
              <p className="text-xs text-slate-500">We assist with eSIMs and VPNs so your AU apps still work.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CreditCard className="text-emerald-800 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Payment Setup</h4>
              <p className="text-xs text-slate-500">Link your Aussie debit card to Alipay before you fly.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Plane className="text-emerald-800 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-1">AU Access</h4>
              <p className="text-xs text-slate-500">We advise on the best direct flight routes from Australia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {DESTINATIONS.map((dest: Destination, idx: number) => (
          <div key={dest.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative group">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg border border-slate-100">
                   <span className="flex items-center gap-1.5"><Activity size={10} className="text-emerald-800" /> {dest.activityLevel} Activity</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-center min-h-full py-4">
              <div className="inline-flex items-center gap-2 text-emerald-800 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <Sparkles size={14} /> City Spotlight
              </div>
              
              <h3 className="text-6xl font-bold serif mb-2 tracking-tight text-slate-900">{dest.name}</h3>
              <p className="text-emerald-800 font-medium italic text-xl mb-8 leading-relaxed">
                {dest.overview}
              </p>
              
              <div className="space-y-6 mb-12">
                <p className="text-slate-500 text-lg leading-relaxed font-light border-l-4 border-emerald-50 pl-8">
                  {dest.summary}
                </p>
                
                <div className="flex flex-wrap gap-3 pl-8">
                  {dest.bestFor.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star size={10} className="text-emerald-600" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to={`/destinations/${dest.id}`} className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 font-bold hover:bg-emerald-900 transition-all shadow-xl text-sm uppercase tracking-widest text-center">
                  Explore {dest.name} Landmarks
                </Link>
                <Link to="/contact" className="text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all text-sm uppercase tracking-widest">
                  Custom Quote for {dest.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER CTA */}
      <section className="bg-white py-32 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold serif mb-6 uppercase tracking-tight">Ready to Discover More?</h2>
          <p className="text-slate-600 text-lg mb-12 font-light max-w-2xl mx-auto">
            Our Australia-based consultants specialize in connecting these iconic cities into a seamless, 30-day visa-free journey.
          </p>
          <Link to="/contact" className="bg-emerald-900 text-white px-12 py-5 font-bold shadow-2xl hover:bg-emerald-800 transition-all text-xl inline-block uppercase tracking-widest">
            Enquire with a Specialist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
