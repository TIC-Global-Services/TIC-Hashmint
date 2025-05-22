"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoNewspaperSharp } from "react-icons/io5"

const Section: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const features = [
    {
      icon: <IoNewspaperSharp className="text-white w-6 h-6"/>,
      title: "Smooth Paperlike Feel",
      description: "Experience the natural texture of paper, digitally recreated for smooth, precise writing.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 9H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Sleeker than an answer sheet",
      description: "Designed for effortless focus and flawless performance",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "12 Hour Battery Life",
      description: "Reliable battery performance designed to keep you powered without interruption!",
    },
  ]

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
              Tailored for high-stakes assessments, Hashmint redefines the traditional pen-and-paper exam experience.
              Featuring a custom-built operating system and redundant storage systems, Hashmint ensures unmatched
              reliability and security for critical exams.
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
      <div className="relative mx-7 mt-20 rounded-xl my-10 max-w-[96vw] overflow-hidden min-h-[80vh] w-full">
        {/* Background image - no overlay */}
        <div className="absolute inset-0">
          <Image
            src="/contact/contact_bg.png"
            alt="Forest with sunlight shining through trees"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main headline text - positioned differently based on screen size */}
        <div
          className={`absolute text-white max-w-2xl ${isMobile ? "top-8 left-4 right-4" : "left-6 sm:left-12 bottom-16"}`}
        >
          <h2 className="md:text-4xl text-2xl font-light leading-tight">
            Paper-smooth, exam-ready, and 
            <br className="hidden md:block" />
            powered to last — all day, all the way.
          </h2>
        </div>

        {/* Feature cards - responsive positioning */}
        <div
          className={`
          md:absolute md:bottom-12 md:right-12 md:w-[45%]
          flex flex-col md:flex-row gap-4 md:gap-6
          ${isMobile ? "absolute bottom-8 left-4 right-4" : ""}
        `}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex-1 min-w-[100px] md:min-w-[180px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-white/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section
