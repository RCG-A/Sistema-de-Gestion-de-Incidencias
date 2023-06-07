import React from 'react';

const Sidebar = () => {
    return (
        <div className='hidden bg-gray-950 w-32 lg:flex justify-center items-center rounded-e-md'>
                    <div className='lg:h-[90.74vh]'>
        <div className='hidden lg:flex'>
                <ul className=' items-center gap-[4vw] text-cyan-50'>
                    <li className='mb-4 mt-8 px-12 hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Inicio</li>
                    <li className='mb-4 px-12 hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Inicio</li>
                    <li className='mb-4 px-12 hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Inicio</li>
                    <li className='mb-4 px-12 hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Inicio</li>
                    <li className='mb-4 px-12 hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Inicio</li>
                </ul>
                </div>
                </div>
        </div>
    );
}

export default Sidebar;
