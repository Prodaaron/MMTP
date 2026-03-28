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
            <h2 className="sec-header">What is MMTP?</h2>
          </motion.h2>

          <motion.p className="subtitle" variants={item}>
            MMTP (MEHHA Marketing & Trade Program) is a structured initiative designed to
            involve individuals in international trade, market research, and real-world execution.
            Participants gain hands-on experience in navigating global markets, conducting in-depth
            research, and implementing strategies that drive business growth. This program bridges
            the gap between theoretical knowledge and practical application, empowering users to
            engage in meaningful trade activities and contribute to international commerce.
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