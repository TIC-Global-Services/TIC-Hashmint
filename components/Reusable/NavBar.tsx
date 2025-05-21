"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryLinkButton from "./PrimaryLinkButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const NavLinks = [
    { title: "Home", slug: "/" },
    { title: "About Us", slug: "/#about-us" },
    { title: "FAQ's", slug: "/#faq" },
    { title: "Contact", slug: "/#footer" },
  ];

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsVisible(true); // Show at top
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Framer Motion variants for navbar
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  // Framer Motion variants for mobile menu container
  const menuContainerVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  // Framer Motion variants for individual menu items
  const menuItemVariants = {
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen">
      <motion.nav
        className="w-full"
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className=" w-[90%] mx-auto bg-white/80 bg-clip-padding backdrop-filter backdrop-blur-sm  backdrop-saturate-100 backdrop-contrast-100 rounded-full mt-2  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Hashmint Logo"
                width={150}
                height={150}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {NavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.slug}
                  className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors focus:outline-none"
                  role="menuitem"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <PrimaryLinkButton href="/#contact" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full">
                Book A Demo
              </PrimaryLinkButton>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/80 bg-clip-padding backdrop-filter backdrop-blur-sm  backdrop-saturate-100 backdrop-contrast-100 w-[90%] mx-auto rounded-3xl mt-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuContainerVariants}
          >
            <div className="px-2 py-3 space-y-1 sm:px-3">
              {NavLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={link.slug}
                    className="block px-3 py-2 text-base font-bold text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={NavLinks.length}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="px-3 py-2"
              >
                <PrimaryLinkButton
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full text-center"
                >
                  Book A Demo
                </PrimaryLinkButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;