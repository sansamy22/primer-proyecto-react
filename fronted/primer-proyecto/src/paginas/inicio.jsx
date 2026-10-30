import { Link } from "react-router";

function Inicio() {
    const programa = "Analisis y desarrollo de software"   


return(
    <section>
        <h2>Bienvenido al programa {programa}</h2>
        <p>Esre es el dashbard de la competencia con react</p>
        <p>
            Empieza por conocer <Link to="/perfil"> Mi Perfil</Link>
            o tambien revisa las {''}
            <Link to="/tecnologias">Tecnologias</Link> que vamos a trabajar 
        </p>
    </section>
) 
}

export default Inicio