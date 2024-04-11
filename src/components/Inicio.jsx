import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

  const contextValue = useContext(PruebaContext);
  const { usuario, setUsuario } = contextValue;

  return (
    <>
      <h1>Inicio</h1>
      {
        (usuario !== null) && <pre>usuario: {JSON.stringify(usuario)}</pre>
      }
    </>
  );
}