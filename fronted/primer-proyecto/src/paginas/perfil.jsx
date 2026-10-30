import Presentacion from "../componentes/Presentacion";

// coge los datos desde presentacion y los llama desde persentacion hacia app
function Perfil() {
    return(
        <Presentacion
            nombre = "SAMY PASSU"
            ciudad = "Popayán"
            anioNacimiento = {2002}
            meta = "Muy duro master"
        />
    )
}

export default Perfil