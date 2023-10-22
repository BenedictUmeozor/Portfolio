import { Code, ExternalLink, GitHub } from "react-feather";
import styles from "./project.module.scss";
import { Project as ProjectInterface } from "../../data";
import { FadeInWhenVisible } from "../FramerMotion";

type PropTypes = {
  project: ProjectInterface;
  index: number;
};

export default function Project({ project, index }: PropTypes) {
  return (
    <>
      <FadeInWhenVisible className={styles.card} id={index + 1}>
        <div className={styles.header}>
          <div>
            <Code className={styles.code} />
          </div>
          <div className={styles.links}>
            <a
              href={project.codeRepository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink />
              </a>
            )}
          </div>
        </div>
        <div className={styles.body}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
        <div className={styles.footer}>
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </FadeInWhenVisible>
    </>
  );
}
