import { AtSign, Moon, Sun } from "react-feather";
import styles from "./desktop.module.scss";
import { NavLink } from "react-router-dom";
import { NavLink as NavLinkInterface } from "../../../helpers/interfaces";
import { useThemeContext } from "../../../context/theme";

type PropTypes = {
  navLinks: NavLinkInterface[];
};

export default function DesktopHeader({ navLinks }: PropTypes) {
  const { theme, _setTheme } = useThemeContext();

  return (
    <>
      <header className={styles.desktop}>
        <a
          className={styles.logo}
          href="mailto:benedictumeozor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign className={styles.icon} />
          <span>benedictumeozor@gmail.com</span>
        </a>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {theme === "light" ? (
            <>
              <div
                className={styles.themeToggler}
                onClick={() => _setTheme("dark")}
              >
                <Moon className={styles.icon} />
              </div>
            </>
          ) : (
            <div
              className={styles.themeToggler}
              onClick={() => _setTheme("light")}
            >
              <Sun className={styles.icon} />
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
