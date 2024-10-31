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
                console.log(error);
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
                            <div key={material._id} className="hover:bg-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] p-3 m-2 flex items-center justify-between gap-5">
                                <Link to={`/material/${material._id}`} className="flex items-center justify-between w-full p-3 gap-3">
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="h-9 sm:h-9 md:h-12 lg:h-16 xl:h-20 object-contain"
                                    />
                                    <p className="flex-1 font-semibold text-xl">{material.nombre}</p>
                                    <p className="flex-1 text-center text-lg font-medium">Año: {material.anio}</p>
                                </Link>
                                <button onClick={() => handleDeleteReport(material._id)} className="rounded text-xm font-medium ring hover:ring-blue-600 hover:bg-blue-600 ring-blue-500 text-right bg-blue-500 text-white mr-5">
                                    Rechazar
                                </button>
                                <button onClick={() => handleDeleteMaterial(material._id)} className="rounded text-xm font-medium ring hover:ring-red-600 hover:bg-red-600 ring-red-500 text-right bg-red-500 text-white mr-5">
                                    Eliminar
                                </button>
                            </div>
                        )

                    })}
                </ul>
            )}
        </div>
    );
};

export default MaterialesReportadosList;