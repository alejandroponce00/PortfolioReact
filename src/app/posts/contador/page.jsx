'use client'
import Link from 'next/link';
import React, { useState } from "react";



 function Contador() {
  const [count, setCount] = useState(0);
  

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };
  

  return (
    <div>
      <h1 className="text-white bg-dark">Contador: {count}</h1>
      <button onClick={incrementar} className='btn btn-success text-wrap text-center'>Incrementar</button><br />
      <button onClick={decrementar}className='btn btn-danger text-wrap'>Decrementar</button>
      <Link href="/"><h5>volver al inicio</h5></Link>
    </div>
    
  );
  
}

export default Contador;
