import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Contacto = () => {
  const compartida = useContext(PruebaContext);
  return (
    <>
      <h1>Contacto</h1>
      {/* <pre>{JSON.stringify(compartida)}</pre> */}
    </>
  );
}