import { NavLink } from "react-router-dom";
import type { LinkArrowProps } from "./LinkArrow.model";
import styles from "./LinkArrow.module.scss";

export function LinkArrow({ config }: LinkArrowProps) {
  const { path, text } = config;

  return (
    <NavLink to={path} end className={styles["link-arrow"]}>
      <span className={styles["link-arrow__text"]}>{text}</span>
      <svg
        className={styles["link-arrow__icon"]}
        width="24"
        height="24"
        aria-hidden="true"
      >
        <use href="#arrow-right" />
      </svg>
    </NavLink>
  );
}
