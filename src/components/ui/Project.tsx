import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProjectInterface {
  name: string,
  desc: string,
  link: string,
  github: string,
  imgUrl: string,
  buttonText: string,
  iconList: Array<any>
}

export const Project = ({ name, desc, link, github, imgUrl, buttonText, iconList }: ProjectInterface) => {
  return (
    <div className='mt-20 sm:mx-[15%] md:mx-[25%] lg:flex lg:mx-[15%]'>
      <Image
        src={require(`@/assets/${imgUrl}`)}
        alt={name + " image mockup"}
        className='mb-4 w-full lg:w-[30rem] lg:h-10rem lg:rounded-md'
      />
      <div className='px-[10%] sm:px-0 md:px-0 mt-10 lg:px-0 lg:mt-0 lg:mx-10 xl:w-[45%]'>

        <h3 className='text-white font-bold text-2xl mb-4 leading-9'>{name}</h3>
        <p className='text-white text-lg mb-4 leading-8'>{desc}</p>

        <div className='flex items-center mt-10'>
          {iconList && iconList.map((elemento: any, index: number) => (
            <div key={index}>
              {elemento}
            </div>
          ))}
        </div>

        <div className='flex justify-between items-center mt-10 lg:mt-5'>
          <div className='hover:rotate-180 transition-all flex flex-col items-center'>
            <Link
              target='_blank'
              className='text-white font-bold text-lg'
              href={link}
            >
              {buttonText}
            </Link>
            <div className='h-2 w-full bg-yellow-200'></div>
          </div>
          <Link title='Github repository Link' target='_blank' href={github}>
            <FontAwesomeIcon icon={faGithub} className='hover:scale-110 w-10 h-10 text-white' />
          </Link>
        </div>
      </div>
    </div>
  )
}
