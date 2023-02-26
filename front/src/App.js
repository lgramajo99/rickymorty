import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About.jsx'
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error.jsx'
import Nav from './components/Nav.jsx';


function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const characterExists = characters.find((char) => char.id === data.id);
          if (characterExists) { window.alert('Este personaje ya está en la lista.'); }
          else { setCharacters((oldChars) => [...oldChars, data]); }
        }
        else { window.alert('No hay personajes con ese ID'); }
      });
  };

  const randomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then((response) => response.json())
      .then((data) => {
        if (!characters.find(char => char.id === data.id)) { setCharacters((oldChars) => [...oldChars, data]) }
        else { randomCharacter(); }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(characters => characters.id !== id))
  }

  return (
    <div className='App'>

      <Nav
        onSearch={onSearch}
        randomCharacter={randomCharacter}
      />

      <Routes>
        <Route
          path='/home'
          element={
            <Cards
              characters={characters}
              onClose={onClose}
            />} />

        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

export default App
