
import React from 'react';
import { HeartPulse, ShieldAlert, PlaneTakeoff, HelpCircle } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';

const InsurancePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/insurance')} />
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HeartPulse className="mx-auto text-emerald-400 mb-6" size={48} />
          <h1 className="text-5xl font-bold serif mb-6">Travel Insurance</h1>
          <p className="text-xl text-slate-400 font-light">Peace of mind for your high-end China experience.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-24 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold serif text-slate-900">Why It's Essential</h2>
          <p className="text-slate-600 leading-relaxed text-lg font-light">
            While China is exceptionally safe, traveling in a foreign country always carries risks. For Australian travelers, medical costs in international wings of Chinese hospitals can be significant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 bg-slate-50 space-y-4">
              <ShieldAlert className="text-emerald-800" size={24} />
              <h4 className="font-bold text-lg">Medical Coverage</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Ensure your policy includes 'International SOS' or equivalent medical evacuation and coverage for private clinics in major cities like Beijing and Shanghai.</p>
           </div>
           <div className="p-8 bg-slate-50 space-y-4">
              <PlaneTakeoff className="text-emerald-800" size={24} />
              <h4 className="font-bold text-lg">Cancellation Protection</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Our journeys are bespoke and often involve non-refundable deposits for luxury boutique hotels. Insurance protects you against unforeseen changes in plans.</p>
           </div>
        </div>

        <div className="bg-emerald-50 p-10 space-y-6 text-center">
           <HelpCircle className="mx-auto text-emerald-800" size={32} />
           <h3 className="text-xl font-bold serif">Recommended Providers</h3>
           <p className="text-sm text-emerald-900/70">
             We recommend comprehensive policies from well-known Australian providers such as <strong>Allianz</strong>, <strong>Cover-More</strong>, or <strong>Bupa</strong>. Please ensure the policy specifically names China as a destination.
           </p>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;
