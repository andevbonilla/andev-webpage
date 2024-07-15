"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export const City = () => {

  const sun: any = useRef(null);
  const cityMobile: any = useRef(null);
  const cityDesktop: any = useRef(null);

  useEffect(() => {

    let initialSunPosition = -100;
    let beforeScroollPosition = 0;
    let actualScroollPosition = 0;

    // set initial position
    // md 
    if (window.innerWidth > 700) {
      initialSunPosition = -400
    };

    if (sun.current) {
      sun.current.style.top = `${initialSunPosition}px`; // Ajustar posición del sol
    }

    const handleScroll = () => {

      let sunPosition = sun.current.getBoundingClientRect();

      // ig go down -> +1
      if (sunPosition.top < 400) {
        actualScroollPosition = window.scrollY;

        if (actualScroollPosition >= beforeScroollPosition) {
          initialSunPosition = initialSunPosition + 1
        } else {
          initialSunPosition = initialSunPosition - 1
        }

        beforeScroollPosition = actualScroollPosition;

        if (sun.current) {
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
