"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export const City = () => {

  const sun: any = useRef(null);
  const cityMobile: any = useRef(null);
  const cityDesktop: any = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      let scroll = window.scrollY;
      if (cityMobile.current) cityMobile.current.style.zIndex = '990';
      if (cityDesktop.current) cityDesktop.current.style.zIndex = '990';
      if (sun.current) {
        sun.current.style.zIndex = '800';
        sun.current.style.top = `${10}px`; // Ajustar posición del sol
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <div className='w-full relative mt-10' id="part1">
      <div ref={sun} className='absolute top-[0] left-[20%] w-[20rem] h-[20rem] bg-yellow-400 rounded-full z-10'></div>
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
