"use client";
import React from "react";

const Services: React.FC = () => {
  // Here is a sample list of features that will be displayed on the services page
  const features = [
    {
      id: 1,
      imageUrl: "/services/services-card-img-1.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 2,
      imageUrl: "/services/services-card-img-2.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 3,
      imageUrl: "/services/services-card-img-3.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 4,
      imageUrl: "/services/services-card-img-4.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 5,
      imageUrl: "/services/services-card-img-5.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 6,
      imageUrl: "/services/services-card-img-6.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 7,
      imageUrl: "/services/services-card-img-7.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    },
    {
      id: 8,
      imageUrl: "/services/services-card-img-8.avif",
      title: "Robust & Secure",
      description: "Designed to support high-stakes assessments"
    }
  ];

  return (
    <main className="flex flex-col pb-56 max-md:pb-24">
      {/* Hero Section */}
      <section className="w-full max-md:max-w-full">
        <div className="px-14 pt-20 w-full pb-24 max-md:px-5 max-md:pb-12 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <header className="w-[38%] max-md:ml-0 max-md:w-full">
              <h1 className="text-6xl font-semibold tracking-tight text-black leading-[80px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                Comprehensive Digital Exam Ecosystem
              </h1>
            </header>
            <div className="ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <p className="mt-5 text-2xl tracking-tight leading-9 text-black max-md:mt-10 max-md:max-w-full">
                Hashmint is redefining the way assessments are delivered and
                experienced. It&aposs built to empower institutions while supporting
                student success, seamlessly blending technology, trust, and
                performance. With Hashmint, a new standard is set for modern,
                stress-free examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Scrollable with hidden scrollbar */}
      <section
        className="w-full relative overflow-x-auto mt-8 pb-4"
        aria-label="Feature highlights"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        {/* CSS to hide scrollbar for Chrome, Safari and Opera */}
        <style jsx>{`
          section::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex gap-5 px-14 max-md:px-5 min-w-max">
          {features.map((feature) => (
            <article
            
              key={feature.id}
              className="flex flex-col items-start self-stretch px-4 pt-4 pb-14 bg-white rounded-2xl min-w-60 shadow-[0px_1px_4px_rgba(0,0,0,0.25)] w-[350px]"
            >
                 <img
                src={feature.imageUrl}
                alt={feature.title}
                className="object-contain self-stretch w-full aspect-[1.87]"
              /> 
              <h3 className="mt-2.5 text-2xl font-semibold leading-loose text-black">
                {feature.title}
              </h3>
              <p className="mt-7 text-2xl tracking-tight leading-7 text-black">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
