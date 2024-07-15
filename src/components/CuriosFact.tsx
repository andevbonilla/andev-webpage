import React from 'react';
import { Indie_Flower } from "next/font/google";

const indieFlower = Indie_Flower({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const CuriosFact = ({ text }: any) => {
  return (
    <section className={`z-20 text-center md:text-xl md:mt-20 lg:mx-[25%] xl:mx-[30%] flex mx-[10%] text-white my-24 p-2 md:p-3 ${indieFlower.className}`}>
      <p className='text-white font-bold text-3xl'> - {text}</p>
    </section>
  )
}
