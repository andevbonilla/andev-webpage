"use client"
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

interface ParallaxSceneProps {
    height?: string;
}

const ParallaxScene: React.FC<ParallaxSceneProps> = ({ height = '10vh' }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sceneRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: [0, 1] }
        );

        if (sceneRef.current) {
            observer.observe(sceneRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sceneRef.current || !isInView) return;

            const rect = sceneRef.current.getBoundingClientRect();
            const scrollPercentage = 1 - (rect.bottom / (rect.height * 8));
            setScrollProgress(Math.max(0, Math.min(1, scrollPercentage)));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isInView]);

    const sunPosition = (window.innerWidth > 1000) ? (scrollProgress * 80) : (scrollProgress * 300);
    const balloon1X = (window.innerWidth > 1000) ? (scrollProgress * 100 - 40) : (scrollProgress * 140 - 40);
    const balloon2X = (window.innerWidth > 1000) ? (140 - scrollProgress * 100) : (140 - scrollProgress * 200);

    const balloonY = (x: number) => {
        const normalizedX = (x + 20) / 120;
        return -100 * Math.pow(normalizedX - 0.5, 2) + 50;
    };

    return (
        <div ref={sceneRef} className="relative" style={{ height }}>
            {/* Sun */}
            <div
                className="absolute left-1/2 lg:w-[20rem] lg:h-[20rem] h-[8rem] w-[8rem] rounded-full bg-yellow-400 z-10"
                style={{
                    transform: `translate(-50%, ${sunPosition}%)`,
                    boxShadow: '0 0 50px rgba(255, 215, 0, 0.7)',
                    top: `${sunPosition}%`,
                }}
            />

            {/* Hot Air Balloon 1 */}
            <div
                className="absolute lg:w-[18rem] lg:h-[18rem] w-[8rem] h-[8rem] z-20"
                style={{
                    left: `${balloon1X}%`,
                    top: `${balloonY(balloon1X)}%`,
                    transform: `translateY(${-scrollProgress * 10}%)`,
                }}
            >
                <Image
                    src={require("@/assets/globe.webp")}
                    width={200}
                    height={200}
                    alt='globe of the 18 century'
                />
            </div>

            {/* Hot Air Balloon 2 */}
            <div
                className="absolute lg:w-[20rem] lg:h-[20rem] w-[10rem] h-[10rem] z-20"
                style={{
                    left: `${balloon2X}%`,
                    top: `${balloonY(balloon2X)}%`,
                    transform: `translateY(${-scrollProgress * 15}%)`,
                }}
            >
                <Image
                    src={require("@/assets/globe.webp")}
                    width={200}
                    height={200}
                    alt='globe of the 18 century'
                />
            </div>
        </div>
    );
};

export default ParallaxScene;