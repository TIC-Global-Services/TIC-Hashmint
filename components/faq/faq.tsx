"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const FAQAccordion: React.FC = () => {
  // This state keeps track of which FAQ item is currently open. By default, the second question is open to match the design screenshot.
  const [openFAQ, setOpenFAQ] = useState<number>(2);
  
  // This array contains all the FAQ questions and answers, matching the design exactly.
  const faqItems = [
    {
      id: 1,
      question: "Why Choose a Paper-Free Approach?",
      answer: "Exceptionally secure. We use strong encryption protocols for data both at rest and in transit, backed by strict access controls and rigorous data protection policies."
    },
    {
      id: 2,
      question: "How Secure Is Your Data With Us?",
      answer: "Exceptionally secure. We use strong encryption protocols for data both at rest and in transit, backed by strict access controls and rigorous data protection policies."
    },
    {
      id: 3,
      question: "Think Traditional Exams Are More Affordable?",
      answer: "Exceptionally secure. We use strong encryption protocols for data both at rest and in transit, backed by strict access controls and rigorous data protection policies."
    },
    {
      id: 4,
      question: "Students Are So Used to Paper—How Will They Adapt to the Change?",
      answer: "Exceptionally secure. We use strong encryption protocols for data both at rest and in transit, backed by strict access controls and rigorous data protection policies."
    }
  ];
  
  // This function opens or closes an FAQ item when clicked
  const toggleFAQ = (id: number) => {
    if (openFAQ === id) {
      // Uncomment below line if you want to allow closing the active FAQ
      // setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };

  return (
    <div id='faq' className="flex flex-col md:flex-row w-full">
      {/* Left side image */}
      <div className="w-full md:w-1/2 h-[350px] md:h-[100vh] relative">
        <Image
          src="/faq/faq.avif" 
          alt="Student using tablet for exam"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side FAQs */}
      <div className="w-full md:w-1/2 bg-black text-white px-8 py-12 md:px-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">FAQ&apos;s</h2>
        
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative border-b border-gray-800"
            >
              {/* Yellow vertical bar for active question */}
              {openFAQ === item.id && (
                <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400"></div>
              )}
              
              <button 
                className="w-full text-left py-4 pr-10 pl-8 flex items-center justify-between relative"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openFAQ === item.id}
              >
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2 font-medium min-w-[30px]">
                    {(index + 1).toString().padStart(2, '0')}.
                  </span>
                  <span className="font-medium text-sm md:text-base">
                    {item.question}
                  </span>
                </div>
                <span className="ml-4 text-xs">
                  {openFAQ === item.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="15" x2="12" y2="9"></line>
                      <line x1="12" y1="9" x2="6" y2="15"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="6" y1="9" x2="12" y2="15"></line>
                      <line x1="12" y1="15" x2="18" y2="9"></line>
                    </svg>
                  )}
                </span>
              </button>
              
              {/* Answer with slide animation */}
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openFAQ === item.id ? '200px' : '0',
                  opacity: openFAQ === item.id ? 1 : 0
                }}
              >
                {item.answer && (
                  <div className="pl-12 pr-10 pb-4">
                    <p className="text-sm text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;