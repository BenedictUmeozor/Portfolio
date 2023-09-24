import styles from "./home.module.scss";
import avatar from "../../assets/avatar2.jpeg";
import { MessageSquare } from "react-feather";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Benedict Umeozor</title>
      </Helmet>
      <div className={styles.home}>
        <div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.5 }}
            className={styles.avatar}
          >
            <div className={styles.overlay}></div>
            <img src={avatar} alt="avatar" />
          </motion.div>
          <motion.div className={styles.content}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Hello, I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              Benedict Umeozor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 0.5 }}
              className={styles.intro}
            >
              I'm a <span>frontend web developer</span> who loves transforming
              concepts into <span>user-friendly web apps</span>. I thrive on
              utilizing cutting-edge <span>web tools, tech, and languages</span>{" "}
              to craft <span>exceptional user experiences</span>, whether for
              clients' visions or <span>everyday solutions</span>
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5, duration: 0.5 }}
              href="https://wa.me/2348108218964"
            >
              <span>Lets talk</span>
              <MessageSquare />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
