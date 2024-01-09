import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function ServiceCard({ title, bg, url }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(url);
  };

  return (
    <div className="relative cursor-pointer group" onClick={handleCardClick}>
      <Image
        src={bg}
        alt={title}
        width={424}
        height={424}
        loading="lazy"
        className={`
    w-[424px] h-[424px]
    max-w-[95dvw] object-contain object-center
    transition-all brightness-50 group-hover:brightness-90
    duration-1000 ease-in-out
  `}
      />
      <div className="absolute inset-0 flex justify-center items-center text-3xl font-extrabold tracking-wider text-white uppercase drop-shadow-lg">
        {title}
      </div>
    </div>
  );
}

export default ServiceCard;
