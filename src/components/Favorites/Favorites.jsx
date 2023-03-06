import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import {Link} from "react-router-dom"
const Favorites = ( ) => {
    const {myFavorites} = useSelector(state => state)
    return (

        <div style={{display: "flex", justifyContent: "space-between", flexWrap:"wrap", margin:"15px"}}>
            {
                myFavorites.map((props)=>{
                    return(
                        <div className={styles.container}>
                             <div className={styles.buttonCointainer}>
                                    
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
                    )
                })
            }
        </div>
    )
}

export default Favorites;