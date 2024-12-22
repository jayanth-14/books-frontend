import React from 'react'
import HeroRight from './HeroRight'
import HeroLeft from './HeroLeft'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blueOne to-blueTwo text-white py-16 px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero