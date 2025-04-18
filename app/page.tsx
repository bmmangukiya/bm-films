'use client';
import React from 'react';

import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import OurServices from '../components/OurServices';

import Hero from './Hero';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurServices />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
