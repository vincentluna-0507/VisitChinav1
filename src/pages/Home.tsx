import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Plane, Info, HelpCircle } from 'lucide-react';
import Seo from '../components/Seo';
import { TRAVEL_STYLES } from '../data';
import { getSeoRoute, getStyleRoutePath } from '../seo/routes';
import { TravelStyle } from '../types';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <Seo route={getSeoRoute('/')} />
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/home%20hero.jpg" 
            className="w-full h-full object-cover"
            alt="The Great Wall of China at Sunset - VisitChina.au"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-400/30">
            <Info size={14} /> 30-Day Visa-Free Entry for Australians until Dec 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 serif leading-tight">Authentic China, Seamlessly Arranged.</h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Australia’s premier China travel planners. Experience the East with expert local support from our Australian team of specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/itineraries" 
              className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 text-white px-10 py-4 rounded-sm font-medium transition-all text-lg shadow-lg"
            >
              Explore Sample Itineraries
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-sm font-medium transition-all text-lg"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* FLIGHTS & VISA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 flex gap-6 shadow-sm group hover:shadow-md transition-all">
          <div className="text-emerald-800 bg-white p-4 rounded-full shadow-sm shrink-0 h-fit group-hover:bg-emerald-800 group-hover:text-white transition-colors">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold serif text-emerald-900 mb-2">30-Day Visa-Free</h2>
            <p className="text-emerald-800/80 leading-relaxed mb-4 text-sm">
              Australian passport holders can now visit China for up to 30 days without a visa. We'll help you maximize this window with perfectly-paced itineraries.
            </p>
            <a href="https://au.china-embassy.gov.cn/eng/tzgg/202511/t20251105_11747334.htm" target="_blank" rel="noopener noreferrer" className="text-emerald-900 font-bold text-xs uppercase tracking-widest border-b border-emerald-900 hover:text-emerald-700 transition-colors">Official Details & Requirements</a>
          </div>
        </div>
        <div className="bg-slate-900 text-white p-8 md:p-10 flex gap-6 shadow-sm group hover:shadow-md transition-all">
          <div className="text-emerald-400 bg-white/10 p-4 rounded-full shrink-0 h-fit group-hover:bg-emerald-400 group-hover:text-slate-900 transition-colors">
            <Plane size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold serif mb-2 text-white">Direct AU Flights</h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              Daily direct flights from <strong>Sydney (SYD)</strong>, <strong>Melbourne (MEL)</strong>, and <strong>Brisbane (BNE)</strong>. We advise on the best routes and airlines for your plan.
            </p>
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Expert Route Planning</span>
          </div>
        </div>
      </section>

      {/* TRAVEL STYLES PREVIEW */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 serif">Bespoke China Travel Styles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Tailored journeys for first-time visitors, families, and seasoned explorers. 
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {TRAVEL_STYLES.map((style: TravelStyle, idx: number) => {
              // Bento Grid logic for 7 items
              let gridClasses = "bg-white border border-slate-200 group flex flex-col transition-all hover:shadow-xl overflow-hidden rounded-sm";
              
              if (idx === 0) { // Nature - Large Feature
                gridClasses += " lg:col-span-2 lg:row-span-2";
              } else if (idx === 1) { // Culture - Wide
                gridClasses += " lg:col-span-2";
              } else if (idx === 6) { // Food - Wide
                gridClasses += " lg:col-span-2";
              }
              
              return (
                <Link 
                  key={style.id} 
                  to={getStyleRoutePath(style.id)}
                  className={gridClasses}
                >
                  <div className="relative flex-grow overflow-hidden">
                    <img 
                      src={style.image} 
                      alt={style.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm w-10 h-10 flex items-center justify-center text-xl shadow-sm rounded-sm z-10">
                      {style.icon}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className={`${idx === 0 ? 'text-3xl' : 'text-xl'} font-bold serif mb-2 drop-shadow-sm`}>{style.name}</h3>
                      <p className={`text-white leading-relaxed mb-4 line-clamp-2 font-medium ${idx === 0 ? 'text-base' : 'text-xs'} drop-shadow-sm`}>
                        {style.description}
                      </p>
                      <span className="text-emerald-400 font-bold text-xs flex items-center gap-2 group/btn uppercase tracking-widest drop-shadow-sm">
                        Explore <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 serif flex items-center justify-center gap-3">
            <HelpCircle className="text-emerald-800" /> China Travel FAQs
          </h2>
          <p className="text-slate-600">Common questions from Australian travellers.</p>
        </div>
        <div className="space-y-6">
          {[
            {
              q: "Why can't I just travel China by myself (DIY)?",
              a: "China's travel ecosystem is unique and largely digital-first. Services like trains, local restaurants, and even park entry often require local ID or payment apps (Alipay/WeChat Pay) which can be challenging to set up without assistance. Additionally, language barriers outside major hubs can make navigating high-speed rail and hotel check-ins complex. We bridge that gap."
            },
            {
              q: "Is it safe for Australians?",
              a: "China remains one of the safest destinations globally for tourists. With our Australia-based specialists planning your route and local English-speaking guides on the ground, you have 24/7 support should you need any assistance."
            },
            {
              q: "How does the 30-day visa-free entry work?",
              a: "As of late 2024, Australian passport holders can enter China for tourism, business, or family visits for up to 30 days without a pre-arranged visa. You simply present your passport at immigration. This policy is currently set to run until December 2026."
            },
            {
              q: "Can I use my Australian phone apps there?",
              a: "Major Western apps like Google, Facebook, and Instagram are blocked. However, we provide all our guests with a tailored tech guide, including recommended VPNs and eSIMs, to ensure you stay connected to home flawlessly."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm rounded-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 serif uppercase tracking-tight">Your China Journey Starts Here</h2>
        <p className="text-slate-600 text-lg mb-12 font-light">
          Connect with our Australian-based specialists to begin your bespoke travel plan.
        </p>
        <Link to="/contact" className="bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Send an Enquiry
        </Link>
      </section>
    </div>
  );
};

export default Home;
