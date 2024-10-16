import axios from "axios";

//Mas adelante la url traerla desde un archivos fuera del programa
const API_URL = 'http://localhost:8080/api/materias'

export const createMateria = async (formData) => {
    try {
        console.log(formData);
        
        const response = await axios.post(API_URL, formData)
        return response
    } catch (error) {
        console.log(error);
        
        throw new Error('Error al crear un materia')
    }
}

export const getMateriaByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/materia/name`, {
            params: { name }
        });
        return response.data
    } catch (error) {
        throw new Error('Error al obtener la materia por nomrbe')
    }
}

export const getMateriasByCarrera = async (carreraId) => {
    try {
        const response = await axios.get(`${API_URL}/${carreraId}`)
        return response.data
    } catch (error) {
        throw new Error('Error al obtener las materias')
    }
}

export const updateMateria = async (materiaId, data) => {
    try {
        const response = await axios.put(`${API_URL}/${materiaId}`, data)
        return response.data
    } catch (error) {
        console.log(error);
        
        throw new Error('Error al actualizar la materia')
    }
}


export const deleteMateria = async (materiaId) => {
    try {
        const response = await axios.delete(`${API_URL}/${materiaId}`)
        return response
    } catch (error) {
        throw new Error('Error al eliminar la materia')
    }
}




