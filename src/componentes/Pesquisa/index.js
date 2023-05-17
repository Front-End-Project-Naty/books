import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    color: black;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: rgba(255, 255, 255);
    font-size: 28px;
    text-align: center;
    width: 100%;

    span {
        display: inline-block;
        border-radius: 5px;
        padding: 4px;
        -webkit-text-stroke: 1px black;
        text-stroke: 1px black;
      }
`

const Subtitulo = styled.h3`
    font-size: 18px;
    margin-bottom: 40px;
    color: rgba(255, 255, 255);

    span {
        display: inline-block;
        border-radius: 5px;
        padding: 4px;
        -webkit-text-stroke: 1px black;
        text-stroke: 1px black;
      }
`

const Resultado = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-weight: bold;

      p{
        width: 120px;
        padding: 5px;
        border-radius: 20px;
        color: rgb(255, 255, 255)
      }

      img {
        width: 100px;
        padding: 8px;
        border-radius: 5px;
      }

      &:hover img {
        font-weight: bold;
        transform: scale(1.3);
      }
`

function Pesquisa () {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>
                <span>Já sabe por onde começar?</span>
            </Titulo>
            <Subtitulo>
                <span>Encontre seu livro em nossa estante.</span>
            </Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}        
            />
            { livrosPesquisados.map( livro=> (
                <Resultado>
                    <p> {livro.nome}</p>
                    <img src={livro.src} />
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa;