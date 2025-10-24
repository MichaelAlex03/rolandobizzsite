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
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />

            </div>

            <div className="relative z-10 text-center px-4 py-20 animate-fade-in">
                <h1 className="font-bebas text-white text-7xl md:text-9xl mb-4 tracking-wider drop-shadow-lg">
                    TRAGA TACOS
                </h1>
                <p className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow-md text-[#F0C74C]">
                    Laredo Style
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                    Authentic border flavors with every bite
                </p>
                <button
                    onClick={scrollToMenu}
                    className="bg-[#DA714E] hover:bg-[#DA714E]/90 font-semibold text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform duration-300 rounded-xl"
                >
                    View Menu
                </button>
            </div>
        </section>
    )
}

export default LandingPage