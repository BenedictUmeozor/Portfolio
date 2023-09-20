import { Link } from "react-router-dom";
import { NavLink as NavLinkInterface } from "../../../helpers/interfaces";
import styles from "./mobile.module.scss";
import { useState } from "react";
import Menu from "./Menu";

type PropTypes = {
  navLinks: NavLinkInterface[];
};

export default function MobileHeader({ navLinks }: PropTypes) {
  const [open, setOpen] = useState(false);

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
      {open && <Menu navLinks={navLinks} closeMenu={() => setOpen(false)} />}
    </>
  );
}
