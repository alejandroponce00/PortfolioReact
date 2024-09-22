import React from "react";
import Image from "next/image";

export default function Cards(props) {
  return (
    <div className="card tarjeta  ">
      <Image
        src ={props.imagen}
        className="card-img-top"
       
         width ={props.ancho}
         height ={props.alto}
         alt={props.nombre || "Imagen de tarjeta"}
      ></Image>
      <div className="cuerpocard ">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.descripcion}</p>
       
      </div> <br /><a href={props.direccion} target="_blank" className="btn btn-primary" >
          ver proyecto
        </a>
    </div>
  );
}
