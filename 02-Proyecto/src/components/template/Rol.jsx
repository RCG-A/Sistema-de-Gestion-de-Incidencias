import React from 'react';

const Rol = () => {
    return (
        <div className='bg-gray-900 w-2/3  justify-center items-center p-10 rounded-2xl mt-24'>
        <h1 className='text-zinc-50 text-5xl justify-center '>Crear nuevo Rol</h1>
        <form >
        <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Nombre de Cargo</label>
                <input placeholder='Cargo' type='password' className='w-1/2 border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Descripcion</label>
                <input placeholder='Descripcion' type='password' className='w-1/2 border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Cargo</button>
           
        </form>

    </div>
    );
}

export default Rol;
