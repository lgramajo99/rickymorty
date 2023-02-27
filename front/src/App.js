import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About.jsx'
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error.jsx'
import Favorites from './components/Favorites';
import Form from './components/Form/Form';
import Nav from './components/Nav.jsx';


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation()

  const username = "luchoGramajo@gmail.com";
  const password = "asd123";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      localStorage.setItem('access', 'true');
      navigate("/home");
    }
  }

  useEffect(() => {
    const accessStored = localStorage.getItem('access');
    if (accessStored) {
      setAccess(true);
      // navigate('/home');
    } else {
      navigate('/');
    }
  }, [navigate]);

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

  const onClose = (id) => { setCharacters(characters.filter(characters => characters.id !== id)) }

  const logout = () => {
    localStorage.removeItem('access');
    setAccess(false);
    navigate('/');
  };


  return (
    <div className='App'>

      {location.pathname === '/' ? undefined : <Nav onSearch={onSearch} randomCharacter={randomCharacter} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

export default App
