import React from 'react';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import PaymentMethods from '../components/PaymentMethods';
import Ratings from '../components/Ratings';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right overflow-hidden" dir="rtl">
      <div className="hero-section">
        <Header />
      </div>
      <div className="content-section">
        <HostingPlans />
        <PaymentMethods />
        <Ratings />
        <Footer />
      </div>
    </div>
  );
};

export default Index;