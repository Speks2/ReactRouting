import styles from '../Routing/Rout.module.scss';

import { Link } from "react-router-dom";

export function Rout() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Forside</Link>
        </li>
        <li>
          <Link to="/details">Detaljer</Link>
        </li>
      </ul>
    </nav>
  );
}