import React from 'react';

import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import { events } from '@/lib/constant';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Events | BM Films',
  alternates: {
    canonical: '/ourservices/events'
  }
});

const page: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero text="Events" imgSrc={'/events.jpg'} />
      {events.map((section) => (
        <VideoSection {...section} key={section.playlistId} />
      ))}
    </div>
  );
};

export default page;
