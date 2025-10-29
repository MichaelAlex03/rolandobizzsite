import React from 'react'
import Footer from './Footer'
import { MapPin, Phone, TimerIcon } from 'lucide-react'


const About = () => {
  return (
    <section className='relative w-full bg-[#f3f0ed] flex flex-col items-center'>
      <div className='flex flex-col gap-8 mt-10'>
        <h1 className="font-bebas text-5xl md:text-7xl text-center text-[#DA714E] mb-4 tracking-wide">Visit Us</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full mt-8 pb-12 md:pb-16 lg:pb-20 pt-6 md:pt-8 lg:pt-10 px-4 md:px-8 lg:px-12 xl:px-20 max-w-7xl'>

        <div className='flex flex-col items-center justify-center bg-white border-lg p-6 md:p-8 w-full rounded-xl hover:scale-105 transition-transform gap-3 md:gap-4 shadow-md hover:shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-2 md:gap-4 w-full'>
            <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-[#ef3d02]" />
            <p className="text-[#ef3d02] text-xl md:text-2xl font-semibold">Location</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <p className="text-black/50 text-base md:text-lg lg:text-xl">123 Main Street</p>
            <p className="text-black/50 text-base md:text-lg lg:text-xl">Buda, Texas 78610</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center bg-white border-lg p-6 md:p-8 w-full rounded-xl hover:scale-105 transition-transform gap-3 md:gap-4 shadow-md hover:shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-2 md:gap-4 w-full'>
            <Phone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-[#ef3d02]" />
            <p className="text-[#ef3d02] text-xl md:text-2xl font-semibold">Phone</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <p className="text-black/50 text-base md:text-lg lg:text-xl">(123) 123-4567</p>

          </div>
        </div>

        <div className='flex flex-col items-center justify-center bg-white border-lg p-6 md:p-8 w-full rounded-xl hover:scale-105 transition-transform gap-3 md:gap-4 shadow-md hover:shadow-xl md:col-span-2 lg:col-span-1'>
          <div className='flex flex-col items-center justify-center gap-2 w-full'>
            <TimerIcon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-[#ef3d02]" />
            <p className="text-[#ef3d02] text-xl md:text-2xl font-semibold">Hours</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <p className="text-black/50 text-base md:text-lg lg:text-xl">Monday - Sunday</p>
            <p className="text-black/50 text-base md:text-lg lg:text-xl">10:00am - 10:00pm</p>
          </div>
        </div>

      </div>

      <Footer />
    </section>
  )
}

export default About