import React from 'react'
import { useState, useEffect } from 'react'
import { getMaterialesReportados } from '../services/materialesServices'
import logoImagen from '../../public/img.png'
import logoArchivo from '../../public/archivo.png'
import { Link } from 'react-router-dom'

const MaterialesReportadosList = () => {

    const [materiales, setMateriales] = useState([])

    useEffect(() => {
        const cargarMateriales = async () => {
            try {
                const data = await getMaterialesReportados()
                setMateriales(data)
            } catch (error) {
                console.log('Error al cargar los materiales denunciados');
            }
        }
        cargarMateriales()
    }, [])


    return (

        <ul className="mx-5 lg:mx-20 xl:mx-20">
            {materiales.map((material) => (
                <div key={material._id} className="hover:bg-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] p-3 m-2 flex items-center justify-between gap-5">
                    <Link to={`/material/${material._id}`} className="flex items-center justify-between w-full p-3 gap-3">
                        <img
                            src={material.tipo === 'imagen' ? logoImagen : logoArchivo}
                            alt={material.tipo === 'imagen' ? 'icono Imagen' : 'Icono Archivo'}
                            className="h-9 sm:h-9 md:h-12 lg:h-16 xl:h-20 object-contain"
                        />
                        <p className="flex-1  font-semibold">{material.nombre}</p>
                        <p className="flex-1 text-center  text-xs font-medium">{material.anio}</p>

                    </Link>
                    <button className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white mr-5">Rechazar</button>
                    <button className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white mr-5">Eliminar</button>
                </div>
            ))}
        </ul>

    )
}

export default MaterialesReportadosList