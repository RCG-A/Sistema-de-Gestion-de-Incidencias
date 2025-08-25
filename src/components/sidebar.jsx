import React from 'react';
import {Link} from "react-router-dom"
const Sidebar = () => {

   const id= parseInt( localStorage.getItem("RoleId"))
   function contactosNivel(){
    switch (id) {
        case 1: 
                return(  <div className='hidden bg-black w-80 lg:flex justify-center'>

                <div className='lg:h-[90.74vh] pr-4'>
                <ul className=' items-center  text-cyan-50 mt-8 '>
                
                <li  className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg' >
                <Link className='hover:text-slate-500'  to="/home">Inicio</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-incidencia">Crear nueva-Incidencia</Link> </li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi"> Incidencia asignada a mi</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi-grupo"> Incidencia asignada a mi grupo</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-usuario"> Crear Usuario</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-rol"> Crear ROL</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-area"> Crear AREA</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-categoria"> Crear Categoria</Link></li>
            </ul>
   </div>
    </div>)
            break;
        case 2:
            return(
                <div className='hidden bg-black w-80 lg:flex justify-center'>

                <div className='lg:h-[90.74vh] pr-4'>
                <ul className=' items-center  text-cyan-50 mt-8'>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-incidencia">Crear nueva-Incidencia</Link> </li>
              
            </ul>
   </div>
    </div>
            )
            break;
        case 3:
            return(
                <div className='hidden bg-black w-80 lg:flex justify-center'>

                <div className='lg:h-[90.74vh] pr-4'>
                <ul className=' items-center  text-cyan-50 mt-8'>
                
                <li  className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg' >
                <Link className='hover:text-slate-500'  to="/home">Inicio</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-incidencia">Crear nueva-Incidencia</Link> </li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi-grupo"> Incidencia asignada a mi grupo</Link></li>
               
            </ul>
   </div>
    </div>
            )
             break;  
             case 4:
                return(  <div className='hidden bg-black w-80 lg:flex justify-center'>

                <div className='lg:h-[90.74vh] pr-4'>
                <ul className=' items-center  text-cyan-50 mt-8'>
                
                <li  className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg' >
                <Link className='hover:text-slate-500'  to="/home">Inicio</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="crear-incidencia">Crear nueva-Incidencia</Link> </li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi"> Incidencia asignada a mi</Link></li>
                
                <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
                <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi-grupo"> Incidencia asignada a mi grupo</Link></li>
                
            </ul>
   </div>
    </div>)
                 break;               
        default: 
        return(<div className='hidden bg-black w-80 lg:flex justify-center'>

        <div className='lg:h-[90.74vh] pr-4'>
        <ul className=' items-center  text-cyan-50 mt-8'>
        
        <li  className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg' >
        <Link className='hover:text-slate-500'  to="/home">Inicio</Link></li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="crear-incidencia">Crear nueva-Incidencia</Link> </li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi"> Incidencia asignada a mi</Link></li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="incidencia-asignada-a-mi-grupo"> Incidencia asignada a mi grupo</Link></li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="crear-usuario"> Crear Usuario</Link></li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="crear-rol"> Crear ROL</Link></li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="crear-area"> Crear AREA</Link></li>
        
        <li className='mb-4 px-5 w-full hover:bg-white rounded-xl text-base hover:text-black hover:text-lg'>
        <Link  className='hover:text-slate-500' to="crear-categoria"> Crear Categoria</Link></li>
    </ul>
</div>
</div>)
            break;
    }
}

    return (
        <>
        {contactosNivel()}
        </>
    );
}

export default Sidebar;
