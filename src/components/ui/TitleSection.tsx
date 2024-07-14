import React from 'react';
import { Anton } from "next/font/google";

const anton = Anton({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})


export const TitleSection = ({ text }: { text: string }) => {
    return (
        <div className='flex w-full justify-center items-center' id='contact'>
            <h2 className={`border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.6rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10 ${anton.className}`}>{text}</h2>
        </div>
    )
}
