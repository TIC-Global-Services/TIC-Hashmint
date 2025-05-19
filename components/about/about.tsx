"use client";

import React from "react";
import Image from "next/image";

const Section: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center">
      <hr className="flex self-stretch w-full border border-dashed border-teal-950 border-opacity-60 min-h-0.5 max-md:max-w-full" />

      <div className="mt-32 w-full max-w-[1257px] max-md:mt-10 max-md:max-w-full max-sm:px-5 gap-[168]">
        <div className="flex gap-5 max-md:flex-col">
          <header className="w-[29%] max-md:ml-0 max-md:w-full">
            <h1 className="mt-3 text-3xl font-medium leading-7 text-black uppercase max-md:mt-10">
              Meet Hashmint Exams
              <br />
            </h1>
          </header>

          <article className="ml-5 w-[71%] max-md:ml-0 max-md:w-full">
            <p className="text-2xl tracking-tight leading-9 text-black max-md:mt-10 max-md:max-w-full max-sm:text-center">
              Tailored for high-stakes assessments, Hashmint redefines the
              traditional pen-and-paper exam experience. Featuring a
              custom-built operating system and redundant storage systems,
              Hashmint ensures unmatched reliability and security for critical
              exams.
              <br />
            </p>
            <button className="overflow-hidden px-7 py-3.5 mt-9 text-base font-semibold leading-none text-black bg-[var(--primary)]  rounded-[68px] w-[163px] max-md:px-5">
              Get Started
            </button>
          </article>
        </div>
      </div>

      <div className="mt-16 w-full max-w-[1297px] max-md:mt-10 max-md:max-w-full" >
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10">
              <hr className="flex shrink-0 h-px border border-dashed border-teal-950 border-opacity-30" />
              <article className="flex flex-col mt-7 max-w-full w-[287px] max-sm:px-5">
                <h2 className="self-start text-8xl tracking-tighter leading-none text-[var(--primary)]  max-md:text-4xl max-sm:self-stretch max-sm:text-9xl">
                  60%
                </h2>
                <p className="mt-10 text-xl tracking-tight leading-6 text-black">
                  More Time in Manual Grading than Automated Digital Assessments
                </p>
              </article>
            </div>
          </div>

          <div className="ml-10 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="relative aspect-square overflow-hidden rounded-2xl max-md:mt-10 max-md:max-w-full max-sm:m-5 max-sm:rounded">
               <Image
          src="/about/about-img-1.png"
          alt="Feature illustration"
          fill
          className="object-cover"
        />
            </div>
          </div>

          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="relative aspect-square overflow-hidden rounded-2xl  max-md:mt-10 max-sm:m-5">
            <Image
          src="/about/about-img-2.png"
          alt="Feature illustration"
          fill
          className="object-cover"
        />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
