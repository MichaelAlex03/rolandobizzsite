import React from 'react'
import Footer from './Footer'
import { MapPin, Phone, TimerIcon } from 'lucide-react'


const About = () => {
  return (
    <section className='relative w-full bg-[#f3f0ed] flex flex-col items-center'>
      <div className='flex flex-col gap-8 mt-10'>
        <h1 className="font-bebas text-5xl md:text-7xl text-center text-[#DA714E] mb-4 tracking-wide">Visit Us</h1>
      </div>

      <div className='grid grid-cols-3 gap-8 w-full mt-8 pb-20 pt-10 px-20'>

        <div className='flex flex-col items-center justify-center bg-white border-lg p-8 w-full rounded-xl hover:scale-105 transition-transform gap-4 shadow-md hover:shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <MapPin className="w-12 h-12 mx-auto mb-4 text-[#ef3d02]" />
            <p className="text-[#ef3d02] text-2xl">Location</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <p className="text-black/50 text-xl">123 Main Street</p>
            <p className="text-black/50 text-xl">Buda, Texas 78610</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center bg-white border-lg p-8 w-full rounded-xl hover:scale-105 transition-transform gap-4 shadow-md hover:shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <Phone className="w-12 h-12 mx-auto mb-4 text-[#ef3d02]" />
            <p className="text-[#ef3d02] text-2xl">Phone</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <p className="text-black/50 text-xl">(123) 123-4567</p>
 
          </div>
        </div>

        <div className='flex flex-col items-center justify-center bg-white border-lg p-8 w-full rounded-xl hover:scale-105 transition-transform gap-4 shadow-md hover:shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-2 w-full'>
            <TimerIcon className="w-12 h-12 mx-auto mb-4 text-[#ef3d02]" />
            <p className="text-[#ef3d02] text-2xl">Hours</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <p className="text-black/50 text-xl">Monday - Sunday</p>
            <p className="text-black/50 text-xl">10:00am - 10:00pm</p>
          </div>
        </div>

      </div>

      <Footer />
    </section>
  )
}

export default About