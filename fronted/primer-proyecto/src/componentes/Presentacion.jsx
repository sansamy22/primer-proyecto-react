import foto from '../assets/asus.jpg'
function Presentacion(){

    return(
        <article className="presentacion">
            <img src={foto} alt='Mi foto'/>
            <h1> Mi perfil </h1>
            <h2> Nombre: Einer Hernan Alvarado Hoyos </h2>
            <h2> Barrio: Inddianapolis </h2>
            <h4> medios de contacto </h4>
                <h2> Correo: Einer1205@gmail.com </h2>
                <h2> Telefono: +57 3103556028 </h2>
            <h1> Soy aprendiz del SENA de V trimestre </h1>
        </article>
    )

}

export default Presentacion