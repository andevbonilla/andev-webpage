import Image from 'next/image';
import React from 'react';

export const City = () => {
  return (
    <div className='w-full' id="part1">
      <Image
        src={require("@/assets/posible_town.png")}
        alt="okokok"
        className='w-full'
      />
    </div>
  )
}
