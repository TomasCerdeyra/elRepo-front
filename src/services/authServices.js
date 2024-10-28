import axios from "axios";

const API_URL = 'http://localhost:8080/api/auth';

export const logout = async () => {
    try {
        const response = await axios.get(`${API_URL}/logout`)
        console.log(response);
        
        return response.data 
    } catch (error) {
        console.log(error);
        throw error;
    }
}
