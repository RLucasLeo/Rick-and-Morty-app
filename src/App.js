import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Form from './components/Form/Form';


function App () {

  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [acces, setAcces] = useState(false);

  const username="example@example.com"
  const password ="asd123"

  const login=(userData) => {
    if(userData.username === username && userData.password === password){
      setAcces(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
    !acces && navigate("/")
  }, [acces])



  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
   .then((response)=> response.json())
   .then((data)=> {
      if(data.name){
        setCharacters((oldChars)=>[...oldChars, data]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
   });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login}/> : <NavBar onSearch={onSearch} /> }
      <hr />
      <Routes>
          <Route path="/about" element={<About/>}/> 
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}  />}/> 
          <Route path="detail/:detailId" element={<Detail />} />
      </Routes>
     
    </div>
  );
}

export default App
