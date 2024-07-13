import Image from 'next/image';
import React from 'react';

export const City = () => {
  return (
    <div className='relative' id="part1">
      <Image
        src={require("@/assets/layers-forest/layer1-new.png")}
        alt="okokok"
        className='w-full absolute top-[-10rem]'
      />
      <Image
        src={require("@/assets/layers-forest/layer2-new.png")}
        alt="okokok"
        className='w-full absolute top-[-10rem]'
      />
      <Image
        src={require("@/assets/layers-forest/layer3-new.png")}
        alt="okokok"
        className='w-full absolute top-[-10rem]'
      />
      <Image
        src={require("@/assets/layers-forest/layer4-new.png")}
        alt="okokok"
        className='w-full absolute top-[-10rem]'
      />
    </div>
  )
}
