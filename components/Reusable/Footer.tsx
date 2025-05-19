import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 mt-16 lg:mt-24 ">
      <div className="relative bg-[var(--primary)] rounded-2xl overflow-hidden max-w-7xl mx-auto">
        {/* Background circles - more subtle and responsive */}
        <div className="hidden lg:block absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full border-2 border-dashed border-black/80 rotate-12" />
        <div className="hidden lg:block absolute -top-60 -right-40 w-[600px] h-[600px] rounded-full border-2 border-dashed border-black/80 rotate-45" />

        {/* Main content container */}
        <div className="relative flex flex-col lg:flex-row items-end justify-between p-6 sm:p-8 lg:p-12 gap-8">

          <div className=" flex flex-col items-center md:items-start">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo.svg"
                width={150}
                height={150}
                alt="Hashmint Logo"
                className="w-32 sm:w-40 lg:w-48"
                priority
              />
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-24 sm:w-28 h-10 sm:h-12 bg-white/10 rounded-full backdrop-blur-lg overflow-hidden transition-all duration-300 hover:bg-white/20"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base font-medium group-hover:-translate-y-full transition-transform duration-300">
                    {social.name}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-center lg:text-right text-white/80 text-xs sm:text-sm lg:text-base font-normal font-['Poppins'] leading-relaxed max-w-md">
            © {new Date().getFullYear()} Copyright - Hashmint | Designed & Developed by <Link href={'https://theinternetcompany.one/'} target="_blank">TIC Global</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;