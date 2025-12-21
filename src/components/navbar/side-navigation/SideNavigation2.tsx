import { NavLink } from "react-router-dom";
import styles from "./SideNavigation.module.scss";
import { getNavLinkClass } from "./SideNavigation.utils";

export function SideNavigation() {
  return (
    <nav className={styles["side-navigation"]} aria-label="Primary navigation">
      <div className={styles["side-navigation__logo"]}>
        <svg
          className={styles["side-navigation__logo-icon"]}
          width="44"
          height="44"
          aria-hidden="true"
        >
          <use href="#cls-logo"></use>
        </svg>
        <span className={styles["side-navigation__logo-text"]}>
          Improve CLS Score
        </span>
      </div>
      <ul className={styles["side-navigation__groups-container"]} role="list">
        <li className={styles["side-navigation__group-item"]}>
          <button className={styles["side-navigation__group-button"]}>
            <svg
              className={styles["side-navigation__group-prefix-icon"]}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="#imagesmode"></use>
            </svg>
            <span className={styles["side-navigation__group-text"]}>
              Images
            </span>
            <svg
              className={styles["side-navigation__group-arrow"]}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="#keyboard-right"></use>
            </svg>
          </button>
          <div className={styles["side-navigation__links-container"]}>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Layout Shifts
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Height
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Aspect Ratio
            </NavLink>
          </div>
        </li>
        <li className={styles["side-navigation__group-item"]}>
          <button className={styles["side-navigation__group-button"]}>
            <svg
              className={styles["side-navigation__group-prefix-icon"]}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="#imagesmode"></use>
            </svg>
            <span className={styles["side-navigation__group-text"]}>
              Images
            </span>
            <svg
              className={styles["side-navigation__group-arrow"]}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="#keyboard-right"></use>
            </svg>
          </button>
          <div className={styles["side-navigation__links-container"]}>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Layout Shifts
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Height
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Aspect Ratio
            </NavLink>
          </div>
        </li>
        <li className={styles["side-navigation__group-item"]}>
          <button className={styles["side-navigation__group-button"]}>
            <svg
              className={styles["side-navigation__group-prefix-icon"]}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="#imagesmode"></use>
            </svg>
            <span className={styles["side-navigation__group-text"]}>
              Images
            </span>
            <svg
              className={styles["side-navigation__group-arrow"]}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="#keyboard-right"></use>
            </svg>
          </button>
          <div className={styles["side-navigation__links-container"]}>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Layout Shifts
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Height
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Aspect Ratio
            </NavLink>
          </div>
        </li>
        <li className={styles["side-navigation__group-item"]}>
          <button className={styles["side-navigation__group-button"]}>
            <svg
              className={styles["side-navigation__group-prefix-icon"]}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="#imagesmode"></use>
            </svg>
            <span className={styles["side-navigation__group-text"]}>
              Images
            </span>
            <svg
              className={styles["side-navigation__group-arrow"]}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <use href="#keyboard-right"></use>
            </svg>
          </button>
          <div className={styles["side-navigation__links-container"]}>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Layout Shifts
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Height
            </NavLink>
            <NavLink
              to="/container/layout-shift"
              end
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  styles["side-navigation__link"],
                  styles["side-navigation__link--active"]
                )
              }
            >
              Aspect Ratio
            </NavLink>
          </div>
        </li>
      </ul>
      <div className={styles["side-navigation__empty-spacing"]}></div>
    </nav>
  );
}
