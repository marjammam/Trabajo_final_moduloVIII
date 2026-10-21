import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function App() {
  const [cv, setCv] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API}/cv`)
      .then((r) => r.json())
      .then(setCv)
      .catch(() => setError(true));
  }, []);

  if (error) return <p>No se pudo cargar el CV.</p>;
  if (!cv) return <p>Cargando...</p>;

  
  const { persona } = cv;
  const formacion = [...cv.formacion].sort((a, b) => b.anio.localeCompare(a.anio));

  return (
    <div className="page">
      <article className="cv">
        <aside className="cv-side">
          <img className="avatar" src={persona.foto} alt={`Foto de ${persona.nombre}`} />
          <h1>
            {persona.nombre}
            <span>{persona.apellido}</span>
          </h1>
          <p className="city">📍 {persona.ciudad}</p>
        </aside>

        <section className="cv-main">
          <h2>Formación académica</h2>
          <ul className="timeline">
            {formacion.map((f) => (
              <li key={f.id}>
                <span className="year">{f.anio}</span>
                <h3>{f.titulo}</h3>
                <p>{f.institucion}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <button className="print" onClick={() => window.print()}>
        Imprimir / Guardar PDF
      </button>
    </div>
  );
}
