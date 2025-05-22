import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterImg from "@/public/FooterImg.png"

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/hashminthq/" },
  ];

  return (
    <footer id="footer" className="w-full px-4 sm:px-6 lg:px-8 py-8 mt-16 lg:mt-24" style={{backgroundImage:""}}>
      <div className="relative bg-[var(--primary)] rounded-2xl overflow-hidden mx-auto">
        {/* Decorative Circles */}
        <div className="hidden lg:block absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full border-2 border-dashed border-black/80 rotate-12" />
        <div className="hidden lg:block absolute -top-60 -right-40 w-[600px] h-[600px] rounded-full border-2 border-dashed border-black/80 rotate-45" />

        {/* Content Container */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between p-6 sm:p-8 lg:p-12 gap-10 lg:gap-20">
          {/* Left: Logo + Socials */}
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2">
            <Image
              src="/logo.svg"
              width={150}
              height={150}
              alt="Hashmint Logo"
              className="w-32 sm:w-40 lg:w-48"
              priority
            />
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-32 h-10 sm:h-12 bg-white/10 rounded-full backdrop-blur-lg overflow-hidden transition-all duration-300 hover:bg-white/20"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base font-medium group-hover:-translate-y-full transition-transform duration-300">
                    {social.name}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact + Copyright */}
          <div className="w-full lg:w-[40%] text-white/80 text-xs sm:text-sm font-normal font-['Poppins'] leading-relaxed space-y-2 text-center lg:text-left">
            <p>
              <strong>Mobile:</strong> +91 9119225445
            </p>
            <p>
              <strong>Email:</strong> yaswanth@hashmint.tech
            </p>
            <p>
              <strong>Address:</strong> Hashmint, VO377, WeWork Prestige Cube, Site No. 26, Laskar Hosur Road, Adugodi,
              Koramangala, Bengaluru, Karnataka 560030
            </p>
            <p className="">
              © {new Date().getFullYear()} Copyright - Hashmint | Designed & Developed by{" "}
              <Link
                href="https://theinternetcompany.one/"
                target="_blank"
                className="underline hover:text-white transition"
              >
                TIC Global
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
