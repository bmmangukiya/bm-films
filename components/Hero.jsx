function Hero({ text, imgSrc }) {
  return (
    <section
      className="relative w-full h-[50dvh] sm:h-[70dvh] overflow-hidden bg-black sm:bg-fixed"
      id="home-section"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="uppercase text-4xl sm:text-7xl font-sans font-extrabold text-center text-white z-10 relative drop-shadow-lg">
          {text}
        </h1>
      </div>
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </section>
  );
}

export default Hero;
