import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
    align-items: center;
    background-color: #E3F4F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 20px auto;
    max-width: 600px;
    padding: 15px 10px;
    justify-content: space-around;
    width: 100%;
`

const Botao= styled.button`
    background-color: #EA047E;
    color: #fff;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    text-align:center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #EA047E;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
    border-radius: 10px;
`


function CardRecomenda ({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="22px" cor="black">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
                <Botao>Saiba mais</Botao>
            </div>
            <div>
                <ImgLivro src={img}/>
            </div>
        </Card>
    )
}

export default CardRecomenda;