
import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';

const VisaGuidePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/visa-guide')} />
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="mx-auto text-emerald-800 mb-6" size={48} />
          <h1 className="text-5xl font-bold serif mb-6">30-Day Visa-Free Guide</h1>
          <p className="text-xl text-slate-600 font-light">Essential information for Australian passport holders traveling to China.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-24 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold serif text-slate-900">The 2024-2026 Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            As of late 2024, the Chinese government has extended a <strong>30-day visa-free entry</strong> policy for citizens of Australia. This allows for seamless travel for tourism, business, and visiting family without the need for a pre-arranged visa.
          </p>
          <div className="bg-emerald-50 p-6 border-l-4 border-emerald-800 italic text-emerald-900 text-sm">
            Current Validity: This policy is currently scheduled to remain in effect until <strong>December 31, 2026</strong>.
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold serif flex items-center gap-3">
            <FileText className="text-emerald-800" size={24} /> Entry Requirements
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Valid Australian Passport (6 months validity remaining)",
              "Stay duration must not exceed 30 days",
              "Proof of onward/return travel",
              "Completed Arrival Card (provided on flight)",
              "Biometric data collection at immigration",
              "Accommodation registration (handled by hotels)"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start p-4 bg-slate-50 rounded-sm">
                <CheckCircle2 size={18} className="text-emerald-800 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold serif">Staying Longer?</h3>
          <p className="text-slate-600 leading-relaxed">
            If your planned journey exceeds 30 days, or if you are traveling for work or long-term study, a standard L (Tourist) or relevant visa is still required. Our team can provide guidance on the application process through the China Visa Application Service Center in Sydney, Melbourne, Brisbane, Perth, or Adelaide.
          </p>
        </div>

        {/* TECH & TRAVEL TIPS (SEO ENHANCEMENT) */}
        <div className="bg-slate-900 text-white p-10 rounded-sm shadow-2xl space-y-8">
          <h3 className="text-2xl font-bold serif text-emerald-400">Essential Tech Tips for Australians</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-widest text-xs text-emerald-200">Digital Payments</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                China is almost entirely cashless. We recommend setting up <strong>Alipay</strong> or <strong>WeChat Pay</strong> before leaving Australia. You can now link your Australian Visa or Mastercard directly to these apps.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-widest text-xs text-emerald-200">Internet & Connectivity</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                To access Google, Instagram, and Facebook, you'll need a reliable <strong>VPN</strong> or an <strong>eSIM</strong> with roaming data. We provide a curated list of working services for our clients.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100">
           <p className="text-xs text-slate-400 uppercase tracking-widest text-center">
             Information accurate as of November 2024. Policies are subject to change by the PRC Ministry of Foreign Affairs.
           </p>
        </div>
      </section>
    </div>
  );
};

export default VisaGuidePage;
