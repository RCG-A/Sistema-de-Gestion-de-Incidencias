import React from 'react';

const Incidencia = () => {
    return (
        <div className='bg-gray-900  justify-center items-center p-5'>
            <h2 className='text-zinc-50 text-4xl justify-center mb-5'>Incidencia</h2>
            <form >
                <div className='flex'>
                    <div className='items-center mr-4'>
                         <label className='text-cyan-50 text-lg'>#TKT</label>
                        <input placeholder='# de ticket' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Usuario Solicitante</label>
                        <input placeholder='Usuario Solicitante' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Usuario Afectado</label>
                        <input placeholder='Usuario Afectado' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>AREA</label>
                        <input placeholder='AREA' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Categoria</label>
                        <input placeholder='Categoria' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Sub-Categoria 1</label>
                        <input placeholder='Sub-Categoria 1' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Sub-Categoria 2</label>
                        <input placeholder='Sub-Categoria 2' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Sub-Categoria 3</label>
                        <input placeholder='Sub-Categoria 3' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />

                    </div>
                    <div className='items-center'>
                        <label className='text-cyan-50 text-lg'>Sub-Categoria 4</label>
                        <input placeholder='Sub-Categoria 4' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Estado TKT</label>
                        <input placeholder='Estado' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Grupo/Area asignado</label>
                        <input placeholder='Grupo/Area asignado' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Usuario asignado</label>
                        <input placeholder='Usuario asignado' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Fecha</label>
                        <input placeholder='Fecha' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Breve descripcion</label>
                        <input placeholder='Brebe descripcion' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent text-cyan-50' />
                        <label className='text-cyan-50 text-lg'>Descripcion</label>
                        <textarea placeholder='Descripcion' type='text' className='w-11/12 border-2 rounded-lg m-2 bg-transparent text-cyan-50' ></textarea>
                    </div>
                </div>
                <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Historico</label>
                <input placeholder=''></input>
                </div>
                <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Inciar sesion</button>
            </form>

        </div>
    );
}

export default Incidencia;
