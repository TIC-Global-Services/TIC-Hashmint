"use client";
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <main className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero/HERO.avif"
          alt="Background"
          fill
          priority
          className="object-cover"
          role="presentation"
        />
      </div>
      
      <div className="relative flex flex-col h-full justify-end pb-20">
        <section className="flex flex-col items-start px-16 max-md:px-4">
          <h1 className="text-6xl font-semibold tracking-tight text-white max-md:text-4xl">
            Introducing Paperless Exams
            <br />
            <span className="leading-tight">Reimagining the future of exams</span>
          </h1>
          <button
            className="overflow-hidden px-7 py-3.5 mt-11 text-base font-semibold leading-none
              text-[var(--foreground)]  bg-[var(--primary)]  rounded-[68px] transition-transform
              hover:bg-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] 
              active:scale-95 max-md:px-5 max-md:mt-6"
          >
            Book a Demo
          </button>
        </section>
      </div>
    </main>
  );
};

export default Hero;