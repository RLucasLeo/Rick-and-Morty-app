import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App () {

  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAcces] = useState(false);

  const username="example@example.com"
  const password ="asd123"

  const login=(userData) => {
    if(userData.username === username && userData.password === password){
      setAcces(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
    !access && navigate("/")
  }, [access])



  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error durante la solicitud:", error);
      });
  }
  

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login}/> : <NavBar onSearch={onSearch} /> }
      <Routes>
          <Route path="/about" element={<About/>}/> 
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}  />}/> 
          <Route path="detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites/>} />
      </Routes>
     
    </div>
  );
}

export default App
