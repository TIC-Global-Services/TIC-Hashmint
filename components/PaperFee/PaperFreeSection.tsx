"use client";
import React from 'react';
import Image from 'next/image';

const PaperFreeHero: React.FC = () => {
  return (
    <div className="relative mx-7 rounded-xl my-10 max-w-[96vw] h-screen  overflow-hidden">
      {/* Main background forest image */}
      <div className="absolute inset-0 h-screen">
        <Image
          src="/paper_free/paper_free1.avif"
          alt="Forest with sunlight shining through trees"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      
      {/* Content container */}
      <div className="relative z-10 h-full max-w-[96vw] flex flex-col md:flex-row">
        {/* Left side title */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-top">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight items-start flex">
            Paper Free.<br />Paper Inspired
          </h1>
        </div>
        
        {/* Right side info panel */}
        <div className="w-full flex items-end justify-end absolute bottom-4 md:right-4">
          <div className=" p-6 md:p-8 m-4  md:max-w-md  rounded-xl backdrop-blur-xl bg-blend-lighten overflow-hidden">
            {/* Background image for the panel */}
           
            
            {/* Content wrapper */}
            <div className="relative z-10 text-white">
              <p className="text-sm md:text-base mb-4">
                Traditional exams can use up to <span className="font-bold">6 million</span> tons
                of paper globally each year, contributing to
                deforestation and waste. Digital exam
                platforms can operate with up to <span className="font-bold  text-[var(--primary)]">80%</span> less
                energy compared to paper-based processes
                that require printing, transportation, and
                storage of physical exam papers.
              </p>

              {/* Small image at the bottom of the panel */}
              <div className="w-full h-24 md:h-32 relative mt-4">
                <Image
                  src="/paper_free/paper_free2.avif"
                  alt="Aerial view of green fields"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperFreeHero;