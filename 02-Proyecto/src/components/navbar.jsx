import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {

    const LogOut = ()=>{
        localStorage.removeItem("TOKEN")
        setInterval(window.location.reload(), 500  );
        }
    return (
        <header className='bg-gray-950 w-full  '>
        <nav className='flex lg:w-full justify-between items-center h-16 lg:h-14 '>
        <div className='ml-6 '><img src='https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-workplaces-for-millennials-in-peru/2021/scotiabank/logo.png' className='w-44'></img></div>
        <div className='hidden lg:flex'>
                </div>
                <div> <button onClick={()=>LogOut()} className='mr-3'>Cerrar sesion</button></div>
        </nav>
        </header>
    );
}

export default Navbar;
