import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ServiceCard({ title, bg, url }) {
  return (
    <Link href={url} className="relative cursor-pointer group aspect-square w-[300px] sm:w-[400px] lg:w-[300px] 2xl:w-[400px]">
      <Image
        src={bg}
        alt={title}
        className="shrink max-w-[95dvw] aspect-square object-center transition-all brightness-50 group-hover:brightness-90 group-hover:scale-105 duration-1000 ease-in-out"
        fill
        loading="lazy"
      />
      <div className="absolute inset-0 flex justify-center items-center text-3xl font-extrabold tracking-wider text-white uppercase drop-shadow-lg">
        {title}
      </div>
    </Link>
  );
}

export default ServiceCard;
