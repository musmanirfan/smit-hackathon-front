"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
    const route = useRouter()
    return (
        <div className="flex flex-col relative md:flex-row items-center md:h-[90vh] h-[60vh] justify-between mt-[50px] max-w-full md:py-20 py-10 md:my-20 mx-auto md:px-24 px-5 bg-[#E6ECEE]">
            {/* Left Section: Text and Button */}
            <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                <h1 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
                    Empowering Your Dreams with Easy Loan Solutions
                </h1>
                <div className="text-lg text-gray-600 mb-6">
                    <ul>
                        <li>Wedding, Home, Business, Education – Loans Made Simdivle!</li>
                        <li>Your Future, Our Support – Apply for a Loan Today!</li>
                    </ul>
                </div>
                <button onClick={() => { route.push("/loans") }} className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-[#E6ECEE] hover:border hover:border-[#99CC53] hover:text-[#99CC53] transition">
                    Explore Loans
                </button>
            </div>

            {/* Right Section: Images */}
            <div className="relative flex-1 flex justify-center items-center">
                {/* Phone Image */}
                <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/landingPage/hero.png"
                    alt="Phone showing Acorns app screen"
                    className="z-10 w-[80%] md:w-full lg:w-full absolute"
                />
            </div>
        </div>
    );
};

export default HeroSection;
