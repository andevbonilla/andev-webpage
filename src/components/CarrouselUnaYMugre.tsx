"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CarouselItem {
    id: number;
    content: string;
}

const UnayMugreCarousel: React.FC = () => {
    const items: CarouselItem[] = [
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
        { id: 4, content: 'Item 4' },
        { id: 5, content: 'Item 5' },
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
                            <div
                                className={`
                                    w-64 h-96 rounded-3xl shadow-lg flex items-center justify-center text-white text-2xl font-bold
                                    ${isActive ? 'bg-yellow-500' : 'bg-yellow-700'}
                                `}
                            >
                                {item.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UnayMugreCarousel;