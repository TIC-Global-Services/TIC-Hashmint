"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="relative mx-7 mt-20 rounded-xl my-10 max-w-[96vw] overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Main background forest image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/contact/contact_bg.png"
          alt="Forest with sunlight shining through trees"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 404 Content Container */}
      <div className="relative max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">404 - Page Not Found</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
          Oops! It looks like you’ve wandered off the path. The page you’re looking for doesn’t exist.
        </p>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="bg-yellow-500 text-white text-sm font-semibold py-2.5 px-8 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;