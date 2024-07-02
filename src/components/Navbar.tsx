"use client"
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export const Navbar = ({ lenguage }: any) => {

    const [asteroidsMenuOpen, setAsteroidsMenuOpen] = useState(false);
    const [showLenguageMenu, setshowLenguageMenu] = useState(false);
    const [activeClass, setactiveClass] = useState(false);
    const navbar: any = useRef(null)

    const router = useRouter();

    const [texts, setTexts] = useState({
        svgUrl: "flag-for-united-kingdom-svgrepo-com.svg",
        LenguageName: "EN",
        changeLenguageText: "Change Lenguage",
        projectAsteroid: "",
        contactAsteroid: "",
        aboutAsteroid: "",
        bussinessAsteroid: "",
    });

    let principalUbication = 0;
    const handleViewNav = () => {

        if (typeof window === 'undefined') return;
        if (asteroidsMenuOpen) return;
        if (window.scrollY < 0) {
            return;
        };

        let currentDisplacement = window.scrollY;
        if (currentDisplacement === principalUbication) return;


        if (currentDisplacement >= 1) {
            setactiveClass(true);
        } else {
            setactiveClass(false);
        };
        if (navbar.current !== null) {

            if (principalUbication >= currentDisplacement) {
                navbar.current.style.top = '0';
                navbar.current.style.transition = '.5s';
            } else {
                navbar.current.style.top = '-400px';
                navbar.current.style.transition = '1s';
            }

            principalUbication = currentDisplacement;

        };
    };

    useEffect(() => {

        if (lenguage === "en") {
            setTexts({
                svgUrl: "flag-for-united-kingdom-svgrepo-com.svg",
                LenguageName: "EN",
                changeLenguageText: "Change Lenguage",
                projectAsteroid: "PROJECTS",
                contactAsteroid: "CONTACT",
                aboutAsteroid: "ABOUT",
                bussinessAsteroid: "BUSINESS",
            })
        } else if (lenguage === "es") {
            setTexts({
                svgUrl: "flag-for-spain-svgrepo-com.svg",
                LenguageName: "ES",
                changeLenguageText: "Cambiar Idioma",
                projectAsteroid: "PROYECTOS",
                contactAsteroid: "CONTACTO",
                aboutAsteroid: "SOBRE MI",
                bussinessAsteroid: "NEGOCIOS",
            })
        } else if (lenguage === "fr") {
            setTexts({
                svgUrl: "flag-for-spain-svgrepo-com.svg",
                LenguageName: "FR",
                changeLenguageText: "Changer de langue",
                projectAsteroid: "PROJETS",
                contactAsteroid: "CONTACT",
                aboutAsteroid: "SUR MI",
                bussinessAsteroid: "ENTREPRISE",
            })
        } else if (lenguage === "ch") {
            setTexts({
                svgUrl: "flag-for-spain-svgrepo-com.svg",
                LenguageName: "CH",
                changeLenguageText: "更改语言",
                projectAsteroid: "项目",
                contactAsteroid: "接触",
                aboutAsteroid: "关于我",
                bussinessAsteroid: "商业",
            })
        } else if (lenguage === "hi") {
            setTexts({
                svgUrl: "flag-for-spain-svgrepo-com.svg",
                LenguageName: "HI",
                changeLenguageText: "भाषा बदलें",
                projectAsteroid: "परियोजनाओं",
                contactAsteroid: "संपर्क",
                aboutAsteroid: "मेरे बारे में",
                bussinessAsteroid: "व्यापार",
            })
        } else if (lenguage === "ja") {
            setTexts({
                svgUrl: "flag-for-spain-svgrepo-com.svg",
                LenguageName: "JA",
                changeLenguageText: "言語の変更",
                projectAsteroid: "プロジェクト",
                contactAsteroid: "接触",
                aboutAsteroid: "私について",
                bussinessAsteroid: "仕事",
            })
        } else {
            setTexts({
                svgUrl: "flag-for-united-kingdom-svgrepo-com.svg",
                LenguageName: "EN",
                changeLenguageText: "Change Lenguage",
                projectAsteroid: "PROJECTS",
                contactAsteroid: "CONTACT",
                aboutAsteroid: "ABOUT",
                bussinessAsteroid: "BUSINESS",
            })
        }

        document.addEventListener('scroll', handleViewNav);
        return () => {
            document.removeEventListener('scroll', handleViewNav);
        };

    }, []);


    const openAsteroidsMenu = () => {
        setAsteroidsMenuOpen(true);
    };

    const closeAsteroidsMenu = () => {
        setAsteroidsMenuOpen(false);
    };

    const clickOnAsteroid = (link: string) => {
        setAsteroidsMenuOpen(false);
        router.push(link);
    };

    const openLenguagesMenu = () => {
        setshowLenguageMenu(true);
    };

    const closeLenguagesMenu = () => {
        setshowLenguageMenu(false);
    };


    return (
        <>

            <nav ref={navbar} className={`${activeClass ? "bg-gradient-to-b from-black to-transparent" : ""} z-[998] fixed top-0 left-0 w-full flex justify-between items-center py-10 px-[15%]`}>

                <Image
                    src={require("@/assets/slogan.png")}
                    alt='Andres Bonilla Logo'
                    width={60}
                    height={60}
                />

                <div className='flex items-center'>

                    <button onClick={openLenguagesMenu} type='button' className='flex items-center mr-3 lg:mr-6 cursor-pointer'>
                        <FontAwesomeIcon icon={faGlobe} size='2x' className='text-white' />
                        <p className='text-white font-bold ml-3'>{texts.LenguageName}</p>
                    </button>

                    <FontAwesomeIcon
                        onClick={openAsteroidsMenu}
                        icon={faBars}
                        className='text-white cursor-pointer'
                        size='2x'
                    />
                </div>

            </nav>

            {/* change the lenguage part */}
            {
                showLenguageMenu && <div className='flex justify-center items-center h-screen fixed w-full top-0 left-0 z-[999]'>
                    <div onClick={closeLenguagesMenu} className='cursor-pointer z-[1000] fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50'></div>
                    <div className='bg-white py-10 px-12 rounded z-[1001]'>

                        <h2 className='font-bold text-xl mb-6'>{texts.changeLenguageText}</h2>

                        <Link href={"/"} className='text-black flex items-center mb-2 hover:bg-slate-300 hover:transition-all p-3 rounded'>
                            <Image
                                src={require("@/assets/flag-for-united-kingdom-svgrepo-com.svg")}
                                alt='spain flag'
                                width={40}
                                height={40}
                            />
                            <p className='ml-2 text-xl'>English</p>
                        </Link>

                        <Link href={"/es"} className='text-black flex items-center mb-2 hover:bg-slate-300 hover:transition-all p-3 rounded'>
                            <Image
                                src={require("@/assets/flag-for-spain-svgrepo-com.svg")}
                                alt='spain flag'
                                width={40}
                                height={40}
                            />
                            <p className='ml-2 text-xl'>Español</p>
                        </Link>

                        <Link href={"/ja"} className='text-black flex items-center mb-2 hover:bg-slate-300 hover:transition-all p-3 rounded'>
                            <Image
                                src={require("@/assets/flag-for-flag-japan-svgrepo-com.svg")}
                                alt='spain flag'
                                width={40}
                                height={40}
                            />
                            <p className='ml-2 text-xl'>日本語</p>
                        </Link>

                        <Link href={"/fr"} className='text-black flex items-center mb-2 hover:bg-slate-300 hover:transition-all p-3 rounded'>
                            <Image
                                src={require("@/assets/flag-for-flag-st-martin-svgrepo-com.svg")}
                                alt='spain flag'
                                width={40}
                                height={40}
                            />
                            <p className='ml-2 text-xl'>Français</p>
                        </Link>

                        <Link href={"/ch"} className='text-black flex items-center mb-2 hover:bg-slate-300 hover:transition-all p-3 rounded'>
                            <Image
                                src={require("@/assets/flag-for-flag-china-svgrepo-com.svg")}
                                alt='spain flag'
                                width={40}
                                height={40}
                            />
                            <p className='ml-2 text-xl'>中文 {"("}简体{")"}</p>
                        </Link>

                        <Link href={"/hi"} className='text-black flex items-center mb-2 hover:bg-slate-300 hover:transition-all p-3 rounded'>
                            <Image
                                src={require("@/assets/flag-for-flag-india-svgrepo-com.svg")}
                                alt='spain flag'
                                width={40}
                                height={40}
                            />
                            <p className='ml-2 text-xl'>हिंदी</p>
                        </Link>

                    </div>
                </div>

            }

            {
                asteroidsMenuOpen && <div className='fixed w-full h-screen z-[999] bg-[#0F193B]'>
                    <div className='stars'>
                        <div className='flex justify-end items-center p-10'>
                            <FontAwesomeIcon
                                onClick={closeAsteroidsMenu}
                                icon={faXmark}
                                className='text-white w-12 h-12 cursor-pointer'
                            />
                        </div>
                        <div className='overflow-hidden'>

                            <button onClick={() => clickOnAsteroid("/#about")} className='w-[7rem] h-[7rem] flex justify-center items-center mb-8 asteroid' id='asteroid'>
                                <p className='font-bold text-white text-2xl'>{texts.aboutAsteroid}</p>
                            </button>

                            <button onClick={() => clickOnAsteroid("/#business-part")} className='w-[10rem] h-[10rem] flex justify-center items-center mb-12 asteroid1' id='asteroid1'>
                                <p className='font-bold text-white text-2xl'>{texts.bussinessAsteroid}</p>
                            </button>

                            <button onClick={() => clickOnAsteroid("/#projects")} className='w-[10rem] h-[10rem] flex justify-center items-center mb-12 asteroid1' id='asteroid2'>
                                <p className='font-bold text-white text-2xl'>{texts.projectAsteroid}</p>
                            </button>

                            <button onClick={() => clickOnAsteroid("/#contact")} className='w-[8rem] h-[8rem] flex justify-center items-center mb-12 asteroid3' id='asteroid3'>
                                <p className='font-bold text-white text-2xl'>{texts.contactAsteroid}</p>
                            </button>

                        </div>
                    </div>
                </div>
            }


        </>
    )
}
