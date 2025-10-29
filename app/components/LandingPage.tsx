'use client'

import React from 'react'
import Image from "next/image";
import heroImage from "@/public/hero-tacos.jpg";


const LandingPage = () => {
    const scrollToMenu = () => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className='relative min-h-screen flex items-center justify-center'>
            <div className='absolute inset-0 z-0'>
                <Image
                    src={heroImage}
                    alt='Tacos'
                    fill
                    className='object-cover'
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />

            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 animate-fade-in">
                <h1 className="font-bebas text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 sm:mb-4 md:mb-6 tracking-wider drop-shadow-lg">
                    TRAGA TACOS
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4 drop-shadow-md text-[#F0C74C]">
                    Laredo Style
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl mx-auto drop-shadow-md text-white/90">
                    Authentic border flavors with every bite
                </p>
                <button
                    onClick={scrollToMenu}
                    className="bg-[#DA714E] hover:bg-[#DA714E]/90 text-white font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 shadow-xl hover:scale-105 transition-transform duration-300 rounded-xl"
                >
                    View Menu
                </button>
            </div>
        </section>
    )
}

export default LandingPage