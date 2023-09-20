import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./layout.module.scss";
import Footer from "../Footer";

export default function Layout() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
