import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const { usuario, setUsuario } = useContext(PruebaContext);
  const navegar = useNavigate();

  const guardar = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime(),
      username: e.target.username.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value,
    };
    console.log(newUser);
    setUsuario(newUser);

    navegar('/perfil');
  }

  return (
    <>
      <h1>Login</h1>
      <form className='login' onSubmit={guardar}>

        <div className='form-group'>
          <label className='label-group'>Username</label>
          <input className='input-group' type="text" name='username' placeholder='Username' />
        </div>

        <div className='form-group'>
          <label className='label-group'>Nombre</label>
          <input className='input-group' type="text" name='nombre' placeholder='Nombre' />
        </div>

        <div className='form-group'>
          <label className='label-group'>Web</label>
          <input className='input-group' type="text" name='web' placeholder='Web' />
        </div>

        <div className='form-group'>
          <input className='input-guardar' type="submit" value='Guardar' />
        </div>

      </form>
    </>
  );
}