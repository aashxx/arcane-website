import { SPOTLIGHT } from '../utils/constants';
import { React, useState, useEffect, useRef } from 'react'

const SpotLight = () => {

    const imageTrack = useRef(null);
    const [mouseDownPos, setMouseDownPos] = useState(0);
    const [prevMousePos, setPrevMousePos] = useState(0);
    const [Percentage, setPercentage] = useState(0)

    useEffect(() => {
        const handleMouseDown = (e) => {
            const { clientX } = e;
            setMouseDownPos(clientX);
        };

        const handleMouseMove = (e) => {
            if (mouseDownPos === 0 || !imageTrack.current) {
                return;
            }
        
            const mouseDelta = parseFloat(mouseDownPos) - e.clientX;
            const maxDelta = window.innerWidth / 2;
        
            const percentage = (mouseDelta / maxDelta) * -100;
        
            const nextPercentageUnconstrained = parseFloat(prevMousePos) + percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        
            setPercentage(nextPercentageUnconstrained);

            const imageTrackElement = imageTrack.current;
            const images = document.querySelectorAll('.image');

            if (nextPercentage == -100 || nextPercentage === 0) {
                images.forEach((image) => {
                    image.animate(
                        [{ objectPosition: `${100}% 0%` }],
                        { duration: 1200, fill: 'forwards' }
                    );
                });
            }
        
            imageTrackElement.animate(
                {
                    transform: `translate(${nextPercentageUnconstrained}%, -0%)`
                  },
                { duration: 1200, fill: 'forwards' }
            );
        
            images.forEach((image) => {
                image.animate(
                    [{ objectPosition: `${nextPercentage + 100}% 0%` }],
                    { duration: 1200, fill: 'forwards' }
                );
            });
        };
    
        const handleMouseUp = () => {
            setMouseDownPos(0);
            setPrevMousePos(Percentage)

        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [mouseDownPos, prevMousePos, Percentage]);

    return (
        <section id="executive-board" className={`flex flex-col items-center gap-6 h-auto cursor-move`}>
            <div ref={imageTrack} className='flex gap-[4vmin] relative md:left-[0%] mt-4 spotlight' >
                {   
                    SPOTLIGHT.map((photo, index)=>(
                        <img 
                            key = {index} 
                            src={photo.img} 
                            alt = {photo.alt} 
                            className='w-[40vmin] h-[56vmin] object-cover pointer-events-none image rounded-md' 
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default SpotLight;