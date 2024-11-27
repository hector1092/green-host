import React from 'react';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import PaymentMethods from '../components/PaymentMethods';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right overflow-hidden" dir="rtl">
      <Header />
      <HostingPlans />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;