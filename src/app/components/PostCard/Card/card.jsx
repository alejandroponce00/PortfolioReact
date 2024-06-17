import React from "react";
import Image from "next/image";

export default function Cards(props) {
  return (
    <div className="card tarjeta ">
      <Image
        src ={props.imagen}
        className="card-img-top"
         width ={props.ancho}
         height ={props.alto}
        alt=""
      ></Image>
      <div className="cuerpocard ">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.descripcion}</p>
        <a href={props.direccion} target="_blank" class="btn btn-primary" >
          Hecha un vistazo
        </a>
      </div>
    </div>
  );
}
