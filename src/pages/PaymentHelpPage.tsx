import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle2, CreditCard, Hotel, MapPinned, ShieldCheck, Smartphone, Sparkles, Ticket, Users, Wifi } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { PAYMENT_HELP_FAQS } from '../seo/siteConfig';

const PaymentHelpPage: React.FC = () => {
  const paymentOptions = [
    {
      title: 'Alipay',
      description:
        'Alipay is often one of the first payment tools travellers look at for daily spending in China. It can be helpful for QR-code payments, but setup, verification, and merchant acceptance may vary.',
    },
    {
      title: 'WeChat Pay',
      description:
        'WeChat Pay may also be useful for some travellers, especially where QR payments are common. It is sensible to prepare it as one option rather than assuming it will solve every payment need by itself.',
    },
    {
      title: 'International credit and debit cards',
      description:
        'Australian Visa and Mastercard cards may work more reliably in larger hotels, premium shops, and bigger merchants than in smaller everyday settings. A physical card is still worth carrying, but it should not be the only plan.',
    },
    {
      title: 'Cash',
      description:
        'Cash can still be useful as a backup, but it is often less convenient than digital payment methods for routine travel purchases in China.',
    },
    {
      title: 'Hotels and larger merchants',
      description:
        'Larger hotels and established tourism businesses may offer more payment flexibility than small merchants, but travellers should still prepare for practical variations from place to place.',
    },
  ];

  const appPrep = [
    'Set up eSIM or roaming before departure so payment apps, maps, and messaging are available when you land.',
    'Consider VPN needs carefully based on your own app usage and communication habits.',
    'Prepare translation tools and map or navigation options that you are comfortable using.',
    'Keep messaging access ready so local contacts, guides, or drivers can reach you during the trip.',
    'Save important booking details, hotel names, ticket references, and transport notes offline as a backup.',
  ];

  const familyPoints = [
    'Children and older family members may not have their own payment setup or app confidence.',
    'One adult often ends up managing bookings, tickets, and daily payments for the group.',
    'Private transfers can reduce the stress of handling apps and payments during busy travel days.',
    'Hotel location matters more when families want easier access to transport, attractions, and meals.',
    'Theme parks and major attractions often work better with advance planning rather than last-minute arrangements.',
  ];

  const mistakes = [
    'Arriving without mobile data',
    'Relying only on a physical credit card',
    'Assuming every merchant accepts cash or foreign cards',
    'Not testing payment apps before departure',
    'Not keeping backup payment methods',
    'Planning too many self-guided transfers without local support',
  ];

  const helpPoints = [
    'Practical itinerary pacing so each day feels manageable',
    'Private guides and transfers where smoother logistics matter most',
    'Hotel selection with suitable locations for transport and sightseeing',
    'Attraction timing that reduces last-minute scrambling',
    'High-speed rail planning and city-to-city coordination',
    'Local support in China to reduce self-navigation pressure',
  ];

  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/payment-help')} />

      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
              <Sparkles size={14} /> Practical Travel Preparation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold serif mb-6 tracking-tight text-slate-900">
              China Payment Apps Guide for Australians
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              A practical guide for Australian travellers preparing for payments, apps, connectivity and everyday travel logistics in China.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-emerald-900 text-white px-10 py-4 rounded-sm font-medium transition-all text-lg shadow-lg hover:bg-emerald-800">
                Plan My China Trip
              </Link>
              <Link to="/first-time-china-travel-guide" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-sm font-medium transition-all text-lg hover:bg-slate-50">
                View First-Time Travel Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold serif text-emerald-900 mb-4">Quick Answer</h2>
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              China is highly digital for everyday travel, dining, transport and attractions. Australian travellers should prepare payment apps such as Alipay or WeChat Pay, understand card and cash limitations, and set up mobile connectivity before arrival. VisitChina.au helps travellers plan around these practical details as part of a smoother China itinerary.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <Smartphone className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Mobile data, local apps, and payment setup matter before the trip starts</p>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Foreign card acceptance can vary between larger merchants and everyday spending situations</p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-sm text-emerald-900/80">Good preparation can make daily travel much less stressful for individuals and families</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Why Payments in China Can Feel Different</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                For many Australian travellers, the biggest surprise is how digital everyday spending can feel in China. Restaurants, local shops, attractions, and transport-related purchases may rely heavily on QR-code payments rather than the mix of tap-and-go card payments and cash that people are used to at home.
              </p>
              <p>
                Some places may not accept foreign cards directly, and cash can feel less convenient than digital payments. Local apps can also become part of daily logistics for maps, tickets, food ordering, and communication. A little preparation before arrival can reduce a lot of stress once the trip begins.
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold serif flex items-center gap-3 mb-6 text-slate-900">
              <Wifi className="text-emerald-800" size={24} /> What This Usually Means in Practice
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={20} />
                <p className="text-sm text-slate-600">Prepare at least one digital payment option before departure if possible.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={20} />
                <p className="text-sm text-slate-600">Bring backup payment methods rather than relying on one app or one physical card.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-800 shrink-0 mt-1" size={20} />
                <p className="text-sm text-slate-600">Treat connectivity as part of travel preparation, not a separate technical issue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 mt-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Common Payment Options for Travellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paymentOptions.map((option) => (
              <div key={option.title} className="bg-white border border-slate-200 p-8 shadow-sm">
                <CreditCard className="text-emerald-800 mb-4" size={22} />
                <h3 className="text-xl font-bold serif mb-3 text-slate-900">{option.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Apps and Connectivity to Prepare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appPrep.map((item) => (
            <div key={item} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-4 items-start">
              <Smartphone className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link to="/first-time-china-travel-guide" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            First-Time China Travel Guide
          </Link>
          <Link to="/visa-guide" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            China Visa Guide
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10">What Australian Families Should Consider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {familyPoints.map((point) => (
              <div key={point} className="bg-white/5 border border-white/10 p-8">
                <Users className="text-emerald-400 mb-4" size={22} />
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/styles/family" className="text-emerald-400 font-bold border-b border-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition-colors">
              Family China Tours
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold serif mb-10 text-slate-900">Common Mistakes to Avoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mistakes.map((mistake) => (
            <div key={mistake} className="bg-white border border-slate-200 p-8 shadow-sm flex gap-4 items-start">
              <AlertTriangle className="text-emerald-800 shrink-0 mt-1" size={18} />
              <p className="text-slate-600 text-sm leading-relaxed">{mistake}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold serif mb-10 text-slate-900">How VisitChina.au Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpPoints.map((point, index) => (
              <div key={point} className="bg-white border border-slate-200 p-8 shadow-sm">
                {index % 3 === 0 ? <MapPinned className="text-emerald-800 mb-4" size={22} /> : index % 3 === 1 ? <Hotel className="text-emerald-800 mb-4" size={22} /> : <Ticket className="text-emerald-800 mb-4" size={22} />}
                <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white border border-slate-200 p-8 shadow-sm">
            <p className="text-slate-600 leading-relaxed text-sm">
              VisitChina.au does not provide financial advice and cannot guarantee app approval or payment behaviour for every traveller. What we do provide is practical China-side trip planning around daily logistics, with private transfers, local support, suitable hotel locations, and route flow that reduces reliance on last-minute self-navigation. The planning approach also avoids shops, factories, and forced detours.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/china-tours-from-australia" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              China Tours from Australia
            </Link>
            <Link to="/private-china-tours" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              Private China Tours
            </Link>
            <Link to="/itineraries" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              China Itineraries
            </Link>
            <Link to="/contact" className="text-emerald-800 font-bold border-b border-emerald-800 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold serif mb-4 text-slate-900">FAQs</h2>
          <p className="text-slate-600">Common questions from Australians preparing payments, apps, and everyday logistics for a China trip.</p>
        </div>
        <div className="space-y-6">
          {PAYMENT_HELP_FAQS.map((faq) => (
            <div key={faq.question} className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold serif mb-4 text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-4xl font-bold serif mb-6 text-slate-900">Plan a China Trip with Smoother Daily Logistics</h2>
        <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
          Share your travel dates, group size, and preferred cities, and VisitChina.au can help shape a China itinerary with smoother transport, payment preparation, and everyday travel flow.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-900 text-white px-12 py-5 rounded-sm font-bold shadow-xl hover:bg-emerald-800 transition-all text-xl">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default PaymentHelpPage;
