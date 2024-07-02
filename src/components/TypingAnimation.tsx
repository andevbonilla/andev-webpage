"use client"
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export const TypingAnimation = ({stringList}:any) => {

    const subtitle = useRef(null);

    useEffect(() => {
         const typed = new Typed(subtitle.current, {
            strings: stringList,
            typeSpeed: 120,
            loop: true
         });
         return () => {
            typed.destroy();
         };
    }, []);

  return (
    <h2 className='h-10 text-white text-xl font-bold' ref={subtitle}></h2>
  )
}
