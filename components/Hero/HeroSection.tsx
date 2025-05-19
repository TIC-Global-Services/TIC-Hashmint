"use client";
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <main className="flex overflow-hidden relative flex-col items-start pt-5 pr-4 min-h-[935px] max-md:pb-24">
      <Image
        src=""
        alt="Background"
        fill
        priority
        className="object-cover"
        role="presentation"
      />
      
      <section className="relative flex flex-col items-start mt-auto">
        <h1
          className="relative ml-16 text-6xl font-semibold tracking-tight text-white mt-[513px]
            max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-5"
        >
          Introducing Paperless Exams
          <br />
          <span style={{ lineHeight: '66px' }}>Reimagining the future of exams</span>
        </h1>
        <button
          className="overflow-hidden px-7 py-3.5 mt-11 ml-16 text-base font-semibold leading-none
            text-black bg-red-600 rounded-[68px] transition-transform
            hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
            active:scale-95 max-md:px-5 max-md:mt-10 max-md:ml-2.5"
        >
          Book a Demo
        </button>
      </section>
    </main>
  );
};

export default Hero;
