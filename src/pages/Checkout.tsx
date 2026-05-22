import React, { useState, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ITINERARIES } from '../data';
import Seo from '../components/Seo';
import { getSeoRoute } from '../seo/routes';
import { Itinerary } from '../types';
import { ShieldCheck, CreditCard, ChevronLeft, CheckCircle2, Landmark, Copy, Info, Check, User, AlertCircle, ArrowRight, Lock, Loader2 } from 'lucide-react';

const Checkout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trip = useMemo(() => ITINERARIES.find((t: Itinerary) => t.id === id), [id]);
  
  const [step, setStep] = useState(1); // Step 1: Contact, Step 2: Payment
  const [passengers, setPassengers] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [bookingState, setBookingState] = useState<'form' | 'processing' | 'success'>('form');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  
  const paymentSectionRef = useRef<HTMLDivElement>(null);

  // Form State
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [cardExpiry, setCardExpiry] = useState('');

  // Currency Formatter for Australian Dollars
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Generate a random reference for bank transfers
  const referenceCode = useMemo(() => {
    // eslint-disable-next-line react-hooks/purity
    return 'VC' + Math.floor(100000 + Math.random() * 900000);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Logic: Remove all non-digits, then insert slash if length > 2
    let value = input.replace(/\D/g, ''); 
    if (value.length > 4) value = value.slice(0, 4); 
    
    let formatted = value;
    if (value.length > 2) {
      formatted = value.substring(0, 2) + '/' + value.substring(2);
    }
    setCardExpiry(formatted);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]); 
  };

  const validateContact = () => {
    const newErrors = [];
    if (!contactInfo.name.trim()) newErrors.push("Primary Contact Name is required.");
    if (!contactInfo.email.trim() || !contactInfo.email.includes('@')) newErrors.push("A valid email address is required.");
    if (!contactInfo.mobile.trim()) newErrors.push("Mobile number is required.");
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const proceedToPayment = () => {
    if (validateContact()) {
      setStep(2);
      // Wait for UI to update then scroll
      setTimeout(() => {
        paymentSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) {
      setStep(1);
      return;
    }
    
    if (paymentMethod === 'card' && cardExpiry.length < 5) {
      setErrors(["Please enter a valid card expiry (MM/YY)."]);
      return;
    }

    setBookingState('processing');
    setTimeout(() => setBookingState('success'), 2000);
  };

  const handleBankTransferComplete = () => {
    if (!validateContact()) {
      setStep(1);
      return;
    }
    setBookingState('success');
  };

  if (!trip) {
    return (
      <div className="py-40 text-center">
        <p className="mb-4">Trip not found.</p>
        <Link to="/itineraries" className="text-emerald-800 font-bold underline">Return to itineraries</Link>
      </div>
    );
  }

  const totalPrice = trip.price * passengers;
  const depositTotal = trip.deposit * passengers;

  if (bookingState === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-12 text-center shadow-xl border border-slate-200 animate-in zoom-in-95 duration-500 rounded-sm">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-bold serif mb-4">
            {paymentMethod === 'bank' ? 'Enquiry Logged' : 'Deposit Confirmed!'}
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {paymentMethod === 'bank' ? (
              `Please complete your transfer of ${formatCurrency(depositTotal)} using reference ${referenceCode}. Your spot is held for 48 hours.`
            ) : (
              `Thank you for choosing VisitChina.au, ${contactInfo.name.split(' ')[0]}. Your spot for ${trip.title} is now secured.`
            )}
            <br /><br />
            Our travel specialist will contact you at <strong>{contactInfo.email}</strong> within 24 hours to begin the personalization process.
          </p>
          <Link to="/" className="inline-block bg-emerald-900 text-white px-8 py-3 font-bold hover:bg-emerald-800 transition-colors uppercase tracking-widest text-xs">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Seo route={getSeoRoute(`/checkout/${trip.id}`)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/itineraries" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-800 mb-10 font-medium transition-colors">
          <ChevronLeft size={16} /> Back to Itineraries
        </Link>

        {/* Global Error Banner */}
        {errors.length > 0 && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm flex items-start gap-3">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm mb-1">Required Information Missing:</p>
              <ul className="text-xs list-disc pl-4">
                {errors.map((err: string, i: number) => <li key={i}>{err}</li>)}
              </ul>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Summary & Passenger Data */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Summary */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
              <h2 className="text-2xl font-bold serif mb-6">1. Your Selection</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img src={trip.image} className="w-full md:w-48 h-32 object-cover rounded-sm" alt={trip.title} loading="lazy" />
                <div>
                  <h3 className="text-xl font-bold serif mb-2">{trip.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{trip.duration} curated journey</p>
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-emerald-800">
                    <span className="bg-emerald-50 px-2 py-1">Australia-Based Planning</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Preferred Start Date</label>
                  <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-800/10 outline-none rounded-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Number of Travelers</label>
                  <div className="flex items-center border border-slate-200 rounded-sm">
                    <button onClick={() => setPassengers(Math.max(1, passengers - 1))} className="px-4 py-3 bg-slate-50 hover:bg-slate-100">-</button>
                    <div className="flex-grow text-center font-bold">{passengers}</div>
                    <button onClick={() => setPassengers(passengers + 1)} className="px-4 py-3 bg-slate-50 hover:bg-slate-100">+</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Passenger Details (MANDATORY BEFORE PAYMENT) */}
            <div className={`bg-white p-8 border border-slate-200 shadow-sm rounded-sm transition-all duration-500 ${step === 2 ? 'opacity-70 grayscale-[0.5]' : ''}`}>
              <h2 className="text-2xl font-bold serif mb-6 flex items-center gap-3">
                <User size={24} className="text-emerald-800" /> 2. Passenger Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Primary Contact Name *</label>
                  <input 
                    name="name" 
                    type="text" 
                    value={contactInfo.name} 
                    onChange={handleContactChange} 
                    disabled={step === 2}
                    className="w-full px-4 py-3 border border-slate-200 focus:border-emerald-800 outline-none rounded-sm disabled:bg-slate-50 disabled:cursor-not-allowed" 
                    placeholder="Full name as on passport" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Email Address *</label>
                  <input 
                    name="email" 
                    type="email" 
                    value={contactInfo.email} 
                    onChange={handleContactChange} 
                    disabled={step === 2}
                    className="w-full px-4 py-3 border border-slate-200 focus:border-emerald-800 outline-none rounded-sm disabled:bg-slate-50 disabled:cursor-not-allowed" 
                    placeholder="e.g. j.smith@provider.com.au" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Mobile Number *</label>
                  <input 
                    name="mobile" 
                    type="tel" 
                    value={contactInfo.mobile} 
                    onChange={handleContactChange} 
                    disabled={step === 2}
                    className="w-full px-4 py-3 border border-slate-200 focus:border-emerald-800 outline-none rounded-sm disabled:bg-slate-50 disabled:cursor-not-allowed" 
                    placeholder="e.g. 0400 000 000" 
                  />
                </div>
              </div>
              
              {step === 1 && (
                <button 
                  onClick={proceedToPayment}
                  className="mt-8 w-full md:w-auto bg-emerald-900 text-white px-10 py-4 font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all shadow-md rounded-sm uppercase tracking-widest text-sm"
                >
                  Confirm Details & Proceed <ArrowRight size={18} />
                </button>
              )}
              {step === 2 && (
                <button 
                  onClick={() => setStep(1)}
                  className="mt-4 text-xs font-bold text-emerald-800 underline uppercase tracking-widest"
                >
                  Change Contact Details
                </button>
              )}
            </div>

            <div className="bg-emerald-50 p-6 border border-emerald-100 flex items-start gap-4 rounded-sm">
              <ShieldCheck className="text-emerald-700 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-emerald-900 mb-1">Secure Booking Guarantee</h4>
                <p className="text-sm text-emerald-800/70 leading-relaxed">
                  Australian boutique service. Your funds are held securely until booking confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Payment Logic (Locked until Step 1 complete) */}
          <div className="lg:col-span-5" ref={paymentSectionRef}>
            <div className={`bg-white border border-slate-200 shadow-lg sticky top-32 rounded-sm overflow-hidden transition-all duration-700 ${step === 1 ? 'opacity-40 blur-[2px] pointer-events-none select-none' : 'opacity-100 blur-0'}`}>
              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-xl font-bold serif mb-4">3. Deposit Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Deposit ({formatCurrency(trip.deposit)} x {passengers})</span>
                    <span className="font-bold text-slate-900">{formatCurrency(depositTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>Remaining Balance</span>
                    <span>{formatCurrency(totalPrice - depositTotal)}</span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t border-slate-100 font-bold text-slate-900">
                    <span>Deposit Due Now</span>
                    <span className="text-emerald-800">{formatCurrency(depositTotal)}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Method Toggle */}
                <div className="flex p-1 bg-slate-100 rounded-sm">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm ${paymentMethod === 'card' ? 'bg-white shadow-sm text-emerald-900' : 'text-slate-500'}`}
                  >
                    <CreditCard size={14} /> Credit Card
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('bank')}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm ${paymentMethod === 'bank' ? 'bg-white shadow-sm text-emerald-900' : 'text-slate-500'}`}
                  >
                    <Landmark size={14} /> Bank Transfer
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cardholder Name</label>
                      <input type="text" placeholder="Full name as on card" className="w-full px-4 py-3 border border-slate-200 focus:border-emerald-800 outline-none rounded-sm" required />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 border border-slate-200 focus:border-emerald-800 outline-none rounded-sm" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expiry</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          value={cardExpiry}
                          onChange={handleExpiryChange}
                          className="w-full px-4 py-3 border border-slate-200 outline-none rounded-sm" 
                          required 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">CVC</label>
                        <input type="text" placeholder="123" className="w-full px-4 py-3 border border-slate-200 outline-none rounded-sm" required />
                      </div>
                    </div>
                    <button className="w-full bg-slate-900 text-white py-4 font-bold hover:bg-slate-800 transition-colors mt-2 rounded-sm text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                      {bookingState === 'processing' ? <Loader2 className="animate-spin" size={16} /> : <Lock size={14} />} 
                      {bookingState === 'processing' ? 'Processing...' : `Pay ${formatCurrency(depositTotal)} Securely`}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 border border-slate-200 space-y-4 rounded-sm">
                      <div className="flex items-center gap-2 text-emerald-800 mb-2">
                        <Info size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">Bank Transfer Details</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">BSB</span>
                          <button type="button" onClick={() => copyToClipboard('062-703', 'bsb')} className="flex items-center gap-2 font-bold text-sm hover:text-emerald-700 transition-colors">
                            062-703 {copiedField === 'bsb' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-slate-300" />}
                          </button>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Account No.</span>
                          <button type="button" onClick={() => copyToClipboard('10869027', 'acc')} className="flex items-center gap-2 font-bold text-sm hover:text-emerald-700 transition-colors">
                            1086 9027 {copiedField === 'acc' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-slate-300" />}
                          </button>
                        </div>
                        <div className="bg-emerald-900 text-white p-4 rounded-sm mt-4 shadow-md">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-widest">Reference Code</span>
                            <button type="button" onClick={() => copyToClipboard(referenceCode, 'ref')}>
                              <Copy size={14} className="text-emerald-400/50 hover:text-emerald-400 transition-all" />
                            </button>
                          </div>
                          <span className="text-xl font-mono font-bold block">{referenceCode}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={handleBankTransferComplete} className="w-full border-2 border-slate-900 text-slate-900 py-4 font-bold hover:bg-slate-50 transition-colors rounded-sm uppercase tracking-widest text-sm">
                      I've Made the Transfer
                    </button>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                  <Lock size={12} className="text-slate-400" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                    Authorized Australian Travel Agent
                  </p>
                </div>
              </div>
            </div>
            
            {step === 1 && (
              <div className="mt-8 text-center p-8 border-2 border-dashed border-slate-200 rounded-sm">
                <Lock className="mx-auto text-slate-300 mb-4" size={32} />
                <p className="text-slate-400 text-sm italic">
                  Step 3 (Payment) will unlock once passenger details are confirmed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
