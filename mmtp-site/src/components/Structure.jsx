import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Structure() {
  const data = [
    {
      title: "Research Team",
      text: "Import & Export market analysis and strategy.",
    },
    {
      title: "Creative Team",
      text: "Branding, content, and visual identity.",
    },
    {
      title: "Marketing Team",
      text: "Search, gain leads, and reach out.",
    },
  ];

  return (
    <section className="section structure">
      <div className="container">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="title" variants={item}>
            Team Structure
          </motion.h2>

          <motion.div className="grid-3" variants={container}>
            {data.map((card, i) => (
              <motion.div
                key={i}
                className="card"
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
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