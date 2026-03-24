import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          <h2 className="title">Our Vision</h2>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            MMTP aims to develop individuals capable of operating in global markets,
            building businesses, and contributing to real trade ecosystems.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}