import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, Link } from "react-router-dom";

export default function NavBar(props) {
   return (
      <div className={styles.container}>
         <NavLink to="/" className={styles.boton}>Logout</NavLink>
         <NavLink to="/about" className={styles.boton}>
            About
         </NavLink>
         <NavLink to="/home" className={styles.boton}>
            Home
         </NavLink>
        <SearchBar
          onSearch={props.onSearch}/>
      </div>
   );
}
