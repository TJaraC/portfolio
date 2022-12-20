import { Dispatch, SetStateAction } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Image = {
  imgSrc: string;
}

type Project = {
  titulo: string;
  descripcion: string;
  img: {
    principal: Array<Image>;
    secundaria: Array<Array<Image>>
  }
}

type Props = {
  data: Project;
  modalTipo: number;
  setEstaModalAbierto: Dispatch<SetStateAction<boolean>>
}

function Modal({ data, modalTipo, setEstaModalAbierto }: Props) {
  return (
    <div className="modal">
      <div
        className="modalbackground"
        onClick={() => setEstaModalAbierto(false)}
      ></div>
      <div className={`img${modalTipo + 1}modal close modal opacidad2`}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="icono"
          onClick={() => setEstaModalAbierto(false)}
        />
        <h1>{data.titulo}</h1>
        <p>{data.descripcion}</p>
        <div>
          {data.img.principal &&
            !!data.img.principal.length &&
            data.img.principal.map((img, index) => (
              <img src={img.imgSrc} alt="" key={index} />
            ))}
          {data.img.secundaria &&
            !!data.img.secundaria.length &&
            data.img.secundaria.map((imgGroup, index) => (
              <div key={index}>
                {imgGroup &&
                  !!imgGroup.length &&
                  imgGroup.map((img, index) => (
                    <img src={img.imgSrc} alt="" key={index} />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
