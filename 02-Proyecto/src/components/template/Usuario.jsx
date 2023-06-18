import React, {useEffect, useState, useRef} from 'react';
import { GetRole } from '../../services/AxiosRol';
import { GetArea } from '../../services/AxiosArea';
import axios from 'axios';
const Usuario = () => {
    const idRol = useRef(null)
    const idArea = useRef(null)
    const [DNI, setDNI] = useState("")
    const [name, setname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [roleId, setroleId] = useState(null)
    const [assignmentGroupId, setassignmentGroupId] = useState([])
    const [Roles, setRoles] = useState([])
    useEffect(() => {
      
        getAllRoles()
    }, [])
    useEffect(() => {
      
        GetAllArea()
    }, [])
    
     const createUser= async (e) => {
        e.preventDefault()
        let body = {
            DNI: DNI,
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            roleId: idRol.current.value,
            assignmentGroupId: idArea.current.value
        }
       await axios.post(`http://localhost:4000/users/`, body)
       .then((res)=>{
        if(res.data.response){

            alert(res.data.response)
        }else{
            alert("Usuario Creado Exitosamente")
        }
            
        }
         
       )
       .catch((error)=> {alert('Usuario no creado ${error}')})
      
    }

    const getAllRoles = () => {
        GetRole()
            .then((response) => {
                setRoles(response.data)
                console.log(Roles);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }

    const GetAllArea = () => {
        GetArea()
            .then((response) => {
                setassignmentGroupId(response.data)
                console.log(assignmentGroupId);
            })
            .catch((error) => {
                alert("ocurrio un error en area")
                console.log(error);
            })
    }
    

    return (
        <div className='bg-gray-900 w-9/12 h-10/12 justify-center items-center p-10 rounded-2xl mt-4'>
        <h1 className='text-zinc-50 text-5xl justify-center '>Crear nuevo Usuario</h1>
        <form onSubmit={createUser}>
        <div className='flex justify-center gap-5'>
        <div>
        <div className='items-center'>
                <label className='text-cyan-50 text-lg'>DNI </label>
                <input value={DNI} onChange={(e)=>setDNI(e.target.value)} placeholder='DNI' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Nombre</label>
                <input value={name} onChange={(e)=>setname(e.target.value)} placeholder='Nombre' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Cargo</label>
                <select className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' ref={idRol}>
                {Roles.map((Roles, i)=>(
                    <option key={i} ROL= {()=>getAllRoles(Roles.id)} value={Roles.id}  className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' > 
                    {Roles.name}
                    </option>
                ))}
                </select>
            </div>
            </div>
            <div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Email</label>
                <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Apellido</label>
                <input value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder='Apellido' type='text' className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <div className='items-center'>
                <label className='text-cyan-50 text-lg'>Area</label>
                <select className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' ref={idArea}>
                {assignmentGroupId.map((assignmentGroupId, i)=>(
                    <option key={i} Area= {()=>GetAllArea(assignmentGroupId.id)} value={assignmentGroupId.id}  className=' border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' > 
                    {assignmentGroupId.name}
                    </option>
                ))}
                </select> </div>

            </div>
            
            </div>
            <div className='items-center flex flex-col'>
                <label className='text-cyan-50 text-lg'>Contraseña</label>
                <input  value={password} onChange={(e)=>setpassword(e.target.value)}placeholder='Contraseña' type='password' className='w-1/2 border-2 rounded-lg p-1.5 m-2 bg-transparent text-cyan-50' />
            </div>
            <button type='submit' className='bg-white mt-2 hover:bg-stone-50'>Crear Usuario</button>
           
        </form>

    </div>
    );
}

export default Usuario;
