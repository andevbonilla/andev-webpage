"use client"
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CarouselItem {
    id: number;
    url: string;
}

const UnayMugreCarousel: React.FC = () => {
    const items: CarouselItem[] = [
        { id: 1, url: "https://www.tiktok.com/@unaymugre.fit/video/7411579850999221510" },
        { id: 2, url: "https://www.instagram.com/p/C_bE6XTuRbn/" },
        { id: 3, url: "https://www.youtube.com/shorts/ETKW7AxQVzs" },
        { id: 4, url: "https://www.youtube.com/shorts/PYIZbKl-JUk" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX('touches' in e ? e.touches[0].pageX : e.pageX);
    };

    const handleDragMove = useCallback(
        (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            const currentX = 'touches' in e ? e.touches[0].pageX : e.pageX;
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                setActiveIndex((prevIndex) => {
                    const newIndex = diff > 0
                        ? (prevIndex + 1) % items.length
                        : (prevIndex - 1 + items.length) % items.length;
                    setStartX(currentX);
                    return newIndex;
                });
            }
        },
        [isDragging, startX, items.length]
    );

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('mousemove', handleDragMove);
            carousel.addEventListener('touchmove', handleDragMove);
            carousel.addEventListener('mouseup', handleDragEnd);
            carousel.addEventListener('touchend', handleDragEnd);
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener('mousemove', handleDragMove);
                carousel.removeEventListener('touchmove', handleDragMove);
                carousel.removeEventListener('mouseup', handleDragEnd);
                carousel.removeEventListener('touchend', handleDragEnd);
            }
        };
    }, [handleDragMove]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isDragging, items.length]);

    return (
        <div className="flex items-center justify-center bg-transparent h-[10rem] mt-[10rem] mb-[11rem]">
            <div
                ref={carouselRef}
                className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isPrev = index === (activeIndex - 1 + items.length) % items.length;
                    const isNext = index === (activeIndex + 1) % items.length;

                    return (
                        <div
                            key={item.id}
                            className={` 
                                absolute transition-all duration-300 ease-in-out
                                ${isActive ? 'z-20 scale-100 opacity-100' : 'z-10 scale-75 opacity-50'}
                                ${isPrev ? '-translate-x-full' : ''}
                                ${isNext ? 'translate-x-full' : ''}
                                ${!isActive && !isPrev && !isNext ? 'opacity-0 scale-0' : ''}
                            `}
                        >
                            <a
                                href={item.url}
                                target='_blank'
                                className={`
                                    w-[14rem] h-[25rem] rounded-3xl shadow-lg flex relative items-center justify-center text-white text-2xl font-bold
                                    ${isActive ? 'bg-yellow-500' : 'bg-yellow-700'}
                                `}
                            >
                                <FontAwesomeIcon icon={faPlay} className='absolute text-white w-[3.2rem] h-[3.2rem] opacity-80' />
                                <Image
                                    src={require(`../../src/assets/unaymugre/video${item.id}UnaYMugre.webp`)}
                                    alt='video of una y mugre'
                                    className='h-full'
                                />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UnayMugreCarousel;