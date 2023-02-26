import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detail(props){

    const { detailId } =useParams();
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response)=>response.json())
        .then((char)=> {
            if (char.name){
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID")
            }
        })
        .catch((err)=>{
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return(
        <div>
            <Link to="/home"><button>Volver</button></Link>
            <h1>Detail</h1>
            <h2>Nombre: {character.name}</h2>
            <img src={character.image} alt={character.name} />
        </div>
    )
}