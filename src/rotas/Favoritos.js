import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c3e4f5;
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
