"use client";

import data from "../../components/proyectos.json";
import Modal from "../../components/Modal";
import { useEffect,useState } from "react";

export default function Proyectos() {
  const [estaModalAbierto, setEstaModalAbierto] = useState(false);
  const [modalTipo, setModalTipo] = useState();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="proyectos">
      <div className={`proyectos-container ${estaModalAbierto ? "fadeout": ""}`}>
        {data.proyectos.map((proyecto, index) => (
          <div
            className={`img${index + 1} imgonclick`}
            key={index}
            onClick={() => {
              setEstaModalAbierto(true);
              setModalTipo(index);
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

      {estaModalAbierto && (
          <Modal
            data={data.proyectos[modalTipo].modal}
            modalTipo={modalTipo}
            setEstaModalAbierto={setEstaModalAbierto}
          />
        )}

    </div>
  );
}

