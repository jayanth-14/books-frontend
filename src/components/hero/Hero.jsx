import React from 'react'
import HeroRight from './HeroRight'
import HeroLeft from './HeroLeft'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blueOne to-blueTwo text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <HeroLeft />
        <HeroRight />
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 bg-blueThree rounded-full w-20 h-20 opacity-50 blur-xl"></div>
      <div className="absolute bottom-10 right-10 bg-blueTwo rounded-full w-32 h-32 opacity-50 blur-2xl"></div>
    </section>
  );
};

export default Hero