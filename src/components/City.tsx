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

            if (initialSunPosition - 2 <= -400) {
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
    <div className='w-full relative mt-10' id="part1">
      <div ref={sun} className='lg:w-[25rem] lg:h-[25rem] absolute left-[15%] w-[18rem] h-[18rem] bg-yellow-400 rounded-full z-10 sun'></div>
      <Image
        ref={cityDesktop}
        src={require("@/assets/town-desktop.webp")}
        alt="greek town in andev page"
        className='hidden md:flex w-full relative z-20'
      />
      <Image
        ref={cityMobile}
        src={require("@/assets/posible_town.webp")}
        alt="greek town in andev page"
        className='md:hidden w-full relative z-20'
      />
    </div>

  )
}