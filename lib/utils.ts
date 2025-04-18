import { Metadata } from 'next';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = 'BM Films - Excellence in execution',
  description = 'BM Films is a cutting-edge media production company based in Mumbai, specializing in creating engaging content for various platforms. Our talented team produces high-quality videos, animations, and multimedia content to captivate your audience. Explore our TV Commercials, Social Media Ads, Corporate Films, 2D & 3D Animation, and more. Partner with us for visually stunning and highly effective content tailored to your brand, products, or storytelling needs.',
  image = '/home-photoshoots.jpg',
  icons = '/favicon.ico',
  alternates = {}
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  alternates?: Metadata['alternates'];
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@bansi_mangukiya'
    },
    alternates,
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL)
  };
}
