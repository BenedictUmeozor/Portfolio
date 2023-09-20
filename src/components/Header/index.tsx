import { v4 as uuidv4 } from "uuid";
import { useThemeContext } from "../../context/theme";
import { useEffect } from "react";
import { DesktopScreen, MobileScreen } from "../../screens";
import DesktopHeader from "./Desktop";
import { NavLink } from "../../helpers/interfaces";
import MobileHeader from "./Mobile";

const navLinks: NavLink[] = [
  {
    id: uuidv4(),
    name: "home",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "portfolio",
    path: "/portfolio",
  },
  {
    id: uuidv4(),
    name: "resume",
    path: "/resume",
  },
  {
    id: uuidv4(),
    name: "contact",
    path: "/contact",
  },
];

export default function Header() {
  const { _setTheme } = useThemeContext();

  const getTheme = () => {
    let userTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    if (localStorage.getItem("theme")) {
      userTheme = JSON.parse(localStorage.getItem("theme")!);
    }
    _setTheme(userTheme);
  };

  useEffect(() => {
    getTheme();
  }, []);

  return (
    <>
      <DesktopScreen>
        <DesktopHeader navLinks={navLinks} />
      </DesktopScreen>
      <MobileScreen>
        <MobileHeader navLinks={navLinks} />
      </MobileScreen>
    </>
  );
}
