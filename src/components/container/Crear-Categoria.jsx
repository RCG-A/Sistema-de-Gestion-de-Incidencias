import React from 'react';
import Categoria from '../template/Categoria';
import SubCategoria from '../template/SubCategoria1';
import SubCategoria2 from '../template/SubCategoria2';

const CrearCategoria = () => {
    return (
        
                   <div className='w-screen bg-red-500 justify-center p-3'>
        <div className='flex items-center justify-center gap-8'>
        <Categoria></Categoria>
        <SubCategoria></SubCategoria>
        <SubCategoria2></SubCategoria2>
        
        </div>  
            </div> 
        
    );
}

export default CrearCategoria;
