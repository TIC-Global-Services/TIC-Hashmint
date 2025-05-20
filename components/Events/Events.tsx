import React from "react";
import Image from "next/image";
import WhiteImg1 from "@/assets/white_bg/white1.png"
import WhiteImg2 from "@/assets/white_bg/white2.jpg"
import WhiteImg3 from "@/assets/white_bg/white3.jpg"
import WhiteImg4 from "@/assets/white_bg/white4.jpg"

const imageList = [
  // WhiteImg1,
  // WhiteImg2,
  // WhiteImg3,
  // WhiteImg4,
""
];

const WhiteBG = () => {
  return (
    <div id="events" className="w-full min-h-auto  bg-white py-10 px-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-md self-center"
          >
            <Image
              src={src}
              alt={`Feature image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
              quality={80}
              unoptimized 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteBG;
