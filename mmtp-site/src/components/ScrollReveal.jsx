import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function ScrollReveal({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  const inView = useInView(ref, {
    margin: "-100px", // triggers a bit earlier
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}