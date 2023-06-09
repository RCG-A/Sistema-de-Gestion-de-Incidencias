import React from 'react';

const Sidebar = () => {
    return (
        <div className='hidden bg-black w-80 lg:flex justify-centerrounded-e-md'>

                    <div className='lg:h-[90.74vh]'>
        <div className='hidden lg:flex '>
                <ul className=' items-center  text-cyan-50'>
                    <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg mt-8 '>Inicio</li>
                    <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Crear nueva-Incidencia</li>
                    <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Incidencia asignada a mi</li>
                    <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>Incidencia asignada a mi grupo</li>
                </ul>
                </div>
                </div>
        </div>
    );
}

export default Sidebar;
