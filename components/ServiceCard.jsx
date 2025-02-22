import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ServiceCard({ title, bg, url }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(url);
  };

  return (
    <div
      className="relative cursor-pointer group aspect-square w-[300px] sm:w-[400px] lg:w-[300px] 2xl:w-[400px]"
      onClick={handleCardClick}
    >
      <Image
        src={bg}
        alt={title}
        fill
        loading="lazy"
        className={`
     shrink max-w-[95dvw] aspect-square object-center transition-all brightness-50 group-hover:brightness-90 duration-1000 ease-in-out`}
      />
      <div className="absolute inset-0 flex justify-center items-center text-3xl font-extrabold tracking-wider text-white uppercase drop-shadow-lg">
        {title}
      </div>
    </div>
  );
}

export default ServiceCard;
