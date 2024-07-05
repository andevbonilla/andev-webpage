"use client"

export const ModalContact = ({ setopenModal }: { setopenModal: any }) => {
    return (
        <div className='fixed z-[999] left-0 top-0 flex justify-center items-center w-full h-screen'>
            <div onClick={() => setopenModal(false)} className='cursor-pointer z-[998] absolute bg-black bg-opacity-60 w-full h-full left-0 top-0'></div>
            <div className='z-[999] bg-white text-black rounded-lg flex p-10 flex-col w-[90%] md:w-[50%] lg:w-[40%] h-[90%] overflow-y-auto'>

                <h1 className="text-red-600 font-bold text-xl">Error</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum, eveniet impedit sint, earum sapiente unde vero, nam velit non exercitationem assumenda. A est delectus voluptatibus deserunt asperiores quas omnis!</p>

                <button
                    type="button"
                    className="bg-red-600 text-white font-bold"
                    onClick={() => setopenModal(false)}
                >
                    close
                </button>

            </div>

        </div>
    )
}
