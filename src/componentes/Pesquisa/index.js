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
    font-size: 26px;
    text-align: center;
    width: 100%;

    span {
        display: inline-block;
        background-color: rgba(27, 71, 72, 0.8); 
        border-radius: 5px;
        padding: 4px;
      }
`

const Subtitulo = styled.h3`
    font-size: 16px;
    margin-bottom: 40px;
    color: rgba(255, 255, 255);

    span {
        display: inline-block;
        background-color: rgba(27, 71, 72, 0.8); 
        border-radius: 5px;
        padding: 4px;
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
        background: rgba(27, 71, 72, 0.8);
        padding: 5px;
        border-radius: 20px;
        color: rgb(255, 255, 255)
      }

      img {
        width: 100px;
        background: rgba(27, 71, 72, 0.8);
        padding: 8px;
        border-radius: 5px;
      }

      &:hover img {
        font-weight: bold;
        transform: scale(1.1);
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