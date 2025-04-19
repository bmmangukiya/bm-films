'use client';
import React from 'react';

import { motion } from 'framer-motion';

import { fadeUpVariants } from '@/lib/variants';

import { AnimatedText } from './Animation/AnimatedText';

const AboutUs = () => {
  return (
    <section
      id="about-section"
      className="sm:px-32 px-5 w-screen py-14 min-h-screen flex flex-col gap-20 justify-center items-center bg-dark"
    >
      <AnimatedText text="About Us" textClassName="text-4xl sm:text-6xl font-extrabold text-white py-5" />
      <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
        <p className="font-medium text-white w-[80dvw] md:w-[75dvw] lg:w-[50dvw]">
          We are a creative agency & media production house. Everything made here is hand-built with heart, soul & purpose. As new media
          creators and story hackers we enable you to do more with your brand, assets and audience than you thought was possible. We are
          what we make and we love what we do.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
