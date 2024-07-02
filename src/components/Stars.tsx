"use client"
import React, { useEffect, useRef } from 'react';

export const StarsBackground = ({children}:any) => {

    const starElem:any = useRef(null);

    const hideStars = () => {
                if (starElem === null) return;
                const totalHeight = Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                );                
                if (Math.round(window.scrollY) > (totalHeight * 0.4)) {
                        // sin estrellas
                        starElem.current.className = `no-stars`;                                       
                }else {
                        // con estrellas
                        starElem.current.className = `stars`;                    
                };

    };

    useEffect(() => {

        window.addEventListener('scroll', hideStars);
        return () => {
            window.removeEventListener('scroll', hideStars);
        };
        
    }, []);

  return (
    <div className='stars' ref={starElem}>{children}</div>
  )
}
