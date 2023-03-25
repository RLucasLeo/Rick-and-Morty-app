import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import {Link} from "react-router-dom";
import {orderCards} from "../../redux/actions"

const Favorites = ( ) => {
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch(); 

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(orderCards(event.target.value))
    }

    return (

        <div style={{display: "flex", justifyContent: "space-between", flexWrap:"wrap", margin:"15px"}}>
            <div>
                <select onChange={handlerOrder}>
                    <option value="order" disbale="disable">OrderBy</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                <option value="order" disbale="disable">OrderBy</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknow">Unknow</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
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