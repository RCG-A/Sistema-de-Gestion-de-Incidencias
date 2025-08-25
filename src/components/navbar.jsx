import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, redirect} from "react-router-dom"
import { GetDetailsUser } from '../services/AxiosUser';
const Navbar = () => {
    const [Name, setName] = useState("")
    const [lastname, setlastname] = useState("");
    const id = localStorage.getItem("Id")
    const idINT = parseInt(id) 

    useEffect(() => {
        GetUserId(idINT)
    }, []);   
     const GetUserId =  (id)=>{

        GetDetailsUser(id)
        .then((res)=>{
            let data = res.data
            let Nombre = data.name
            let lastname = data.lastname
            setName(Nombre)
            setlastname(lastname)
        })
    }

    const LogOut = ()=>{
        localStorage.clear()
        
        setInterval(window.location.reload(), 500  );
        }
    return (
        <header className='bg-gray-950 w-full  '>
        <nav className='flex lg:w-full justify-between items-center h-16 lg:h-14 '>
        <div className='ml-6 '><img src='https://enviotodo.pe/wp-content/uploads/2018/07/logo-scotiabank-peru.png' className='w-44'></img></div>
        <div className='hidden lg:flex'>
            <h2 className='text-sky-100 text-2xl'>{Name} {lastname}</h2>
                </div>
                <div>  <button onClick={()=>LogOut()} className='mr-3'>Log Out</button></div>
        </nav>
        </header>
    );
}

export default Navbar;
