"use client"
import { Press_Start_2P } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const orbitron = Press_Start_2P({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})


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

      <div className='hidden md:flex flex-col items-center justify-center w-full'>
        <Image
          ref={cityDesktop}
          src={require("@/assets/monaco.webp")}
          alt="greek town in andev page"
          className='flex w-full relative z-20'
        />
        <Image
          ref={cityDesktop}
          src={require("@/assets/scenary.png")}
          alt="greek town in andev page"
          className='flex w-full relative z-20'
        />
      </div>

      <div className='md:hidden flex flex-col items-center justify-center w-full'>
        <Image
          ref={cityDesktop}
          src={require("@/assets/monaco-mobile.webp")}
          alt="greek town in andev page"
          className='flex w-full relative z-20'
        />
        <Image
          ref={cityDesktop}
          src={require("@/assets/scenary.png")}
          alt="greek town in andev page"
          className='flex w-full relative z-20'
        />
      </div>

      <div className='w-full flex items-end justify-start absolute bottom-0 left-0 z-30'>

        <div className='flex flex-col items-center ml-[2rem] lg:ml-[5rem]'>
          {/* the traffic signal */}
          <div className='bg-yellow-500 h-[13rem] w-[8rem] lg:h-[14rem] lg:w-[10rem] rounded-md flex justify-center items-center'>
            <div className='bg-yellow-500 border-[.4rem] border-black rounded-md w-[94%] h-[94%] p-4 flex flex-col justify-between items-center'>

              <div className='flex flex-col items-center justify-center mb-4'>
                <h4 className='font-bold text-black'>Your</h4>
                <h5 className='font-bold text-black'>Speed</h5>
                <p className='font-bold text-black'>km/h</p>
              </div>

              <div className='bg-black bg-opacity-90 flex items-center justify-center rounded-md mb-2'>
                <p className={`text-red-600 p-4 font-bold text-2xl lg:text-3xl ${orbitron.className}`}>090</p>
              </div>

            </div>
          </div>
          {/* the the pole */}
          <div className='lg:h-[20rem] h-[10rem] w-[.8rem] bg-gray-400'></div>
        </div>
      </div>

    </div>

  )
}