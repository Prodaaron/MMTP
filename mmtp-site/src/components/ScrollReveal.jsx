import { motion } from "framer-motion";

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // smoother than easeOut
      }}
      viewport={{ once: true, margin: "-120px" }}
    >
      {children}
    </motion.div>
  );
}