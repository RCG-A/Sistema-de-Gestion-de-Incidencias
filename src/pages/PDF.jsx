import React,  { useState, useEffect }  from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import IncidenciaGrupo from '../components/container/Incidencia-grupo';
import { GetAllIncidencia } from '../../src/services/AxionIncidencia';
import { GetDetailsUser } from '../../src/services/AxiosUser';
import { CircularProgressBar } from "react-percentage-bar";
import { GetAreaId } from '../services/AxiosArea';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4'
       
    }, 
    view:{
        display: "flex",
        alignItems: "center",
    }
});

const PDF = () => {
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
        <Document >
            <Page size="A4" style={styles.page}>
                <View style={styles.view}>
                    <Text style={{marginTop:"20px"}}>Reporte de incidencia</Text>

                </View>
                <View>
                    <Text style={{marginTop:"25px"}}>  Usuarios con más incidencias: {User}</Text>
                    <Text style={{marginTop:"25px"}}>  Usuarios con menos incidencias: {UserMenor}</Text>
                    <Text style={{marginTop:"25px"}}>  Area con más incidencias: {AreaMayor}</Text>
                    <Text style={{marginTop:"25px"}}>  Area con menos incidencias: {AreaMenor}</Text>
                    <Text style={{marginTop:"25px"}}>  Incidencias Totales: {Incidencia.length}</Text>
                    <Text style={{marginTop:"25px"}}>  Incidencias Solucionadas: {IncidenciaSolucionadas.length}</Text>
                    <Text style={{marginTop:"25px"}}>  Incidencias Pendientes: {IncidenciaPendientes.length}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PDF;
