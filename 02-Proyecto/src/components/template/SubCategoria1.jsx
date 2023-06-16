import React,{ useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { GetAllCategories } from '../../services/AxiosCategories';
const SubCategoria = () => {
    const idcategoria = useRef(null)
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [categoria, setcategoria] = useState([])
    
useEffect(() => {
    GetCategories()
}, []);
    const createCategories = async (e)=>{
        e.preventDefault()
        let body = {
            categoriesId: idcategoria.current.value,
            name: name,
            description: description
        }
        await axios.post("http://localhost:4000/subcategories1", body)
    }
    
    const GetCategories = () => {
        GetAllCategories()
            .then((response) => {
                setcategoria(response.data)
                console.log(categoria);
            })
            .catch((error) => {
                alert("ocurrio un error en area")
                console.log(error);
            })
    } 

    return (
        <div className='bg-gray-900 w-2/3  justify-center items-center p-10 rounded-2xl '>
        <h1 className='text-zinc-50 text-4xl justify-center w-full '>Sub Categoria 1</h1>
        <form onSubmit={createCategories}>
        <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Nombre de sub categoria 1</label>
                <input value={name} onChange={(e)=>setname( e.target.value)} placeholder='Categoria' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Descripcion</label>
                <input value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Descripcion' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'> Categoria</label>
                <select className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' ref={idcategoria}>
                {categoria.map((categoria, i)=>(
                    <option key={i} ROL= {()=>GetCategories(categoria.id)} value={categoria.id}  className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' > 
                    {categoria.name}
                    </option>
                ))}
                </select>  </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Sub Categoria</button>
           
        </form>

    </div>
        );
}

export default SubCategoria;
