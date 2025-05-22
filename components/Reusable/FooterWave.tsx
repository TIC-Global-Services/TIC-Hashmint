// components/Reusable/FooterWave.tsx
import Image from "next/image";

const FooterWave = () => {
    return (
        <div className="relative w-full overflow-hidden md:-mt-[750px] -mt-[150px] z-0 ">

            <div className="relative w-full h-[420px] md:h-full md:hidden block">
                <Image
                    src="/FooterImg.png"
                    alt="Footer Wave"
                    fill
                    className="pointer-events-none select-none object-cover"
                />
            </div>

            <Image
                src="/FooterImg.png" // Replace with your image path
                alt="Footer Wave"
                layout="responsive"
                width={1440}
                height={200}
                className="pointer-events-none select-none md:block hidden"
            />

            <div className="absolute bottom-5 md:text-lg text-sm left-1/2  w-full max-w-4xl px-4 text-center transform -translate-x-1/2">
                <Image src="/logo.svg" width={400} height={100} alt="Hashmint Logo" className="mx-auto mb-2 md:h-36 h-20 " />
                <div className=" font-medium md:-mt-6">+91 9119225445</div>
                <div className="">yaswanth@hashmint.tech</div>
                <div className=" md:w-[75%] w-[90%] mx-auto mb-8 md:mb-20">
                    Hashmint, VO377, WeWork Prestige Cube, Site No. 26, Laskar Hosur Road, Adugodi,
                    Koramangala, Bengaluru, Karnataka 560030
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                    © 2025 Copyright - Hashmint | <br className="md:hidden"/> Designed & Developed by TIC Global
                </div>
            </div>

        </div>
    );
};

export default FooterWave;
