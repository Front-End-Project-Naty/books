import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    color: rgba(255, 255, 255);
    font-size: 26px;
    text-align: center;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        width: 100px;
        padding: 8px;
        border-radius: 5px;
      }

`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro =>
                    <img src={livro.src} />
                )}
            </NovosLivrosContainer>
    </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos