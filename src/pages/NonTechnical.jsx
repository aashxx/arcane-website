import React from 'react'
import EventCard from '../components/EventCard'

const NonTechnical = () => {
  return (
      <main className='flex flex-col items-center justify-start bg-black'>
         <section className=' relative w-full h-[90vh] bg-arcane-primary'>
         <div style={{background: "url('/images/nontech.png') no-repeat center center/cover", filter: "grayscale(100%)"}} className='absolute inset-0 opacity-60 bg-arcane-primary'></div>
         <h2 className='absolute z-20 pb-20 mt-20 font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 text-8xl top-1/2 left-1/2 font-valorax'>Non Technical Event</h2>
         </section>
         <section className='h-screen bg-black w-max'>
            <EventCard />
         </section>
         
         
      </main>
      
  )
}

export default NonTechnical
