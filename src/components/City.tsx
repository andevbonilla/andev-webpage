import Image from 'next/image';
import React from 'react';

export const City = () => {
  return (
    <div className='w-full' id="part1">
      <Image
        src={require("@/assets/posible_town2.webp")}
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
