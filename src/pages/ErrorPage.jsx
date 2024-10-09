import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>Acceso Denegado</h1>
            <p>Lo sentimos, solo los usuarios con un correo electrónico
                <strong>
                    @unsada.edu.ar
                </strong>
                pueden acceder a esta página.
            </p>
            <Link to={'/'}>Volver al Login</Link>
        </div>
    )
}

export default ErrorPage