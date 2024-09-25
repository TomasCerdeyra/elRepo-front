import React from 'react'

const Login = () => {

  //Funcion para manejar el clik en el boton de inicio sesion
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/'
  }

  return (
    <div>
      <h1>Iniciciar Sesion El Repo</h1>
      <button onClick={handleLogin}>
        Iniciar Sesion con Gogle
      </button>
    </div>
  )
}

export default Login