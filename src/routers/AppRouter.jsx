import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';

import { Inicio } from '../components/Inicio';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Login } from '../components/Login';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { PruebaContext } from '../context/PruebaContext';
import { Perfil } from '../components/Perfil';

export const AppRouter = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    return (
        <BrowserRouter>

            <header className='header'>
                <nav>
                    <div className="logo">
                        <h3>React hook useContext</h3>
                    </div>
                    <ul>
                        <li><NavLink to='/'>Inicio</NavLink></li>
                        <li><NavLink to='/acerca'>Acerca de</NavLink></li>
                        <li><NavLink to='/articulos'>Artículos</NavLink></li>
                        <li><NavLink to='/contacto'>Contacto</NavLink></li>

                        {
                            (usuario === null)
                                ? (<li><NavLink to='/login'>Login</NavLink></li>)
                                : (<>
                                    <li><NavLink to='/perfil'>{usuario.username}</NavLink></li>
                                    <NavLink to='/' onClick={(e) => {
                                        e.preventDefault();
                                        setUsuario(null);
                                    }}>Logout</NavLink>
                                </>)
                        }
                    </ul>
                </nav>
            </header>

            <section className='content'>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/Inicio' element={<Inicio />} />
                    <Route path='/Acerca' element={<Acerca />} />
                    <Route path='/Articulos' element={<Articulos />} />
                    <Route path='/Contacto' element={<Contacto />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
        </BrowserRouter>
    );
}