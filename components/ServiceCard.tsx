import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

function ServiceCard({ title, bg, url }) {
  return (
    <Link
      href={url}
      className="relative cursor-pointer group aspect-square w-[300px] sm:w-[400px] lg:w-[300px] 2xl:w-[400px] overflow-hidden"
    >
      <ViewTransition name={`img-${title}`}>
        <Image
          src={bg}
          alt={title}
          className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 brightness-50 group-hover:brightness-90"
          fill
          loading="lazy"
        />
      </ViewTransition>
      <ViewTransition name={`text-${title}`}>
        <div className="absolute inset-0 flex justify-center items-center text-3xl font-extrabold tracking-wider text-white uppercase drop-shadow-lg">
          {title}
        </div>
      </ViewTransition>
    </Link>
  );
}

export default ServiceCard;
