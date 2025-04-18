import React from 'react';

import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import { photoshoots } from '@/lib/constant';

export const metadata = {
  title: 'Photoshoots | Cherry Films',
  description:
    'Cherry Films is a cutting-edge media production company based in Mumbai, specializing in creating engaging content for various platforms. Our talented team produces high-quality videos, animations, and multimedia content to captivate your audience. Explore our TV Commercials, Social Media Ads, Corporate Films, 2D & 3D Animation, and more. Partner with us for visually stunning and highly effective content tailored to your brand, products, or storytelling needs.',
  alternates: {
    canonical: '/ourservices/photoshoots'
  }
};

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
