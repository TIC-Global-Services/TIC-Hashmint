"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const FAQAccordion: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(2); // Allow null to close FAQs
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for answer elements

  const faqItems = [
    {
      id: 1,
      question: "Why Choose a Paper-Free Approach?",
      answer:
        "There’s nothing more powerful than students striving wholeheartedly to shape the future they envision. Supporting that journey means removing barriers and inefficiencies. It calls for a smarter alternative—an integrated, tech-driven solution that manages, monitors, evaluates, and enhances the entire examination process, delivering a seamless and elevated experience.",
    },
    {
      id: 2,
      question: "How Secure Is Your Data With Us?",
      answer:
        "Exceptionally secure. We use strong encryption protocols for data both at rest and in transit, backed by strict access controls and rigorous data protection policies.",
    },
    {
      id: 3,
      question: "Think Traditional Exams Are More Affordable?",
      answer:
        "What if we told you that a fully digital exam could cost less than ₹50 per student—including both CapEx and OpEx? Sounds unbelievable? It’s possible because we’ve optimized our products and processes. By streamlining operations and cutting inefficiencies, we pass every cost-saving benefit directly to you—making digital exams accessible and affordable for everyone.",
    },
    {
      id: 4,
      question: "Students Are So Used to Paper—How Will They Adapt to the Change?",
      answer:
        "Our Hashmint exam surface is specifically designed to mimic the feel of paper. In fact, we’ve received excellent feedback from students who say it feels just like writing on paper.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="flex flex-col md:flex-row w-full min-h-[80vh]">
      {/* Left side image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
        <Image
          src="/faq/faq.avif"
          alt="Student using tablet for exam"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right side FAQs */}
      <div className="w-full md:w-1/2 bg-black text-white px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-16 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 md:mb-12">FAQs</h2>

        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={item.id} className="relative border-b border-gray-800">
              {/* Yellow vertical bar for active question */}
              {/* {openFAQ === item.id && (
                <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500" />
              )} */}

              <button
                className="w-full text-left py-4 pl-6 sm:pl-8 pr-10 flex items-center justify-between focus:outline-none  rounded-md transition-all"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openFAQ === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-3 font-medium min-w-[30px]">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </span>
                </div>
                <span className="ml-4 text-white">
                  {openFAQ === item.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="15" x2="12" y2="9" />
                      <line x1="12" y1="9" x2="6" y2="15" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="6" y1="9" x2="12" y2="15" />
                      <line x1="12" y1="15" x2="18" y2="9" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Answer with dynamic height animation */}
              <div
                id={`faq-answer-${item.id}`}
                className="overflow-hidden transition-all duration-300 ease-in-out pl-4"
                style={{
                  maxHeight:
                    openFAQ === item.id
                      ? `${answerRefs.current[index]?.scrollHeight || 200}px`
                      : "0",
                  opacity: openFAQ === item.id ? 1 : 0,
                }}
                ref={(el) => {
                  answerRefs.current[index] = el; // Store the element in the ref array
                }}
              >
                {item.answer && (
                  <div className="pl-12 sm:pl-14 pr-10 pb-4">
                    <p className="text-sm text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;