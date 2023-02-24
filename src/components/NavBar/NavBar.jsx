import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
   return (
      <div className={styles.container}>
        <SearchBar
          onSearch={props.onSearch}/>
      </div>
   );
}
