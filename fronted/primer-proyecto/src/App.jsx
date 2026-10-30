import './App.css'
import Encabezado from './Componentes/Encabezado'
import Sidebar from './componentes/Sidebar' 
import { tecnologias } from './data/tecnologias'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './Componentes/PiePagina'  
import Presentacion from './componentes/Presentacion' 
import fotoperfil from './imagenes/RIAS.jpg'
import Inicio from './paginas/inicio'
import Perfil from './paginas/perfil'
import { Route, Routes } from 'react-router'

function App(){
  const programa ="Analisis y Desarrollo de software"
  const usuario = {
    nombre : 'SAMY PASSU VARGAS',
    rol : 'Aprendiz ADSO',
    foto : fotoperfil
  }
  return(
    <>
    <div  className='layaut'>
    <Encabezado usuario = {usuario}/>

    <Sidebar/>
    <main className='contenido'>
      <Routes>
        
        <Route path="/" element={<Inicio/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
      </Routes>
    </main>
    <PiePagina/>
    </div>
    </>
  )
}

export default App