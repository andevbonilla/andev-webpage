import Image from 'next/image';
import React from 'react';

export const City = () => {
  return (
    <div className='w-full relative' id="part1">
      <div className='bg-fixed top-[0] w-[5rem] h-[5rem] bg-yellow-400 rounded-full'></div>
      <Image
        src={require("@/assets/town-desktop.webp")}
        alt="greek town in andev page"
        className='hidden md:flex w-full'
      />
      <Image
        src={require("@/assets/posible_town.webp")}
        alt="greek town in andev page"
        className='md:hidden w-full'
      />
    </div>
  )
}
