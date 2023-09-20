import Project from "../../components/Project";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <>
      <div className={styles.portfolio}>
        <h3>MY PROJECTS</h3>
        <div className={styles.projects}>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
      </div>
    </>
  );
}
