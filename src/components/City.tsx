"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export const City = () => {

  const sun: any = useRef(null);
  const cityMobile: any = useRef(null);
  const cityDesktop: any = useRef(null);

  useEffect(() => {

    let initialSunPosition = -400;
    let beforeScroollPosition = 0;
    let actualScroollPosition = 0;
    let sunPosition: any;

    if (sun.current) {
      sun.current.style.top = `${initialSunPosition}px`; // Ajustar posición del sol
    }

    const handleScroll = () => {

      // ig go down -> +1


      if (sun.current) {

        sunPosition = sun.current.getBoundingClientRect();

        if (sunPosition.top <= 400 && sunPosition.top >= -500) {

          actualScroollPosition = window.scrollY;

          if (actualScroollPosition >= beforeScroollPosition) {

            if (initialSunPosition + 2 < 0) {
              initialSunPosition = initialSunPosition + 2;
            }


          } else {

            if (initialSunPosition - 2 >= -400) {
              initialSunPosition = initialSunPosition - 2;
            }

          }

          beforeScroollPosition = actualScroollPosition;

          sun.current.style.top = `${initialSunPosition}px`; // Ajustar posición del sol

        };

      };

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <div className='w-full relative mt-10'>
      <div ref={sun} className='lg:w-[25rem] lg:h-[25rem] absolute left-[15%] w-[18rem] h-[18rem] bg-yellow-400 rounded-full z-10 sun'></div>
      {/* <Image
        ref={cityDesktop}
        src={require("@/assets/pista example.png")}
        alt="greek town in andev page"
        className='hidden md:flex w-full relative z-20'
      />
      <Image
        ref={cityMobile}
        src={require("@/assets/posible_town.webp")}
        alt="greek town in andev page"
        className='md:hidden w-full relative z-20'
      /> */}

      <div className='w-full flex items-end justify-end absolute bottom-0 right-0'>
        <div className='flex flex-col items-center justify-center mr-[5rem]'>
          <div className='w-[20rem] h-[10rem] bg-blue-200 border-[1rem] border-gray-600 flex flex-col items-center justify-center'>
            <h4 className='mb-2'>Porsche 992 gt3 RS</h4>
            <h3 className='text-2xl font-bold'>360km/h</h3>
          </div>
          <div className='w-[1rem] h-[25rem] bg-gray-600'></div>
        </div>
      </div>

    </div>

  )
}