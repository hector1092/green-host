import React, { useEffect } from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Footer from '../components/Footer';
import PaymentMethods from '../components/PaymentMethods';

const Index = () => {
  useEffect(() => {
    const video = document.getElementById('video-background') as HTMLVideoElement;
    if (video) {
      video.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative text-right overflow-hidden" dir="rtl">
      <video
        id="video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/image/404.svg"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
      >
        <source src="/vedio/green hosting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <CircuitBackground />
        <Header />
        <HostingPlans />
        <PaymentMethods />
        <Footer />
      </div>
    </div>
  );
};

export default Index;