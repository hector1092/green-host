import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Footer from '../components/Footer';
import PaymentMethods from '../components/PaymentMethods';
import Stats from '../components/Stats';
import Features from '../components/Features';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800" dir="rtl">
      <div className="relative z-10">
        <CircuitBackground />
        <Header />
        <Stats />
        <Features />
        <HostingPlans />
        <PaymentMethods />
        <Footer />
      </div>
    </div>
  );
};

export default Index;