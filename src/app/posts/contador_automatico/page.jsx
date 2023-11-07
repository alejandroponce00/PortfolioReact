'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Player from "../Animacion/page";
function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1 className="text-white bg-dark text-center">Contador Automatico:<p className="text-white bg-dark text-center"> {count}</p></h1><Player />
      <h6><Link href="/"><h5>volver al inicio</h5></Link></h6>
      
    </div>
    
  );
}

export default Contador;
