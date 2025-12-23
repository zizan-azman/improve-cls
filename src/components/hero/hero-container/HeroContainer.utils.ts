import styles from "./HeroContainer.module.scss";

export function getHeroContainerClass(type: string) {
  return type === "container-dimension"
    ? `${styles["hero-container"]} ${styles["hero-container--container-dimension"]}`
    : `${styles["hero-container"]} `;
}
