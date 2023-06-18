import React,{ useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { GetAllSubCategories1 } from '../../services/AxiosCategories';

const SubCategoria2 = () => {
    useEffect(() => {
        GetCategories()
    }, []);
    const idsubcategories1 = useRef(null)
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [subcategories1, setsubcategories1] = useState([])
    const createCategories = async (e)=>{
        e.preventDefault()
        let body = {
            subcategories1Id: idsubcategories1.current.value,
            name: name,
            description: description
        }
        await axios.post("http://localhost:4000/subcategories2/", body)
        .then((res)=>{
            if(res.data.response){
    
                alert(res.data.response)
            }else{
                alert("Sub-Categoria 2 Creada Exitosamente")
            }
                
            }
             
           )
           .catch((error)=> {alert(error)})
        
    }
    
    const GetCategories = () => {
        GetAllSubCategories1()
            .then((response) => {
                setsubcategories1(response.data)
                console.log(subcategories1);
            })
            .catch((error) => {
                alert("ocurrio un error en area")
                console.log(error);
            })
    } 
    return (
        <div className='bg-gray-900 w-2/3  justify-center items-center p-10 rounded-2xl '>
        <h1 className='text-zinc-50 text-4xl justify-center '>Sub Categoria 2</h1>
        <form onSubmit={createCategories}>
        <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Nombre de sub categoria 2</label>
                <input value={name} onChange={(e)=>setname( e.target.value)} placeholder='Categoria' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Descripcion</label>
                <input value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Descripcion' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'> Sub Categoria</label>
                <select className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' ref={idsubcategories1}>
                {subcategories1.map((subcategories1, i)=>(
                    <option key={i} ROL= {()=>GetCategories(subcategories1.id)} value={subcategories1.id}  className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' > 
                    {subcategories1.name}
                    </option>
                ))}
                </select>  </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Sub Categoria</button>
           
        </form>

    </div>
        );
}

export default SubCategoria2;
