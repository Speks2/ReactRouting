import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";


export function Navbar() {



    return (

        <nav className={styles.Navbar}>
        <ul>
          <li>
            <Link to="/">Forside</Link>
          </li>
          <li>
            <Link to="/Koncepter">Koncepter</Link>
          </li>
          <li>
            <Link to="/Kontakt">Kontakt</Link>
          </li>
          {/* <li>
            <Link to="/Layout">Layout</Link>
          </li> */}
         {/* <li>
          <Link to="/NoPage">NoPage</Link>
         </li> */}
         <li>
          <Link to="/Om">Om</Link>
         </li>
        </ul>
      </nav>

    );
}