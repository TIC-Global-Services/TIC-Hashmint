import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer" className="relative w-full overflow-hidden md:-mt-[750px] -mt-[150px] z-0">
            {/* Background image - Mobile - Increased height */}
            <div className="relative w-full h-[750px] md:h-full md:hidden block">
                <Image src="/FooterImg.png" alt="Footer Wave" fill className="pointer-events-none select-none object-cover" />
            </div>

            {/* Background image - Desktop */}
            <div className="hidden md:block relative">
                <Image
                    src="/FooterImg.png"
                    alt="Footer Wave"
                    layout="responsive"
                    width={1440}
                    height={200}
                    className="pointer-events-none select-none"
                />
            </div>

            {/* Content container - Adjusted positioning */}
            <div className="absolute bottom-0 left-0 w-full">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-8">
                    {/* Desktop layout - Two columns with consistent spacing */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        {/* Left column - Contact info - Adjusted for mobile visibility */}
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 flex flex-col items-center md:items-start md:justify-start mt-4 md:mt-0">
                            <Image
                                src="/logo.svg"
                                width={400}
                                height={100}
                                alt="Hashmint Logo"
                                className="md:-ml-20 mb-2 md:h-36 h-20"
                            />
                            <div className="font-medium md:-mt-6 mb-2">+91 9119225445</div>
                            <div className="mb-2">yaswanth@hashmint.tech</div>
                            <div className="md:w-[90%] w-[90%] mx-auto md:mx-0 md:mb-2 mb-3">
                                Hashmint, VO377, WeWork Prestige Cube, Site No. 26, Laskar Hosur Road, Adugodi, Koramangala, Bengaluru,
                                Karnataka 560030
                            </div>
                            <div className="md:flex flex-col items-center md:items-start hidden">
                                <a 
                                    href="https://www.linkedin.com/company/hashminthq/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mb-3 flex items-center gap-2 bg-gray-100 hover:bg-blue-100 rounded-full px-4 py-2 transition-colors duration-300"
                                >
                                    <FaLinkedin className="w-5 h-5 text-blue-700 hover:text-blue-800" />
                                    {/* <p className="text-sm font-medium text-blue-700 hover:text-blue-800">LinkedIn</p> */}
                                </a>
                                <div className="text-sm md:text-base text-gray-600 text-center">
                                    © 2025 Copyright - Hashmint | <br className="md:hidden" /> Designed & Developed by TIC Global
                                </div>
                            </div>
                        </div>

                        {/* Right column - Map - Fixed consistent spacing */}
                        <div className="2xl:w-1/2 md:w-[45%] h-[200px] md:h-[300px] 2xl:h-[350px] rounded-lg overflow-hidden shadow-lg md:mr-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.984870341143!2d77.610998!3d12.9363301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153a4579f8e5%3A0xe03c80840fd742d7!2sWeWork%20Prestige%20Cube!5e1!3m2!1sen!2sin!4v1747931897993!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hashmint Office Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Mobile copyright - Adjusted positioning */}
                <div className="text-sm md:text-base text-gray-600 text-center md:hidden pb-8 flex flex-col justify-center">
                    <a 
                        href="https://www.linkedin.com/company/hashminthq/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mb-3 flex items-center gap-2 bg-gray-100 hover:bg-blue-100 rounded-full px-4 py-2 transition-colors duration-300 mx-auto"
                    >
                        <FaLinkedin className="w-5 h-5 text-blue-700 hover:text-blue-800" />
                        {/* <p className="text-sm font-medium text-blue-700 hover:text-blue-800"> LinkedIn</p> */}
                    </a>
                    <div>
                        © 2025 Copyright - Hashmint | <br className="md:hidden" /> Designed & Developed by TIC Global
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;