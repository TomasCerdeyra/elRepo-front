import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ adminOnly }) => {
    const { auth } = useAuth();
    
    // Si el usuario no está autenticado, redirige a la página de login
    if (!auth.logueado) {
        return <Navigate to="/" replace />;
    }

    // Si se requiere acceso solo para administradores y el usuario no es admin
    if (adminOnly && !auth.user?.isAdmin) {
        return <Navigate to="/home" />; // Redirige a la página de inicio para usuarios no admin
    }


    // Si el usuario está autenticado y tiene acceso, renderiza el componente hijo
    return <Outlet />;
}

export default ProtectedRoute;
