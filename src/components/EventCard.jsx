import React from 'react'

const EventCard = () => {
  return (
    
      <main className='relative bg-[#161616]'>
        <section className='relative flex mt-10 md:w-[1200px] md:h-[320px] '>
        <div className='mt-6 ml-8'>
             <h2 className='text-5xl font-bold text-white font-valorax'> EVENT</h2>
             <h4 className='mt-2 text-2xl font-light text-[#B5B1B1] font-expletus-sans'>This is a event, you should definetely join, please join!!</h4>
        </div>

          <div style = {{background:"url('/images/eventcard.png') no-repeat center center/cover"}}className='absolute top-5 right-4 h-[280px] w-[280px]'></div>
        </section>

      </main>
    
  )
}

export default EventCard
