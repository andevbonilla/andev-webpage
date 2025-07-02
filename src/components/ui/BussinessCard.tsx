import Image from 'next/image';
import React from 'react';

interface BussinessCardProps {
  link?: string;
  status?: 'red' | 'green' | 'blue';
  imgUrl: string;
  desc: string;
  name: string;
  statusName?: "Discontinued" | "Active" | "On hold";
  visitTranslation: string;
}

export const BussinessCard = ({ link, status, imgUrl, desc, name, statusName, visitTranslation }: BussinessCardProps) => {

    const statusClasses: any = {
        red: 'bg-red-100 text-red-600',
        green: 'bg-green-100 text-green-600',
        blue: 'bg-blue-100 text-blue-600',
    };

    return (
        <div className="relative bg-white p-7 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between">
            {status && statusClasses[status] && (
                <div
                    className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded-full ${statusClasses[status]}`}
                >
                    {statusName}
                </div>
            )}
            <Image
                src={require(`@/assets/business/${imgUrl}`)}
                alt={name + " image mockup"}
                className='w-[8rem] mb-[1rem]'
            />
            <p className="text-gray-600 mb-4">{desc}</p>
            {link && (
                <div className="mt-6">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-all duration-150 text-center bg-yellow-200 text-[#0F193B] font-bold py-3 px-4 rounded-lg hover:bg-yellow-300"
                    >
                        {visitTranslation} {name}
                    </a>
                </div>
            )}
        </div>
    );
};