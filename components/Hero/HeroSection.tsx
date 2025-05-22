"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import VideoHoverPlayer from "./VideoHoverPlayer";

const Hero: React.FC = () => {
  // Animation variants for heading and button
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative h-[120dvh] w-full overflow-hidden">

      <Link
        href="/Hashmint Exams - Brochure.pdf"
        download
        className="fixed right-0 top-2/3 -translate-y-1/2 bg-[var(--primary)] text-[var(--foreground)] py-6 px-2 flex flex-col items-center justify-center cursor-pointer rounded-l-lg shadow-lg z-50 w-auto" // Added z-50 to ensure it's above other content
      >
        <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold">
          Download&#160;Brochure
        </span>
      </Link>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero/Banner.png"
          alt="Students in a classroom using tablets for paperless exams"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-16 sm:pb-20">
        <motion.section
          className="flex flex-col items-start px-6 sm:px-16 lg:px-20 "
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white "
            variants={contentVariants}
          >
            Introducing Paperless Exams <br /> Reimagining the Future of Exams

          </motion.h1>
          <motion.div className="mt-6 sm:mt-8" variants={contentVariants}>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-black bg-yellow-400 rounded-full transition-all hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 active:scale-95"
              aria-label="Book a demo for paperless exams"
            >
              Book a Demo
            </Link>
          </motion.div>
        </motion.section>
      </div>

<div className="absolute md:bottom-3 2xl:bottom-10 md:right-10 -bottom-5 right-2">
<VideoHoverPlayer/>
</div>
     
    </main>
  );
};

export default Hero;