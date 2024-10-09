import axios from "axios";

const API_URL = 'http://localhost:8080/api/auth';

export const logout = async () => {
    try {
        return await axios.get(`${API_URL}/logout`)
    } catch (error) {
        console.log(error);
        throw error;
    }
}
