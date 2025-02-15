import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li></li>
        <li>
          <NavLink to="pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="product">product</NavLink>
        </li>
        <li>
          <NavLink to="login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
