import styled from "styled-components";

export const Titulo = styled.h2`
    color: ${props => props.cor || 'rgba(255, 255, 255)'};
    font-size: ${props => props.tamanhoFonte || '15px'};
    text-align: center;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
`