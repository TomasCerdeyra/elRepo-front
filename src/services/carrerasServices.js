import axios from "axios";

const API_URL = 'http://localhost:8080/api/carreras';

//Obtener lista de carreras
export const getCarreras = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        throw new Error('Error al cargar las carreras')
    }
}

//eliminar carrera
export const deleteCarrera = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al eliminar la carrera');
    }
};