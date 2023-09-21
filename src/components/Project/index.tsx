import { Code, ExternalLink, GitHub } from "react-feather";
import styles from "./project.module.scss";

export default function Project() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <Code className={styles.code} />
          </div>
          <div className={styles.links}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink />
            </a>
          </div>
        </div>
        <div className={styles.body}>
          <h4>ThoughtForum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            debitis ratione eius aliquid culpa est, laboriosam praesentium minus
            quibusdam omnis?
          </p>
        </div>
        <div className={styles.footer}>
          <span>React</span>
          <span>Firebase</span>
          <span>Node</span>
          <span>Express</span>
        </div>
      </div>
    </>
  );
}
