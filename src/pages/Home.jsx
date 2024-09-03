import { cn } from '../lib/utils';
import React from 'react';
import AnimatedShinyText from '../components/magicui/animated-shiny-text';
import { ArrowRightIcon } from 'lucide-react';
import Timer from '@/components/Timer';

const Home = () => {
  return (
    <main className='relative bg-arcane-primary font-expletus-sans'>
        <section style={{ background: "url('/images/hero.png') no-repeat center center/cover"}} className='md:h-screen pt-32 w-full px-4 flex flex-col items-center gap-5'>
            <div className="z-10 flex items-center justify-center mb-16">
                <div
                    className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span className='md:text-sm text-[13px]'>✨ Department of Computer Science & Engineering</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>
            <h1 className='text-white font-extrabold text-5xl md:text-6xl font-valorax text-center'>
                Code the Impossible
            </h1>
            <p className='text-white text-center text-md font-medium'>
                Welcome to Arcane, Our department's National Level Technical Symposium
            </p>
            <div className='flex items-center gap-4 mt-4'>
                <button className='rounded-lg bg-gradient-to-r from-[#DD7C8D] to-[#80EAF9] text-white p-[1px]'>
                    <div className='bg-arcane-primary py-2 px-14 rounded-lg'>
                        Explore
                    </div>
                </button>
                <button className='rounded-lg bg-black border border-black text-white py-2 px-14'>
                    Register
                </button>
            </div>
            <div className='mt-6'>
                <h4 className='text-white text-center text-xl font-medium'>
                    Supported By
                </h4>
                <aside className='flex gap-4 items-center mt-5 md:mt-[unset]'>
                    <img className='h-[130px] md:h-[150px]' src="/images/csea.png" alt="csea" />
                    <img className='h-[100px] -ml-5 -md:ml-[unset]' src="/images/crescent.png" alt="crescent" />
                    <img className='h-[100px] md:ml-6' src="/images/acm.png" alt="acm" />
                </aside>
            </div>
        </section>
        <section className='bg-[#171717] py-10'>
            <Timer />
        </section>
        <section className='bg-black py-14'>
            
        </section>
    </main>
  )
}

export default Home;