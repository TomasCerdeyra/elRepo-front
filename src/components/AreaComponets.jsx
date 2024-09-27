const AreaCarreras = ({ area, carreras }) => (
  <div>
    <h2>Área: {area}</h2>
    {carreras.map((carrera, index) => (
      <div key={index}>{carrera.name}</div>
    ))}
  </div>
);


export default AreaCarreras