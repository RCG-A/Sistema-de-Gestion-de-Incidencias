import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { GetArea } from '../../services/AxiosArea';
import { GetAllCategories, GetAllSubCategories1, GetAllSubCategories2 } from '../../services/AxiosCategories';
import { GetUser } from '../../services/AxiosUser';
import emailjs from '@emailjs/browser';

const Incidencia = () => {

    useEffect(() => {
        GetAllUsers()
    }, []);

    useEffect(() => {
        GetAllArea()
    }, []);

    useEffect(() => {
        GetCategories()
    }, []);

    useEffect(() => {
        GetSubCategories1()
    }, []);

    useEffect(() => {
        GetSubCategories2()
    }, []);

    /// DATOS PARA LA CREACION DE INCIDENCIA
    const [numTK, setnumTK] = useState("")
    const [company, setcompany] = useState("")
    const [briefDescription, setbriefDescription] = useState("")
    const [description, setdescription] = useState("")
    const [historic, sethistoric] = useState("")

    //useRef
    const userID = useRef(null)
    const affectedUserId = useRef(null)
    const categoriesId = useRef(null)
    const subcategories1ID = useRef(null)
    const subcategories2ID = useRef(null)
    const assignmentGroupId = useRef(null)
    const assignedUserId = useRef(null)

    const createIncidencia = async (e) => {
        e.preventDefault()
        let body = {
            numTK: numTK,
            requestingUserId: userID.current.value,
            affectedUserId: affectedUserId.current.value,
            company: company,
            categoriesId: categoriesId.current.value,
            subcategories1: subcategories1ID.current.value,
            subcategories2: subcategories2ID.current.value,
            assignmentGroupId: assignmentGroupId.current.value,
            assignedUserId: assignedUserId.current.value,
            briefDescription: briefDescription,
            description: description,
            historic: "historic"
        }
        await axios.post("http://localhost:4000/incidents/", body)
        alert("Incidencia creada")
    }

    /// OBTENCION DE DATOS
    const [users, setusers] = useState([])
    const [area, setarea] = useState([])
    const [categoria, setcategoria] = useState([])
    const [subcategories1, setsubcategories1] = useState([])
    const [subcategories2, setsubcategories2] = useState([])

    const GetAllUsers = () => {
        GetUser()
            .then((response) => {
                setusers(response.data)
                console.log(users);
            })
            .catch((error) => {
                alert("ocurrio un error en users")
                console.log(error);
            })
    }
    const GetAllArea = () => {
        GetArea()
            .then((response) => {
                setarea(response.data)
                console.log(area);
            })
            .catch((error) => {
                alert("ocurrio un error en area")
                console.log(error);
            })
    }
    const GetCategories = () => {
        GetAllCategories()
            .then((response) => {
                setcategoria(response.data)
                console.log(categoria);
            })
            .catch((error) => {
                alert("ocurrio un error en categoria")
                console.log(error);
            })
    }

    const GetSubCategories1 = () => {
        GetAllSubCategories1()
            .then((response) => {
                setsubcategories1(response.data)
                console.log(subcategories1);
            })
            .catch((error) => {
                alert("ocurrio un error en subcate1")
                console.log(error);
            })
    }
    const GetSubCategories2 = () => {
        GetAllSubCategories2()
            .then((response) => {
                setsubcategories2(response.data)
                console.log(subcategories2);
            })
            .catch((error) => {
                alert("ocurrio un error en area")
                console.log(error);
            })
    }




    return (
        <div className='bg-gray-900  justify-center items-center p-5'>
            <h2 className='text-zinc-50 text-4xl justify-center mb-5'>Incidencia</h2>
            <form  onSubmit={createIncidencia}>
                <div className='flex'>
                    <div className='items-center mr-4'>
                        <label className='text-cyan-50 text-lg'>#TKT</label>
                        <input value={numTK} onChange={(e) => setnumTK(e.target.value)} placeholder='# de ticket' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent pl-2 text-cyan-50' />

                        
                        <label className='text-cyan-50 text-lg'>Usuario Afectado</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={affectedUserId}>
                            {users.map((users, i) => (
                                <option key={i} USER={() => GetUser(users.id)} value={users.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                {users.name} {users.role.name}  {users.email} 
                                </option>
                            ))}
                        </select>
                        <label className='text-cyan-50 text-lg'>Compañia</label>
                        <input value={company} onChange={(e) => setcompany(e.target.value)} placeholder='Compañia' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent pl-2 text-cyan-50' />

                        <label className='text-cyan-50 text-lg'>Categoria</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={categoriesId}>
                            {categoria.map((categoria, i) => (
                                <option key={i} USER={() => GetUser(categoria.id)} value={categoria.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                    {categoria.name}
                                </option>
                            ))}
                        </select>
                        <label className='text-cyan-50 text-lg'>Sub-Categoria 1</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={subcategories1ID}>
                            {subcategories1.map((subcategories1, i) => (
                                <option key={i} USER={() => GetUser(subcategories1.id)} value={subcategories1.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                    {subcategories1.name}
                                </option>
                            ))}
                        </select>
                        <label className='text-cyan-50 text-lg'>Sub-Categoria 2</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={subcategories2ID}>
                            {subcategories2.map((subcategories2, i) => (
                                <option key={i} USER={() => GetUser(subcategories2.id)} value={subcategories2.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                    {subcategories2.name}
                                </option>
                            ))}
                        </select>  </div>
                    <div className='items-center'>
                    <label className='text-cyan-50 text-lg'>Usuario Solicitante</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={userID} name='user_email'>
                            {users.map((users, i) => (
                                <option key={i} USER={() => GetUser(users.id)} value={users.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                {users.name} {users.role.name}  {users.email} 
                                </option>
                            ))}
                        </select>
                        <label className='text-cyan-50 text-lg'>Grupo/Area asignado</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={assignmentGroupId}>
                            {area.map((area, i) => (
                                <option key={i} USER={() => GetUser(area.id)} value={area.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                    {area.name}
                                </option>
                            ))}
                        </select>
                        <label className='text-cyan-50 text-lg'>Usuario asignado</label>
                        <select className='w-11/12 border-2 rounded-lg p-1 m-2 bg-transparent text-cyan-50' ref={assignedUserId} name='user_name'>
                            {users.map((users, i) => (
                                <option key={i} USER={() => GetUser(users.id)} value={users.id} className='w-full border-2 rounded-lg p-1.5 m-2 bg-transparent text-black' >
                                    {users.name} {users.role.name}  {users.email} 
                                </option>
                            ))}
                        </select>
                        <label className='text-cyan-50 text-lg'>Breve descripcion</label>
                        <input value={briefDescription} onChange={(e)=> setbriefDescription(e.target.value)} placeholder='Brebe descripcion' type='text' className='w-11/12 border-2 rounded-lg  m-2 bg-transparent pl-2 text-cyan-50' />
                      
                        <label className='text-cyan-50 text-lg'>Descripcion</label>
                        <textarea name='message' value={description} onChange={(e)=> setdescription(e.target.value)} placeholder='Descripcion' type='text' className='w-11/12 border-2 rounded-lg m-2 bg-transparent pl-2 text-cyan-50' ></textarea>
                    </div>
                </div>
                <button type='submit' className='bg-white mt-2 hover:bg-stone-50' onClick={()=>sendEmail()}>Crear Incidencia</button>
            </form>

        </div>
    );
}

export default Incidencia;
