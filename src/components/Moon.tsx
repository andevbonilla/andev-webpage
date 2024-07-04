"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export const Moon = ({ altMoon }: { altMoon: any }) => {

    const [height, setHeight] = useState(0);
    const [moonClassList, setmoonClassList] = useState("moon");
    const moonRef: any = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            if (moonRef.current) {
                const rect = moonRef.current.getBoundingClientRect();
                setHeight(rect.top);
                console.log(rect.top, "pppp")
                if (rect.top <= 1000 || rect.top >= -800) {
                    setmoonClassList("moon-moving")
                }
            }
        };

        // Agregar el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Ejecutar la función de desplazamiento al montar el componente
        handleScroll();

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={moonRef} className='lg:h-[15rem] flex relative h-[8rem]'>
            <div className='absolute flex h-[50rem] w-[50rem]'>
                <Image
                    src={require("@/assets/moon-icon.png")}
                    alt={altMoon}
                    className={moonClassList}
                    fill
                />
            </div>
        </div>
    )
}
