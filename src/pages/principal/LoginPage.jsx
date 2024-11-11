import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { info } from 'autoprefixer'

const LoginPage = () => {

  //Funcion para manejar el clik en el boton de inicio sesion
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center gap-10">
        <div>
          <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-8'>
            INICIAR SESIÓN
          </h1>
          <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
          </div>

        <div className="flex justify-center">
          <button className='flex items-center p-6 gap-4 w-[260px] h-[40px] min-w-[195px] px-[1px] pl-[10px] pr-[10px] rounded-[3px] border border-[rgba(0,0,0,0.10)] bg-[#DC4E41] text-white hover:bg-[#c54242] hover:shadow-md transition duration-200' onClick={handleLogin}>
            <img src="/public/google_icon.png" alt="Google Icon" className="h-6 w-6" />
            <span className="ml-2 leading-[1.1] font-medium">Loguearse con Google</span>
          </button>
        </div>

        <div className="flex justify-center items-center flex-col ">
          <img className='w-7 h-auto opacity-70' src="/public/info.png" alt="info.png" />
          <p className=" text-lg font-medium text-gray-400 max-w-7xl mx-auto px-4 pb4  text-center">
            Nuestra plataforma está diseñada para brindar a los estudiantes de la Universidad Nacional de San Antonio de Areco (UNSADA) un espacio colaborativo y accesible, donde podrán encontrar todos los recursos que necesitan a lo largo de su carrera. Aquí tendrás acceso a una amplia colección de materiales aportados por otros estudiantes, como exámenes finales, parciales, trabajos prácticos y apuntes, organizados por carrera y materia.
          </p>
          <p className="text-center text-lg font-medium text-gray-400 mt-1 max-w-7xl mx-auto p-4">
            Nuestro objetivo es acompañarte en tu trayecto académico y facilitarte el estudio mediante el intercambio de conocimientos y experiencias. Con todas las carreras de la UNSADA disponibles, encontrarás recursos específicos para cada materia, contribuyendo así al éxito de tu formación.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default LoginPage