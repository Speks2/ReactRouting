import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";


export function Navbar() {



    return (

        <nav className={styles.Navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Koncepter">Concepts</Link>
          </li>
          <li>
            <Link to="/Kontakt">Contact Us</Link>
          </li>
          {/* <li>
            <Link to="/Layout">Layout</Link>
          </li> */}
         {/* <li>
          <Link to="/NoPage">NoPage</Link>
         </li> */}
         <li>
          <Link to="/Om">About</Link>
         </li>
        </ul>
      </nav>

    );
}