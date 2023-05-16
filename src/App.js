import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components' 
import img from './imagens/wallpaper.jpg' 

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
