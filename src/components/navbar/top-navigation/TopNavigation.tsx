import { NavLink } from "react-router-dom";
import styles from "./TopNavigation.module.scss";

export function TopNavigation() {
  return (
    <nav
      className={styles["top-navigation"]}
      aria-label="Primary navigation on mobile View"
    >
      <div className={styles["top-navigation__menu"]}>
        <div className={styles["top-navigation__logo"]}>
          <svg
            className={styles["top-navigation__logo-icon"]}
            width="44"
            height="44"
            aria-hidden="true"
          >
            <use href="#cls-logo"></use>
          </svg>
          <span className={styles["top-navigation__logo-text"]}>
            Improve CLS Score
          </span>
        </div>
        <ul className={styles["top-navigation__links-container"]} role="list">
          <li>
            <NavLink to="/container/layout-shift">Layout Shifts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
