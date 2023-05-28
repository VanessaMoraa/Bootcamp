"use client";
import { useState, useEffect } from "react";

export default function Principal() {
  const [datos, ponerDatos] = useState(null);

  useEffect(() => {
    async function llamarApi() {
      const peticion = await fetch("https://reqres.in/api/users?page=2");
      const respuesta = await peticion.json();
      ponerDatos(respuesta.data);
    }
    llamarApi();
  }, []);

  return (
    <u>
      {datos ? (
        datos.map((datos) => {
          return <Tarjeta datos={datos} />;
        })
      ) : (
        <p>Cargando...</p>
      )}
    </u>
  )
}

function Tarjeta(props) {
  const fondo={
    background: "rgb(100,103,182)",
    background:"radial-gradient(circle, rgba(100,103,182,1) 0%, rgba(163,129,196,1) 100%)",
  }
  return (
    <>
      {props.datos ? (
        // <div className="w-full max-w-sm bg-blue border border-gray-00 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div style={fondo}> Te presentamos el portafolio de abogados disponibles y sus datos, contacta a:
        <div className="flex justify-end px-10 pt-8"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-12 h-12 mb-3 rounded-full shadow-lg"
              src={props.datos.avatar}
            />
            <h5 className="mb-1 text-xxl font-medium text-gray-900 dark:text-white">
              {props.datos.first_name}
            </h5>
            <span className="text-sm text-black-500 dark:text-gray-400">
              {props.datos.email}
            </span>
          </div>
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </>
  );
}
