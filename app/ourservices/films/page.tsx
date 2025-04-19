import React from 'react';

import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import { films } from '@/lib/constant';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Films | BM Films',
  alternates: {
    canonical: '/ourservices/films'
  }
});

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero text="films" imgSrc={'/films.jpg'} />
      {films.map((section) => (
        <VideoSection {...section} key={section.playlistId} />
      ))}
    </div>
  );
};

export default page;
