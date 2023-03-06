import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink} from "react-router-dom";

export default function NavBar(props) {
   return (
      <div className={styles.fondo}>
         <div className={styles.container}>
         <NavLink to="/" className={styles.boton}>Logout</NavLink>
         <NavLink className={styles.boton}><SearchBar 
          onSearch={props.onSearch}/></NavLink>
          <NavLink to="/about" className={styles.boton}>About</NavLink>
         <NavLink to="/home" className={styles.boton}> Home</NavLink>
         <NavLink to="/favorites" className={styles.boton}> Favorites</NavLink>
         
        
         </div>
      </div>
   );
}
