"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export const RaceTrack = () => {
    const brabusRef = useRef(null);
    const x6mRef = useRef(null);
    const sanderoRef = useRef(null);
    const bugattiRef = useRef(null);
    const gt3rsRef = useRef(null);
    const ducatiRef = useRef(null);

    useEffect(() => {
        const createTimeline = (ref: any, duration: any, delay: any, maxSpeed: any) => {
            const timeline = gsap.timeline({ delay });

            timeline.to(ref.current, {
                x: '-150vw',
                duration,
                ease: "power3.inOut",
                onUpdate: () => {
                    const progress = timeline.progress();
                    const tilt = Math.min(progress * 2, maxSpeed); // Inclinación menos exagerada
                    gsap.set(ref.current, { rotateZ: tilt }); // Inclinación hacia el lado contrario
                },
                onComplete: () => {
                    gsap.set(ref.current, { x: 0, rotateZ: 0 }); // Resetear posición y rotación después de la animación
                }
            });

            return timeline;
        };

        const animations = [
            { ref: brabusRef, duration: 7.7, delay: 0, maxSpeed: 1.5 },
            { ref: x6mRef, duration: 8.2, delay: 0, maxSpeed: 1.5 },
            { ref: sanderoRef, duration: 11, delay: 0, maxSpeed: 0.8 },
            { ref: bugattiRef, duration: 4.4, delay: 0, maxSpeed: 2 },
            { ref: gt3rsRef, duration: 6.4, delay: 0, maxSpeed: 1.5 },
            { ref: ducatiRef, duration: 6.6, delay: 0, maxSpeed: 1.5 },
        ];

        animations.forEach(({ ref, duration, delay, maxSpeed }) => {
            createTimeline(ref, duration, delay, maxSpeed);
        });
    }, []);

    return (
        <div className='flex w-full h-[12rem] relative z-30 scenary'>
            <Image
                src={require("@/assets/veh-brabus.svg")}
                alt="Brabus Rocket 900"
                ref={brabusRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[75%] 2xl:bottom-[55%] right-0"
            />
            <Image
                src={require("@/assets/veh-x6m.svg")}
                alt="BMW X6M"
                ref={x6mRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[65%] 2xl:bottom-[45%] right-0"
            />
            <Image
                src={require("@/assets/veh-sandero.svg")}
                alt="Renault Sandero"
                ref={sanderoRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[60%] 2xl:bottom-[35%] right-0"
            />
            <Image
                src={require("@/assets/veh-bugatti.svg")}
                alt="Bugatti Chiron"
                ref={bugattiRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[55%] 2xl:bottom-[25%] right-0"
            />
            <Image
                src={require("@/assets/veh-porsche.svg")}
                alt="Porsche 911 GT3 rs"
                ref={gt3rsRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[45%] 2xl:bottom-[15%] right-0"
            />
            <Image
                src={require("@/assets/veh-ducati.svg")}
                alt="Ducati Streetfighter"
                ref={ducatiRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[40%] 2xl:bottom-[5%] right-0"
            />
        </div>
    );
};
