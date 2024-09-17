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
        const distance = -3000; // Distancia fija en píxeles para la animación

        const createTimeline = (ref: any, duration: any, delay: any, maxSpeed: any) => {
            const timeline = gsap.timeline({ delay });

            timeline.to(ref.current, {
                x: distance,
                duration,
                ease: "power3.inOut",
                onUpdate: () => {
                    const progress = timeline.progress(); // Inclinación suave
                    gsap.set(ref.current, { rotateZ: (progress < 0.3) ? progress * 6 : 1.8 });

                },
                onComplete: () => {
                    gsap.set(ref.current, { x: 0, rotateZ: 0 }); // Resetear posición y rotación después de la animación
                }
            });

            return timeline;
        };

        const animations = [
            { ref: brabusRef, duration: 5.7, delay: 0.2, maxSpeed: 1 },  // Ajusta maxSpeed para cada vehículo
            { ref: x6mRef, duration: 6, delay: 0.2, maxSpeed: 1 },
            { ref: sanderoRef, duration: 10, delay: 0, maxSpeed: 0.1 },
            { ref: bugattiRef, duration: 3.9, delay: 0.2, maxSpeed: 1 },
            { ref: gt3rsRef, duration: 4.92, delay: 0.2, maxSpeed: 1 },
            { ref: ducatiRef, duration: 4.76, delay: 0.2, maxSpeed: 1 },
        ];

        animations.forEach(({ ref, duration, delay, maxSpeed }) => {
            createTimeline(ref, duration, delay, maxSpeed);
        });
    }, []);

    return (
        <div className='flex w-full h-[12rem] relative z-30 scenary'>
            <Image
                src={require("@/assets/vehicles/veh-brabus.webp")}
                alt="Brabus Rocket 900"
                ref={brabusRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[75%] 2xl:bottom-[55%] right-0"
            />
            <Image
                src={require("@/assets/vehicles/veh-x6m.webp")}
                alt="BMW X6M"
                ref={x6mRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[65%] 2xl:bottom-[45%] right-0"
            />
            <Image
                src={require("@/assets/vehicles/veh-sandero.webp")}
                alt="Renault Sandero"
                ref={sanderoRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[60%] 2xl:bottom-[35%] right-0"
            />
            <Image
                src={require("@/assets/vehicles/veh-bugatti.webp")}
                alt="Bugatti Chiron"
                ref={bugattiRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[55%] 2xl:bottom-[25%] right-0"
            />
            <Image
                src={require("@/assets/vehicles/veh-porsche.webp")}
                alt="Porsche 911 GT3 rs"
                ref={gt3rsRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[45%] 2xl:bottom-[15%] right-0"
            />
            <Image
                src={require("@/assets/vehicles/veh-ducati.webp")}
                alt="Ducati Streetfighter"
                ref={ducatiRef}
                className="absolute w-[40vw] lg:w-[25vw] 2xl:w-[20vw] bottom-[40%] 2xl:bottom-[5%] right-0"
            />
        </div>
    );
};
