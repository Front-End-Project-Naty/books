import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-weight: bold;
  display: flex;
  font-size: 17px;
`

const LogoImage = styled.img`
  width: 15vh;
  margin: 8px 10px 8px 0;
  border-radius: 30px;
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImage src={logo} alt='logo' />
        </LogoContainer>
    );
}

export default Logo;