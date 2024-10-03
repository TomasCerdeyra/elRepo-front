import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LoginPage = () => {

  //Funcion para manejar el clik en el boton de inicio sesion
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>

      <div className="flex-grow">
        <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-8'>
          INICIAR SESIÓN
        </h1>
        <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
        <div className="flex justify-center">
          <button className='flex items-center gap-2 w-[195px] h-[40px] min-w-[195px] px-[1px] pl-[10px] pr-[10px] rounded-[3px] border border-[rgba(0,0,0,0.10)] bg-[#DC4E41] text-white hover:bg-red-700' onClick={handleLogin}>
            <img src="/public/google_icon.png" alt="Google Icon" className="h-6 w-6" />
            <span className="ml-2 leading-[1.1]">Loguearse con Google</span>
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default LoginPage