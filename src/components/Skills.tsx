"use client"
import { AngularSVG, CSVG, Css3SVG, Html5SVG, JavaScriptSVG, MongoDBSVG, MySQLSVG, NextJsSVG, NodejsSVG, PythonSVG, ReactSVG, TailwindSVG } from '@/utils/IconsSvgs';
import React, { useState } from 'react';

export const Skills = () => {

    const [actualTechnology, setactualTechnology] = useState("");
    const [showTechnology, setshowTechnology] = useState(false);

    const show = (tech: string) => {
        setshowTechnology(true);
        setactualTechnology(tech);
        setTimeout(() => {
            setshowTechnology(false);
            setactualTechnology("");
        }, 1000);
    }


    return (

        <>

            {
                showTechnology && <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[997] bg-black bg-opacity-40'>
                    <h3 className='font-bold text-white text-3xl'>{actualTechnology}</h3>
                </div>
            }

            <div className='floating'>

                <div className='flex justify-between mt-[5rem]'>
                    <JavaScriptSVG onClick={() => show("JavaScript")} className='hover:scale-125 transition-all cursor-pointer w-20 h-20 -rotate-2' />
                    <Html5SVG onClick={() => show("HTML5")} className='hover:scale-125 transition-all cursor-pointer w-16 h-16 rotate-1' />
                    <Css3SVG onClick={() => show("CSS3")} className='hover:scale-125 transition-all cursor-pointer w-16 h-16 rotate-[20deg] translate-y-6' />
                </div>

                <div className='flex justify-between mt-[5rem]'>
                    <TailwindSVG onClick={() => show("TailwindCSS")} className='hover:scale-125 transition-all cursor-pointer w-14 h-14 -rotate-6 translate-y-5' />
                    <NextJsSVG onClick={() => show("NextJs")} className='hover:scale-125 transition-all cursor-pointer w-16 h-16 -translate-y-7 -rotate-3' />
                    <PythonSVG onClick={() => show("Python")} className='hover:scale-125 transition-all cursor-pointer w-28 h-28 rotate-6 translate-y-6 -translate-x-2' />
                    <AngularSVG onClick={() => show("Angular")} className='hover:scale-125 transition-all cursor-pointer w-10 h-10 -rotate-2' />
                </div>


                <div className='flex justify-between mt-[5rem]'>
                    <ReactSVG onClick={() => show("ReactJS")} className='hover:scale-125 transition-all cursor-pointer w-16 h-16' />
                    <CSVG onClick={() => show("C")} className='hover:scale-125 transition-all cursor-pointer w-12 h-12 -translate-y-16 rotate-12' />
                    <NodejsSVG onClick={() => show("NodeJS")} className='hover:scale-125 transition-all cursor-pointer w-24 h-24 rotate-2 translate-y-4' />
                    <MySQLSVG onClick={() => show("MySQL")} className='hover:scale-125 transition-all cursor-pointer w-12 h-12 -rotate-3 -translate-y-3' />
                    <MongoDBSVG onClick={() => show("MongoDB")} className='hover:scale-125 transition-all cursor-pointer w-16 h-16 rotate-[150deg]' />
                </div>

            </div>

        </>

    )
}
