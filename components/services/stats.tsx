"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const Stats: React.FC = () => {
  // Reference for the stats section
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  // Target values for the counters
  const targets = {
    cost: 1500,
    pages: 60,
    printed: 1.5,
    delays: 65,
  }

  // State for counting animation
  const [counts, setCounts] = useState({
    cost: 0,
    pages: 0,
    printed: 0,
    delays: 0,
  })

  // Start animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      animateCounters()
    }
  }, [isInView, controls])

  // Improved counter animation using requestAnimationFrame for smoother performance
  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const startTime = performance.now()

    const updateCounters = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Use easeOutQuad easing function for smoother animation
      const easedProgress = 1 - (1 - progress) * (1 - progress)

      setCounts({
        cost: Math.round(easedProgress * targets.cost),
        pages: Math.round(easedProgress * targets.pages),
        printed: Number((easedProgress * targets.printed).toFixed(1)),
        delays: Math.round(easedProgress * targets.delays),
      })

      if (progress < 1) {
        requestAnimationFrame(updateCounters)
      }
    }

    requestAnimationFrame(updateCounters)
  }

  // Animation variants for stats cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // cubic-bezier easing for smoother motion
      },
    }),
  }

  // Animation variants for text and cards
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  return (
    <div
      ref={sectionRef}
      className="min-h-[400px] my-[120px] bg-gradient-to-b from-black to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 md:py-5"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentVariants}
        className="px-4 md:px-8 sm:px-6 mb-8 mt-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          The Hidden Flaws of Paper-Based Testing
        </h2>
      </motion.div>

      <div className="flex justify-center items-center w-full py-12">
        <div className="flex w-full px-4 md:px-10 justify-between gap-6 max-md:flex-col max-md:gap-8">
          {/* Stat 1 */}
          <motion.div
            className="flex flex-col items-start w-1/4 max-md:w-full"
            custom={0}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            aria-label="Cost savings per student on exams"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">₹{counts.cost}</h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              per student per year is spent on printing, logistics, and storage for university exams.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="flex flex-col items-start w-1/4 max-md:w-full"
            custom={1}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            aria-label="Exam pages wasted annually"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">{counts.pages}M+</h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              Exam pages are wasted <br className="md:block hidden" />
              every year.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="flex flex-col items-start w-1/4 max-md:w-full"
            custom={2}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            aria-label="Pages printed annually across universities"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">{counts.printed}B+</h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">Pages printed annually across universities.</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="flex flex-col items-start w-1/4 max-md:w-full"
            custom={3}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            aria-label="Educators reporting delays in grading"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 max-md:text-3xl">{counts.delays}%</h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              Of educators report delays in grading due to manual exams.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Stats
