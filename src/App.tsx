
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/MainLayout';
import Home from './pages/Home';
import Itineraries from './pages/Itineraries';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import TravelStyles from './pages/TravelStyles';
import StyleDetail from './pages/StyleDetail';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

// Support Pages
import VisaGuide from './pages/VisaGuidePage';
import PaymentHelp from './pages/PaymentHelpPage';
import Insurance from './pages/InsurancePage';
import Terms from './pages/TermsPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/styles" element={<TravelStyles />} />
          <Route path="/styles/kids" element={<Navigate to="/styles/family" replace />} />
          <Route path="/styles/:id" element={<StyleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          
          {/* Support Routes */}
          <Route path="/visa-guide" element={<VisaGuide />} />
          <Route path="/payment-help" element={<PaymentHelp />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
