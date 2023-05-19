import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import styled from 'styled-components'
import img from './imagens/wallpaper.jpg' 

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
