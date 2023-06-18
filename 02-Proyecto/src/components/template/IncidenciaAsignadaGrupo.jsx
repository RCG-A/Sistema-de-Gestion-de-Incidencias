import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetAllIncidencia } from '../../services/AxionIncidencia';
import { GetDetailsUser } from '../../services/AxiosUser';
import {Link} from "react-router-dom"
const IncidenciaAsignadaGrupo = () => {

    const [Incidencia, setIncidencia] = useState([]);
    const [User, setUser] = useState([])
    useEffect(() => {
        GetIncidencia()
    }, []);    
    useEffect(() => {
        getUserById()
    }, []);

    const GetIncidencia = () => {
        GetAllIncidencia()
            .then((response) => {
                setIncidencia(response.data)
                console.log(Incidencia);
            })
    }

    const getUserById = (id)=>{
        GetDetailsUser(id)
        .then((response)=>{
            setUser(response.data.name)
            
            console.log(response.data.name);
            return response.data.name
        })
    }

    return (

        <>
            {Incidencia
            .filter(Incidencia => Incidencia.assignmentGroupId == localStorage.getItem("assignmentGroupId"))
            .map((Incidencia, index) =>
            (
                
                <tr key={index}>

                <th>
                    <span className="">
                        {Incidencia.numTK}


                    </span>
                </th>
                <td className="">
                    <span className="">
                    {Incidencia.requestingUserId}
                    </span>
                </td>
                <td className="">

                    <span className="">
                        {Incidencia.affectedUser.name}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.company}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.categories.name}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.subcategories1}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.subcategories2}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.assignmentGroup.name}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.assignedUserId}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.briefDescription}
                    </span>
                </td>
                <td className="">
                    <span className="">
                        {Incidencia.description}
                    </span>
                </td>
                <td className="">
                    <span className="">
                       <Link to={`/incidents/${Incidencia.id}`} className='bg-yellow-400 p-2 hover:bg-yellow-500 text-black rounded-lg hover:text-black hover:text-lg'>Actualizar</Link>
                    </span>
                </td>
            </tr>)
            )}
        </>
    );
}

export default IncidenciaAsignadaGrupo;
