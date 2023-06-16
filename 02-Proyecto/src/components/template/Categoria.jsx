import React,{ useState } from 'react';
import axios from 'axios';
const Categoria = () => {

    const [name, setname] = useState("")

    const [description, setdescription] = useState("")

    const createCategories = async (e)=>{
        e.preventDefault()
        let body = {
            name: name,
            description: description
        }
        await axios.post("http://localhost:4000/categories", body)
    }
    

    return (
        <div className='bg-gray-900 w-2/3 justify-center items-center p-10 rounded-2xl'>
        <h1 className='text-zinc-50 text-4xl justify-center mb-5'>Crear categoria</h1>
        <form onSubmit={createCategories}>
        <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Nombre de categoria</label>
                <input value={name} onChange={(e)=>setname( e.target.value)} placeholder='Categoria' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Descripcion</label>
                <input value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Descripcion' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Categoria</button>
           
        </form>

    </div>
        );
}

export default Categoria;
