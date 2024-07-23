import React from 'react';
import { Indie_Flower } from "next/font/google";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})


const indieFlower = Indie_Flower({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const CuriosFact = ({ text, meters }: { text: string, meters: string }) => {
  return (
    <section className={`z-20 text-center md:text-xl md:mt-20 lg:mx-[25%] xl:mx-[30%] flex flex-col mx-[10%] text-white my-24 p-2 md:p-3 ${indieFlower.className}`}>
      <div className='flex items-center w-full justify-center mb-2'>
        <div className='mr-2 h-[.3rem] w-[.6rem] bg-yellow-200'></div>
        <h4 className={`text-2xl font-bold ${anton.className}`}>{meters} mt</h4>
        <div className='ml-2 h-[.3rem] w-[.6rem] bg-yellow-200'></div>
      </div>
      <p className='text-white font-bold text-3xl'>{text}</p>
    </section>
  )
}
