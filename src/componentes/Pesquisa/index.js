import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    color: black;
    text-align: center;
    width: 100%;
`

const Titulo = styled.h2`
    color: #EA047E;
    font-size: 29px;
    text-align: center;
    width: 100%;

    span {
        display: inline-block;
        border-radius: 5px;
        padding: 4px;
      }
`

const Subtitulo = styled.h3`
    font-size: 18px;
    margin-bottom: 40px;
    color: black;

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
      flex-wrap:wrap;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-weight: bold;
      width: 100%;

      img {
        width: 110px;
        padding: 8px;
        border-radius: 10px;
        transition: transform 0.3s;
        margin-bottom: 13px;
      }

      &:hover img {
        transform: scale(1.1);
      }
`

function Pesquisa () {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>
                <span>Bem-vindo à Livraria Great Books</span>
            </Titulo>
            <Subtitulo>
                <span>Encontre seu livro em nossa estante.</span>
            </Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value.toLowerCase();
                    if (textoDigitado.trim() === '') {
                        setLivrosPesquisados([]);
                        
                    }else{
                        const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado)
                        );
                        setLivrosPesquisados(resultadoPesquisa)
                    }
                }}        
            />
            { livrosPesquisados.map( livro=> (
                <Resultado>
                    <img src={livro.src} alt="livro"/>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa;