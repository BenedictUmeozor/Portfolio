import { DesktopScreen, MobileScreen } from "../../screens";
import DesktopFooter from "./Desktop";
import MobileFooter from "./Mobile";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <DesktopScreen>
        <DesktopFooter />
      </DesktopScreen>
      <MobileScreen>
        <MobileFooter />
      </MobileScreen>
      <div className={styles.copyright}>
        <p>&copy; All rights reserved | Benedict 2023</p>
      </div>
    </footer>
  );
}
