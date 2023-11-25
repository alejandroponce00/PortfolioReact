import React from 'react'
import Image from 'next/image'

export default function Fotodjango() {
  return (
    <Image className='next'
      src="/imagenes/django.png"
      width={80}
      height={80}
      alt="Picture of the author"
      
    />
  )
}
