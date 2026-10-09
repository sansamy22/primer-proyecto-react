import reactlogo from '../assets/react.svg'


function Tarjeta(){
    return(
        <article className='tarjeta'>
            <img src={reactlogo} alt='Logo de React'/>
            <h3> React </h3>
            <p>Biblioteca de javascript para 
                construir interffaces con componenntes
            </p>
        </article>
    )
}

export default Tarjeta