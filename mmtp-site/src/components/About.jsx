import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section className="section">
      <div className="container">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="title" variants={item}>
            What is MMTP?
          </motion.h2>

          <motion.p className="subtitle" variants={item}>
            MMTP (Modern Market Trade Program) is a structured initiative designed to
            train individuals in international trade, market research, and real-world execution.
          </motion.p>

          <motion.div className="grid-3" variants={container}>

            {[
              {
                title: "Global Trade",
                text: "Understand international markets and trade systems.",
              },
              {
                title: "Market Research",
                text: "Analyze data, competitors, and opportunities.",
              },
              {
                title: "Execution",
                text: "Work on real strategies and business ideas.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="card"
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}