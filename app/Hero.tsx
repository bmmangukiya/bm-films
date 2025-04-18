'use client';
import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { fadeUpVariants } from '@/lib/variants';

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black" id="home-section">
      <video
        autoPlay
        loop
        muted
        controls={false}
        disablePictureInPicture={true}
        playsInline
        className="absolute inset-0 h-full w-full object-cover filter brightness-50"
      >
        <source src={'/file.mp4'} type="video/mp4" />
        <track kind="captions" label="English" src="" srcLang="en"></track>
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full z-10">
        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl sm:text-5xl md:text-7xl uppercase font-bold mb-6 md:mb-8 tracking-tight">
            <span className={cn('bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ')}>BM Films</span>
          </h1>
        </motion.div>

        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            Excellence in execution
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
