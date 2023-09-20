import { NavLink } from "react-router-dom";
import { NavLink as NavLinkInterface } from "../../../../helpers/interfaces";
import { MobileScreen } from "../../../../screens";
import styles from "./menu.module.scss";
import { AtSign, Facebook, GitHub, Linkedin, Twitter } from "react-feather";
import { MouseEvent } from "react";

type PropTypes = {
  closeMenu: (event: MouseEvent) => void;
  navLinks: NavLinkInterface[];
};

export default function Menu({ navLinks, closeMenu }: PropTypes) {
  return (
    <>
      <MobileScreen>
        <div className={styles.menu}>
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.socialsContainer}>
            <h2>Connect with me</h2>
            <div className={styles.socials}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>
                  <AtSign />
                </span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </MobileScreen>
    </>
  );
}
