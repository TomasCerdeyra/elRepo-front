import React, { useState, useEffect } from "react";
import { getCarreras } from "../services/carrerasServices";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logos from "../services/logosServices";
import ButtonName from "../components/buttons/ButtonName";

const HomePage = () => {
  const [carreras, setCarreras] = useState([]);

  // Agrupar carreras por área
  const agruparCarrerasPorArea = (carreras) => {
    return carreras.reduce((acc, carrera) => {
      const area = carrera.area;
      if (!acc[area]) {
        acc[area] = [];
      }
      acc[area].push(carrera);
      return acc;
    }, {});
  };

  useEffect(() => {
    const cargarCarreras = async () => {
      try {
        const data = await getCarreras();
        setCarreras(agruparCarrerasPorArea(data));
      } catch (error) {
        console.log("Error al cargar las carreras");
      }
    };
    cargarCarreras();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="py-4 flex-grow">
        <div>
          <h1 className="text-[#16353B] sm:px-32  text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans">
            ELIGE TU CARRERA UNIVERSITARIA:
          </h1>
        </div>
        {Object.keys(carreras).map((area) => (
          <div
            className="text-white text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold font-sans px-5 sm:px-20  "
            key={area}
          >
            <div className="h-[.13rem] mt-7 mb-5 bg-[#4F847C]"></div>
            <div className="flex flex-col items-center">
              <img
                src={logos[area]}
                className="h-9 sm:h-1 lg:h-16 xl:h-20 object-contain"
                alt={area}
              />
            </div>
            <h2 className="text-[#16353B] text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5">
              {area}
            </h2>{" "}
            {/* Título del área */}
            <ul className="flex flex-col gap-2 px-6">
              {carreras[area].map((carrera) => (
                <Link to={`/carrera/${carrera._id}`} key={carrera._id}>
                  <ButtonName
                    carrera={carrera.name}
                    area={area}
                    logo={logos[area]}
                  />
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
