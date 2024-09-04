import React from 'react'

const Events = () => {
  return (
    <main className='relative bg-arcane-primary'>
    <section className='w-full h-screen bg-black'>
    <h2 className='pt-40 font-bold text-center text-white md:text-5xl font-valorax'>Events</h2>
    <div className='flex flex-col items-center justify-center gap-12 md:flex-row'>
  <div className='relative flex md:w-[400px] md:h-[400px] items-center justify-start  md:mt-[120px] group'>
    <div style={{background: "url('/images/technical.png') no-repeat center center/cover"}} className='w-full h-full rounded-lg'></div>
    <div className='absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-t from-arcane-primary to-transparent group-hover:opacity-60'></div>
    <p className='absolute z-10 text-5xl text-white transition-opacity duration-300 opacity-0 font-valorax bottom-4 left-4 group-hover:opacity-100'>Technical</p>
  </div>
  <div className='relative flex md:w-[400px] md:h-[400px] items-center justify-start  md:mt-[120px] group'>
    <div style={{background: "url('/images/non-tech.png') no-repeat center center/cover"}} className='w-full h-full rounded-lg'></div>
    <div className='absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-t from-arcane-primary to-transparent group-hover:opacity-60'></div>
    <p className='absolute z-10 text-white transition-opacity duration-300 opacity-0 md:text-5xl font-valorax bottom-4 left-4 group-hover:opacity-100'>Non-Technical</p>
  </div>
</div>


    <div></div>
    </section>
</main>
  )
}

export default Events
