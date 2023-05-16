import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
    color: black;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: black;
    font-size: 26px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 40px;
    color: black;
`

function Pesquisa () {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
            />
        </PesquisaContainer>
    )
}

export default Pesquisa;