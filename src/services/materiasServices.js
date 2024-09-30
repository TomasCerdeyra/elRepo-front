import axios from "axios";

//Mas adelante la url traerla desde un archivos fuera del programa
const API_URL = 'http://localhost:8080/api/materias' 

export const getMateriasByCarrera = async (carreraId) => {
    try {
        const response = await axios.get(`${API_URL}/${carreraId}`)
        return response.data
    } catch (error) {
        throw new Error('Error al obtener las materias')
    }
}