import { useState, useEffect } from "react";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routers/AppRouter";

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('usuario'));
    setUsuario(user);
  }, [])

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }, [usuario])


  return (
    <>
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter />
      </PruebaContext.Provider>
    </>
  );
}

export default App
