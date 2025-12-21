import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SideNavigation.module.scss";
import {
  getNavLinkClass,
  getDrawerClass,
  getGroupLinkClass,
} from "./SideNavigation.utils";
import type { SideNavigationProps } from "./SideNavigation.model";

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

  /* ===========================
     Close drawer + collapse
     (used on mobile link click)
     =========================== */
  const handleNavClick = () => {
    closeNav();
    // setExpandedGroup(null);
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
      {/* Drawer */}
      <aside
        className={getDrawerClass(
          isOpen,
          styles["side-navigation__drawer"],
          styles["side-navigation__drawer--open"]
        )}
        aria-hidden={!isOpen}
      >
        {/* Logo */}
        <NavLink
          to={logo.path}
          className={styles["side-navigation__logo"]}
          aria-label="Go to homepage"
          onClick={closeNav}
        >
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
        </NavLink>

        {/* Links */}
        <ul className={styles["side-navigation__groups-container"]} role="list">
          {groups.map((group) => (
            <li className={styles["side-navigation__group-item"]}>
              <button
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isGroupExpanded(group.id)}
                className={getGroupLinkClass(
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
                className={getGroupLinkClass(
                  isGroupExpanded(group.id),
                  styles["side-navigation__links-container"],
                  styles["side-navigation__links-container--expand"]
                )}
              >
                {group.links.map((link) => (
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      getNavLinkClass(
                        isActive,
                        styles["side-navigation__link"],
                        styles["side-navigation__link--active"]
                      )
                    }
                    onClick={handleNavClick}
                  >
                    {link.text}
                  </NavLink>
                ))}
                {/* <NavLink
                  to="/container/layout-shift"
                  end
                  className={({ isActive }) =>
                    getNavLinkClass(
                      isActive,
                      styles["side-navigation__link"],
                      styles["side-navigation__link--active"]
                    )
                  }
                  onClick={handleNavClick}
                >
                  Layout shift example
                </NavLink>
                <NavLink
                  to="/container/add-width-height"
                  end
                  className={({ isActive }) =>
                    getNavLinkClass(
                      isActive,
                      styles["side-navigation__link"],
                      styles["side-navigation__link--active"]
                    )
                  }
                  onClick={handleNavClick}
                >
                  Add width or height
                </NavLink> */}
              </div>
            </li>
          ))}
          {/* <li className={styles["side-navigation__group-item"]}>
            <button
              onClick={() => toggleGroup("container")}
              aria-expanded={isGroupExpanded("container")}
              className={getGroupLinkClass(
                isGroupExpanded("container"),
                styles["side-navigation__group-button"],
                styles["side-navigation__group-button--expand"]
              )}
            >
              <div className={styles["side-navigation__group-logo-text"]}>
                <svg
                  className={styles["side-navigation__group-prefix-icon"]}
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use href="#imagesmode"></use>
                </svg>
                <span className={styles["side-navigation__group-text"]}>
                  Media Containers
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
              className={getGroupLinkClass(
                isGroupExpanded("container"),
                styles["side-navigation__links-container"],
                styles["side-navigation__links-container--expand"]
              )}
            >
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
                onClick={handleNavClick}
              >
                Layout shift example
              </NavLink>
              <NavLink
                to="/container/add-width-height"
                end
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles["side-navigation__link"],
                    styles["side-navigation__link--active"]
                  )
                }
                onClick={handleNavClick}
              >
                Add width or height
              </NavLink>
            </div>
          </li>
          <li className={styles["side-navigation__group-item"]}>
            <button
              onClick={() => toggleGroup("image")}
              aria-expanded={isGroupExpanded("image")}
              className={getGroupLinkClass(
                isGroupExpanded("image"),
                styles["side-navigation__group-button"],
                styles["side-navigation__group-button--expand"]
              )}
            >
              <div className={styles["side-navigation__group-logo-text"]}>
                <svg
                  className={styles["side-navigation__group-prefix-icon"]}
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use href="#imagesmode"></use>
                </svg>
                <span className={styles["side-navigation__group-text"]}>
                  Image Element
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
              className={getGroupLinkClass(
                isGroupExpanded("image"),
                styles["side-navigation__links-container"],
                styles["side-navigation__links-container--expand"]
              )}
            >
              <NavLink
                to="/img/layout-shift"
                end
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles["side-navigation__link"],
                    styles["side-navigation__link--active"]
                  )
                }
                onClick={handleNavClick}
              >
                Layout shift example
              </NavLink>
              <NavLink
                to="/img/add-width-height"
                end
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles["side-navigation__link"],
                    styles["side-navigation__link--active"]
                  )
                }
                onClick={handleNavClick}
              >
                Add width or height
              </NavLink>
              <NavLink
                to="/img/add-aspect-ratio"
                end
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles["side-navigation__link"],
                    styles["side-navigation__link--active"]
                  )
                }
                onClick={handleNavClick}
              >
                Add Aspect Ratio
              </NavLink>
            </div>
          </li>
          <li className={styles["side-navigation__group-item"]}>
            <button
              onClick={() => toggleGroup("video")}
              aria-expanded={isGroupExpanded("video")}
              className={getGroupLinkClass(
                isGroupExpanded("video"),
                styles["side-navigation__group-button"],
                styles["side-navigation__group-button--expand"]
              )}
            >
              <div className={styles["side-navigation__group-logo-text"]}>
                <svg
                  className={styles["side-navigation__group-prefix-icon"]}
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use href="#imagesmode"></use>
                </svg>
                <span className={styles["side-navigation__group-text"]}>
                  Video Element
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
              className={getGroupLinkClass(
                isGroupExpanded("video"),
                styles["side-navigation__links-container"],
                styles["side-navigation__links-container--expand"]
              )}
            >
              <NavLink
                to="/video/layout-shift"
                end
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles["side-navigation__link"],
                    styles["side-navigation__link--active"]
                  )
                }
                onClick={handleNavClick}
              >
                Layout shift example
              </NavLink>
              <NavLink
                to="/video/add-width-height"
                end
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles["side-navigation__link"],
                    styles["side-navigation__link--active"]
                  )
                }
                onClick={handleNavClick}
              >
                Add width or height
              </NavLink>
            </div>
          </li> */}
        </ul>
      </aside>
    </nav>
  );
}
