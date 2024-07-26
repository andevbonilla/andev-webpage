"use client"

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModalContact = ({ setopenModal, type, message }: { setopenModal: any, type: number, message: string }) => {
    return (

        <div className="flex items-center justify-centers w-full">
            <div className='bg-yellow-200 text-black rounded-lg p-10 sm:mx-[10%] lg:mx-[20%] xl:mx-[25%] w-full'>

                <div className="flex justify-between items-center">
                    {
                        (type === 0)
                            ? <h1 className="text-red-600 font-bold text-xl">Error</h1>
                            : <h1 className="text-green-600 font-bold text-xl">Success</h1>
                    }

                    <FontAwesomeIcon
                        icon={faXmark}
                        className="w-[1.6rem] h-[1.6rem] cursor-pointer"
                        onClick={() => setopenModal(false)}
                    />
                </div>

                <p className="my-6">
                    {message}
                </p>

            </div>
        </div>

    )
};
