
import React from 'react';
import { Smartphone, CreditCard, QrCode, ShieldCheck } from 'lucide-react';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';

const PaymentHelpPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo route={getSeoRoute('/payment-help')} />
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Smartphone className="mx-auto text-emerald-400 mb-6" size={48} />
          <h1 className="text-5xl font-bold serif mb-6">Navigating a Cashless China</h1>
          <p className="text-xl text-emerald-100/70 font-light">How to use your Australian cards with Alipay and WeChat Pay.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h2 className="text-3xl font-bold serif text-slate-900">Why You Need It</h2>
            <p className="text-slate-600 leading-relaxed">
              China is the world's most advanced cashless society. While major hotels and high-end malls still accept international cards, the majority of daily transactions—from coffee shops and taxis to street food—are handled via <strong>Alipay</strong> or <strong>WeChat Pay</strong>.
            </p>
            
            <div className="bg-slate-50 p-8 border border-slate-200 space-y-6">
              <h3 className="font-bold flex items-center gap-2"><CreditCard size={18} className="text-emerald-800" /> Recommended: Alipay</h3>
              <ol className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-4"><span className="font-black text-emerald-800">01.</span> Download the Alipay App from the AU App Store/Play Store.</li>
                <li className="flex gap-4"><span className="font-black text-emerald-800">02.</span> Register with your Australian mobile number.</li>
                <li className="flex gap-4"><span className="font-black text-emerald-800">03.</span> Go to 'Bank Cards' and add your Australian Visa or Mastercard.</li>
                <li className="flex gap-4"><span className="font-black text-emerald-800">04.</span> Complete the ID verification with a photo of your passport.</li>
              </ol>
            </div>
          </div>

          <div className="space-y-10">
             <div className="aspect-square bg-slate-100 flex items-center justify-center p-12">
                <QrCode size={200} className="text-slate-300" />
             </div>
             <div className="space-y-6">
                <h3 className="text-xl font-bold serif">Tips for Aussies</h3>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li className="flex gap-3"><ShieldCheck className="text-emerald-700 shrink-0" size={16} /> <strong>Carry some cash:</strong> While rare, having 100-200 RMB in your wallet is a good backup for small emergencies.</li>
                  <li className="flex gap-3"><ShieldCheck className="text-emerald-700 shrink-0" size={16} /> <strong>Notify your bank:</strong> Let your AU bank (CBA, Westpac, etc.) know you are traveling to China to avoid security blocks.</li>
                  <li className="flex gap-3"><ShieldCheck className="text-emerald-700 shrink-0" size={16} /> <strong>Transaction Fees:</strong> Alipay usually charges 3% for transactions over 200 RMB. Smaller amounts are often free.</li>
                </ul>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentHelpPage;
