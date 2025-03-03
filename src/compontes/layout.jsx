import Carrusel2 from "./carrusel";
import Nombrejuego from "./nombreJuego";

export default function Layout( { children } ) {
  return (
    <>
    <header>
      <Carrusel2 />
      <Nombrejuego /> 
    </header>
    <main>
        {children}
    </main>
    </>
  )
}
