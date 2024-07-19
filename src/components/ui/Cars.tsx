"use client"
import Image from 'next/image';

export const RaceTrack = ({
    gt3rsClassList,
    brabusClassList,
    bugattiClassList,
    sanderoClassList,
    x6mClassList,
    ducatiClassList
}: any) => {


    return (
        <div className='flex w-full h-[12rem] relative z-30 scenary'>

            <Image
                src={require("@/assets/car-brabus900.png")}
                alt="Brabus Rocket 900"
                className={`absolute lg:w-[16.12rem] xl:w-[18.28rem] w-[11.8rem] ${brabusClassList} bottom-[70%] xl:bottom-[60%] right-0`}
            />
            <Image
                src={require("@/assets/car-x6m.png")}
                alt="BMW X6M"
                className={`absolute lg:w-[17.64rem] xl:w-[20.16rem] w-[12.6rem] ${x6mClassList} bottom-[60%] xl:bottom-[50%] right-0`}
            />
            <Image
                src={require("@/assets/car-sandero.png")}
                alt="Renault Sandero"
                className={`absolute lg:w-[13.44rem] xl:w-[15.36rem] w-[9.6rem] ${sanderoClassList} bottom-[55%] xl:bottom-[45%] right-0`}
            />
            <Image
                src={require("@/assets/car-bugatti.png")}
                alt="Bugatti Chiron"
                className={`absolute lg:w-[14.28rem] xl:w-[16.32rem] w-[10.2rem] ${bugattiClassList} bottom-[50%] xl:bottom-[40%] right-0`}
            />
            <Image
                src={require("@/assets/car-gt3rs.png")}
                alt="Porsche 911 GT3 rs"
                className={`absolute lg:w-[14.44rem] xl:w-[16.36rem] w-[10.6rem] ${gt3rsClassList} bottom-[45%] xl:bottom-[35%] right-0`}
            />
            <Image
                src={require("@/assets/bike-ducati.png")}
                alt="Ducati Streetfighter"
                className={`absolute lg:w-[9.24rem] xl:w-[10.56rem] w-[6.6rem] ${ducatiClassList} bottom-[35%] xl:bottom-[25%] right-0`}
            />


        </div>
    );
};


