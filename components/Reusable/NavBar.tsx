"use client";
import React from 'react';
import Image from 'next/image';


const Navbar: React.FC = () => {
  const menuItems = ['Home', 'about us', 'Features', "FAQ's", 'Contact'];

  return (
    <header
      className="flex relative flex-wrap gap-5 justify-between items-center self-stretch px-14 w-full
        border border-solid bg-white bg-opacity-80 border-teal-950 border-opacity-10 rounded-[66px]
        max-md:px-5 max-md:max-w-full"
    >
    <Image
      src="/logo.svg"
      alt="Hashmint Logo"
      width={150}
      height={40}
      priority
      className="object-contain"
    />
      <nav className="flex gap-5 self-stretch my-auto text-lg font-medium tracking-tight leading-loose text-teal-950">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
            role="menuitem"
          >
            {item}
          </a>
        ))}
      </nav>
      <button
        className="overflow-hidden px-7 py-3.5 my-auto text-base font-semibold leading-none
          text-foreground bg-primary rounded-[68px] transition-transform
          hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary
          active:scale-95 max-md:px-5"
      >
        Book a Demo
      </button>
    </header>
  );
};

export default Navbar;
