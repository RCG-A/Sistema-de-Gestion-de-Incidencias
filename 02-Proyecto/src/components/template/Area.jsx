import React, {useState} from 'react';
import axios from 'axios';
const Area = () => {

    const [name, setname] = useState("")

    const [description, setdescription] = useState("")

     const createArea = async (e) => {
        e.preventDefault()
        let body = {
            name: name,
            description: description
        }
       await axios.post(`http://localhost:4000/assignment-group/`, body)
       .then((res)=>{
        if(res.data.response){

            alert(res.data.response)
        }else{
            alert("Area Creada Exitosamente")
        }
            
        }
         
       )
       .catch((error)=> {alert(error)})
    
    }


    return (
<div className='bg-gray-900 w-2/3  justify-center items-center p-10 rounded-2xl mt-24'>
        <h1 className='text-zinc-50 text-5xl justify-center '>Crear nueva Area</h1>
        <form onSubmit={createArea}>
        <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Nombre de Area</label>
                <input value={name} onChange={(e)=> setname(e.target.value)}  placeholder='Cargo' type='text' className='w-1/2 border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Descripcion</label>
                <input value={description} onChange={(e)=> setdescription(e.target.value)} placeholder='Descripcion' type='text' className='w-1/2 border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Area</button>
           
        </form>

    </div>
    );
}

export default Area;
