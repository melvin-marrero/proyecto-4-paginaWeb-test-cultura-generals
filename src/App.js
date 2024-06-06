

import './App.css';
import Home from './compontes/home';
import NivelDificil from './compontes/nivelDificil';
import NivelFacil from './compontes/nivelFacil';
import NivelMedio from './compontes/nivelMedio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
      
     
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/levelFacil' element={<NivelFacil />}/>
        <Route path='/levelDificil' element={<NivelDificil />}/>
        <Route path='/levelmedio' element={<NivelMedio />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
