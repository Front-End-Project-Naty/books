import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c3e4f5;
  `
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: black;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid black;
        padding: 20px;
        border-radius: 20px;
    }
`

const Titulo = styled.h2`
    color: black;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos ()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro de id: ${id} deletado!`)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favoritos.length !== 0 ? (
            favoritos.map((favorito) => (
              <Resultado onClick={() => deletarFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={favorito.image} alt="livro favorito" />
              </Resultado>
            ))
          ) : null}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
