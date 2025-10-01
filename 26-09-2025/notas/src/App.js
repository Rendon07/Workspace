import './App.css';
import Lista from './Lista';
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import Actividades from './Actividades';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  let estudiantes = [
    { nombre: "Fulanito", apellido: "De tal" },
    { nombre: "Peranito", apellido: "Perez" },
    { nombre: "Meganito", apellido: "Rivera" },
    { nombre: "Rosa", apellido: "Quintana" },
    { nombre: "Pedro", apellido: "Rendon" },
    { nombre: "Angie", apellido: "Ibañez" }
  ];

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes> 
          <Route path='/' element={<Inicio />} />
          <Route path='/estudiantes'  
            element= {<Lista listaestudiantes={estudiantes} />} />

        </Routes>
       
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
