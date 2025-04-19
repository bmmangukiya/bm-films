import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';
import { BlurIn } from './Animation/BlurIn';

function Hero({ text, imgSrc }) {
  return (
    <section className="relative w-full h-[50dvh] sm:h-[80dvh] overflow-hidden bg-black sm:bg-fixed">
      <div className="absolute inset-0 flex items-center justify-center">
        <ViewTransition name={`img-${text}`}>
          <Image src={imgSrc} alt={text} className="object-cover brightness-20" fill />
        </ViewTransition>
        <ViewTransition name={`text-${text}`}>
          <BlurIn
            className="uppercase text-4xl sm:text-7xl font-sans font-extrabold text-center text-white z-10 relative drop-shadow-lg"
            word={text}
            duration={0.4}
          />
        </ViewTransition>
      </div>
    </section>
  );
}

export default Hero;
