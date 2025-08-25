import React, { useState, useEffect } from 'react';
import { GetAllIncidencia } from '../../src/services/AxionIncidencia';
import { GetDetailsUser } from '../../src/services/AxiosUser';
import { CircularProgressBar } from "react-percentage-bar";
import { GetAreaId } from '../services/AxiosArea';
import { Link } from 'react-router-dom';

const Home = () => {

    const [Incidencia, setIncidencia] = useState([]);
    const [IncidenciaSolucionadas, setIncidenciaSolucionadas] = useState([]);
    const [IncidenciaPendientes, setIncidenciaPendientes] = useState([]);
    const [AreaMayor, setAreaMayor] = useState([]);
    const [AreaMenor, setAreaMenor] = useState([]);
    const [UserMenor, setUserMenor] = useState([])
    const [User, setUser] = useState([])
    useEffect(() => {
        GetIncidencia()
    }, []);
    useEffect(() => {
        obtenerAreaMasAsignada()
    }, [])
    useEffect(() => {
        obtenerAreaMenosAsignada()
    }, [])

    useEffect(() => {
        GetArea(areaMasAsignada.valueOf())
    })  
    useEffect(() => {
        GetAreamenor(areaMenosAsignada.valueOf())
    })
    useEffect(() => {
        obtenerUsuarioMasAfectado()
    })

    useEffect(() => {
        getUserById(UsuarioMasAfectado.valueOf())
    })
    useEffect(() => {
        obtenerUsuarioMenosAfectado()
    });
    useEffect(() => {
        getUsermenorById(UsuarioMenosAfectado.valueOf())
    })

    const GetIncidencia = () => {
        GetAllIncidencia()
            .then((response) => {
                setIncidencia(response.data)
                let Pendientes = response.data
                setIncidenciaPendientes(Pendientes.filter((Incidencia) => {
                    if (Incidencia.historic == false) {
                        return true
                    }
                    return false
                }))
                let Solucionadas = response.data
                setIncidenciaSolucionadas(Solucionadas.filter((Incidencia) => {
                    if (Incidencia.historic == true) {
                        return true
                    }
                    return false
                }))


            })
    }

    const GetArea = (id) => {
        GetAreaId(id)
            .then((response) => {
                setAreaMayor(response.data.name)
                console.log(AreaMayor);
            })
    }
    
    const GetAreamenor = (id) => {
        GetAreaId(id)
            .then((response) => {
                setAreaMenor(response.data.name)
                console.log(AreaMenor);
            })
    }
    
    const contarAreasAsignadas = (Incidencia) => {
        const conteoAreas = Incidencia.reduce((contador, Incidencia) => {
            const { assignmentGroupId } = Incidencia;
            contador[assignmentGroupId] = (contador[assignmentGroupId] || 0) + 1;
            return contador;
        }, {});

        return conteoAreas;
    };

    const contarUsuariosAfectador = (Incidencia) => {
        const conteoUsuarios = Incidencia.reduce((contador, Incidencia) => {
            const { affectedUserId } = Incidencia;
            contador[affectedUserId] = (contador[affectedUserId] || 0) + 1;
            return contador;
        }, {});

        return conteoUsuarios;
    };
    const obtenerUsuarioMasAfectado = (conteoUsuarios) => {
        let maximo = 0;
        let UsuarioMasAfectado = null;

        for (const affectedUserId in conteoUsuarios) {
            if (conteoUsuarios[affectedUserId] > maximo) {
                maximo = conteoUsuarios[affectedUserId];
                UsuarioMasAfectado = affectedUserId;
            }
        }
        console.log("el usuario es+ " + UsuarioMasAfectado);

        return (parseInt(UsuarioMasAfectado));
    };

    const obtenerUsuarioMenosAfectado = (conteoUsuarios) => {
        let maximo = 99999;
        let UsuarioMenosAfectado = null;

        for (const affectedUserId in conteoUsuarios) {
            if (conteoUsuarios[affectedUserId] <= maximo) {
                maximo = conteoUsuarios[affectedUserId];
                UsuarioMenosAfectado = affectedUserId;
            }
        }
        console.log("el usuario es- " + UsuarioMenosAfectado);

        return (parseInt(UsuarioMenosAfectado));
    };
    const obtenerAreaMasAsignada = (conteoAreas) => {
        let maximo = 0;
        let areaMasAsignada = null;

        for (const assignmentGroupId in conteoAreas) {
            if (conteoAreas[assignmentGroupId] > maximo) {
                maximo = conteoAreas[assignmentGroupId];
                areaMasAsignada = assignmentGroupId;
            }
        }
        console.log("el area es+ " + areaMasAsignada);

        return (parseInt(areaMasAsignada));
    };

    const obtenerAreaMenosAsignada = (conteoAreas) => {
        let maximo = 99999999;
        let areaMenosAsignada = null;

        for (const assignmentGroupId in conteoAreas) {
            if (conteoAreas[assignmentGroupId] <= maximo) {
                maximo = conteoAreas[assignmentGroupId];
                areaMenosAsignada = assignmentGroupId;
            }
        }
        console.log("el area es- " + areaMenosAsignada);

        return (parseInt(areaMenosAsignada));
    };

    const conteoAreas = contarAreasAsignadas(Incidencia);
    const areaMasAsignada = obtenerAreaMasAsignada(conteoAreas);
    const areaMenosAsignada = obtenerAreaMenosAsignada(conteoAreas);

    
    const conteoUsuarios = contarUsuariosAfectador(Incidencia);
    const UsuarioMasAfectado = obtenerUsuarioMasAfectado(conteoUsuarios);
    
    const UsuarioMenosAfectado = obtenerUsuarioMenosAfectado(conteoUsuarios);

    const getUserById = (id) => {
        GetDetailsUser(id)
            .then((response) => {
                setUser(response.data.name)

                console.log(response.data.name);
                return response.data.name
            })
    }
    const getUsermenorById = (id) => {
        GetDetailsUser(id)
            .then((response) => {
                setUserMenor(response.data.name)

                console.log(response.data.name);
                return response.data.name
            })
    }
    return (
        <div className='bg-slate-900 w-screen'>
            <div className='p-10 text-cyan-50 '>
                <div className='flex gap-10 -mt-1 max-w-full justify-center'>
                    <div className=" bg-red-700 w-1/5 h-full rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={Incidencia.length} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "40px", color: "white", fontWeight: "bold" }} />
                        </div>
                        <p className='flex justify-center mt-3'>Incidencias Totales</p>
                    </div>
                    <div className=" bg-red-700 w-1/5 h-full rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={IncidenciaPendientes.length} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "40px", color: "white", fontWeight: "bold" }} />
                        </div>
                        <p className='d-flex justify-content-center mt-3'>Incidencias Pendientes</p>
                    </div>
                    <div className=" bg-red-700 w-1/5 h-full rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={IncidenciaSolucionadas.length} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "40px", color: "white", fontWeight: "bold" }} />
                        </div>
                        <p className='d-flex justify-content-center mt-3'>Incidencias Solucionadas</p>
                    </div>
                    <div className=" bg-red-700 w-1/5 h-full rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={AreaMayor} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "21px", color: "white", fontWeight: "bold", "text-transform": "uppercase" }} />
                        </div>
                        <p className='d-flex justify-content-center mt-3'>Area con mayor Incidencia</p>
                    </div>
                </div>
                <div className='flex gap-10 mt-8 max-w-full justify-center'>
                    <div className=" bg-red-700 w-1/5 h-56 rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={AreaMenor} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "75%", color: "white", fontWeight: "bold", "text-transform": "uppercase" }} />
                        </div>
                        <p className='d-flex justify-content-center mt-3'>Area con menor incidencia</p>
                    </div>   
                      <div className=" bg-red-700 w-1/5 h-56 rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={User} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "21px", color: "white", fontWeight: "bold", "text-transform": "uppercase" }} />
                        </div>
                        <p className='d-flex justify-content-center mt-3'>Usuario con mayor incidencia</p>
                    </div>  
                       <div className=" bg-red-700 w-1/5 h-56 rounded-md">
                        <div className='flex justify-center mt-1.5'>
                            <CircularProgressBar text={UserMenor} showPercentage={false} percentage={100} percentageAnimation={true} textStyle={{ fontSize: "21px", color: "white", fontWeight: "bold", "text-transform": "uppercase" }} />
                        </div>
                        <p className='d-flex justify-content-center mt-3'>Usuario Con menor incidencia</p>
                    </div> 
                        <div className=" bg-red-700 w-1/5 h-56 rounded-md">
                        <div className='flex justify-center mt-1.5'>
                        
                            <Link className='flex justify-center items-center -m-1.5  w-full h-48 rounded-md bg-red-700 hover:bg-red-800 hover:border-red-500 hover:text-gray-50'  to={"/pdfs-1"}> <p className=' text-2xl'>Generar reporte</p></Link>
                           </div>
                        <p className='d-flex justify-content-center mt-3'>Reporte de incidencias</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
