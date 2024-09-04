import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EventCard = ({ event }) => {

  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const eventType = pathParts[2];

  return (
    <div className='w-full rounded-lg border border-arcane-primary h-[130px] md:h-[300px] bg-[#161616] font-expletus-sans flex items-start justify-between'>
      <article className='w-[65%] p-3 md:p-10'>
        <h2 className='text-white font-valorax md:text-3xl'>
          {event.name}
        </h2>
        <p className='text-[12px] md:text-[16px] text-[gray] mt-1 md:mt-5 md:text-justify overflow-hidden line-clamp-2 md:line-clamp-3 text-ellipsis'>
          {event.description}
        </p>
        <div className='flex justify-between items-center mt-10'>
          <Link to={`/events/${eventType}/${event.name}`} className='px-10 py-2 text-white text-md bg-arcane-primary rounded-md'>
            View More
          </Link>
          {
            event.club && (
              <aside className='text-white flex items-center gap-3'>
                Powered By 
                <img className='max-w-[50px]' src={event.club} alt="AV" />
              </aside>
            )
          }
        </div>
      </article>
      <aside className='w-[35%] h-full relative rounded-r-lg'>
        <img className='w-full h-full rounded-r-lg object-cover' src={event.img} alt={event.name} />
        <div className="absolute rounded-r-lg inset-0 transition-opacity duration-300 bg-gradient-to-t from-arcane-primary to-transparent md:group-hover:opacity-60" />
      </aside>
    </div>
  )
}

export default EventCard;