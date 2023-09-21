import { Link } from "react-router-dom";
import { NavLink as NavLinkInterface } from "../../../helpers/interfaces";
import styles from "./mobile.module.scss";
import { useState } from "react";
import Menu from "./Menu";
import { useThemeContext } from "../../../context/theme";
import { Moon, Sun } from "react-feather";

type PropTypes = {
  navLinks: NavLinkInterface[];
};

export default function MobileHeader({ navLinks }: PropTypes) {
  const [open, setOpen] = useState(false);
  const { _setTheme, theme } = useThemeContext();

  return (
    <>
      <header className={styles.mobile}>
        <Link to="/" className={styles.logo}>
          Benedict.
        </Link>
        <button
          className={`${styles.menuBar} ${open ? styles.opened : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={styles.lineLarge}></div>
          <div className={styles.lineSmall}></div>
        </button>
      </header>
      <div className={styles.icon}>
        {theme === "dark" ? (
          <div onClick={() => _setTheme("light")}>
            <Sun />
          </div>
        ) : (
          <div onClick={() => _setTheme("dark")}>
            <Moon />
          </div>
        )}
      </div>
      {open && <Menu navLinks={navLinks} closeMenu={() => setOpen(false)} />}
    </>
  );
}
