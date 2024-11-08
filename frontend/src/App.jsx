import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import AdminQueries from './components/AdminQueries';

const LandingPage = () => (
  <div>
    <Hero />
    <About />
    <Services />
    <WhyChooseUs />
    <Testimonials />
    <ContactForm />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} /> {/* Admin dashboard route */}
      <Route path="/" element={<LandingPage />} /> {/* Correctly set LandingPage as element */}
      <Route path="/admin/queries" element={<AdminQueries />} /> {/* Admin queries dashboard route */}
    </Routes>
  </Router>
);

export default App;
