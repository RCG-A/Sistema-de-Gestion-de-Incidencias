import React from 'react';
import IncidenciaAsignada from '../template/IncidenciaAsignada';

const IncidenciaGrupo = () => {
    return (
        <div className='flex max-h-full bg-gray-900'>
        <div className='w-full  table-container'>
                <table className='text-blue-50'>

                    <thead>
                        <tr>
                            <th> #TKT</th>
                            <th>Usuario Solicitante</th>
                            <th>Usuario Afectado</th>
                            <th>AREA</th>
                            <th>Categoria</th>
                            <th>Sub-Categoria 1</th>
                            <th>Sub-Categoria 2</th>
                            <th>Sub-Categoria 3</th>
                            <th>Sub-Categoria 4</th>
                            <th>Estado</th>
                            <th>Area Asignada</th>
                            <th>Fecha</th>
                            <th>Brebe descripcion</th>
                            <th>Descripcion</th>

                        </tr>
                    </thead>

                    <tbody>
                        <IncidenciaAsignada></IncidenciaAsignada>
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default IncidenciaGrupo;
