import React from 'react';

const Hero = () => (
  <section className="bg-blue-600 text-white text-center py-16">
    <h1 className="text-4xl font-bold mb-4">Welcome to SafeMax Security</h1>
    <p className="text-lg mb-6">Your trusted partner in cybersecurity.</p>
    <button
      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all"
    >
      Schedule a Consultation
    </button>
  </section>
);

export default Hero;
