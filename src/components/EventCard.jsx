import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className='w-full rounded-lg border border-arcane-primary h-[130px] md:h-[300px] bg-[#161616] font-expletus-sans flex items-start justify-between'>
      <article className='w-[65%] p-3 md:p-10'>
        <h2 className='text-white font-valorax md:text-3xl'>
          {event.name}
        </h2>
        <p className='md:text-md text-sm text-[#D3D3D3] mt-6 md:text-justify overflow-hidden line-clamp-2 md:line-clamp-3 text-ellipsis'>
          {event.description}
        </p>
      </article>
      <aside className='w-[35%] h-full relative rounded-r-lg'>
        <img className='w-full h-full rounded-r-lg object-cover' src={event.img} alt={event.name} />
        <div className="absolute rounded-r-lg inset-0 transition-opacity duration-300 bg-gradient-to-t from-arcane-primary to-transparent md:group-hover:opacity-60" />
      </aside>
    </div>
  )
}

export default EventCard;