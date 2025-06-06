"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "./stats";

const Services: React.FC = () => {
  // Updated features array with unique, meaningful content
  const FirstFeatures = [
    {
      id: 1,
      imageUrl: "/services/service-robust.jpg",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments",
    },
    {
      id: 2,
      imageUrl: "/services/service-biometric.jpg",
      title: "Biometric Authentication",
      description: "Providing secure, personalized access",
    },
    {
      id: 3,
      imageUrl: "/services/services-card-img-3.avif",
      title: "Multiple Redundant Storage",
      description: "Protecting exam data with multiple backups",
    },
  ];

  const bottomFeatures = [
    {
      id: 5,
      imageUrl: "/services/services-card-img-5.jpg",
      title: "Docking and Charging Stations",
      description: "Effortless recharging and setup",
    },
    {
      id: 7,
      imageUrl: "/services/services-card-img-7.avif",
      title: "Calculators and Exam Aids",
      description: "Ready-to-use tools for precise calculations",
    },
    {
      id: 8,
      imageUrl: "/services/services-card-img-8.avif",
      title: "Live Proctoring",
      description: "Real-time monitoring of exam pads during writing minimizes the need for physical invigilation.",
    },
  ]

  // Animation variants for text and cards
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <main id="features" className="flex flex-col  pb-24 ">
      {/* Hero Section */}
      <section className="w-full">
        <div className="px-8 sm:px-6 lg:px-20  pt-20 mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <motion.header
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contentVariants}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-teal-950 leading-tight max-md:text-3xl">
                Comprehensive Digital Exam Ecosystem
              </h1>
            </motion.header>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contentVariants}
            >
              <p className="mt-4 sm:mt-5 text-lg sm:text-2xl tracking-tight leading-8 text-teal-950 max-md:mt-6">
                Hashmint is redefining the way assessments are delivered and
                experienced. It’s built to empower institutions while supporting
                student success, seamlessly blending technology, trust, and
                performance. With Hashmint, a new standard is set for modern,
                stress-free examinations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Scrollable */}
      <section
        className="w-full  mt-8  overflow-x-auto "
        aria-label="Feature highlights"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        {/* Hide scrollbar for Chrome, Safari, and Opera */}
        <style jsx>{`
          section::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="pl-2 md:pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-20 mb-10">
          {FirstFeatures.map((feature, index) => (
            <motion.article
              key={feature.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col items-start px-4 pt-4 pb-8 bg-white rounded-2xl shadow-lg transition-transform hover:-translate-y-1"
            >
              <Image
                src={feature.imageUrl}
                alt={`${feature.title} feature illustration`}
                width={320}
                height={171}
                quality={80}
                className="object-cover w-full rounded-lg aspect-video"
              />
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-8 text-teal-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-6 text-teal-950">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>


       

        <Stats />

        <div className="pl-2 md:pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-20 mt-10 mb-5">
          {bottomFeatures.map((feature, index) => (
            <motion.article
              key={feature.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col items-start px-4 pt-4 pb-8 bg-white rounded-2xl shadow-lg transition-transform hover:-translate-y-1"
            >
              <Image
                src={feature.imageUrl}
                alt={`${feature.title} feature illustration`}
                width={320}
                height={171}
                quality={80}
                className="object-cover w-full rounded-lg aspect-video"
              />
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-8 text-teal-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-6 text-teal-950">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;