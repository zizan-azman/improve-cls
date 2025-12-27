import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SideNavigation.module.scss";
import type { SideNavigationProps } from "./SideNavigation.model";
import { getModifierClass } from "@/utils/GetClass.utils";

export function SideNavigation({ config }: SideNavigationProps) {
  const { hamburger, logo, groups } = config;
  /* ===========================
     Drawer state (mobile only)
     =========================== */
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ===========================
     Accordion state (groups)
     Only ONE group open at once
     =========================== */
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const toggleGroup = (groupId: string) => {
    setExpandedGroup((prev) => (prev === groupId ? null : groupId));
  };

  const isGroupExpanded = (groupId: string) => expandedGroup === groupId;

  const handleSoloGroupClick = (groupId: string) => {
    closeNav();
    toggleGroup(groupId);
  };

  return (
    <nav className={styles["side-navigation"]} aria-label="Primary navigation">
      <button
        className={styles["side-navigation__hamburger-button"]}
        aria-expanded={isOpen}
        aria-label="Open navigation"
        onClick={openNav}
      >
        <svg
          className={styles["side-navigation__hamburger-icon"]}
          width={hamburger.width}
          height={hamburger.height}
          aria-hidden="true"
        >
          <use href={hamburger.id}></use>
        </svg>
      </button>
      <div
        className={`${styles["side-navigation__backdrop"]} ${
          isOpen ? styles["side-navigation__backdrop--visible"] : ""
        }`}
        onClick={closeNav}
        aria-hidden="true"
      />
      <aside
        className={getModifierClass(
          isOpen,
          styles["side-navigation__drawer"],
          styles["side-navigation__drawer--open"]
        )}
        aria-hidden={!isOpen}
      >
        <div className={styles["side-navigation__logo"]}>
          <svg
            className={styles["side-navigation__logo-icon"]}
            width={logo.width}
            height={logo.height}
            aria-hidden="true"
          >
            <use href={logo.id} />
          </svg>
          <span className={styles["side-navigation__logo-text"]}>
            {logo.text}
          </span>
        </div>
        <ul className={styles["side-navigation__groups-container"]} role="list">
          <li className={styles["side-navigation__group-item"]}>
            <NavLink
              to="/"
              aria-label="Go to homepage"
              onClick={() => handleSoloGroupClick("home")}
              className={({ isActive }) =>
                getModifierClass(
                  isActive,
                  styles["side-navigation__group-button-solo"],
                  styles["side-navigation__group-button-solo--active"]
                )
              }
            >
              <div className={styles["side-navigation__group-logo-text"]}>
                <svg
                  className={styles["side-navigation__group-prefix-icon"]}
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use href="#home"></use>
                </svg>
                <span className={styles["side-navigation__group-text"]}>
                  Home
                </span>
              </div>
            </NavLink>
          </li>
          {groups.map((group) => (
            <li
              key={group.uniqueID}
              className={styles["side-navigation__group-item"]}
            >
              <button
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isGroupExpanded(group.id)}
                className={getModifierClass(
                  isGroupExpanded(group.id),
                  styles["side-navigation__group-button"],
                  styles["side-navigation__group-button--expand"]
                )}
              >
                <div className={styles["side-navigation__group-logo-text"]}>
                  <svg
                    className={styles["side-navigation__group-prefix-icon"]}
                    width={group.button.iconWidth}
                    height={group.button.iconHeight}
                    aria-hidden="true"
                  >
                    <use href={group.button.iconID}></use>
                  </svg>
                  <span className={styles["side-navigation__group-text"]}>
                    {group.button.text}
                  </span>
                </div>
                <svg
                  className={styles["side-navigation__group-arrow"]}
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <use href="#keyboard-right"></use>
                </svg>
              </button>
              <div
                className={getModifierClass(
                  isGroupExpanded(group.id),
                  styles["side-navigation__links-container"],
                  styles["side-navigation__links-container--expand"]
                )}
              >
                {group.links.map((link) => (
                  <NavLink
                    key={link.uniqueID}
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      getModifierClass(
                        isActive,
                        styles["side-navigation__link"],
                        styles["side-navigation__link--active"]
                      )
                    }
                    onClick={closeNav}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </li>
          ))}
          <li className={styles["side-navigation__group-item"]}>
            <NavLink
              to="/conclusion"
              aria-label="Go to conclusion page"
              onClick={() => handleSoloGroupClick("conclusion")}
              className={({ isActive }) =>
                getModifierClass(
                  isActive,
                  styles["side-navigation__group-button-solo"],
                  styles["side-navigation__group-button-solo--active"]
                )
              }
            >
              <div className={styles["side-navigation__group-logo-text"]}>
                <svg
                  className={styles["side-navigation__group-prefix-icon"]}
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use href="#summarize"></use>
                </svg>
                <span className={styles["side-navigation__group-text"]}>
                  Conclusion
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </aside>
    </nav>
  );
}
