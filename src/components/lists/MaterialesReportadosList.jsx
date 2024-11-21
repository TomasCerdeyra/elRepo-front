import React, { useState, useEffect } from 'react';
import { deleteMaterial, deleteReports, getMaterialesReportados } from '../../services/materialesServices';
import { seleccionarLogo } from "../../utils/functions";
import { showSuccessAlert, showConfirmationAlert } from '../../utils/alerts';
import { Link } from 'react-router-dom';

const MaterialesReportadosList = () => {
    const [materiales, setMateriales] = useState([]);

    useEffect(() => {
        const cargarMateriales = async () => {
            try {
                const data = await getMaterialesReportados();
                setMateriales(data);
            } catch (error) {
                console.log('Error al cargar los materiales denunciados');
            }
        };
        cargarMateriales();
    }, []);

    const handleDeleteReport = async (materialId) => {

        const respuesta = await showConfirmationAlert('¿Seguro que este material no tiene contenido inapropiado?')

        if (respuesta.isConfirmed) {
            try {
                const data = await deleteReports(materialId);
                showSuccessAlert(data, "success")
                // Actualizar la lista de materiales eliminando el material afectado
                setMateriales(materiales.filter((material) => material._id !== materialId));
            } catch (error) {
                console.error('Error al eliminar denuncia del material:', error);
            }
        }
    };

    const handleDeleteMaterial = async (materialId) => {

        const respuesta = await showConfirmationAlert('¿Eliminar material por contenido inapropiado o incorrecto?')

        if (respuesta.isConfirmed) {
            try {
                const data = await deleteMaterial(materialId);
                showSuccessAlert(data, "success")
                // Actualizar la lista de materiales eliminando el material afectado
                setMateriales(materiales.filter((material) => material._id !== materialId));
            } catch (error) {
                console.error('Error al eliminar denuncia del material:', error);
            }
        }
    };

    return (
        <div className="mx-5 lg:mx-20 xl:mx-20">
            {materiales.length === 0 ? (
                <p className="text-center text-lg font-medium text-gray-500 mt-10">
                    Actualmente no hay aportes denunciados.
                </p>
            ) : (
                <ul>
                    {materiales.map((material) => {
                        const { src, alt } = seleccionarLogo(material.tipo)
                        return (
                            <div
                                key={material._id}
                                className="hover:bg-[#EFF3F5] ring-4 ring-[#EFF3F5] hover:ring-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] m-2 flex flex-col items-center justify-between py-3 px-4"
                            >
                                <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between  w-full p-3 gap-3">
                                    <Link to={`/material/${material._id}`}  className="flex flex-col items-center justify-center sm:flex-row sm:justify-between  w-full p-3 gap-2">
                                        <img
                                            src={src}
                                            alt={alt}
                                            className="h-9 sm:h-9 md:h-[3rem] object-contain"
                                        />
                                        <p className="flex-1 font-semibold text-xl">{material.nombre}</p>
                                        <p className="flex-1 text-center text-lg font-medium">Año: {material.anio}</p>
                                    </Link>
                                    <div className='flex items-center justify-center gap-4'>
                                        <button onClick={() => handleDeleteReport(material._id)} className="rounded text-xm font-medium ring p-1 hover:ring-blue-600 hover:bg-blue-600 ring-blue-500 text-right bg-blue-500 text-white">
                                            Rechazar
                                        </button>
                                        <button onClick={() => handleDeleteMaterial(material._id)} className="rounded text-xm font-medium ring p-1 hover:ring-red-600 hover:bg-red-600 ring-red-500 text-right bg-red-500 text-white">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )

                    })}
                </ul>
            )}
        </div>
    );
};

export default MaterialesReportadosList;