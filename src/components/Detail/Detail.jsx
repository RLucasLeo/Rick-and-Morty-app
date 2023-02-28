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
        <div className={styles.container}>
            <div className={styles.boton}><Link to="/home"><button >Volver</button></Link></div>
            <h1>Detail</h1>
            <div>
             <h2>Nombre: {character.name}</h2>
             <h2>Estado: {character.status}</h2>
            <img className={styles.imagen} src={character.image} alt={character.name} />
            <h2>Location: {character.name}</h2>
            <h2>Lo que siga: {character.name}</h2>
            <p className={styles.titulos}>falsetext</p>
            </div>
        </div>
    )
}