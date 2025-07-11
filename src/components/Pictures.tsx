"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const PicturesInBalloons = () => {
  const [balloons, setBalloons] = useState(5);
  const [initialAnimationY, setInitialAnimationY] = useState(450);
  const [animationY, setAnimationY] = useState(initialAnimationY);
  const animatedImage = useRef(null);

  const directionFunction = (value: any) => {

    if (screen.width < 700) {

      if (balloons === 5) {
        return value - 3.6
      }
      if (balloons === 4) {
        return value - 2.8
      }
      if (balloons === 3) {
        return value - 1
      }
      if (balloons === 2) {
        return value + 1;
      }
      if (balloons === 1) {
        return value + 6;
      }
      if (balloons === 0) {
        return value + 12;
      }

    } else {

      if (balloons === 5) {
        return value - 1.3
      }
      if (balloons === 4) {
        return value - 1
      }
      if (balloons === 3) {
        return value - 0.4
      }
      if (balloons === 2) {
        return value + 1;
      }
      if (balloons === 1) {
        return value + 3;
      }
      if (balloons === 0) {
        return value + 6;
      }

    }

  }

  useEffect(() => {

    if (window && window.innerHeight) {
      if (Math.abs(animationY) > window.innerHeight + 10000) {
        setBalloons(5);
        setAnimationY(initialAnimationY);
        for (let i = 1; i <= 5; i++) {
          const balloonObj = document.getElementById(`balloon${i}`);
          if (balloonObj) {
            balloonObj.style.display = "block";
          }
        }
      }
    }

  }, [animationY, initialAnimationY]);


  useEffect(() => {
    let animationId: any;

    const animate = () => {
      setAnimationY((prevY) => directionFunction(prevY));
      animationId = requestAnimationFrame(animate);
    };

    animate(); // Iniciar la animación al principio

    return () => {
      // Cancelar la animación cuando balloons cambie
      cancelAnimationFrame(animationId);
    };
  }, [balloons, initialAnimationY]);

  const deleteBalloon = (id: number) => {

    const balloonSelected = document.getElementById(`balloon${id}`);
    if (balloonSelected) {
      balloonSelected.style.display = "none";
      setBalloons((prevBalloons) => prevBalloons - 1);
    }

  };

  let style = {
    transform: `translateY(${animationY}px)`,
  };


  return (
    <div
      ref={animatedImage}
      style={style}
      className={`flex flex-col items-center justify-center fixed left-0 md:left-[5rem] lg:left-[10rem] xl:left-[15rem] bottom-[-20rem] w-[20rem] h-[25rem] z-[999]`}
    >
      <div className="flex z-[995] relative">
        {/* Balloons here */}
        <div id="balloon1" onClick={() => deleteBalloon(1)} className="cursor-crosshair balloon top-0 right-0 rotate-[5deg] -translate-y-[21rem]"></div>
        <div id="balloon2" onClick={() => deleteBalloon(2)} className="cursor-crosshair balloon top-0 right-0 rotate-[23deg] translate-x-[3.3rem] -translate-y-[15rem]"></div>
        <div id="balloon3" onClick={() => deleteBalloon(3)} className="cursor-crosshair balloon top-0 right-0 -translate-y-[17rem]"></div>
        <div id="balloon4" onClick={() => deleteBalloon(4)} className="cursor-crosshair balloon top-0 right-0 rotate-[-10deg] -translate-x-[2rem] -translate-y-[19rem]"></div>
        <div id="balloon5" onClick={() => deleteBalloon(5)} className="cursor-crosshair balloon top-0 right-0 rotate-[-20deg] -translate-x-[3rem] -translate-y-[15rem]"></div>
      </div>
      {balloons === 0 ? (
        <Image
          src={require(`@/assets/me-cartoon-scared.webp`)}
          alt="Andev photos"
          className="z-[998] relative w-[13rem]"
        />
      ) : (
        <Image
          src={require(`@/assets/me-cartoon.webp`)}
          alt="Andev photos"
          className="z-[998] relative w-[13rem]"
        />
      )}
    </div>
  );
};
