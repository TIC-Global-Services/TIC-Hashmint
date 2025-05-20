"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Section: React.FC = () => {
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
              Meet HM Exams
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

      {/* Feature Background Block */}
      <div className="relative mx-7 mt-20 rounded-xl my-10 max-w-[96vw] overflow-hidden min-h-[80vh] w-full flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 block">
          <Image
            src="/contact/contact_bg.png"
            alt="Forest with sunlight shining through trees"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Feature Text in bottom-right */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-8 flex flex-col gap-2 rounded-xl shadow-lg text-left ">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">1. Smooth Paperlike Feel</h1>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">2. Sleeker than an answer sheet</h1>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">3. 12 Hour Battery Life</h1>
          
        </div>
      </div>
    </section>
  );
};

export default Section;
