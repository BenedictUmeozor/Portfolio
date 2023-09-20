import { Eye, GitBranch } from "react-feather";
import styles from "./project.module.scss";

export default function Project() {
  return (
    <>
      <div className={styles.card}>
        <h4 className={styles.title}>ThoughtForum</h4>
        <div className={styles.tools}>
          <div>react</div>
          <div>express</div>
          <div>laravel</div>
          <div>vue</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
          laborum natus molestias perferendis ea unde maiores provident tempore
          mollitia?
        </p>
        <div className={styles.code}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Eye />
            <span>Live</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GitBranch />
            <span>Code</span>
          </a>
        </div>
      </div>
    </>
  );
}
