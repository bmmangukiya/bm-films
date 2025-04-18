import React from 'react';

import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import { photoshoots } from '@/lib/constant';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Photoshoots | BM Films',
  alternates: {
    canonical: '/ourservices/photoshoots'
  }
});

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero text="Photoshoots" imgSrc={'/photoshoots.jpg'} />
      {photoshoots.map((section) => (
        <VideoSection {...section} key={section.playlistId} />
      ))}
    </div>
  );
};

export default page;
