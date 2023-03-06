import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";


export default function Card(props) {
   const dispatch =  useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const[isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(props.id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>♡</button>
            )
         }

         <div className={styles.buttonCointainer}>
            <button 
               onClick={props.onClose}
            >X</button>
                </div>
                  <div className={styles.dataContainer}>
                  <h2>{props.name}</h2>
                </div>
            <Link to={`/detail/${props.id}`}>        
                 <img  className={styles.image}src={props.image} alt="" />
            </Link>
               <div className={styles.dataContainerAbajo}>
                  <h2>{props.species}</h2>
                  <h2>{props.gender}</h2>
               </div>
      </div>
   );
}
