import styles from '../Routing/Hjem.module.scss';

import { Link } from "react-router-dom";

export function Hjem() {
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