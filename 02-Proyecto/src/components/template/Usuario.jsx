import React from 'react';

const Usuario = () => {
    return (
        <div className='bg-gray-900 w-9/12 h-10/12 justify-center items-center p-10 rounded-2xl mt-4'>
        <h1 className='text-zinc-50 text-5xl justify-center '>Crear nuevo Usuario</h1>
        <form >
        <div className='flex justify-center gap-5'>
        <div>
        <div className='items-center'>
                <label className='text-cyan-50 text-lg'>DNI </label>
                <input placeholder='DNI' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Nombre</label>
                <input placeholder='Nombre' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Cargo</label>
                <input placeholder='Cargo' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            </div>
            <div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Email</label>
                <input placeholder='Email' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Apellido</label>
                <input placeholder='Apellido' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Area</label>
                <input placeholder='Area' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>

            </div>
            
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Contraseña</label>
                <input placeholder='Contraseña' type='password' className='w-1/2 border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Usuario</button>
           
        </form>

    </div>
    );
}

export default Usuario;
