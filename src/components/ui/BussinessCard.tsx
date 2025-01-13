import React from 'react';

export const BussinessCard = ({ link, status, name, desc, statusName, visitTranslation }: any) => {

    const statusClasses: any = {
        red: 'bg-red-100 text-red-600',
        green: 'bg-green-100 text-green-600',
        blue: 'bg-blue-100 text-blue-600',
    };

    return (
        <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between">
            {status && statusClasses[status] && (
                <div
                    className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded-full ${statusClasses[status]}`}
                >
                    {statusName}
                </div>
            )}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{desc}</p>
            {link && (
                <div className="mt-6">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        {visitTranslation} {name}
                    </a>
                </div>
            )}
        </div>
    );
};