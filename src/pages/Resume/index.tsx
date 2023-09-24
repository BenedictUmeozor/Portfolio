import { Helmet } from "react-helmet";
import styles from "./resume.module.scss";
import { Download, Linkedin } from "react-feather";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume | Benedict Umeozor</title>
      </Helmet>
      <h2 className={styles.h2}>MY RESUME</h2>
      <div className={styles.resume}>
        <div className={styles.header}>
          <h2>Benedict Umeozor</h2>
          <div className={styles.links}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin />
              <span>LinkedIn</span>
            </a>
            <Link to="/src/assets/">
              <Download />
              <span>Download</span>
            </Link>
          </div>
        </div>
        <div className={styles.description}>
          <h5>Frontend Web Developer</h5>
          <p>
            I'm a passionate frontend web developer who loves turning ideas into
            amazing digital experiences. I'm really good at creating smooth and
            user-friendly websites. I use the latest web tools and technologies
            to make websites that not only meet but surpass expectations. Let's
            work together to bring digital dreams to life!
          </p>
        </div>
        <div className={styles.tools}>
          <div>
            <h6>Languages</h6>
            <p>HTML, CSS, JavaScript, TypeScript, PHP</p>
          </div>
          <div>
            <h6>Frameworks</h6>
            <p>Vue.js, Laravel, Tailwind CSS, Material UI</p>
          </div>
          <div>
            <h6>Libraries</h6>
            <p>
              React.js, Firebase, Redux Toolkit, Framer-motion, Axios,
              React-router
            </p>
          </div>
          <div>
            <h6>Familiar with</h6>
            <p>Git, SAAS, Best Practices, SEO</p>
          </div>
          <div>
            <h6>Soft skills</h6>
            <p>Communication, Team work, Problem solving, Creative thinking</p>
          </div>
          <div>
            <h6>Projects</h6>
            <p>
              Links to my peojects can be found{" "}
              <Link to="/portfolio">here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
