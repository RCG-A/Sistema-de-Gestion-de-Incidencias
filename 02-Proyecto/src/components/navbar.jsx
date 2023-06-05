import React from 'react';

const Navbar = () => {
    return (
        <header className='bg-gray-950 w-screen '>
        <nav className='flex lg:w-11/12 justify-between items-center h-16 lg:h-12'>
        <div className='ml-6 '><h1 className='text-cyan-50'>Hola</h1></div>
        <div className='hidden lg:flex'>
                <ul className='flex items-center gap-[4vw] text-cyan-50'>
                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>
                </ul>
                </div>
                <div> <button>Cerrar sesion</button></div>
        </nav>
        </header>
    );
}

export default Navbar;
