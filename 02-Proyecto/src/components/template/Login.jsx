import React from 'react';

const Login = () => {
    return (

        <div className='bg-gray-900 w-2/3 h-2/3 justify-center items-center p-10 rounded-2xl'>
            <h1 className='text-zinc-50 text-5xl justify-center '>Bienvenido</h1>
            <form >
                <div className='items-center'>
                    <label className='text-cyan-50 text-lg'>Usuario</label>
                    <input placeholder='Usuario' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
                </div>
                <div className='items-center'>
                    <label className='text-cyan-50 text-lg'>Contraseña</label>
                    <input placeholder='Contraseña' type='password' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
                </div>
                <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Inciar sesion</button>
            </form>

        </div>
    );
}

export default Login;
