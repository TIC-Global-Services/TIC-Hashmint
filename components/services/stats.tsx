"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Stats: React.FC = () => {
  // State for counting animation
  const [counts, setCounts] = useState({
    cost: 0,
    pages: 0,
    printed: 0,
    delays: 0,
  });

  // Counting animation logic
  useEffect(() => {
    const targets = {
      cost: 1500,
      pages: 60,
      printed: 1.5,
      delays: 65,
    };
    const duration = 2000; // 2 seconds
    const increment = {
      cost: targets.cost / (duration / 50),
      pages: targets.pages / (duration / 50),
      printed: targets.printed / (duration / 50),
      delays: targets.delays / (duration / 50),
    };

    const counter = setInterval(() => {
      setCounts((prev) => {
        const newCounts = {
          cost: Math.min(prev.cost + increment.cost, targets.cost),
          pages: Math.min(prev.pages + increment.pages, targets.pages),
          printed: Math.min(prev.printed + increment.printed, targets.printed),
          delays: Math.min(prev.delays + increment.delays, targets.delays),
        };
        if (
          newCounts.cost >= targets.cost &&
          newCounts.pages >= targets.pages &&
          newCounts.printed >= targets.printed &&
          newCounts.delays >= targets.delays
        ) {
          clearInterval(counter);
        }
        return newCounts;
      });
    }, 50);

    return () => clearInterval(counter);
  }, []);

  // Animation variants for stats cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="flex justify-center items-center w-full  min-h-[400px] bg-gradient-to-b from-black to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex w-full px-4  md:px-10 justify-between gap-6 max-md:flex-col max-md:gap-8">
        {/* Stat 1 */}
        <motion.div
          className="flex flex-col items-start w-1/4 max-md:w-full"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          aria-label="Cost savings per student on exams"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">
            {Math.round(counts.cost)} INR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            ₹1500 per student per year
            is spent on printing, logistics, and storage for university exams.
          </p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div
          className="flex flex-col items-start w-1/4 max-md:w-full"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          aria-label="Exam pages wasted annually"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">
            {Math.round(counts.pages)}M+
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            Exam pages are wasted every year.
          </p>
        </motion.div>

        {/* Stat 3 */}
        <motion.div
          className="flex flex-col items-start w-1/4 max-md:w-full"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          aria-label="Pages printed annually across universities"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">
            {counts.printed.toFixed(1)}b+
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            Pages printed annually across universities.
          </p>
        </motion.div>

        {/* Stat 4 */}
        <motion.div
          className="flex flex-col items-start w-1/4 max-md:w-full"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          aria-label="Educators reporting delays in grading"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">
            {Math.round(counts.delays)}%
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            Of educators report delays in grading due to manual exams.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;