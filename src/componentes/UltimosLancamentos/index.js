import CardRecomenda from "../CardRecomenda"
import { Titulo } from "../Titulo"
import { livros } from "./dadosUltimosLancamentos"
import imagemLivro from "../../imagens/livro5.png"
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #c3e4f5;
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
        border-radius: 10px;
        transform: scale(1);
        opacity: 1;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }
      &:hover img {
        transform: scale(1.1);
      }
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#000" 
                tamanhoFonte="26px"
                >Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro =>
                    <img src={livro.src} alt="livro"/>
                )}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Minha vida com Boris"   
                descricao="Uma história comovente" 
                img={imagemLivro}
            />
    </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos