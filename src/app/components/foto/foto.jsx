import React from 'react'
import Image from 'next/image'

export default function Foto() {
  return (
    <Image
      src="/imagenes/perfil.jpg"
      width={120}
      height={150}
      alt="Picture of the author"
    />
  )
}

 