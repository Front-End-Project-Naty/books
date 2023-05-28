import { Link } from "react-router-dom";
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #c3e4f5;
    display: flex;
    justify-content: center;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
`


function Header () {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo /> 
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header