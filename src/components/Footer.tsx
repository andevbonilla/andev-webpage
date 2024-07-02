import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = ({ titanicAlt }: any) => {
    return (
        <div className='titanic mt-20'>
            <div className='flex justify-center items-center mb-24'>
                <Link href={"https://www.instagram.com/andevbonilla"}
                    target='_blank'
                    title='instagram link'>
                    <FontAwesomeIcon icon={faInstagram} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] mr-12' />
                </Link>
                <Link href={"https://twitter.com/andevbonilla"}
                    target='_blank'
                    title='twitter link'>
                    <FontAwesomeIcon icon={faTwitter} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] mr-12' />
                </Link>
                <Link href={"https://www.linkedin.com/in/andevbonilla"}
                    target='_blank'
                    title='linkedin link'>
                    <FontAwesomeIcon icon={faLinkedin} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] mr-12' />
                </Link>
                <Link href={"https://github.com/andevbonilla"}
                    target='_blank'
                    title='github link'>
                    <FontAwesomeIcon icon={faGithub} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]' />
                </Link>
            </div>
            <Image
                src={require("@/assets/titanic.png")}
                alt={titanicAlt}
                className='w-full scale-150 lg:scale-[1.4] -translate-x-6 mt-[15rem]'
            />
        </div>
    )
}
