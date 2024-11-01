import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ logueado: false, user: null });
    const [loading, setLoading] = useState(true);

    const URL = 'http://localhost:8080/api/auth/status';

    useEffect(() => {
        const verificarAutenticacion = async () => {
            try {
                const response = await axios.get(URL, {
                    withCredentials: true,
                });
                
                setAuth({ logueado: response.data.logueado, user: response.data.user });
            } catch (error) {
                console.error('Error al verificar el estado de autenticación:', error);
            } finally {
                setLoading(false); // Desactiva la carga después de la verificación
            }
        };

        verificarAutenticacion();
    }, []);

    if (loading) {
        return <div>Cargando...</div>; // O cualquier componente de carga que prefieras
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);