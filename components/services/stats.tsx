"use client";
import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="flex justify-evenly items-center w-full h-[40vh] bg-black text-white px-6 py-12 md:py-16">
      <div className="flex w-full max-w-6xl justify-between gap-x-8">
        <div className="flex flex-col items-start w-1/4">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] ">1500 INR</h2>
          <p className="mt-2 w-[80%] text-sm">
            Successful Exams Administered per student per year on printing, logistics, and storage.
          </p>
        </div>
        <div className="flex flex-col items-start w-1/4">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] ">60M+</h2>
          <p className="mt-2 w-[80%] text-sm">
            exam pages are wasted every year
          </p>
        </div>
        <div className="flex flex-col items-start w-1/4">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] ">1.5B+</h2>
          <p className="mt-2 w-[80%] text-sm">
            are printed annually across universities
          </p>
        </div>
        <div className="flex flex-col items-start w-1/4">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">65%</h2>
          <p className="mt-2 w-[80%] text-sm">
            of educators report delays in grading due to manual exams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;