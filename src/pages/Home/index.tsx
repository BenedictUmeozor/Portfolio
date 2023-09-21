import styles from "./home.module.scss";
import avatar from "../../assets/funavatar.jpeg";
import { MessageSquare } from "react-feather";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Benedict Umeozor</title>
      </Helmet>
      <div className={styles.home}>
        <div>
          <div className={styles.avatar}>
            <div className={styles.overlay}></div>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.content}>
            <p>Hello, I am</p>
            <h1>Benedict Umeozor</h1>
            <p className={styles.intro}>
              I'm a <span>frontend web developer</span> who loves transforming
              concepts into
              <span>user-friendly web apps</span>. I thrive on utilizing{" "}
              cutting-edge <span>web tools, tech, and languages</span> to craft{" "}
              <span>exceptional user experiences</span>, whether for clients'
              visions or <span>everyday solutions</span>
            </p>
            <a href="#">
              <span>Lets talk</span>
              <MessageSquare />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
