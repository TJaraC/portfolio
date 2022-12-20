"use client";

import data from "../../components/proyectos.json";
import Modal from "../../components/Modal";
import { useEffect,useState } from "react";

export default function Proyectos() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<number>()

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="proyectos">
      <div className={`proyectos-container ${proyectoSeleccionado !== undefined ? "fadeout": ""}`}>
        {data.proyectos.map((proyecto, index) => (
          <div
            className={`img${index + 1} imgonclick`}
            key={index}
            onClick={() => {
              setProyectoSeleccionado(index);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={proyecto.imgSrc}
              alt={proyecto.alt}
              className="img-proyectos"
            />
            <div className="text-container-proyectos">
              <p className="text-proyectos">{proyecto.texto}</p>
            </div>
          </div>
        ))}
      </div>

      {proyectoSeleccionado !== undefined && (
          <Modal
            data={data.proyectos[proyectoSeleccionado].modal}
            proyectoSeleccionado={proyectoSeleccionado}
            setProyectoSeleccionado={setProyectoSeleccionado}
          />
        )}

    </div>
  );
}

