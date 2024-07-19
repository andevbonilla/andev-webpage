import Image from 'next/image'
import React from 'react'

export const Cars = () => {
    return (
        < div className='flex w-full relative z-20' >
            <Image
                src={require("@/assets/scenary.webp")}
                alt="greek town in andev page"
                className='flex w-full z-20'
            />
            <div className='absolute w-full top-0 left-0 right-0 z-30'>
                <Image
                    src={require("@/assets/car-brabus900.png")}
                    alt="Brabus Rocket 900"
                    className='absolute w-[18rem] brabus900'
                />
                <Image
                    src={require("@/assets/car-bugatti.png")}
                    alt="Buguatti Chiron"
                    className='absolute w-[17rem] bugatti'
                />
                <Image
                    src={require("@/assets/car-gt3rs.png")}
                    alt="Porsche 911 GT3 rs"
                    className='absolute w-[16rem] gt3rs'
                />
                <Image
                    src={require("@/assets/car-sandero.png")}
                    alt="Renault Sandero"
                    className='absolute w-[16rem] sandero'
                />
                <Image
                    src={require("@/assets/car-x6m.png")}
                    alt="Bmw X6M"
                    className='absolute w-[21rem] x6m'
                />
                <Image
                    src={require("@/assets/bike-ducati.png")}
                    alt="Ducati streetfigther"
                    className='absolute w-[11rem] ducati'
                />
            </div>
        </div >
    )
}
