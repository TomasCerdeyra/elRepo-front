import logoImagen from '../assets/img.png';
import logoArchivo from '../assets/archivo.png';
import logoCarpeta from '../assets/carpeta.png'
import logoCarpeta2 from '../assets/carpeta2.png'


export const seleccionarLogo = (tipoArchivos) => {
    const tieneImagen = tipoArchivos.includes('imagen')
    const tieneArchivo = tipoArchivos.includes('archivo')

    if (tieneImagen && tieneArchivo) {
      return { src: logoCarpeta, alt: 'Icono Carpeta' }
    } else if (tieneImagen) {
      return { src: logoImagen, alt: 'Icono Imagen' }
    } else if (tieneArchivo) {
      return { src: logoArchivo, alt: 'Icono Archivo' }
    }
  }