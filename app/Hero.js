'use server';
import React from 'react';

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
        <div className="mb-4">
          <h1 className="uppercase text-cherry text-center text-7xl  font-sans italic font-extrabold">Cherry Films</h1>
        </div>
        <p className="text-white text-xl italic tracking-widest">Excellence in execution</p>
      </div>
    </section>
  );
}

export default Hero;
