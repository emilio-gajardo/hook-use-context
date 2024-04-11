import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Perfil = () => {
    const { usuario } = useContext(PruebaContext);

    const obj = (usuario !== null)
        ? (<>
            <h1>Perfil</h1>
            <ul>
                <li>Id: {usuario.id}</li>
                <li>Nombre: {usuario.nombre}</li>
                <li>Username: {usuario.username}</li>
            </ul>
        </>)
        : (<>No data</>)

    return (obj);
}