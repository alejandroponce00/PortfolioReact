"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendario() {
  const [Fecha, setFecha] = useState(new Date());

  const onChage = (fecha) => {
    setFecha(fecha);
  };
  return (
    <div>
      <DatePicker
        selected={Fecha}
        className="px-4 py-2 font-semibold text-sm  dark:bg-slate-700 dark:text-white 
         shadow-sm ring-1 border-black
         text-center bg-transparent text-white "
        onChange={(fecha) => onChage(fecha)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}
export default Calendario;
