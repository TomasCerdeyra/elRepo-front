import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PublicRoute = () => {
    const { auth } = useAuth();

    // Si el usuario está logueado, redirige a la página de inicio
    if (auth.logueado && auth.user.isAdmin) {
        return <Navigate to="/admin" />;
    }

    if (auth.logueado && !auth.user.isAdmin) {
        return <Navigate to="/home" />;
    }

    // Renderiza el contenido de la ruta pública
    return <Outlet />;
};

export default PublicRoute;