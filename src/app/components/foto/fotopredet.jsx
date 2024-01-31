import React from 'react'
import Image from 'next/image'

export default function Foto(props) {
  return (
    <Image className='next'
      src={props.tipo}
      width={100}
      height={100}
      alt="Picture of the author"
      
    />
  )
}
