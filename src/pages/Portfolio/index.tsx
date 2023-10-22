import Project from "../../components/Project";
import Helmet from "react-helmet";
import styles from "./portfolio.module.scss";
import { projects } from "../../data";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Benedict Umeozor</title>
      </Helmet>
      <div className={styles.portfolio}>
        <h3>MY PROJECTS</h3>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
