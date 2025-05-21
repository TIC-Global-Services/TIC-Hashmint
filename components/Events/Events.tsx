import React from "react";
import Image from "next/image";
import WhiteImg1 from "@/assets/Events/white1.webp"
import WhiteImg2 from "@/assets/Events/white2.webp"
import WhiteImg3 from "@/assets/Events/white3.webp"
import WhiteImg4 from "@/assets/Events/white4.webp"

const imageList = [
  WhiteImg1,
  WhiteImg2,
  WhiteImg3,
  WhiteImg4,
];

const WhiteBG = () => {
  return (
    <div id="events" className="w-full min-h-auto  bg-white py-10 px-8 mt-10">

      <h1 className="text-3xl sm:text-4xl mb-10 font-semibold tracking-tight text-teal-950 uppercase max-md:mt-8">
        Events
      </h1>

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
