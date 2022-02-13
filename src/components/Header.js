import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
