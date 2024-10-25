import axios from "axios";

const API_URL = 'http://localhost:8080/api/carreras';


//Crear Carrera
export const createCarrera = async (formData) => {
    try {
        console.log(formData);
        
        const response = await axios.post(API_URL, formData)
        console.log(response);
        console.log(response.data);
        
        return response.data
    } catch (error) {
        throw new Error('Error al crear las materias', error)
    }
}

//Obtener lista de carreras
export const getCarreras = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        throw new Error('Error al cargar las carreras', error)
    }
}

//Actualizar una carrera
export const updateCarreraById = async (data, carreraId) => {
    try {
        const response = await axios.put(`${API_URL}/${carreraId}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error al encontrar la carrera', error);
    }
}

//eliminar carrera
export const deleteCarrera = async (carreraId) => {
    try {
        const response = await axios.delete(`${API_URL}/${carreraId}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {    
            throw new Error(error.response.data);
        }
        throw new Error('Error al eliminar la carrera');  // Error general
    }
};

//Obtener carrera por id
export const getCarreraById = async (carreraId) => {
    try {
        const response = await axios.get(`${API_URL}/${carreraId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al encontrar la carrera', error);
    }
}