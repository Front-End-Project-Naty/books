import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background: rgba(255,255,255,1);
    display: flex;
    justify-content: center;
`


function Header () {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header