import styled from "styled-components"
import { Link } from "react-router-dom"

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    color: #1b4748ff;

    &:hover {
    transform: scale(1.1);
}
`

const Opcoes = styled.ul`
    display: flex;
    
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'] 

function OpcoesHeader ()  {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
               <Link style={{textDecoration: 'none'}} to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ) )}  
      </Opcoes>
    )
}

export default OpcoesHeader