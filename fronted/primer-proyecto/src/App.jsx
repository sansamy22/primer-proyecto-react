import './App.css'
import Encabezado from './Componentes/Encabezado'
import Sidebar from './componentes/sidebar'
import Tarjeta from './Componentes/Tarjeta'
import PiePagina from './Componentes/PiePagina'  
import Presentacion from './componentes/Presentacion' 


function App(){
  const programa ="Analisis y Desarrollo de software"
  return(
    <>
    <div  className='layaut'>
    <Encabezado/>

    <Sidebar/>
    <main className='contenido'>
      <h2> Bienvenidos al programa {programa}</h2>
      <Presentacion/>
      <section className='tarjetas'>
        <Tarjeta/>
        <Tarjeta/>
      </section>
    </main>
    <PiePagina/>
    </div>
    </>
  )
}

export default App