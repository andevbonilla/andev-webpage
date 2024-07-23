"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { RaceTrack } from './ui/Cars';
import { Indie_Flower } from "next/font/google";

const indieFlower = Indie_Flower({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const City = () => {
  const sun: any = useRef(null);
  const [raceKey, setRaceKey] = useState(0);

  useEffect(() => {
    let initialSunPosition = -400;
    let beforeScroollPosition = 0;
    let actualScroollPosition = 0;
    let sunPosition;

    if (sun.current) {
      sun.current.style.top = `${initialSunPosition}px`; // Ajustar posición del sol
    }

    const handleScroll = () => {
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
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const restartRace = () => {
    setRaceKey(prevKey => prevKey + 1);
  };

  return (
    <div className='w-full relative mt-10'>
      <div className='flex w-full flex-col'>
        <div ref={sun} className='lg:w-[25rem] lg:h-[25rem] absolute left-[15%] w-[18rem] h-[18rem] bg-yellow-400 rounded-full z-10 sun'></div>

        <Image
          alt='city'
          src={require("@/assets/monaco.webp")}
          className='w-full z-20 hidden md:flex'
        />
        <Image
          alt='city'
          src={require("@/assets/monaco-mobile.webp")}
          className='w-full z-20 flex md:hidden'
        />
        <RaceTrack key={raceKey} />

      </div>

      {/* the traffic signal */}
      <div className='w-full flex items-end justify-start absolute bottom-0 left-0 z-30'>
        <div className='flex flex-col items-center ml-[2rem] lg:ml-[5rem]'>
          <div className='bg-yellow-500 rounded-md flex justify-center items-center'>
            <div className='bg-yellow-500 border-[.4rem] border-black rounded-md w-[94%] h-[94%] m-1 p-4 flex flex-col justify-between items-center'>
              <div className='flex'></div>
              <p className={`text-white text-center font-bold text-2xl lg:text-3xl ${indieFlower.className}`}>Click me!</p>
              <div
                onClick={restartRace}
                className='bg-red-600 w-[3.5rem] h-[3.5rem] rounded-full cursor-pointer shadow-lg flex items-center justify-center hover:bg-red-700 active:bg-red-700 transition duration-200'>
              </div>
            </div>
          </div>
          <div className='lg:h-[20rem] h-[10rem] w-[.8rem] bg-gray-400'></div>
        </div>
      </div>
    </div>
  );
}

