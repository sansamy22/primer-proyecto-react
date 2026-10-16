import foto from '../imagenes/tanjiro.jpg'
function Presentacion(){

    return(
        <article className="presentacion">
            <img src={foto} alt='Mi foto'/>
            <h1> Mi perfil </h1>
            <h2> Nombre: SAMY YVERSON PASSU VARGAS </h2>
            <h2> Barrio: LA HEROICA </h2>
            <h4> medios de contacto </h4>
                <h2> Correo: samypassu10@gmail.com </h2>
                <h2> Telefono: +57 3128503372 </h2>
            <h1> Soy aprendiz del SENA de V trimestre </h1>
        </article>
    )

}

export default Presentacion