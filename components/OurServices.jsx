'use client';
import React, { useMemo } from 'react';

import CommonHeadings from './CommonHeadings';
import ServiceCard from './ServiceCard';

const OurServices = () => {
  const services = useMemo(
    () => [
      { title: 'films', url: '/ourservices/films', bg: '/home-films.jpg' },
      { title: 'photoshoots', url: '/ourservices/photoshoots', bg: '/home-photoshoots.jpg' },
      { title: 'events', url: '/ourservices/events', bg: '/home-events.jpg' }
    ],
    []
  );

  return (
    <section className="w-screen min-h-screen flex flex-col py-10 gap-10 md:gap-16 lg:gap-20 2xl:gap-28 justify-center items-center bg-[#FAFBFB]">
      <CommonHeadings title={'Our Services'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} url={service.url} bg={service.bg} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
