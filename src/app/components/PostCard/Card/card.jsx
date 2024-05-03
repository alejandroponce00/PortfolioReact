import React from 'react'
import Image from 'next/image'

export default function Cards(props) {
  return (
    <div className="card tarjeta " >
 <image src={props.imagen} class="card-img-top"style={{width: 100}}></image>
 <div class="card-body ">
   <h5 class="card-title">{props.nombre}</h5>
   <p className="card-text">{props.descripcion}</p>
   <a href={props.direccion} class="btn btn-primary">Hecha un vistazo</a>
 </div>
</div>
  )
}
