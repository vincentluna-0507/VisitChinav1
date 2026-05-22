import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MessageCircle, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Itineraries', path: '/itineraries' },
    { name: 'Travel Styles', path: '/styles' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Restored to the full primary logo asset
  const LOGO_URL = "https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/logo.png";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-emerald-900 text-white py-2.5 px-4 text-center text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] relative z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Info size={14} className="text-emerald-400" />
            <span>LATEST: 30-Day Visa-Free Entry for Australians until Dec 2026</span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={LOGO_URL} 
                  alt="VisitChina.au Logo" 
                  className="h-12 md:h-16 w-auto block" 
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-emerald-800' : 'text-slate-600 hover:text-emerald-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-emerald-900 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-emerald-800 transition-all shadow-sm"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-4 text-lg font-medium rounded-sm ${
                    isActive(link.path) ? 'bg-emerald-50 text-emerald-800' : 'text-slate-600 border-b border-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-emerald-900 text-white text-center py-4 rounded-sm font-bold mt-4"
              >
                Start Planning
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow" id="main-content">{children}</main>

      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
               <Link to="/" className="flex items-center mb-8">
                <img 
                  src={LOGO_URL} 
                  alt="VisitChina.au Logo" 
                  className="h-16 w-auto brightness-110" 
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Specialising in private, high-quality China journeys for Australians. Local experts ensuring comfort and safety.
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 font-bold uppercase tracking-widest">ABN 43 694 026 616</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-slate-100">Explore</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/itineraries" className="hover:text-emerald-400 transition-colors">Sample Itineraries</Link></li>
                <li><Link to="/destinations" className="hover:text-emerald-400 transition-colors">Destinations</Link></li>
                <li><Link to="/styles" className="hover:text-emerald-400 transition-colors">Travel Styles</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-slate-100">Support</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/visa-guide" className="hover:text-emerald-400 transition-colors">30-Day Visa Guide</Link></li>
                <li><Link to="/payment-help" className="hover:text-emerald-400 transition-colors">Payment Apps Help</Link></li>
                <li><Link to="/insurance" className="hover:text-emerald-400 transition-colors">Travel Insurance</Link></li>
                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-slate-100">Connect</h4>
              <ul className="space-y-5 text-sm text-slate-400">
                <li className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors">
                    <Mail size={14} />
                  </div>
                  <a href="mailto:sales@visitchina.au" className="group-hover:text-white transition-colors">sales@visitchina.au</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="group-hover:text-white transition-colors">(02) 9055 4216</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors">
                    <MessageCircle size={14} />
                  </div>
                  <span className="group-hover:text-white transition-colors">WhatsApp Support Available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} VisitChina.au. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;