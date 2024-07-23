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
                src={require("@/assets/veh-brabus.svg")}
                alt="Brabus Rocket 900"
                className={`absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] ${brabusClassList} bottom-[75%] 2xl:bottom-[55%] right-0`}
            />
            <Image
                src={require("@/assets/veh-x6m.svg")}
                alt="BMW X6M"
                className={`absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] ${x6mClassList} bottom-[65%] 2xl:bottom-[45%] right-0`}
            />
            <Image
                src={require("@/assets/veh-sandero.svg")}
                alt="Renault Sandero"
                className={`absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] ${sanderoClassList} bottom-[60%] 2xl:bottom-[35%] right-0`}
            />
            <Image
                src={require("@/assets/veh-bugatti.svg")}
                alt="Bugatti Chiron"
                className={`absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] ${bugattiClassList} bottom-[55%] 2xl:bottom-[25%] right-0`}
            />
            <Image
                src={require("@/assets/veh-porsche.svg")}
                alt="Porsche 911 GT3 rs"
                className={`absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] ${gt3rsClassList} bottom-[45%] 2xl:bottom-[15%] right-0`}
            />
            <Image
                src={require("@/assets/veh-ducati.svg")}
                alt="Ducati Streetfighter"
                className={`absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] ${ducatiClassList} bottom-[40%] 2xl:bottom-[5%] right-0`}
            />

        </div>
    );
};


