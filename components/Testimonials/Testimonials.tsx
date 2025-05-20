"use client";
import React, { useState, useEffect, useCallback } from 'react';

const Testimonials: React.FC = () => {
  // Dynamic testimonial data
  const testimonialData = [
    {
      quote: "There were concerns about paper leaks and malpractice. With live proctoring and secure digital distribution, we saw a chance to restore exam integrity.",
      author: "Prakash T., IT & Security Committee",
      stars: 3
    },
    {
      quote: "Bundling, scanning, and uploading answer sheets was eating up my entire post-exam week. We needed a solution that cuts down these manual tasks.",
      author: "Dr. Meera S., Professor of Physics",
      stars: 5
    },
    {
      quote: "We were spending too much time on lost scripts or damaged papers. We needed something secure, tamper-proof, and easy to retrieve.",
      author: "Dr. Renu K., Exam Controller",
      stars: 5
    },
    {
      quote: "The paperless approach has transformed our examination process. Students appreciate the familiar interface and faculty love the faster grading.",
      author: "Prof. Anjali M., Dean of Engineering",
      stars: 4
    },
    {
      quote: "Transitioning to digital exams helped us reduce our carbon footprint and storage costs. A win for sustainability and efficiency.",
      author: "Dr. Sameer P., University Registrar",
      stars: 5
    },
    {
      quote: "The analytics dashboard gives us insights into question performance that we never had with paper exams. It's revolutionized our assessment strategies.",
      author: "Dr. Lakshmi R., Assessment Coordinator",
      stars: 4
    },
    {
      quote: "As a student with dyslexia, the ability to adjust font size and type has made exams more accessible for me. It's been life-changing.",
      author: "Rahul V., Engineering Student",
      stars: 5
    },
    {
      quote: "The automatic backup feature saved our department during a power outage. Not a single student response was lost!",
      author: "Dr. Ahmed K., Department Chair",
      stars: 5
    },
    {
      quote: "The transition was smoother than expected. The intuitive interface meant minimal training for both faculty and students.",
      author: "Priya L., Technology Adoption Lead",
      stars: 4
    }
  ];

  // Create a duplicated array for infinite scrolling
  const testimonialsExtended = [...testimonialData, ...testimonialData, ...testimonialData, ...testimonialData, ...testimonialData, ...testimonialData];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = testimonialData.length;

  // Reset slides when we reach either end to create infinite effect
  const handleSlideReset = useCallback(() => {
    if (currentSlide >= totalSlides * 2) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide - totalSlides);
    } else if (currentSlide < 0) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide + totalSlides);
    }
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        handleSlideReset();
      }, 500); // This timing should always match the CSS transition duration for smoothness
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, handleSlideReset]);

  // Automatic sliding
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (direction: 'next' | 'prev') => {
    setIsTransitioning(true);
    setCurrentSlide(prev => direction === 'next' ? prev + 1 : prev - 1);
  };

  // Calculate current page number (for display purposes)
  const currentPage = ((currentSlide % totalSlides) + totalSlides) % totalSlides + 1;

  // Display stars based on rating
  // const renderStars = (count: number) => {
  //   return Array(5).fill(0).map((_, i) => (
  //     <span key={i} className={`text-xl ${i < count ? 'text-orange-500' : 'text-gray-300'}`}>★</span>
  //   ));
  // };

  return (
    <div className="w-full bg-[#FDF6E7] py-16">
      <div className="text-center mb-12">
        <h2 className="text-lg font-medium uppercase tracking-wider">WHAT LED US TO HASHMINT EXAMS</h2>
        <h3 className="text-4xl font-bold mt-2">From Faculty - Students</h3>
      </div>
      
      <div 
        className="relative max-w-6xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${(currentSlide + testimonialData.length) * (100/3)}%)` }}
        >
          {testimonialsExtended.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/3 flex-shrink-0 px-3">
              <div className="bg-[#fff9c8] rounded-lg p-6 h-full shadow-sm">
                {/* <div className="mb-3 flex">
                  {renderStars(testimonial.stars)}
                </div> */}
                <p className="mb-4 text-sm">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-bold text-sm">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-10">
        <button 
          onClick={() => goToSlide('prev')} 
          className="mx-2 w-10 h-10 rounded-full bg-[#FFE9A0] hover:bg-[#FFD580] flex items-center justify-center transition-colors"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        
        {/* <span className="mx-4 text-sm">[ {currentPage.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')} ]</span> */}
        
        <button 
          onClick={() => goToSlide('next')}
          className="mx-2 w-10 h-10 rounded-full bg-[#FFE9A0] hover:bg-[#FFD580] flex items-center justify-center transition-colors"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;