import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

type PropTypes = {
  children: ReactNode;
  className: string;
  id?: number;
};

export const FadeInWhenVisible = ({ children, className, id }: PropTypes) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: width < 768 ? 0.5 : id! / 2,
      },
    },
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate={width > 768 ? "visible" : ""}
      whileInView={width < 768 ? "visible" : ""}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
