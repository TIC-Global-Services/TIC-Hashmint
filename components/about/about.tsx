"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Section: React.FC = () => {
  const [count, setCount] = useState(0);

  // Counting animation for the "60%" number
  useEffect(() => {
    const target = 60;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50); // Increment every 50ms

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(counter);
          return target;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(counter);
  }, []);

  // Animation variants for text and button
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about-us" className="flex flex-col items-center py-16 bg-gray-50">
      

      {/* Header and Description */}
      <div className="mt-16 w-full px-8 sm:px-6 lg:px-20 max-md:mt-10">
        <div className="flex gap-10 max-md:flex-col">
          <motion.header
            className="w-1/3 max-md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-teal-950 uppercase max-md:mt-8">
              Meet Hashmint Exams
            </h1>
          </motion.header>

          <motion.article
            className="w-2/3 max-md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <p className="text-xl sm:text-2xl tracking-tight leading-8 text-teal-950 max-md:mt-6">
              Tailored for high-stakes assessments, Hashmint redefines the
              traditional pen-and-paper exam experience. Featuring a
              custom-built operating system and redundant storage systems,
              Hashmint ensures unmatched reliability and security for critical
              exams.
            </p>
            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contentVariants}
            >
              <Link
                href="/#get-started"
                className="inline-block px-7 py-3.5 text-base font-semibold text-black bg-yellow-400 rounded-full transition-all hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 active:scale-95"
                aria-label="Get started with Hashmint Exams"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.article>
        </div>
      </div>

      {/* Stats and Images */}
      <div className="mt-16 w-full  px-8 sm:px-6 lg:px-20 max-md:mt-10">
        <div className="flex gap-8 max-md:flex-col">
          {/* Stats */}
          <motion.div
            className="w-1/3 max-md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <hr className="w-full border border-dashed border-teal-950 border-opacity-30" />
            <article className="flex flex-col mt-7 max-w-full">
              <h2 className="text-7xl sm:text-8xl font-bold tracking-tighter text-yellow-400 ">
                {Math.round(count)}%
              </h2>
              <p className="mt-6 text-lg sm:text-xl tracking-tight leading-6 text-teal-950">
                More Time in Manual Grading than Automated Digital Assessments
              </p>
            </article>
          </motion.div>

          {/* Image 1 */}
          <motion.div
            className="w-1/3 max-md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/about/about-img-1.png"
                alt="Illustration of Hashmint's exam technology"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="w-1/3 max-md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/about/about-img-2.jpg"
                alt="Illustration of secure exam systems"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;