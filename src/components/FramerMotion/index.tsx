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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={width > 768 ? { opacity: 1 } : ""}
      whileInView={width < 768 ? { opacity: 1 } : ""}
      transition={{ delay: width < 768 ? 0.5 : id! / 2, type: "tween" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
