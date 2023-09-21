import Project from "../../components/Project";
import Helmet from "react-helmet";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Benedict Umeozor</title>
      </Helmet>
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
