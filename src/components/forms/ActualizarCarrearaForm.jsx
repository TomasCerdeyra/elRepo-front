import React, { useState, useEffect } from 'react'

const ActualizarCarrearaForm = ({ initialData = {}, onSubmit }) => {
    //Nueva carrera
    const [nameNewCarrera, setNameNewCarrera] = useState("")
    const [areaNewCarrea, setAreaNewCarrera] = useState("")
    //Actualizar Carrera
    const [nameUpdateCarrera, setNameUpdateCarrera] = useState(initialData.name || "")
    const [areaUpdateCarrera, setAreaUpdateCarrera] = useState(initialData.area || "")

    useEffect(() => {
        if (initialData.name) setNameUpdateCarrera(initialData.name)
        if (initialData.area) setAreaUpdateCarrera(initialData.area)
    }, [initialData])

    const handleChangeName = (e) => {
        const carreraName = e.target.value
        console.log(carreraName);

        if (initialData.name) {
            setNameUpdateCarrera(carreraName)
        } else {
            setNameNewCarrera(carreraName)
        }
    }

    const handleChangeArea = (e) => {
        const carreraArea = e.target.value

        if (initialData.name) {
            setAreaUpdateCarrera(carreraArea)
        } else {
            setAreaNewCarrera(carreraArea)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (initialData.name) {
            onSubmit({ name: nameUpdateCarrera, area: areaUpdateCarrera });
        } else {
            onSubmit({ name: nameNewCarrera, area: areaNewCarrea });
        }
    };

    return (

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto mb-4">
            <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="nombreCarrera">
                    Nombre de la Carrera
                </label>
                <input
                    type="text"
                    id="nombreCarrera"
                    value={initialData.name ? nameUpdateCarrera : nameNewCarrera}
                    onChange={handleChangeName}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Ingresa el nombre de la carrera"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="areaCarrera">
                    Área de la Carrera
                </label>
                <select
                    id="areaCarrera"
                    value={initialData.name ? areaUpdateCarrera : areaNewCarrea}
                    onChange={handleChangeArea}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                >
                    <option value="">-</option>
                    <option value="Informática y Tecnología">Informática y Tecnología</option>
                    <option value="Producción Agropecuaria">Producción Agropecuaria</option>
                    <option value="Gestión Ambiental">Gestión Ambiental</option>
                    <option value="Industria">Industria</option>
                    <option value="Administración y Gestión">Administración y Gestión</option>
                    <option value="Salud">Salud</option>
                    <option value="Educación">Educación</option>
                </select>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="hover:bg-green-500 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded">
                     {initialData.name ? "Actualizar Carrera" : "Crear Carrera"}

                </button>
            </div>
        </form>

    )
}

export default ActualizarCarrearaForm