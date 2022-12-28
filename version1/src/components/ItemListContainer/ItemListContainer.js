import ItemListContainer from './ItemListContainer.css'


function Saludo (props){



    return(
        <header className='greeting'>
            <a>Bienvenido/a, te saludo = {props.saludo}, y cuando  te vayas me despido = {props.despedida}
            </a>
        </header>
    )
}


//Exportacion

export default Saludo