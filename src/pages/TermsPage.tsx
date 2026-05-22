
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/terms')} />
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold serif mb-4">Terms of Service</h1>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Last Updated: November 2024</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-24 prose prose-slate">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold serif text-slate-900">1. Booking & Deposits</h2>
            <p className="text-slate-600 leading-relaxed">
              A deposit (typically 10% of the total journey cost) is required to secure your bespoke itinerary and domestic travel components. This deposit covers the initial administrative costs and secures bookings with our high-demand luxury partners in China. Final payment is typically due 60 days prior to departure.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold serif text-slate-900">2. Cancellation Policy</h2>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                We understand that plans can change. Our cancellation policy is designed to be fair while respecting the commitments we make to local operators:
              </p>
              <ul className="space-y-4 text-slate-600 list-none pl-0">
                <li className="bg-emerald-50 p-4 border-l-4 border-emerald-800">
                  <strong className="text-emerald-900 block mb-1">More than 45 Days Notice:</strong>
                  Full refund of all payments, including your initial deposit. We offer 100% free cancellation during this window.
                </li>
                <li className="bg-slate-50 p-4 border-l-4 border-slate-400">
                  <strong className="text-slate-900 block mb-1">31 to 45 Days Notice:</strong>
                  A cancellation fee equal to 50% of your deposit will be retained to cover administrative and booking reversal costs.
                </li>
                <li className="bg-red-50 p-4 border-l-4 border-red-800">
                  <strong className="text-red-900 block mb-1">30 Days or Less Notice:</strong>
                  The full deposit is non-refundable. Additionally, fees up to 100% of the total trip cost may apply depending on the non-refundable policies of our airline and hotel partners.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold serif text-slate-900">3. Visa Responsibility</h2>
            <p className="text-slate-600 leading-relaxed">
              While we provide comprehensive guidance on the 30-day visa-free policy for Australian passport holders, the ultimate responsibility for entry into the People's Republic of China rests with the traveler. VisitChina.au is not liable for entry denials, passport issues, or sudden changes in international government policy.
            </p>
          </div>

          <div className="space-y-4">
             <h2 className="text-2xl font-bold serif text-slate-900">4. Limitation of Liability</h2>
             <p className="text-slate-600 leading-relaxed">
               VisitChina.au acts as an agent for local operators, hotels, and airlines. We are not liable for delays, accidents, or losses caused by these third-party providers. We strongly recommend all travelers obtain comprehensive travel insurance as outlined in our <Link to="/insurance" className="text-emerald-800 underline">Insurance Guide</Link>.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
